import logging
import os
import threading
import boto3
import uuid
import json


import google.cloud.compute_v1
import google.cloud.compute_v1.types
from google.api_core.extended_operation import ExtendedOperation

from ansible.module_utils.basic import AnsibleModule
from importlib_metadata import metadata

# setup global logging
logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s [%(levelname)s] (%(threadName)s) %(message)s')
logging.getLogger('boto3').setLevel(logging.CRITICAL)
logging.getLogger('botocore').setLevel(logging.CRITICAL)
logging.getLogger('boto').setLevel(logging.CRITICAL)
logging.getLogger('s3transfer').setLevel(logging.CRITICAL)
logging.getLogger('urllib3').setLevel(logging.CRITICAL)

ANSIBLE_METADATA = {
    'metadata_version': '1.1',
    'status': ['preview'],
    'supported_by': 'community'
}

DOCUMENTATION = '''
---
module: cloud_instance

short_description: Creates, updates and deletes role config groups for a given cluster

version_added: "2.9.5"

description:
    - "Creates, updates and deletes new role config groups for a given cluster"

options:
    state:
        description:
            - State of the deployment
        default: "present"
        type: str
        choice: ["present", "absent"]

    deployment:
        description:
            - List of clusters to provision
        default: "[]"
        type: list

requirements: [ "aws", "azure", "gcp" ]

author:
    - Fabio Ghirardello
'''

EXAMPLES = '''
- cloud_instance:
    state: present
    deployment:
      - 
      - 

'''

RETURN = '''
out:
    description: The response that the module generates
    type: dict
    returned: always
meta:
    description: The parameters passed
    type: dict
    returned: always
'''


