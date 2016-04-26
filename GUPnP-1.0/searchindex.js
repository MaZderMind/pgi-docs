Search.setIndex({envversion:49,filenames:["callbacks","class-structs","classes","classes/Acl","classes/AclInterface","classes/Context","classes/ContextClass","classes/ContextManager","classes/ContextManagerClass","classes/ControlPoint","classes/ControlPointClass","classes/Device","classes/DeviceClass","classes/DeviceInfo","classes/DeviceInfoClass","classes/DeviceProxy","classes/DeviceProxyClass","classes/ResourceFactory","classes/ResourceFactoryClass","classes/RootDevice","classes/RootDeviceClass","classes/Service","classes/ServiceAction","classes/ServiceActionArgInfo","classes/ServiceActionInfo","classes/ServiceClass","classes/ServiceInfo","classes/ServiceInfoClass","classes/ServiceIntrospection","classes/ServiceIntrospectionClass","classes/ServiceProxy","classes/ServiceProxyAction","classes/ServiceProxyClass","classes/ServiceStateVariableInfo","classes/WhiteList","classes/WhiteListClass","classes/XMLDoc","classes/XMLDocClass","enums","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],objects:{"GUPnP.Acl":{can_sync:[3,1,1,""],do_can_sync:[3,1,1,""],do_is_allowed:[3,1,1,""],do_is_allowed_async:[3,1,1,""],do_is_allowed_finish:[3,1,1,""],is_allowed:[3,1,1,""],is_allowed_async:[3,1,1,""],is_allowed_finish:[3,1,1,""]},"GUPnP.Context":{"new":[5,2,1,""],add_server_handler:[5,1,1,""],get_acl:[5,1,1,""],get_default_language:[5,1,1,""],get_host_ip:[5,1,1,""],get_port:[5,1,1,""],get_server:[5,1,1,""],get_session:[5,1,1,""],get_subscription_timeout:[5,1,1,""],host_path:[5,1,1,""],host_path_for_agent:[5,1,1,""],remove_server_handler:[5,1,1,""],set_acl:[5,1,1,""],set_default_language:[5,1,1,""],set_subscription_timeout:[5,1,1,""],unhost_path:[5,1,1,""]},"GUPnP.Context.props":{acl:[5,3,1,""],default_language:[5,3,1,""],port:[5,3,1,""],server:[5,3,1,""],session:[5,3,1,""],subscription_timeout:[5,3,1,""]},"GUPnP.ContextManager":{"new":[7,2,1,""],create:[7,2,1,""],get_port:[7,1,1,""],get_white_list:[7,1,1,""],manage_control_point:[7,1,1,""],manage_root_device:[7,1,1,""],rescan_control_points:[7,1,1,""]},"GUPnP.ContextManager.props":{main_context:[7,3,1,""],port:[7,3,1,""],white_list:[7,3,1,""]},"GUPnP.ContextManager.signals":{context_available:[7,4,1,""],context_unavailable:[7,4,1,""]},"GUPnP.ControlError":{ACTION_FAILED:[38,5,1,""],INVALID_ACTION:[38,5,1,""],INVALID_ARGS:[38,5,1,""],OUT_OF_SYNC:[38,5,1,""]},"GUPnP.ControlPoint":{"new":[9,2,1,""],do_device_proxy_available:[9,1,1,""],do_device_proxy_unavailable:[9,1,1,""],do_service_proxy_available:[9,1,1,""],do_service_proxy_unavailable:[9,1,1,""],get_context:[9,1,1,""],get_resource_factory:[9,1,1,""],list_device_proxies:[9,1,1,""],list_service_proxies:[9,1,1,""],new_full:[9,2,1,""]},"GUPnP.ControlPoint.props":{resource_factory:[9,3,1,""]},"GUPnP.ControlPoint.signals":{device_proxy_available:[9,4,1,""],device_proxy_unavailable:[9,4,1,""],service_proxy_available:[9,4,1,""],service_proxy_unavailable:[9,4,1,""]},"GUPnP.Device.props":{root_device:[11,3,1,""]},"GUPnP.DeviceInfo":{get_context:[13,1,1,""],get_description_value:[13,1,1,""],get_device:[13,1,1,""],get_device_type:[13,1,1,""],get_friendly_name:[13,1,1,""],get_icon_url:[13,1,1,""],get_location:[13,1,1,""],get_manufacturer:[13,1,1,""],get_manufacturer_url:[13,1,1,""],get_model_description:[13,1,1,""],get_model_name:[13,1,1,""],get_model_number:[13,1,1,""],get_model_url:[13,1,1,""],get_presentation_url:[13,1,1,""],get_resource_factory:[13,1,1,""],get_serial_number:[13,1,1,""],get_service:[13,1,1,""],get_udn:[13,1,1,""],get_upc:[13,1,1,""],get_url_base:[13,1,1,""],list_device_types:[13,1,1,""],list_devices:[13,1,1,""],list_dlna_capabilities:[13,1,1,""],list_dlna_device_class_identifier:[13,1,1,""],list_service_types:[13,1,1,""],list_services:[13,1,1,""]},"GUPnP.DeviceInfo.props":{context:[13,3,1,""],device_type:[13,3,1,""],document:[13,3,1,""],element:[13,3,1,""],location:[13,3,1,""],resource_factory:[13,3,1,""],udn:[13,3,1,""],url_base:[13,3,1,""]},"GUPnP.EventingError":{NOTIFY_FAILED:[38,5,1,""],SUBSCRIPTION_FAILED:[38,5,1,""],SUBSCRIPTION_LOST:[38,5,1,""]},"GUPnP.ResourceFactory":{"new":[17,2,1,""],get_default:[17,2,1,""],register_resource_proxy_type:[17,1,1,""],register_resource_type:[17,1,1,""],unregister_resource_proxy_type:[17,1,1,""],unregister_resource_type:[17,1,1,""]},"GUPnP.RootDevice":{"new":[19,2,1,""],get_available:[19,1,1,""],get_description_dir:[19,1,1,""],get_description_path:[19,1,1,""],get_relative_location:[19,1,1,""],get_ssdp_resource_group:[19,1,1,""],new_full:[19,2,1,""],set_available:[19,1,1,""]},"GUPnP.RootDevice.props":{available:[19,3,1,""],description_dir:[19,3,1,""],description_doc:[19,3,1,""],description_path:[19,3,1,""]},"GUPnP.ServerError":{INTERNAL_SERVER_ERROR:[38,5,1,""],INVALID_RESPONSE:[38,5,1,""],INVALID_URL:[38,5,1,""],NOT_FOUND:[38,5,1,""],NOT_IMPLEMENTED:[38,5,1,""],OTHER:[38,5,1,""]},"GUPnP.Service":{do_action_invoked:[21,1,1,""],do_query_variable:[21,1,1,""],freeze_notify:[21,1,1,""],notify_value:[21,1,1,""],signals_autoconnect:[21,1,1,""],thaw_notify:[21,1,1,""]},"GUPnP.Service.props":{root_device:[21,3,1,""]},"GUPnP.Service.signals":{action_invoked:[21,4,1,""],notify_failed:[21,4,1,""],query_variable:[21,4,1,""]},"GUPnP.ServiceAction":{get_argument_count:[22,1,1,""],get_locales:[22,1,1,""],get_message:[22,1,1,""],get_name:[22,1,1,""],get_value:[22,1,1,""],get_values:[22,1,1,""],return_:[22,1,1,""],return_error:[22,1,1,""],set_value:[22,1,1,""],set_values:[22,1,1,""]},"GUPnP.ServiceActionArgDirection":{IN:[38,5,1,""],OUT:[38,5,1,""]},"GUPnP.ServiceInfo":{get_context:[26,1,1,""],get_control_url:[26,1,1,""],get_event_subscription_url:[26,1,1,""],get_id:[26,1,1,""],get_introspection:[26,1,1,""],get_introspection_async:[26,1,1,""],get_introspection_async_full:[26,1,1,""],get_location:[26,1,1,""],get_scpd_url:[26,1,1,""],get_service_type:[26,1,1,""],get_udn:[26,1,1,""],get_url_base:[26,1,1,""]},"GUPnP.ServiceInfo.props":{context:[26,3,1,""],document:[26,3,1,""],element:[26,3,1,""],location:[26,3,1,""],service_type:[26,3,1,""],udn:[26,3,1,""],url_base:[26,3,1,""]},"GUPnP.ServiceIntrospection":{get_action:[28,1,1,""],get_state_variable:[28,1,1,""],list_action_names:[28,1,1,""],list_actions:[28,1,1,""],list_state_variable_names:[28,1,1,""],list_state_variables:[28,1,1,""]},"GUPnP.ServiceIntrospection.props":{scpd:[28,3,1,""]},"GUPnP.ServiceProxy":{add_notify:[30,1,1,""],add_raw_notify:[30,1,1,""],begin_action_list:[30,1,1,""],cancel_action:[30,1,1,""],do_subscription_lost:[30,1,1,""],end_action_hash:[30,1,1,""],end_action_list:[30,1,1,""],get_subscribed:[30,1,1,""],remove_notify:[30,1,1,""],remove_raw_notify:[30,1,1,""],send_action_list:[30,1,1,""],set_subscribed:[30,1,1,""]},"GUPnP.ServiceProxy.props":{subscribed:[30,3,1,""]},"GUPnP.ServiceProxy.signals":{subscription_lost:[30,4,1,""]},"GUPnP.WhiteList":{"new":[34,2,1,""],add_entry:[34,1,1,""],add_entryv:[34,1,1,""],check_context:[34,1,1,""],clear:[34,1,1,""],get_enabled:[34,1,1,""],get_entries:[34,1,1,""],is_empty:[34,1,1,""],remove_entry:[34,1,1,""],set_enabled:[34,1,1,""]},"GUPnP.WhiteList.props":{enabled:[34,3,1,""],entries:[34,3,1,""]},"GUPnP.XMLDoc":{"new":[36,2,1,""],new_from_path:[36,2,1,""]},"GUPnP.XMLError":{EMPTY_NODE:[38,5,1,""],INVALID_ATTRIBUTE:[38,5,1,""],NO_NODE:[38,5,1,""],OTHER:[38,5,1,""],PARSE:[38,5,1,""]},GUPnP:{Acl:[3,0,1,""],AclInterface:[4,0,1,""],Context:[5,0,1,""],ContextClass:[6,0,1,""],ContextManager:[7,0,1,""],ContextManagerClass:[8,0,1,""],ControlError:[38,0,1,""],ControlPoint:[9,0,1,""],ControlPointClass:[10,0,1,""],Device:[11,0,1,""],DeviceClass:[12,0,1,""],DeviceInfo:[13,0,1,""],DeviceInfoClass:[14,0,1,""],DeviceProxy:[15,0,1,""],DeviceProxyClass:[16,0,1,""],EventingError:[38,0,1,""],ResourceFactory:[17,0,1,""],ResourceFactoryClass:[18,0,1,""],RootDevice:[19,0,1,""],RootDeviceClass:[20,0,1,""],ServerError:[38,0,1,""],Service:[21,0,1,""],ServiceAction:[22,0,1,""],ServiceActionArgDirection:[38,0,1,""],ServiceActionArgInfo:[23,0,1,""],ServiceActionInfo:[24,0,1,""],ServiceClass:[25,0,1,""],ServiceInfo:[26,0,1,""],ServiceInfoClass:[27,0,1,""],ServiceIntrospection:[28,0,1,""],ServiceIntrospectionCallback:[0,4,1,""],ServiceIntrospectionClass:[29,0,1,""],ServiceProxy:[30,0,1,""],ServiceProxyAction:[31,0,1,""],ServiceProxyActionCallback:[0,4,1,""],ServiceProxyClass:[32,0,1,""],ServiceProxyNotifyCallback:[0,4,1,""],ServiceStateVariableInfo:[33,0,1,""],WhiteList:[34,0,1,""],WhiteListClass:[35,0,1,""],XMLDoc:[36,0,1,""],XMLDocClass:[37,0,1,""],XMLError:[38,0,1,""],control_error_quark:[39,4,1,""],eventing_error_quark:[39,4,1,""],get_uuid:[39,4,1,""],server_error_quark:[39,4,1,""],xml_error_quark:[39,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"abstract":[5,7,9,11,13,15,17,19,21,26,28,30,34,36],"case":[7,13,22],"default":[5,7,9,11,13,17,19,21,26,28,30,33,34],"final":7,"float":33,"function":[3,5,7,9,11,13,15,17,19,21,26,28,30,34],"int":[5,7,13,22,26,28,34,39],"new":[0,3,4,5,7,9,13,17,19,21,22,26,30,34,36,39,44],"return":[0,3,5,7,9,13,17,19,21,22,23,26,28,30,34,36,39],"short":[5,7,9,11,13,19,21,26,28,30,34],"true":[3,5,13,17,19,30,34],_cb:21,abl:22,about:[23,24,33],abov:21,absolut:19,accept:5,access:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,32,33,34,35,36,37],account:34,aclinterfac:3,action:[0,21,22,23,24,28,30,31,38],action_failed:[22,38,44],action_invok:[21,25],action_nam:28,activ:[7,34],add:[5,30,34],add_entri:[34,44],add_entryv:[34,44],add_notifi:[30,44],add_raw_notifi:[30,44],add_server_handl:[5,44],address:[3,5],administr:13,advertis:5,after:[3,5,7,13,17,22,26],againt:34,agent:[3,5],all:[21,24,28,34],alloc:13,allow:[3,30,33,34],allowed_valu:33,alreadi:[5,34],alwai:5,ani:[5,9,13,21,30],announc:[13,19,42],anoth:[30,38],anyth:30,append:21,appli:33,applic:[5,13,21,22,30],appropri:21,aquir:34,arbitrari:13,arg:34,arg_nam:22,arg_typ:22,arg_valu:22,argument:[22,23,24,38],around:13,arrai:34,ask:[7,17],assign:17,associ:[3,5,7,9,13,22,23,26,30],asssoci:7,asynchron:3,asyncreadycallback:3,asyncresult:3,attempt:[21,38],attribut:38,auto:5,automat:[5,19,22,30],avail:[7,9,19,21],back:7,base:[3,5,7,9,11,13,15,17,19,21,26,28,30,34,36,38],basic:[7,42],becaus:30,becom:9,been:[0,30],befor:[5,26],begin_action_list:[30,44],behavior:34,below:[5,7,9,11,13,15,17,19,21,26,28,30,34],bigger:13,biggest:13,block:26,bool:[3,5,13,17,19,23,30,33,34],brows:42,bug:42,bugzilla:42,built:42,cach:13,call:[0,3,7,13,17,21,26,30],callback_url:21,camelcas:21,can:[0,3,21,26,33],can_sync:[3,4,44],cancel:[3,26,30],cancel_act:[30,44],cancelled:26,capabl:13,care:[5,7],caus:21,cgi:42,chang:[0,21,30],check:[3,34],check_context:[34,44],classmethod:[5,7,9,17,19,34,36],clear:[34,44],client:[5,21,22,40],clientclass:6,close:13,code:[13,22,26,38],color:13,commandlin:34,commun:38,compil:7,compos:34,condit:30,connect:21,constant:[13,26],construct:[5,34,42],construct_only:[5,7,9,11,13,19,21,26,28,34],constructor:19,contain:[5,7,9,11,13,15,17,19,21,23,24,26,28,30,33,34],content:[5,13,28],context:2,context_avail:7,context_manag:7,context_unavail:7,contextclass:[1,5],contextmanag:2,contextmanagerclass:[1,7],control:[4,5,7,19,26,42],control_error_quark:[39,44],control_point:[7,9],controlerror:[22,38,44],controlpoint:[2,7],controlpointclass:[1,9],conveni:21,core:42,correct:21,correctli:21,could:[13,19],count:36,creat:[5,7,9,13,17,19,26,34,36,42,44],criteria:[13,34],current:5,data:[0,3,5,7,9,11,13,15,17,19,21,22,26,28,30,31,33,34,38],debian:42,default_languag:5,default_valu:33,defin:5,depend:[7,21,42],deprec:[5,7,26,38],depth:13,deriv:17,describ:[21,30],descript:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,42],description_dir:19,description_doc:19,description_path:19,descrit:19,destruct:30,detailed:21,detect:5,devic:[2,3,9],device_proxy_avail:[9,10],device_proxy_unavail:[9,10],device_typ:13,deviceclass:[1,11],deviceinfo:[2,11],deviceinfoclass:[1,12,13],deviceproxi:[2,9,13],deviceproxyclass:[1,15],differ:[5,7],dir:19,direct:[23,38],directli:[13,30,34],directlya:30,directori:19,disabl:34,disappear:7,discov:9,discoveri:[7,42],dlna:13,do_action_invok:21,do_can_sync:3,do_device_proxy_avail:9,do_device_proxy_unavail:9,do_is_allow:3,do_is_allowed_async:3,do_is_allowed_finish:3,do_query_vari:21,do_service_proxy_avail:9,do_service_proxy_unavail:9,do_subscription_lost:30,doc:[19,30,36],document:[13,19,26,30,36],doe:[21,26,42],doesn:[13,34],domain:38,don:[5,7],done:[3,13],due:30,dure:[7,38],each:[17,21,22,30],easi:42,effici:42,either:[19,21],element:[9,13,22,26,30,34],emit:[9,21,30],empti:[34,38],empty_node:[38,44],enabl:34,end_action_hash:[30,44],end_action_list:[30,44],enter:26,entri:34,error:[0,3,5,21,22,26,30,36,38],error_cod:22,error_descript:22,etc:[0,3],even:[26,30,34],event:[5,26,33,38,42],eventing_error_quark:[39,44],eventingerror:[38,44],everi:[7,13],exact:13,exampl:[3,21],except:21,exist:[5,22,34],expect:3,factori:[7,9,13,17,19],fail:[21,30,38],fall:7,fals:[3,5,17,19,30,34],featur:21,file:[5,13,26,28],fill:21,filter:34,finish:5,first:22,flag:[5,7,9,11,13,19,21,26,28,30,34],flexibl:42,folder:5,format:13,found:[13,38],framework:42,free:[9,13,22,26,28,30,34],freed:[5,13,26,30],freeze_notifi:[21,44],friendli:13,from:[0,3,5,7,19,22,26,30,34,38],g_list_fre:[13,22,30],g_slice_fre:[22,30],gener:[13,30,38,39,42],get:[5,7,9,13,17,19,22,26,30,34],get_acl:[5,44],get_act:[28,44],get_argument_count:[22,44],get_avail:[19,44],get_context:[9,13,26,44],get_control_url:[26,44],get_default:[17,44],get_default_languag:[5,44],get_description_dir:[19,44],get_description_path:[19,44],get_description_valu:[13,44],get_devic:[13,44],get_device_typ:[13,44],get_el:14,get_en:[34,44],get_entri:[34,44],get_event_subscription_url:[26,44],get_friendly_nam:[13,44],get_host_ip:[5,44],get_icon_url:[13,44],get_id:[26,44],get_introspect:[26,44],get_introspection_async:[26,44],get_introspection_async_ful:[26,44],get_loc:[13,26,44],get_local:[22,44],get_manufactur:[13,44],get_manufacturer_url:[13,44],get_messag:[22,44],get_model_descript:[13,44],get_model_nam:[13,44],get_model_numb:[13,44],get_model_url:[13,44],get_nam:[22,44],get_port:[5,7,44],get_presentation_url:[13,44],get_relative_loc:[19,44],get_resource_factori:[9,13,44],get_scpd_url:[26,44],get_serial_numb:[13,44],get_serv:[5,44],get_servic:[13,44],get_service_typ:[26,44],get_sess:[5,44],get_ssdp_resource_group:[19,44],get_state_vari:[28,44],get_subscrib:[30,44],get_subscription_timeout:[5,44],get_system_update_id_cb:21,get_udn:[13,26,44],get_upc:[13,44],get_url_bas:[13,26,44],get_uuid:[39,44],get_valu:[22,44],get_white_list:[7,44],getsystemupdateid:21,ginterfac:[3,5],gio:[3,5,26],gir1:42,given:13,glib:[0,3,5,7,9,13,21,22,24,26,28,30,34,36,38],gmainloop:26,gmodul:21,gnome:42,gobject:[0,3,4,5,7,8,9,11,13,14,15,17,18,19,21,22,26,27,28,29,30,33,34,35,36,37,40,42],goe:21,gssdp:[5,6,9,10,19,40,42],gtk_builder_connect_sign:21,gtype:[17,22,30,33],guarante:21,guess:21,gupnp:[0,1,2],gupnp_acl_can_sync:44,gupnp_acl_is_allow:44,gupnp_acl_is_allowed_async:44,gupnp_acl_is_allowed_finish:44,gupnp_context_add_server_handl:44,gupnp_context_get_acl:44,gupnp_context_get_default_languag:44,gupnp_context_get_host_ip:44,gupnp_context_get_port:44,gupnp_context_get_serv:44,gupnp_context_get_sess:44,gupnp_context_get_subscription_timeout:44,gupnp_context_host_path:44,gupnp_context_host_path_for_ag:44,gupnp_context_manager_cr:44,gupnp_context_manager_get_port:44,gupnp_context_manager_get_white_list:44,gupnp_context_manager_manage_control_point:44,gupnp_context_manager_manage_root_devic:44,gupnp_context_manager_new:44,gupnp_context_manager_rescan_control_point:44,gupnp_context_new:44,gupnp_context_remove_server_handl:44,gupnp_context_set_acl:44,gupnp_context_set_default_languag:44,gupnp_context_set_subscription_timeout:44,gupnp_context_unhost_path:44,gupnp_control_error:38,gupnp_control_error_action_failed:44,gupnp_control_error_invalid_action:44,gupnp_control_error_invalid_args:44,gupnp_control_error_out_of_sync:44,gupnp_control_error_quark:44,gupnp_control_point_get_context:44,gupnp_control_point_get_resource_factori:44,gupnp_control_point_list_device_proxi:44,gupnp_control_point_list_service_proxi:44,gupnp_control_point_new:44,gupnp_control_point_new_ful:44,gupnp_device_info_get_context:44,gupnp_device_info_get_description_valu:44,gupnp_device_info_get_devic:44,gupnp_device_info_get_device_typ:44,gupnp_device_info_get_friendly_nam:44,gupnp_device_info_get_icon_url:44,gupnp_device_info_get_loc:44,gupnp_device_info_get_manufactur:44,gupnp_device_info_get_manufacturer_url:44,gupnp_device_info_get_model_descript:44,gupnp_device_info_get_model_nam:44,gupnp_device_info_get_model_numb:44,gupnp_device_info_get_model_url:44,gupnp_device_info_get_presentation_url:44,gupnp_device_info_get_resource_factori:44,gupnp_device_info_get_serial_numb:44,gupnp_device_info_get_servic:44,gupnp_device_info_get_udn:44,gupnp_device_info_get_upc:44,gupnp_device_info_get_url_bas:44,gupnp_device_info_list_devic:44,gupnp_device_info_list_device_typ:44,gupnp_device_info_list_dlna_cap:44,gupnp_device_info_list_dlna_device_class_identifi:44,gupnp_device_info_list_servic:44,gupnp_device_info_list_service_typ:44,gupnp_eventing_error:38,gupnp_eventing_error_notify_failed:44,gupnp_eventing_error_quark:44,gupnp_eventing_error_subscription_failed:44,gupnp_eventing_error_subscription_lost:44,gupnp_get_uuid:44,gupnp_resource_factory_get_default:44,gupnp_resource_factory_new:44,gupnp_resource_factory_register_resource_proxy_typ:44,gupnp_resource_factory_register_resource_typ:44,gupnp_resource_factory_unregister_resource_proxy_typ:44,gupnp_resource_factory_unregister_resource_typ:44,gupnp_root_device_get_avail:44,gupnp_root_device_get_description_dir:44,gupnp_root_device_get_description_path:44,gupnp_root_device_get_relative_loc:44,gupnp_root_device_get_ssdp_resource_group:44,gupnp_root_device_new:44,gupnp_root_device_new_ful:44,gupnp_root_device_set_avail:44,gupnp_server_error:38,gupnp_server_error_internal_server_error:44,gupnp_server_error_invalid_response:44,gupnp_server_error_invalid_url:44,gupnp_server_error_not_found:44,gupnp_server_error_not_implemented:44,gupnp_server_error_other:44,gupnp_server_error_quark:44,gupnp_service_action_arg_direction_in:44,gupnp_service_action_arg_direction_out:44,gupnp_service_action_get:[22,44],gupnp_service_action_get_argument_count:44,gupnp_service_action_get_gvalu:44,gupnp_service_action_get_local:44,gupnp_service_action_get_messag:44,gupnp_service_action_get_nam:44,gupnp_service_action_get_valist:44,gupnp_service_action_get_valu:44,gupnp_service_action_return:44,gupnp_service_action_return_error:44,gupnp_service_action_set:44,gupnp_service_action_set_valist:44,gupnp_service_action_set_valu:44,gupnp_service_freeze_notifi:44,gupnp_service_info_get_context:44,gupnp_service_info_get_control_url:44,gupnp_service_info_get_event_subscription_url:44,gupnp_service_info_get_id:44,gupnp_service_info_get_introspect:44,gupnp_service_info_get_introspection_async:44,gupnp_service_info_get_introspection_async_ful:44,gupnp_service_info_get_loc:44,gupnp_service_info_get_scpd_url:44,gupnp_service_info_get_service_typ:44,gupnp_service_info_get_udn:44,gupnp_service_info_get_url_bas:44,gupnp_service_introspection_get_act:44,gupnp_service_introspection_get_state_vari:44,gupnp_service_introspection_list_act:44,gupnp_service_introspection_list_action_nam:44,gupnp_service_introspection_list_state_vari:44,gupnp_service_introspection_list_state_variable_nam:44,gupnp_service_notifi:44,gupnp_service_notify_valist:44,gupnp_service_notify_valu:44,gupnp_service_proxy_add_notifi:44,gupnp_service_proxy_add_notify_ful:44,gupnp_service_proxy_add_raw_notifi:44,gupnp_service_proxy_begin_act:[30,44],gupnp_service_proxy_begin_action_hash:44,gupnp_service_proxy_begin_action_list:44,gupnp_service_proxy_begin_action_valist:44,gupnp_service_proxy_cancel_act:44,gupnp_service_proxy_end_act:[0,30,44],gupnp_service_proxy_end_action_hash:44,gupnp_service_proxy_end_action_hash_gi:44,gupnp_service_proxy_end_action_list:44,gupnp_service_proxy_end_action_list_gi:44,gupnp_service_proxy_end_action_valist:44,gupnp_service_proxy_get_subscrib:44,gupnp_service_proxy_remove_notifi:44,gupnp_service_proxy_remove_raw_notifi:44,gupnp_service_proxy_send_act:44,gupnp_service_proxy_send_action_hash:44,gupnp_service_proxy_send_action_list:44,gupnp_service_proxy_send_action_list_gi:44,gupnp_service_proxy_send_action_valist:44,gupnp_service_proxy_set_subscrib:44,gupnp_service_signals_autoconnect:44,gupnp_service_thaw_notifi:44,gupnp_type_device:17,gupnp_type_device_proxy:17,gupnp_type_service:17,gupnp_type_service_proxy:17,gupnp_white_list_add_entri:44,gupnp_white_list_add_entryv:44,gupnp_white_list_check_context:44,gupnp_white_list_clear:44,gupnp_white_list_get_en:44,gupnp_white_list_get_entri:44,gupnp_white_list_is_empti:44,gupnp_white_list_new:44,gupnp_white_list_remove_entri:44,gupnp_white_list_set_en:44,gupnp_xml_doc_new:44,gupnp_xml_doc_new_from_path:44,gupnp_xml_error:38,gupnp_xml_error_empty_node:44,gupnp_xml_error_invalid_attribute:44,gupnp_xml_error_no_node:44,gupnp_xml_error_other:44,gupnp_xml_error_parse:44,gupnp_xml_error_quark:44,gupnpacl:44,gupnpaclinterfac:44,gupnpcontext:44,gupnpcontextclass:44,gupnpcontextmanag:44,gupnpcontextmanagerclass:44,gupnpcontrolerror:44,gupnpcontrolpoint:44,gupnpcontrolpointclass:44,gupnpdevic:44,gupnpdeviceclass:44,gupnpdeviceinfo:44,gupnpdeviceinfoclass:44,gupnpdeviceproxi:44,gupnpdeviceproxyclass:44,gupnpeventingerror:44,gupnpresourcefactori:[17,44],gupnpresourcefactoryclass:44,gupnprootdevic:[19,44],gupnprootdeviceclass:44,gupnpservererror:44,gupnpservic:44,gupnpserviceact:44,gupnpserviceactionargdirect:44,gupnpserviceactionarginfo:44,gupnpserviceactioninfo:44,gupnpserviceclass:44,gupnpserviceinfo:44,gupnpserviceinfoclass:44,gupnpserviceintrospect:44,gupnpserviceintrospectioncallback:44,gupnpserviceintrospectionclass:44,gupnpserviceproxi:44,gupnpserviceproxyact:44,gupnpserviceproxyactioncallback:44,gupnpserviceproxyclass:44,gupnpserviceproxynotifycallback:44,gupnpservicestatevariableinfo:44,gupnpwhitelist:44,gupnpwhitelistclass:44,gupnpxmldoc:44,gupnpxmldocclass:44,gupnpxmlerror:44,gvalu:33,handl:[3,30],handler:[5,7,21],happen:30,hash:30,hashtabl:30,have:[7,34],header:[3,5,22],heavili:21,height:13,helper:[34,42],higher:42,hold:[22,31],holder:30,homepag:42,host:[5,34],host_path:[5,44],host_path_for_ag:[5,44],http:[5,22,42],icon:13,ifac:5,ignor:22,immedi:30,implement:[3,4,7,13,38,42],in_nam:30,in_valu:30,includ:42,indirectli:30,info:0,inform:[23,24,26,33,34],inherit:[5,7,9,11,13,15,17,19,21,26,28,30,34,36],initabl:5,initialis:30,instead:[5,7,22,26,30],integ:33,intend:[22,42],interfac:[3,4,5,34],intern:13,internal:38,internal_server_error:[38,44],introspect:[0,21,26],invalid:38,invalid_action:[22,38,44],invalid_args:[22,38,44],invalid_attribute:[38,44],invalid_response:[38,44],invalid_url:[38,44],invoc:38,invok:[5,21],ioerrorenum:26,is_allow:[3,4,44],is_allowed_async:[3,4,44],is_allowed_finish:[3,4,44],is_empti:[34,44],is_numer:33,issu:30,keep:[7,13],know:21,kwarg:[5,7,9,11,13,15,17,19,21,26,28,30,34,36],languag:5,later:30,left:42,length:5,level:42,librari:42,libsoup:42,libxml2:[30,36,42],libxml:36,line:[22,30],list:[4,5,7,9,13,21,22,24,28,30,33,34,42],list_act:[28,44],list_action_nam:[28,44],list_devic:[13,44],list_device_proxi:[9,44],list_device_typ:[13,44],list_dlna_cap:[13,44],list_dlna_device_class_identifi:[13,44],list_servic:[13,44],list_service_proxi:[9,44],list_service_typ:[13,44],list_state_vari:[28,44],list_state_variable_nam:[28,44],listen:[7,21],listinfo:42,load:19,local:[5,22],local_path:5,locale:5,locat:[13,19,21,26],longer:7,lost:[30,38],lower:13,magic:21,mail:42,mailman:42,main:7,main_context:[5,7],maincontext:[5,7],mainli:22,manag:7,manage_control_point:[7,44],manage_root_devic:[7,44],manufactur:13,map:42,match:[5,13,34],maximum:33,mean:5,mediarender:9,mediaserv:42,messag:[7,22,30],might:26,mime:13,mime_typ:13,minimum:33,model:13,modifi:[28,30,34],more:9,most:13,move:5,must:[5,13,17,21,30],name:[0,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38],need:21,network:[5,7,34],networkmanag:7,never:5,new_from_path:[36,44],new_ful:[9,19,44],newer:5,newli:[7,13,39],next:13,no_node:[38,44],node:38,none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],nor:[9,34],not_found:[38,44],not_implemented:[38,44],note:[5,13,17,26,30],notif:[0,21,30,38,42],notifi:[0,21],notify_fail:[21,25],notify_failed:[38,44],notify_valu:[21,44],now:[7,9,34],number:[5,13,22],numer:33,object:[0,3,4,5,7,9,10,11,13,14,15,17,19,21,25,26,28,30,32,34,36,40,42],objectclass:[5,7,8,9,11,13,14,15,17,18,19,21,26,27,28,29,30,34,35,36,37],obtain:[0,3],occur:0,off:21,on_:21,on_get_system_update_id:21,on_query_system_update_id:21,onli:[5,7,9,11,13,15,17,19,21,22,26,28,30,34],only:[7,33],opaqu:[22,31],open:42,oper:3,optional:3,order:22,org:[9,42],orient:42,origin:0,other:[33,38,44],otherwis:[3,5,17,19,30,34],ourselv:5,out:[5,21,30,38,44],out_nam:30,out_of_sync:[22,38,44],out_typ:30,out_valu:30,own:21,packag:42,page:[5,13],pair:30,paramet:[0,3,5,7,9,13,17,19,21,22,26,28,30,34,36],parent:[4,5,7,9,11,13,15,17,19,21,26,28,30,34,36,42],parent_class:[6,8,10,12,14,16,18,20,25,27,29,32,35,37],pars:[19,30,38],parse:[38,44],particular:21,pass:[5,7,21,26],path:[3,5,19,36],peer:[3,30],pend:21,perform:34,place:30,platform:21,pleas:22,point:[7,13,42],pointer:[21,28,30,36],port:[5,7],possibl:[21,22],pre:30,prefer:[5,22],prefer_bigg:13,prepend:21,presenc:19,present:[13,42],privat:[5,7,9,11,13,15,17,19,21,26,28,30,34],process:[3,21,38],product:[13,42],progress:[0,22,31],project:42,prop:[5,7,9,11,13,19,21,26,28,30,34],provid:[13,19,22,26],proxi:[0,9,17,30],push_thread_default:[5,7],pygi:22,python:44,queri:[5,21],query_:21,query_system_update_id_cb:21,query_vari:[21,25],queu:[21,30],quit:30,rais:[3,5,21,26,30,36],rather:[13,33],read:22,readable:[5,7,9,11,13,19,21,26,30,34],readi:26,reason:[21,30],receiv:[7,9,21,22,30],reciev:30,refer:[7,36],regex:5,regist:17,register_resource_proxy_typ:[17,44],register_resource_typ:[17,44],rel:19,relat:[13,19,26,38],related_state_vari:23,relev:30,reli:30,remov:[5,17,34],remove_entri:[34,44],remove_notifi:[30,44],remove_raw_notifi:[30,44],remove_server_handl:[5,44],renew:5,repres:[13,38],represent:39,request:[0,5,13,17],requested_depth:13,requested_height:13,requested_mime_typ:13,requested_width:13,requir:[5,38],rescan:7,rescan_control_point:[7,44],resourc:[3,5,9,13,17,38,42],resource_factori:[9,13],resourcebrows:[9,40],resourcebrowserclass:10,resourcefactori:[2,9,13],resourcefactoryclass:[1,17],resourcegroup:19,respons:38,result:[3,21],retriev:[3,13,22,28],return_:[21,22,44],return_error:[21,22,44],retval:23,rfc:5,right:3,root:[11,21],root_devic:[7,11,21],rootdevic:[2,7,11],rootdeviceclass:[1,19],run:5,run_first:7,run_last:[9,21,30],runtim:[7,30],same:[7,21,34],satifi:22,schema:9,scheme:21,scpd:[26,28],search:9,second:[5,34],see:30,select:7,self:[5,7,9,13,17,19,21,22,26,34],send:[5,7,21,30],send_action_list:[30,44],send_ev:33,sent:30,serial:13,serv:[3,5],server:[5,7,38,42],server_error_quark:[39,44],server_path:5,servercallback:5,servererror:[38,44],servic:[2,3,9,13,17],service_proxi:30,service_proxy_avail:[9,10],service_proxy_unavail:[9,10],service_typ:26,serviceact:21,serviceactionargdirect:[23,38,44],serviceclass:[1,21],serviceinfo:[0,2,13,21],serviceinfoclass:[1,25,26],serviceintrospect:[0,2,26],serviceintrospectioncallback:[0,26,44],serviceintrospectionclass:[1,28],serviceproxi:[0,2,9,26],serviceproxyact:[0,30],serviceproxyactioncallback:[0,30,44],serviceproxyclass:[1,30],serviceproxynotifycallback:[0,30,44],servicestatevariableinfo:28,session:5,set:[5,9,13,22,30],set_acl:[5,44],set_avail:[19,44],set_default_languag:[5,44],set_en:[34,44],set_subscrib:[30,44],set_subscription_timeout:[5,44],set_valu:[22,44],shadow:44,should:[3,5,7,9,11,13,15,17,19,21,26,28,30,34],side:5,signals_autoconnect:[21,44],simillar:21,simpl:4,sinc:[5,7,26],singleton:17,size:13,smaller:13,soap:5,some:3,soup:[5,13,21,22,26,42],sourc:[33,42],specif:[5,42],specifi:[5,9,22],standard:42,start:[5,7],state:[0,21,23,28,33,34,38],statu:34,step:33,stop:[5,21],store:[13,22],str:[0,3,5,9,13,17,19,21,22,23,24,26,28,30,33,34,36,39],string:[5,13,22,26,30,33,34,39],stripe:21,struct:[5,7,9,11,13,15,17,19,21,26,28,30,34,36],subclass:[5,7,9,11,13,15,17,19,21,26,28,30,34,36],subscrib:30,subscript:[5,26,30,38],subscription_failed:[38,44],subscription_lost:[30,32,38,44],subscription_timeout:5,succeed:30,succes:30,succesfulli:22,success:[5,30],successfulli:17,support:[3,21],suspect:7,symbol:42,sync:38,synchron:30,synchronis:30,systemupdateid:21,tag:5,take:[3,30,34],taken:7,target:9,termin:34,test:34,than:[13,33],thaw_notifi:[21,44],thei:5,them:[13,21],therefor:21,thi:[3,5,7,9,11,13,15,17,19,21,22,23,24,26,28,30,33,34,36,38,42],through:42,time:[3,5,7,13,17,34],timeout:5,top:42,toplevel:5,tracker:42,type:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,39],type_pointer:30,typeinterfac:4,udn:[13,26],unavail:[7,9,44],under:[5,36],unexpectedli:38,unhandl:38,unhost_path:[5,44],uniqu:[13,26],univers:13,unix:7,unknown:[3,38],unless:13,unlike:33,unref:[5,13,22,26],unregist:17,unregister_resource_proxy_typ:[17,44],unregister_resource_typ:[17,44],unset:[22,30],unsubcrib:30,unsubscript:30,until:[7,21],upnp:[5,9,13,17,26,42],upnp_typ:17,uri:[13,21,26],url:[13,21,26,38],url_bas:[13,26],urn:9,usag:22,use:[3,5,7,26],use_acl:5,user:[0,3,5,30],user_ag:5,user_data:[0,3,5,21,26,30],usual:[7,34],util:42,uuid:39,valid:34,valu:[0,5,7,9,11,13,19,21,22,23,26,28,30,33,34,38],vararg:22,variabl:[0,21,23,28,30,33,38],variable_nam:28,variant:[22,30],veri:21,verifi:3,version:[3,4,5,7,13,19,22,26,30,34,36],wanipconnect:9,want:[5,7,30],warn:26,web:[5,13,42],websit:13,were:38,wether:33,what:[5,7],when:[3,5,7,13,26,30,38],whenev:[9,21,30],where:[5,13,19],whether:[3,19,23,30,33,34],which:[3,5,7,9,13,21,22,30],white:[7,34],white_list:7,whitelist:[2,7],whitelistclass:[1,34],why:[21,30],width:13,wish:13,won:34,work:21,wrap:36,wrapper:36,writable:[5,7,9,11,13,19,21,26,28,30,34],written:42,x_dlnacap:13,x_dlnadoc:13,xml:[13,26,36,38],xml_doc:36,xml_error_quark:[39,44],xmldoc:[2,13,19,26],xmldocclass:[1,36],xmlerror:[38,44],you:[5,7,13,26,30]},titles:["Callbacks","Class Structures","Classes","GUPnP.Acl","GUPnP.AclInterface","GUPnP.Context","GUPnP.ContextClass","GUPnP.ContextManager","GUPnP.ContextManagerClass","GUPnP.ControlPoint","GUPnP.ControlPointClass","GUPnP.Device","GUPnP.DeviceClass","GUPnP.DeviceInfo","GUPnP.DeviceInfoClass","GUPnP.DeviceProxy","GUPnP.DeviceProxyClass","GUPnP.ResourceFactory","GUPnP.ResourceFactoryClass","GUPnP.RootDevice","GUPnP.RootDeviceClass","GUPnP.Service","GUPnP.ServiceAction","GUPnP.ServiceActionArgInfo","GUPnP.ServiceActionInfo","GUPnP.ServiceClass","GUPnP.ServiceInfo","GUPnP.ServiceInfoClass","GUPnP.ServiceIntrospection","GUPnP.ServiceIntrospectionClass","GUPnP.ServiceProxy","GUPnP.ServiceProxyAction","GUPnP.ServiceProxyClass","GUPnP.ServiceStateVariableInfo","GUPnP.WhiteList","GUPnP.WhiteListClass","GUPnP.XMLDoc","GUPnP.XMLDocClass","Enums","Functions","Hierarchy","Interface Structures","GUPnP 1.0","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,5,7,9,11,13,15,17,19,21,26,28,30,34,36],"enum":38,"function":39,acl:3,aclinterfac:4,api:42,callback:0,context:5,contextclass:6,contextmanag:7,contextmanagerclass:8,controlpoint:9,controlpointclass:10,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],devic:11,deviceclass:12,deviceinfo:13,deviceinfoclass:14,deviceproxi:15,deviceproxyclass:16,field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],gupnp:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,42],hierarchi:40,interfac:[41,43],map:44,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],properti:[3,5,7,9,11,13,15,17,19,21,26,28,30,34,36],resourcefactori:17,resourcefactoryclass:18,rootdevic:19,rootdeviceclass:20,servic:21,serviceact:22,serviceactionarginfo:23,serviceactioninfo:24,serviceclass:25,serviceinfo:26,serviceinfoclass:27,serviceintrospect:28,serviceintrospectionclass:29,serviceproxi:30,serviceproxyact:31,serviceproxyclass:32,servicestatevariableinfo:33,signal:[3,5,7,9,11,13,15,17,19,21,26,28,30,34,36],structur:[1,41,45],symbol:44,virtual:[3,5,7,9,11,13,15,17,19,21,26,28,30,34,36],whitelist:34,whitelistclass:35,xmldoc:36,xmldocclass:37}})