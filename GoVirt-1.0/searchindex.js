Search.setIndex({docnames:["class-structs","classes","classes/Api","classes/ApiClass","classes/Cdrom","classes/CdromClass","classes/Collection","classes/CollectionClass","classes/Proxy","classes/ProxyClass","classes/Resource","classes/ResourceClass","classes/StorageDomain","classes/StorageDomainClass","classes/Vm","classes/VmClass","classes/VmDisplay","classes/VmDisplayClass","classes/VmPool","classes/VmPoolClass","enums","functions","hierarchy","index","mapping"],envversion:52,filenames:["class-structs.rst","classes.rst","classes/Api.rst","classes/ApiClass.rst","classes/Cdrom.rst","classes/CdromClass.rst","classes/Collection.rst","classes/CollectionClass.rst","classes/Proxy.rst","classes/ProxyClass.rst","classes/Resource.rst","classes/ResourceClass.rst","classes/StorageDomain.rst","classes/StorageDomainClass.rst","classes/Vm.rst","classes/VmClass.rst","classes/VmDisplay.rst","classes/VmDisplayClass.rst","classes/VmPool.rst","classes/VmPoolClass.rst","enums.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst"],objects:{"GoVirt.Api":{"new":[2,2,1,""],get_storage_domains:[2,1,1,""],get_vm_pools:[2,1,1,""],get_vms:[2,1,1,""]},"GoVirt.Cdrom":{update:[4,1,1,""],update_async:[4,1,1,""],update_finish:[4,1,1,""]},"GoVirt.Cdrom.props":{file:[4,3,1,""]},"GoVirt.Collection":{fetch:[6,1,1,""],fetch_async:[6,1,1,""],fetch_finish:[6,1,1,""],get_resources:[6,1,1,""],lookup_resource:[6,1,1,""]},"GoVirt.Collection.props":{collection_xml_name:[6,3,1,""],href:[6,3,1,""],resource_type:[6,3,1,""],resource_xml_name:[6,3,1,""],resources:[6,3,1,""]},"GoVirt.Error":{ACTION_FAILED:[20,4,1,""],BAD_URI:[20,4,1,""],FAILED:[20,4,1,""],NOT_SUPPORTED:[20,4,1,""],PARSING_FAILED:[20,4,1,""],quark:[20,2,1,""]},"GoVirt.Proxy":{"new":[8,2,1,""],add_header:[8,1,1,""],fetch_api:[8,1,1,""],fetch_api_async:[8,1,1,""],fetch_api_finish:[8,1,1,""],fetch_ca_certificate:[8,1,1,""],fetch_ca_certificate_async:[8,1,1,""],fetch_ca_certificate_finish:[8,1,1,""],fetch_vms:[8,1,1,""],fetch_vms_async:[8,1,1,""],fetch_vms_finish:[8,1,1,""],get_api:[8,1,1,""],get_vms:[8,1,1,""],lookup_vm:[8,1,1,""]},"GoVirt.Proxy.props":{admin:[8,3,1,""],ca_cert:[8,3,1,""],session_id:[8,3,1,""],sso_token:[8,3,1,""]},"GoVirt.Resource":{"delete":[10,1,1,""],delete_async:[10,1,1,""],delete_finish:[10,1,1,""],do_init_from_xml:[10,1,1,""],do_to_xml:[10,1,1,""],get_sub_collection:[10,1,1,""],refresh:[10,1,1,""],refresh_async:[10,1,1,""],refresh_finish:[10,1,1,""],update:[10,1,1,""],update_async:[10,1,1,""],update_finish:[10,1,1,""]},"GoVirt.Resource.props":{description:[10,3,1,""],guid:[10,3,1,""],href:[10,3,1,""],name:[10,3,1,""],xml_node:[10,3,1,""]},"GoVirt.RestCallError":{CANCELLED:[20,4,1,""],XML:[20,4,1,""],quark:[20,2,1,""]},"GoVirt.StorageDomain":{"new":[12,2,1,""],get_files:[12,1,1,""]},"GoVirt.StorageDomain.props":{available:[12,3,1,""],committed:[12,3,1,""],master:[12,3,1,""],state:[12,3,1,""],type:[12,3,1,""],used:[12,3,1,""],version:[12,3,1,""]},"GoVirt.StorageDomainFormatVersion":{V1:[20,4,1,""],V2:[20,4,1,""],V3:[20,4,1,""]},"GoVirt.StorageDomainState":{ACTIVE:[20,4,1,""],INACTIVE:[20,4,1,""],LOCKED:[20,4,1,""],MAINTENANCE:[20,4,1,""],MIXED:[20,4,1,""],UNATTACHED:[20,4,1,""],UNKNOWN:[20,4,1,""]},"GoVirt.StorageDomainType":{DATA:[20,4,1,""],EXPORT:[20,4,1,""],IMAGE:[20,4,1,""],ISO:[20,4,1,""]},"GoVirt.Vm":{"new":[14,2,1,""],get_cdroms:[14,1,1,""],get_ticket:[14,1,1,""],get_ticket_async:[14,1,1,""],get_ticket_finish:[14,1,1,""],refresh_async:[14,1,1,""],refresh_finish:[14,1,1,""],start:[14,1,1,""],start_async:[14,1,1,""],start_finish:[14,1,1,""],stop:[14,1,1,""],stop_async:[14,1,1,""],stop_finish:[14,1,1,""]},"GoVirt.Vm.props":{display:[14,3,1,""],state:[14,3,1,""]},"GoVirt.VmDisplay":{"new":[16,2,1,""]},"GoVirt.VmDisplay.props":{address:[16,3,1,""],allow_override:[16,3,1,""],ca_cert:[16,3,1,""],expiry:[16,3,1,""],host_subject:[16,3,1,""],monitor_count:[16,3,1,""],port:[16,3,1,""],proxy_url:[16,3,1,""],secure_port:[16,3,1,""],smartcard:[16,3,1,""],ticket:[16,3,1,""],type:[16,3,1,""]},"GoVirt.VmDisplayType":{SPICE:[20,4,1,""],VNC:[20,4,1,""]},"GoVirt.VmPool":{"new":[18,2,1,""],allocate_vm:[18,1,1,""],allocate_vm_async:[18,1,1,""],allocate_vm_finish:[18,1,1,""]},"GoVirt.VmPool.props":{max_user_vms:[18,3,1,""],prestarted_vms:[18,3,1,""],size:[18,3,1,""]},"GoVirt.VmState":{DOWN:[20,4,1,""],IMAGE_LOCKED:[20,4,1,""],MIGRATING:[20,4,1,""],NOT_RESPONDING:[20,4,1,""],PAUSED:[20,4,1,""],POWERED_DOWN:[20,4,1,""],POWERING_DOWN:[20,4,1,""],POWERING_UP:[20,4,1,""],REBOOTING:[20,4,1,""],REBOOT_IN_PROGRESS:[20,4,1,""],RESTORING_STATE:[20,4,1,""],SAVING_STATE:[20,4,1,""],SUSPENDED:[20,4,1,""],UNKNOWN:[20,4,1,""],UP:[20,4,1,""],WAIT_FOR_LAUNCH:[20,4,1,""]},GoVirt:{Api:[2,0,1,""],ApiClass:[3,0,1,""],Cdrom:[4,0,1,""],CdromClass:[5,0,1,""],Collection:[6,0,1,""],CollectionClass:[7,0,1,""],Error:[20,0,1,""],Proxy:[8,0,1,""],ProxyClass:[9,0,1,""],Resource:[10,0,1,""],ResourceClass:[11,0,1,""],RestCallError:[20,0,1,""],StorageDomain:[12,0,1,""],StorageDomainClass:[13,0,1,""],StorageDomainFormatVersion:[20,0,1,""],StorageDomainState:[20,0,1,""],StorageDomainType:[20,0,1,""],Vm:[14,0,1,""],VmClass:[15,0,1,""],VmDisplay:[16,0,1,""],VmDisplayClass:[17,0,1,""],VmDisplayType:[20,0,1,""],VmPool:[18,0,1,""],VmPoolClass:[19,0,1,""],VmState:[20,0,1,""],error_quark:[21,5,1,""],rest_call_error_quark:[21,5,1,""],set_proxy_options:[21,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:attribute","5":"py:function"},terms:{"abstract":[2,4,6,8,10,12,14,16,18],"byte":12,"class":[3,5,7,9,11,13,15,17,19,20,23],"default":[4,6,8,10,12,14,16,18],"enum":23,"export":[20,24],"function":[6,8,23],"int":[12,16,18,20,21],"new":[2,8,12,14,16,18,24],"return":[2,4,6,8,10,12,14,16,18,20,21],"short":[4,6,8,10,12,14,16,18],"true":[6,10],TLS:16,The:[8,10,18],Use:8,VMs:[8,18,23],about:10,access:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23],accord:21,action_fail:[20,24],activ:[2,6,8,12,14,20,24],add:8,add_head:[8,24],address:16,admin:8,alloc:18,allocate_vm:[18,24],allocate_vm_async:[18,24],allocate_vm_finish:[18,24],allow:[8,16,23],allow_overrid:16,alreadi:8,ani:[2,6,8,12,14],api:[1,8,10,22,24],apiclass:[0,2,24],applic:23,argument:21,associ:[8,12,14],async:[6,8],asynchron:10,asyncreadycallback:[4,6,8,10,14,18],asyncresult:[4,6,8,10,14,18],authent:8,avail:12,bad_uri:[20,24],base:[2,4,6,8,10,12,14,16,18,20,23],becom:8,been:[6,8],befor:[2,6,8],block:10,bool:[4,6,8,10,12,14,16,18],bytearrai:[8,16],ca_cert:[8,16],call:[6,8,10],callback:[4,6,8,10,14,18],can:[8,10,18],cancel:[4,6,8,10,14,18,20,24],cannot:[6,8],care:10,cdrom:[1,10,14,22,24],cdromclass:[0,4,24],cert:[8,16],certif:[8,16],classmethod:[2,8,12,14,16,18,20],collect:[1,2,8,12,14,22,24],collection_xml_nam:6,collectionclass:[0,6,24],commandlin:21,commit:12,commun:8,complet:[6,8,10],connect:[8,16,23],construct_onli:[6,10],contain:[6,8],content:[2,6,8],cooki:8,count:16,current:4,data:[6,8,10,12,20,24],date:2,debian:23,delet:[10,24],delete_async:[10,24],delete_finish:[10,24],depend:[8,23],descript:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23],differ:8,displai:[14,16],do_init_from_xml:10,do_to_xml:10,doe:[2,6,8,12,14],domain:12,don:10,down:[14,20,24],each:8,element:6,enabl:16,entri:8,error:[4,6,8,10,14,18,20,24],error_quark:[21,24],exist:8,expiri:16,fail:[20,24],fals:[6,8,10,12,16],fetch:[2,6,8,12,14,24],fetch_api:[8,24],fetch_api_async:[8,24],fetch_api_finish:[8,24],fetch_async:[6,12,14,24],fetch_ca_certif:[8,24],fetch_ca_certificate_async:[8,24],fetch_ca_certificate_finish:[8,24],fetch_finish:[6,24],fetch_vm:[8,24],fetch_vms_async:[8,24],fetch_vms_finish:[8,24],file:[4,8,12],fill:10,finish:10,first:8,flag:[4,6,8,10,12,14,16,18],format:12,found:[6,8],freed:8,from:[8,12,14,18],g_list_fre:8,genum:20,get:[8,10,12,14,23],get_api:[8,24],get_cdrom:[14,24],get_fil:[12,24],get_resourc:[6,24],get_storage_domain:[2,24],get_sub_collect:[10,24],get_ticket:[14,24],get_ticket_async:[14,24],get_ticket_finish:[14,24],get_vm:[2,8,24],get_vm_pool:[2,24],ginterfac:[2,4,10,12,14,18],gio:[2,4,6,8,10,12,14,18,23],gir1:23,given:21,glib:[4,6,8,10,14,16,18],gobject:[2,4,6,7,8,10,11,12,14,16,17,18,20,22,23],govirt:[0,1,20,21,22,24],group:21,gtype:6,guid:10,hash:6,hashtabl:6,have:[2,6,8],header:8,held:6,hierarchi:23,host:[8,16],host_subject:16,href:[6,10],http:[8,10],imag:[4,20,24],image_lock:[20,24],inact:[20,24],indic:[8,12,16],inform:14,inherit:[2,4,6,8,10,12,14,16,18],init:[2,4,10,12,14,18],init_from_xml:11,initi:[2,6,8,12,14],instanc:[8,23],interact:8,invalid:8,invoc:10,invok:10,iso:[20,24],jsessionid:8,kwarg:[2,4,6,8,10,12,14,16,18],libgovirt:23,librari:23,list:[8,12,14,23],lock:[20,24],look:[6,8],lookup:[6,8],lookup_resourc:[6,24],lookup_vm:[8,24],machin:[8,14,16],mainten:[20,24],make:23,manag:23,map:23,master:12,max:18,max_user_vm:18,migrat:[20,24],mix:[20,24],monitor:16,monitor_count:16,must:[2,6,8,12,14],name:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],need:23,network:[2,6,8,12,14],node:10,none:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],not_respond:[20,24],not_support:[20,24],now:8,number:18,object:[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,22],objectclass:[2,4,6,7,8,10,11,12,14,16,17,18],old:8,opaqu:[6,8],option:21,otherwis:[6,10],overrid:16,ovirt:[8,23],ovirt_api_get_storage_domain:24,ovirt_api_get_vm:24,ovirt_api_get_vm_pool:24,ovirt_api_new:24,ovirt_cdrom_upd:24,ovirt_cdrom_update_async:24,ovirt_cdrom_update_finish:24,ovirt_collection_fetch:24,ovirt_collection_fetch_async:24,ovirt_collection_fetch_finish:24,ovirt_collection_get_resourc:24,ovirt_collection_lookup_resourc:24,ovirt_error_action_fail:24,ovirt_error_bad_uri:24,ovirt_error_fail:24,ovirt_error_not_support:24,ovirt_error_parsing_fail:24,ovirt_error_quark:24,ovirt_get_option_group:[21,24],ovirt_proxy_add_head:24,ovirt_proxy_add_headers_from_valist:24,ovirt_proxy_fetch_api:24,ovirt_proxy_fetch_api_async:24,ovirt_proxy_fetch_api_finish:24,ovirt_proxy_fetch_ca_certif:24,ovirt_proxy_fetch_ca_certificate_async:24,ovirt_proxy_fetch_ca_certificate_finish:24,ovirt_proxy_fetch_vm:24,ovirt_proxy_fetch_vms_async:24,ovirt_proxy_fetch_vms_finish:24,ovirt_proxy_get_api:24,ovirt_proxy_get_vm:24,ovirt_proxy_lookup_vm:24,ovirt_proxy_new:24,ovirt_resource_delet:24,ovirt_resource_delete_async:24,ovirt_resource_delete_finish:24,ovirt_resource_get_sub_collect:24,ovirt_resource_refresh:24,ovirt_resource_refresh_async:24,ovirt_resource_refresh_finish:24,ovirt_resource_upd:24,ovirt_resource_update_async:24,ovirt_resource_update_finish:24,ovirt_rest_call_error_cancel:24,ovirt_rest_call_error_quark:24,ovirt_rest_call_error_xml:24,ovirt_set_proxy_opt:24,ovirt_storage_domain_format_version_v1:24,ovirt_storage_domain_format_version_v2:24,ovirt_storage_domain_format_version_v3:24,ovirt_storage_domain_get_fil:24,ovirt_storage_domain_new:24,ovirt_storage_domain_state_act:24,ovirt_storage_domain_state_inact:24,ovirt_storage_domain_state_lock:24,ovirt_storage_domain_state_mainten:24,ovirt_storage_domain_state_mix:24,ovirt_storage_domain_state_unattach:24,ovirt_storage_domain_state_unknown:24,ovirt_storage_domain_type_data:24,ovirt_storage_domain_type_export:24,ovirt_storage_domain_type_imag:24,ovirt_storage_domain_type_iso:24,ovirt_vm_display_new:24,ovirt_vm_display_spic:24,ovirt_vm_display_vnc:24,ovirt_vm_get_cdrom:24,ovirt_vm_get_ticket:24,ovirt_vm_get_ticket_async:24,ovirt_vm_get_ticket_finish:24,ovirt_vm_new:24,ovirt_vm_pool_allocate_vm:24,ovirt_vm_pool_allocate_vm_async:24,ovirt_vm_pool_allocate_vm_finish:24,ovirt_vm_pool_new:24,ovirt_vm_refresh_async:24,ovirt_vm_refresh_finish:24,ovirt_vm_start:24,ovirt_vm_start_async:24,ovirt_vm_start_finish:24,ovirt_vm_state_down:24,ovirt_vm_state_image_lock:24,ovirt_vm_state_migr:24,ovirt_vm_state_not_respond:24,ovirt_vm_state_paus:24,ovirt_vm_state_powered_down:24,ovirt_vm_state_powering_down:24,ovirt_vm_state_powering_up:24,ovirt_vm_state_reboot:24,ovirt_vm_state_reboot_in_progress:24,ovirt_vm_state_restoring_st:24,ovirt_vm_state_saving_st:24,ovirt_vm_state_suspend:24,ovirt_vm_state_unknown:24,ovirt_vm_state_up:24,ovirt_vm_state_wait_for_launch:24,ovirt_vm_stop:24,ovirt_vm_stop_async:24,ovirt_vm_stop_finish:24,ovirtapi:24,ovirtapiclass:24,ovirtcdrom:24,ovirtcdromclass:24,ovirtcollect:24,ovirtcollectionclass:24,ovirterror:24,ovirtproxi:24,ovirtproxyclass:24,ovirtresourc:[6,24],ovirtresourceclass:24,ovirtrestcallerror:24,ovirtstoragedomain:24,ovirtstoragedomainclass:24,ovirtstoragedomainformatvers:24,ovirtstoragedomainst:24,ovirtstoragedomaintyp:24,ovirtvm:24,ovirtvmclass:24,ovirtvmdisplai:24,ovirtvmdisplayclass:24,ovirtvmdisplaytyp:24,ovirtvmpool:24,ovirtvmpoolclass:24,ovirtvmst:24,packag:23,pad:[3,5,7,11,13,15,17,19],padding0:11,paramet:[4,6,8,10,14,18,21,23],parent:[2,4,6,8,10,12,14,16,18,23],parent_class:[3,5,7,9,11,13,15,17,19],parsing_fail:[20,24],pass:10,path:8,paus:[20,24],point:8,pool:18,port:16,powered_down:[20,24],powering_down:[20,24],powering_up:[20,24],prestart:18,prestarted_vm:18,priviledg:8,process:10,project:23,prop:[4,6,8,10,12,14,16,18],properti:21,proxi:[1,4,6,10,14,16,18,21,22,24],proxy_url:16,proxyclass:[0,8,24],python:24,quark:[20,24],rais:[4,6,8,10,14,18],readabl:[4,6,8,10,12,14,16,18],reboot:[20,24],reboot_in_progress:[20,24],refresh:[10,24],refresh_async:[10,14,24],refresh_finish:[10,14,24],regular:8,rel:6,remot:[6,8,12,14],remov:8,replac:8,repres:[12,14],request:[8,10],requir:8,resourc:[1,2,4,6,8,12,14,18,22,24],resource_typ:6,resource_xml_nam:6,resourceclass:[0,3,5,10,13,15,19,24],rest:[8,9,10,22,23],rest_call_error_quark:[21,24],restcallerror:[20,24],restoring_st:[20,24],result:[4,6,8,10,14,18],rhev:8,same:8,saving_st:[20,24],secur:16,secure_port:16,see:10,self:[6,10,12,14],send:10,session:8,session_id:8,set:[6,21],set_proxy_opt:[21,24],should:8,shown:8,size:18,smartcard:16,space:12,spice:[16,20,23,24],sso:8,sso_token:8,start:[8,14,24],start_async:[14,24],start_finish:[14,24],state:[12,14],stop:[14,24],stop_async:[14,24],stop_finish:[14,24],storag:12,storagedomain:[1,10,22,24],storagedomainclass:[0,12,24],storagedomainformatvers:[12,20,24],storagedomainst:[12,20,24],storagedomaintyp:[12,20,24],store:6,str:[4,6,8,10,16],struct:[2,4,6,8,10,12,14,16,18],structur:[2,4,6,8,10,12,14,16,18,23],sub_collect:10,subclass:[2,4,6,8,10,12,14,16,18],subject:16,success:[6,10],support:16,suspend:[20,24],symbol:23,tabl:6,thei:8,them:23,thi:[2,6,8,10,12,14],thread:10,ticket:16,time:[8,16],to_xml:11,token:8,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],unattach:[20,24],unavail:24,unknown:[12,20,24],until:10,updat:[4,10,24],update_async:[4,10,24],update_finish:[4,10,24],upon:21,url:16,use:[8,16,23],used:[8,12],user:[8,18],user_data:[4,6,8,10,14,18],using:[12,14],valu:[4,6,8,10,12,14,16,18,20],variou:21,version:[8,10,12],virt:[8,16],vm_name:8,vmclass:[0,14,24],vmdisplai:[1,14,22,24],vmdisplayclass:[0,16,24],vmdisplaytyp:[16,20,24],vmpool:[1,10,22,24],vmpoolclass:[0,18,24],vms:18,vmstate:[14,20,24],vnc:[20,23,24],wait_for_launch:[20,24],when:10,whether:[8,12,16],whose:[6,8],without:8,writabl:[4,6,8,10,12,14,16,18],xml:[6,10,20,24],xml_node:10,xmlnode:10,you:10},titles:["Class Structures","Classes","GoVirt.Api","GoVirt.ApiClass","GoVirt.Cdrom","GoVirt.CdromClass","GoVirt.Collection","GoVirt.CollectionClass","GoVirt.Proxy","GoVirt.ProxyClass","GoVirt.Resource","GoVirt.ResourceClass","GoVirt.StorageDomain","GoVirt.StorageDomainClass","GoVirt.Vm","GoVirt.VmClass","GoVirt.VmDisplay","GoVirt.VmDisplayClass","GoVirt.VmPool","GoVirt.VmPoolClass","Enums","Functions","Hierarchy","GoVirt 1.0 (0.3.4)","Symbol Mapping"],titleterms:{"class":[0,1,2,4,6,8,10,12,14,16,18],"enum":20,"function":21,api:[2,23],apiclass:3,cdrom:4,cdromclass:5,collect:6,collectionclass:7,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],govirt:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23],hierarchi:22,map:24,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],properti:[2,4,6,8,10,12,14,16,18],proxi:8,proxyclass:9,resourc:10,resourceclass:11,signal:[2,4,6,8,10,12,14,16,18],storagedomain:12,storagedomainclass:13,structur:0,symbol:24,virtual:[2,4,6,8,10,12,14,16,18],vmclass:15,vmdisplai:16,vmdisplayclass:17,vmpool:18,vmpoolclass:19}})