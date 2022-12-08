Search.setIndex({"docnames": ["collections/fabiog1901/cockroachdb/cc_cluster_info_module", "collections/fabiog1901/cockroachdb/cc_cluster_module", "collections/fabiog1901/cockroachdb/cc_cmek_info_module", "collections/fabiog1901/cockroachdb/cc_database_info_module", "collections/fabiog1901/cockroachdb/cc_database_module", "collections/fabiog1901/cockroachdb/cc_invoice_info_module", "collections/fabiog1901/cockroachdb/cc_logexport_info_module", "collections/fabiog1901/cockroachdb/cc_logexport_module", "collections/fabiog1901/cockroachdb/cc_networking_info_module", "collections/fabiog1901/cockroachdb/cc_regions_info_module", "collections/fabiog1901/cockroachdb/cc_user_info_module", "collections/fabiog1901/cockroachdb/cc_user_module", "collections/fabiog1901/cockroachdb/cloud_instance_module", "collections/fabiog1901/cockroachdb/index", "collections/fabiog1901/index", "collections/index", "collections/index_module", "index"], "filenames": ["collections/fabiog1901/cockroachdb/cc_cluster_info_module.rst", "collections/fabiog1901/cockroachdb/cc_cluster_module.rst", "collections/fabiog1901/cockroachdb/cc_cmek_info_module.rst", "collections/fabiog1901/cockroachdb/cc_database_info_module.rst", "collections/fabiog1901/cockroachdb/cc_database_module.rst", "collections/fabiog1901/cockroachdb/cc_invoice_info_module.rst", "collections/fabiog1901/cockroachdb/cc_logexport_info_module.rst", "collections/fabiog1901/cockroachdb/cc_logexport_module.rst", "collections/fabiog1901/cockroachdb/cc_networking_info_module.rst", "collections/fabiog1901/cockroachdb/cc_regions_info_module.rst", "collections/fabiog1901/cockroachdb/cc_user_info_module.rst", "collections/fabiog1901/cockroachdb/cc_user_module.rst", "collections/fabiog1901/cockroachdb/cloud_instance_module.rst", "collections/fabiog1901/cockroachdb/index.rst", "collections/fabiog1901/index.rst", "collections/index.rst", "collections/index_module.rst", "index.rst"], "titles": ["fabiog1901.cockroachdb.cc_cluster_info module \u2013 List clusters owned by an organization.", "fabiog1901.cockroachdb.cc_cluster module \u2013 List clusters owned by an organization.", "fabiog1901.cockroachdb.cc_cmek_info module \u2013 Get CMEK-related information for a cluster.", "fabiog1901.cockroachdb.cc_database_info module \u2013 List databases for a cluster.", "fabiog1901.cockroachdb.cc_database module \u2013 Manage databases for a cluster.", "fabiog1901.cockroachdb.cc_invoice_info module \u2013 List invoices for a given organization.", "fabiog1901.cockroachdb.cc_logexport_info module \u2013 Get the Log Export configuration for a cluster.", "fabiog1901.cockroachdb.cc_logexport module \u2013 Manage log export configuration.", "fabiog1901.cockroachdb.cc_networking_info module \u2013 List networking details for a cluster.", "fabiog1901.cockroachdb.cc_regions_info module \u2013 List the regions available for new clusters and nodes.", "fabiog1901.cockroachdb.cc_user_info module \u2013 List SQL users for a cluster.", "fabiog1901.cockroachdb.cc_user module \u2013 Manage users for a cluster.", "fabiog1901.cockroachdb.cloud_instance module \u2013 Creates, updates and deletes public cloud instances", "fabiog1901.cockroachdb", "Collections in the fabiog1901 Namespace", "Collection Index", "Index of all Modules", "Welcome to my Ansible collection documentation"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "part": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "version": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17], "To": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "instal": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "us": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "ansibl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "galaxi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "you": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "need": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "further": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "abl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "see": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17], "detail": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 16], "playbook": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "specifi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "A": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "cockroach": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "cloud": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 16], "servic": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "account": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "api": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "kei": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "export": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 13, 16], "environ": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "variabl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "cc_kei": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "pass": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "invok": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "below": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "host": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13], "execut": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "client": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "comment": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "api_cli": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "string": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "defin": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "api_vers": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "default": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "latest": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "log": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 13, 16], "redact": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "By": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "read": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "env": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "hostnam": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "server": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "cockroachlab": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "path": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "endpoint": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "port": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "number": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "443": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "scheme": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "http": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17], "choic": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "verify_ssl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "boolean": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "whether": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "should": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "verifi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "cert": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "fals": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "true": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "provid": [0, 1, 2, 5, 7, 8, 9], "option": [0, 1, 5, 9], "cloudprovid": 9, "filter": [7, 9], "must": [], "written": [], "sentenc": [], "aw": [0, 1, 5, 6, 7, 8, 9], "gcp": [0, 1, 5, 6, 7, 8, 9], "all": [0, 1, 2, 5, 6, 7, 8, 9, 17], "serverless": [0, 1, 5, 9], "onli": [0, 1, 5, 8, 9], "show": [0, 1, 6, 8, 9], "name": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "cc": [0, 1, 9], "exclud": 9, "2022": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "09": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "20": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "regist": [0, 1, 4, 7, 8, 9, 11], "out": [0, 1, 4, 7, 8, 9, 11, 12], "common": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "document": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15], "here": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "follow": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "field": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "uniqu": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "descript": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "element": [0, 1, 2, 3, 5, 7, 8, 9, 10], "dictionari": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "alwai": [0, 1, 2, 3, 5, 6, 8, 9, 10, 12], "sampl": [0, 1, 3, 9, 10], "distanc": 9, "202": 9, "76012": 9, "locat": [0, 1, 2, 5, 7, 9], "n": 9, "virginia": 9, "u": [0, 1, 5, 7, 8, 9], "east4": 9, "integ": [0, 1, 3, 5, 8, 9], "mile": 9, "base": 9, "ip": [0, 1, 5, 8, 9], "address": 9, "success": [0, 1, 2, 4, 5, 6, 7, 8, 11], "lab": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "issu": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "tracker": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "homepag": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "repositori": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "sourc": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "plugin": [], "wa": [2, 8], "malform": [], "error": [6, 7], "were": [], "valid": 8, "moduledocschema": [], "doc": 13, "state": [0, 1, 2, 4, 5, 6, 7, 8, 11, 12], "extra": [], "permit": [0, 1, 5], "type": [0, 1, 2, 5, 6, 7, 8], "value_error": [], "file": [], "bug": 2, "collect": 13, "order": [], "have": [0, 1, 8], "correct": [], "deploi": [6, 7, 13], "author": 13, "fabio": [7, 11, 12, 13], "ghirardello": [12, 13], "These": [13, 14, 15], "cc_regions_info": [13, 16], "list": [2, 7, 13, 16], "region": [0, 1, 2, 5, 7, 8, 13, 16], "avail": [0, 8, 13, 16], "new": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 16], "cluster": [5, 7, 13, 16], "node": [0, 1, 5, 7, 13, 16], "cloud_inst": [13, 16], "cockroachdb": [14, 15, 17], "fabiog1901": [15, 17], "copyright": 17, "c": 17, "project": [6, 7, 17], "gnu": 17, "gener": [12, 17], "public": [13, 16, 17], "licens": 17, "v3": 17, "gpl": 17, "3": 17, "later": 17, "txt": 17, "www": 17, "org": [0, 1, 17], "spdx": 17, "identifi": [0, 1, 5, 6, 7, 8, 17], "docsit": 17, "contain": [2, 5, 6, 7, 8, 17], "modul": 17, "valu": [], "cluster_id": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11], "uuid": [0, 1, 2, 3, 4, 6, 7, 8, 10, 11], "want": [0, 1, 4, 7, 8, 11], "get": [0, 1, 4, 7, 8, 11, 13, 16], "inform": [0, 1, 4, 6, 7, 8, 11, 13, 16], "omit": [0, 1, 7], "full": [0, 1], "under": [0, 1, 5], "show_inact": [0, 1], "If": [0, 1, 7, 8], "been": [0, 1, 8], "delet": [0, 1, 4, 5, 8, 11, 13, 16], "fail": [0, 1, 2, 8], "initi": [0, 1, 8], "my": [0, 1, 2, 3, 5, 6, 7, 10], "There": [], "some": [0, 1, 6, 7], "pars": [], "pleas": [], "unabl": [], "normal": [], "return": [], "due": [], "6": 3, "pluginreturnschema": [], "cloud_provid": [0, 1, 5, 8], "doe": [], "match": [], "regex": [], "ani": [0, 1, 5, 6, 7], "bit": [], "bool": [], "byte": [], "complex": [], "dict": [], "float": [], "int": [], "json": [], "jsonarg": [], "sid": [], "str": [], "pathspec": [], "pathlist": [], "pattern": [], "config": [0, 1, 5, 6, 7], "type_error": [], "routing_id": [0, 1, 5], "spend_limit": [0, 1, 5], "created_at": [0, 1, 2, 5, 6, 7, 8], "cc_clusters_info": 1, "own": [13, 16], "an": [2, 5, 6, 7, 8, 13, 16], "organ": [13, 16], "5": [0, 1], "account_id": [0, 1, 5], "crl": [0, 1], "abcd": [0, 1], "fg5": [0, 1], "cockroach_vers": [0, 1, 5], "v22": [0, 1], "7": [0, 1], "dedic": [0, 1, 5], "disk_iop": [0, 1, 5], "450": [0, 1], "machine_typ": [0, 1, 5], "n1": [0, 1], "standard": [0, 1, 5], "2": [0, 1, 3], "memory_gib": [0, 1], "num_virtual_cpu": [0, 1, 5], "storage_gib": [0, 1, 5], "15": [0, 1], "07t15": [0, 1], "38": [0, 1], "55": [0, 1], "339299z": [0, 1], "creator_id": [0, 1, 5], "zz895zzz": [0, 1], "0307": [0, 1], "471z": [0, 1], "1234": [0, 1], "123zzzzzzzz": [0, 1], "deleted_at": [0, 1, 5], "null": [0, 1], "id": [0, 1, 5, 6, 7, 8], "25fe8ad": [0, 1], "4d8b": [0, 1], "506ed445eed7": [0, 1], "good": [0, 1], "operation_statu": [0, 1, 5], "cluster_status_unspecifi": [0, 1, 5], "plan": [0, 1, 5], "internal_dn": [0, 1, 5], "west2": [0, 1], "node_count": [0, 1, 5], "sql_dn": [0, 1, 5], "gp7": [0, 1], "ui_dn": [0, 1, 5], "admin": [0, 1], "creat": [0, 1, 4, 5, 6, 7, 8, 11, 13, 16], "updated_at": [0, 1, 2, 5, 6, 7], "10": [0, 1], "20t17": [0, 1], "58": [0, 1], "41": [0, 1], "008978z": [0, 1], "googl": [0, 1, 5, 7, 8], "platform": [0, 1, 5, 6, 7, 8], "amazon": [0, 1, 5, 8], "web": [0, 1, 5, 8], "allow": [0, 1, 2, 4, 5, 6, 7, 8, 11], "either": [0, 1, 5, 6, 7, 8], "present": [0, 1, 4, 5, 7, 11, 12], "diskiop": [0, 1, 5], "disk": [0, 1, 5], "o": [0, 1, 5], "oper": [0, 1, 5, 7], "per": [0, 1, 5], "second": [0, 1, 5], "each": [0, 1, 2, 5, 6, 7], "zero": [0, 1, 5], "indic": [0, 1, 2, 5, 8], "specif": [0, 1, 2, 5, 6, 7], "machinetyp": [0, 1, 5], "machin": [0, 1, 5], "within": [0, 1, 2, 5], "given": [0, 1, 8, 13, 16], "ex": [0, 1, 5], "m5": [0, 1, 5], "xlarg": [0, 1, 5], "n2": [0, 1, 5], "4": [0, 1, 5], "numvirtualcpu": [0, 1, 5], "virtual": [0, 1, 5], "cpu": [0, 1, 5], "storagegib": [0, 1, 5], "storag": [0, 1, 5], "gib": [0, 1, 5], "build": [0, 1, 5], "connect": [0, 1, 5, 8], "spend": [0, 1, 5], "limit": [0, 1, 5], "cent": [0, 1, 5], "crdb_major_upgrade_run": [0, 1, 5], "crdb_major_upgrade_fail": [0, 1, 5], "crdb_major_rollback_run": [0, 1, 5], "crdb_major_rollback_fail": [0, 1, 5], "crdb_patch_run": [0, 1, 5], "crdb_patch_fail": [0, 1, 5], "crdb_scale_run": [0, 1, 5], "crdb_scale_fail": [0, 1, 5], "maintenance_run": [0, 1, 5], "crdb_instance_update_run": [0, 1, 5], "crdb_instance_update_fail": [0, 1, 5], "crdb_edit_cluster_run": [0, 1, 5], "crdb_edit_cluster_fail": [0, 1, 5], "crdb_cmek_operation_run": [0, 1, 5], "crdb_cmek_operation_fail": [0, 1, 5], "tenant_restore_run": [0, 1, 5], "tenant_restore_fail": [0, 1, 5], "crdb_log_export_operation_run": [0, 1, 5], "crdb_log_export_operation_fail": [0, 1, 5], "paid": [0, 1, 5], "offer": [0, 1, 5], "hardwar": [0, 1, 5], "custom": [0, 1, 2, 5, 6, 7, 8], "whose": [0, 1, 5], "support": [0, 1, 5], "self": [0, 1, 5], "invoic": [0, 1, 13, 16], "run": [0, 1, 5], "share": [0, 1, 5], "cap": [0, 1, 5], "user": [0, 1, 5, 6, 7, 13, 16], "maximum": [0, 1, 5], "monthli": [0, 1, 5], "possibli": [0, 1, 5], "amount": [0, 1, 5], "internaldn": [0, 1, 5], "intern": [0, 1, 5], "dn": [0, 1, 5], "": [0, 1, 2, 5, 6, 7], "network": [0, 1, 5, 13, 16], "It": [0, 1, 5], "privatelink": [0, 1, 5, 8], "vpc": [0, 1, 5], "peer": [0, 1, 5], "nodecount": [0, 1, 5], "sqldn": [0, 1, 5], "sql": [0, 1, 5, 8, 13, 16], "interfac": [0, 1, 5], "allowlist": [0, 1, 5, 8], "uidn": [0, 1, 5], "when": [0, 1, 2, 5, 6, 7], "db": [0, 1, 5], "consol": [0, 1, 5], "lock": [0, 1, 5], "exclus": [0, 1, 5], "being": [0, 1, 2, 5], "perform": [0, 1, 5], "other": [0, 1, 5], "proce": [0, 1, 5], "thei": [0, 1, 5, 7], "did": [0, 1, 5], "set": [0, 1, 5, 7, 8], "creation_fail": [0, 1, 5], "deploy": [6, 7, 12], "absent": [4, 11, 12], "meta": 12, "respons": 12, "updat": [2, 13, 16], "instanc": [13, 16], "date": [0, 1, 5], "time": [0, 1, 5, 8], "9592afea": [3, 6, 10], "2bf8": [3, 6, 10], "4dc1": [3, 6, 10], "95ec": [3, 6, 10], "9369b7f684ca": [3, 6, 10], "bank": 3, "table_count": [3, 4], "mw_payments_db": 3, "18": 3, "defaultdb": 3, "movr": 3, "miss": [], "spec": [2, 6, 7], "statu": [0, 2, 6, 7, 8], "user_messag": [2, 6, 7], "chad": 10, "florenc": 10, "cc_databases_info": [], "databas": [13, 16], "cc_logexport_info": [13, 16], "configur": [13, 16], "cc_users_info": [], "logexportclusterspecif": [6, 7], "data": [6, 7], "necessari": [2, 6, 7], "individu": [6, 7], "would": [6, 7], "suppli": [6, 7], "via": [6, 7], "also": [5, 6, 7], "receiv": [6, 7], "back": [6, 7], "inspect": [6, 7], "auth_princip": [2, 6, 7], "role": [6, 7, 13], "arn": [6, 7], "can": [6, 7], "assum": [6, 7], "write": [6, 7], "cloudwatch": [6, 7], "ha": [2, 6, 7], "permiss": [2, 6, 7], "log_nam": [6, 7], "sink": [6, 7], "logexporttyp": [6, 7], "encod": [6, 7], "select": [6, 7], "we": [6, 7], "re": [6, 7], "along": [6, 7], "current": [2, 6, 7], "singl": [6, 7], "aws_cloudwatch": [6, 7], "gcp_cloud_log": [6, 7], "logexportstatu": [6, 7], "possibl": [6, 7], "disabl": [2, 6, 7], "disable_fail": [2, 6, 7], "enabl": [2, 6, 7], "enable_fail": [2, 6, 7], "invoice_id": 5, "cc_invoices_info": [], "sort": 5, "periodstart": 5, "messag": [5, 6, 7], "repres": 5, "total": 5, "charg": 5, "associ": [5, 8], "one": [2, 5, 7], "bill": 5, "period": 5, "which": [5, 7, 8], "start": 5, "begin": 5, "month": 5, "end": [5, 8], "next": 5, "includ": [2, 5, 7, 8], "about": 5, "item": [5, 7], "balanc": 5, "currenc": 5, "left": 5, "quantiti": 5, "cockroachcloud": 5, "usd": 5, "crdb_cloud_credit": 5, "invoice_item": 5, "invoiceitem": 5, "line_item": 5, "lineitem": 5, "relev": 5, "line": 5, "from": [2, 5, 7], "metronom": 5, "e": [5, 8], "t3": 5, "micro": 5, "quantity_unit": 5, "quantityunittyp": 5, "unit": 5, "hour": 5, "request_unit": 5, "unit_cost": 5, "unitcost": 5, "cost": 5, "period_end": 5, "periodend": 5, "period_start": 5, "inclus": 5, "cmekclusterinfo": 2, "across": 2, "entir": 2, "its": [2, 6, 7], "region_info": 2, "cmekregioninfo": 2, "past": 2, "well": 2, "those": 2, "key_info": 2, "cmekkeyinfo": 2, "alongsid": 2, "cmekkeyspecif": 2, "encrypt": 2, "involv": 2, "princip": 2, "authent": 2, "access": 2, "cmekkeytyp": 2, "enumer": 2, "manag": [2, 8, 13, 16], "unknown_key_typ": 2, "unknown": 2, "never": 2, "aws_km": 2, "gcp_cloud_km": 2, "uri": 2, "cmekstatu": 2, "describ": [2, 6, 7], "crdb": [2, 7], "unknown_statu": 2, "correspond": 2, "level": [2, 7], "finish": 2, "process": 2, "rotat": 2, "while": 2, "exist": [2, 8], "rotate_fail": 2, "failur": 2, "anoth": 2, "revok": 2, "revoke_fail": 2, "logexport": [6, 7], "logexportclusterinfo": [6, 7], "packag": [6, 7], "fulli": [6, 7], "both": [6, 7], "intend": [6, 7], "metadata": [6, 7], "around": [6, 7], "timestamp": [6, 7], "cc_cmek_info": [13, 16], "cmek": [13, 16], "relat": [8, 13, 16], "show_nod": 0, "compos": 0, "make": 0, "up": 0, "Not": 0, "region_nam": [0, 8], "live": 0, "not_readi": 0, "cc_cluster": [13, 16], "dev": 2, "cluster1": 2, "egress_rul": 8, "egress": 8, "rule": 8, "show_allowlist": 8, "propag": 8, "show_aws_endpoint": 8, "awsendpointconnect": 8, "show_egress_rul": 8, "show_private_endpoint_servic": 8, "privateendpointservic": 8, "2ea5b593": 8, "8766": 8, "4e92": 8, "aef2": 8, "caba191f0cab": 8, "ye": [7, 8], "cidr_ip": 8, "cidr_mask": 8, "ui": 8, "privat": 8, "endpoint_id": 8, "side": 8, "east": 8, "service_id": 8, "same": 8, "awsprivatelinkendpoint": 8, "status": 8, "map": 8, "endpoint_pend": 8, "endpoint_pending_accept": 8, "endpoint_avail": 8, "endpoint_delet": 8, "endpoint_reject": 8, "endpoint_fail": 8, "endpoint_expir": 8, "appli": 8, "crl_manag": 8, "longer": 8, "serv": 8, "purpos": 8, "destin": [7, 8], "subnetwork": 8, "cidr": 8, "traffic": 8, "url": 8, "fqdn": 8, "tcp": 8, "protocol": 8, "empti": 8, "classifi": 8, "availability_zone_id": 8, "zone": 8, "service_nam": 8, "endpoint_service_status_delete_fail": 8, "One": 8, "note": 8, "record": 8, "henc": 8, "endpoint_service_status_cr": 8, "endpoint_service_status_avail": 8, "endpoint_service_status_create_fail": 8, "endpoint_service_status_delet": 8, "cc_networking_info": [13, 16], "edit": [4, 11], "rename_to": 4, "dev_clust": [4, 11], "dev_db": 4, "cc_databas": [13, 16], "password": 11, "mypassword1234": 11, "cc_cluster_info": [13, 16], "cc_database_info": [13, 16], "cc_invoice_info": [13, 16], "cc_user": [13, 16], "cc_user_info": [13, 16], "monitor": 7, "solut": 7, "default_log_nam": 7, "default_redact": 7, "polici": 7, "befor": 7, "target": 7, "group": 7, "flag": 7, "channel": 7, "aggreg": 7, "separ": 7, "rout": 7, "subset": 7, "min_level": 7, "minimum": 7, "info": 7, "warn": 7, "fatal": 7, "overrid": 7, "wait": 7, "long": 7, "complet": 7, "explor": 7, "cluster2": 7, "health": 7, "op": 7, "central1": 7, "differ": 7, "unconfigur": 7, "sent": 7, "abov": 7, "logexportgroup": 7, "reflect": 7, "govern": 7, "inherit": 7, "unset": 7, "control": 7, "forward": 7, "remain": 7, "origin": 7, "depend": 7, "cc_logexport": [13, 16]}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"fabiog1901": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16], "cockroachdb": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16], "cc_regions_info": 9, "modul": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16], "list": [0, 1, 3, 5, 8, 9, 10], "region": 9, "avail": 9, "new": 9, "cluster": [0, 1, 2, 3, 4, 6, 8, 9, 10, 11], "node": 9, "synopsi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "requir": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "paramet": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "exampl": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "return": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "valu": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "author": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "collect": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17], "link": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "cloud_inst": 12, "descript": 13, "plugin": [13, 17], "index": [13, 15, 16, 17], "namespac": 14, "all": 16, "welcom": 17, "my": 17, "ansibl": 17, "document": 17, "cc_clusters_info": [], "own": [0, 1], "an": [0, 1], "organ": [0, 1, 5], "creat": 12, "updat": 12, "delet": 12, "public": 12, "cloud": 12, "instanc": 12, "cc_databases_info": [], "databas": [3, 4], "cc_logexport_info": 6, "get": [2, 6], "log": [6, 7], "export": [6, 7], "configur": [6, 7], "cc_users_info": [], "sql": 10, "user": [10, 11], "cc_invoices_info": [], "invoic": 5, "given": 5, "cc_cmek_info": 2, "cmek": 2, "relat": 2, "inform": 2, "cc_cluster": 1, "cc_networking_info": 8, "network": 8, "detail": 8, "cc_databas": 4, "manag": [4, 7, 11], "cc_cluster_info": 0, "cc_database_info": 3, "cc_invoice_info": 5, "cc_user_info": 10, "cc_user": 11, "cc_logexport": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Collection Index": [[15, "collection-index"]], "Collections in the fabiog1901 Namespace": [[14, "collections-in-the-fabiog1901-namespace"]], "fabiog1901.cockroachdb.cc_cluster module \u2013 List clusters owned by an organization.": [[1, "fabiog1901-cockroachdb-cc-cluster-module-list-clusters-owned-by-an-organization"]], "Synopsis": [[1, "synopsis"], [2, "synopsis"], [6, "synopsis"], [8, "synopsis"], [9, "synopsis"], [12, "synopsis"], [4, "synopsis"], [0, "synopsis"], [3, "synopsis"], [5, "synopsis"], [10, "synopsis"], [11, "synopsis"], [7, "synopsis"]], "Requirements": [[1, "requirements"], [2, "requirements"], [6, "requirements"], [8, "requirements"], [9, "requirements"], [4, "requirements"], [0, "requirements"], [3, "requirements"], [5, "requirements"], [10, "requirements"], [11, "requirements"], [7, "requirements"]], "Parameters": [[1, "parameters"], [2, "parameters"], [6, "parameters"], [8, "parameters"], [9, "parameters"], [12, "parameters"], [4, "parameters"], [0, "parameters"], [3, "parameters"], [5, "parameters"], [10, "parameters"], [11, "parameters"], [7, "parameters"]], "Examples": [[1, "examples"], [2, "examples"], [6, "examples"], [8, "examples"], [9, "examples"], [12, "examples"], [4, "examples"], [0, "examples"], [3, "examples"], [5, "examples"], [10, "examples"], [11, "examples"], [7, "examples"]], "Return Values": [[1, "return-values"], [2, "return-values"], [6, "return-values"], [8, "return-values"], [9, "return-values"], [12, "return-values"], [4, "return-values"], [0, "return-values"], [3, "return-values"], [5, "return-values"], [10, "return-values"], [11, "return-values"], [7, "return-values"]], "Authors": [[1, "authors"], [2, "authors"], [6, "authors"], [8, "authors"], [9, "authors"], [12, "authors"], [4, "authors"], [0, "authors"], [3, "authors"], [5, "authors"], [10, "authors"], [11, "authors"], [7, "authors"]], "Collection links": [[1, "collection-links"], [2, "collection-links"], [6, "collection-links"], [8, "collection-links"], [9, "collection-links"], [12, "collection-links"], [4, "collection-links"], [0, "collection-links"], [3, "collection-links"], [5, "collection-links"], [10, "collection-links"], [11, "collection-links"], [7, "collection-links"]], "fabiog1901.cockroachdb.cc_cmek_info module \u2013 Get CMEK-related information for a cluster.": [[2, "fabiog1901-cockroachdb-cc-cmek-info-module-get-cmek-related-information-for-a-cluster"]], "fabiog1901.cockroachdb.cc_logexport_info module \u2013 Get the Log Export configuration for a cluster.": [[6, "fabiog1901-cockroachdb-cc-logexport-info-module-get-the-log-export-configuration-for-a-cluster"]], "fabiog1901.cockroachdb.cc_networking_info module \u2013 List networking details for a cluster.": [[8, "fabiog1901-cockroachdb-cc-networking-info-module-list-networking-details-for-a-cluster"]], "fabiog1901.cockroachdb.cc_regions_info module \u2013 List the regions available for new clusters and nodes.": [[9, "fabiog1901-cockroachdb-cc-regions-info-module-list-the-regions-available-for-new-clusters-and-nodes"]], "fabiog1901.cockroachdb.cloud_instance module \u2013 Creates, updates and deletes public cloud instances": [[12, "fabiog1901-cockroachdb-cloud-instance-module-creates-updates-and-deletes-public-cloud-instances"]], "fabiog1901.cockroachdb.cc_database module \u2013 Manage databases for a cluster.": [[4, "fabiog1901-cockroachdb-cc-database-module-manage-databases-for-a-cluster"]], "fabiog1901.cockroachdb.cc_cluster_info module \u2013 List clusters owned by an organization.": [[0, "fabiog1901-cockroachdb-cc-cluster-info-module-list-clusters-owned-by-an-organization"]], "fabiog1901.cockroachdb.cc_database_info module \u2013 List databases for a cluster.": [[3, "fabiog1901-cockroachdb-cc-database-info-module-list-databases-for-a-cluster"]], "fabiog1901.cockroachdb.cc_invoice_info module \u2013 List invoices for a given organization.": [[5, "fabiog1901-cockroachdb-cc-invoice-info-module-list-invoices-for-a-given-organization"]], "fabiog1901.cockroachdb.cc_user_info module \u2013 List SQL users for a cluster.": [[10, "fabiog1901-cockroachdb-cc-user-info-module-list-sql-users-for-a-cluster"]], "fabiog1901.cockroachdb.cc_user module \u2013 Manage users for a cluster.": [[11, "fabiog1901-cockroachdb-cc-user-module-manage-users-for-a-cluster"]], "fabiog1901.cockroachdb.cc_logexport module \u2013 Manage log export configuration.": [[7, "fabiog1901-cockroachdb-cc-logexport-module-manage-log-export-configuration"]], "fabiog1901.cockroachdb": [[13, "fabiog1901-cockroachdb"], [16, "fabiog1901-cockroachdb"]], "Description": [[13, "description"]], "Plugin Index": [[13, "plugin-index"]], "Modules": [[13, "modules"]], "Index of all Modules": [[16, "index-of-all-modules"]], "Welcome to my Ansible collection documentation": [[17, "welcome-to-my-ansible-collection-documentation"]], "Collections:": [[17, null]], "Plugin indexes:": [[17, null]]}, "indexentries": {}})