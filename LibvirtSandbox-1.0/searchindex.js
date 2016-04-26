Search.setIndex({envversion:49,filenames:["class-structs","classes","classes/Builder","classes/BuilderClass","classes/BuilderContainer","classes/BuilderContainerClass","classes/BuilderInitrd","classes/BuilderInitrdClass","classes/BuilderMachine","classes/BuilderMachineClass","classes/Config","classes/ConfigClass","classes/ConfigDisk","classes/ConfigDiskClass","classes/ConfigInitrd","classes/ConfigInitrdClass","classes/ConfigInteractive","classes/ConfigInteractiveClass","classes/ConfigMount","classes/ConfigMountClass","classes/ConfigMountFile","classes/ConfigMountFileClass","classes/ConfigMountGuestBind","classes/ConfigMountGuestBindClass","classes/ConfigMountHostBind","classes/ConfigMountHostBindClass","classes/ConfigMountHostImage","classes/ConfigMountHostImageClass","classes/ConfigMountRam","classes/ConfigMountRamClass","classes/ConfigNetwork","classes/ConfigNetworkAddress","classes/ConfigNetworkAddressClass","classes/ConfigNetworkClass","classes/ConfigNetworkFilterref","classes/ConfigNetworkFilterrefClass","classes/ConfigNetworkFilterrefParameter","classes/ConfigNetworkFilterrefParameterClass","classes/ConfigNetworkRoute","classes/ConfigNetworkRouteClass","classes/ConfigService","classes/ConfigServiceClass","classes/ConfigServiceGeneric","classes/ConfigServiceGenericClass","classes/ConfigServiceSystemd","classes/ConfigServiceSystemdClass","classes/Console","classes/ConsoleClass","classes/ConsoleRaw","classes/ConsoleRawClass","classes/ConsoleRpc","classes/ConsoleRpcClass","classes/Context","classes/ContextClass","classes/ContextInteractive","classes/ContextInteractiveClass","classes/ContextService","classes/ContextServiceClass","functions","hierarchy","index","mapping"],objects:{"LibvirtSandbox.Builder":{clean_post_start:[2,1,1,""],clean_post_stop:[2,1,1,""],construct:[2,1,1,""],do_clean_post_start:[2,1,1,""],do_clean_post_stop:[2,1,1,""],do_construct_basic:[2,1,1,""],do_construct_devices:[2,1,1,""],do_construct_domain:[2,1,1,""],do_construct_features:[2,1,1,""],do_construct_os:[2,1,1,""],do_construct_security:[2,1,1,""],do_get_disk_prefix:[2,1,1,""],for_connection:[2,2,1,""],get_connection:[2,1,1,""],set_filterref:[2,1,1,""]},"LibvirtSandbox.Builder.props":{connection:[2,3,1,""]},"LibvirtSandbox.BuilderContainer":{"new":[4,2,1,""]},"LibvirtSandbox.BuilderInitrd":{"new":[6,2,1,""],construct:[6,1,1,""]},"LibvirtSandbox.BuilderMachine":{"new":[8,2,1,""]},"LibvirtSandbox.Config":{add_disk:[10,1,1,""],add_disk_opts:[10,1,1,""],add_disk_strv:[10,1,1,""],add_env:[10,1,1,""],add_env_opts:[10,1,1,""],add_env_strv:[10,1,1,""],add_host_include_file:[10,1,1,""],add_host_include_strv:[10,1,1,""],add_mount:[10,1,1,""],add_mount_opts:[10,1,1,""],add_mount_strv:[10,1,1,""],add_network:[10,1,1,""],add_network_opts:[10,1,1,""],add_network_strv:[10,1,1,""],do_get_command:[10,1,1,""],do_load_config:[10,1,1,""],do_save_config:[10,1,1,""],find_mount:[10,1,1,""],get_arch:[10,1,1,""],get_command:[10,1,1,""],get_disks:[10,1,1,""],get_envs:[10,1,1,""],get_groupid:[10,1,1,""],get_homedir:[10,1,1,""],get_kernpath:[10,1,1,""],get_kernrelease:[10,1,1,""],get_kmodpath:[10,1,1,""],get_mounts:[10,1,1,""],get_mounts_with_type:[10,1,1,""],get_name:[10,1,1,""],get_networks:[10,1,1,""],get_root:[10,1,1,""],get_security_dynamic:[10,1,1,""],get_security_label:[10,1,1,""],get_shell:[10,1,1,""],get_userid:[10,1,1,""],get_username:[10,1,1,""],get_uuid:[10,1,1,""],has_disks:[10,1,1,""],has_envs:[10,1,1,""],has_mounts:[10,1,1,""],has_mounts_with_type:[10,1,1,""],has_networks:[10,1,1,""],has_root_mount:[10,1,1,""],load_from_data:[10,2,1,""],load_from_path:[10,2,1,""],save_to_data:[10,1,1,""],save_to_path:[10,1,1,""],set_arch:[10,1,1,""],set_groupid:[10,1,1,""],set_homedir:[10,1,1,""],set_kernpath:[10,1,1,""],set_kernrelease:[10,1,1,""],set_kmodpath:[10,1,1,""],set_root:[10,1,1,""],set_security_dynamic:[10,1,1,""],set_security_label:[10,1,1,""],set_security_opts:[10,1,1,""],set_shell:[10,1,1,""],set_userid:[10,1,1,""],set_username:[10,1,1,""],set_uuid:[10,1,1,""]},"LibvirtSandbox.Config.props":{arch:[10,3,1,""],gid:[10,3,1,""],homedir:[10,3,1,""],kernpath:[10,3,1,""],kernrelease:[10,3,1,""],kmodpath:[10,3,1,""],name:[10,3,1,""],root:[10,3,1,""],security_dynamic:[10,3,1,""],security_label:[10,3,1,""],shell:[10,3,1,""],uid:[10,3,1,""],username:[10,3,1,""],uuid:[10,3,1,""]},"LibvirtSandbox.ConfigDisk":{get_disk_type:[12,1,1,""],get_format:[12,1,1,""],get_source:[12,1,1,""],get_tag:[12,1,1,""]},"LibvirtSandbox.ConfigDisk.props":{format:[12,3,1,""],source:[12,3,1,""],tag:[12,3,1,""],type:[12,3,1,""]},"LibvirtSandbox.ConfigInitrd":{"new":[14,2,1,""],add_module:[14,1,1,""],get_init:[14,1,1,""],get_kmoddir:[14,1,1,""],get_kver:[14,1,1,""],get_modules:[14,1,1,""],set_init:[14,1,1,""],set_kmoddir:[14,1,1,""],set_kver:[14,1,1,""]},"LibvirtSandbox.ConfigInitrd.props":{init:[14,3,1,""],kmoddir:[14,3,1,""],kver:[14,3,1,""]},"LibvirtSandbox.ConfigInteractive":{"new":[16,2,1,""],get_tty:[16,1,1,""],set_command:[16,1,1,""],set_tty:[16,1,1,""]},"LibvirtSandbox.ConfigInteractive.props":{tty:[16,3,1,""]},"LibvirtSandbox.ConfigMount":{add_include:[18,1,1,""],get_includes:[18,1,1,""],get_target:[18,1,1,""]},"LibvirtSandbox.ConfigMount.props":{target:[18,3,1,""]},"LibvirtSandbox.ConfigMountFile":{get_source:[20,1,1,""],set_source:[20,1,1,""]},"LibvirtSandbox.ConfigMountFile.props":{source:[20,3,1,""]},"LibvirtSandbox.ConfigMountGuestBind":{"new":[22,2,1,""]},"LibvirtSandbox.ConfigMountHostBind":{"new":[24,2,1,""]},"LibvirtSandbox.ConfigMountHostImage":{"new":[26,2,1,""],get_format:[26,1,1,""]},"LibvirtSandbox.ConfigMountHostImage.props":{format:[26,3,1,""]},"LibvirtSandbox.ConfigMountRam":{"new":[28,2,1,""],get_usage:[28,1,1,""],set_usage:[28,1,1,""]},"LibvirtSandbox.ConfigMountRam.props":{usage:[28,3,1,""]},"LibvirtSandbox.ConfigNetwork":{"new":[30,2,1,""],add_address:[30,1,1,""],add_route:[30,1,1,""],get_addresses:[30,1,1,""],get_dhcp:[30,1,1,""],get_filterref:[30,1,1,""],get_mac:[30,1,1,""],get_routes:[30,1,1,""],get_source:[30,1,1,""],set_dhcp:[30,1,1,""],set_filterref:[30,1,1,""],set_mac:[30,1,1,""],set_source:[30,1,1,""]},"LibvirtSandbox.ConfigNetwork.props":{dhcp:[30,3,1,""],mac:[30,3,1,""],source:[30,3,1,""]},"LibvirtSandbox.ConfigNetworkAddress":{"new":[31,2,1,""],get_broadcast:[31,1,1,""],get_prefix:[31,1,1,""],get_primary:[31,1,1,""],set_broadcast:[31,1,1,""],set_prefix:[31,1,1,""],set_primary:[31,1,1,""]},"LibvirtSandbox.ConfigNetworkAddress.props":{broadcast:[31,3,1,""],prefix:[31,3,1,""],primary:[31,3,1,""]},"LibvirtSandbox.ConfigNetworkFilterref":{"new":[34,2,1,""],add_parameter:[34,1,1,""],get_name:[34,1,1,""],get_parameters:[34,1,1,""],set_name:[34,1,1,""]},"LibvirtSandbox.ConfigNetworkFilterref.props":{name:[34,3,1,""]},"LibvirtSandbox.ConfigNetworkFilterrefParameter":{"new":[36,2,1,""],get_name:[36,1,1,""],get_value:[36,1,1,""],set_name:[36,1,1,""],set_value:[36,1,1,""]},"LibvirtSandbox.ConfigNetworkFilterrefParameter.props":{name:[36,3,1,""],value:[36,3,1,""]},"LibvirtSandbox.ConfigNetworkRoute":{"new":[38,2,1,""],get_gateway:[38,1,1,""],get_prefix:[38,1,1,""],get_target:[38,1,1,""],set_gateway:[38,1,1,""],set_prefix:[38,1,1,""],set_target:[38,1,1,""]},"LibvirtSandbox.ConfigNetworkRoute.props":{gateway:[38,3,1,""],prefix:[38,3,1,""],target:[38,3,1,""]},"LibvirtSandbox.ConfigServiceGeneric":{"new":[42,2,1,""],set_command:[42,1,1,""]},"LibvirtSandbox.ConfigServiceSystemd":{"new":[44,2,1,""],get_boot_target:[44,1,1,""],set_boot_target:[44,1,1,""]},"LibvirtSandbox.Console":{attach:[46,1,1,""],attach_stderr:[46,1,1,""],attach_stdio:[46,1,1,""],detach:[46,1,1,""],do_attach:[46,1,1,""],do_closed:[46,1,1,""],do_detach:[46,1,1,""],get_direct:[46,1,1,""],get_escape:[46,1,1,""],isolate:[46,1,1,""],set_direct:[46,1,1,""],set_escape:[46,1,1,""]},"LibvirtSandbox.Console.props":{connection:[46,3,1,""],devname:[46,3,1,""],direct:[46,3,1,""],domain:[46,3,1,""],escape:[46,3,1,""]},"LibvirtSandbox.Console.signals":{closed:[46,4,1,""]},"LibvirtSandbox.ConsoleRaw":{"new":[48,2,1,""],do_closed:[48,1,1,""]},"LibvirtSandbox.ConsoleRpc":{"new":[50,2,1,""],do_closed:[50,1,1,""],do_exited:[50,1,1,""]},"LibvirtSandbox.ConsoleRpc.signals":{exited:[50,4,1,""]},"LibvirtSandbox.Context":{attach:[52,1,1,""],detach:[52,1,1,""],do_attach:[52,1,1,""],do_detach:[52,1,1,""],do_start:[52,1,1,""],do_stop:[52,1,1,""],get_config:[52,1,1,""],get_connection:[52,1,1,""],get_domain:[52,1,1,""],get_log_console:[52,1,1,""],get_shell_console:[52,1,1,""],is_attached:[52,1,1,""],start:[52,1,1,""],stop:[52,1,1,""]},"LibvirtSandbox.Context.props":{config:[52,3,1,""],connection:[52,3,1,""],domain:[52,3,1,""]},"LibvirtSandbox.ContextInteractive":{"new":[54,2,1,""],get_app_console:[54,1,1,""]},"LibvirtSandbox.ContextService":{"new":[56,2,1,""],define:[56,1,1,""],do_define:[56,1,1,""],do_undefine:[56,1,1,""],undefine:[56,1,1,""]},LibvirtSandbox:{Builder:[2,0,1,""],BuilderClass:[3,0,1,""],BuilderContainer:[4,0,1,""],BuilderContainerClass:[5,0,1,""],BuilderInitrd:[6,0,1,""],BuilderInitrdClass:[7,0,1,""],BuilderMachine:[8,0,1,""],BuilderMachineClass:[9,0,1,""],Config:[10,0,1,""],ConfigClass:[11,0,1,""],ConfigDisk:[12,0,1,""],ConfigDiskClass:[13,0,1,""],ConfigInitrd:[14,0,1,""],ConfigInitrdClass:[15,0,1,""],ConfigInteractive:[16,0,1,""],ConfigInteractiveClass:[17,0,1,""],ConfigMount:[18,0,1,""],ConfigMountClass:[19,0,1,""],ConfigMountFile:[20,0,1,""],ConfigMountFileClass:[21,0,1,""],ConfigMountGuestBind:[22,0,1,""],ConfigMountGuestBindClass:[23,0,1,""],ConfigMountHostBind:[24,0,1,""],ConfigMountHostBindClass:[25,0,1,""],ConfigMountHostImage:[26,0,1,""],ConfigMountHostImageClass:[27,0,1,""],ConfigMountRam:[28,0,1,""],ConfigMountRamClass:[29,0,1,""],ConfigNetwork:[30,0,1,""],ConfigNetworkAddress:[31,0,1,""],ConfigNetworkAddressClass:[32,0,1,""],ConfigNetworkClass:[33,0,1,""],ConfigNetworkFilterref:[34,0,1,""],ConfigNetworkFilterrefClass:[35,0,1,""],ConfigNetworkFilterrefParameter:[36,0,1,""],ConfigNetworkFilterrefParameterClass:[37,0,1,""],ConfigNetworkRoute:[38,0,1,""],ConfigNetworkRouteClass:[39,0,1,""],ConfigService:[40,0,1,""],ConfigServiceClass:[41,0,1,""],ConfigServiceGeneric:[42,0,1,""],ConfigServiceGenericClass:[43,0,1,""],ConfigServiceSystemd:[44,0,1,""],ConfigServiceSystemdClass:[45,0,1,""],Console:[46,0,1,""],ConsoleClass:[47,0,1,""],ConsoleRaw:[48,0,1,""],ConsoleRawClass:[49,0,1,""],ConsoleRpc:[50,0,1,""],ConsoleRpcClass:[51,0,1,""],Context:[52,0,1,""],ContextClass:[53,0,1,""],ContextInteractive:[54,0,1,""],ContextInteractiveClass:[55,0,1,""],ContextService:[56,0,1,""],ContextServiceClass:[57,0,1,""],init:[58,4,1,""],init_check:[58,4,1,""],util_disk_format_from_str:[58,4,1,""],util_guess_image_format:[58,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function"},terms:{"500m":10,"abstract":[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],"default":[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,52],"int":[10,28,31,38,46,50,58],"new":[2,4,6,8,10,14,16,22,24,26,28,30,31,34,36,38,42,44,48,50,54,56,61],"return":[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,42,44,46,48,50,52,54,56,58],"short":[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,50,52],"static":10,"true":[2,10,16,30],"var":10,access:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],add:[10,30,34],add_address:[30,61],add_disk:[10,61],add_disk_opt:[10,61],add_disk_strv:[10,61],add_env:[10,61],add_env_opt:[10,61],add_env_strv:[10,61],add_host_include_fil:[10,61],add_host_include_strv:[10,61],add_includ:[18,61],add_modul:[14,61],add_mount:[10,61],add_mount_opt:[10,61],add_mount_strv:[10,61],add_network:[10,61],add_network_opt:[10,61],add_network_strv:[10,61],add_paramet:[34,61],add_rout:[30,61],addr:[30,31,38],address:[10,30,31,38],all:[14,18],allow:60,along:14,ani:[10,14,20],applic:[8,10,16,42,44,54,56,58,60],arch:10,architectur:10,argument:[10,16,42],argv:[16,42,58],associ:[10,30,34],assum:10,attach:[46,47,52,53,61],attach_stderr:[46,61],attach_stdio:[46,61],automat:[10,31],base:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],been:[2,30],bin:14,binari:[10,14],bind:10,bool:[2,6,10,16,30,46,48,50,52,56,58],boot:[10,44],broadcast:31,builder:1,builderclass:[0,2],buildercontain:[1,2],buildercontainerclass:[0,4],builderinitrd:1,builderinitrdclass:[0,6],buildermachin:[1,2],buildermachineclass:[0,8],built:2,cach:10,charact:46,chosen:10,classmethod:[2,4,6,8,10,14,16,22,24,26,28,30,31,34,36,38,42,44,48,50,54,56],clean:10,clean_post_start:[2,3,61],clean_post_stop:[2,3,61],cleanup:2,close:[46,47,49,51],command:[10,16,42],config:[1,2,6],configclass:[0,10],configdisk:[1,2,10],configdiskclass:[0,12],configinitrd:[1,6],configinitrdclass:[0,14],configinteract:[1,10],configinteractiveclass:[0,16],configmount:[1,10],configmountclass:[0,18],configmountfil:[1,18],configmountfileclass:[0,20],configmountguestbind:[1,20],configmountguestbindclass:[0,22],configmounthostbind:[1,20],configmounthostbindclass:[0,24],configmounthostimag:[1,20],configmounthostimageclass:[0,26],configmountram:[1,18],configmountramclass:[0,28],confignetwork:[1,10],confignetworkaddress:[1,30],confignetworkaddressclass:[0,31],confignetworkclass:[0,30],confignetworkfilterref:[1,2,30],confignetworkfilterrefclass:[0,34],confignetworkfilterrefparamet:[1,34],confignetworkfilterrefparameterclass:[0,36],confignetworkrout:[1,30],confignetworkrouteclass:[0,38],configservic:[1,10],configserviceclass:[0,40],configservicegener:[1,40],configservicegenericclass:[0,42],configservicesystemd:[1,40],configservicesystemdclass:[0,44],configur:[2,10,16,42,44,48,50,52,60],configuratoion:[54,56],connect:[2,4,8,10,46,48,50,52,54,56],consol:[1,10,16],console_raw:48,console_rpc:50,consoleclass:[0,46],consoleraw:[1,46],consolerawclass:[0,48],consolerpc:[1,46],consolerpcclass:[0,50],construct:[2,6,60,61],construct_bas:3,construct_devic:3,construct_domain:3,construct_featur:3,construct_o:3,construct_only:[2,10,12,18,26,28,31,38,46,52],construct_secur:3,contain:[4,10,16],context:1,contextclass:[0,52],contextinteract:[1,52],contextinteractiveclass:[0,54],contextservic:[1,52],contextserviceclass:[0,56],copi:18,correspond:10,creat:[2,4,6,8,10,14,16,20,22,24,26,28,30,31,34,36,38,42,44,48,50,54,56],current:[2,10,14,52],custom:[10,12,18,20,22,24,26,28],data:10,debian:60,defin:[56,57,61],defualt:10,demo:10,deped:14,depend:60,descript:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,60],detach:[46,47,52,53,61],devic:[38,46],devnam:[46,48,50],dhcp:[10,30,36],direct:46,directori:[10,12,14,18,20,22,24,26,28],disabl:30,disk:[2,10,12,26],do_attach:[46,52],do_clean_post_start:2,do_clean_post_stop:2,do_clos:[46,48,50],do_construct_bas:2,do_construct_devic:2,do_construct_domain:2,do_construct_featur:2,do_construct_o:2,do_construct_secur:2,do_defin:56,do_detach:[46,52],do_exit:50,do_get_command:10,do_get_disk_prefix:2,do_load_config:10,do_save_config:10,do_start:52,do_stop:52,do_undefin:56,domain:[2,46,48,50,52],domaindiskformat:[12,26],domaindisktyp:12,domaininterfac:2,driver:60,dsk:10,dstpath:18,dynam:10,each:10,effort:60,element:10,empti:20,enabl:[30,36,60],env:10,environ:10,err:[46,48,50],error:[2,6,10,46,52,54,56,58],escap:46,escape:46,exampl:10,exit:[50,51],facilit:60,fals:[2,46],file:[2,10,12,18,60],filesystem:[10,26,28],fill:31,filter:[10,30,34],filterref:[2,30,34],find:[2,10],find_mount:[10,61],flag:[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,50,52],for_connect:[2,61],format:[10,12,26],from:[2,18,48,50,60],full:14,gatewai:38,gener:10,get:10,get_address:[30,61],get_app_consol:[54,61],get_arch:[10,61],get_boot_target:[44,61],get_broadcast:[31,61],get_command:[10,11,61],get_config:[52,61],get_connect:[2,52,61],get_dhcp:[30,61],get_direct:[46,61],get_disk:[10,61],get_disk_prefix:3,get_disk_typ:[12,61],get_domain:[52,61],get_env:[10,61],get_escap:[46,61],get_files_to_copi:3,get_filterref:[30,61],get_format:[12,26,61],get_gatewai:[38,61],get_groupid:[10,61],get_homedir:[10,61],get_includ:[18,61],get_init:[14,61],get_kernpath:[10,61],get_kernreleas:[10,61],get_kmoddir:[14,61],get_kmodpath:[10,61],get_kver:[14,61],get_log_consol:[52,61],get_mac:[30,61],get_modul:[14,61],get_mount:[10,61],get_mounts_with_typ:[10,61],get_nam:[10,34,36,61],get_network:[10,61],get_paramet:[34,61],get_prefix:[31,38,61],get_primari:[31,61],get_root:[10,61],get_rout:[30,61],get_security_dynam:[10,61],get_security_label:[10,61],get_shel:[10,61],get_shell_consol:[52,61],get_sourc:[12,20,30,61],get_tag:[12,61],get_target:[18,38,61],get_tti:[16,61],get_usag:[28,61],get_userid:[10,61],get_usernam:[10,61],get_uuid:[10,61],get_valu:[36,61],gid:10,gio:[31,38,46],gir1:60,given:[10,30],glib:[2,6,10,46,52,54,56,58],gobject:[2,3,4,6,7,8,10,11,12,13,14,15,16,18,19,20,22,24,26,28,30,31,32,33,34,35,36,37,38,39,40,42,44,46,47,48,50,52,53,54,56,59,60],group:10,gtype:10,guest:10,gvir_sandbox_builder_clean_post_start:61,gvir_sandbox_builder_clean_post_stop:61,gvir_sandbox_builder_construct:61,gvir_sandbox_builder_container_new:61,gvir_sandbox_builder_for_connect:61,gvir_sandbox_builder_get_connect:61,gvir_sandbox_builder_initrd_construct:61,gvir_sandbox_builder_initrd_new:61,gvir_sandbox_builder_machine_new:61,gvir_sandbox_builder_set_filterref:61,gvir_sandbox_config_add_disk:61,gvir_sandbox_config_add_disk_opt:61,gvir_sandbox_config_add_disk_strv:61,gvir_sandbox_config_add_env:61,gvir_sandbox_config_add_env_opt:61,gvir_sandbox_config_add_env_strv:61,gvir_sandbox_config_add_host_include_fil:61,gvir_sandbox_config_add_host_include_strv:61,gvir_sandbox_config_add_mount:61,gvir_sandbox_config_add_mount_opt:61,gvir_sandbox_config_add_mount_strv:61,gvir_sandbox_config_add_network:61,gvir_sandbox_config_add_network_opt:61,gvir_sandbox_config_add_network_strv:61,gvir_sandbox_config_disk_get_disk_typ:61,gvir_sandbox_config_disk_get_format:61,gvir_sandbox_config_disk_get_sourc:61,gvir_sandbox_config_disk_get_tag:61,gvir_sandbox_config_find_mount:61,gvir_sandbox_config_get_arch:61,gvir_sandbox_config_get_command:61,gvir_sandbox_config_get_disk:61,gvir_sandbox_config_get_env:61,gvir_sandbox_config_get_groupid:61,gvir_sandbox_config_get_homedir:61,gvir_sandbox_config_get_kernpath:61,gvir_sandbox_config_get_kernreleas:61,gvir_sandbox_config_get_kmodpath:61,gvir_sandbox_config_get_mount:61,gvir_sandbox_config_get_mounts_with_typ:61,gvir_sandbox_config_get_nam:61,gvir_sandbox_config_get_network:61,gvir_sandbox_config_get_root:61,gvir_sandbox_config_get_security_dynam:61,gvir_sandbox_config_get_security_label:61,gvir_sandbox_config_get_shel:61,gvir_sandbox_config_get_userid:61,gvir_sandbox_config_get_usernam:61,gvir_sandbox_config_get_uuid:61,gvir_sandbox_config_has_disk:61,gvir_sandbox_config_has_env:61,gvir_sandbox_config_has_mount:61,gvir_sandbox_config_has_mounts_with_typ:61,gvir_sandbox_config_has_network:61,gvir_sandbox_config_has_root_mount:61,gvir_sandbox_config_initrd_add_modul:61,gvir_sandbox_config_initrd_get_init:61,gvir_sandbox_config_initrd_get_kmoddir:61,gvir_sandbox_config_initrd_get_kv:61,gvir_sandbox_config_initrd_get_modul:61,gvir_sandbox_config_initrd_new:61,gvir_sandbox_config_initrd_set_init:61,gvir_sandbox_config_initrd_set_kmoddir:61,gvir_sandbox_config_initrd_set_kv:61,gvir_sandbox_config_interactive_get_tti:61,gvir_sandbox_config_interactive_new:61,gvir_sandbox_config_interactive_set_command:61,gvir_sandbox_config_interactive_set_tti:61,gvir_sandbox_config_load_from_data:61,gvir_sandbox_config_load_from_path:61,gvir_sandbox_config_mount_add_includ:61,gvir_sandbox_config_mount_file_get_sourc:61,gvir_sandbox_config_mount_file_set_sourc:61,gvir_sandbox_config_mount_get_includ:61,gvir_sandbox_config_mount_get_target:61,gvir_sandbox_config_mount_guest_bind_new:61,gvir_sandbox_config_mount_host_bind_new:61,gvir_sandbox_config_mount_host_image_get_format:61,gvir_sandbox_config_mount_host_image_new:61,gvir_sandbox_config_mount_ram_get_usag:61,gvir_sandbox_config_mount_ram_new:61,gvir_sandbox_config_mount_ram_set_usag:61,gvir_sandbox_config_network_add_address:61,gvir_sandbox_config_network_add_rout:61,gvir_sandbox_config_network_address_get_broadcast:61,gvir_sandbox_config_network_address_get_prefix:61,gvir_sandbox_config_network_address_get_primari:61,gvir_sandbox_config_network_address_new:61,gvir_sandbox_config_network_address_set_broadcast:61,gvir_sandbox_config_network_address_set_prefix:61,gvir_sandbox_config_network_address_set_primari:61,gvir_sandbox_config_network_filterref_add_paramet:61,gvir_sandbox_config_network_filterref_get_nam:61,gvir_sandbox_config_network_filterref_get_paramet:61,gvir_sandbox_config_network_filterref_new:61,gvir_sandbox_config_network_filterref_parameter_get_nam:61,gvir_sandbox_config_network_filterref_parameter_get_valu:61,gvir_sandbox_config_network_filterref_parameter_new:61,gvir_sandbox_config_network_filterref_parameter_set_nam:61,gvir_sandbox_config_network_filterref_parameter_set_valu:61,gvir_sandbox_config_network_filterref_set_nam:61,gvir_sandbox_config_network_get_address:61,gvir_sandbox_config_network_get_dhcp:61,gvir_sandbox_config_network_get_filterref:61,gvir_sandbox_config_network_get_mac:61,gvir_sandbox_config_network_get_rout:61,gvir_sandbox_config_network_get_sourc:61,gvir_sandbox_config_network_new:61,gvir_sandbox_config_network_route_get_gatewai:61,gvir_sandbox_config_network_route_get_prefix:61,gvir_sandbox_config_network_route_get_target:61,gvir_sandbox_config_network_route_new:61,gvir_sandbox_config_network_route_set_gatewai:61,gvir_sandbox_config_network_route_set_prefix:61,gvir_sandbox_config_network_route_set_target:61,gvir_sandbox_config_network_set_dhcp:61,gvir_sandbox_config_network_set_filterref:61,gvir_sandbox_config_network_set_mac:61,gvir_sandbox_config_network_set_sourc:61,gvir_sandbox_config_save_to_data:61,gvir_sandbox_config_save_to_path:61,gvir_sandbox_config_service_generic_new:61,gvir_sandbox_config_service_generic_set_command:61,gvir_sandbox_config_service_systemd_get_boot_target:61,gvir_sandbox_config_service_systemd_new:61,gvir_sandbox_config_service_systemd_set_boot_target:61,gvir_sandbox_config_set_arch:61,gvir_sandbox_config_set_groupid:61,gvir_sandbox_config_set_homedir:61,gvir_sandbox_config_set_kernpath:61,gvir_sandbox_config_set_kernreleas:61,gvir_sandbox_config_set_kmodpath:61,gvir_sandbox_config_set_root:61,gvir_sandbox_config_set_security_dynam:61,gvir_sandbox_config_set_security_label:61,gvir_sandbox_config_set_security_opt:61,gvir_sandbox_config_set_shel:61,gvir_sandbox_config_set_userid:61,gvir_sandbox_config_set_usernam:61,gvir_sandbox_config_set_uuid:61,gvir_sandbox_console_attach:61,gvir_sandbox_console_attach_stderr:61,gvir_sandbox_console_attach_stdio:61,gvir_sandbox_console_detach:61,gvir_sandbox_console_get_direct:61,gvir_sandbox_console_get_escap:61,gvir_sandbox_console_isol:61,gvir_sandbox_console_raw_new:61,gvir_sandbox_console_rpc_new:61,gvir_sandbox_console_set_direct:61,gvir_sandbox_console_set_escap:61,gvir_sandbox_context_attach:61,gvir_sandbox_context_detach:61,gvir_sandbox_context_get_config:61,gvir_sandbox_context_get_connect:61,gvir_sandbox_context_get_domain:61,gvir_sandbox_context_get_log_consol:61,gvir_sandbox_context_get_shell_consol:61,gvir_sandbox_context_interactive_get_app_consol:61,gvir_sandbox_context_interactive_new:61,gvir_sandbox_context_is_attach:61,gvir_sandbox_context_service_defin:61,gvir_sandbox_context_service_new:61,gvir_sandbox_context_service_undefin:61,gvir_sandbox_context_start:61,gvir_sandbox_context_stop:61,gvir_sandbox_init:61,gvir_sandbox_init_check:61,gvir_sandbox_util_disk_format_from_str:61,gvir_sandbox_util_guess_image_format:61,gvirsandboxbuild:61,gvirsandboxbuilderclass:61,gvirsandboxbuildercontain:61,gvirsandboxbuildercontainerclass:61,gvirsandboxbuilderinitrd:61,gvirsandboxbuilderinitrdclass:61,gvirsandboxbuildermachin:61,gvirsandboxbuildermachineclass:61,gvirsandboxconfig:61,gvirsandboxconfigclass:61,gvirsandboxconfigdisk:61,gvirsandboxconfigdiskclass:61,gvirsandboxconfigenv:10,gvirsandboxconfiginitrd:61,gvirsandboxconfiginitrdclass:61,gvirsandboxconfiginteract:61,gvirsandboxconfiginteractiveclass:61,gvirsandboxconfigmount:61,gvirsandboxconfigmountclass:61,gvirsandboxconfigmountfil:61,gvirsandboxconfigmountfileclass:61,gvirsandboxconfigmountguestbind:61,gvirsandboxconfigmountguestbindclass:61,gvirsandboxconfigmounthostbind:61,gvirsandboxconfigmounthostbindclass:61,gvirsandboxconfigmounthostimag:61,gvirsandboxconfigmounthostimageclass:61,gvirsandboxconfigmountram:61,gvirsandboxconfigmountramclass:61,gvirsandboxconfignetwork:61,gvirsandboxconfignetworkaddress:61,gvirsandboxconfignetworkaddressclass:61,gvirsandboxconfignetworkclass:61,gvirsandboxconfignetworkfilterref:61,gvirsandboxconfignetworkfilterrefclass:61,gvirsandboxconfignetworkfilterrefparamet:61,gvirsandboxconfignetworkfilterrefparameterclass:61,gvirsandboxconfignetworkrout:61,gvirsandboxconfignetworkrouteclass:61,gvirsandboxconfigservic:61,gvirsandboxconfigserviceclass:61,gvirsandboxconfigservicegener:61,gvirsandboxconfigservicegenericclass:61,gvirsandboxconfigservicesystemd:61,gvirsandboxconfigservicesystemdclass:61,gvirsandboxconsol:61,gvirsandboxconsoleclass:61,gvirsandboxconsoleraw:61,gvirsandboxconsolerawclass:61,gvirsandboxconsolerpc:61,gvirsandboxconsolerpcclass:61,gvirsandboxcontext:61,gvirsandboxcontextclass:61,gvirsandboxcontextinteract:61,gvirsandboxcontextinteractiveclass:61,gvirsandboxcontextservic:61,gvirsandboxcontextserviceclass:61,has_disk:[10,61],has_env:[10,61],has_mount:[10,61],has_mounts_with_typ:[10,61],has_network:[10,61],has_root_mount:[10,61],hashtabl:10,have:[10,16],high:60,home:10,homedir:10,homepag:60,host:[2,10,14,18,20,26],hostdir:10,hostpath:14,http:60,ifac:2,ignor:30,imag:[10,26],imav:26,img:10,includ:[10,14,18],includefil:10,inetaddress:[31,38],inherit:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],ini:10,init:[14,58,61],init_check:[58,61],initi:[54,56],initrd:[6,14],insid:[14,60],instanc:10,instanti:2,integr:60,interact:[10,16,54],interfac:[30,31,38],introspect:60,invok:10,is_attach:[52,61],isol:[46,60,61],kei:10,kernel:[10,14],kernpath:10,kernreleas:10,key:10,keyfil:10,kib:28,kibibyt:28,kmoddir:14,kmodpath:10,kver:14,kvm:60,kwarg:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],label:10,lazka:10,length:[31,38],level:60,lib:10,librari:60,libvirt:[14,48,50,54,56,60],libvirtgconfig:[2,12,26],libvirtgobject:[2,4,8,46,48,50,52,54,56,60],libvirtsandbox:[0,1],limit:28,list:[10,14,16,18,30,34,42],load:10,load_config:11,load_from_data:[10,61],load_from_path:[10,61],local:10,localstderr:46,localstdin:46,localstdout:46,look:14,lxc:60,mac:30,machin:8,map:[20,22,24,26,28,60],match:10,maximum:28,memori:28,mnt:10,mode:10,modnam:14,modul:[10,14],mount:[10,18,20,22,24,26,28],must:10,name:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],need:60,network:[10,30,31,34,36,38],network_address:31,network_filterref:34,newli:2,non:31,none:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],object:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,59],objectclass:[2,3,4,6,7,8,10,11,12,13,14,15,16,18,19,20,22,24,26,28,30,31,32,33,34,35,36,37,38,39,40,42,44,46,47,48,50,52,53,54,56],omit:10,onc:2,only:31,option:31,optstr:10,org:60,otherwis:31,outputfil:6,overid:10,overrid:10,packag:60,pad:[3,5,7,9,11,13,15,17,19,21,23,25,27,29,32,33,35,37,39,41,43,45,47,49,51,53,55,57],param:34,paramet:[2,4,6,8,10,14,16,18,20,22,24,26,28,30,31,34,36,38,42,44,46,48,50,54,56,58],parent:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56,60],parent_class:[3,5,7,9,11,13,15,17,19,21,23,25,27,29,32,33,35,37,39,41,43,45,47,49,51,53,55,57],pars:10,part:10,path:[10,12,14,16,18,42,58],pointer:58,popul:14,pplicat:4,prefix:[31,38],primari:31,privat:10,program:[10,14],project:60,prop:[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,52],provid:[10,60],pty:46,purpos:60,python:61,qcow2:10,qemu:[14,60],rais:[2,6,10,46,52,54,56,58],ram:[10,28],raw:[12,26,48],readable:[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,52],receiv:[46,50],ref:30,refer:[30,34],rel:18,releas:10,request:[14,18],requir:[2,31],retriev:[2,10,12,14,16,18,20,26,28,30,31,34,38,52],root:10,root_path:10,rout:[10,30,38],rpc:50,run:[10,14,16,42,48,50,52],run_first:[46,50],same:10,sandbox:[2,4,6,8,10,12,14,16,18,22,24,26,28,30,31,34,36,38,42,44,46,48,50,52,54,56,60],save_config:11,save_to_data:[10,61],save_to_path:[10,61],search:10,secur:10,security_dynam:10,security_label:10,selinux:10,servic:[42,44,56,60],set:[10,14,16,20,28,30,31,38,42],set_arch:[10,61],set_boot_target:[44,61],set_broadcast:[31,61],set_command:[16,42,61],set_dhcp:[30,61],set_direct:[46,61],set_escap:[46,61],set_filterref:[2,30,61],set_gatewai:[38,61],set_groupid:[10,61],set_homedir:[10,61],set_init:[14,61],set_kernpath:[10,61],set_kernreleas:[10,61],set_kmoddir:[14,61],set_kmodpath:[10,61],set_kver:[14,61],set_mac:[30,61],set_nam:[34,36,61],set_prefix:[31,38,61],set_primari:[31,61],set_root:[10,61],set_security_dynam:[10,61],set_security_label:[10,61],set_security_opt:[10,61],set_shel:[10,61],set_sourc:[20,30,61],set_target:[38,61],set_tti:[16,61],set_usag:[28,61],set_userid:[10,61],set_usernam:[10,61],set_uuid:[10,61],set_valu:[36,61],setup:60,shell:10,should:[10,16,42],sourc:[10,12,20,22,24,26,30],source:10,specifi:[10,20,31,48,50],srcpath:18,start:[2,52,53,61],statedir:2,statu:50,stop:[52,53,61],str:[2,6,10,12,14,16,18,20,22,24,26,28,30,34,36,42,44,46,48,50,58],string:10,struct:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],subclass:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],success:2,suitabl:2,support:60,svirt_sandbox_t:10,symbol:60,systemd:60,tag:[10,12],target:[10,18,22,24,26,28,38,44],targetdir:[22,24,26,28],technolog:60,temporari:[2,20],termin:[16,42],thi:[14,30],tmp:10,traffic:10,tty:16,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],uid:10,undefin:[56,57,61],under:[2,10],understand:60,unit:60,unixinputstream:46,unixoutputstream:46,unless:30,usag:28,user:10,usernam:10,usr:14,util_disk_format_from_str:[58,61],util_guess_image_format:[58,61],uuid:10,valu:[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,52,58],value:10,variabl:10,version:[10,14],vmlinuz:10,where:14,whether:[10,16],which:[2,46,50],whose:[10,48,50],within:18,writable:[2,10,12,14,16,18,20,26,28,30,31,34,36,38,46,52]},titles:["Class Structures","Classes","LibvirtSandbox.Builder","LibvirtSandbox.BuilderClass","LibvirtSandbox.BuilderContainer","LibvirtSandbox.BuilderContainerClass","LibvirtSandbox.BuilderInitrd","LibvirtSandbox.BuilderInitrdClass","LibvirtSandbox.BuilderMachine","LibvirtSandbox.BuilderMachineClass","LibvirtSandbox.Config","LibvirtSandbox.ConfigClass","LibvirtSandbox.ConfigDisk","LibvirtSandbox.ConfigDiskClass","LibvirtSandbox.ConfigInitrd","LibvirtSandbox.ConfigInitrdClass","LibvirtSandbox.ConfigInteractive","LibvirtSandbox.ConfigInteractiveClass","LibvirtSandbox.ConfigMount","LibvirtSandbox.ConfigMountClass","LibvirtSandbox.ConfigMountFile","LibvirtSandbox.ConfigMountFileClass","LibvirtSandbox.ConfigMountGuestBind","LibvirtSandbox.ConfigMountGuestBindClass","LibvirtSandbox.ConfigMountHostBind","LibvirtSandbox.ConfigMountHostBindClass","LibvirtSandbox.ConfigMountHostImage","LibvirtSandbox.ConfigMountHostImageClass","LibvirtSandbox.ConfigMountRam","LibvirtSandbox.ConfigMountRamClass","LibvirtSandbox.ConfigNetwork","LibvirtSandbox.ConfigNetworkAddress","LibvirtSandbox.ConfigNetworkAddressClass","LibvirtSandbox.ConfigNetworkClass","LibvirtSandbox.ConfigNetworkFilterref","LibvirtSandbox.ConfigNetworkFilterrefClass","LibvirtSandbox.ConfigNetworkFilterrefParameter","LibvirtSandbox.ConfigNetworkFilterrefParameterClass","LibvirtSandbox.ConfigNetworkRoute","LibvirtSandbox.ConfigNetworkRouteClass","LibvirtSandbox.ConfigService","LibvirtSandbox.ConfigServiceClass","LibvirtSandbox.ConfigServiceGeneric","LibvirtSandbox.ConfigServiceGenericClass","LibvirtSandbox.ConfigServiceSystemd","LibvirtSandbox.ConfigServiceSystemdClass","LibvirtSandbox.Console","LibvirtSandbox.ConsoleClass","LibvirtSandbox.ConsoleRaw","LibvirtSandbox.ConsoleRawClass","LibvirtSandbox.ConsoleRpc","LibvirtSandbox.ConsoleRpcClass","LibvirtSandbox.Context","LibvirtSandbox.ContextClass","LibvirtSandbox.ContextInteractive","LibvirtSandbox.ContextInteractiveClass","LibvirtSandbox.ContextService","LibvirtSandbox.ContextServiceClass","Functions","Hierarchy","LibvirtSandbox 1.0","Symbol Mapping"],titleterms:{"class":[0,1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],"function":58,api:60,builder:2,builderclass:3,buildercontain:4,buildercontainerclass:5,builderinitrd:6,builderinitrdclass:7,buildermachin:8,buildermachineclass:9,config:10,configclass:11,configdisk:12,configdiskclass:13,configinitrd:14,configinitrdclass:15,configinteract:16,configinteractiveclass:17,configmount:18,configmountclass:19,configmountfil:20,configmountfileclass:21,configmountguestbind:22,configmountguestbindclass:23,configmounthostbind:24,configmounthostbindclass:25,configmounthostimag:26,configmounthostimageclass:27,configmountram:28,configmountramclass:29,confignetwork:30,confignetworkaddress:31,confignetworkaddressclass:32,confignetworkclass:33,confignetworkfilterref:34,confignetworkfilterrefclass:35,confignetworkfilterrefparamet:36,confignetworkfilterrefparameterclass:37,confignetworkrout:38,confignetworkrouteclass:39,configservic:40,configserviceclass:41,configservicegener:42,configservicegenericclass:43,configservicesystemd:44,configservicesystemdclass:45,consol:46,consoleclass:47,consoleraw:48,consolerawclass:49,consolerpc:50,consolerpcclass:51,context:52,contextclass:53,contextinteract:54,contextinteractiveclass:55,contextservic:56,contextserviceclass:57,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],hierarchi:59,libvirtsandbox:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,60],map:61,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],properti:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],signal:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56],structur:0,symbol:61,virtual:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,31,34,36,38,40,42,44,46,48,50,52,54,56]}})