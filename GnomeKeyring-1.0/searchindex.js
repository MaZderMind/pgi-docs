Search.setIndex({docnames:["callbacks","classes/AccessControl","classes/ApplicationRef","classes/Attribute","classes/Found","classes/Info","classes/ItemInfo","classes/NetworkPasswordData","classes/PasswordSchema","classes/PasswordSchemaAttribute","constants","enums","flags","functions","index","mapping","structs"],envversion:50,filenames:["callbacks.rst","classes/AccessControl.rst","classes/ApplicationRef.rst","classes/Attribute.rst","classes/Found.rst","classes/Info.rst","classes/ItemInfo.rst","classes/NetworkPasswordData.rst","classes/PasswordSchema.rst","classes/PasswordSchemaAttribute.rst","constants.rst","enums.rst","flags.rst","functions.rst","index.rst","mapping.rst","structs.rst"],objects:{"GnomeKeyring.AccessControl":{"new":[1,2,1,""],copy:[1,1,1,""],free:[1,1,1,""]},"GnomeKeyring.AccessRestriction":{ALLOW:[11,3,1,""],ASK:[11,3,1,""],DENY:[11,3,1,""]},"GnomeKeyring.AccessType":{READ:[12,3,1,""],REMOVE:[12,3,1,""],WRITE:[12,3,1,""]},"GnomeKeyring.ApplicationRef":{"new":[2,2,1,""],copy:[2,1,1,""],free:[2,1,1,""]},"GnomeKeyring.Attribute":{get_string:[3,1,1,""],get_uint32:[3,1,1,""],list_append_string:[3,2,1,""],list_append_uint32:[3,2,1,""],list_copy:[3,2,1,""],list_free:[3,2,1,""],list_new:[3,2,1,""],list_to_glist:[3,2,1,""]},"GnomeKeyring.AttributeType":{STRING:[11,3,1,""],UINT32:[11,3,1,""]},"GnomeKeyring.Found":{copy:[4,1,1,""],free:[4,1,1,""],list_free:[4,2,1,""]},"GnomeKeyring.Info":{copy:[5,1,1,""],free:[5,1,1,""],get_ctime:[5,1,1,""],get_is_locked:[5,1,1,""],get_lock_on_idle:[5,1,1,""],get_lock_timeout:[5,1,1,""],get_mtime:[5,1,1,""],set_lock_on_idle:[5,1,1,""],set_lock_timeout:[5,1,1,""]},"GnomeKeyring.ItemInfo":{"new":[6,2,1,""],copy:[6,1,1,""],free:[6,1,1,""],get_ctime:[6,1,1,""],get_display_name:[6,1,1,""],get_mtime:[6,1,1,""],get_secret:[6,1,1,""],get_type:[6,1,1,""],set_display_name:[6,1,1,""],set_secret:[6,1,1,""],set_type:[6,1,1,""]},"GnomeKeyring.ItemInfoFlags":{BASICS:[12,3,1,""],SECRET:[12,3,1,""]},"GnomeKeyring.ItemType":{CHAINED_KEYRING_PASSWORD:[11,3,1,""],ENCRYPTION_KEY_PASSWORD:[11,3,1,""],GENERIC_SECRET:[11,3,1,""],LAST_TYPE:[11,3,1,""],NETWORK_PASSWORD:[11,3,1,""],NOTE:[11,3,1,""],PK_STORAGE:[11,3,1,""]},"GnomeKeyring.Result":{ALREADY_UNLOCKED:[11,3,1,""],BAD_ARGUMENTS:[11,3,1,""],CANCELLED:[11,3,1,""],DENIED:[11,3,1,""],IO_ERROR:[11,3,1,""],KEYRING_ALREADY_EXISTS:[11,3,1,""],NO_KEYRING_DAEMON:[11,3,1,""],NO_MATCH:[11,3,1,""],NO_SUCH_KEYRING:[11,3,1,""],OK:[11,3,1,""]},GnomeKeyring:{AccessControl:[1,0,1,""],AccessRestriction:[11,0,1,""],AccessType:[12,0,1,""],ApplicationRef:[2,0,1,""],Attribute:[3,0,1,""],AttributeType:[11,0,1,""],Found:[4,0,1,""],ITEM_APPLICATION_SECRET:[10,4,1,""],ITEM_INFO_ALL:[10,4,1,""],ITEM_TYPE_MASK:[10,4,1,""],Info:[5,0,1,""],ItemInfo:[6,0,1,""],ItemInfoFlags:[12,0,1,""],ItemType:[11,0,1,""],NetworkPasswordData:[7,0,1,""],OperationDoneCallback:[0,5,1,""],OperationGetAttributesCallback:[0,5,1,""],OperationGetIntCallback:[0,5,1,""],OperationGetItemInfoCallback:[0,5,1,""],OperationGetKeyringInfoCallback:[0,5,1,""],OperationGetStringCallback:[0,5,1,""],PasswordSchema:[8,0,1,""],PasswordSchemaAttribute:[9,0,1,""],Result:[11,0,1,""],SESSION:[10,4,1,""],acl_copy:[13,5,1,""],acl_free:[13,5,1,""],attribute_list_append_string:[13,5,1,""],attribute_list_append_uint32:[13,5,1,""],attribute_list_copy:[13,5,1,""],attribute_list_free:[13,5,1,""],attribute_list_get_type:[13,5,1,""],attribute_list_new:[13,5,1,""],attribute_list_to_glist:[13,5,1,""],cancel_request:[13,5,1,""],change_password_sync:[13,5,1,""],create_sync:[13,5,1,""],daemon_prepare_environment_sync:[13,5,1,""],daemon_set_display_sync:[13,5,1,""],delete_sync:[13,5,1,""],find_items_sync:[13,5,1,""],find_network_password_sync:[13,5,1,""],found_list_free:[13,5,1,""],free_password:[13,5,1,""],get_default_keyring_sync:[13,5,1,""],get_info_sync:[13,5,1,""],is_available:[13,5,1,""],item_ac_get_access_type:[13,5,1,""],item_ac_get_display_name:[13,5,1,""],item_ac_get_path_name:[13,5,1,""],item_ac_set_access_type:[13,5,1,""],item_ac_set_display_name:[13,5,1,""],item_ac_set_path_name:[13,5,1,""],item_create_sync:[13,5,1,""],item_delete_sync:[13,5,1,""],item_get_acl_sync:[13,5,1,""],item_get_attributes_sync:[13,5,1,""],item_get_info_full_sync:[13,5,1,""],item_get_info_sync:[13,5,1,""],item_grant_access_rights_sync:[13,5,1,""],item_set_acl_sync:[13,5,1,""],item_set_attributes_sync:[13,5,1,""],item_set_info_sync:[13,5,1,""],list_item_ids_sync:[13,5,1,""],list_keyring_names_sync:[13,5,1,""],lock_all_sync:[13,5,1,""],lock_sync:[13,5,1,""],network_password_free:[13,5,1,""],network_password_list_free:[13,5,1,""],result_to_message:[13,5,1,""],set_default_keyring_sync:[13,5,1,""],set_info_sync:[13,5,1,""],set_network_password_sync:[13,5,1,""],string_list_free:[13,5,1,""],unlock_sync:[13,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","attribute","Python attribute"],"4":["py","data","Python data"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:attribute","4":"py:data","5":"py:function"},terms:{"32bit":[3,13],"case":[6,13],"class":[1,2,3,4,5,6,7,8,9,11,12],"default":13,"enum":14,"function":[11,14],"int":[0,3,4,5,6,7,13],"new":[1,2,3,4,6,13,15],"null":[8,13],"return":[1,2,3,4,5,6,11,13],"true":13,For:13,Not:[1,2,3,4,5,11,13],One:[9,13],The:[1,3,4,5,6,7,8,11,13,14],Use:[1,4,5,6,7,11,13],Will:13,about:13,access:[1,3,4,7,8,9,11,12,13],accesscontrol:[13,15,16],accessrestrict:[11,15],accesstyp:[1,12,13,15],acl:13,acl_copi:[13,15],acl_fre:[13,15],action:13,after:[5,13],agent:14,all:13,alloc:[5,6,13],allow:[1,11,13,15],alreadi:[11,13],already_unlock:[11,15],also:[5,14],alwai:13,amount:5,ani:13,anoth:13,applic:[1,2,13,14],applicationref:[1,15,16],appropri:13,argument:[11,13],arrai:[0,3,4,13],ask:[11,15],asynchron:13,attr:8,attribut:[0,4,8,9,12,13,15,16],attribute_list_append_str:[13,15],attribute_list_append_uint32:[13,15],attribute_list_copi:[13,15],attribute_list_fre:[13,15],attribute_list_get_typ:[13,15],attribute_list_new:[13,15],attribute_list_to_glist:[13,15],attributetyp:[3,9,11,15],authent:[7,13],authtyp:[7,13],automat:13,avail:11,bad:11,bad_argu:[11,15],base:[11,12],basic:[12,15],been:13,bind:[3,13],bool:[5,13],both:13,brows:14,bug:14,bugzilla:14,call:[3,13],callback:[13,14],calle:13,can:[13,14],cancel:[11,13,15],cancel_request:[13,15],cannot:[3,13],certain:[5,13],cgi:14,chained_keyring_password:[11,15],chang:13,change_password_sync:[13,15],check:13,choic:13,classmethod:[1,2,3,4,6],clear:13,code:[11,13],combin:1,commun:[11,13],complet:11,constant:14,contain:[1,3,6,13],content:13,control:[1,13],copi:[1,2,3,4,5,6,13,15],correct:13,creat:[1,2,3,5,6,13],create_sync:[13,15],criteria:13,daemon:[11,13,14],daemon_prepare_environment_sync:[13,15],daemon_set_display_sync:[13,15],data:[0,3,9,13],debian:14,delet:[12,13],delete_sync:[13,15],deni:[11,13,15],depend:14,deprec:[1,2,3,4,5,6,7,11,12,13],describ:8,descript:[3,4,7,8,9,13,14],directli:[3,13],disk:14,displai:[6,13],display_nam:13,doe:[3,13],doesn:13,doing:13,domain:[7,13],each:14,effect:13,either:11,empti:13,encrypt:[11,14],encryption_key_password:[11,15],end:14,enter:13,equal:13,error:[3,11,13],etc:13,exact:13,except:13,exist:[11,13],fail:13,fals:13,field:13,filepath:13,fill:13,find:13,find_items_sync:[13,15],find_network_password_sync:[13,15],first:13,flag:[13,14],forgotten:14,found:[11,13,15,16],found_list:[4,13],found_list_fre:[13,15],free:[1,2,3,4,5,6,13,15],free_password:[13,15],freed:[5,13],from:[3,11,13],full:13,full_path:13,g_hash_table_new:[3,13],g_list_fre:13,gcancel:13,gener:11,generic_secret:[11,15],get:[5,6,13],get_application_nam:13,get_ctim:[5,6,15],get_default_keyring_sync:[13,15],get_display_nam:[6,15],get_info_sync:[13,15],get_is_lock:[5,15],get_lock_on_idl:[5,15],get_lock_timeout:[5,15],get_mtim:[5,6,15],get_secret:[6,15],get_str:[3,15],get_typ:[6,15],get_uint32:[3,15],gir1:14,give:11,given:13,glib:[0,3,4,11,12,13],gnome:[13,14],gnome_keyring_access_allow:15,gnome_keyring_access_ask:15,gnome_keyring_access_control_copi:15,gnome_keyring_access_control_fre:15,gnome_keyring_access_control_new:15,gnome_keyring_access_deni:15,gnome_keyring_access_read:15,gnome_keyring_access_remov:15,gnome_keyring_access_writ:15,gnome_keyring_acl_copi:15,gnome_keyring_acl_fre:15,gnome_keyring_application_ref_copi:15,gnome_keyring_application_ref_fre:15,gnome_keyring_application_ref_new:15,gnome_keyring_attribute_get_str:15,gnome_keyring_attribute_get_uint32:15,gnome_keyring_attribute_list_append_str:15,gnome_keyring_attribute_list_append_uint32:15,gnome_keyring_attribute_list_copi:15,gnome_keyring_attribute_list_fre:15,gnome_keyring_attribute_list_get_typ:15,gnome_keyring_attribute_list_new:15,gnome_keyring_attribute_list_to_glist:15,gnome_keyring_attribute_type_str:[8,15],gnome_keyring_attribute_type_uint32:[8,15],gnome_keyring_cancel_request:15,gnome_keyring_change_password:[13,15],gnome_keyring_change_password_sync:15,gnome_keyring_cr:[13,15],gnome_keyring_create_sync:15,gnome_keyring_daemon_prepare_environment_sync:15,gnome_keyring_daemon_set_display_sync:15,gnome_keyring_delet:[13,15],gnome_keyring_delete_password:15,gnome_keyring_delete_password_sync:15,gnome_keyring_delete_sync:15,gnome_keyring_find_item:[13,15],gnome_keyring_find_items_sync:15,gnome_keyring_find_itemsv:15,gnome_keyring_find_itemsv_sync:15,gnome_keyring_find_network_password:15,gnome_keyring_find_network_password_sync:15,gnome_keyring_find_password:15,gnome_keyring_find_password_sync:15,gnome_keyring_found_copi:15,gnome_keyring_found_fre:15,gnome_keyring_found_list_fre:15,gnome_keyring_free_password:15,gnome_keyring_get_default_keyr:[13,15],gnome_keyring_get_default_keyring_sync:15,gnome_keyring_get_info:[13,15],gnome_keyring_get_info_sync:15,gnome_keyring_info_copi:15,gnome_keyring_info_fre:15,gnome_keyring_info_get_ctim:15,gnome_keyring_info_get_is_lock:15,gnome_keyring_info_get_lock_on_idl:15,gnome_keyring_info_get_lock_timeout:15,gnome_keyring_info_get_mtim:15,gnome_keyring_info_set_lock_on_idl:15,gnome_keyring_info_set_lock_timeout:15,gnome_keyring_is_avail:15,gnome_keyring_item_ac_get_access_typ:15,gnome_keyring_item_ac_get_display_nam:15,gnome_keyring_item_ac_get_path_nam:15,gnome_keyring_item_ac_set_access_typ:15,gnome_keyring_item_ac_set_display_nam:15,gnome_keyring_item_ac_set_path_nam:15,gnome_keyring_item_application_secret:15,gnome_keyring_item_chained_keyring_password:15,gnome_keyring_item_cr:[13,15],gnome_keyring_item_create_sync:15,gnome_keyring_item_delet:[13,15],gnome_keyring_item_delete_sync:15,gnome_keyring_item_encryption_key_password:15,gnome_keyring_item_generic_secret:[8,15],gnome_keyring_item_get_acl:15,gnome_keyring_item_get_acl_sync:15,gnome_keyring_item_get_attribut:[13,15],gnome_keyring_item_get_attributes_sync:15,gnome_keyring_item_get_info:[13,15],gnome_keyring_item_get_info_ful:[13,15],gnome_keyring_item_get_info_full_sync:15,gnome_keyring_item_get_info_sync:15,gnome_keyring_item_grant_access_right:15,gnome_keyring_item_grant_access_rights_sync:15,gnome_keyring_item_info_al:15,gnome_keyring_item_info_bas:15,gnome_keyring_item_info_copi:15,gnome_keyring_item_info_fre:15,gnome_keyring_item_info_get_ctim:15,gnome_keyring_item_info_get_display_nam:15,gnome_keyring_item_info_get_mtim:15,gnome_keyring_item_info_get_secret:15,gnome_keyring_item_info_get_typ:15,gnome_keyring_item_info_new:15,gnome_keyring_item_info_secret:15,gnome_keyring_item_info_set_display_nam:15,gnome_keyring_item_info_set_secret:15,gnome_keyring_item_info_set_typ:15,gnome_keyring_item_last_typ:15,gnome_keyring_item_network_password:15,gnome_keyring_item_not:15,gnome_keyring_item_pk_storag:15,gnome_keyring_item_set_acl:15,gnome_keyring_item_set_acl_sync:15,gnome_keyring_item_set_attribut:[13,15],gnome_keyring_item_set_attributes_sync:15,gnome_keyring_item_set_info:[13,15],gnome_keyring_item_set_info_sync:15,gnome_keyring_item_type_mask:15,gnome_keyring_list_item_id:[13,15],gnome_keyring_list_item_ids_sync:15,gnome_keyring_list_keyring_nam:[13,15],gnome_keyring_list_keyring_names_sync:15,gnome_keyring_lock:[13,15],gnome_keyring_lock_al:[13,15],gnome_keyring_lock_all_sync:15,gnome_keyring_lock_sync:15,gnome_keyring_memory_alloc:15,gnome_keyring_memory_fre:15,gnome_keyring_memory_is_secur:15,gnome_keyring_memory_realloc:15,gnome_keyring_memory_strdup:[13,15],gnome_keyring_memory_try_alloc:15,gnome_keyring_memory_try_realloc:15,gnome_keyring_network_password:8,gnome_keyring_network_password_fre:15,gnome_keyring_network_password_list_fre:15,gnome_keyring_result_already_unlock:15,gnome_keyring_result_bad_argu:15,gnome_keyring_result_cancel:15,gnome_keyring_result_deni:15,gnome_keyring_result_io_error:15,gnome_keyring_result_keyring_already_exist:15,gnome_keyring_result_no_keyring_daemon:15,gnome_keyring_result_no_match:15,gnome_keyring_result_no_such_keyr:15,gnome_keyring_result_ok:15,gnome_keyring_result_to_messag:15,gnome_keyring_sess:15,gnome_keyring_set_default_keyr:[13,15],gnome_keyring_set_default_keyring_sync:15,gnome_keyring_set_info:[13,15],gnome_keyring_set_info_sync:15,gnome_keyring_set_network_password:15,gnome_keyring_set_network_password_sync:15,gnome_keyring_store_password:15,gnome_keyring_store_password_sync:15,gnome_keyring_string_list_fre:15,gnome_keyring_unlock:[13,15],gnome_keyring_unlock_sync:15,gnomekeyr:[0,10,11,12,13,15,16],gnomekeyringaccesscontrol:15,gnomekeyringaccessrestrict:15,gnomekeyringaccesstyp:15,gnomekeyringapplicationref:15,gnomekeyringattribut:15,gnomekeyringattributelist:[3,13],gnomekeyringattributetyp:15,gnomekeyringfound:15,gnomekeyringinfo:15,gnomekeyringiteminfo:15,gnomekeyringiteminfoflag:15,gnomekeyringitemtyp:15,gnomekeyringnetworkpassworddata:15,gnomekeyringoperationdonecallback:15,gnomekeyringoperationgetattributescallback:15,gnomekeyringoperationgetintcallback:15,gnomekeyringoperationgetiteminfocallback:15,gnomekeyringoperationgetkeyringinfocallback:15,gnomekeyringoperationgetlistcallback:15,gnomekeyringoperationgetstringcallback:15,gnomekeyringpasswordschema:[8,15],gnomekeyringpasswordschemaattribut:15,gnomekeyringresult:15,gobject:[13,14],gpointer_to_uint:13,grant:13,gtype:13,happen:13,has:13,hashtabl:[3,13],have:13,homepag:14,host:7,http:14,identifi:[4,7],idl:5,ids:13,ignor:[3,6,13],includ:13,info:[0,6,7,13,15,16],inform:[1,13,14],instead:[3,5,6,7,11,13],integ:[3,13],involv:13,io_error:[11,15],is_avail:[13,15],item:[1,3,4,6,7,8,11,13],item_ac_get_access_typ:[13,15],item_ac_get_display_nam:[13,15],item_ac_get_path_nam:[13,15],item_ac_set_access_typ:[13,15],item_ac_set_display_nam:[13,15],item_ac_set_path_nam:[13,15],item_application_secret:[10,15],item_create_sync:[13,15],item_delete_sync:[13,15],item_get_acl_sync:[13,15],item_get_attributes_sync:[13,15],item_get_info_full_sync:[13,15],item_get_info_sync:[13,15],item_grant_access_rights_sync:[13,15],item_id:[4,7,13],item_info_al:[10,15],item_set_acl_sync:[13,15],item_set_attributes_sync:[13,15],item_set_info_sync:[13,15],item_typ:8,item_type_mask:[10,15],iteminfo:[0,13,15,16],iteminfoflag:[12,13,15],itemtyp:[6,8,11,13,15],its:[13,14],just:[3,13],kei:[3,11,13,14],keyr:[4,5,6,7,10,11,13,14],keyring_already_exist:[11,15],keyring_nam:13,languag:[3,13],last:[5,6,8],last_typ:[11,15],libsecret:[1,2,3,4,5,11,12,13],like:13,list:[3,4,8,13,14],list_append_str:[3,15],list_append_uint32:[3,15],list_copi:[3,15],list_fre:[3,4,13,15],list_item_ids_sync:[13,15],list_keyring_names_sync:[13,15],list_new:[3,15],list_to_glist:[3,15],listinfo:14,load:13,locat:13,lock:[5,13],lock_all_sync:[13,15],lock_on_idl:13,lock_sync:[13,15],lock_timeout:13,longer:13,mai:[6,13],mail:14,mailman:14,make:13,manag:14,map:14,master:14,match:[11,13],mechan:13,memori:[1,3,4,10,13],messag:13,modifi:[5,6],most:13,mostli:[3,13],must:[5,8,13],my_schema:8,name:[3,4,6,7,8,9,13],necessari:13,need:[1,2,3,4,13],network:[7,11,13],network_password:[11,13,15],network_password_fre:[13,15],network_password_list_fre:[13,15],networkpassworddata:[13,15,16],never:[13,14],newli:[5,6,13],no_keyring_daemon:[11,15],no_match:[11,15],no_such_keyr:[11,15],non:13,none:[0,1,2,3,5,6,7,8,9,13],note:[11,13,15],noth:[5,13],number:[3,13],object:[0,5,6,7,8,13],occur:5,often:8,old:13,onc:13,onli:[3,10,12,13],oper:[0,4,11,13],operationdonecallback:[0,15],operationgetattributescallback:[0,15],operationgetintcallback:[0,15],operationgetiteminfocallback:[0,15],operationgetkeyringinfocallback:[0,15],operationgetstringcallback:[0,15],opretaion:13,option:13,org:14,origin:13,other:[7,14],otherwis:13,out_list:13,own:14,packag:14,pair:[3,13],paramet:[0,1,3,4,5,6,13],parent:14,part:13,pass:[3,5,6,13],password:[7,8,11,13,14],passwordschema:[9,15,16],passwordschemaattribut:[8,15,16],path:13,permiss:11,pk_storag:[11,15],pointer:[1,2,3,5,6,13],port:[7,13],possibl:13,predefin:8,previou:13,previous:13,problem:11,product:14,program:14,project:14,prompt:[11,13],protocol:[7,13],provid:[3,13],python:15,rather:13,read:[12,13,15],recoveri:13,refer:2,regist:13,relat:13,remot:13,remov:[12,15],replac:[3,13],request:13,requir:13,res:13,reserved1:8,reserved2:8,reserved3:8,restrict:11,result:[0,4,11,13,15],result_to_messag:[13,15],retriev:13,right:[1,13],said:13,save:13,schema:8,scheme:7,search:13,second:5,secret:[4,6,11,12,13,15],secret_collection_create_sync:13,secret_collection_delete_sync:13,secret_collection_for_alias_sync:13,secret_collection_get_cr:5,secret_collection_get_item:13,secret_collection_get_lock:5,secret_collection_get_modifi:5,secret_item_create_sync:13,secret_item_delete_sync:13,secret_item_get_attribut:13,secret_item_get_cr:6,secret_item_get_label:6,secret_item_get_modifi:6,secret_item_get_schema_nam:6,secret_item_get_secret:6,secret_item_set_attribut:6,secret_item_set_attributes_sync:13,secret_item_set_label:6,secret_item_set_secret:6,secret_password_clear_sync:13,secret_password_fre:13,secret_password_lookup_sync:13,secret_password_store_sync:13,secret_schema_compat_network:[7,13],secret_service_get_collect:13,secret_service_lock_sync:13,secret_service_search_sync:13,secret_service_set_alias_sync:13,secret_service_unlock_sync:13,secretcollect:[5,13],secretitem:[6,13],secretschema:11,secur:13,see:[5,13],self:3,sens:13,sensit:14,server:[7,13],session:[10,14,15],set:[3,5,6,13],set_default_keyring_sync:[13,15],set_display_nam:[6,15],set_info_sync:[13,15],set_lock_on_idl:[5,15],set_lock_timeout:[5,15],set_network_password_sync:[13,15],set_secret:[6,15],set_typ:[6,15],sever:14,share:7,should:[3,13],similar:14,sinc:[1,2,3,4,5,6,7,11,12,13],some:13,specifi:13,ssh:14,start:13,storag:11,store:[3,7,10,13,14],str:[0,3,4,6,7,9,13],string:[0,3,6,8,11,12,13,15],string_list_fre:[13,15],structur:[1,4,13,14],succcess:13,successfulli:11,suitabl:13,suppli:13,support:[3,5,11,12,13],symbol:14,take:13,tcp:7,termin:13,than:13,thei:13,them:13,thi:[3,5,8,13],through:13,time:[5,6],timeout:5,tracker:14,type:[1,2,3,4,5,6,7,8,9,11,12,13],types_allow:1,ufirst:13,uint32:[3,11,15],uint:8,unavail:15,union:3,unlock:[11,13],unlock_sync:[13,15],unref:[3,13],unsign:[3,13],updat:13,update_if_exist:13,use:[3,4,8,13,14],used:[3,4,11,13],useful:[3,13],user:[0,7,11,13],user_data:0,using:[1,2,3,4,5,13],usual:4,val:0,valu:[3,5,6,11,12,13],variou:[1,11],version:[1,2,3,4,5,6,7,11,12,13],want:[4,8],were:13,when:[1,2,3,4,5,13,14],whenev:13,where:13,whether:[5,13],which:[1,3,5,6,13,14],wiki:14,without:13,would:13,wouldn:13,write:[12,13,15],you:[3,4,8,13],zero:13},titles:["Callbacks","GnomeKeyring.AccessControl","GnomeKeyring.ApplicationRef","GnomeKeyring.Attribute","GnomeKeyring.Found","GnomeKeyring.Info","GnomeKeyring.ItemInfo","GnomeKeyring.NetworkPasswordData","GnomeKeyring.PasswordSchema","GnomeKeyring.PasswordSchemaAttribute","Constants","Enums","Flags","Functions","GnomeKeyring 1.0 (3.12.0)","Symbol Mapping","Structures"],titleterms:{"enum":11,"function":13,accesscontrol:1,api:14,applicationref:2,attribut:3,callback:0,constant:10,detail:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],field:[1,2,3,4,5,6,7,8,9],flag:12,found:4,gnomekeyr:[1,2,3,4,5,6,7,8,9,14],info:5,iteminfo:6,map:15,method:[1,2,3,4,5,6,7,8,9],networkpassworddata:7,passwordschema:8,passwordschemaattribut:9,structur:16,symbol:15}})