Search.setIndex({envversion:49,filenames:["class-structs","classes","classes/DataProvider","classes/DataProviderIface","classes/Decorator","classes/DecoratorClass","classes/DecoratorFS","classes/DecoratorFSClass","classes/DecoratorInfo","classes/Enumerator","classes/EnumeratorIface","classes/IndexingTree","classes/IndexingTreeClass","classes/Miner","classes/MinerClass","classes/MinerFS","classes/MinerFSClass","classes/MinerOnline","classes/MinerOnlineClass","constants","enums","flags","hierarchy","iface-structs","index","interfaces","mapping","structs"],objects:{"TrackerMiner.DataProvider":{begin:[2,1,1,""],begin_async:[2,1,1,""],begin_finish:[2,1,1,""],do_begin:[2,1,1,""],do_begin_async:[2,1,1,""],do_begin_finish:[2,1,1,""],do_end:[2,1,1,""],do_end_async:[2,1,1,""],do_end_finish:[2,1,1,""],end:[2,1,1,""],end_async:[2,1,1,""],end_finish:[2,1,1,""]},"TrackerMiner.Decorator":{delete_id:[4,1,1,""],do_finished:[4,1,1,""],do_items_available:[4,1,1,""],error_quark:[4,2,1,""],get_class_names:[4,1,1,""],get_data_source:[4,1,1,""],get_n_items:[4,1,1,""],next:[4,1,1,""],next_finish:[4,1,1,""],prepend_id:[4,1,1,""],set_priority_rdf_types:[4,1,1,""]},"TrackerMiner.Decorator.props":{class_names:[4,3,1,""],commit_batch_size:[4,3,1,""],data_source:[4,3,1,""],priority_rdf_types:[4,3,1,""]},"TrackerMiner.Decorator.signals":{finished:[4,4,1,""],items_available:[4,4,1,""]},"TrackerMiner.DecoratorError":{EMPTY:[20,5,1,""],PAUSED:[20,5,1,""]},"TrackerMiner.DecoratorFS":{prepend_file:[6,1,1,""]},"TrackerMiner.DecoratorInfo":{get_mimetype:[8,1,1,""],get_sparql:[8,1,1,""],get_task:[8,1,1,""],get_url:[8,1,1,""],get_urn:[8,1,1,""],ref:[8,1,1,""],unref:[8,1,1,""]},"TrackerMiner.DirectoryFlags":{CHECK_DELETED:[21,5,1,""],CHECK_MTIME:[21,5,1,""],IGNORE:[21,5,1,""],MONITOR:[21,5,1,""],NONE:[21,5,1,""],NO_STAT:[21,5,1,""],PRESERVE:[21,5,1,""],PRIORITY:[21,5,1,""],RECURSE:[21,5,1,""]},"TrackerMiner.Enumerator":{do_next:[9,1,1,""],do_next_async:[9,1,1,""],do_next_finish:[9,1,1,""],next:[9,1,1,""],next_async:[9,1,1,""],next_finish:[9,1,1,""]},"TrackerMiner.FilterPolicy":{ACCEPT:[20,5,1,""],DENY:[20,5,1,""]},"TrackerMiner.FilterType":{DIRECTORY:[20,5,1,""],FILE:[20,5,1,""],PARENT_DIRECTORY:[20,5,1,""]},"TrackerMiner.IndexingTree":{"new":[11,2,1,""],add:[11,1,1,""],add_filter:[11,1,1,""],clear_filters:[11,1,1,""],do_child_updated:[11,1,1,""],do_directory_added:[11,1,1,""],do_directory_removed:[11,1,1,""],do_directory_updated:[11,1,1,""],file_is_indexable:[11,1,1,""],file_is_root:[11,1,1,""],file_matches_filter:[11,1,1,""],get_default_policy:[11,1,1,""],get_filter_hidden:[11,1,1,""],get_master_root:[11,1,1,""],get_root:[11,1,1,""],list_roots:[11,1,1,""],new_with_root:[11,2,1,""],notify_update:[11,1,1,""],parent_is_indexable:[11,1,1,""],remove:[11,1,1,""],set_default_policy:[11,1,1,""],set_filter_hidden:[11,1,1,""]},"TrackerMiner.IndexingTree.props":{filter_hidden:[11,3,1,""],root:[11,3,1,""]},"TrackerMiner.IndexingTree.signals":{child_updated:[11,4,1,""],directory_added:[11,4,1,""],directory_removed:[11,4,1,""],directory_updated:[11,4,1,""]},"TrackerMiner.Miner":{do_ignore_next_update:[13,1,1,""],do_paused:[13,1,1,""],do_progress:[13,1,1,""],do_resumed:[13,1,1,""],do_started:[13,1,1,""],do_stopped:[13,1,1,""],error_quark:[13,2,1,""],get_connection:[13,1,1,""],get_dbus_connection:[13,1,1,""],get_dbus_full_name:[13,1,1,""],get_dbus_full_path:[13,1,1,""],get_n_pause_reasons:[13,1,1,""],ignore_next_update:[13,1,1,""],is_paused:[13,1,1,""],is_started:[13,1,1,""],pause:[13,1,1,""],resume:[13,1,1,""],start:[13,1,1,""],stop:[13,1,1,""]},"TrackerMiner.Miner.props":{introspection_handler:[13,3,1,""],introspection_xml:[13,3,1,""],name:[13,3,1,""],progress:[13,3,1,""],remaining_time:[13,3,1,""],status:[13,3,1,""]},"TrackerMiner.Miner.signals":{ignore_next_update:[13,4,1,""],paused:[13,4,1,""],progress:[13,4,1,""],resumed:[13,4,1,""],started:[13,4,1,""],stopped:[13,4,1,""]},"TrackerMiner.MinerError":{INVALID_COOKIE:[20,5,1,""],NAME_MISSING:[20,5,1,""],NAME_UNAVAILABLE:[20,5,1,""],PAUSED:[20,5,1,""],PAUSED_ALREADY:[20,5,1,""]},"TrackerMiner.MinerFS":{add_directory_without_parent:[15,1,1,""],check_directory:[15,1,1,""],check_directory_with_priority:[15,1,1,""],check_file:[15,1,1,""],check_file_with_priority:[15,1,1,""],directory_add:[15,1,1,""],directory_remove:[15,1,1,""],directory_remove_full:[15,1,1,""],do_finished:[15,1,1,""],do_finished_root:[15,1,1,""],do_ignore_next_update_file:[15,1,1,""],do_process_file:[15,1,1,""],do_process_file_attributes:[15,1,1,""],do_remove_file:[15,1,1,""],error_quark:[15,2,1,""],file_notify:[15,1,1,""],force_mtime_checking:[15,1,1,""],force_recheck:[15,1,1,""],get_data_provider:[15,1,1,""],get_indexing_tree:[15,1,1,""],get_initial_crawling:[15,1,1,""],get_mtime_checking:[15,1,1,""],get_parent_urn:[15,1,1,""],get_throttle:[15,1,1,""],get_urn:[15,1,1,""],has_items_to_process:[15,1,1,""],query_urn:[15,1,1,""],set_initial_crawling:[15,1,1,""],set_mtime_checking:[15,1,1,""],set_throttle:[15,1,1,""],writeback_file:[15,1,1,""],writeback_notify:[15,1,1,""]},"TrackerMiner.MinerFS.props":{data_provider:[15,3,1,""],initial_crawling:[15,3,1,""],mtime_checking:[15,3,1,""],processing_pool_ready_limit:[15,3,1,""],processing_pool_wait_limit:[15,3,1,""],root:[15,3,1,""],throttle:[15,3,1,""]},"TrackerMiner.MinerFS.signals":{finished:[15,4,1,""],finished_root:[15,4,1,""],ignore_next_update_file:[15,4,1,""],process_file:[15,4,1,""],process_file_attributes:[15,4,1,""],remove_file:[15,4,1,""],writeback_file:[15,4,1,""]},"TrackerMiner.MinerFSError":{MINER_FS_ERROR_INIT:[20,5,1,""]},"TrackerMiner.MinerOnline":{do_connected:[17,1,1,""],do_disconnected:[17,1,1,""],get_network_type:[17,1,1,""]},"TrackerMiner.MinerOnline.props":{network_type:[17,3,1,""]},"TrackerMiner.MinerOnline.signals":{connected:[17,4,1,""],disconnected:[17,4,1,""]},"TrackerMiner.NetworkType":{"3G":[20,5,1,""],EDGE:[20,5,1,""],GPRS:[20,5,1,""],LAN:[20,5,1,""],NONE:[20,5,1,""],UNKNOWN:[20,5,1,""],_3G:[20,5,1,""]},TrackerMiner:{DataProvider:[2,0,1,""],DataProviderIface:[3,0,1,""],Decorator:[4,0,1,""],DecoratorClass:[5,0,1,""],DecoratorError:[20,0,1,""],DecoratorFS:[6,0,1,""],DecoratorFSClass:[7,0,1,""],DecoratorInfo:[8,0,1,""],DirectoryFlags:[21,0,1,""],Enumerator:[9,0,1,""],EnumeratorIface:[10,0,1,""],FilterPolicy:[20,0,1,""],FilterType:[20,0,1,""],IndexingTree:[11,0,1,""],IndexingTreeClass:[12,0,1,""],MINER_DBUS_INTERFACE:[19,3,1,""],MINER_DBUS_NAME_PREFIX:[19,3,1,""],MINER_DBUS_PATH_PREFIX:[19,3,1,""],MINER_ERROR_DOMAIN:[19,3,1,""],Miner:[13,0,1,""],MinerClass:[14,0,1,""],MinerError:[20,0,1,""],MinerFS:[15,0,1,""],MinerFSClass:[16,0,1,""],MinerFSError:[20,0,1,""],MinerOnline:[17,0,1,""],MinerOnlineClass:[18,0,1,""],NetworkType:[20,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"2nd":4,"abstract":[4,6,11,13,15,16,17],"boolean":[11,15],"case":[2,9,11,15,20],"const":4,"default":[2,4,9,11,13,15,17],"delete":15,"final":8,"float":[13,15],"function":[2,4,8,9,11,13,15],"int":[2,4,6,9,13,15],"mime\u00b9":8,"new":[2,4,6,8,9,11,13,15,17,18,19,20,26],"return":[2,4,6,8,9,11,13,15,17,20],"short":[4,11,13,15,17],"true":[2,11,13,15,17],"try":20,_3g:[20,26],about:[2,11,13],accept:[15,20,26],access:[3,4,5,6,7,8,10,11,12,13,14,15,16,17,18],accord:[9,11,15],account:15,action:20,activ:24,actual:[13,15,16],add:[4,11,26],add_directory_without_par:[15,26],add_filt:[11,26],addit:15,affect:[11,15],after:13,against:15,all:[2,4,9,11,13,15,19,20],alloc:[11,15],allow:[2,8,9,11,15,19],alreadi:[4,13,15,20],also:[8,11],alwai:[4,15],ani:[2,9,11,13,15,19],anoth:20,any:[2,9,11],anytim:11,api:[5,7,11,12,14,15,16,18,20],append:[13,15],appli:[11,15,20],applic:[4,13,20,24],argument:[11,15],around:15,arrai:[4,15],ask:13,associ:[8,15],assum:15,async:[2,9],asynchron:[2,9,15],asyncreadycallback:[2,4,9],asyncresult:[2,4,9],attribut:[2,15],avail:[2,4,20],avoid:20,back:15,base:[2,4,5,6,7,9,11,13,15,17,20,21],basenam:11,basic:4,batch:[4,15],becaus:20,becom:17,been:[4,13,15,20],befor:[2,4,9,15],begin:[2,3,26],begin_async:[2,3,26],begin_finish:[2,3,26],behavior:15,belongstocontain:15,benefit:24,between:[15,24],big:24,black:11,bool:[2,11,13,15,17],both:15,brows:24,bug:24,bugzilla:24,builder:15,cach:[2,15],call:[2,4,8,9,11,15,20],callback:[2,4,9],caller:[4,8,13,15],can:[8,11,15,18,20],cancel:[2,4,9,15],cancelled:[2,9],cannot:13,canon:11,care:[5,7],carri:20,central:24,cgi:24,chang:[4,11,15],check:15,check_deleted:[21,26],check_directori:[15,26],check_directory_with_prior:[15,26],check_fil:[15,26],check_file_with_prior:[15,26],check_mtime:[21,26],check_par:15,child:11,child_upd:[11,12],children:[2,11,15],children_onli:15,clase:15,class_nam:4,class_name_id:4,classmethod:[4,11,13,15],clear:[4,8,11],clear_filt:[11,26],close:2,cloud:15,comma:2,commit:4,commit_batch_s:4,common:11,compar:11,complet:4,concurr:15,config:11,configur:[11,15],connect:[15,17,18],consecut:11,consid:11,consist:[4,15],constant:13,construct:[13,15],construct_only:[4,11,13,15],contact:24,contain:[11,13,15],content:[4,8,11,13,15,17],continu:15,cooki:[13,20],correspond:[6,15],could:15,count:8,crawl:15,creat:[2,9,11,15,20],crucial:20,current:[13,15,17,20],custom:19,data:[2,4,8,9,13,15,16,17,19,24],data_provid:15,data_sourc:4,databas:[4,8,15],dataproviderifac:2,datasourc:4,date:15,dbu:13,dbus_interface_status:[4,11,13,15,17],dbusconnect:13,dbusinterfacevt:13,debian:24,decor:1,decoratorclass:[0,4],decoratorerror:[20,26],decoratorfs:[1,4],decoratorfsclass:[0,6],decoratorinfo:4,decreas:8,defin:2,delet:[4,15],delete_id:[4,26],deni:11,deny:[11,20,26],depend:[9,24],deprec:15,deriv:16,describ:[8,11],descript:[3,4,5,6,7,10,11,12,13,14,15,16,17,18,24],desktop:24,determin:15,devic:[11,24],directli:15,directori:[11,15],directories_found:15,directories_ignor:15,directory:[20,26],directory_ad:[11,12],directory_add:[15,26],directory_flag:11,directory_remov:[11,12,15,26],directory_remove_ful:[15,26],directory_upd:[11,12],directoryflag:[2,11,21,26],disabl:11,disappear:13,disconnect:[17,18],disk:15,do_begin:2,do_begin_async:2,do_begin_finish:2,do_child_upd:11,do_connect:17,do_directory_ad:11,do_directory_remov:11,do_directory_upd:11,do_disconnect:17,do_end:2,do_end_async:2,do_end_finish:2,do_finish:[4,15],do_finished_root:15,do_ignore_next_upd:13,do_ignore_next_update_fil:15,do_initial_crawl:15,do_items_avail:4,do_next:9,do_next_async:9,do_next_finish:9,do_paus:13,do_process_fil:15,do_process_file_attribut:15,do_progress:13,do_remove_fil:15,do_resum:13,do_start:13,do_stop:13,document:[2,4,8,11,20],doe:11,doesn:15,domain:[4,13,15,19],done:[15,20],doubl:15,down:15,dramat:15,due:11,duplic:20,dure:[2,9,15,20],edge:[20,26],effect:11,either:[11,13,15],elaps:15,element:[6,11,15],elig:15,els:15,email:20,emit:[4,11,13,15,17,20],empty:[20,26],enabl:15,end:[2,3,26],end_async:[2,3,26],end_finish:[2,3,26],ensur:4,entir:[15,20],enumer:2,enumerate_children:2,enumeratorifac:9,equal:11,equival:11,error:[2,4,8,9,11,13,15,17,19,20],error_quark:[4,13,15,26],essenti:4,estim:13,estimat:13,etc:[4,11,15,24],evalu:4,evaluat:11,exampl:[2,4,8,11,19,20,24],execut:[2,9,15],exist:[4,8,15],expect:[13,15],explain:11,extend:[4,8],extern:13,extra:[5,15],extract:[4,5,8,15,16],failur:[2,13,15],fallback:11,fals:[2,11,15],far:13,feed:[2,9],file:[2,4,5,6,8,11,15,19,20,24,26],file_attribute_standard_name:2,file_is_index:[11,26],file_is_root:[11,26],file_matches_filt:[11,26],file_notifi:[15,26],file_typ:11,fileenumer:15,fileinfo:15,files_found:15,files_ignor:15,filesystem:15,filetyp:11,filter:11,filter_hidden:11,filterpolici:[11,20,26],filtertyp:[11,20,26],find:15,finish:[2,4,5,9,13,15,16],finished_root:[15,16],first:4,flag:[2,4,11,13,15,17],flurish:4,folder:15,foo:8,forc:15,force_mtime_check:[15,26],force_recheck:[15,26],found:15,free:[4,8,9],freed:[2,9,11],freedesktop:19,from:[2,4,9,11,13,15,17],full:15,fulli:15,further:4,futur:[5,7,12,14,16,18],g_ifac:[3,10],g_list_fre:11,gather:2,gener:20,genum:20,get:[4,8,11,13,15,17],get_class_nam:[4,26],get_connect:[13,26],get_data_provid:[15,26],get_data_sourc:[4,26],get_dbus_connect:[13,26],get_dbus_full_nam:[13,26],get_dbus_full_path:[13,26],get_default_polici:[11,26],get_filter_hidden:[11,26],get_indexing_tre:[15,26],get_initial_crawl:[15,26],get_master_root:[11,26],get_mimetyp:[8,26],get_mtime_check:[15,26],get_n_item:[4,26],get_n_pause_reason:[13,26],get_network_typ:[17,26],get_parent_urn:[15,26],get_root:[11,26],get_sparql:[8,26],get_task:[8,26],get_task_data:8,get_throttl:[15,26],get_url:[8,26],get_urn:[8,15,26],gflag:21,gint:20,ginterfac:[2,4,6,9,13,15,17],gio:[2,4,6,8,9,11,13,15,17,24],gir1:24,give:[4,13,15,20],given:[11,15,20],glib:[2,4,9,13,15,19,20],glob:11,glob_str:11,global:15,gmodul:24,gnome:24,gobject:[2,3,4,6,9,10,11,12,13,14,15,17,20,21,22,24],gprs:[20,26],gquark:[4,13,15],graphupdat:4,gstrv:15,guarante:15,handl:[4,15],handler:13,happen:[4,15],has_items_to_process:[15,26],have:[4,13,15,20],here:11,hidden:11,higher:[2,9],hold:[13,15],home:11,homepag:24,host:20,how:13,http:[8,11,24],identifi:[4,8,13,15],idle:13,ignor:[2,9,11,13,15],ignore:[21,26],ignore_next_upd:[13,14,26],ignore_next_update_fil:[15,16],implement:[2,3,5,9,10,13,14,15,16],implicitli:15,improv:[5,7,12,14,15,16,18],includ:15,increas:8,index:[4,11,13,15,17,24],indexing_tre:11,indexingtre:1,indexingtreeclass:[0,11],indic:[4,13,15,17],inform:[2,4,8,9,24],inherit:[4,6,11,13,15,17],initabl:[4,6,13,15,17],initi:[13,15,20],initial_crawl:15,inotifi:15,insert:8,inspect:15,instead:4,inter:19,interest:20,interfac:[2,3,9,10,13,19],intern:[4,13,15],introspect:13,introspection_handl:13,introspection_xml:13,invalid_cookie:[20,26],io_prior:[2,9],ioerrorenum:[2,9],is_paus:[13,26],is_start:[13,26],item:[2,4,9,11,15,20],items_avail:[4,5,20],itself:[11,20],just:2,keep:15,kwarg:[4,6,11,13,15,17],lan:[20,26],layer:15,left:[3,4,10,14],let:15,level:[11,15],like:[2,15],limit:15,list:[2,4,11,24],list_root:[11,26],listen:4,listinfo:24,local:15,locat:[8,11,15,24],longer:15,lower:[2,9],mai:[4,11,15,20],mail:24,mailman:24,main:15,make:15,mani:15,map:24,mark:[13,15],martyn:11,master:11,match:11,max:15,maximum:15,mean:[2,15],merg:15,messag:20,metadata:[4,5,8,15],might:20,mime:8,mine:[13,15],miner:[1,4,6],miner_dbus_interface:[19,26],miner_dbus_name_prefix:[19,26],miner_dbus_path_prefix:[19,26],miner_error_domain:[19,26],miner_f:15,miner_f_:15,miner_fs_error_init:[20,26],miner_onlin:17,minerclass:[0,5,13],minererror:[20,26],minerfs:[1,11,13],minerfsclass:[0,15],minerfserror:[20,26],mineronlin:[1,13],mineronlineclass:[0,17],mix:[11,24],mobil:24,modif:15,modifi:[13,15],monitor:[15,21,26],more:[2,15],most:[11,15],mount:7,move:15,mtime:15,mtime_check:15,much:13,must:[2,8,9,11,13,15,16,20],name:[3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20],name_missing:[20,26],name_unavailable:[20,26],namespac:2,necessari:15,need:[4,15],nepomuk:24,network:17,network_typ:17,networktyp:[17,20,26],neutral:24,never:11,new_with_root:[11,26],newli:[11,15],next:[2,4,9,10,13,15,20,26],next_async:[9,10,26],next_finish:[4,9,10,20,26],nfo:[4,20],nie:[4,15],nmo:20,no_stat:[21,26],node:11,non:[11,15],none:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,26],normal:11,note:[11,15],notifi:[11,15],notify_upd:[11,26],number:[4,13,15],numer:[2,9],object:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22],objectclass:[4,6,11,12,13,14,15,17],obtain:15,onli:[11,15,20],only:11,ontolog:24,oper:[2,9,13,15,19],option:[2,9,11],order:[2,15,16],org:[8,19,24],origin:2,other:[2,4,9,11,15,20,24],otherwis:[2,11,15],our:15,out:[15,20],outsid:15,outstand:[2,9],overridden:18,own:11,owner:2,packag:24,pad:[5,7,12,14,16,18],paramet:[2,4,6,9,11,13,15,17],parent:[3,5,7,10,11,12,14,15,16,24],parent_class:[5,7,12,14,18],parent_directory:[20,26],parent_inst:[4,6,11,13,17],parent_is_index:[11,26],part:15,partial:[2,9],particular:2,pass:[2,4,8,9,15],passiv:4,past:4,path:[11,13,19],paus:[4,13,14,20,26],paused:[20,26],paused_already:[20,26],pend:15,pending:[2,9],per:[4,11],perform:[2,9,15],phase:15,piec:9,plain:8,point:[7,11,15],pointer:13,polici:11,pool:15,popul:[8,15],possibl:[2,11,20],precis:[2,9],prefer:11,prefix:[11,19],prepar:15,prepend:6,prepend_fil:[6,26],prepend_id:[4,26],presenc:20,preserve:[21,26],previou:20,previous:11,prioriti:[2,4,9,15],priority:[21,26],priority_default:[2,9],priority_rdf_typ:4,priv:[4,6,11],process:[4,6,8,13,15,20],process_fil:[15,16],process_file_attribut:[15,16],processing_pool_ready_limit:15,processing_pool_wait_limit:15,prodomin:15,product:24,progress:[13,14],project:24,prop:[4,11,13,15,17],prototyp:16,provid:[2,4,13,15,24],purpos:15,python:26,queri:[2,11,15,24],query_urn:[15,26],queu:[4,15],queue:[4,15],rais:[2,4,9,13],rdf:[4,15,24],rdf_type:[4,15],reach:8,read:2,readable:[4,11,13,15,17],readi:15,reamain:13,reason:[13,15,20],receiv:[4,11,13,15,17],recurs:[11,15],recurse:[21,26],ref:[8,11,26],refer:8,referenc:11,reflect:15,regardless:15,regener:15,regist:13,relat:[2,15,24],relationship:15,relev:15,remain:13,remaining_tim:13,remov:[7,11,15,26],remove_fil:[15,16],report:[2,9,19],repositori:24,repres:[11,15],request:[2,9,11,13,20],requir:[15,17],reserv:[5,7,12,14,16,18],resourc:[4,7,8,11,15],result:[2,4,8,9,15],resum:[13,14,17,20,26],retriev:[8,15],right:13,root:[11,15],run:[15,20],run_last:[4,11,13,15,17],safe:15,same:[2,4,8,9,11,20],satisfi:[2,9],scheme:11,search:24,second:[13,15],see:[2,4,11,13,15],self:[8,9,11,13,15,17],semant:24,separ:2,set:[2,8,9,11,13,15],set_default_polici:[11,26],set_filter_hidden:[11,26],set_initial_crawl:[15,26],set_mtime_check:[15,26],set_priority_rdf_typ:[4,26],set_throttl:[15,26],share:24,should:[2,4,8,11,13,15,17,20],shouldn:15,show:19,shutdown:15,side:15,sinc:15,singl:15,size:4,slowest:15,some:[11,15],someth:13,sometim:11,sooner:4,sourc:4,sparql:[8,15,24],sparqlbuild:[8,15],sparqlconnect:13,specif:[5,11,15,17,20],specifi:2,speed:15,stai:15,standard:[2,4,13,24],start:[2,9,13,14,15,26],startup:15,statement:15,statu:13,still:15,stop:[13,14,26],storag:24,store:[4,15,24],str:[2,4,8,11,13,15],string:[2,4,11,13,15],struct:[4,6,11,13,15,17],style:11,subclass:[4,6,11,13,15,17,20],succeed:[2,9],success:[2,4,8,13,15,17],successfulli:15,sum:15,suppli:15,sure:15,symbol:24,sync:[2,9],synchron:15,system:[11,15],take:[4,5,7,11],taken:15,talk:5,task:[4,8,15],technic:11,technolog:15,tell:[13,15],text:8,than:[4,15],themselv:15,thi:[2,4,7,8,11,13,15,17,19,20],thing:20,those:[11,15],throttl:15,through:[11,13],time:[4,13,15,20],tmp:8,too:11,tool:24,top:[11,15],topmost:15,tracker1:19,tracker:[2,4,5,6,8,9,11,13,15,17,19,20,24],tracker_data_provider_begin:26,tracker_data_provider_begin_async:26,tracker_data_provider_begin_finish:26,tracker_data_provider_end:26,tracker_data_provider_end_async:26,tracker_data_provider_end_finish:26,tracker_decorator_delete_id:26,tracker_decorator_error_empty:26,tracker_decorator_error_paused:26,tracker_decorator_error_quark:26,tracker_decorator_fs_prepend_fil:26,tracker_decorator_get_class_nam:26,tracker_decorator_get_data_sourc:26,tracker_decorator_get_n_item:26,tracker_decorator_info_get_mimetyp:26,tracker_decorator_info_get_sparql:26,tracker_decorator_info_get_task:26,tracker_decorator_info_get_url:26,tracker_decorator_info_get_urn:26,tracker_decorator_info_ref:26,tracker_decorator_info_unref:26,tracker_decorator_next:26,tracker_decorator_next_finish:26,tracker_decorator_prepend_id:26,tracker_decorator_set_priority_rdf_typ:26,tracker_directory_flag_check_deleted:26,tracker_directory_flag_check_mtime:26,tracker_directory_flag_ignore:26,tracker_directory_flag_monitor:26,tracker_directory_flag_no_stat:26,tracker_directory_flag_none:26,tracker_directory_flag_preserve:26,tracker_directory_flag_priority:26,tracker_directory_flag_recurse:26,tracker_enumerator_next:26,tracker_enumerator_next_async:26,tracker_enumerator_next_finish:26,tracker_filter_directory:26,tracker_filter_file:26,tracker_filter_parent_directory:26,tracker_filter_policy_accept:26,tracker_filter_policy_allow:11,tracker_filter_policy_deny:26,tracker_indexing_tree_add:26,tracker_indexing_tree_add_filt:26,tracker_indexing_tree_clear_filt:26,tracker_indexing_tree_file_is_index:26,tracker_indexing_tree_file_is_root:26,tracker_indexing_tree_file_matches_filt:26,tracker_indexing_tree_get_default_polici:26,tracker_indexing_tree_get_filter_hidden:26,tracker_indexing_tree_get_master_root:26,tracker_indexing_tree_get_root:26,tracker_indexing_tree_list_root:26,tracker_indexing_tree_new:26,tracker_indexing_tree_new_with_root:26,tracker_indexing_tree_notify_upd:26,tracker_indexing_tree_parent_is_index:26,tracker_indexing_tree_remov:26,tracker_indexing_tree_set_default_polici:26,tracker_indexing_tree_set_filter_hidden:26,tracker_miner_dbus_interface:26,tracker_miner_dbus_name_prefix:26,tracker_miner_dbus_path_prefix:26,tracker_miner_error_domain:26,tracker_miner_error_invalid_cookie:26,tracker_miner_error_name_missing:26,tracker_miner_error_name_unavailable:26,tracker_miner_error_paused:26,tracker_miner_error_paused_already:26,tracker_miner_error_quark:26,tracker_miner_fs_add_directory_without_par:26,tracker_miner_fs_check_directori:26,tracker_miner_fs_check_directory_with_prior:26,tracker_miner_fs_check_fil:26,tracker_miner_fs_check_file_with_prior:26,tracker_miner_fs_directory_add:26,tracker_miner_fs_directory_remov:26,tracker_miner_fs_directory_remove_ful:26,tracker_miner_fs_error_init:26,tracker_miner_fs_error_quark:26,tracker_miner_fs_file_notifi:26,tracker_miner_fs_force_mtime_check:26,tracker_miner_fs_force_recheck:26,tracker_miner_fs_get_data_provid:26,tracker_miner_fs_get_indexing_tre:26,tracker_miner_fs_get_initial_crawl:26,tracker_miner_fs_get_mtime_check:26,tracker_miner_fs_get_parent_urn:26,tracker_miner_fs_get_throttl:26,tracker_miner_fs_get_urn:26,tracker_miner_fs_has_items_to_process:26,tracker_miner_fs_query_urn:26,tracker_miner_fs_set_initial_crawl:26,tracker_miner_fs_set_mtime_check:26,tracker_miner_fs_set_throttl:26,tracker_miner_fs_writeback_fil:26,tracker_miner_fs_writeback_notifi:26,tracker_miner_get_connect:26,tracker_miner_get_dbus_connect:26,tracker_miner_get_dbus_full_nam:26,tracker_miner_get_dbus_full_path:26,tracker_miner_get_n_pause_reason:26,tracker_miner_ignore_next_upd:26,tracker_miner_is_paus:26,tracker_miner_is_start:26,tracker_miner_online_get_network_typ:26,tracker_miner_paus:26,tracker_miner_resum:26,tracker_miner_start:26,tracker_miner_stop:26,tracker_network_type_3g:26,tracker_network_type_edge:26,tracker_network_type_gprs:26,tracker_network_type_lan:26,tracker_network_type_none:26,tracker_network_type_unknown:26,trackerdataprovid:26,trackerdataproviderifac:26,trackerdecor:26,trackerdecoratorclass:26,trackerdecoratorerror:26,trackerdecoratorfs:26,trackerdecoratorfsclass:26,trackerdecoratorinfo:26,trackerdirectoryflag:26,trackerenumer:26,trackerenumeratorifac:26,trackerfilterpolici:26,trackerfiltertyp:26,trackerindexingtre:26,trackerindexingtreeclass:26,trackermin:[0,1],trackerminerclass:26,trackerminererror:26,trackerminerfs:26,trackerminerfsclass:26,trackerminerfserror:26,trackerminermanag:13,trackermineronlin:26,trackermineronlineclass:26,trackernetworktyp:26,translat:13,tree:[11,15],trigger:11,tripl:15,two:24,txt:8,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20],typeinterfac:[3,10],typic:[11,15],under:19,uniform:8,uniqu:[4,8],unknown:[11,20,26],unlik:15,unrecognis:20,unref:[2,4,8,26],until:13,updat:[4,11,13,15,24],upon:[15,17],upper:15,uri:[2,9,15],url:[2,8,11,13],urn:[8,15],used:19,user:[2,11,24],user_data:[2,4,9],using:11,usual:[11,15],valid:13,valu:[2,4,8,9,11,13,15,17,20,21],veri:15,version:[2,4,6,8,9,11,13,15,17,18,19,20],w3c:24,wai:8,wait:[4,15],watch:15,well:15,what:[13,15],when:[2,4,8,9,11,15,17,20],whenev:[4,13,15],where:[11,15,20],whether:[11,15,17],which:[4,11,13,15,17,20,24],white:11,who:4,wiki:[8,24],wikipedia:8,wildcard:2,within:11,without:15,won:[2,13],work:[15,20],would:[4,8,11,19,20],writable:[4,11,13,15],write:15,writeback:15,writeback_fil:[15,16,26],writeback_notifi:[15,26],written:[15,19],xml:13,yet:15,you:[8,11,15]},titles:["Class Structures","Classes","TrackerMiner.DataProvider","TrackerMiner.DataProviderIface","TrackerMiner.Decorator","TrackerMiner.DecoratorClass","TrackerMiner.DecoratorFS","TrackerMiner.DecoratorFSClass","TrackerMiner.DecoratorInfo","TrackerMiner.Enumerator","TrackerMiner.EnumeratorIface","TrackerMiner.IndexingTree","TrackerMiner.IndexingTreeClass","TrackerMiner.Miner","TrackerMiner.MinerClass","TrackerMiner.MinerFS","TrackerMiner.MinerFSClass","TrackerMiner.MinerOnline","TrackerMiner.MinerOnlineClass","Constants","Enums","Flags","Hierarchy","Interface Structures","TrackerMiner 1.0 (1.10.5)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,4,6,9,11,13,15,17],"enum":20,api:24,constant:19,dataprovid:2,dataproviderifac:3,decor:4,decoratorclass:5,decoratorfs:6,decoratorfsclass:7,decoratorinfo:8,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],enumer:9,enumeratorifac:10,field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],flag:21,hierarchi:22,indexingtre:11,indexingtreeclass:12,interfac:[23,25],map:26,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],miner:13,minerclass:14,minerfs:15,minerfsclass:16,mineronlin:17,mineronlineclass:18,properti:[2,4,6,9,11,13,15,17],signal:[2,4,6,9,11,13,15,17],structur:[0,23,27],symbol:26,trackermin:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,24],virtual:[2,4,6,9,11,13,15,17]}})