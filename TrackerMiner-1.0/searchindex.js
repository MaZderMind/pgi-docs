Search.setIndex({envversion:46,filenames:["class-structs/DecoratorClass","class-structs/DecoratorFSClass","class-structs/IndexingTreeClass","class-structs/MinerClass","class-structs/MinerFSClass","class-structs/MinerOnlineClass","class-structs/index","classes/Decorator","classes/DecoratorFS","classes/IndexingTree","classes/Miner","classes/MinerFS","classes/MinerOnline","classes/index","constants","enums","flags","hierarchy","iface-structs/DataProviderIface","iface-structs/EnumeratorIface","iface-structs/index","index","interfaces/DataProvider","interfaces/Enumerator","interfaces/index","mapping","structs/DecoratorInfo","structs/index"],objects:{"TrackerMiner.DataProvider":{begin:[22,1,1,""],begin_async:[22,1,1,""],begin_finish:[22,1,1,""],do_begin:[22,1,1,""],do_begin_async:[22,1,1,""],do_begin_finish:[22,1,1,""],do_end:[22,1,1,""],do_end_async:[22,1,1,""],do_end_finish:[22,1,1,""],end:[22,1,1,""],end_async:[22,1,1,""],end_finish:[22,1,1,""]},"TrackerMiner.Decorator":{delete_id:[7,1,1,""],do_finished:[7,1,1,""],do_items_available:[7,1,1,""],error_quark:[7,2,1,""],get_class_names:[7,1,1,""],get_data_source:[7,1,1,""],get_n_items:[7,1,1,""],next:[7,1,1,""],next_finish:[7,1,1,""],prepend_id:[7,1,1,""],set_priority_rdf_types:[7,1,1,""]},"TrackerMiner.Decorator.props":{class_names:[7,3,1,""],commit_batch_size:[7,3,1,""],data_source:[7,3,1,""],priority_rdf_types:[7,3,1,""]},"TrackerMiner.Decorator.signals":{finished:[7,4,1,""],items_available:[7,4,1,""]},"TrackerMiner.DecoratorError":{EMPTY:[15,5,1,""],PAUSED:[15,5,1,""]},"TrackerMiner.DecoratorFS":{prepend_file:[8,1,1,""]},"TrackerMiner.DecoratorInfo":{get_mimetype:[26,1,1,""],get_sparql:[26,1,1,""],get_task:[26,1,1,""],get_url:[26,1,1,""],get_urn:[26,1,1,""],ref:[26,1,1,""],unref:[26,1,1,""]},"TrackerMiner.DirectoryFlags":{CHECK_MTIME:[16,5,1,""],IGNORE:[16,5,1,""],MONITOR:[16,5,1,""],NONE:[16,5,1,""],NO_STAT:[16,5,1,""],PRESERVE:[16,5,1,""],PRIORITY:[16,5,1,""],RECURSE:[16,5,1,""]},"TrackerMiner.Enumerator":{do_next:[23,1,1,""],do_next_async:[23,1,1,""],do_next_finish:[23,1,1,""],next:[23,1,1,""],next_async:[23,1,1,""],next_finish:[23,1,1,""]},"TrackerMiner.FilterPolicy":{ACCEPT:[15,5,1,""],DENY:[15,5,1,""]},"TrackerMiner.FilterType":{DIRECTORY:[15,5,1,""],FILE:[15,5,1,""],PARENT_DIRECTORY:[15,5,1,""]},"TrackerMiner.IndexingTree":{"new":[9,2,1,""],add:[9,1,1,""],add_filter:[9,1,1,""],clear_filters:[9,1,1,""],do_directory_added:[9,1,1,""],do_directory_removed:[9,1,1,""],do_directory_updated:[9,1,1,""],file_is_indexable:[9,1,1,""],file_is_root:[9,1,1,""],file_matches_filter:[9,1,1,""],get_default_policy:[9,1,1,""],get_filter_hidden:[9,1,1,""],get_master_root:[9,1,1,""],get_root:[9,1,1,""],list_roots:[9,1,1,""],new_with_root:[9,2,1,""],parent_is_indexable:[9,1,1,""],remove:[9,1,1,""],set_default_policy:[9,1,1,""],set_filter_hidden:[9,1,1,""]},"TrackerMiner.IndexingTree.props":{filter_hidden:[9,3,1,""],root:[9,3,1,""]},"TrackerMiner.IndexingTree.signals":{directory_added:[9,4,1,""],directory_removed:[9,4,1,""],directory_updated:[9,4,1,""]},"TrackerMiner.Miner":{do_ignore_next_update:[10,1,1,""],do_paused:[10,1,1,""],do_progress:[10,1,1,""],do_resumed:[10,1,1,""],do_started:[10,1,1,""],do_stopped:[10,1,1,""],error_quark:[10,2,1,""],get_connection:[10,1,1,""],get_dbus_connection:[10,1,1,""],get_dbus_full_name:[10,1,1,""],get_dbus_full_path:[10,1,1,""],get_n_pause_reasons:[10,1,1,""],ignore_next_update:[10,1,1,""],is_paused:[10,1,1,""],is_started:[10,1,1,""],pause:[10,1,1,""],resume:[10,1,1,""],start:[10,1,1,""],stop:[10,1,1,""]},"TrackerMiner.Miner.props":{introspection_handler:[10,3,1,""],introspection_xml:[10,3,1,""],name:[10,3,1,""],progress:[10,3,1,""],remaining_time:[10,3,1,""],status:[10,3,1,""]},"TrackerMiner.Miner.signals":{ignore_next_update:[10,4,1,""],paused:[10,4,1,""],progress:[10,4,1,""],resumed:[10,4,1,""],started:[10,4,1,""],stopped:[10,4,1,""]},"TrackerMiner.MinerError":{INVALID_COOKIE:[15,5,1,""],NAME_MISSING:[15,5,1,""],NAME_UNAVAILABLE:[15,5,1,""],PAUSED:[15,5,1,""],PAUSED_ALREADY:[15,5,1,""]},"TrackerMiner.MinerFS":{add_directory_without_parent:[11,1,1,""],check_directory:[11,1,1,""],check_directory_with_priority:[11,1,1,""],check_file:[11,1,1,""],check_file_with_priority:[11,1,1,""],directory_add:[11,1,1,""],directory_remove:[11,1,1,""],directory_remove_full:[11,1,1,""],do_finished:[11,1,1,""],do_finished_root:[11,1,1,""],do_ignore_next_update_file:[11,1,1,""],do_process_file:[11,1,1,""],do_process_file_attributes:[11,1,1,""],error_quark:[11,2,1,""],file_notify:[11,1,1,""],force_mtime_checking:[11,1,1,""],force_recheck:[11,1,1,""],get_data_provider:[11,1,1,""],get_indexing_tree:[11,1,1,""],get_initial_crawling:[11,1,1,""],get_mtime_checking:[11,1,1,""],get_parent_urn:[11,1,1,""],get_throttle:[11,1,1,""],get_urn:[11,1,1,""],has_items_to_process:[11,1,1,""],query_urn:[11,1,1,""],set_initial_crawling:[11,1,1,""],set_mtime_checking:[11,1,1,""],set_throttle:[11,1,1,""],writeback_file:[11,1,1,""],writeback_notify:[11,1,1,""]},"TrackerMiner.MinerFS.props":{data_provider:[11,3,1,""],initial_crawling:[11,3,1,""],mtime_checking:[11,3,1,""],processing_pool_ready_limit:[11,3,1,""],processing_pool_wait_limit:[11,3,1,""],root:[11,3,1,""],throttle:[11,3,1,""]},"TrackerMiner.MinerFS.signals":{finished:[11,4,1,""],finished_root:[11,4,1,""],ignore_next_update_file:[11,4,1,""],process_file:[11,4,1,""],process_file_attributes:[11,4,1,""],writeback_file:[11,4,1,""]},"TrackerMiner.MinerFSError":{MINER_FS_ERROR_INIT:[15,5,1,""]},"TrackerMiner.MinerOnline":{do_connected:[12,1,1,""],do_disconnected:[12,1,1,""],get_network_type:[12,1,1,""]},"TrackerMiner.MinerOnline.props":{network_type:[12,3,1,""]},"TrackerMiner.MinerOnline.signals":{connected:[12,4,1,""],disconnected:[12,4,1,""]},"TrackerMiner.NetworkType":{"3G":[15,5,1,""],"_3G":[15,5,1,""],EDGE:[15,5,1,""],GPRS:[15,5,1,""],LAN:[15,5,1,""],NONE:[15,5,1,""],UNKNOWN:[15,5,1,""]},TrackerMiner:{DataProvider:[22,0,1,""],DataProviderIface:[18,0,1,""],Decorator:[7,0,1,""],DecoratorClass:[0,0,1,""],DecoratorError:[15,0,1,""],DecoratorFS:[8,0,1,""],DecoratorFSClass:[1,0,1,""],DecoratorInfo:[26,0,1,""],DirectoryFlags:[16,0,1,""],Enumerator:[23,0,1,""],EnumeratorIface:[19,0,1,""],FilterPolicy:[15,0,1,""],FilterType:[15,0,1,""],IndexingTree:[9,0,1,""],IndexingTreeClass:[2,0,1,""],MINER_DBUS_INTERFACE:[14,3,1,""],MINER_DBUS_NAME_PREFIX:[14,3,1,""],MINER_DBUS_PATH_PREFIX:[14,3,1,""],MINER_ERROR_DOMAIN:[14,3,1,""],Miner:[10,0,1,""],MinerClass:[3,0,1,""],MinerError:[15,0,1,""],MinerFS:[11,0,1,""],MinerFSClass:[4,0,1,""],MinerFSError:[15,0,1,""],MinerOnline:[12,0,1,""],MinerOnlineClass:[5,0,1,""],NetworkType:[15,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","staticmethod","Python static method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:staticmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"2nd":7,"_3g":[15,25],"abstract":[4,7,8,9,10,11,12],"boolean":[9,11],"case":[9,11,15,22,23],"class":[0,1,2,3,4,5],"const":7,"default":[7,9,10,11,12,22,23],"final":26,"float":[10,11],"function":[7,9,10,11,22,23,26],"int":[7,8,10,11,22,23],"mime\u00b9":26,"new":[5,7,8,9,10,11,12,14,15,22,23,25,26],"null":[9,11],"return":[7,8,9,10,11,12,15,22,23,26],"short":[7,9,10,11,12],"static":[7,9,10,11],"true":[9,10,11,12,22],"try":15,about:[10,22],accept:[11,15,25],access:[0,1,2,3,4,5,7,8,9,10,11,12,18,19],accord:[9,23],account:11,action:15,activ:21,actual:[4,10,11],add:[7,9,25],add_directory_without_par:[11,25],add_filt:[9,25],after:10,against:11,all:[7,9,10,11,14,15,22,23],alloc:[9,11],allow:[9,11,14,22,23,26],alreadi:[7,10,11,15],also:9,alwai:7,ani:[9,10,11,14,22,23],anoth:[9,15],api:[0,1,2,3,4,5,9,11,15],append:[10,11],appli:[9,15],applic:[7,10,15,21],argument:9,arrai:[7,11],ask:10,associ:[11,26],async:[22,23],asynchron:[11,22,23],asyncreadycallback:[7,22,23],asyncresult:[7,22,23],attribut:[11,22],avail:[7,15,22],avoid:15,back:11,base:[0,1,7,8,9,10,11,12,15,16,22,23],basenam:9,basic:7,batch:[7,11],becaus:15,becom:12,been:[7,10,11,15],befor:[7,11,22,23],begin:[18,22,25],begin_async:[18,22,25],begin_finish:[18,22,25],belongstocontain:11,benefit:21,between:[11,21],big:21,black:9,bool:[9,10,11,12,22],both:11,brows:21,bug:21,bugzilla:21,builder:11,cach:[11,22],call:[7,9,11,15,22,23,26],callback:[7,22,23],caller:[7,10,11,26],can:[5,9,11,15],cancel:[7,11,22,23],cannot:10,canon:9,care:[0,1],carri:15,central:21,cgi:21,chang:[7,9,11],check:11,check_directori:[11,25],check_directory_with_prior:[11,25],check_fil:[11,25],check_file_with_prior:[11,25],check_mtim:[16,25],check_par:11,children:[9,11,22],clase:11,class_nam:7,class_name_id:7,clear:[7,9,26],clear_filt:[9,25],close:22,cloud:11,comma:22,commit:7,commit_batch_s:7,common:9,compar:9,complet:7,concurr:11,config:9,configur:[9,11],connect:[5,11,12],consid:9,consist:[7,11],constant:10,construct:[10,11],construct_onli:[7,9,10,11],contact:21,contain:[9,10,11],content:[7,9,10,11,12,26],continu:11,cooki:[10,15],correspond:[8,11],could:11,count:26,crawl:11,creat:[9,11,15,22,23],crucial:15,current:[10,11,12,15],custom:14,data:[4,7,10,11,12,14,21,22,23,26],data_provid:11,data_sourc:7,databas:[7,11,26],dataprovid:11,datasourc:7,date:11,dbu:10,dbus_interface_statu:[7,9,10,11,12],dbusconnect:10,dbusinterfacevt:10,decoratorerror:[15,25],decoratorf:7,decoratorinfo:[7,25],decreas:26,defin:22,delet:[7,11],delete_id:[7,25],deni:[9,15,25],depend:[21,23],deprec:11,deriv:4,describ:[9,26],descript:[0,1,2,3,4,5,7,8,9,10,11,12,18,19,21],desktop:21,determin:11,devic:[9,21],directli:11,directori:[9,11,15,25],directories_found:11,directories_ignor:11,directory_ad:[2,9],directory_add:[11,25],directory_flag:9,directory_remov:[2,9,11,25],directory_remove_ful:[11,25],directory_upd:[2,9],directoryflag:[9,16,22,25],disabl:9,disappear:10,disconnect:[5,12],disk:11,do_begin:22,do_begin_async:22,do_begin_finish:22,do_connect:12,do_directory_ad:9,do_directory_remov:9,do_directory_upd:9,do_disconnect:12,do_end:22,do_end_async:22,do_end_finish:22,do_finish:[7,11],do_finished_root:11,do_ignore_next_upd:10,do_ignore_next_update_fil:11,do_initial_crawl:11,do_items_avail:7,do_next:23,do_next_async:23,do_next_finish:23,do_paus:10,do_process_fil:11,do_process_file_attribut:11,do_progress:10,do_resum:10,do_start:10,do_stop:10,document:[7,9,15,22,26],doesn:11,domain:[7,10,11,14],done:[11,15],doubl:11,down:11,dramat:11,due:9,duplic:15,dure:[11,15,22,23],edg:[15,25],effect:9,either:[9,10,11],elaps:11,element:[8,9,11],elig:11,els:11,email:15,emit:[7,9,10,11,12,15],empti:[15,25],enabl:11,end:[18,22,25],end_async:[18,22,25],end_finish:[18,22,25],ensur:7,entir:[11,15],enumer:22,enumerate_children:22,equal:9,equival:9,error:[7,9,10,11,12,14,15,22,23,26],error_quark:[7,10,11,25],essenti:7,estim:10,etc:[7,9,11,21],evalu:[7,9],exampl:[7,9,14,15,21,22,26],execut:[11,22,23],exist:[7,11,26],expect:10,explain:9,extend:[7,26],extern:10,extra:[0,11],extract:[0,4,7,11,26],failur:[10,11,22],fallback:9,fals:[9,11,22],far:10,feed:[22,23],file:[0,7,8,9,11,14,15,21,22,25,26],file_attribute_standard_nam:22,file_is_index:[9,25],file_is_root:[9,25],file_matches_filt:[9,25],file_notifi:[11,25],file_typ:9,fileenumer:11,fileinfo:11,files_found:11,files_ignor:11,filesystem:11,filetyp:9,filter:9,filter_hidden:9,filterpolici:[9,15,25],filtertyp:[9,15,25],find:11,finish:[0,4,7,10,11,22,23],finished_root:[4,11],first:7,flag:[7,9,10,11,12],flurish:7,folder:11,foo:26,forc:11,force_mtime_check:[11,25],force_recheck:[11,25],found:11,free:[7,23,26],freed:[9,22,23],freedesktop:14,from:[7,9,10,11,12,22,23],full:11,fulli:11,further:7,futur:[0,1,2,3,4,5],g_ifac:[18,19],g_list_fre:9,gather:22,gener:15,genum:15,get:[7,9,10,11,12,26],get_class_nam:[7,25],get_connect:[10,25],get_data_provid:[11,25],get_data_sourc:[7,25],get_dbus_connect:[10,25],get_dbus_full_nam:[10,25],get_dbus_full_path:[10,25],get_default_polici:[9,25],get_filter_hidden:[9,25],get_indexing_tre:[11,25],get_initial_crawl:[11,25],get_master_root:[9,25],get_mimetyp:[25,26],get_mtime_check:[11,25],get_n_item:[7,25],get_n_pause_reason:[10,25],get_network_typ:[12,25],get_parent_urn:[11,25],get_root:[9,25],get_sparql:[25,26],get_task:[25,26],get_task_data:26,get_throttl:[11,25],get_url:[25,26],get_urn:[11,25,26],gflag:16,gint:15,ginterfac:[7,8,10,11,12,22,23],gio:[7,8,9,10,11,12,21,22,23,26],give:[7,10,11,15],given:[9,11,15],glib:[7,10,11,14,15,22,23],glob:9,glob_str:9,global:11,gmodul:21,gnome:21,gobject:[2,3,7,8,9,10,11,12,15,16,17,18,19,21,22,23],gpr:[15,25],gquark:[7,10,11],graphupd:7,gstrv:11,guarante:11,had:9,handl:[7,11],handler:10,happen:[7,9,11],has_items_to_process:[11,25],have:[7,10,11,15],here:9,hidden:9,higher:[22,23],hold:[10,11],home:9,homepag:21,host:15,how:10,http:[9,21,26],identifi:[7,10,11,26],idl:10,ignor:[9,10,11,16,22,23,25],ignore_next_upd:[3,10,25],ignore_next_update_fil:[4,11],implement:[0,3,4,10,11,18,19,22,23],improv:[0,1,2,3,4,5,11],includ:11,increas:26,index:[7,9,10,11,12,21],indexing_tre:9,indexingtre:2,indic:[7,10,11,12],inform:[7,21,22,23,26],inherit:[7,8,9,10,11,12],init:[7,8,10,11,12],initi:[10,11,15],initial_crawl:11,inotifi:11,insert:26,inspect:11,instead:7,inter:14,interest:15,interfac:[10,14,18,19],intern:[7,10,11],introspect:10,introspection_handl:10,introspection_xml:10,invalid_cooki:[15,25],io_prior:[22,23],ioerrorenum:[22,23],is_paus:[10,25],is_start:[10,25],item:[7,9,11,15,22,23],items_avail:[0,7,15],itself:[9,15],just:22,keep:11,kwarg:[7,8,9,10,11,12],lan:[15,25],layer:11,left:[3,7,18,19],level:[9,11],like:[11,22],limit:11,list:[7,9,21,22],list_root:[9,25],listen:7,listinfo:21,local:11,locat:[9,11,21,26],lower:[22,23],mai:[7,11,15],mail:21,mailman:21,main:11,make:11,mani:11,map:21,mark:[10,11],martyn:9,master:9,match:9,max:11,maximum:11,mean:[11,22],merg:11,messag:15,metadata:[0,7,11,26],might:15,mime:26,mine:[10,11],miner:[7,8],miner_dbus_interfac:[14,25],miner_dbus_name_prefix:[14,25],miner_dbus_path_prefix:[14,25],miner_error_domain:[14,25],miner_f:11,miner_f_:11,miner_fs_error_init:[15,25],miner_onlin:12,minerclass:0,minererror:[15,25],minerf:[9,10],minerfserror:[15,25],mineronlin:10,mix:[9,21],mobil:21,modif:11,modifi:[10,11],monitor:[11,16,25],more:[11,22],most:[9,11],mount:1,move:11,mtime:11,mtime_check:11,much:10,must:[4,9,10,11,15,22,23],name:[0,1,2,3,4,5,7,8,9,10,11,12,14,15,18,19,26],name_miss:[15,25],name_unavail:[15,25],namespac:22,need:[7,11],nepomuk:21,network:12,network_typ:12,networktyp:[12,15,25],neutral:21,never:9,new_with_root:[9,25],newli:[9,11],next:[7,10,11,15,19,22,23,25],next_async:[19,23,25],next_finish:[7,15,19,23,25],nfo:[7,15],nie:[7,11],nmo:15,no_stat:[16,25],node:9,non:[9,11],none:[0,1,2,3,4,5,7,8,9,10,11,12,15,16,18,19,22,23,25,26],normal:9,note:[9,11],notifi:11,number:[7,10,11],numer:[22,23],object:[0,1,2,3,4,5,7,8,9,10,11,12,14,15,17,18,19,22,23],objectclass:[2,3,7,8,9,10,11,12],obtain:11,onli:[9,11,15],ontolog:21,oper:[10,11,14,22,23],option:[9,22,23],order:[4,11,22],org:[14,21,26],origin:22,other:[7,9,11,15,21,22,23],otherwis:[9,11,22],our:11,out:[11,15],outsid:11,outstand:[22,23],overridden:5,own:9,owner:22,pad:[0,1,2,3,4,5],paramet:[7,8,9,10,11,12,22,23],parent:[0,1,2,3,4,9,11,18,19,21],parent_class:[0,1,2,3,5],parent_directori:[15,25],parent_inst:[7,8,9,10,12],parent_is_index:[9,25],part:11,partial:[22,23],particular:22,pass:[7,11,22,23,26],passiv:7,past:7,path:[9,10,14],paus:[3,7,10,15,25],paused_alreadi:[15,25],pend:[11,22,23],per:[7,9],perform:[11,22,23],phase:11,piec:23,plain:26,point:[1,9,11],pointer:10,polici:9,pool:11,popul:11,possibl:[15,22],precis:[22,23],prefer:9,prefix:[9,14],prepar:11,prepend:8,prepend_fil:[8,25],prepend_id:[7,25],presenc:15,preserv:[16,25],previou:15,previous:9,prioriti:[7,11,16,22,23,25],priority_default:[22,23],priority_rdf_typ:7,priv:[7,8,9],process:[7,8,10,11,15,26],process_fil:[4,11],process_file_attribut:[4,11],processing_pool_ready_limit:11,processing_pool_wait_limit:11,prodomin:11,product:21,progress:[3,10],project:21,prop:[7,9,10,11,12],prototyp:4,provid:[7,10,11,21,22],purpos:11,python:25,queri:[9,11,21,22],query_urn:[11,25],queu:[7,11],queue:[7,11],rais:[7,10,22,23],rdf:[7,11,21],rdf_type:[7,11],reach:26,read:22,readabl:[7,9,10,11,12],readi:11,reamain:10,reason:[10,15],receiv:[7,9,10,11,12],recurs:[11,16,25],ref:[9,25,26],refer:26,referenc:9,reflect:11,regardless:11,regener:11,regist:10,relat:[11,21,22],relationship:11,remain:10,remaining_tim:10,remov:[1,9,11,25],report:[14,22,23],repositori:21,repres:[9,11],request:[10,15,22,23],requir:[11,12],reserv:[0,1,2,3,4,5],resourc:[1,7,9,11,26],result:[7,11,22,23],resum:[3,10,12,15,25],retriev:[11,26],right:10,root:[9,11],run:[11,15],run_last:[7,9,10,11,12],safe:11,same:[7,9,15,22,23,26],satisfi:[22,23],scheme:9,search:21,second:[10,11],see:[7,9,10,11,22],self:[9,10,11,12,23,26],semant:21,separ:22,set:[9,10,11,22,23,26],set_default_polici:[9,25],set_filter_hidden:[9,25],set_initial_crawl:[11,25],set_mtime_check:[11,25],set_priority_rdf_typ:[7,25],set_throttl:[11,25],share:21,should:[7,9,10,11,12,15,22,26],shouldn:11,show:14,shutdown:11,side:11,sinc:11,singl:11,size:7,slowest:11,some:[9,11],someth:10,sometim:9,sooner:7,sourc:7,sparql:[11,21,26],sparqlbuild:[11,26],sparqlconnect:10,specif:[0,9,11,12,15],specifi:22,speed:11,standard:[7,10,21,22],start:[3,10,11,22,23,25],startup:11,statement:11,statu:10,still:11,stop:[3,10,25],storag:21,store:[7,11,21],str:[7,9,10,11,22,26],string:[7,9,10,11,22],struct:[7,8,9,10,11,12],style:9,subclass:[7,8,9,10,11,12,15],succeed:[22,23],success:[7,10,11,12,22,26],successfulli:11,sum:11,suppli:11,sure:11,symbol:21,sync:[22,23],synchron:11,system:[9,11],take:[0,1,7,9],taken:11,talk:0,task:[7,11,26],technic:9,technolog:11,tell:[10,11],tend:9,text:26,than:[7,11],thi:[1,7,9,10,11,12,14,15,22,26],thing:15,throttl:11,through:[9,10],time:[7,10,11,15],tmp:26,too:9,tool:21,top:[9,11],tracker1:14,tracker:[0,7,8,9,10,11,12,14,15,21,22,23,26],tracker_data_provider_begin:25,tracker_data_provider_begin_async:25,tracker_data_provider_begin_finish:25,tracker_data_provider_end:25,tracker_data_provider_end_async:25,tracker_data_provider_end_finish:25,tracker_decorator_delete_id:25,tracker_decorator_error_empti:25,tracker_decorator_error_paus:25,tracker_decorator_error_quark:25,tracker_decorator_fs_prepend_fil:25,tracker_decorator_get_class_nam:25,tracker_decorator_get_data_sourc:25,tracker_decorator_get_n_item:25,tracker_decorator_info_get_mimetyp:25,tracker_decorator_info_get_sparql:25,tracker_decorator_info_get_task:25,tracker_decorator_info_get_url:25,tracker_decorator_info_get_urn:25,tracker_decorator_info_ref:25,tracker_decorator_info_unref:25,tracker_decorator_next:25,tracker_decorator_next_finish:25,tracker_decorator_prepend_id:25,tracker_decorator_set_priority_rdf_typ:25,tracker_directory_flag_check_mtim:25,tracker_directory_flag_ignor:25,tracker_directory_flag_monitor:25,tracker_directory_flag_no_stat:25,tracker_directory_flag_non:25,tracker_directory_flag_preserv:25,tracker_directory_flag_prior:25,tracker_directory_flag_recurs:25,tracker_enumerator_next:25,tracker_enumerator_next_async:25,tracker_enumerator_next_finish:25,tracker_filter_directori:25,tracker_filter_fil:25,tracker_filter_parent_directori:25,tracker_filter_policy_accept:25,tracker_filter_policy_allow:9,tracker_filter_policy_deni:25,tracker_indexing_tree_add:25,tracker_indexing_tree_add_filt:25,tracker_indexing_tree_clear_filt:25,tracker_indexing_tree_file_is_index:25,tracker_indexing_tree_file_is_root:25,tracker_indexing_tree_file_matches_filt:25,tracker_indexing_tree_get_default_polici:25,tracker_indexing_tree_get_filter_hidden:25,tracker_indexing_tree_get_master_root:25,tracker_indexing_tree_get_root:25,tracker_indexing_tree_list_root:25,tracker_indexing_tree_new:25,tracker_indexing_tree_new_with_root:25,tracker_indexing_tree_parent_is_index:25,tracker_indexing_tree_remov:25,tracker_indexing_tree_set_default_polici:25,tracker_indexing_tree_set_filter_hidden:25,tracker_miner_dbus_interfac:25,tracker_miner_dbus_name_prefix:25,tracker_miner_dbus_path_prefix:25,tracker_miner_error_domain:25,tracker_miner_error_invalid_cooki:25,tracker_miner_error_name_miss:25,tracker_miner_error_name_unavail:25,tracker_miner_error_paus:25,tracker_miner_error_paused_alreadi:25,tracker_miner_error_quark:25,tracker_miner_fs_add_directory_without_par:25,tracker_miner_fs_check_directori:25,tracker_miner_fs_check_directory_with_prior:25,tracker_miner_fs_check_fil:25,tracker_miner_fs_check_file_with_prior:25,tracker_miner_fs_directory_add:25,tracker_miner_fs_directory_remov:25,tracker_miner_fs_directory_remove_ful:25,tracker_miner_fs_error_init:25,tracker_miner_fs_error_quark:25,tracker_miner_fs_file_notifi:25,tracker_miner_fs_force_mtime_check:25,tracker_miner_fs_force_recheck:25,tracker_miner_fs_get_data_provid:25,tracker_miner_fs_get_indexing_tre:25,tracker_miner_fs_get_initial_crawl:25,tracker_miner_fs_get_mtime_check:25,tracker_miner_fs_get_parent_urn:25,tracker_miner_fs_get_throttl:25,tracker_miner_fs_get_urn:25,tracker_miner_fs_has_items_to_process:25,tracker_miner_fs_query_urn:25,tracker_miner_fs_set_initial_crawl:25,tracker_miner_fs_set_mtime_check:25,tracker_miner_fs_set_throttl:25,tracker_miner_fs_writeback_fil:25,tracker_miner_fs_writeback_notifi:25,tracker_miner_get_connect:25,tracker_miner_get_dbus_connect:25,tracker_miner_get_dbus_full_nam:25,tracker_miner_get_dbus_full_path:25,tracker_miner_get_n_pause_reason:25,tracker_miner_ignore_next_upd:25,tracker_miner_is_paus:25,tracker_miner_is_start:25,tracker_miner_online_get_network_typ:25,tracker_miner_paus:25,tracker_miner_resum:25,tracker_miner_start:25,tracker_miner_stop:25,tracker_network_type_3g:25,tracker_network_type_edg:25,tracker_network_type_gpr:25,tracker_network_type_lan:25,tracker_network_type_non:25,tracker_network_type_unknown:25,trackerdataprovid:25,trackerdataproviderifac:25,trackerdecor:25,trackerdecoratorclass:25,trackerdecoratorerror:25,trackerdecoratorf:25,trackerdecoratorfsclass:25,trackerdecoratorinfo:25,trackerdirectoryflag:25,trackerenumer:25,trackerenumeratorifac:25,trackerfilterpolici:25,trackerfiltertyp:25,trackerindexingtre:25,trackerindexingtreeclass:25,trackerminerclass:25,trackerminererror:25,trackerminerf:25,trackerminerfsclass:25,trackerminerfserror:25,trackerminermanag:10,trackermineronlin:25,trackermineronlineclass:25,trackernetworktyp:25,translat:10,tree:[9,11],two:21,txt:26,type:[0,1,2,3,4,5,7,8,9,10,11,12,15,18,19,22,23,26],typeinterfac:[18,19],typic:[9,11],under:14,uniform:26,uniqu:[7,26],unknown:[9,15,25],unlik:11,unrecognis:15,unref:[7,22,25,26],until:10,updat:[7,9,10,11,21],upon:[11,12],upper:11,uppon:9,uri:[11,22,23],url:[9,10,22,26],urn:[11,26],user:[9,21,22],user_data:[7,22,23],usual:[9,11],valid:10,valu:[7,9,10,11,12,22,23,26],veri:11,version:[5,7,8,9,10,11,12,14,15,22,23,26],virtual:[3,5],w3c:21,wai:26,wait:[7,11],watch:11,well:11,what:[10,11],when:[7,9,11,12,15,22,23,26],whenev:[7,10,11],where:[9,11,15],whether:[9,11,12],which:[7,9,10,11,12,15,21],white:9,who:7,wiki:[21,26],wikipedia:26,wildcard:22,within:9,without:11,won:[10,22],work:[11,15],would:[7,9,14,15,26],writabl:[7,9,10,11],write:11,writeback:11,writeback_fil:[4,11,25],writeback_notifi:[11,25],written:[11,14],xml:10,yet:11,you:[9,11]},titles:["TrackerMiner.DecoratorClass","TrackerMiner.DecoratorFSClass","TrackerMiner.IndexingTreeClass","TrackerMiner.MinerClass","TrackerMiner.MinerFSClass","TrackerMiner.MinerOnlineClass","Class Structures","TrackerMiner.Decorator","TrackerMiner.DecoratorFS","TrackerMiner.IndexingTree","TrackerMiner.Miner","TrackerMiner.MinerFS","TrackerMiner.MinerOnline","Classes","Constants","Enums","Flags","Hierarchy","TrackerMiner.DataProviderIface","TrackerMiner.EnumeratorIface","Interface Structures","TrackerMiner 1.0","TrackerMiner.DataProvider","TrackerMiner.Enumerator","Interfaces","Symbol Mapping","TrackerMiner.DecoratorInfo","Structures"],titleterms:{"class":[6,7,8,9,10,11,12,13,22,23],"enum":15,api:21,constant:14,dataprovid:22,dataproviderifac:18,decor:7,decoratorclass:0,decoratorf:8,decoratorfsclass:1,decoratorinfo:26,detail:[0,1,2,3,4,5,7,8,9,10,11,12,14,15,16,18,19,22,23,26],enumer:23,enumeratorifac:19,field:[0,1,2,3,4,5,7,8,9,10,11,12,18,19,22,23,26],flag:16,hierarchi:17,indexingtre:9,indexingtreeclass:2,interfac:[20,24],map:25,method:[0,1,2,3,4,5,7,8,9,10,11,12,18,19,22,23,26],miner:10,minerclass:3,minerf:11,minerfsclass:4,mineronlin:12,mineronlineclass:5,properti:[7,8,9,10,11,12,22,23],signal:[7,8,9,10,11,12,22,23],structur:[6,20,27],symbol:25,trackermin:[0,1,2,3,4,5,7,8,9,10,11,12,18,19,21,22,23,26],virtual:[7,8,9,10,11,12,22,23]}})