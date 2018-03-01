Search.setIndex({docnames:["callbacks","class-structs","classes","classes/Account","classes/AccountClass","classes/AccountService","classes/AccountServiceClass","classes/AccountSettingIter","classes/AccountWatch","classes/Application","classes/AuthData","classes/Manager","classes/ManagerClass","classes/Provider","classes/Service","classes/ServiceType","constants","enums","functions","hierarchy","index","mapping","structs"],envversion:53,filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/Account.rst","classes/AccountClass.rst","classes/AccountService.rst","classes/AccountServiceClass.rst","classes/AccountSettingIter.rst","classes/AccountWatch.rst","classes/Application.rst","classes/AuthData.rst","classes/Manager.rst","classes/ManagerClass.rst","classes/Provider.rst","classes/Service.rst","classes/ServiceType.rst","constants.rst","enums.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst","structs.rst"],objects:{"Accounts.Account":{"delete":[3,1,1,""],get_display_name:[3,1,1,""],get_enabled:[3,1,1,""],get_manager:[3,1,1,""],get_provider_name:[3,1,1,""],get_selected_service:[3,1,1,""],get_settings_iter:[3,1,1,""],get_value:[3,1,1,""],get_variant:[3,1,1,""],list_enabled_services:[3,1,1,""],list_services:[3,1,1,""],list_services_by_type:[3,1,1,""],remove_watch:[3,1,1,""],select_service:[3,1,1,""],set_display_name:[3,1,1,""],set_enabled:[3,1,1,""],set_value:[3,1,1,""],set_variant:[3,1,1,""],settings_iter_init:[3,1,1,""],sign:[3,1,1,""],store:[3,1,1,""],store_async:[3,1,1,""],store_blocking:[3,1,1,""],store_finish:[3,1,1,""],supports_service:[3,1,1,""],verify:[3,1,1,""],verify_with_tokens:[3,1,1,""],watch_dir:[3,1,1,""],watch_key:[3,1,1,""]},"Accounts.Account.props":{display_name:[3,2,1,""],enabled:[3,2,1,""],foreign:[3,2,1,""],id:[3,2,1,""],manager:[3,2,1,""],provider:[3,2,1,""]},"Accounts.Account.signals":{deleted:[3,3,1,""],display_name_changed:[3,3,1,""],enabled:[3,3,1,""]},"Accounts.AccountService":{"new":[5,4,1,""],get_account:[5,1,1,""],get_auth_data:[5,1,1,""],get_changed_fields:[5,1,1,""],get_enabled:[5,1,1,""],get_service:[5,1,1,""],get_settings_iter:[5,1,1,""],get_value:[5,1,1,""],get_variant:[5,1,1,""],set_value:[5,1,1,""],set_variant:[5,1,1,""],settings_iter_init:[5,1,1,""],settings_iter_next:[5,4,1,""]},"Accounts.AccountService.props":{account:[5,2,1,""],enabled:[5,2,1,""],service:[5,2,1,""]},"Accounts.AccountService.signals":{changed:[5,3,1,""],enabled:[5,3,1,""]},"Accounts.AccountSettingIter":{free:[7,1,1,""],get_next:[7,1,1,""],next:[7,1,1,""]},"Accounts.AccountsError":{ACCOUNT_NOT_FOUND:[17,5,1,""],DB:[17,5,1,""],DB_LOCKED:[17,5,1,""],DELETED:[17,5,1,""],DISPOSED:[17,5,1,""],READONLY:[17,5,1,""],STORE_IN_PROGRESS:[17,5,1,""]},"Accounts.Application":{get_description:[9,1,1,""],get_desktop_app_info:[9,1,1,""],get_i18n_domain:[9,1,1,""],get_name:[9,1,1,""],get_service_usage:[9,1,1,""],ref:[9,1,1,""],supports_service:[9,1,1,""],unref:[9,1,1,""]},"Accounts.AuthData":{get_credentials_id:[10,1,1,""],get_login_parameters:[10,1,1,""],get_mechanism:[10,1,1,""],get_method:[10,1,1,""],get_parameters:[10,1,1,""],insert_parameters:[10,1,1,""],ref:[10,1,1,""],unref:[10,1,1,""]},"Accounts.Error":{ACCOUNT_NOT_FOUND:[17,5,1,""],DB:[17,5,1,""],DB_LOCKED:[17,5,1,""],DELETED:[17,5,1,""],DISPOSED:[17,5,1,""]},"Accounts.Manager":{"new":[11,4,1,""],create_account:[11,1,1,""],do_account_deleted:[11,1,1,""],get_abort_on_db_timeout:[11,1,1,""],get_account:[11,1,1,""],get_account_services:[11,1,1,""],get_application:[11,1,1,""],get_db_timeout:[11,1,1,""],get_enabled_account_services:[11,1,1,""],get_provider:[11,1,1,""],get_service:[11,1,1,""],get_service_type:[11,1,1,""],list:[11,1,1,""],list_applications_by_service:[11,1,1,""],list_by_service_type:[11,1,1,""],list_enabled:[11,1,1,""],list_enabled_by_service_type:[11,1,1,""],list_free:[11,4,1,""],list_providers:[11,1,1,""],list_service_types:[11,1,1,""],list_services:[11,1,1,""],list_services_by_application:[11,1,1,""],list_services_by_type:[11,1,1,""],load_account:[11,1,1,""],load_service_type:[11,1,1,""],new_for_service_type:[11,4,1,""],set_abort_on_db_timeout:[11,1,1,""],set_db_timeout:[11,1,1,""]},"Accounts.Manager.props":{abort_on_db_timeout:[11,2,1,""],db_timeout:[11,2,1,""],service_type:[11,2,1,""],use_dbus:[11,2,1,""]},"Accounts.Manager.signals":{account_created:[11,3,1,""],account_deleted:[11,3,1,""],account_updated:[11,3,1,""],enabled_event:[11,3,1,""]},"Accounts.Provider":{get_description:[13,1,1,""],get_display_name:[13,1,1,""],get_domains_regex:[13,1,1,""],get_file_contents:[13,1,1,""],get_i18n_domain:[13,1,1,""],get_icon_name:[13,1,1,""],get_name:[13,1,1,""],get_plugin_name:[13,1,1,""],get_single_account:[13,1,1,""],list_free:[13,4,1,""],match_domain:[13,1,1,""],ref:[13,1,1,""],unref:[13,1,1,""]},"Accounts.Service":{get_description:[14,1,1,""],get_display_name:[14,1,1,""],get_file_contents:[14,1,1,""],get_i18n_domain:[14,1,1,""],get_icon_name:[14,1,1,""],get_name:[14,1,1,""],get_provider:[14,1,1,""],get_service_type:[14,1,1,""],get_tags:[14,1,1,""],has_tag:[14,1,1,""],list_free:[14,4,1,""],ref:[14,1,1,""],unref:[14,1,1,""]},"Accounts.ServiceType":{get_description:[15,1,1,""],get_display_name:[15,1,1,""],get_file_contents:[15,1,1,""],get_i18n_domain:[15,1,1,""],get_icon_name:[15,1,1,""],get_name:[15,1,1,""],get_tags:[15,1,1,""],has_tag:[15,1,1,""],list_free:[15,4,1,""],ref:[15,1,1,""],unref:[15,1,1,""]},"Accounts.SettingSource":{ACCOUNT:[17,5,1,""],NONE:[17,5,1,""],PROFILE:[17,5,1,""]},Accounts:{Account:[3,0,1,""],AccountClass:[4,0,1,""],AccountNotifyCb:[0,3,1,""],AccountService:[5,0,1,""],AccountServiceClass:[6,0,1,""],AccountSettingIter:[7,0,1,""],AccountStoreCb:[0,3,1,""],AccountWatch:[8,0,1,""],AccountsError:[17,0,1,""],Application:[9,0,1,""],AuthData:[10,0,1,""],Error:[17,0,1,""],MANAGER_INTERFACE:[16,2,1,""],MANAGER_OBJECT_PATH:[16,2,1,""],MANAGER_SERVICE_NAME:[16,2,1,""],Manager:[11,0,1,""],ManagerClass:[12,0,1,""],Provider:[13,0,1,""],Service:[14,0,1,""],ServiceType:[15,0,1,""],SettingSource:[17,0,1,""],accounts_error_quark:[18,3,1,""],errors_quark:[18,3,1,""],provider_list_free:[18,3,1,""],service_list_free:[18,3,1,""],service_type_list_free:[18,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","data","Python data"],"3":["py","function","Python function"],"4":["py","classmethod","Python class method"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:data","3":"py:function","4":"py:classmethod","5":"py:attribute"},terms:{"abstract":[3,5,11],"byte":15,"case":11,"class":[4,6,7,8,9,10,12,13,14,15,17,20],"default":[3,5,11],"enum":20,"float":[3,5,10],"function":[3,4,5,6,9,10,11,12,13,14,15,20],"int":[3,7,10,11,14,15,18],"long":[11,13,14,15],"new":[3,5,7,10,11,13,14,15,17,21],"return":[3,5,7,8,9,10,11,13,14,15,17,18],"short":[3,5,11],"true":[3,5,7,9,11,13,14,15],"try":5,"while":11,Bus:11,IDs:11,The:[3,5,9,10,11,13,14,15,17],These:17,Use:[3,4,5,6,7,9,10,11,12,13,14,15],Used:[13,14,15],abort:11,abort_on_db_timeout:11,about:[3,5],access:[3,4,5,6,7,11,12,17,20],accessor:[3,4,5,6,9,10,11,12,13,14,15],account:[0,1,2,16,17,18,19,21,22],account_cr:11,account_delet:[11,12],account_id:11,account_not_found:[17,21],account_servic:5,account_upd:11,accountclass:[1,3,21],accountnotifycb:[0,3,21],accounts_error_quark:[18,21],accountserror:[17,21],accountservic:[2,11,19,21],accountserviceclass:[1,5,21],accountsettingit:[3,5,21,22],accountssso:16,accountstorecb:[0,3,21],accountwatch:[3,21,22],act:3,add:[13,14,15],added:10,aegi:3,affect:11,after:5,ag_account_delet:21,ag_account_get_display_nam:21,ag_account_get_en:21,ag_account_get_manag:21,ag_account_get_provider_nam:21,ag_account_get_selected_servic:21,ag_account_get_settings_it:21,ag_account_get_valu:21,ag_account_get_vari:21,ag_account_list_enabled_servic:21,ag_account_list_servic:21,ag_account_list_services_by_typ:21,ag_account_remove_watch:21,ag_account_select_servic:21,ag_account_service_get_account:21,ag_account_service_get_auth_data:21,ag_account_service_get_changed_field:21,ag_account_service_get_en:21,ag_account_service_get_servic:21,ag_account_service_get_settings_it:21,ag_account_service_get_valu:21,ag_account_service_get_vari:21,ag_account_service_new:21,ag_account_service_set_valu:21,ag_account_service_set_vari:21,ag_account_service_settings_iter_init:21,ag_account_service_settings_iter_next:21,ag_account_set_display_nam:21,ag_account_set_en:21,ag_account_set_valu:21,ag_account_set_vari:21,ag_account_settings_iter_fre:21,ag_account_settings_iter_get_next:21,ag_account_settings_iter_init:21,ag_account_settings_iter_next:21,ag_account_sign:21,ag_account_stor:21,ag_account_store_async:21,ag_account_store_block:21,ag_account_store_finish:21,ag_account_supports_servic:21,ag_account_verifi:21,ag_account_verify_with_token:21,ag_account_watch_dir:21,ag_account_watch_kei:21,ag_accounts_error_account_not_found:21,ag_accounts_error_db:21,ag_accounts_error_db_lock:21,ag_accounts_error_delet:21,ag_accounts_error_dispos:21,ag_accounts_error_quark:21,ag_accounts_error_readonli:21,ag_accounts_error_store_in_progress:21,ag_application_get_descript:21,ag_application_get_desktop_app_info:21,ag_application_get_i18n_domain:21,ag_application_get_nam:21,ag_application_get_service_usag:21,ag_application_ref:21,ag_application_supports_servic:21,ag_application_unref:21,ag_auth_data_get_credentials_id:21,ag_auth_data_get_login_paramet:21,ag_auth_data_get_mechan:21,ag_auth_data_get_method:21,ag_auth_data_get_paramet:21,ag_auth_data_insert_paramet:21,ag_auth_data_ref:21,ag_auth_data_unref:21,ag_error_account_not_found:21,ag_error_db:21,ag_error_db_lock:21,ag_error_delet:21,ag_error_dispos:21,ag_errors_quark:21,ag_manager_create_account:21,ag_manager_get_abort_on_db_timeout:21,ag_manager_get_account:21,ag_manager_get_account_servic:21,ag_manager_get_appl:21,ag_manager_get_db_timeout:21,ag_manager_get_enabled_account_servic:21,ag_manager_get_provid:21,ag_manager_get_servic:21,ag_manager_get_service_typ:21,ag_manager_interfac:21,ag_manager_list:21,ag_manager_list_applications_by_servic:21,ag_manager_list_by_service_typ:21,ag_manager_list_en:21,ag_manager_list_enabled_by_service_typ:21,ag_manager_list_fre:21,ag_manager_list_provid:21,ag_manager_list_servic:21,ag_manager_list_service_typ:21,ag_manager_list_services_by_appl:21,ag_manager_list_services_by_typ:21,ag_manager_load_account:21,ag_manager_load_service_typ:21,ag_manager_new:21,ag_manager_new_for_service_typ:21,ag_manager_object_path:21,ag_manager_service_nam:21,ag_manager_set_abort_on_db_timeout:21,ag_manager_set_db_timeout:21,ag_provider_get_descript:21,ag_provider_get_display_nam:21,ag_provider_get_domains_regex:21,ag_provider_get_file_cont:21,ag_provider_get_i18n_domain:21,ag_provider_get_icon_nam:21,ag_provider_get_nam:21,ag_provider_get_plugin_nam:21,ag_provider_get_single_account:21,ag_provider_list_fre:21,ag_provider_match_domain:21,ag_provider_ref:21,ag_provider_unref:21,ag_service_get_descript:21,ag_service_get_display_nam:21,ag_service_get_file_cont:21,ag_service_get_i18n_domain:21,ag_service_get_icon_nam:21,ag_service_get_nam:21,ag_service_get_provid:21,ag_service_get_service_typ:21,ag_service_get_tag:21,ag_service_has_tag:21,ag_service_list_fre:21,ag_service_ref:21,ag_service_type_get_descript:21,ag_service_type_get_display_nam:21,ag_service_type_get_file_cont:21,ag_service_type_get_i18n_domain:21,ag_service_type_get_icon_nam:21,ag_service_type_get_nam:21,ag_service_type_get_tag:21,ag_service_type_has_tag:21,ag_service_type_list_fre:21,ag_service_type_ref:21,ag_service_type_unref:21,ag_service_unref:21,ag_setting_source_account:21,ag_setting_source_non:21,ag_setting_source_profil:21,agaccount:21,agaccountclass:21,agaccountid:[3,11],agaccountnotifycb:21,agaccountserror:21,agaccountservic:21,agaccountserviceclass:21,agaccountsettingit:21,agaccountstorecb:21,agaccountwatch:21,agappl:21,agauthdata:21,agerror:21,agmanag:[11,21],agmanagerclass:21,agprovid:21,agservic:21,agservicetyp:21,agsettingsourc:[5,21],all:[3,10,11,13],alloc:[5,11],allow:11,alreadi:[10,17],also:11,alter:5,alwai:3,ani:3,anymor:5,applic:[3,5,11,21,22],application_nam:11,arrai:[3,5],associ:[5,7,10],asynchron:17,asyncreadycallback:3,asyncresult:3,auth:5,authdata:[5,21,22],authent:[5,10],base:[3,5,11,17,20],becom:11,been:[0,3,5,7,11],being:[3,17],below:[4,6,12],beyond:5,bind:[3,5],block:11,bool:[3,5,7,9,11,13,14,15],buffer:[13,14,15],call:[3,5,11],callback:[3,20],can:[3,5,13,14,17],cancel:3,care:3,catalog:14,caus:11,certain:11,chanc:11,chang:[0,3,5,11],check:[3,5,9,11,13,14,15],classmethod:[5,11,13,14,15],client:[3,5,10,11,13],code:[3,16],com:[16,20],come:[3,5,17],commit:3,complet:[0,3],configur:[0,3,5,17],consid:11,constant:20,construct_onli:[3,5,11],constructor:5,contain:[10,11],content:[13,14,15],context:5,conveni:11,count:[5,9,10],creat:[3,5,11,13],create_account:[11,21],creation:13,credenti:10,current:[3,5,11,17],data:[0,3,5,10,14],data_offset:14,databas:[3,11,17,20],db_lock:[17,21],db_timeout:11,dbu:11,debian:20,declar:11,decrement:[9,10],defin:[13,14],delet:[3,11,17,21],depend:20,deprec:[3,5,7,10],describ:5,descript:[3,4,5,6,7,9,11,12,13,14,15,20],desir:3,desktopappinfo:9,destroi:[9,10],dictionari:10,differ:13,disabl:[3,11],displai:[3,13,14,15],display_nam:3,display_name_chang:3,dispos:[17,21],do_account_delet:11,doe:13,doesn:13,domain:[9,13,14,15],don:5,done:11,element:[11,14],emit:[3,5,11],enabl:[3,5,11],enabled:3,enabled_ev:11,enforc:13,entri:[14,15],enumer:[3,5],error:[0,3,11,13,14,15,17,21],errors_quark:[18,21],especi:13,event:11,execut:11,express:13,extra_paramet:10,fail:9,failur:[3,13,14,15],fals:[3,5,7,9,11,13,14,15],file:[9,13,14,15],filter:3,find:13,finish:3,first:11,flag:[3,5,11,13],foreign:3,found:[5,9,11,14,17],framework:20,free:[3,5,7,11,13,14,15,18,21],freed:[13,14,15],from:[3,5,8,9,11,13,14,17],full:11,g_list_fre:[11,14,15],g_variant_type_vardict:10,get:[3,5,9,10,11,13,14,15],get_abort_on_db_timeout:[11,21],get_account:[5,11,21],get_account_servic:[11,21],get_appl:[11,21],get_auth_data:[5,21],get_changed_field:[5,21],get_credentials_id:[10,21],get_db_timeout:[11,21],get_descript:[9,13,14,15,21],get_desktop_app_info:[9,21],get_display_nam:[3,13,14,15,21],get_domains_regex:[13,21],get_en:[3,5,21],get_enabled_account_servic:[11,21],get_file_cont:[13,14,15,21],get_i18n_domain:[9,13,14,15,21],get_icon_nam:[13,14,15,21],get_login_paramet:[10,21],get_manag:[3,21],get_mechan:[10,21],get_method:[10,21],get_nam:[9,13,14,15,21],get_next:[5,7,21],get_paramet:[10,21],get_plugin_nam:[13,21],get_provid:[11,14,21],get_provider_nam:[3,21],get_selected_servic:[3,21],get_servic:[5,11,21],get_service_typ:[11,14,21],get_service_usag:[9,21],get_settings_it:[3,5,21],get_single_account:[13,21],get_tag:[14,15,21],get_valu:[3,5,21],get_vari:[3,5,21],ginterfac:[3,11],gio:[3,9,11,20],gir1:20,gitlab:20,given:[3,9,10,11,13],glib:[0,3,5,7,10,11,13,14,15,17,18,20],global:[3,5],gobject:[3,4,5,6,7,10,11,12,19,20],googl:16,group:5,guarante:[3,5,13,14,15],handler:5,has:[0,3,5,11,14,15],has_tag:[14,15,21],hashtabl:10,have:[3,5,7,11],hierarchi:20,higher:11,hold:[3,5],homepag:20,how:11,http:20,icon:[13,14,15],icon_nam:13,identifi:[3,11,17],idx1:7,idx2:7,ignor:3,implement:13,increment:[5,9,10],inform:13,inherit:[3,5,11],init:[3,11],initi:[3,5,7],insert:10,insert_paramet:[10,21],instal:[0,3,11],instanc:11,instanti:[3,11],instead:[3,5,7,9,10],inter:11,interest:11,invok:[0,3],ipc:11,item:[3,9,10,11],iter1:7,iter:[3,5,7],its:[3,5,11,13],itself:13,just:11,keep:[3,5],kei:[0,3,5,7],key_prefix:[3,5],kwarg:[3,5,11],languag:[3,5],left:13,len:15,length:15,libaccount:[11,13,17,20],librari:[11,13,14,15,18],lifetim:[3,5],like:0,linux:20,list:[3,5,11,13,14,15,18,21],list_applications_by_servic:[11,21],list_by_service_typ:[11,21],list_en:[11,21],list_enabled_by_service_typ:[11,21],list_enabled_servic:[3,11,21],list_fre:[3,11,13,14,15,21],list_provid:[11,21],list_servic:[3,11,21],list_service_typ:[11,15,18,21],list_services_by_appl:[11,21],list_services_by_typ:[3,11,21],load:11,load_account:[11,21],load_service_typ:[11,21],locat:[3,13,14,15],lock:[11,17],longer:11,made:[3,5,11],mainten:11,make:[3,11],manag:[2,3,13,15,16,18,19,21],manager_interfac:[16,21],manager_object_path:[16,21],manager_service_nam:[16,21],managerclass:[1,11,21],map:20,match:[3,11,13],match_domain:[13,21],mean:11,meant:11,mechan:[5,10],memori:[7,11],merg:5,method:17,might:[11,13],millisecond:11,mode:17,modifi:[11,13,14,15],more:[5,7,11,13],most:0,multipl:13,must:[3,5,7,11,14,15],name:[0,3,4,5,6,7,9,11,12,13,14,15],need:[5,11],new_for_service_typ:[11,21],newli:5,next:[7,21],none:[0,3,4,5,6,8,9,10,11,12,13,14,15,17,21],note:[3,11,13],notif:[3,11],now:3,object:[0,3,5,7,11,12,19],objectclass:[3,4,5,6,11,12],obtain:3,occur:[0,11,13,14,15,17],offset:14,often:11,one:[3,5,11,13],onli:[3,5,11,13,17],opaqu:[3,5,8,9,10,11,13,14,15],oper:[3,5,11,17],option:3,order:3,other:[3,11],otherwis:[3,5,9,11,13,14,15],over:[3,5,7],own:[3,5,14,15],ownership:[3,5],packag:20,paramet:[0,3,5,9,10,11,13,14,15,18],parent:20,parent_class:[4,6,12],parent_inst:[3,5,11],particular:11,pass:[0,3,10],platform:[13,20],plugin:13,pointer:[3,5,7,13,14,15],posix:20,possess:3,practic:11,preced:10,predefin:[3,5,17],prefix:[0,3],present:[3,5,10,17],prevent:13,previous:[5,7,11],prior:3,process:[11,17],profil:[3,5,17,21],program:11,progress:17,project:20,prop:[3,5,11],provid:[3,11,14,18,21,22],provider_list_fre:[18,21],provider_nam:11,ptr1:7,ptr2:7,python:21,rais:[3,11],react:11,read:[5,11,17],readabl:[3,5,11],readonli:[17,21],receiv:[3,5,7,11,13,14,15],record:3,redund:11,ref:[3,5,9,10,13,14,15,21],refer:[3,5,9,10,13,14,15],referenc:[13,14,15],regex:13,regist:11,regular:13,relat:[3,5,9,10,11,13,14,15],remov:3,remove_watch:[3,21],repres:[3,11],request:[3,14,15,17],requir:11,res:3,respect:5,respons:11,restrict:11,retriev:[3,5],run_last:[3,5,11],same:[0,13],search:11,second:11,select:[3,5],select_servic:[3,21],self:[3,5,7,9,10,11,13,14,15],servic:[3,5,9,11,15,18,21,22],service_list_fre:[18,21],service_nam:11,service_typ:[3,11],service_type_list_fre:[18,21],servicetyp:[11,18,21,22],set:[0,3,5,7,11,13,14,15,17],set_abort_on_db_timeout:[11,21],set_db_timeout:[11,21],set_display_nam:[3,21],set_en:[3,21],set_valu:[3,5,21],set_vari:[3,5,21],settings_iter_init:[3,5,7,21],settings_iter_next:[5,21],settingsourc:[3,5,17,21],share:3,should:[3,5,11,13,14,15],sign:[3,20,21],signatur:3,sinc:[3,5,7,10],singl:20,some:[0,5,10,11,13,14,15,18],sourc:[3,5,17],special:3,specif:[5,10,11],specifi:[3,9,11,14,15],sso:20,start:[3,5,11],state:[3,5,11],statu:3,stop:11,storag:3,store:[0,3,5,11,13,17,21],store_async:[3,21],store_block:[3,21],store_finish:[3,21],store_in_progress:[17,21],str:[0,3,5,7,9,10,11,13,14,15],strfreev:5,strictli:11,string:[3,5,7],struct:[3,5,8,11],structur:[3,5,9,10,11,13,14,15,20],subclass:[3,5,11],subsequ:3,success:[3,11],successfulli:11,suppli:11,support:[3,5,9,11,13],supports_servic:[3,9,21],sure:3,symbol:20,tag:[14,15],take:[3,5,10],taken:11,tell:[3,5,11,13],templat:[3,5],termin:3,than:[11,13],thei:11,thi:[0,3,5,10,11,13,14,15,18],time:11,timeout:11,timeout_m:11,token:3,translat:[9,13,14,15],type:[3,4,5,6,7,9,10,11,12,13,14,15,18],type_data:14,typic:5,under:[3,5],underli:5,uniniti:[3,5],unless:11,unref:[5,9,10,11,13,14,15,21],unrefer:[13,14,15],unset:[3,5],until:11,updat:11,upon:[13,14,15],usag:9,use:[5,10,11],use_dbu:11,used:[0,3,5,11,13],useful:[3,5,13],user:[0,3],user_data:[0,3],using:11,valid:[3,11,13,14,15],valu:[0,3,5,7,10,11,17],variabl:[3,5],variant:[3,5,7,10],variou:17,verifi:[3,21],verify_with_token:[3,21],version:[3,5,7,10,13,14,15,17],wai:11,wait:11,want:11,watch:3,watch_dir:[0,3,8,21],watch_kei:[0,3,8,21],were:10,when:[0,3,5,9,10,11,13],whenev:3,where:[11,13,14],whether:[3,5,9,11,13],which:[0,3,5,11,13],whose:[0,3,5],wish:[3,5],work:13,would:5,writabl:[3,5,11],written:[0,3],xml:[9,13,14,15],you:[5,11],yourself:5},titles:["Callbacks","Class Structures","Classes","Accounts.Account","Accounts.AccountClass","Accounts.AccountService","Accounts.AccountServiceClass","Accounts.AccountSettingIter","Accounts.AccountWatch","Accounts.Application","Accounts.AuthData","Accounts.Manager","Accounts.ManagerClass","Accounts.Provider","Accounts.Service","Accounts.ServiceType","Constants","Enums","Functions","Hierarchy","Accounts 1.0 (1.23)","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,5,11],"enum":17,"function":18,account:[3,4,5,6,7,8,9,10,11,12,13,14,15,20],accountclass:4,accountservic:5,accountserviceclass:6,accountsettingit:7,accountwatch:8,api:20,applic:9,authdata:10,callback:0,constant:16,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],field:[3,4,5,6,7,8,9,10,11,12,13,14,15],hierarchi:19,manag:11,managerclass:12,map:21,method:[3,4,5,6,7,8,9,10,11,12,13,14,15],properti:[3,5,11],provid:13,servic:14,servicetyp:15,signal:[3,5,11],structur:[1,22],symbol:21,virtual:[3,5,11]}})