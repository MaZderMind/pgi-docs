Search.setIndex({docnames:["callbacks","class-structs","classes","classes/Connection","classes/ConnectionClass","classes/Domain","classes/DomainClass","classes/DomainDevice","classes/DomainDeviceClass","classes/DomainDisk","classes/DomainDiskClass","classes/DomainDiskStats","classes/DomainInfo","classes/DomainInterface","classes/DomainInterfaceClass","classes/DomainInterfaceStats","classes/DomainSnapshot","classes/DomainSnapshotClass","classes/Interface","classes/InterfaceClass","classes/Manager","classes/ManagerClass","classes/Network","classes/NetworkClass","classes/NetworkDHCPLease","classes/NetworkDHCPLeaseClass","classes/NetworkFilter","classes/NetworkFilterClass","classes/NodeDevice","classes/NodeDeviceClass","classes/NodeInfo","classes/Secret","classes/SecretClass","classes/StoragePool","classes/StoragePoolClass","classes/StoragePoolInfo","classes/StorageVol","classes/StorageVolClass","classes/StorageVolInfo","classes/Stream","classes/StreamClass","enums","flags","functions","hierarchy","index","mapping","structs"],envversion:53,filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/Connection.rst","classes/ConnectionClass.rst","classes/Domain.rst","classes/DomainClass.rst","classes/DomainDevice.rst","classes/DomainDeviceClass.rst","classes/DomainDisk.rst","classes/DomainDiskClass.rst","classes/DomainDiskStats.rst","classes/DomainInfo.rst","classes/DomainInterface.rst","classes/DomainInterfaceClass.rst","classes/DomainInterfaceStats.rst","classes/DomainSnapshot.rst","classes/DomainSnapshotClass.rst","classes/Interface.rst","classes/InterfaceClass.rst","classes/Manager.rst","classes/ManagerClass.rst","classes/Network.rst","classes/NetworkClass.rst","classes/NetworkDHCPLease.rst","classes/NetworkDHCPLeaseClass.rst","classes/NetworkFilter.rst","classes/NetworkFilterClass.rst","classes/NodeDevice.rst","classes/NodeDeviceClass.rst","classes/NodeInfo.rst","classes/Secret.rst","classes/SecretClass.rst","classes/StoragePool.rst","classes/StoragePoolClass.rst","classes/StoragePoolInfo.rst","classes/StorageVol.rst","classes/StorageVolClass.rst","classes/StorageVolInfo.rst","classes/Stream.rst","classes/StreamClass.rst","enums.rst","flags.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst","structs.rst"],objects:{"LibvirtGObject.Connection":{"new":[3,2,1,""],close:[3,1,1,""],create_domain:[3,1,1,""],create_storage_pool:[3,1,1,""],do_connection_closed:[3,1,1,""],do_connection_opened:[3,1,1,""],do_domain_added:[3,1,1,""],do_domain_removed:[3,1,1,""],fetch_domains:[3,1,1,""],fetch_domains_async:[3,1,1,""],fetch_domains_finish:[3,1,1,""],fetch_interfaces:[3,1,1,""],fetch_interfaces_async:[3,1,1,""],fetch_interfaces_finish:[3,1,1,""],fetch_networks:[3,1,1,""],fetch_networks_async:[3,1,1,""],fetch_networks_finish:[3,1,1,""],fetch_storage_pools:[3,1,1,""],fetch_storage_pools_async:[3,1,1,""],fetch_storage_pools_finish:[3,1,1,""],find_domain_by_id:[3,1,1,""],find_domain_by_name:[3,1,1,""],find_interface_by_mac:[3,1,1,""],find_network_by_name:[3,1,1,""],find_storage_pool_by_name:[3,1,1,""],get_capabilities:[3,1,1,""],get_capabilities_async:[3,1,1,""],get_capabilities_finish:[3,1,1,""],get_domain:[3,1,1,""],get_domains:[3,1,1,""],get_hypervisor_name:[3,1,1,""],get_interface:[3,1,1,""],get_interfaces:[3,1,1,""],get_network:[3,1,1,""],get_networks:[3,1,1,""],get_node_info:[3,1,1,""],get_storage_pool:[3,1,1,""],get_storage_pools:[3,1,1,""],get_stream:[3,1,1,""],get_uri:[3,1,1,""],get_version:[3,1,1,""],is_open:[3,1,1,""],is_read_only:[3,1,1,""],open:[3,1,1,""],open_async:[3,1,1,""],open_finish:[3,1,1,""],open_read_only:[3,1,1,""],open_read_only_async:[3,1,1,""],open_read_only_finish:[3,1,1,""],restore_domain_from_file:[3,1,1,""],restore_domain_from_file_async:[3,1,1,""],restore_domain_from_file_finish:[3,1,1,""],start_domain:[3,1,1,""]},"LibvirtGObject.Connection.props":{handle:[3,3,1,""],uri:[3,3,1,""]},"LibvirtGObject.Connection.signals":{connection_closed:[3,4,1,""],connection_opened:[3,4,1,""],domain_added:[3,4,1,""],domain_removed:[3,4,1,""]},"LibvirtGObject.Domain":{"delete":[5,1,1,""],create_snapshot:[5,1,1,""],create_snapshot_async:[5,1,1,""],create_snapshot_finish:[5,1,1,""],do_pmsuspended:[5,1,1,""],do_resumed:[5,1,1,""],do_started:[5,1,1,""],do_stopped:[5,1,1,""],do_suspended:[5,1,1,""],do_updated:[5,1,1,""],fetch_snapshots:[5,1,1,""],fetch_snapshots_async:[5,1,1,""],fetch_snapshots_finish:[5,1,1,""],get_config:[5,1,1,""],get_devices:[5,1,1,""],get_has_current_snapshot:[5,1,1,""],get_id:[5,1,1,""],get_info:[5,1,1,""],get_info_async:[5,1,1,""],get_info_finish:[5,1,1,""],get_name:[5,1,1,""],get_persistent:[5,1,1,""],get_saved:[5,1,1,""],get_snapshots:[5,1,1,""],get_uuid:[5,1,1,""],open_console:[5,1,1,""],open_graphics:[5,1,1,""],open_graphics_fd:[5,1,1,""],reboot:[5,1,1,""],resume:[5,1,1,""],resume_async:[5,1,1,""],resume_finish:[5,1,1,""],save:[5,1,1,""],save_async:[5,1,1,""],save_finish:[5,1,1,""],save_to_file:[5,1,1,""],save_to_file_async:[5,1,1,""],save_to_file_finish:[5,1,1,""],screenshot:[5,1,1,""],set_config:[5,1,1,""],set_time:[5,1,1,""],set_time_async:[5,1,1,""],set_time_finish:[5,1,1,""],shutdown:[5,1,1,""],start:[5,1,1,""],start_async:[5,1,1,""],start_finish:[5,1,1,""],stop:[5,1,1,""],suspend:[5,1,1,""],update_device:[5,1,1,""],wakeup:[5,1,1,""],wakeup_async:[5,1,1,""],wakeup_finish:[5,1,1,""]},"LibvirtGObject.Domain.props":{handle:[5,3,1,""],persistent:[5,3,1,""]},"LibvirtGObject.Domain.signals":{pmsuspended:[5,4,1,""],resumed:[5,4,1,""],started:[5,4,1,""],stopped:[5,4,1,""],suspended:[5,4,1,""],updated:[5,4,1,""]},"LibvirtGObject.DomainDeleteFlags":{NONE:[41,5,1,""],SAVED_STATE:[41,5,1,""],SNAPSHOTS_METADATA:[41,5,1,""]},"LibvirtGObject.DomainDevice":{get_config:[7,1,1,""],get_domain:[7,1,1,""]},"LibvirtGObject.DomainDevice.props":{config:[7,3,1,""],domain:[7,3,1,""]},"LibvirtGObject.DomainDisk":{get_stats:[9,1,1,""],resize:[9,1,1,""]},"LibvirtGObject.DomainInterface":{get_stats:[13,1,1,""]},"LibvirtGObject.DomainRebootFlags":{ACPI_POWER_BTN:[41,5,1,""],GUEST_AGENT:[41,5,1,""],NONE:[41,5,1,""]},"LibvirtGObject.DomainShutdownFlags":{ACPI_POWER_BTN:[41,5,1,""],GUEST_AGENT:[41,5,1,""],NONE:[41,5,1,""]},"LibvirtGObject.DomainSnapshot":{"delete":[16,1,1,""],delete_async:[16,1,1,""],delete_finish:[16,1,1,""],get_config:[16,1,1,""],get_is_current:[16,1,1,""],get_name:[16,1,1,""],revert_to:[16,1,1,""],revert_to_async:[16,1,1,""],revert_to_finish:[16,1,1,""],set_config:[16,1,1,""]},"LibvirtGObject.DomainSnapshot.props":{handle:[16,3,1,""]},"LibvirtGObject.DomainSnapshotCreateFlags":{ATOMIC:[41,5,1,""],CURRENT:[41,5,1,""],DISK_ONLY:[41,5,1,""],HALT:[41,5,1,""],NONE:[41,5,1,""],NO_METADATA:[41,5,1,""],QUIESCE:[41,5,1,""],REDEFINE:[41,5,1,""],REUSE_EXT:[41,5,1,""]},"LibvirtGObject.DomainSnapshotDeleteFlags":{CHILDREN:[41,5,1,""],CHILDREN_ONLY:[41,5,1,""],METADATA_ONLY:[41,5,1,""]},"LibvirtGObject.DomainSnapshotListFlags":{ACTIVE:[41,5,1,""],ALL:[41,5,1,""],DESCENDANTS:[41,5,1,""],DISK_ONLY:[41,5,1,""],EXTERNAL:[41,5,1,""],INACTIVE:[41,5,1,""],INTERNAL:[41,5,1,""],LEAVES:[41,5,1,""],METADATA:[41,5,1,""],NO_LEAVES:[41,5,1,""],NO_METADATA:[41,5,1,""],ROOTS:[41,5,1,""]},"LibvirtGObject.DomainSnapshotRevertFlags":{FORCE:[41,5,1,""],PAUSED:[41,5,1,""],RUNNING:[41,5,1,""]},"LibvirtGObject.DomainStartFlags":{AUTODESTROY:[42,5,1,""],BYPASS_CACHE:[42,5,1,""],FORCE_BOOT:[42,5,1,""],NONE:[42,5,1,""],PAUSED:[42,5,1,""]},"LibvirtGObject.DomainState":{BLOCKED:[41,5,1,""],CRASHED:[41,5,1,""],NONE:[41,5,1,""],PAUSED:[41,5,1,""],PMSUSPENDED:[41,5,1,""],RUNNING:[41,5,1,""],SHUTDOWN:[41,5,1,""],SHUTOFF:[41,5,1,""]},"LibvirtGObject.DomainUpdateDeviceFlags":{CONFIG:[41,5,1,""],CURRENT:[41,5,1,""],LIVE:[41,5,1,""]},"LibvirtGObject.DomainXMLFlags":{INACTIVE:[41,5,1,""],NONE:[41,5,1,""],SECURE:[41,5,1,""],UPDATE_CPU:[41,5,1,""]},"LibvirtGObject.IPAddrType":{IPV4:[41,5,1,""],IPV6:[41,5,1,""]},"LibvirtGObject.Interface":{get_config:[18,1,1,""],get_mac:[18,1,1,""],get_name:[18,1,1,""]},"LibvirtGObject.Interface.props":{handle:[18,3,1,""]},"LibvirtGObject.Manager":{"new":[20,2,1,""],add_connection:[20,1,1,""],do_connection_added:[20,1,1,""],do_connection_removed:[20,1,1,""],find_connection_by_uri:[20,1,1,""],get_connections:[20,1,1,""],remove_connection:[20,1,1,""]},"LibvirtGObject.Manager.signals":{connection_added:[20,4,1,""],connection_removed:[20,4,1,""]},"LibvirtGObject.Network":{do_started:[22,1,1,""],do_stopped:[22,1,1,""],get_config:[22,1,1,""],get_dhcp_leases:[22,1,1,""],get_name:[22,1,1,""],get_uuid:[22,1,1,""]},"LibvirtGObject.Network.props":{handle:[22,3,1,""]},"LibvirtGObject.NetworkDHCPLease":{get_client_id:[24,1,1,""],get_expiry_time:[24,1,1,""],get_hostname:[24,1,1,""],get_iaid:[24,1,1,""],get_iface:[24,1,1,""],get_ip:[24,1,1,""],get_ip_type:[24,1,1,""],get_mac:[24,1,1,""],get_prefix:[24,1,1,""]},"LibvirtGObject.NetworkDHCPLease.props":{handle:[24,3,1,""]},"LibvirtGObject.NetworkFilter":{get_config:[26,1,1,""],get_name:[26,1,1,""],get_uuid:[26,1,1,""]},"LibvirtGObject.NetworkFilter.props":{handle:[26,3,1,""]},"LibvirtGObject.NodeDevice":{get_config:[28,1,1,""],get_name:[28,1,1,""]},"LibvirtGObject.NodeDevice.props":{handle:[28,3,1,""]},"LibvirtGObject.Secret":{get_config:[31,1,1,""],get_name:[31,1,1,""],get_uuid:[31,1,1,""]},"LibvirtGObject.Secret.props":{handle:[31,3,1,""]},"LibvirtGObject.StoragePool":{"delete":[33,1,1,""],build:[33,1,1,""],build_async:[33,1,1,""],build_finish:[33,1,1,""],create_volume:[33,1,1,""],delete_async:[33,1,1,""],delete_finish:[33,1,1,""],get_active:[33,1,1,""],get_autostart:[33,1,1,""],get_config:[33,1,1,""],get_info:[33,1,1,""],get_name:[33,1,1,""],get_persistent:[33,1,1,""],get_uuid:[33,1,1,""],get_volume:[33,1,1,""],get_volumes:[33,1,1,""],refresh:[33,1,1,""],refresh_async:[33,1,1,""],refresh_finish:[33,1,1,""],set_autostart:[33,1,1,""],start:[33,1,1,""],start_async:[33,1,1,""],start_finish:[33,1,1,""],stop:[33,1,1,""],stop_async:[33,1,1,""],stop_finish:[33,1,1,""],undefine:[33,1,1,""],undefine_async:[33,1,1,""],undefine_finish:[33,1,1,""]},"LibvirtGObject.StoragePool.props":{handle:[33,3,1,""]},"LibvirtGObject.StoragePoolState":{BUILDING:[41,5,1,""],DEGRADED:[41,5,1,""],INACCESSIBLE:[41,5,1,""],INACTIVE:[41,5,1,""],RUNNING:[41,5,1,""]},"LibvirtGObject.StorageVol":{"delete":[36,1,1,""],download:[36,1,1,""],get_config:[36,1,1,""],get_info:[36,1,1,""],get_name:[36,1,1,""],get_path:[36,1,1,""],resize:[36,1,1,""],upload:[36,1,1,""]},"LibvirtGObject.StorageVol.props":{handle:[36,3,1,""],pool:[36,3,1,""]},"LibvirtGObject.StorageVolResizeFlags":{ALLOCATE:[41,5,1,""],DELTA:[41,5,1,""],NONE:[41,5,1,""],SHRINK:[41,5,1,""]},"LibvirtGObject.StorageVolType":{BLOCK:[41,5,1,""],DIR:[41,5,1,""],FILE:[41,5,1,""]},"LibvirtGObject.Stream":{add_watch:[39,1,1,""],receive:[39,1,1,""],receive_all:[39,1,1,""],send:[39,1,1,""],send_all:[39,1,1,""]},"LibvirtGObject.Stream.props":{handle:[39,3,1,""]},"LibvirtGObject.StreamIOCondition":{ERROR:[42,5,1,""],HANGUP:[42,5,1,""],READABLE:[42,5,1,""],WRITABLE:[42,5,1,""]},LibvirtGObject:{Connection:[3,0,1,""],ConnectionClass:[4,0,1,""],Domain:[5,0,1,""],DomainClass:[6,0,1,""],DomainDeleteFlags:[41,0,1,""],DomainDevice:[7,0,1,""],DomainDeviceClass:[8,0,1,""],DomainDisk:[9,0,1,""],DomainDiskClass:[10,0,1,""],DomainDiskStats:[11,0,1,""],DomainInfo:[12,0,1,""],DomainInterface:[13,0,1,""],DomainInterfaceClass:[14,0,1,""],DomainInterfaceStats:[15,0,1,""],DomainRebootFlags:[41,0,1,""],DomainShutdownFlags:[41,0,1,""],DomainSnapshot:[16,0,1,""],DomainSnapshotClass:[17,0,1,""],DomainSnapshotCreateFlags:[41,0,1,""],DomainSnapshotDeleteFlags:[41,0,1,""],DomainSnapshotListFlags:[41,0,1,""],DomainSnapshotRevertFlags:[41,0,1,""],DomainStartFlags:[42,0,1,""],DomainState:[41,0,1,""],DomainUpdateDeviceFlags:[41,0,1,""],DomainXMLFlags:[41,0,1,""],IPAddrType:[41,0,1,""],Interface:[18,0,1,""],InterfaceClass:[19,0,1,""],Manager:[20,0,1,""],ManagerClass:[21,0,1,""],Network:[22,0,1,""],NetworkClass:[23,0,1,""],NetworkDHCPLease:[24,0,1,""],NetworkDHCPLeaseClass:[25,0,1,""],NetworkFilter:[26,0,1,""],NetworkFilterClass:[27,0,1,""],NodeDevice:[28,0,1,""],NodeDeviceClass:[29,0,1,""],NodeInfo:[30,0,1,""],Secret:[31,0,1,""],SecretClass:[32,0,1,""],StoragePool:[33,0,1,""],StoragePoolClass:[34,0,1,""],StoragePoolInfo:[35,0,1,""],StoragePoolState:[41,0,1,""],StorageVol:[36,0,1,""],StorageVolClass:[37,0,1,""],StorageVolInfo:[38,0,1,""],StorageVolResizeFlags:[41,0,1,""],StorageVolType:[41,0,1,""],Stream:[39,0,1,""],StreamClass:[40,0,1,""],StreamIOCondition:[42,0,1,""],StreamIOFunc:[0,4,1,""],StreamSinkFunc:[0,4,1,""],StreamSourceFunc:[0,4,1,""],init_object:[43,4,1,""],init_object_check:[43,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"abstract":[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],"byte":[0,39],"case":[9,13,16],"class":[4,6,8,10,11,12,14,15,17,19,21,23,25,27,29,30,32,34,35,37,38,40,41,42,45],"default":[3,5,7,16,18,22,24,26,28,31,33,36,39],"enum":45,"function":[0,5,9,13,22,39,45],"int":[0,3,5,9,11,12,15,16,18,22,24,26,28,30,31,33,35,36,38,39],"long":39,"new":[3,5,9,16,20,33,36,41,46],"return":[0,3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39,43],"short":[3,5,7,16,18,20,22,24,26,28,31,33,36,39],"transient":3,"true":[3,5,9,16,33,36],"while":41,For:41,One:5,The:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],There:22,Use:[3,5,41],Will:5,With:41,Yes:7,about:22,access:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,45],accord:[16,41],accordingli:39,acpi:41,acpi_power_btn:[41,46],activ:[5,41,46],add:39,add_connect:[20,46],add_watch:[39,46],added:[3,20],addit:39,address:[3,22,24,41],affect:5,after:[3,5,20,33,41],afterward:3,agent:[5,41],all:[3,5,36,41,46],alloc:[5,35,38,41,46],allow:41,alreadi:5,also:41,alter:41,altern:39,amount:36,ani:[39,41],api:22,app:39,applic:[39,43,45],argument:5,argv:43,ascii:22,associ:[7,41],async:[3,5,16,33],asynchron:[3,5],asyncreadycallback:[3,5,16,33],asyncresult:[3,5,16,33],atom:[41,46],attach:5,autodestroi:[42,46],automat:33,autostart:33,avail:[3,5,35,39],avoid:41,backend:5,base:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39,41,42,45],becaus:22,been:[3,5,16,20,33,39],bit:[24,41],bitfield:39,bitwis:[5,16],block:[9,39,41,46],bool:[0,3,5,9,16,33,36,43],boot:33,boxed_fre:[5,33],brows:45,buf:0,buffer:39,bug:45,bugzilla:45,build:[33,41,46],build_async:[33,46],build_finish:[33,46],bypass_cach:[42,46],call:39,callback:[3,5,16,33,39,45],can:[5,22,39],cancal:5,cancel:[3,5,16,33,39],capabl:3,capac:[35,36,38,41],cgi:45,chang:[9,36,41],checkpoint:41,children:[41,46],children_onli:[41,46],choic:41,classmethod:[3,20],client:24,close:[3,46],combin:41,complet:[3,5,16,33],cond:[0,39],condit:39,conf:[3,5,16,33],config:[5,7,16,18,22,26,28,31,33,36,41,46],configur:[3,5,7,16,33],conn:20,connect:[2,5,20,44,46],connection_ad:[20,21],connection_clos:[3,4],connection_open:[3,4],connection_remov:[20,21],connectionclass:[1,3,46],consol:5,construct_onli:[3,5,7,16,18,22,24,26,28,31,33,36,39],consum:39,contain:[5,22,36],contigu:41,conveni:39,core:30,cpu:[5,30,41],cputim:12,crash:[41,46],creat:[3,5,33],create_domain:[3,46],create_snapshot:[5,46],create_snapshot_async:[5,46],create_snapshot_finish:[5,46],create_storage_pool:[3,46],create_volum:[33,46],current:[3,5,9,16,41,46],custom_conf:[3,5],data:[0,3,5,16,33,36,39],date_tim:5,datetim:5,debian:45,decreas:41,degrad:[41,46],delet:[5,16,33,36,41,46],delete_async:[16,33,46],delete_finish:[16,33,46],delta:[41,46],depend:45,descend:[41,46],descript:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,45],descriptor:5,determin:5,devic:5,devnam:5,dhcpv6:22,dir:[41,46],disk:[5,9,41],disk_onli:[41,46],displai:5,do_connection_ad:20,do_connection_clos:3,do_connection_open:3,do_connection_remov:20,do_domain_ad:3,do_domain_remov:3,do_pmsuspend:5,do_resum:5,do_start:[5,22],do_stop:[5,22],do_suspend:5,do_upd:5,doe:[9,13],dom:3,domain:[2,3,7,9,16,41,44,46],domain_ad:[3,4],domain_remov:[3,4],domain_snapshot:16,domainclass:[1,5,46],domaindeleteflag:[41,46],domaindevic:[2,5,9,13,44,46],domaindeviceclass:[1,7,10,14,46],domaindisk:[2,7,44,46],domaindiskclass:[1,9,46],domaindiskstat:[9,46,47],domaininfo:[5,46,47],domaininterfac:[2,7,44,46],domaininterfaceclass:[1,13,46],domaininterfacestat:[13,46,47],domainrebootflag:[5,41,46],domainshutdownflag:[5,41,46],domainsnapshot:[2,5,44,46],domainsnapshotclass:[1,16,46],domainsnapshotcreateflag:[5,41,46],domainsnapshotdeleteflag:[16,41,46],domainsnapshotlistflag:[5,41,46],domainsnapshotrevertflag:[16,41,46],domainst:[12,41,46],domainstartflag:[42,46],domainupdatedeviceflag:[5,41,46],domainxmlflag:[5,41,46],download:[36,46],duid:24,dump:41,each:22,element:[3,5,20,33],enabl:33,end:[0,5,39],entir:39,epoch:24,err:[3,11],error:[0,3,5,9,13,16,18,22,26,28,31,33,36,39,42,43,46],even:5,event:[39,41],exist:[3,5,41],expiri:24,extern:[41,46],extra:[5,36],failur:5,fals:[3,5,9,16,33,36],fetch:[3,22],fetch_domain:[3,46],fetch_domains_async:[3,46],fetch_domains_finish:[3,46],fetch_interfac:[3,46],fetch_interfaces_async:[3,46],fetch_interfaces_finish:[3,46],fetch_network:[3,46],fetch_networks_async:[3,46],fetch_networks_finish:[3,46],fetch_snapshot:[5,46],fetch_snapshots_async:[5,46],fetch_snapshots_finish:[5,46],fetch_storage_pool:[3,46],fetch_storage_pools_async:[3,46],fetch_storage_pools_finish:[3,46],file:[0,3,5,41,46],filenam:[3,5],fill:0,filter:41,find_connection_by_uri:[20,46],find_domain_by_id:[3,46],find_domain_by_nam:[3,46],find_interface_by_mac:[3,46],find_network_by_nam:[3,46],find_storage_pool_by_nam:[3,46],finish:[3,5],first:5,flag:[3,5,7,9,16,18,20,22,24,26,28,31,33,36,39,41,45],forc:[41,46],force_boot:[42,46],format:[5,22],freed:[3,5,20,33],from:[5,36,39],frozen:5,func:39,further:5,futur:39,g_list_fre:[3,5,20,22,33],genum:41,get:[3,5],get_act:[33,46],get_autostart:[33,46],get_cap:[3,46],get_capabilities_async:[3,46],get_capabilities_finish:[3,46],get_client_id:[24,46],get_config:[5,7,16,18,22,26,28,31,33,36,46],get_connect:[20,46],get_devic:[5,46],get_dhcp_leas:[22,46],get_domain:[3,7,46],get_expiry_tim:[24,46],get_has_current_snapshot:[5,46],get_hostnam:[24,46],get_hypervisor_nam:[3,46],get_iaid:[24,46],get_id:[5,46],get_ifac:[24,46],get_info:[5,33,36,46],get_info_async:[5,46],get_info_finish:[5,46],get_interfac:[3,46],get_ip:[24,46],get_ip_typ:[24,46],get_is_curr:[16,46],get_mac:[18,24,46],get_nam:[5,16,18,22,26,28,31,33,36,46],get_network:[3,46],get_node_info:[3,46],get_path:[36,46],get_persist:[5,33,46],get_prefix:[24,46],get_sav:[5,46],get_snapshot:[5,46],get_stat:[9,13,46],get_storage_pool:[3,46],get_stream:[3,46],get_uri:[3,46],get_uuid:[5,22,26,31,33,46],get_vers:[3,46],get_volum:[33,46],gflag:42,gio:[3,5,16,33,39,40,44,45],gir1:45,given:[5,16],glib:[3,5,9,13,16,18,22,26,28,31,33,36,39,43,45],gnome:45,gobject:[3,4,5,6,7,8,9,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,36,37,39,41,42,44,45],graphic:5,group:41,guest:[5,22,41],guest_ag:[41,46],gvir_connection_clos:46,gvir_connection_create_domain:46,gvir_connection_create_storage_pool:46,gvir_connection_fetch_domain:46,gvir_connection_fetch_domains_async:46,gvir_connection_fetch_domains_finish:46,gvir_connection_fetch_interfac:46,gvir_connection_fetch_interfaces_async:46,gvir_connection_fetch_interfaces_finish:46,gvir_connection_fetch_network:46,gvir_connection_fetch_networks_async:46,gvir_connection_fetch_networks_finish:46,gvir_connection_fetch_storage_pool:46,gvir_connection_fetch_storage_pools_async:46,gvir_connection_fetch_storage_pools_finish:46,gvir_connection_find_domain_by_id:46,gvir_connection_find_domain_by_nam:46,gvir_connection_find_interface_by_mac:46,gvir_connection_find_network_by_nam:46,gvir_connection_find_storage_pool_by_nam:46,gvir_connection_get_cap:46,gvir_connection_get_capabilities_async:46,gvir_connection_get_capabilities_finish:46,gvir_connection_get_domain:46,gvir_connection_get_hypervisor_nam:46,gvir_connection_get_interfac:46,gvir_connection_get_network:46,gvir_connection_get_node_info:46,gvir_connection_get_storage_pool:46,gvir_connection_get_stream:46,gvir_connection_get_uri:46,gvir_connection_get_vers:46,gvir_connection_is_open:46,gvir_connection_is_read_onli:46,gvir_connection_new:46,gvir_connection_open:46,gvir_connection_open_async:46,gvir_connection_open_finish:46,gvir_connection_open_read_onli:46,gvir_connection_open_read_only_async:46,gvir_connection_open_read_only_finish:46,gvir_connection_restore_domain_from_fil:46,gvir_connection_restore_domain_from_file_async:46,gvir_connection_restore_domain_from_file_finish:46,gvir_connection_start_domain:46,gvir_domain_create_snapshot:46,gvir_domain_create_snapshot_async:46,gvir_domain_create_snapshot_finish:46,gvir_domain_delet:46,gvir_domain_delete_non:46,gvir_domain_delete_saved_st:46,gvir_domain_delete_snapshots_metadata:46,gvir_domain_device_get_config:46,gvir_domain_device_get_domain:46,gvir_domain_disk_get_stat:46,gvir_domain_disk_res:46,gvir_domain_fetch_snapshot:46,gvir_domain_fetch_snapshots_async:46,gvir_domain_fetch_snapshots_finish:46,gvir_domain_get_config:46,gvir_domain_get_devic:46,gvir_domain_get_has_current_snapshot:46,gvir_domain_get_id:46,gvir_domain_get_info:46,gvir_domain_get_info_async:46,gvir_domain_get_info_finish:46,gvir_domain_get_nam:46,gvir_domain_get_persist:46,gvir_domain_get_sav:46,gvir_domain_get_snapshot:46,gvir_domain_get_uuid:46,gvir_domain_interface_get_stat:46,gvir_domain_open_consol:46,gvir_domain_open_graph:46,gvir_domain_open_graphics_fd:46,gvir_domain_reboot:46,gvir_domain_reboot_acpi_power_btn:46,gvir_domain_reboot_guest_ag:46,gvir_domain_reboot_non:46,gvir_domain_resum:46,gvir_domain_resume_async:46,gvir_domain_resume_finish:46,gvir_domain_sav:46,gvir_domain_save_async:46,gvir_domain_save_finish:46,gvir_domain_save_to_fil:46,gvir_domain_save_to_file_async:46,gvir_domain_save_to_file_finish:46,gvir_domain_screenshot:46,gvir_domain_set_config:46,gvir_domain_set_tim:46,gvir_domain_set_time_async:46,gvir_domain_set_time_finish:46,gvir_domain_shutdown:46,gvir_domain_shutdown_acpi_power_btn:46,gvir_domain_shutdown_guest_ag:46,gvir_domain_shutdown_non:46,gvir_domain_snapshot_atom:46,gvir_domain_snapshot_curr:46,gvir_domain_snapshot_delet:46,gvir_domain_snapshot_delete_async:46,gvir_domain_snapshot_delete_children:46,gvir_domain_snapshot_delete_children_onli:46,gvir_domain_snapshot_delete_finish:46,gvir_domain_snapshot_delete_metadata_onli:46,gvir_domain_snapshot_disk_onli:46,gvir_domain_snapshot_get_config:46,gvir_domain_snapshot_get_is_curr:46,gvir_domain_snapshot_get_nam:46,gvir_domain_snapshot_halt:46,gvir_domain_snapshot_list_act:46,gvir_domain_snapshot_list_al:46,gvir_domain_snapshot_list_descend:46,gvir_domain_snapshot_list_disk_onli:46,gvir_domain_snapshot_list_extern:46,gvir_domain_snapshot_list_inact:46,gvir_domain_snapshot_list_intern:46,gvir_domain_snapshot_list_leav:46,gvir_domain_snapshot_list_metadata:46,gvir_domain_snapshot_list_no_leav:46,gvir_domain_snapshot_list_no_metadata:46,gvir_domain_snapshot_list_root:46,gvir_domain_snapshot_no_metadata:46,gvir_domain_snapshot_non:46,gvir_domain_snapshot_quiesc:46,gvir_domain_snapshot_redefin:46,gvir_domain_snapshot_reuse_ext:46,gvir_domain_snapshot_revert_forc:46,gvir_domain_snapshot_revert_paus:46,gvir_domain_snapshot_revert_run:46,gvir_domain_snapshot_revert_to:46,gvir_domain_snapshot_revert_to_async:46,gvir_domain_snapshot_revert_to_finish:46,gvir_domain_snapshot_set_config:46,gvir_domain_start:46,gvir_domain_start_async:46,gvir_domain_start_autodestroi:46,gvir_domain_start_bypass_cach:46,gvir_domain_start_finish:46,gvir_domain_start_force_boot:46,gvir_domain_start_non:46,gvir_domain_start_paus:46,gvir_domain_state_block:46,gvir_domain_state_crash:46,gvir_domain_state_non:46,gvir_domain_state_paus:46,gvir_domain_state_pmsuspend:46,gvir_domain_state_run:46,gvir_domain_state_shutdown:46,gvir_domain_state_shutoff:46,gvir_domain_stop:46,gvir_domain_suspend:46,gvir_domain_update_devic:46,gvir_domain_update_device_config:46,gvir_domain_update_device_curr:46,gvir_domain_update_device_l:46,gvir_domain_wakeup:46,gvir_domain_wakeup_async:46,gvir_domain_wakeup_finish:46,gvir_domain_xml_inact:46,gvir_domain_xml_non:46,gvir_domain_xml_secur:46,gvir_domain_xml_update_cpu:46,gvir_init_object:46,gvir_init_object_check:46,gvir_interface_get_config:46,gvir_interface_get_mac:46,gvir_interface_get_nam:46,gvir_ip_addr_type_ipv4:46,gvir_ip_addr_type_ipv6:46,gvir_manager_add_connect:46,gvir_manager_find_connection_by_uri:46,gvir_manager_get_connect:46,gvir_manager_new:46,gvir_manager_remove_connect:46,gvir_network_dhcp_lease_get_client_id:46,gvir_network_dhcp_lease_get_expiry_tim:46,gvir_network_dhcp_lease_get_hostnam:46,gvir_network_dhcp_lease_get_iaid:46,gvir_network_dhcp_lease_get_ifac:46,gvir_network_dhcp_lease_get_ip:46,gvir_network_dhcp_lease_get_ip_typ:46,gvir_network_dhcp_lease_get_mac:46,gvir_network_dhcp_lease_get_prefix:46,gvir_network_filter_get_config:46,gvir_network_filter_get_nam:46,gvir_network_filter_get_uuid:46,gvir_network_get_config:46,gvir_network_get_dhcp_leas:46,gvir_network_get_nam:46,gvir_network_get_uuid:46,gvir_node_device_get_config:46,gvir_node_device_get_nam:46,gvir_restore_domain_from_file_async:3,gvir_secret_get_config:46,gvir_secret_get_nam:46,gvir_secret_get_uuid:46,gvir_storage_pool_build:46,gvir_storage_pool_build_async:46,gvir_storage_pool_build_finish:46,gvir_storage_pool_create_volum:46,gvir_storage_pool_delet:46,gvir_storage_pool_delete_async:46,gvir_storage_pool_delete_finish:46,gvir_storage_pool_get_act:46,gvir_storage_pool_get_autostart:46,gvir_storage_pool_get_config:46,gvir_storage_pool_get_info:46,gvir_storage_pool_get_nam:46,gvir_storage_pool_get_persist:46,gvir_storage_pool_get_uuid:46,gvir_storage_pool_get_volum:46,gvir_storage_pool_refresh:46,gvir_storage_pool_refresh_async:46,gvir_storage_pool_refresh_finish:46,gvir_storage_pool_set_autostart:46,gvir_storage_pool_start:46,gvir_storage_pool_start_async:46,gvir_storage_pool_start_finish:46,gvir_storage_pool_state_build:46,gvir_storage_pool_state_degrad:46,gvir_storage_pool_state_inaccess:46,gvir_storage_pool_state_inact:46,gvir_storage_pool_state_run:46,gvir_storage_pool_stop:46,gvir_storage_pool_stop_async:46,gvir_storage_pool_stop_finish:46,gvir_storage_pool_undefin:46,gvir_storage_pool_undefine_async:46,gvir_storage_pool_undefine_finish:46,gvir_storage_vol_delet:46,gvir_storage_vol_download:46,gvir_storage_vol_get_config:46,gvir_storage_vol_get_info:46,gvir_storage_vol_get_nam:46,gvir_storage_vol_get_path:46,gvir_storage_vol_res:46,gvir_storage_vol_resize_alloc:46,gvir_storage_vol_resize_delta:46,gvir_storage_vol_resize_non:46,gvir_storage_vol_resize_shrink:46,gvir_storage_vol_state_block:46,gvir_storage_vol_state_dir:46,gvir_storage_vol_state_fil:46,gvir_storage_vol_upload:46,gvir_stream_add_watch:46,gvir_stream_add_watch_ful:46,gvir_stream_io_condition_error:46,gvir_stream_io_condition_hangup:46,gvir_stream_io_condition_read:46,gvir_stream_io_condition_writ:46,gvir_stream_rec:46,gvir_stream_receive_al:46,gvir_stream_send:46,gvir_stream_send_al:46,gvir_type_domain_info:5,gvirconnect:46,gvirconnectionclass:46,gvirdomain:46,gvirdomainclass:46,gvirdomaindeleteflag:46,gvirdomaindevic:46,gvirdomaindeviceclass:46,gvirdomaindisk:46,gvirdomaindiskclass:46,gvirdomaindiskstat:46,gvirdomaininfo:46,gvirdomaininterfac:46,gvirdomaininterfaceclass:46,gvirdomaininterfacestat:46,gvirdomainrebootflag:46,gvirdomainsettimeflag:5,gvirdomainshutdownflag:46,gvirdomainsnapshot:46,gvirdomainsnapshotclass:46,gvirdomainsnapshotcreateflag:46,gvirdomainsnapshotdeleteflag:46,gvirdomainsnapshotlistflag:46,gvirdomainsnapshotrevertflag:46,gvirdomainst:46,gvirdomainstartflag:46,gvirdomainupdatedeviceflag:46,gvirdomainxmlflag:46,gvirinterfac:46,gvirinterfaceclass:46,gviripaddrtyp:46,gvirmanag:46,gvirmanagerclass:46,gvirnetwork:46,gvirnetworkclass:46,gvirnetworkdhcpleas:46,gvirnetworkdhcpleaseclass:46,gvirnetworkfilt:46,gvirnetworkfilterclass:46,gvirnodedevic:46,gvirnodedeviceclass:46,gvirnodeinfo:46,gvirsecret:46,gvirsecretclass:46,gvirstoragepool:46,gvirstoragepoolclass:46,gvirstoragepoolinfo:46,gvirstoragepoolst:46,gvirstoragevol:46,gvirstoragevolclass:46,gvirstoragevolinfo:46,gvirstoragevolresizeflag:46,gvirstoragevoltyp:46,gvirstream:46,gvirstreamclass:46,gvirstreamiocondit:46,gvirstreamiofunc:46,gvirstreamsinkfunc:46,gvirstreamsourcefunc:46,halt:[41,46],hand:5,handl:[3,5,16,18,22,24,26,28,31,33,36,39],hangup:[42,46],has:[3,5,16],has_current_snapshot:5,have:[3,5,20,33,39,41],hierarchi:45,histor:41,homepag:45,host:[3,5,41],hostnam:24,http:45,hypervisor:[3,5,9,13,41],iaid:24,idx:5,imag:[5,9,41],impli:41,inaccess:[41,46],inact:[41,46],index:5,indic:[9,13],individu:[9,13],info:[3,5,22,33,36],inform:[3,41],inherit:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],init_object:[43,46],init_object_check:[43,46],initi:3,input:[3,36],integr:45,interfac:[2,3,13,22,24,44,46],interfaceclass:[1,18,46],intern:[41,46],ioerrorenum:39,iostream:[39,44],iostreamclass:40,ipaddrtyp:[24,41,46],ipv4:[41,46],ipv6:[41,46],is_curr:16,is_open:[3,46],is_read_onli:[3,46],its:[3,5,16,20,33],itself:22,just:41,kilobyt:9,kwarg:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],last:41,leas:[22,24],least:39,leav:[41,46],length:36,level:5,libgovirt:45,librari:45,librest:45,libvirt:45,libvirtgconfig:[3,5,7,16,18,22,26,28,31,33,36,45],libvirtglib:45,libvirtgobject:[0,1,2,41,42,43,44,46,47],limit:36,list:[3,5,20,22,33,41],list_flag:5,live:[41,46],local:5,longer:[3,5,7,9,13,16,18,20,22,26,28,31,33,36],lookup:3,mac:[3,22,24],macaddr:3,machin:[3,5],mai:[5,9,13],mainloop:39,make:41,manag:[2,3,44,46],managerclass:[1,20,46],map:45,maxmem:12,memori:[5,12,30,41],metadata:[41,46],metadata_onli:[41,46],mhz:30,mime:5,model:30,modifi:5,monitor:5,monitor_id:5,more:39,mounter:41,multipl:[5,22],must:[3,5,22],name:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],need:[3,5,7,9,13,16,18,20,22,26,28,31,33,36],neg:41,network:[2,3,9,13,24,44,46],network_filt:26,networkclass:[1,22,46],networkdhcpleas:[2,22,44,46],networkdhcpleaseclass:[1,24,46],networkfilt:[2,44,46],networkfilterclass:[1,26,46],newli:[3,5,33],no_hook:5,no_leav:[41,46],no_metadata:[41,46],no_recurs:5,node:30,node_devic:28,nodedevic:[2,44,46],nodedeviceclass:[1,28,46],nodeinfo:[3,46,47],non:5,none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46],note:5,notifi:39,nrvirtcpu:12,number:[0,24,39],object:[0,3,4,5,6,7,8,9,10,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,36,37,39,40,44],objectclass:[3,4,5,6,7,8,9,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,36,37,39],occur:[3,5],off:41,offset:36,onc:3,one:5,onli:[22,41],opaqu:[0,3,5,16,33,39],open:[3,5,46],open_async:[3,46],open_consol:[5,46],open_finish:[3,46],open_graph:[5,46],open_graphics_fd:[5,46],open_read_onli:[3,46],open_read_only_async:[3,46],open_read_only_finish:[3,46],oper:[3,5],option:22,order:5,org:45,other:5,otherwis:[3,5,9,16,33,36],output:[5,36],ovirt:45,packag:45,pad:[4,6,8,10,14,17,19,21,23,25,27,29,32,34,37,40],pair:5,paramet:[0,3,5,9,16,18,20,22,26,28,31,33,36,39,43],parent:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,41,45],parent_class:[4,6,8,10,14,17,19,21,23,25,27,29,32,34,37,40],parent_inst:39,partial:41,particular:[3,9,13],pass:[0,5,9,16,36,39],path:[3,5],paus:[41,42,46],persist:[3,5,41],placehold:[5,22],pleas:5,pmsuspend:[5,6,41,46],pointer:[0,33,43],pool:[3,33,36],posit:36,possibl:24,pre:5,present:41,prioriti:39,process:5,product:45,project:45,prop:[3,5,7,16,18,22,24,26,28,31,33,36,39],python:46,queri:3,quiesc:[41,46],rais:[3,5,9,13,16,18,22,26,28,31,33,36,39,43],rd_byte:11,rd_req:11,reach:39,reactiv:5,read:[36,39],readabl:[3,5,7,16,18,22,24,26,28,31,33,36,39,42,46],reason:41,reboot:[5,46],receiv:[3,5,20,39,46],receive_al:[39,46],redefin:[41,46],refer:3,refresh:[33,46],refresh_async:[33,46],refresh_finish:[33,46],rel:41,rememb:41,remov:[3,20,41],remove_connect:[20,46],report:16,request:[3,33,39],requir:[5,41],res:[5,16],reset:5,resiz:[9,36,46],resourc:5,rest:45,restor:[3,5,41],restore_domain_from_fil:[3,46],restore_domain_from_file_async:[3,46],restore_domain_from_file_finish:[3,46],result:[3,5,16,33],resum:[5,6,46],resume_async:[5,46],resume_finish:[5,46],reus:41,reuse_ext:[41,46],revert:[16,41],revert_to:[16,46],revert_to_async:[16,46],revert_to_finish:[16,46],riski:41,root:[41,46],rtc:5,run:[3,5,9,41,46],run_first:[3,20],run_last:5,rx_byte:15,rx_drop:15,rx_err:15,rx_packet:15,satisfi:39,save:[3,5,41,46],save_async:[5,46],save_finish:[5,46],save_to_fil:[3,5,46],save_to_file_async:[5,46],save_to_file_finish:[5,46],saved_st:[41,46],screenshot:[5,46],search:3,second:24,secret:[2,44,46],secretclass:[1,31,46],secur:[41,46],see:24,self:[3,5,33,36,39],send:[39,41,46],send_al:[39,46],sendd:39,sensit:41,set:[3,5,16,33,36,39],set_autostart:[33,46],set_config:[5,16,46],set_tim:[5,46],set_time_async:[5,46],set_time_finish:[5,46],shadow:46,should:[3,5,7,9,13,16,18,20,22,26,28,31,33,36,39],shrink:[41,46],shut:41,shutdown:[5,41,46],shutoff:[3,41,46],simpli:39,sinc:24,singl:22,sink:39,size:[9,39,41],snapshot:[5,16,41],snapshots_metadata:[41,46],socket:[5,30],some:5,sourc:39,specif:22,specifi:[5,22],stai:5,start:[3,5,6,23,33,36,46],start_async:[5,33,46],start_domain:[3,46],start_finish:[5,33,46],stat:[9,13],state:[3,5,12,35,41],statist:[9,13],stop:[5,6,23,33,41,46],stop_async:[33,46],stop_finish:[33,46],storag:[3,33,36],storage_pool:33,storage_vol:36,storagepool:[2,3,36,44,46],storagepoolclass:[1,33,46],storagepoolinfo:[33,46,47],storagepoolst:[35,41,46],storagevol:[2,33,44,46],storagevolclass:[1,36,46],storagevolinfo:[36,46,47],storagevolresizeflag:[36,41,46],storagevoltyp:[38,41,46],store:41,str:[0,3,5,16,18,20,22,24,26,28,31,33,36,39,43],stream:[0,2,3,5,36,44,46],stream_new:4,streamclass:[1,39,46],streamiocondit:[0,39,42,46],streamiofunc:[0,39,46],streamsinkfunc:[0,39,46],streamsourcefunc:[0,39,46],string:[3,5],struct:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],structur:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39,45],subclass:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],success:[3,5,16,33,36],successfulli:[3,5,9,16],support:[9,13,22],suspend:[5,6,46],symbol:45,system:41,take:5,taken:41,text:5,than:39,thi:[3,5,9,13,22,24,39,41],thread:30,through:3,time:[5,24],too:[22,41],tracker:45,tri:5,tx_byte:15,tx_drop:15,tx_err:15,tx_packet:15,type:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,43],undefin:[33,46],undefine_async:[33,46],undefine_finish:[33,46],unref:[3,5,7,9,13,16,18,20,22,26,28,31,33,36],until:5,unus:[5,9,16],updat:[5,6,16,41],update_cpu:[41,46],update_devic:[5,46],upload:[36,46],upon:[0,3,5,39],uri:[3,20],use:[3,5,36,41],used:[3,5,36],user:[0,39],user_data:[0,3,5,16,33,39],uses:45,using:[3,5,22,33],utc:5,uuid:3,valu:[3,5,7,16,18,22,24,26,28,31,33,36,39,41,42],variant:[3,5],version:[3,5],virstreamrecv:39,volum:[33,36],wakeup:[5,46],wakeup_async:[5,46],wakeup_finish:[5,46],want:39,watch:39,well:45,when:[3,5,7,9,13,16,18,20,22,26,28,31,33,36,39,41],whether:33,which:[3,5,9,13,16,20,39,41],within:[9,13,41],without:[3,5,41],work:5,would_block:39,wr_byte:11,wr_req:11,writabl:[3,5,7,16,18,22,24,26,28,31,33,36,39,42,46],write:[36,39],written:39,yet:36,you:39},titles:["Callbacks","Class Structures","Classes","LibvirtGObject.Connection","LibvirtGObject.ConnectionClass","LibvirtGObject.Domain","LibvirtGObject.DomainClass","LibvirtGObject.DomainDevice","LibvirtGObject.DomainDeviceClass","LibvirtGObject.DomainDisk","LibvirtGObject.DomainDiskClass","LibvirtGObject.DomainDiskStats","LibvirtGObject.DomainInfo","LibvirtGObject.DomainInterface","LibvirtGObject.DomainInterfaceClass","LibvirtGObject.DomainInterfaceStats","LibvirtGObject.DomainSnapshot","LibvirtGObject.DomainSnapshotClass","LibvirtGObject.Interface","LibvirtGObject.InterfaceClass","LibvirtGObject.Manager","LibvirtGObject.ManagerClass","LibvirtGObject.Network","LibvirtGObject.NetworkClass","LibvirtGObject.NetworkDHCPLease","LibvirtGObject.NetworkDHCPLeaseClass","LibvirtGObject.NetworkFilter","LibvirtGObject.NetworkFilterClass","LibvirtGObject.NodeDevice","LibvirtGObject.NodeDeviceClass","LibvirtGObject.NodeInfo","LibvirtGObject.Secret","LibvirtGObject.SecretClass","LibvirtGObject.StoragePool","LibvirtGObject.StoragePoolClass","LibvirtGObject.StoragePoolInfo","LibvirtGObject.StorageVol","LibvirtGObject.StorageVolClass","LibvirtGObject.StorageVolInfo","LibvirtGObject.Stream","LibvirtGObject.StreamClass","Enums","Flags","Functions","Hierarchy","LibvirtGObject 1.0 (1.0.0)","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],"enum":41,"function":43,api:45,callback:0,connect:3,connectionclass:4,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],domain:5,domainclass:6,domaindevic:7,domaindeviceclass:8,domaindisk:9,domaindiskclass:10,domaindiskstat:11,domaininfo:12,domaininterfac:13,domaininterfaceclass:14,domaininterfacestat:15,domainsnapshot:16,domainsnapshotclass:17,field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],flag:42,hierarchi:44,interfac:18,interfaceclass:19,libvirtgobject:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,45],manag:20,managerclass:21,map:46,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],network:22,networkclass:23,networkdhcpleas:24,networkdhcpleaseclass:25,networkfilt:26,networkfilterclass:27,nodedevic:28,nodedeviceclass:29,nodeinfo:30,properti:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],secret:31,secretclass:32,signal:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39],storagepool:33,storagepoolclass:34,storagepoolinfo:35,storagevol:36,storagevolclass:37,storagevolinfo:38,stream:39,streamclass:40,structur:[1,47],symbol:46,virtual:[3,5,7,9,13,16,18,20,22,24,26,28,31,33,36,39]}})