class CloudInstance:

    def __init__(self, deployment_id: str, present: bool, deployment: list, defaults: dict):

        self.deployment_id = deployment_id
        self.present = present
        self.deployment = deployment
        self.defaults = defaults

        self.threads: list[threading.Thread] = []
        self._lock = threading.Lock()

        self.gcp_project = os.environ.get('GCP_PROJECT', None)
        self.azure_resource_group = os.environ.get(
            'AZURE_RESOURCE_GROUP', None)
        self.new_instances = []
        self.instances = []

    def run(self):

        # fetch all running instances for the deployment_id and append them to the 'instances' list
        logging.debug(
            f"Fetching all instances with deployment_id = '{self.deployment_id}'")
        self.fetch_all(self.deployment_id, self.gcp_project,
                       self.azure_resource_group)

        logging.debug("Listing pre-existing instances:")
        for x in self.instances:
            logging.debug(f'\t{x}')

        # 3. build the deployment: a list of dict with these attributes:
        #    - public_ip
        #    - public_hostname
        #    - private_ip
        #    - private_hostname
        #    - cloud
        #    - region
        #    - zone
        #    - deployment_id
        #    - cluster_name
        #    - group_name
        #    - inventory_groups
        #    - ansible_user
        #    - extra_vars
        #    - the unique cloud identifier (eg aws instance_id, for easy deleting operations)

        # instances of the new deployment will go into the 'new_instances' list
        if self.present:
            logging.debug("Building deployment...")
            self.build_deployment()

        logging.debug("Removing instances...")
        self.destroy_all(self.instances, self.gcp_project,
                         self.azure_resource_group)
        logging.debug("Removed all instances marked for deletion")

        logging.debug("Waiting for all operation threads to complete")
        for x in self.threads:
            x.join()
        logging.debug("All operation threads have completed")

        logging.debug("Returning new deployment list to client")
        return self.new_instances

    def fetch_all(self, deployment_id: str, gcp_project: str, azure_resource_group: str):
        """For each public cloud, fetch all instances 
        with the given deployment_id and return a clean list of instances

        Args:
            deployment_id (str): the value of the tag deployment_id

        Return:
            list[dict]: the list of instances across all clouds
        """
        # AWS
        thread = threading.Thread(
            target=self.fetch_aws_instances, args=(self.deployment_id, ))
        thread.start()
        self.threads.append(thread)

        # GCP
        if gcp_project:
            thread = threading.Thread(target=self.fetch_gcp_instances, args=(
                self.deployment_id, self.gcp_project))
            thread.start()
            self.threads.append(thread)

        # AZURE
        if azure_resource_group:
            thread = threading.Thread(
                target=self.fetch_azure_instances, args=(self.deployment_id, ))
            thread.start()
            self.threads.append(thread)

        # wait for all threads to complete
        for x in self.threads:
            x.join()

    def parse_aws_query(self, response):
        instances: list = []

        for x in response['Reservations']:
            for i in x['Instances']:
                tags = {}
                for t in i['Tags']:
                    tags[t['Key']] = t['Value']

                instances.append({
                    # cloud instance id, useful for deleting
                    "id": i['InstanceId'],

                    # locality
                    "cloud": "aws",
                    "region": i['Placement']['AvailabilityZone'][:-1],
                    "zone": i['Placement']['AvailabilityZone'][-1],

                    # addresses
                    "public_ip": i['PublicIpAddress'],
                    "public_hostname": i['PublicDnsName'],
                    "private_ip": i['PrivateIpAddress'],
                    "private_hostname": i['PrivateDnsName'],

                    # tags
                    "ansible_user": tags['ansible_user'],
                    "inventory_groups": tags['inventory_groups'],
                    "cluster_name": tags['cluster_name'],
                    "group_name": tags['group_name'],
                    "extra_vars": tags['extra_vars']
                })
        return instances

    def parse_gcp_query(self, instance: google.cloud.compute_v1.types.compute.Instance, region, zone):
        
        tags = {}
        for x in instance.metadata.items:
            tags[x.key] = x.value
        
        ip = instance.network_interfaces[0].access_configs[0].nat_i_p.split('.')
        public_dns = '.'.join([ip[3], ip[2], ip[1], ip[0], 'bc.googleusercontent.com'])
        
        return {
                # cloud instance id, useful for deleting
                "id": instance.name,

                # locality
                "cloud": "gcp",
                "region": region,
                "zone": zone,

                # addresses
                "public_ip": instance.network_interfaces[0].access_configs[0].nat_i_p,
                "public_hostname": public_dns,
                "private_ip": instance.network_interfaces[0].network_i_p,
                "private_hostname": f"{instance.name}.c.cea-team.internal",

                # tags
                "ansible_user": tags['ansible_user'],
                "inventory_groups": json.loads(tags['inventory_groups']),
                "cluster_name": tags['cluster_name'],
                "group_name": tags['group_name'],
                "extra_vars": json.loads(tags.get('extra_vars', '{}'))
            }
    
    def fetch_aws_instances_per_region(self, region, deployment_id):
        logging.debug(f'Fetching AWS instances from {region}')

        ec2 = boto3.client('ec2', region_name=region)
        response = ec2.describe_instances(
            Filters=[{'Name': 'instance-state-name', 'Values': ['pending', 'running']},
                     {'Name': 'tag:deployment_id', 'Values': [deployment_id]}])

        instances: list = self.parse_aws_query(response)

        self.update_current_deployment(instances)

    def fetch_aws_instances(self, deployment_id: str):
        logging.debug(
            f"Fetching AWS instances for deployment_id={deployment_id}")

        threads: list[threading.Thread] = []

        ec2 = boto3.client('ec2')
        regions = [x['RegionName'] for x in ec2.describe_regions()['Regions']]

        for region in regions:
            thread = threading.Thread(target=self.fetch_aws_instances_per_region, args=(
                region, deployment_id), daemon=True)
            thread.start()
            threads.append(thread)

        for x in threads:
            x.join()

    def fetch_gcp_instances(self, deployment_id: str, project_id: str):
        """
        Return a dictionary of all instances present in a project, grouped by their zone.

        Args:
            project_id: project ID or project number of the Cloud project you want to use.
        Returns:
            A dictionary with zone names as keys (in form of "zones/{zone_name}") and
            iterable collections of Instance objects as values.
        """
        logging.debug(
            f"Fetching GCP instances for deployment_id={deployment_id}")

        instance_client = google.cloud.compute_v1.InstancesClient()
        # Use the `max_results` parameter to limit the number of results that the API returns per response page.
        request = google.cloud.compute_v1.AggregatedListInstancesRequest(
            project=project_id, max_results=5, filter=f'labels.deployment_id:{deployment_id}')

        agg_list = instance_client.aggregated_list(request=request)
        instances = []

        # Despite using the `max_results` parameter, you don't need to handle the pagination
        # yourself. The returned `AggregatedListPager` object handles pagination
        # automatically, returning separated pages as you iterate over the results.
        for zone, response in agg_list:
            if response.instances:
                for x in response.instances:
                    instances.append(self.parse_gcp_query(x, zone[6:-2], zone[-1]))

        self.update_current_deployment(instances)

    def fetch_azure_instances(self, deployment_id: str):
        logging.debug(
            f"Fetching Azure instances for deployment_id={deployment_id}")
        return

        self.update_current_deployment(instances)

    def update_current_deployment(self, instances: list):
        with self._lock:
            logging.debug("Updating pre-existing instances list")
            self.instances += instances

    def update_new_deployment(self, instances: list):
        with self._lock:
            logging.debug("Updating new instances list")
            self.new_instances += instances

    # 4. loop through the 'deployment' struct
    #    - through each cluster and copies
    #    - through each group within each cluster
    def build_deployment(self):
        # loop through each cluster item in the deployment list
        for cluster in self.deployment:

            # extract the cluster name for all copies,
            # then, for each requested copy, add the index suffix
            cluster_name: str = cluster['cluster_name']
            for x in range(int(cluster.get('copies', 1))):
                self.build_cluster(f'{cluster_name}-{x}', cluster)

    def build_cluster(self, cluster_name: str, cluster: dict):

        # for each group in the cluster,
        # put all cluster defaults into the group
        for group in cluster.get('groups', []):
            self.build_group(cluster_name, self.merge_dicts(cluster, group))

    # 5. for each group, compare what is in 'deployment' to what is in 'current_deployment':
    #     case NO DIFFERENCE
    #       return the details in current_deployment
    #
    #     case TOO FEW
    #       for each exact count, start a thread to create the requested instance
    #       return current_deployment + the details of the newly created instances
    #
    #     case TOO MANY
    #        for each instance that's too many, start a thread to destroy the instance
    #        return current_deployment minus what was distroyed
    def build_group(self, cluster_name, group: dict):
        # get all instances in the current group
        current_group = []
        for x in self.instances[:]:
            if x['cluster_name'] == cluster_name and x['group_name'] == group['group_name']:
                current_group.append(x)
                self.instances.remove(x)

        current_count = len(current_group)
        new_exact_count = group.get('exact_count', 0)

        # CASE 1
        if current_count == new_exact_count:
            pass

        # CASE 2: ADD instances
        elif current_count < new_exact_count:
            target = {
                'aws': self.provision_aws_vm,
                'gcp': self.provision_gcp_vm,
                'azure': self.provision_azure_vm
            }

            for x in range(new_exact_count - current_count):
                thread = threading.Thread(
                    target=target[group['cloud']], args=(cluster_name, group, x))
                thread.start()
                self.threads.append(thread)

        # CASE 3: REMOVE instances
        else:
            for x in range(current_count - new_exact_count):
                self.instances.append(current_group.pop(-1))

        self.update_new_deployment(current_group)

    def provision_aws_vm(self, cluster_name: str, group: dict, x: int):
        logging.debug('++aws %s %s %s' %
                      (cluster_name, group['group_name'], x))

        # volumes
        def get_type(x):
            return {
                'standard_ssd': 'gp3',
                'premium_ssd': 'io2',
                'standard_hdd': 'sc1',
                'premium_hdd': 'st1'
            }.get(x, 'gp3')

        vols = [group['volumes']['os']] + group['volumes']['data']

        bdm = []

        for i, x in enumerate(vols):
            dev = {
                'DeviceName': '/dev/sd' + (chr(ord('e')+i)),
                'Ebs': {
                    'VolumeSize': int(x.get('size', 100)),
                    'VolumeType': get_type(x.get('type', 'standard_ssd')),
                    'DeleteOnTermination': bool(x.get('delete_on_termination', True)),
                }
            }

            if x.get('type', 'standard_ssd') in ['premium_ssd', 'standard_ssd']:
                dev['Ebs']['Iops'] = int(x.get('iops', 3000))

            if x.get('throughput', False) and x.get('type', 'standard_ssd') == 'standard_ssd':
                dev['Ebs']['Throughput'] = x.get('throughput', 125)

            bdm.append(dev)

        # hardcoded value for root
        bdm[0]['DeviceName'] = '/dev/sda1'

        # tags
        tags = [{'Key': k, "Value": v} for k, v in group['tags'].items()]
        tags.append({'Key': 'deployment_id', 'Value': self.deployment_id})
        tags.append({'Key': 'ansible_user', 'Value': group['user']})
        tags.append({'Key': 'cluster_name', 'Value': cluster_name})
        tags.append({'Key': 'group_name', 'Value': group['group_name']})
        tags.append({'Key': 'inventory_groups',
                    'Value': str(group['inventory_groups'])})
        tags.append({'Key': 'extra_vars', 'Value': str(
            group.get('extra_vars', {}))})

        ec2 = boto3.client('ec2', region_name=group['region'])
        response = ec2.run_instances(
            DryRun=False,
            BlockDeviceMappings=bdm,
            ImageId=group['image'],
            InstanceType=self.get_instance_type(group),
            KeyName=group['public_key_id'],
            MaxCount=1,
            MinCount=1,
            UserData=group['user_data'],
            IamInstanceProfile={
                'Name': group['role']
            },
            NetworkInterfaces=[{
                "Groups": group['security_groups'],
                "DeviceIndex": 0,
                "SubnetId": group['subnet'],
                "AssociatePublicIpAddress": group['public_ip']
            }],
            TagSpecifications=[
                {
                    'ResourceType': 'instance',
                    'Tags': tags,
                },
            ],
        )

        # wait until instance is running
        waiter = ec2.get_waiter('instance_running')
        waiter.wait(InstanceIds=[response['Instances'][0]['InstanceId']])

        # fetch details about the newly created instance
        response = ec2.describe_instances(
            InstanceIds=[response['Instances'][0]['InstanceId']])

        # add the instance to the list
        self.update_new_deployment(self.parse_aws_query(response))

    def provision_gcp_vm(self, cluster_name: str, group: dict, x: int):
        logging.debug('++gcp %s %s %s' % (cluster_name, group['group_name'], x))
        
        gcpzone = '-'.join([group['region'], group['zone']])
        instance_name = '-'.join(['i'] + str(uuid.uuid4()).split('-')[3:])
        instance_client = google.cloud.compute_v1.InstancesClient()

        # volumes
        def get_type(x):
            return {
                'standard_ssd': 'pd-balanced',
                'premium_ssd': 'pd-ssd',
                'local_ssd': 'local-ssd',
                'standard_hdd': 'pd-standard',
                'premium_hdd': 'pd-standard'
            }.get(x, 'pd-standard')
        
        vols = []
        
        boot_disk = google.cloud.compute_v1.AttachedDisk()
        boot_disk.boot = True
        initialize_params = google.cloud.compute_v1.AttachedDiskInitializeParams()
        initialize_params.source_image = group['image']
        initialize_params.disk_size_gb = int(group['volumes']['os'].get('size', 30))
        initialize_params.disk_type = 'zones/%s/diskTypes/%s' % (gcpzone, get_type(group['volumes']['os'].get('type', 'standard_ssd')))
        boot_disk.initialize_params = initialize_params
        boot_disk.auto_delete = group['volumes']['os'].get('delete_on_termination', True)
        vols.append(boot_disk)
        
        for i, x in enumerate(group['volumes']['data']):
            disk = google.cloud.compute_v1.AttachedDisk()
            init_params = google.cloud.compute_v1.AttachedDiskInitializeParams()
            init_params.disk_type = 'zones/%s/diskTypes/%s' % (gcpzone, get_type(x.get('type', 'standard_ssd')))
            init_params.disk_size_gb = int(x.get('size', 100))
            disk.initialize_params = init_params
            disk.auto_delete = x.get('delete_on_termination', True)
            disk.device_name = f'disk-{i}'
            vols.append(disk)
        
        # tags
        tags = google.cloud.compute_v1.types.Metadata()
        item = google.cloud.compute_v1.types.Items()
        l = []
        
        for k, v in group.get('tags', {}).items():
            item = google.cloud.compute_v1.types.Items()
            item.key = k
            item.value = v
            l.append(item)
        
        item = google.cloud.compute_v1.types.Items()
        item.key = 'ansible_user'
        item.value = group['user']
        l.append(item)
        
        item = google.cloud.compute_v1.types.Items()
        item.key = 'cluster_name'
        item.value = cluster_name
        l.append(item)
        
        item = google.cloud.compute_v1.types.Items()
        item.key = 'group_name'
        item.value = group['group_name']
        l.append(item)
        
        item = google.cloud.compute_v1.types.Items()
        item.key = 'inventory_groups'
        item.value = json.dumps(group['inventory_groups'])
        l.append(item)
        
        item = google.cloud.compute_v1.types.Items()
        item.key = 'extra_vars'
        item.value = json.dumps(group.get('extra_vars', {}))
        l.append(item)
        
        tags.items = l
        
        # Use the network interface provided in the network_link argument.
        network_interface = google.cloud.compute_v1.NetworkInterface()
        network_interface.name = group['subnet']

        if group['public_ip']:
            access = google.cloud.compute_v1.AccessConfig()
            access.type_ = google.cloud.compute_v1.AccessConfig.Type.ONE_TO_ONE_NAT.name
            access.name = "External NAT"
            access.network_tier = access.NetworkTier.PREMIUM.name

            network_interface.access_configs = [access]

        # Collect information into the Instance object.
        instance = google.cloud.compute_v1.Instance()
        instance.name = instance_name
        instance.disks = vols
        instance.machine_type = f'zones/{gcpzone}/machineTypes/{self.get_instance_type(group)}'
        instance.metadata = tags
        instance.labels = {'deployment_id': self.deployment_id}
        
        t = google.cloud.compute_v1.Tags()
        t.items = group['security_groups']
        instance.tags = t

        instance.network_interfaces = [network_interface]     

        # Wait for the create operation to complete.
        operation = instance_client.insert(
            instance_resource = instance,
            project=self.gcp_project,
            zone=gcpzone)
            
        self.wait_for_extended_operation(operation)

        logging.debug(f"GCP instance created: {instance.name}")

        # fetch details
        instance = instance_client.get(
            project = self.gcp_project,
            zone = gcpzone,
            instance = instance_name)


        # add the instance to the list
        self.update_new_deployment([self.parse_gcp_query(instance, group['region'], group['zone'])])

    def provision_azure_vm(self, cluster_name: str, group: dict, x: int):
        logging.debug('++azure %s %s %s' % (cluster_name, group, x))
        instance = ''
        # add the instance to the list
        self.update_new_deployment(self.parse_azure_query(instance))

    def destroy_all(self, instances: list, gcp_project: str, azure_resource_group: str):
        target = {
            'aws': self.destroy_aws_vm,
            'gcp': self.destroy_gcp_vm,
            'azure': self.destroy_azure_vm
        }

        for x in instances:
            thread = threading.Thread(target=target[x['cloud']], args=(x, ))
            thread.start()
            self.threads.append(thread)

    def destroy_aws_vm(self, instance: dict):
        logging.debug(f'--aws {instance}')

        ec2 = boto3.client('ec2', region_name=instance['region'])

        response = ec2.terminate_instances(InstanceIds=[instance['id']], )

        status = response['TerminatingInstances'][0]['CurrentState']['Name']

        if status in ['shutting-down', 'terminated']:
            logging.debug(f'Deleted AWS instance: {instance}')
        else:
            logging.error('Unexpected response: {response}}')

    def destroy_gcp_vm(self, instance: dict):
        logging.debug(f'--gcp {instance}')
        """
        Send an instance deletion request to the Compute Engine API and wait for it to complete.

        Args:
            project_id: project ID or project number of the Cloud project you want to use.
            zone: name of the zone you want to use. For example: “us-west3-b”
            machine_name: name of the machine you want to delete.
        """
        
        instance_client = google.cloud.compute_v1.InstancesClient()

        operation = instance_client.delete(
            project=self.gcp_project,
            zone='-'.join([instance['region'], instance['zone']]),
            instance=instance['id']
        )
        self.wait_for_extended_operation(operation)
        logging.debug(f"Deleting GCP instance: {instance}")

    def destroy_azure_vm(self, instance: dict):
        logging.debug(f'--azure {instance}')

    # UTIL METHODS
    # =========================================================================
    def get_instance_type(self, group):
        # instance type
        gpu = str(group['instance'].get('gpu', "0"))
        cpu = str(group['instance'].get('cpu', "0"))
        mem = str(group['instance'].get('mem', "0"))
        cloud = group['cloud']
        return self.defaults['instances'][cloud][gpu][cpu][mem]
        
    def merge_dicts(self, parent: dict, child: dict):
        for k, v in parent.items():
            if not k in child:
                child[k] = v

        # merge the items in tags, child overrides parent
        tags_dict = parent.get('tags', {})
        for k, v in child.get('tags', {}).items():
            tags_dict[k] = v

        child['tags'] = tags_dict

        # aggregate the inventory groups
        child['inventory_groups'] = parent.get(
            'inventory_groups', []) + child.get('inventory_groups', [])

        # aggregate the security groups
        child['security_groups'] = parent.get(
            'security_groups', []) + child.get('security_groups', [])

        # aggregate the volumes
        # TODO

        return child

    def wait_for_extended_operation(self, operation: ExtendedOperation):

        result = operation.result(timeout=300)

        if operation.error_code:
            logging.debug(
                f"GCP Error: {operation.error_code}: {operation.error_message}")

        return result


def main():
    module = AnsibleModule(
        argument_spec=dict(
            state=dict(type='str', default="present",
                       choices=['present', 'absent']),
            deployment_id=dict(type='str', required=True),
            deployment=dict(type='list', default=[]),
            defaults=dict(type='dict', default={}),
        ),
        supports_check_mode=False,
    )

    try:
        ci = CloudInstance(module.params['deployment_id'],
                           True if module.params['state'] == 'present' else False,
                           module.params['deployment'],
                           module.params['defaults'])

        g = ci.run()

        logging.debug("Deployment instances list:")
        for x in g:
            logging.debug(f'\t{x}')

        # Outputs
        changed: bool = False
        out: dict = {}

        module.exit_json(changed=changed, out=out)

    except Exception as e:
        module.fail_json(msg=e)


if __name__ == '__main__':
    main()
