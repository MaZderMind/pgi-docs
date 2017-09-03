Search.setIndex({docnames:["callbacks","class-structs","classes","classes/Attribute","classes/Attributes","classes/Builder","classes/Enumerator","classes/EnumeratorClass","classes/Mechanism","classes/MechanismInfo","classes/Module","classes/ModuleClass","classes/ModuleInfo","classes/Object","classes/ObjectCache","classes/ObjectCacheIface","classes/ObjectClass","classes/Password","classes/PasswordClass","classes/Session","classes/SessionClass","classes/SessionInfo","classes/Slot","classes/SlotClass","classes/SlotInfo","classes/TokenInfo","classes/UriData","constants","enums","flags","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:50,filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/Attribute.rst","classes/Attributes.rst","classes/Builder.rst","classes/Enumerator.rst","classes/EnumeratorClass.rst","classes/Mechanism.rst","classes/MechanismInfo.rst","classes/Module.rst","classes/ModuleClass.rst","classes/ModuleInfo.rst","classes/Object.rst","classes/ObjectCache.rst","classes/ObjectCacheIface.rst","classes/ObjectClass.rst","classes/Password.rst","classes/PasswordClass.rst","classes/Session.rst","classes/SessionClass.rst","classes/SessionInfo.rst","classes/Slot.rst","classes/SlotClass.rst","classes/SlotInfo.rst","classes/TokenInfo.rst","classes/UriData.rst","constants.rst","enums.rst","flags.rst","functions.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"Gck.Attribute":{"new":[3,3,1,""],clear:[3,2,1,""],dump:[3,2,1,""],dup:[3,2,1,""],equal:[3,2,1,""],free:[3,2,1,""],get_boolean:[3,2,1,""],get_data:[3,2,1,""],get_date:[3,2,1,""],get_string:[3,2,1,""],get_ulong:[3,2,1,""],hash:[3,2,1,""],init_copy:[3,2,1,""],is_invalid:[3,2,1,""],new_boolean:[3,3,1,""],new_date:[3,3,1,""],new_empty:[3,3,1,""],new_invalid:[3,3,1,""],new_string:[3,3,1,""],new_ulong:[3,3,1,""]},"Gck.Attributes":{"new":[4,3,1,""],at:[4,2,1,""],contains:[4,2,1,""],count:[4,2,1,""],dump:[4,2,1,""],find:[4,2,1,""],find_boolean:[4,2,1,""],find_date:[4,2,1,""],find_string:[4,2,1,""],find_ulong:[4,2,1,""],ref:[4,2,1,""],ref_sink:[4,2,1,""],to_string:[4,2,1,""],unref:[4,3,1,""]},"Gck.Builder":{"new":[5,3,1,""],add_all:[5,2,1,""],add_attribute:[5,2,1,""],add_boolean:[5,2,1,""],add_data:[5,2,1,""],add_date:[5,2,1,""],add_empty:[5,2,1,""],add_invalid:[5,2,1,""],add_only:[5,2,1,""],add_string:[5,2,1,""],add_ulong:[5,2,1,""],clear:[5,2,1,""],copy:[5,2,1,""],end:[5,2,1,""],find:[5,2,1,""],find_boolean:[5,2,1,""],find_date:[5,2,1,""],find_string:[5,2,1,""],find_ulong:[5,2,1,""],init:[5,2,1,""],init_full:[5,2,1,""],ref:[5,2,1,""],set_all:[5,2,1,""],set_boolean:[5,2,1,""],set_data:[5,2,1,""],set_date:[5,2,1,""],set_empty:[5,2,1,""],set_invalid:[5,2,1,""],set_string:[5,2,1,""],set_ulong:[5,2,1,""],steal:[5,2,1,""],take_data:[5,2,1,""],unref:[5,3,1,""]},"Gck.BuilderFlags":{NONE:[28,4,1,""],SECURE_MEMORY:[28,4,1,""]},"Gck.Enumerator":{get_chained:[6,2,1,""],get_interaction:[6,2,1,""],get_object_type:[6,2,1,""],next:[6,2,1,""],next_async:[6,2,1,""],next_finish:[6,2,1,""],next_n:[6,2,1,""],set_chained:[6,2,1,""],set_interaction:[6,2,1,""],set_object_type:[6,2,1,""]},"Gck.Enumerator.props":{chained:[6,5,1,""],interaction:[6,5,1,""]},"Gck.Error":{PROBLEM:[28,4,1,""],get_quark:[28,3,1,""]},"Gck.MechanismInfo":{copy:[9,2,1,""],free:[9,2,1,""]},"Gck.Module":{do_authenticate_object:[10,2,1,""],do_authenticate_slot:[10,2,1,""],equal:[10,2,1,""],get_info:[10,2,1,""],get_path:[10,2,1,""],get_slots:[10,2,1,""],hash:[10,2,1,""],initialize:[10,3,1,""],initialize_async:[10,3,1,""],initialize_finish:[10,3,1,""],match:[10,2,1,""]},"Gck.Module.props":{functions:[10,5,1,""],path:[10,5,1,""]},"Gck.Module.signals":{authenticate_object:[10,0,1,""],authenticate_slot:[10,0,1,""]},"Gck.ModuleInfo":{copy:[12,2,1,""],free:[12,2,1,""]},"Gck.Object":{cache_lookup:[13,2,1,""],cache_lookup_async:[13,2,1,""],cache_lookup_finish:[13,2,1,""],destroy:[13,2,1,""],destroy_async:[13,2,1,""],destroy_finish:[13,2,1,""],equal:[13,2,1,""],from_handle:[13,3,1,""],get_async:[13,2,1,""],get_data:[13,2,1,""],get_data_async:[13,2,1,""],get_data_finish:[13,2,1,""],get_finish:[13,2,1,""],get_full:[13,2,1,""],get_handle:[13,2,1,""],get_module:[13,2,1,""],get_session:[13,2,1,""],get_template:[13,2,1,""],get_template_async:[13,2,1,""],get_template_finish:[13,2,1,""],hash:[13,2,1,""],set:[13,2,1,""],set_async:[13,2,1,""],set_finish:[13,2,1,""],set_template:[13,2,1,""],set_template_async:[13,2,1,""],set_template_finish:[13,2,1,""]},"Gck.Object.props":{handle:[13,5,1,""],module:[13,5,1,""],session:[13,5,1,""]},"Gck.ObjectCache":{do_fill:[14,2,1,""],fill:[14,2,1,""],set_attributes:[14,2,1,""],update:[14,2,1,""],update_async:[14,2,1,""],update_finish:[14,2,1,""]},"Gck.ObjectCache.props":{attributes:[14,5,1,""]},"Gck.Password":{get_key:[17,2,1,""],get_module:[17,2,1,""],get_token:[17,2,1,""]},"Gck.Password.props":{key:[17,5,1,""],module:[17,5,1,""],token:[17,5,1,""]},"Gck.Session":{create_object:[19,2,1,""],create_object_async:[19,2,1,""],create_object_finish:[19,2,1,""],decrypt:[19,2,1,""],decrypt_async:[19,2,1,""],decrypt_finish:[19,2,1,""],decrypt_full:[19,2,1,""],derive_key:[19,2,1,""],derive_key_async:[19,2,1,""],derive_key_finish:[19,2,1,""],derive_key_full:[19,2,1,""],encrypt:[19,2,1,""],encrypt_async:[19,2,1,""],encrypt_finish:[19,2,1,""],encrypt_full:[19,2,1,""],enumerate_objects:[19,2,1,""],find_handles:[19,2,1,""],find_handles_async:[19,2,1,""],find_handles_finish:[19,2,1,""],find_objects:[19,2,1,""],find_objects_async:[19,2,1,""],find_objects_finish:[19,2,1,""],from_handle:[19,3,1,""],generate_key_pair:[19,2,1,""],generate_key_pair_async:[19,2,1,""],generate_key_pair_finish:[19,2,1,""],generate_key_pair_full:[19,2,1,""],get_handle:[19,2,1,""],get_info:[19,2,1,""],get_interaction:[19,2,1,""],get_module:[19,2,1,""],get_options:[19,2,1,""],get_slot:[19,2,1,""],get_state:[19,2,1,""],init_pin:[19,2,1,""],init_pin_async:[19,2,1,""],init_pin_finish:[19,2,1,""],login:[19,2,1,""],login_async:[19,2,1,""],login_finish:[19,2,1,""],login_interactive:[19,2,1,""],login_interactive_async:[19,2,1,""],login_interactive_finish:[19,2,1,""],logout:[19,2,1,""],logout_async:[19,2,1,""],logout_finish:[19,2,1,""],open:[19,3,1,""],open_async:[19,3,1,""],open_finish:[19,3,1,""],set_interaction:[19,2,1,""],set_pin:[19,2,1,""],set_pin_async:[19,2,1,""],set_pin_finish:[19,2,1,""],sign:[19,2,1,""],sign_async:[19,2,1,""],sign_finish:[19,2,1,""],sign_full:[19,2,1,""],unwrap_key:[19,2,1,""],unwrap_key_async:[19,2,1,""],unwrap_key_finish:[19,2,1,""],unwrap_key_full:[19,2,1,""],verify:[19,2,1,""],verify_async:[19,2,1,""],verify_finish:[19,2,1,""],verify_full:[19,2,1,""],wrap_key:[19,2,1,""],wrap_key_async:[19,2,1,""],wrap_key_finish:[19,2,1,""],wrap_key_full:[19,2,1,""]},"Gck.Session.props":{app_data:[19,5,1,""],handle:[19,5,1,""],interaction:[19,5,1,""],module:[19,5,1,""],opening_flags:[19,5,1,""],options:[19,5,1,""],slot:[19,5,1,""]},"Gck.Session.signals":{discard_handle:[19,0,1,""]},"Gck.SessionInfo":{copy:[21,2,1,""],free:[21,2,1,""]},"Gck.SessionOptions":{AUTHENTICATE:[29,4,1,""],LOGIN_USER:[29,4,1,""],READ_ONLY:[29,4,1,""],READ_WRITE:[29,4,1,""]},"Gck.Slot":{enumerate_objects:[22,2,1,""],equal:[22,2,1,""],from_handle:[22,3,1,""],get_handle:[22,2,1,""],get_info:[22,2,1,""],get_mechanism_info:[22,2,1,""],get_mechanisms:[22,2,1,""],get_module:[22,2,1,""],get_token_info:[22,2,1,""],has_flags:[22,2,1,""],hash:[22,2,1,""],match:[22,2,1,""],open_session:[22,2,1,""],open_session_async:[22,2,1,""],open_session_finish:[22,2,1,""]},"Gck.Slot.props":{handle:[22,5,1,""],module:[22,5,1,""]},"Gck.SlotInfo":{copy:[24,2,1,""],free:[24,2,1,""]},"Gck.TokenInfo":{copy:[25,2,1,""],free:[25,2,1,""]},"Gck.UriData":{"new":[26,3,1,""],copy:[26,2,1,""],free:[26,2,1,""]},"Gck.UriError":{BAD_ENCODING:[28,4,1,""],BAD_SCHEME:[28,4,1,""],BAD_SYNTAX:[28,4,1,""],BAD_VERSION:[28,4,1,""],NOT_FOUND:[28,4,1,""],get_quark:[28,3,1,""]},"Gck.UriFlags":{FOR_ANY:[29,4,1,""],FOR_MODULE:[29,4,1,""],FOR_OBJECT:[29,4,1,""],FOR_TOKEN:[29,4,1,""],WITH_VERSION:[29,4,1,""]},Gck:{Allocator:[0,0,1,""],Attribute:[3,1,1,""],Attributes:[4,1,1,""],Builder:[5,1,1,""],BuilderFlags:[28,1,1,""],Enumerator:[6,1,1,""],EnumeratorClass:[7,1,1,""],Error:[28,1,1,""],INVALID:[27,5,1,""],MAJOR_VERSION:[27,5,1,""],MICRO_VERSION:[27,5,1,""],MINOR_VERSION:[27,5,1,""],Mechanism:[8,1,1,""],MechanismInfo:[9,1,1,""],Module:[10,1,1,""],ModuleClass:[11,1,1,""],ModuleInfo:[12,1,1,""],Object:[13,1,1,""],ObjectCache:[14,1,1,""],ObjectCacheIface:[15,1,1,""],ObjectClass:[16,1,1,""],Password:[17,1,1,""],PasswordClass:[18,1,1,""],Session:[19,1,1,""],SessionClass:[20,1,1,""],SessionInfo:[21,1,1,""],SessionOptions:[29,1,1,""],Slot:[22,1,1,""],SlotClass:[23,1,1,""],SlotInfo:[24,1,1,""],TokenInfo:[25,1,1,""],URI_FOR_MODULE_WITH_VERSION:[27,5,1,""],URI_FOR_OBJECT_ON_TOKEN:[27,5,1,""],URI_FOR_OBJECT_ON_TOKEN_AND_MODULE:[27,5,1,""],UriData:[26,1,1,""],UriError:[28,1,1,""],UriFlags:[29,1,1,""],VENDOR_CODE:[27,5,1,""],attributes_unref:[30,0,1,""],builder_unref:[30,0,1,""],error_get_quark:[30,0,1,""],list_get_boxed_type:[30,0,1,""],message_from_rv:[30,0,1,""],modules_enumerate_objects:[30,0,1,""],modules_enumerate_uri:[30,0,1,""],modules_get_slots:[30,0,1,""],modules_initialize_registered:[30,0,1,""],modules_initialize_registered_async:[30,0,1,""],modules_initialize_registered_finish:[30,0,1,""],modules_object_for_uri:[30,0,1,""],modules_objects_for_uri:[30,0,1,""],modules_token_for_uri:[30,0,1,""],modules_tokens_for_uri:[30,0,1,""],objects_from_handle_array:[30,0,1,""],slots_enumerate_objects:[30,0,1,""],uri_build:[30,0,1,""],uri_error_get_quark:[30,0,1,""],uri_parse:[30,0,1,""],value_to_boolean:[30,0,1,""],value_to_ulong:[30,0,1,""]}},objnames:{"0":["py","function","Python function"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"]},objtypes:{"0":"py:function","1":"py:class","2":"py:method","3":"py:classmethod","4":"py:attribute","5":"py:data"},terms:{"18446744073709551615l":27,"abstract":[6,10,13,17,19,22],"boolean":[3,4,5,30],"byte":[3,5,13,19,30],"case":[5,16],"class":[3,4,5,7,8,9,11,12,15,16,18,20,21,23,24,25,26,28,29,33],"default":[5,6,10,13,14,17,19,22],"enum":33,"float":[4,5,13,14,19,22,30],"function":[0,3,4,5,6,10,13,19,22,33],"int":[0,3,4,5,6,8,9,10,12,13,14,15,19,21,22,24,25,28,30],"long":[3,4,5],"new":[0,3,4,5,13,19,21,22,26,28,29,30,35],"null":[3,4,13],"public":[19,25],"return":[0,3,4,5,6,9,10,12,13,14,17,19,21,22,24,25,26,28,30],"short":[6,10,13,14,17,19,22],"true":[3,4,10,13,19,22,26],For:13,That:3,The:[0,3,4,5,6,8,9,10,12,13,14,15,16,17,18,19,21,22,24,25,27,30],These:[3,29],Use:[4,6,10,12,19,30],Used:[6,19,27],Useful:3,about:[9,10,12,17,19,21,24,25,26],absolut:10,accept:4,access:[3,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26],accord:[3,19],across:[5,6,30],act:0,actual:30,add:[4,5,10,13,14,15,22],add_al:[5,35],add_attribut:[5,35],add_boolean:[5,35],add_dat:[5,35],add_data:[5,35],add_empti:[5,35],add_invalid:[5,35],add_onli:[5,35],add_str:[5,35],add_ulong:[5,35],added:[4,5,13,14],addit:[4,19],aform:4,after:[5,6,13,17,19,22],again:5,against:[10,19,22],all:[3,4,5,6,19,21,22,26,28,29,30],alloc:[0,3,4,5,9,12,13,24,25,26,30,35],allow:[5,6,19,25],alreadi:[5,10,14],also:[3,5,6,28],although:5,alwai:[4,6],amount:[6,25],amp:[5,10,12],analog:[9,21,24,25],ani:[4,5,13,26],anoth:[3,4,5,19],any_recogn:26,any_unrecogn:26,anyth:26,app:19,app_data:19,appli:[9,24,25],applic:19,appropri:[5,13],arbitrari:5,argument:[4,5,27,30],around:[4,5,19],arrai:[4,5,19,30],ask:[6,19],assign:13,associ:[9,21,24,25],assum:4,async:19,asynchron:[6,10,13,14,19,22,30],asynchroun:13,asyncinit:19,asyncreadycallback:[6,10,13,14,19,22,30],asyncresult:[6,10,13,14,19,22,30],atribut:4,attr2:3,attr:[4,5,13,14,19,30],attr_count:6,attr_typ:[3,4,5,6,13,14],attribut:[0,5,6,13,14,15,16,19,22,26,28,30,35,36],attribute_typ:16,attributes_unref:[30,35],authent:[10,19,29,35],authenticate_object:[10,11],authenticate_slot:[10,11],auto:22,automat:5,avail:[13,19,22,25],bad:28,bad_encod:[28,35],bad_schem:[28,35],bad_syntax:[28,35],bad_vers:[28,35],base:[6,10,13,14,17,19,22,27,28,29,33],been:[3,5,15,16],begun:13,behavior:5,being:[4,17,19],belong:[13,19],between:5,bit:33,block:[13,14,19,22,30],bool:[3,4,5,10,13,14,19,22,26,30],both:[0,4,5],box:16,brows:33,bug:33,bugzilla:33,build:[5,30],builder2:5,builder3:5,builder:[4,28,30,35,36],builder_unref:[30,35],builderflag:[5,28,35],built:5,cach:[13,14,15],cache_lookup:[13,35],cache_lookup_async:[13,35],cache_lookup_finish:[13,35],call:[4,5,6,10,13,14,19,22,30],callback:[6,10,13,14,19,22,30,33],caller:[3,4],can:[5,6,9,10,13,19,22,29,30],cancel:[6,10,13,14,19,22,30],certain:4,certifiact:13,cgi:33,chain:6,chang:[4,5,19],check:[3,4,10,13,22],ck_attribut:3,ck_bbool:[3,4,30],ck_date:[3,4],ck_function_list:10,ck_mechanism_info:9,ck_module_info:12,ck_object_handl:[13,30],ck_session_handl:19,ck_session_info:21,ck_slot_id:22,ck_slot_info:24,ck_token_info:25,ck_ulong:[3,4,30],cka_class:5,cka_id:5,cka_label:3,ckr_ok:30,ckr_xxx:28,cks_xxx:19,cku_so:19,claim:19,classmethod:[3,4,5,10,13,19,22,26,28],clear:[3,5,13,35],clock:25,close:[13,19],code:[3,27,28,30],combin:29,compar:3,complet:[5,6,10,13,14,19,22,30],compon:[28,29,33],connect:10,constant:[5,33],construct_onli:[10,13,17,19,22],consum:[4,5,13,14,19,22,30],contain:[3,4,5,13,14,17,30,35],content:26,context:[26,30],contigu:30,conveni:13,convers:[3,30],convert:[4,30],copi:[3,5,9,12,21,24,25,26,35],correct:5,correctli:19,correspond:12,count:[4,35],creat:[3,4,5,6,10,13,19,22,29],create_object:[13,19,35],create_object_async:[19,35],create_object_finish:[19,35],crypto:[8,33],cryptoki:33,current:13,custom:27,data:[0,3,6,8,10,13,14,19,22,26,30],date:[3,4,5],dealloc:0,debian:33,debug:4,decrypt:[19,35],decrypt_async:[19,35],decrypt_finish:[19,35],decrypt_ful:[19,35],default_typ:15,delet:13,depend:[26,33],deprec:10,deriv:[6,16,19],derive_kei:[19,35],derive_key_async:[19,35],derive_key_finish:[19,35],derive_key_ful:[19,35],describ:10,descript:[3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,33],desir:[13,14],destori:13,destroi:[13,35],destroy_async:[13,35],destroy_finish:[13,35],determin:[4,6],devic:[21,27],device_error:21,directli:[3,5],discard:19,discard_handl:[19,20],display:[10,25],dispos:19,do_authenticate_object:10,do_authenticate_slot:10,do_fil:14,document:4,doesn:14,done:[3,4,9,12,13,14,19,21,22,24,25,30],dummi:26,dump:[3,4,35],dup:[3,35],duplic:3,dure:[13,19],each:[6,13],easier:12,easili:[10,13,22],effect:19,either:[4,5,6,10,13,22],elsewher:5,emit:19,empti:[3,4,5,10,19,22,30],encod:[3,28],encrypt:[19,35],encrypt_async:[19,35],encrypt_finish:[19,35],encrypt_ful:[19,35],end:[4,5,27,35],enumer:[2,15,16,19,22,30,31,35],enumerate_object:[19,22,35],enumeratorclass:[1,6,35],epoch:25,equal:[3,10,13,22,35],equival:5,error:[3,5,6,10,13,14,19,21,22,27,28,30,35],error_get_quark:[30,35],essenti:4,etc:33,even:5,eventu:5,except:13,exist:[5,14,22],expect:6,explitli:13,extra:13,fail:[6,10,19,22],failur:[6,13,19],fals:[10,13,22],far:[24,25],field:30,file:10,fill:[3,13,14,15,35],find:[4,5,19,30,35],find_boolean:[4,5,35],find_dat:[4,5,35],find_handl:[19,35],find_handles_async:[19,35],find_handles_finish:[19,35],find_object:[13,19,35],find_objects_async:[19,35],find_objects_finish:[19,35],find_str:[4,5,35],find_ulong:[4,5,35],finish:[10,30],firmwar:[24,25],firmware_version_major:[24,25],firmware_version_minor:[24,25],first:[4,5,13],flag:[5,6,9,10,12,13,14,17,19,21,22,24,25,28,30,33],for_ani:[29,35],for_modul:[29,35],for_object:[29,35],for_token:[29,35],format:[4,29],found:[3,4,5,28,30],free:[0,3,4,5,9,10,12,19,21,22,24,25,26,30,35],free_private_memori:25,free_public_memori:25,freed:[3,4,5,6,22,30],from:[3,5,6,10,13,16,19,21,26,27,28,30],from_handl:[13,19,22,35],full:[4,5],futur:4,g_array_fre:22,g_printerr:[3,4],gck:[0,1,2,27,28,29,30,31,32,34,35,36],gck_attribute_clear:35,gck_attribute_dump:35,gck_attribute_dup:35,gck_attribute_equ:35,gck_attribute_fre:35,gck_attribute_get_boolean:35,gck_attribute_get_d:35,gck_attribute_get_data:35,gck_attribute_get_str:35,gck_attribute_get_ulong:35,gck_attribute_hash:35,gck_attribute_init:35,gck_attribute_init_boolean:35,gck_attribute_init_copi:35,gck_attribute_init_d:35,gck_attribute_init_empti:35,gck_attribute_init_invalid:35,gck_attribute_init_str:35,gck_attribute_init_ulong:35,gck_attribute_is_invalid:35,gck_attribute_new:35,gck_attribute_new_boolean:35,gck_attribute_new_d:35,gck_attribute_new_empti:35,gck_attribute_new_invalid:35,gck_attribute_new_str:35,gck_attribute_new_ulong:35,gck_attributes_at:35,gck_attributes_contain:35,gck_attributes_count:35,gck_attributes_dump:35,gck_attributes_find:35,gck_attributes_find_boolean:35,gck_attributes_find_d:35,gck_attributes_find_str:35,gck_attributes_find_ulong:35,gck_attributes_new:35,gck_attributes_new_empti:[4,35],gck_attributes_ref:35,gck_attributes_ref_sink:35,gck_attributes_to_str:35,gck_attributes_unref:35,gck_builder_add_al:35,gck_builder_add_attribut:35,gck_builder_add_boolean:35,gck_builder_add_d:35,gck_builder_add_data:35,gck_builder_add_empti:35,gck_builder_add_except:35,gck_builder_add_exceptv:35,gck_builder_add_invalid:35,gck_builder_add_onli:35,gck_builder_add_onlyv:[5,35],gck_builder_add_str:35,gck_builder_add_ulong:35,gck_builder_clear:35,gck_builder_copi:35,gck_builder_end:35,gck_builder_find:35,gck_builder_find_boolean:35,gck_builder_find_d:35,gck_builder_find_str:35,gck_builder_find_ulong:35,gck_builder_init:[5,35],gck_builder_init_ful:35,gck_builder_new:35,gck_builder_non:35,gck_builder_ref:35,gck_builder_secure_memori:35,gck_builder_set_al:35,gck_builder_set_boolean:35,gck_builder_set_d:35,gck_builder_set_data:35,gck_builder_set_empti:35,gck_builder_set_invalid:35,gck_builder_set_str:35,gck_builder_set_ulong:35,gck_builder_st:35,gck_builder_take_data:35,gck_builder_unref:35,gck_enumerator_get_chain:35,gck_enumerator_get_interact:35,gck_enumerator_get_object_typ:35,gck_enumerator_next:35,gck_enumerator_next_async:35,gck_enumerator_next_finish:35,gck_enumerator_next_n:35,gck_enumerator_set_chain:35,gck_enumerator_set_interact:35,gck_enumerator_set_object_typ:35,gck_enumerator_set_object_type_ful:35,gck_error_get_quark:35,gck_error_module_problem:35,gck_invalid:35,gck_list_get_boxed_typ:35,gck_list_ref_copi:35,gck_list_unref_fre:[6,10,30,35],gck_major_vers:35,gck_mechanism_info_copi:35,gck_mechanism_info_fre:35,gck_mechanisms_check:35,gck_message_from_rv:35,gck_micro_vers:35,gck_minor_vers:35,gck_module_equ:35,gck_module_get_funct:35,gck_module_get_info:35,gck_module_get_path:35,gck_module_get_slot:35,gck_module_hash:35,gck_module_info_copi:35,gck_module_info_fre:35,gck_module_initi:35,gck_module_initialize_async:35,gck_module_initialize_finish:35,gck_module_match:35,gck_module_new:[10,35],gck_modules_enumerate_object:35,gck_modules_enumerate_uri:35,gck_modules_get_slot:35,gck_modules_initialize_regist:35,gck_modules_initialize_registered_async:35,gck_modules_initialize_registered_finish:35,gck_modules_object_for_uri:35,gck_modules_objects_for_uri:35,gck_modules_token_for_uri:35,gck_modules_tokens_for_uri:35,gck_object_cache_fil:35,gck_object_cache_get_attribut:35,gck_object_cache_lookup:35,gck_object_cache_lookup_async:35,gck_object_cache_lookup_finish:35,gck_object_cache_set_attribut:35,gck_object_cache_upd:35,gck_object_cache_update_async:35,gck_object_cache_update_finish:35,gck_object_destroi:35,gck_object_destroy_async:35,gck_object_destroy_finish:35,gck_object_equ:35,gck_object_from_handl:35,gck_object_get:[13,35],gck_object_get_async:35,gck_object_get_data:35,gck_object_get_data_async:35,gck_object_get_data_finish:35,gck_object_get_data_ful:35,gck_object_get_finish:35,gck_object_get_ful:35,gck_object_get_handl:35,gck_object_get_modul:35,gck_object_get_sess:35,gck_object_get_templ:35,gck_object_get_template_async:35,gck_object_get_template_finish:35,gck_object_hash:35,gck_object_set:35,gck_object_set_async:35,gck_object_set_finish:35,gck_object_set_templ:35,gck_object_set_template_async:35,gck_object_set_template_finish:35,gck_objects_from_handle_arrai:35,gck_password_get_kei:35,gck_password_get_modul:35,gck_password_get_token:35,gck_session_authent:35,gck_session_create_object:35,gck_session_create_object_async:35,gck_session_create_object_finish:35,gck_session_decrypt:35,gck_session_decrypt_async:35,gck_session_decrypt_finish:35,gck_session_decrypt_ful:35,gck_session_derive_kei:35,gck_session_derive_key_async:35,gck_session_derive_key_finish:35,gck_session_derive_key_ful:35,gck_session_encrypt:35,gck_session_encrypt_async:35,gck_session_encrypt_finish:35,gck_session_encrypt_ful:35,gck_session_enumerate_object:35,gck_session_find_handl:35,gck_session_find_handles_async:35,gck_session_find_handles_finish:35,gck_session_find_object:35,gck_session_find_objects_async:35,gck_session_find_objects_finish:35,gck_session_from_handl:35,gck_session_generate_key_pair:35,gck_session_generate_key_pair_async:35,gck_session_generate_key_pair_finish:35,gck_session_generate_key_pair_ful:35,gck_session_get_handl:35,gck_session_get_info:35,gck_session_get_interact:35,gck_session_get_modul:35,gck_session_get_opt:35,gck_session_get_slot:35,gck_session_get_st:35,gck_session_info_copi:35,gck_session_info_fre:35,gck_session_init_pin:35,gck_session_init_pin_async:35,gck_session_init_pin_finish:35,gck_session_login:35,gck_session_login_async:35,gck_session_login_finish:35,gck_session_login_interact:35,gck_session_login_interactive_async:35,gck_session_login_interactive_finish:35,gck_session_login_us:35,gck_session_logout:35,gck_session_logout_async:35,gck_session_logout_finish:35,gck_session_open:35,gck_session_open_async:35,gck_session_open_finish:35,gck_session_read_onli:35,gck_session_read_writ:35,gck_session_set_interact:35,gck_session_set_pin:35,gck_session_set_pin_async:35,gck_session_set_pin_finish:35,gck_session_sign:35,gck_session_sign_async:35,gck_session_sign_finish:35,gck_session_sign_ful:35,gck_session_unwrap_kei:35,gck_session_unwrap_key_async:35,gck_session_unwrap_key_finish:35,gck_session_unwrap_key_ful:35,gck_session_verifi:35,gck_session_verify_async:35,gck_session_verify_finish:35,gck_session_verify_ful:35,gck_session_wrap_kei:35,gck_session_wrap_key_async:35,gck_session_wrap_key_finish:35,gck_session_wrap_key_ful:35,gck_slot_enumerate_object:35,gck_slot_equ:35,gck_slot_from_handl:35,gck_slot_get_handl:35,gck_slot_get_info:35,gck_slot_get_mechan:35,gck_slot_get_mechanism_info:35,gck_slot_get_modul:35,gck_slot_get_token_info:35,gck_slot_has_flag:35,gck_slot_hash:35,gck_slot_info_copi:35,gck_slot_info_fre:35,gck_slot_match:35,gck_slot_open_sess:35,gck_slot_open_session_async:35,gck_slot_open_session_finish:35,gck_slot_open_session_ful:35,gck_slot_open_session_full_async:35,gck_slots_enumerate_object:35,gck_string_from_char:35,gck_string_to_char:35,gck_token_info_copi:35,gck_token_info_fre:35,gck_type_attribut:16,gck_uri_bad_encod:35,gck_uri_bad_schem:35,gck_uri_bad_syntax:35,gck_uri_bad_vers:35,gck_uri_build:35,gck_uri_data_copi:35,gck_uri_data_fre:35,gck_uri_data_new:35,gck_uri_error_get_quark:35,gck_uri_for_ani:35,gck_uri_for_modul:35,gck_uri_for_module_with_vers:35,gck_uri_for_object:35,gck_uri_for_object_on_token:35,gck_uri_for_object_on_token_and_modul:35,gck_uri_for_token:35,gck_uri_not_found:35,gck_uri_pars:35,gck_uri_with_vers:35,gck_value_to_boolean:35,gck_value_to_ulong:35,gck_vendor_cod:35,gckalloc:35,gckattribut:35,gckbuilder:[5,35],gckbuilderflag:35,gckenumer:35,gckenumeratorclass:35,gckerror:35,gckmechan:35,gckmechanisminfo:35,gckmodul:35,gckmoduleclass:35,gckmoduleinfo:35,gckobject:35,gckobjectcach:35,gckobjectcacheifac:35,gckobjectclass:35,gckpassword:35,gckpasswordclass:35,gcksession:35,gcksessionclass:35,gcksessioninfo:35,gcksessionopt:35,gckslot:35,gckslotclass:35,gckslotinfo:35,gcktokeninfo:35,gckuridata:35,gckurierror:35,gckuriflag:35,gcr:33,gener:[3,19],generate_key_pair:[19,35],generate_key_pair_async:[19,35],generate_key_pair_finish:[19,35],generate_key_pair_ful:[19,35],genum:28,get:[3,4,5,6,10,13,17,19,22,30],get_async:[13,35],get_boolean:[3,35],get_chain:[6,35],get_dat:[3,35],get_data:[3,13,35],get_data_async:[13,35],get_data_finish:[13,35],get_finish:[13,35],get_ful:[13,35],get_handl:[13,19,22,35],get_info:[10,19,22,35],get_interact:[6,19,35],get_kei:[17,35],get_mechan:[22,35],get_mechanism_info:[22,35],get_modul:[13,17,19,22,35],get_object_typ:[6,35],get_opt:[19,35],get_path:[10,35],get_quark:[28,35],get_sess:[13,35],get_slot:[10,19,35],get_stat:[19,35],get_str:[3,35],get_templ:[13,35],get_template_async:[13,35],get_template_finish:[13,35],get_token:[17,35],get_token_info:[22,35],get_ulong:[3,35],gflag:29,ginterfac:[14,19],gio:[6,10,13,14,17,18,19,22,30,31,33],gir1:33,given:[5,10,14,22,30],glib:[0,3,4,5,6,10,13,14,19,22,30,33],gnome:33,gnomekeyr:33,gobject:[6,7,10,11,13,14,15,16,17,19,20,22,23,28,29,30,31,33],gone:[4,5,30],gtype:[6,30],gulong:5,handl:[13,19,21,22,30],handler:19,hardwar:[24,25],hardware_version_major:[24,25],hardware_version_minor:[24,25],has:[5,6,13,15,16,22,25,29],has_flag:[22,35],hash:[3,10,13,22,35],hashtabl:[3,10,13,22],have:[3,5,6,19,30],held:3,hierarchi:33,hold:[10,12],homepag:33,how:4,http:33,ignor:13,immedi:[13,14,19,22,30],implement:[6,14,15,16,33],includ:13,increas:4,indefinit:[13,19,22],index:4,info:[9,10,12,19,21,22,24,25,30],inform:[9,12,17,19,21,22,24,25,26],inherit:[6,10,13,17,19,22],init:[5,19,35],init_copi:[3,35],init_ful:[5,28,35],init_pin:[19,35],init_pin_async:[19,35],init_pin_finish:[19,35],initi:[3,5,10,13,19,30,35],initialize_async:[10,35],initialize_finish:[10,35],input:19,insert:27,instead:10,integ:[10,13,22],intend:[10,13,22],interact:[6,19],interfac:[6,14,15,33],intern:3,intersect:26,invalid:[3,4,5,10,13,22,27,28,35],is_invalid:[3,35],its:[3,5,6,13],itself:13,keep:[4,5,19],kei:[3,9,13,17,19],keyr:33,know:3,kwarg:[6,10,13,17,19,22],label:[10,25],languag:3,last:[5,21,30],later:[4,5],length:[0,3,5,8,13,19,25],librari:[3,4,5,12,27,28,33],library_descript:12,library_version_major:12,library_version_minor:12,like:[0,19],limit:10,list:[6,10,19,22,27,30,33],list_get_boxed_typ:[30,35],listinfo:33,load:[10,28,30],locat:[5,19,30],lock:25,log:[4,19],login:[19,21,29,35],login_async:[19,35],login_finish:[19,35],login_interact:[19,35],login_interactive_async:[19,35],login_interactive_finish:[19,35],login_us:[6,19,29,35],logout:[19,35],logout_async:[19,35],logout_finish:[19,35],longer:5,lookup:[13,30],mai:[3,4,5,10,13,14,19,22,26],mail:33,mailman:33,major:[12,24,25,27],major_vers:[27,35],make:[5,9,12,13,21,24,25],mani:4,manner:[14,19],manufactur:[12,24,25],manufacturer_id:[12,24,25],map:33,mark:4,match:[4,10,19,22,26,27,29,30,35],max_key_s:9,max_object:6,max_pin_len:25,max_rw_session_count:25,max_session_count:25,maximum:[6,9,25],mech_typ:[19,22],mechan:[9,19,22,35,36],mechanisminfo:[22,35,36],memori:[0,3,5,13,21,25,28,30],memset:5,messag:30,message_from_rv:[30,35],micro:27,micro_vers:[27,35],min_key_s:9,min_pin_len:25,minimum:[9,25],minor:[12,24,25,27],minor_vers:[27,35],model:25,modifi:[3,5,10],modul:[2,6,12,13,17,19,22,26,27,28,29,30,31,35],module1:10,module2:10,module_info:26,moduleclass:[1,10,35],moduleinfo:[10,26,35,36],modules_enumerate_object:[30,35],modules_enumerate_uri:[30,35],modules_get_slot:[30,35],modules_initialize_regist:[30,35],modules_initialize_registered_async:[30,35],modules_initialize_registered_finish:[30,35],modules_object_for_uri:[30,35],modules_objects_for_uri:[30,35],modules_token_for_uri:[30,35],modules_tokens_for_uri:[30,35],more:[6,22,24,25,30],multipl:5,must:[3,4,5,6,13,15,16,17,19,22,30],n_default_typ:15,n_old_pin:19,n_paramet:8,n_result:19,name:[3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],necessari:[5,13,19,29],need:[6,13],new_boolean:[3,35],new_dat:[3,35],new_empti:[3,35],new_invalid:[3,35],new_pin:19,new_str:[3,35],new_ulong:[3,35],newli:[4,9,12,19,24,25,26,30],next:[6,35],next_async:[6,35],next_finish:[6,35],next_n:[6,35],non:[4,5,6,28,30],none:[0,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,22,23,26,28,30,35],normal:[4,5,13],not_found:[28,35],num11:[10,12],number:[4,6,15,25,27,29],object1:13,object2:13,object:[0,2,4,5,6,7,8,10,11,14,15,16,17,18,19,20,22,23,25,26,27,29,30,31,35],object_handl:[13,30],object_typ:6,objectcach:[6,13,15,34,35],objectcacheifac:[14,32,35],objectclass:[1,6,7,10,11,13,17,19,20,22,23,35],objects_from_handle_arrai:[30,35],occur:[6,13,19,21,22,30],old:19,old_pin:19,onc:30,one:[4,5,6,19,22],onli:[3,5,10,13,29,30],only_typ:5,open:[6,13,19,21,22,25,29,30,35],open_async:[19,35],open_finish:[19,35],open_sess:[19,22,35],open_session_async:[22,35],open_session_finish:[22,35],opening_flag:19,oper:[4,6,8,10,13,14,19,21,22,30],optim:5,option:[10,13,14,19,22,29,30],order:30,org:33,origin:27,other:[4,5,30],otherwis:[5,13,19],out:[4,19],outstand:[4,30],overridden:14,own:5,ownership:[4,5],packag:33,pageabl:[5,28],pair:19,paramet:[0,3,4,5,6,8,10,13,14,19,22,30],parent:[6,7,10,11,13,15,16,17,18,19,20,22,23,33],pars:[3,26,29,30,33],part:[22,26,29,30],pass:[3,4,5,6,10,13,14,19,22,30],password:[2,10,19,31,35],passwordclass:[1,17,35],path:[10,19],perform:[3,4,13],period:[13,19,22],permit:5,pick:19,piec:28,pin:[6,19,25],pkc:[3,5,10,12,13,14,17,19,22,26,28,29,30,33],pkcs11:[3,9,10,13,17,19,21,22,24,25,27],pkcs11_version_major:12,pkcs11_version_minor:12,place:5,point:[10,13,22],pointer:[5,10,13,19,22],pool:19,popul:15,possibl:10,present:[5,10,14,30],print:4,privat:[5,19,25],private_attr:19,private_kei:19,problem:[28,35],product:33,project:33,prompt:19,prop:[6,10,13,14,17,19,22],properti:16,protect:19,public_attr:19,public_kei:19,python:35,rais:[6,10,13,14,19,22,30],rather:4,raw:[3,10,13,19,22,30],read:[13,25,29],read_onli:[19,29,35],read_writ:[29,35],readabl:[6,10,13,14,17,19,22,30],readi:6,realloc:[0,5],receiv:[10,19],recogn:29,recycl:22,ref:[4,5,35],ref_sink:[4,5,35],refer:[4,5,13,30],referenc:[4,5,13],reflect:10,regist:30,releas:[4,5,6,9,10,12,19,21,22,24,25,30],relev:[28,30],remain:[3,6],repres:[3,8,9,10,13,17,19,22,24,25,26],request:[17,19],reserv:[4,6,7,10,11,13,15,16,17,18,19,20,22,23],resourc:[9,24,25],respect:6,result:[3,4,5,6,10,13,14,19,22,26,28,30],retriev:[4,6,13,15,16],reus:22,right:[3,4],routin:5,run:6,run_last:[10,19],rw_session_count:25,safe:[14,15],same:[3,5,10,13,22],scheme:28,scope:5,script:3,second:[3,10,13,22,25],secure_memori:[5,28,35],see:30,seen:6,self:[3,4,13],sens:5,serial:25,serial_numb:25,session:[2,6,10,13,21,22,25,29,30,31,35],session_count:25,session_handl:19,session_opt:[6,19,30],sessionclass:[1,19,35],sessioninfo:[19,35,36],sessionopt:[6,19,22,29,30,35],set:[0,3,4,5,6,10,13,14,15,16,17,19,22,25,26,30,35],set_al:[5,35],set_async:[13,35],set_attribut:[14,35],set_boolean:[5,35],set_chain:[6,35],set_dat:[5,35],set_data:[5,35],set_empti:[5,35],set_finish:[13,35],set_interact:[6,10,19,35],set_invalid:[5,35],set_object_typ:[6,15,16,35],set_pin:[19,35],set_pin_async:[19,35],set_pin_finish:[19,35],set_str:[5,35],set_templ:[13,35],set_template_async:[13,35],set_template_finish:[13,35],set_ulong:[5,35],setup:[15,16,19,22,30],shadow:35,share:[5,28],should:[3,4,5,6,9,10,13,15,19,22,24,25,26,30],sign:[19,35],sign_async:[19,35],sign_finish:[19,35],sign_ful:[19,35],signatur:19,signifi:28,similar:[3,10,13,22],simpli:[5,13],sinc:[10,25,26],singl:5,size:[4,5,9],sizeof:5,slot1:22,slot2:22,slot:[2,10,17,19,21,24,25,30,31,35],slot_descript:24,slot_id:[21,22],slotclass:[1,22,35],slotinfo:[22,35,36],slots_enumerate_object:[30,35],sourc:[3,4,5,6,9,10,12,13,14,17,19,21,22,24,25,26,28,30],spec:3,special:28,specif:[0,3,8,19,27,29],specifi:[3,4,5,6,13,22,30],src:3,stack:[5,30],standard:[5,12,19],state:[3,5,19,21],statu:13,steal:[5,35],stolen:5,storag:13,store:[4,13,19,25,30],str:[3,4,5,10,12,24,25,30],stream:19,string:[3,4,5,10,12,24,25,30],struct:[3,6,10,13,17,19,22],structur:[3,4,6,9,10,12,13,14,17,19,21,22,24,25,26,33],style:5,subclass:[6,10,13,17,19,22],succeed:[13,19],success:[13,14,19,30],successfulli:13,suppos:3,symbol:33,syntax:28,system:[4,10],take:5,take_data:[5,35],taken:5,templat:13,termin:[3,4,12,13,27],text:3,than:4,them:[4,5,13],themselv:4,thi:[0,3,4,5,6,9,10,12,13,14,16,17,19,21,22,24,25,27,30],those:[5,19],thread:[14,15],through:13,tlsinteract:[6,19],tlspassword:[17,18,31],tlspasswordclass:[17,18],to_str:[4,35],token:[6,10,17,22,25,26,27,29,30],token_info:26,token_pres:[10,30],tokeninfo:[22,26,35,36],total:25,total_private_memori:25,total_public_memori:25,tracker:33,treat:[4,26],two:[3,5,10,13,22],type:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,30],typeinterfac:15,ulong:3,unavail:35,uncondition:5,unconditition:5,undefin:[3,5],underli:[10,13,22],unless:3,unlock:17,unrecogn:26,unref:[4,5,6,13,19,30,35],unrefer:[4,5,22,30],unreferenc:[5,13,17],unsign:[3,4,5],unsupport:26,until:[5,13],unwrap:19,unwrap_kei:[19,35],unwrap_key_async:[19,35],unwrap_key_finish:[19,35],unwrap_key_ful:[19,35],updat:[13,14,35],update_async:[14,35],update_finish:[14,35],uri:[10,22,26,27,28,29,30],uri_build:[30,35],uri_data:30,uri_error_get_quark:[30,35],uri_for_module_with_vers:[27,35],uri_for_object_on_token:[27,35],uri_for_object_on_token_and_modul:[27,35],uri_pars:[30,35],uridata:[10,22,30,35,36],urierror:[28,35],uriflag:[27,29,30,35],usabl:[24,25],use:[3,5,12,13,14,17,19,22,28,30],used:[0,3,5,6,8,9,10,13,19,22,27,28,29,30],useful:[3,4],user:[6,19,21,29,30],user_data:[6,10,13,14,19,22,30],user_typ:19,uses:4,using:[3,4,5,6,15,16,21],usual:[3,10,19,26,28],utc_tim:25,valid:[0,3,5],valu:[3,4,5,6,10,13,14,17,19,22,28,29,30],value_to_boolean:[30,35],value_to_ulong:[30,35],variabl:[5,27],variou:[5,9,19,21,24,25,26,28,30],vendor_cod:[27,35],verifi:[19,35],verify_async:[19,35],verify_finish:[19,35],verify_ful:[19,35],version:[10,12,13,14,24,25,27,28,29,30],via:[10,19],wai:[5,13],well:3,were:[5,13,26,30],when:[0,3,4,5,6,9,10,12,13,14,16,19,21,22,24,25,30],where:10,whether:[3,4,5,6,10,13,14,19,22,26,30],which:[4,5,6,10,13,14,15,16,17,19,22,26,29,30],wiki:33,wish:[4,5],with_vers:[29,35],word:4,would:[13,19],wrap:19,wrap_kei:[19,35],wrap_key_async:[19,35],wrap_key_finish:[19,35],wrap_key_ful:[19,35],wrapper:[19,33],writabl:[6,10,13,14,17,19,22],write:[25,29],you:[3,4,5,9,13,22,24,25,30],zero:[0,5,6]},titles:["Callbacks","Class Structures","Classes","Gck.Attribute","Gck.Attributes","Gck.Builder","Gck.Enumerator","Gck.EnumeratorClass","Gck.Mechanism","Gck.MechanismInfo","Gck.Module","Gck.ModuleClass","Gck.ModuleInfo","Gck.Object","Gck.ObjectCache","Gck.ObjectCacheIface","Gck.ObjectClass","Gck.Password","Gck.PasswordClass","Gck.Session","Gck.SessionClass","Gck.SessionInfo","Gck.Slot","Gck.SlotClass","Gck.SlotInfo","Gck.TokenInfo","Gck.UriData","Constants","Enums","Flags","Functions","Hierarchy","Interface Structures","Gck 1 (3.20.0)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[1,2,6,10,13,14,17,19,22],"enum":28,"function":30,api:33,attribut:[3,4],builder:5,callback:0,constant:27,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],enumer:6,enumeratorclass:7,field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],flag:29,gck:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,33],hierarchi:31,interfac:[32,34],map:35,mechan:8,mechanisminfo:9,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],modul:10,moduleclass:11,moduleinfo:12,object:13,objectcach:14,objectcacheifac:15,objectclass:16,password:17,passwordclass:18,properti:[6,10,13,14,17,19,22],session:19,sessionclass:20,sessioninfo:21,signal:[6,10,13,14,17,19,22],slot:22,slotclass:23,slotinfo:24,structur:[1,32,36],symbol:35,tokeninfo:25,uridata:26,virtual:[6,10,13,14,17,19,22]}})