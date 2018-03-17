Search.setIndex({docnames:["callbacks","class-structs","classes","classes/BundleRef","classes/BundleRefClass","classes/Installation","classes/InstallationClass","classes/InstalledRef","classes/InstalledRefClass","classes/Ref","classes/RefClass","classes/RelatedRef","classes/RelatedRefClass","classes/Remote","classes/RemoteClass","classes/RemoteRef","classes/RemoteRefClass","constants","enums","flags","functions","hierarchy","index","mapping"],envversion:53,filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/BundleRef.rst","classes/BundleRefClass.rst","classes/Installation.rst","classes/InstallationClass.rst","classes/InstalledRef.rst","classes/InstalledRefClass.rst","classes/Ref.rst","classes/RefClass.rst","classes/RelatedRef.rst","classes/RelatedRefClass.rst","classes/Remote.rst","classes/RemoteClass.rst","classes/RemoteRef.rst","classes/RemoteRefClass.rst","constants.rst","enums.rst","flags.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst"],objects:{"Flatpak.BundleRef":{"new":[3,2,1,""],get_appstream:[3,1,1,""],get_file:[3,1,1,""],get_icon:[3,1,1,""],get_installed_size:[3,1,1,""],get_metadata:[3,1,1,""],get_origin:[3,1,1,""],get_runtime_repo_url:[3,1,1,""]},"Flatpak.BundleRef.props":{file:[3,3,1,""]},"Flatpak.Error":{ALREADY_INSTALLED:[18,4,1,""],NOT_INSTALLED:[18,4,1,""],ONLY_PULLED:[18,4,1,""],quark:[18,2,1,""]},"Flatpak.InstallFlags":{NONE:[19,4,1,""],NO_DEPLOY:[19,4,1,""],NO_PULL:[19,4,1,""],NO_STATIC_DELTAS:[19,4,1,""]},"Flatpak.Installation":{cleanup_local_refs_sync:[5,1,1,""],create_monitor:[5,1,1,""],drop_caches:[5,1,1,""],fetch_remote_metadata_sync:[5,1,1,""],fetch_remote_ref_sync:[5,1,1,""],fetch_remote_size_sync:[5,1,1,""],get_config:[5,1,1,""],get_current_installed_app:[5,1,1,""],get_display_name:[5,1,1,""],get_id:[5,1,1,""],get_installed_ref:[5,1,1,""],get_is_user:[5,1,1,""],get_path:[5,1,1,""],get_priority:[5,1,1,""],get_remote_by_name:[5,1,1,""],get_storage_type:[5,1,1,""],install:[5,1,1,""],install_bundle:[5,1,1,""],install_full:[5,1,1,""],install_ref_file:[5,1,1,""],launch:[5,1,1,""],list_installed_refs:[5,1,1,""],list_installed_refs_by_kind:[5,1,1,""],list_installed_refs_for_update:[5,1,1,""],list_installed_related_refs_sync:[5,1,1,""],list_remote_refs_sync:[5,1,1,""],list_remote_related_refs_sync:[5,1,1,""],list_remotes:[5,1,1,""],load_app_overrides:[5,1,1,""],modify_remote:[5,1,1,""],new_for_path:[5,2,1,""],new_system:[5,2,1,""],new_system_with_id:[5,2,1,""],new_user:[5,2,1,""],prune_local_repo:[5,1,1,""],remove_local_ref_sync:[5,1,1,""],remove_remote:[5,1,1,""],set_config_sync:[5,1,1,""],uninstall:[5,1,1,""],update:[5,1,1,""],update_appstream_full_sync:[5,1,1,""],update_appstream_sync:[5,1,1,""],update_full:[5,1,1,""],update_remote_sync:[5,1,1,""]},"Flatpak.InstalledRef":{get_deploy_dir:[7,1,1,""],get_installed_size:[7,1,1,""],get_is_current:[7,1,1,""],get_latest_commit:[7,1,1,""],get_origin:[7,1,1,""],get_subpaths:[7,1,1,""],load_metadata:[7,1,1,""]},"Flatpak.InstalledRef.props":{deploy_dir:[7,3,1,""],installed_size:[7,3,1,""],is_current:[7,3,1,""],latest_commit:[7,3,1,""],origin:[7,3,1,""],subpaths:[7,3,1,""]},"Flatpak.Ref":{format_ref:[9,1,1,""],get_arch:[9,1,1,""],get_branch:[9,1,1,""],get_collection_id:[9,1,1,""],get_commit:[9,1,1,""],get_kind:[9,1,1,""],get_name:[9,1,1,""],parse:[9,2,1,""]},"Flatpak.Ref.props":{arch:[9,3,1,""],branch:[9,3,1,""],collection_id:[9,3,1,""],commit:[9,3,1,""],kind:[9,3,1,""],name:[9,3,1,""]},"Flatpak.RefKind":{APP:[18,4,1,""],RUNTIME:[18,4,1,""]},"Flatpak.RelatedRef":{get_subpaths:[11,1,1,""],should_delete:[11,1,1,""],should_download:[11,1,1,""]},"Flatpak.RelatedRef.props":{should_delete:[11,3,1,""],should_download:[11,3,1,""],subpaths:[11,3,1,""]},"Flatpak.Remote":{"new":[13,2,1,""],get_appstream_dir:[13,1,1,""],get_appstream_timestamp:[13,1,1,""],get_collection_id:[13,1,1,""],get_default_branch:[13,1,1,""],get_disabled:[13,1,1,""],get_gpg_verify:[13,1,1,""],get_name:[13,1,1,""],get_nodeps:[13,1,1,""],get_noenumerate:[13,1,1,""],get_prio:[13,1,1,""],get_remote_type:[13,1,1,""],get_title:[13,1,1,""],get_url:[13,1,1,""],set_collection_id:[13,1,1,""],set_default_branch:[13,1,1,""],set_disabled:[13,1,1,""],set_gpg_key:[13,1,1,""],set_gpg_verify:[13,1,1,""],set_nodeps:[13,1,1,""],set_noenumerate:[13,1,1,""],set_prio:[13,1,1,""],set_title:[13,1,1,""],set_url:[13,1,1,""]},"Flatpak.Remote.props":{name:[13,3,1,""],type:[13,3,1,""]},"Flatpak.RemoteRef":{get_remote_name:[15,1,1,""]},"Flatpak.RemoteRef.props":{remote_name:[15,3,1,""]},"Flatpak.RemoteType":{LAN:[18,4,1,""],STATIC:[18,4,1,""],USB:[18,4,1,""]},"Flatpak.StorageType":{DEFAULT:[18,4,1,""],HARD_DISK:[18,4,1,""],MMC:[18,4,1,""],NETWORK:[18,4,1,""],SDCARD:[18,4,1,""]},"Flatpak.UpdateFlags":{NONE:[19,4,1,""],NO_DEPLOY:[19,4,1,""],NO_PULL:[19,4,1,""],NO_STATIC_DELTAS:[19,4,1,""]},Flatpak:{BundleRef:[3,0,1,""],BundleRefClass:[4,0,1,""],Error:[18,0,1,""],InstallFlags:[19,0,1,""],Installation:[5,0,1,""],InstallationClass:[6,0,1,""],InstalledRef:[7,0,1,""],InstalledRefClass:[8,0,1,""],MAJOR_VERSION:[17,3,1,""],MICRO_VERSION:[17,3,1,""],MINOR_VERSION:[17,3,1,""],ProgressCallback:[0,5,1,""],Ref:[9,0,1,""],RefClass:[10,0,1,""],RefKind:[18,0,1,""],RelatedRef:[11,0,1,""],RelatedRefClass:[12,0,1,""],Remote:[13,0,1,""],RemoteClass:[14,0,1,""],RemoteRef:[15,0,1,""],RemoteRefClass:[16,0,1,""],RemoteType:[18,0,1,""],StorageType:[18,0,1,""],UpdateFlags:[19,0,1,""],error_quark:[20,5,1,""],get_default_arch:[20,5,1,""],get_supported_arches:[20,5,1,""],get_system_installations:[20,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:attribute","5":"py:function"},terms:{"86_64":9,"abstract":[3,5,7,9,11,13,15],"byte":[3,5,7,13],"class":[4,6,8,10,12,14,16,18,19,22],"default":[0,3,5,7,9,11,13,15,18,19,20,23],"enum":22,"function":[5,18,22],"int":[0,3,5,7,13,18,20],"long":0,"new":[3,5,11,13,18,19,20,23],"return":[3,5,7,9,11,13,15,18,20],"short":[3,7,9,11,13,15],"static":[13,18,23],"true":[5,7,11],"try":19,For:5,The:[0,5,7,9,13,15,18],These:5,about:5,access:[3,4,5,6,7,8,9,10,11,12,13,14,15,16],accord:20,accordingli:5,added:[5,13],all:[5,7,11],alloc:5,alreadi:[5,18],already_instal:[5,18,23],alter:[18,19],alwai:5,amount:5,ani:19,app:[3,5,9,18,22,23],app_id:5,applic:[5,7,9,13,18,22],appstream:[3,5,13],arch:[5,9,13,20],architectur:[5,9,13],arrai:20,artifact:[9,18],attach:5,auto:11,avail:[5,20],avoid:5,base:[3,5,7,9,11,13,15,18,19],been:[5,13],befor:5,behavior:[18,19],binari:13,bool:[0,5,7,11,13],branch:[5,9,13],build:[5,19],bundl:[3,5,22],bundleref:[2,9,21,23],bundlerefclass:[1,3,23],cach:[5,13],call:0,callback:[5,22],caller:[0,5],can:[0,5,9,13,18,20],cancel:[5,7,20],canon:20,card:18,chang:[5,13],check:5,classmethod:[3,5,9,13,18],cleanup_local_refs_sync:[5,23],code:[5,18],collect:[9,13],collection_id:[9,13],come:[5,13],comman:5,commit:[5,7,9,13],common:5,complet:0,comprehens:22,compress:3,config:13,configur:[5,13,20],conform:13,constant:22,construct_onli:13,contain:[5,7],content:[3,5],context:0,convert:9,copi:5,correctli:5,could:[5,13],creat:[3,5],create_monitor:[5,23],current:[5,7,13,20],data:[0,3,5,13],date:5,debian:22,debug:5,decid:5,default_branch:13,delet:11,depend:[13,22],deploi:[5,7],deploy:22,deploy_dir:7,descript:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,22],desktop:22,dir:7,directori:13,disabl:13,disk:[5,18],displai:[0,5],doesn:20,doing:5,don:[13,19],download:[5,11],download_s:5,drive:13,drop:5,drop_cach:[5,23],dure:0,dynam:13,earlier:5,effect:13,emit:5,enabl:13,end:5,enumer:13,error:[3,5,7,9,18,20,23],error_quark:[20,23],estim:0,etc:5,even:5,everyon:5,everyth:5,exampl:5,explicitli:5,fail:9,failur:5,fals:[5,7,11],feedback:5,fetch:[5,13,19],fetch_remote_metadata_sync:[5,23],fetch_remote_ref_sync:[5,23],fetch_remote_size_sync:[5,23],file:[3,5,7,11,13],filemonitor:5,find:[5,13],first:[5,20],flag:[3,5,7,9,11,13,15,18,22],flatpak:[0,1,2,17,18,19,20,21,23],flatpak_bundle_ref_get_appstream:23,flatpak_bundle_ref_get_fil:23,flatpak_bundle_ref_get_icon:23,flatpak_bundle_ref_get_installed_s:23,flatpak_bundle_ref_get_metadata:23,flatpak_bundle_ref_get_origin:23,flatpak_bundle_ref_get_runtime_repo_url:23,flatpak_bundle_ref_new:23,flatpak_error_already_instal:23,flatpak_error_not_instal:23,flatpak_error_only_pul:23,flatpak_error_quark:23,flatpak_get_default_arch:23,flatpak_get_supported_arch:23,flatpak_get_system_instal:23,flatpak_install_flags_no_deploi:23,flatpak_install_flags_no_pul:23,flatpak_install_flags_no_static_delta:23,flatpak_install_flags_non:23,flatpak_installation_cleanup_local_refs_sync:23,flatpak_installation_create_monitor:23,flatpak_installation_drop_cach:23,flatpak_installation_fetch_remote_metadata_sync:23,flatpak_installation_fetch_remote_ref_sync:23,flatpak_installation_fetch_remote_size_sync:23,flatpak_installation_get_config:23,flatpak_installation_get_current_installed_app:23,flatpak_installation_get_display_nam:23,flatpak_installation_get_id:23,flatpak_installation_get_installed_ref:23,flatpak_installation_get_is_us:23,flatpak_installation_get_path:23,flatpak_installation_get_prior:23,flatpak_installation_get_remote_by_nam:23,flatpak_installation_get_storage_typ:23,flatpak_installation_instal:23,flatpak_installation_install_bundl:23,flatpak_installation_install_ful:23,flatpak_installation_install_ref_fil:23,flatpak_installation_launch:23,flatpak_installation_list_installed_ref:23,flatpak_installation_list_installed_refs_by_kind:23,flatpak_installation_list_installed_refs_for_upd:23,flatpak_installation_list_installed_related_refs_sync:23,flatpak_installation_list_remot:23,flatpak_installation_list_remote_refs_sync:23,flatpak_installation_list_remote_related_refs_sync:23,flatpak_installation_load_app_overrid:23,flatpak_installation_modify_remot:23,flatpak_installation_new_for_path:23,flatpak_installation_new_system:23,flatpak_installation_new_system_with_id:23,flatpak_installation_new_us:23,flatpak_installation_prune_local_repo:23,flatpak_installation_remove_local_ref_sync:23,flatpak_installation_remove_remot:23,flatpak_installation_set_config_sync:23,flatpak_installation_uninstal:23,flatpak_installation_upd:23,flatpak_installation_update_appstream_full_sync:23,flatpak_installation_update_appstream_sync:23,flatpak_installation_update_ful:23,flatpak_installation_update_remote_sync:23,flatpak_installed_ref_get_deploy_dir:23,flatpak_installed_ref_get_installed_s:23,flatpak_installed_ref_get_is_curr:23,flatpak_installed_ref_get_latest_commit:23,flatpak_installed_ref_get_origin:23,flatpak_installed_ref_get_subpath:23,flatpak_installed_ref_load_metadata:23,flatpak_major_vers:23,flatpak_micro_vers:23,flatpak_minor_vers:23,flatpak_ref_format_ref:23,flatpak_ref_get_arch:23,flatpak_ref_get_branch:23,flatpak_ref_get_collection_id:23,flatpak_ref_get_commit:23,flatpak_ref_get_kind:23,flatpak_ref_get_nam:23,flatpak_ref_kind_app:23,flatpak_ref_kind_runtim:23,flatpak_ref_pars:23,flatpak_related_ref_get_subpath:23,flatpak_related_ref_should_delet:23,flatpak_related_ref_should_download:23,flatpak_remote_get_appstream_dir:23,flatpak_remote_get_appstream_timestamp:23,flatpak_remote_get_collection_id:23,flatpak_remote_get_default_branch:23,flatpak_remote_get_dis:[13,23],flatpak_remote_get_gpg_verifi:23,flatpak_remote_get_nam:23,flatpak_remote_get_nodep:23,flatpak_remote_get_noenumer:23,flatpak_remote_get_prio:23,flatpak_remote_get_remote_typ:23,flatpak_remote_get_titl:23,flatpak_remote_get_url:23,flatpak_remote_new:23,flatpak_remote_ref_get_remote_nam:23,flatpak_remote_set_collection_id:23,flatpak_remote_set_default_branch:23,flatpak_remote_set_dis:23,flatpak_remote_set_gpg_kei:23,flatpak_remote_set_gpg_verifi:23,flatpak_remote_set_nodep:23,flatpak_remote_set_noenumer:23,flatpak_remote_set_prio:23,flatpak_remote_set_titl:23,flatpak_remote_set_url:23,flatpak_remote_type_lan:23,flatpak_remote_type_stat:23,flatpak_remote_type_usb:23,flatpak_storage_type_default:23,flatpak_storage_type_hard_disk:23,flatpak_storage_type_mmc:23,flatpak_storage_type_network:23,flatpak_storage_type_sdcard:23,flatpak_update_flags_no_deploi:23,flatpak_update_flags_no_pul:23,flatpak_update_flags_no_static_delta:23,flatpak_update_flags_non:23,flatpakbundleref:23,flatpakbundlerefclass:23,flatpakerror:23,flatpakinstal:23,flatpakinstallationclass:23,flatpakinstalledref:23,flatpakinstalledrefclass:23,flatpakinstallflag:23,flatpakprogresscallback:23,flatpakref:[5,23],flatpakrefclass:23,flatpakrefkind:23,flatpakrelatedref:23,flatpakrelatedrefclass:23,flatpakremot:23,flatpakremoteclass:23,flatpakremoteref:23,flatpakremoterefclass:23,flatpakremotetyp:23,flatpakstoragetyp:23,flatpakupdateflag:23,format_ref:[9,23],found:[5,13],framework:22,from:[5,13,19],full:9,gener:13,genum:18,get:[3,5,7,9,13,15],get_appstream:[3,23],get_appstream_dir:[13,23],get_appstream_timestamp:[13,23],get_arch:[9,23],get_branch:[9,23],get_collection_id:[9,13,23],get_commit:[9,23],get_config:[5,23],get_current_installed_app:[5,23],get_default_arch:[20,23],get_default_branch:[13,23],get_deploy_dir:[7,23],get_dis:[13,23],get_display_nam:[5,23],get_fil:[3,23],get_gpg_verifi:[13,23],get_icon:[3,23],get_id:[5,23],get_installed_ref:[5,23],get_installed_s:[3,7,23],get_is_curr:[7,23],get_is_us:[5,23],get_kind:[9,23],get_latest_commit:[7,23],get_metadata:[3,23],get_nam:[9,13,23],get_nodep:[13,23],get_noenumer:[13,23],get_origin:[3,7,23],get_path:[5,23],get_prio:[13,23],get_prior:[5,23],get_remote_by_nam:[5,23],get_remote_nam:[15,23],get_remote_typ:[13,23],get_runtime_repo_url:[3,23],get_storage_typ:[5,23],get_subpath:[7,11,23],get_supported_arch:[20,23],get_system_instal:[20,23],get_titl:[13,23],get_url:[13,23],gflag:19,gio:[3,5,7,13,20,22],gir1:22,given:[3,5],glib:[3,5,7,9,13,20],global:5,gobject:[3,5,6,7,9,10,11,13,14,15,18,19,21,22],gpg:13,gpg_kei:13,gpg_verifi:13,hard:18,hard_disk:[18,23],has:[5,13],have:5,here:5,hierarchi:22,highest:5,homepag:22,how:5,howev:5,http:22,human:13,icon:3,inform:[0,5,13],inherit:[3,5,7,9,11,13,15],instal:[0,2,3,7,11,13,18,19,20,21,22,23],install_bundl:[5,23],install_ful:[5,18,19,23],install_ref_fil:[5,23],installationclass:[1,5,23],installed_s:[5,7],installedref:[2,5,9,21,23],installedrefclass:[1,7,23],installflag:[5,19,23],instanc:[5,20],instead:5,integ:5,interest:5,interfac:[0,13],intern:5,invalid:9,is_curr:7,its:5,just:0,kei:[5,13],key_not_found:5,keyfileerror:5,kind:[5,9,18],kwarg:[3,5,7,9,11,13,15],lan:[13,18,23],langu:5,languag:5,last:5,later:5,latest:[7,19],latest_commit:[5,7],launch:[5,23],librari:[18,22],like:5,list:[5,13,20],list_installed_ref:[5,23],list_installed_refs_by_kind:[5,23],list_installed_refs_for_upd:[5,23],list_installed_related_refs_sync:[5,23],list_remot:[5,23],list_remote_refs_sync:[5,23],list_remote_related_refs_sync:[5,23],load:[5,7],load_app_overrid:[5,23],load_metadata:[7,23],local:[5,13,18],locat:5,look:5,machin:[5,20],mai:[5,13],main:[5,11],major_vers:[17,23],manag:22,map:22,mark:13,master:[5,9],maximum:5,mean:5,memori:5,metadata:[3,5,7],micro_vers:[17,23],might:19,minor_vers:[17,23],mmc:[18,23],modif:[5,13],modifi:5,modify_remot:[5,13,23],monitor:5,more:22,mount:13,must:[5,13],name:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,20],need:5,network:[13,18,23],never:5,new_for_path:[5,23],new_system:[5,23],new_system_with_id:[5,23],new_us:[5,23],newli:5,next:5,no_deploi:[5,19,23],no_pul:[5,19,23],no_static_delta:[19,23],nodep:13,noenumer:13,none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,23],not_instal:[5,18,23],note:[5,13],noth:5,numer:5,object:[0,3,5,7,9,11,13,15,21],objectclass:[3,5,6,7,9,10,11,13,14,15],obtain:5,occur:[0,5,7],one:[5,19],onli:[5,18],only_pul:[5,18,23],oper:0,option:5,order:[5,20],org:[9,22],origin:[3,5,7],orphan:5,ostre:[5,13],ostree_validate_remote_nam:13,out:5,out_chang:5,outsid:5,over:13,overrid:5,packag:[5,22],paramet:[0,3,5,7,9,13,20],parent:[3,5,7,9,11,13,15,22],parent_class:[4,6,8,10,12,14,16],pars:[9,23],pass:[0,5],path:5,per:5,percentag:0,pick:5,plan:5,png:3,present:13,prevent:5,previous:5,prio:13,prioriti:[5,13,20],progress:[0,5],progress_data:5,progresscallback:[0,5,23],project:22,prop:[3,7,9,11,13,15],provid:5,prune:5,prune_local_repo:[5,23],ptrarrai:[5,20],pull:[5,18],python:23,quark:[18,23],rais:[3,5,7,9,20],reachabl:20,readabl:[3,7,9,11,13,15],real:5,ref:[2,3,5,7,11,15,18,21,23],ref_file_data:5,refclass:[1,4,8,9,12,16,23],refer:[5,9,18],refkind:[5,9,18,23],relat:5,relatedref:[2,5,9,21,23],relatedrefclass:[1,11,23],remot:[2,5,15,19,21,23],remote_nam:[5,15],remoteclass:[1,13,23],remoteref:[2,5,9,21,23],remoterefclass:[1,15,23],remotetyp:[13,18,23],remov:[5,13],remove_local_ref_sync:[5,23],remove_remot:[5,23],repeatedli:0,repo:[5,19],repositori:[5,13,18],represent:9,requir:5,resolv:5,respond:5,roundtrip:5,run:[0,20,22],runtim:[3,5,9,18,23],same:5,sandbox:22,save:5,sdcard:[18,23],see:[5,13,22],self:5,separ:5,set:[5,9,13],set_collection_id:[13,23],set_config_sync:[5,23],set_default_branch:[13,23],set_dis:[13,23],set_gpg_kei:[13,23],set_gpg_verifi:[13,23],set_nodep:[13,23],set_noenumer:[13,23],set_prio:[13,23],set_titl:[13,23],set_url:[13,23],should:[5,11,13],should_delet:[5,11,23],should_download:[5,11,23],similar:5,sinc:5,size:[3,5,7],smaller:5,somehow:9,space:5,specif:5,specifi:[5,13],state:5,statu:0,storag:5,storagetyp:[5,18,23],store:[3,13],str:[0,3,5,7,9,11,13,15,20],string:[0,3,5,9,20],struct:[3,5,7,9,11,13,15],structur:[3,5,7,9,11,13,15,22],strv:[7,11],subclass:[3,5,7,9,11,13,15],subpath:[5,7,11],success:5,successfulli:5,suitabl:0,summari:5,support:[5,20],symbol:22,system:[5,20],take:[5,13],termin:20,test:9,than:5,them:5,thi:[3,5,7,9,11,13],thing:5,though:5,thread:0,thrown:5,time:[5,13],timestamp:13,titl:13,togeth:5,transfer:5,tri:[9,13],trust:13,type:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,20],typic:13,unabl:5,underli:5,uninstal:[5,23],unless:5,unnecessari:5,unset:[5,13],updat:[0,5,11,13,19,23],update_appstream_full_sync:[5,23],update_appstream_sync:[5,23],update_ful:[5,23],update_remote_sync:[5,23],updateflag:[5,19,23],url:[3,13],usb:[13,18,23],use:[5,13,18],used:[0,5,13],useful:5,user:[0,5],user_data:0,using:[5,13],valu:[3,5,7,9,11,13,15,18,19],verif:13,version:[5,11,13,18,20],want:5,were:5,what:5,when:[5,13],whenev:[5,13],where:[7,13],whether:[0,5,7,11,13],which:[5,13],wide:5,without:[5,9],writabl:[3,7,9,11,13,15],written:5,you:[5,13],zero:20},titles:["Callbacks","Class Structures","Classes","Flatpak.BundleRef","Flatpak.BundleRefClass","Flatpak.Installation","Flatpak.InstallationClass","Flatpak.InstalledRef","Flatpak.InstalledRefClass","Flatpak.Ref","Flatpak.RefClass","Flatpak.RelatedRef","Flatpak.RelatedRefClass","Flatpak.Remote","Flatpak.RemoteClass","Flatpak.RemoteRef","Flatpak.RemoteRefClass","Constants","Enums","Flags","Functions","Hierarchy","Flatpak 1.0 (0.11.3)","Symbol Mapping"],titleterms:{"class":[1,2,3,5,7,9,11,13,15],"enum":18,"function":20,api:22,bundleref:3,bundlerefclass:4,callback:0,constant:17,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16],flag:19,flatpak:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,22],hierarchi:21,instal:5,installationclass:6,installedref:7,installedrefclass:8,map:23,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16],properti:[3,5,7,9,11,13,15],ref:9,refclass:10,relatedref:11,relatedrefclass:12,remot:13,remoteclass:14,remoteref:15,remoterefclass:16,signal:[3,5,7,9,11,13,15],structur:1,symbol:23,virtual:[3,5,7,9,11,13,15]}})