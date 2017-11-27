Search.setIndex({docnames:["callbacks","class-structs","classes","classes/ColumnModel","classes/ColumnModelClass","classes/ColumnModelPrivate","classes/DisplayAdapter","classes/DisplayAdapterClass","classes/DisplayAdapterPrivate","classes/GroupModel","classes/GroupModelClass","classes/GroupModelPrivate","classes/IKeyboardObject","classes/IKeyboardObjectIface","classes/IScannableGroup","classes/IScannableGroupIface","classes/IScannableItem","classes/IScannableItemIface","classes/KeyModel","classes/KeyModelClass","classes/KeyModelPrivate","classes/KeyboardModel","classes/KeyboardModelClass","classes/KeyboardModelPrivate","classes/KeyboardService","classes/KeyboardServiceClass","classes/KeyboardServicePrivate","classes/LevelModel","classes/LevelModelClass","classes/LevelModelPrivate","classes/NullAdapter","classes/NullAdapterClass","classes/NullAdapterPrivate","classes/RowModel","classes/RowModelClass","classes/RowModelPrivate","classes/ScannableGroup","classes/ScannableGroupClass","classes/ScannableGroupPrivate","classes/Scanner","classes/ScannerClass","classes/ScannerPrivate","classes/XAdapter","classes/XAdapterClass","classes/XAdapterPrivate","enums","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:52,filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/ColumnModel.rst","classes/ColumnModelClass.rst","classes/ColumnModelPrivate.rst","classes/DisplayAdapter.rst","classes/DisplayAdapterClass.rst","classes/DisplayAdapterPrivate.rst","classes/GroupModel.rst","classes/GroupModelClass.rst","classes/GroupModelPrivate.rst","classes/IKeyboardObject.rst","classes/IKeyboardObjectIface.rst","classes/IScannableGroup.rst","classes/IScannableGroupIface.rst","classes/IScannableItem.rst","classes/IScannableItemIface.rst","classes/KeyModel.rst","classes/KeyModelClass.rst","classes/KeyModelPrivate.rst","classes/KeyboardModel.rst","classes/KeyboardModelClass.rst","classes/KeyboardModelPrivate.rst","classes/KeyboardService.rst","classes/KeyboardServiceClass.rst","classes/KeyboardServicePrivate.rst","classes/LevelModel.rst","classes/LevelModelClass.rst","classes/LevelModelPrivate.rst","classes/NullAdapter.rst","classes/NullAdapterClass.rst","classes/NullAdapterPrivate.rst","classes/RowModel.rst","classes/RowModelClass.rst","classes/RowModelPrivate.rst","classes/ScannableGroup.rst","classes/ScannableGroupClass.rst","classes/ScannableGroupPrivate.rst","classes/Scanner.rst","classes/ScannerClass.rst","classes/ScannerPrivate.rst","classes/XAdapter.rst","classes/XAdapterClass.rst","classes/XAdapterPrivate.rst","enums.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"Caribou.ColumnModel":{"new":[3,2,1,""],first_key:[3,1,1,""],get_key:[3,1,1,""]},"Caribou.DisplayAdapter":{do_get_current_group:[6,1,1,""],do_get_groups:[6,1,1,""],do_keyval_press:[6,1,1,""],do_keyval_release:[6,1,1,""],do_mod_latch:[6,1,1,""],do_mod_lock:[6,1,1,""],do_mod_unlatch:[6,1,1,""],do_mod_unlock:[6,1,1,""],do_register_button_func:[6,1,1,""],do_register_key_func:[6,1,1,""],get_current_group:[6,1,1,""],get_default:[6,2,1,""],get_display:[6,1,1,""],get_groups:[6,1,1,""],keyval_press:[6,1,1,""],keyval_release:[6,1,1,""],mod_latch:[6,1,1,""],mod_lock:[6,1,1,""],mod_unlatch:[6,1,1,""],mod_unlock:[6,1,1,""],register_button_func:[6,1,1,""],register_key_func:[6,1,1,""],set_default:[6,2,1,""]},"Caribou.DisplayAdapter.props":{display:[6,3,1,""]},"Caribou.DisplayAdapter.signals":{config_changed:[6,4,1,""],group_changed:[6,4,1,""],modifiers_changed:[6,4,1,""]},"Caribou.GroupModel":{"new":[9,2,1,""],create_group_name:[9,2,1,""],get_active_level:[9,1,1,""],get_level:[9,1,1,""],get_levels:[9,1,1,""]},"Caribou.GroupModel.props":{active_level:[9,3,1,""]},"Caribou.IKeyboardObject":{do_get_children:[12,1,1,""],do_get_keys:[12,1,1,""],get_children:[12,1,1,""],get_keys:[12,1,1,""]},"Caribou.IKeyboardObject.signals":{key_clicked:[12,4,1,""],key_pressed:[12,4,1,""],key_released:[12,4,1,""]},"Caribou.IScannableGroup":{child_select:[14,1,1,""],child_step:[14,1,1,""],do_child_select:[14,1,1,""],do_child_step:[14,1,1,""],do_get_scan_children:[14,1,1,""],do_get_scan_grouping:[14,1,1,""],do_get_selected_path:[14,1,1,""],do_get_step_path:[14,1,1,""],do_scan_reset:[14,1,1,""],do_set_scan_grouping:[14,1,1,""],get_scan_children:[14,1,1,""],get_scan_grouping:[14,1,1,""],get_selected_path:[14,1,1,""],get_step_path:[14,1,1,""],scan_reset:[14,1,1,""],set_scan_grouping:[14,1,1,""]},"Caribou.IScannableGroup.props":{scan_grouping:[14,3,1,""]},"Caribou.IScannableGroup.signals":{scan_cleared:[14,4,1,""],selected_item_changed:[14,4,1,""],step_item_changed:[14,4,1,""]},"Caribou.IScannableItem":{do_get_scan_selected:[16,1,1,""],do_get_scan_stepping:[16,1,1,""],do_set_scan_selected:[16,1,1,""],do_set_scan_stepping:[16,1,1,""],get_scan_selected:[16,1,1,""],get_scan_stepping:[16,1,1,""],set_scan_selected:[16,1,1,""],set_scan_stepping:[16,1,1,""]},"Caribou.IScannableItem.props":{scan_selected:[16,3,1,""],scan_stepping:[16,3,1,""]},"Caribou.KeyModel":{"new":[18,2,1,""],activate:[18,1,1,""],get_align:[18,1,1,""],get_extended_keys:[18,1,1,""],get_is_modifier:[18,1,1,""],get_keyval:[18,1,1,""],get_label:[18,1,1,""],get_name:[18,1,1,""],get_repeatable:[18,1,1,""],get_show_subkeys:[18,1,1,""],get_text:[18,1,1,""],get_toggle:[18,1,1,""],get_width:[18,1,1,""],press:[18,1,1,""],release:[18,1,1,""],set_align:[18,1,1,""],set_is_modifier:[18,1,1,""],set_label:[18,1,1,""],set_repeatable:[18,1,1,""],set_toggle:[18,1,1,""],set_width:[18,1,1,""]},"Caribou.KeyModel.props":{align:[18,3,1,""],is_modifier:[18,3,1,""],keyval:[18,3,1,""],label:[18,3,1,""],name:[18,3,1,""],repeatable:[18,3,1,""],show_subkeys:[18,3,1,""],text:[18,3,1,""],toggle:[18,3,1,""],width:[18,3,1,""]},"Caribou.KeyModel.signals":{key_hold:[18,4,1,""],key_hold_end:[18,4,1,""]},"Caribou.KeyboardModel":{"new":[21,2,1,""],get_active_group:[21,1,1,""],get_group:[21,1,1,""],get_groups:[21,1,1,""],get_keyboard_file:[21,1,1,""],get_keyboard_type:[21,1,1,""]},"Caribou.KeyboardModel.props":{active_group:[21,3,1,""],keyboard_file:[21,3,1,""],keyboard_type:[21,3,1,""]},"Caribou.KeyboardModel.signals":{group_added:[21,4,1,""],group_removed:[21,4,1,""]},"Caribou.KeyboardService":{do_hide:[24,1,1,""],do_name_lost:[24,1,1,""],do_set_cursor_location:[24,1,1,""],do_set_entry_location:[24,1,1,""],do_show:[24,1,1,""],hide:[24,1,1,""],name_lost:[24,1,1,""],register_keyboard:[24,1,1,""],set_cursor_location:[24,1,1,""],set_entry_location:[24,1,1,""],show:[24,1,1,""]},"Caribou.LevelModel":{"new":[27,2,1,""],get_mode:[27,1,1,""],get_rows:[27,1,1,""]},"Caribou.LevelModel.props":{mode:[27,3,1,""]},"Caribou.LevelModel.signals":{level_toggled:[27,4,1,""]},"Caribou.ModifierState":{LATCHED:[45,5,1,""],LOCKED:[45,5,1,""],NONE:[45,5,1,""]},"Caribou.NullAdapter":{"new":[30,2,1,""]},"Caribou.RowModel":{"new":[33,2,1,""],get_columns:[33,1,1,""]},"Caribou.ScanGrouping":{LINEAR:[45,5,1,""],NONE:[45,5,1,""],ROWS:[45,5,1,""],SUBGROUPS:[45,5,1,""]},"Caribou.ScannableGroup":{child_select:[36,1,1,""],do_child_select:[36,1,1,""],do_get_scan_children:[36,1,1,""],get_scan_children:[36,1,1,""]},"Caribou.Scanner":{"new":[39,2,1,""],get_autorestart:[39,1,1,""],get_bind_settings:[39,1,1,""],get_inverse_scanning:[39,1,1,""],get_keyboard_key:[39,1,1,""],get_mouse_button:[39,1,1,""],get_scan_cycles:[39,1,1,""],get_scan_enabled:[39,1,1,""],get_scan_grouping:[39,1,1,""],get_step_time:[39,1,1,""],get_switch_device:[39,1,1,""],reset:[39,1,1,""],set_autorestart:[39,1,1,""],set_inverse_scanning:[39,1,1,""],set_keyboard:[39,1,1,""],set_keyboard_key:[39,1,1,""],set_mouse_button:[39,1,1,""],set_scan_cycles:[39,1,1,""],set_scan_enabled:[39,1,1,""],set_scan_grouping:[39,1,1,""],set_step_time:[39,1,1,""],set_switch_device:[39,1,1,""]},"Caribou.Scanner.props":{autorestart:[39,3,1,""],bind_settings:[39,3,1,""],inverse_scanning:[39,3,1,""],keyboard_key:[39,3,1,""],mouse_button:[39,3,1,""],scan_cycles:[39,3,1,""],scan_enabled:[39,3,1,""],scan_grouping:[39,3,1,""],step_time:[39,3,1,""],switch_device:[39,3,1,""]},"Caribou.XAdapter":{"new":[42,2,1,""]},Caribou:{ColumnModel:[3,0,1,""],ColumnModelClass:[4,0,1,""],ColumnModelPrivate:[5,0,1,""],DisplayAdapter:[6,0,1,""],DisplayAdapterClass:[7,0,1,""],DisplayAdapterPrivate:[8,0,1,""],GroupModel:[9,0,1,""],GroupModelClass:[10,0,1,""],GroupModelPrivate:[11,0,1,""],IKeyboardObject:[12,0,1,""],IKeyboardObjectIface:[13,0,1,""],IScannableGroup:[14,0,1,""],IScannableGroupIface:[15,0,1,""],IScannableItem:[16,0,1,""],IScannableItemIface:[17,0,1,""],KeyButtonCallback:[0,4,1,""],KeyModel:[18,0,1,""],KeyModelClass:[19,0,1,""],KeyModelPrivate:[20,0,1,""],KeyboardModel:[21,0,1,""],KeyboardModelClass:[22,0,1,""],KeyboardModelPrivate:[23,0,1,""],KeyboardService:[24,0,1,""],KeyboardServiceClass:[25,0,1,""],KeyboardServicePrivate:[26,0,1,""],LevelModel:[27,0,1,""],LevelModelClass:[28,0,1,""],LevelModelPrivate:[29,0,1,""],ModifierState:[45,0,1,""],NullAdapter:[30,0,1,""],NullAdapterClass:[31,0,1,""],NullAdapterPrivate:[32,0,1,""],RowModel:[33,0,1,""],RowModelClass:[34,0,1,""],RowModelPrivate:[35,0,1,""],ScanGrouping:[45,0,1,""],ScannableGroup:[36,0,1,""],ScannableGroupClass:[37,0,1,""],ScannableGroupPrivate:[38,0,1,""],Scanner:[39,0,1,""],ScannerClass:[40,0,1,""],ScannerPrivate:[41,0,1,""],XAdapter:[42,0,1,""],XAdapterClass:[43,0,1,""],XAdapterPrivate:[44,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"abstract":[3,6,9,18,21,24,27,30,33,36,39,42],"class":[4,5,7,8,10,11,13,15,17,19,20,22,23,25,26,28,29,31,32,34,35,37,38,40,41,43,44,45,48],"default":[6,9,14,16,18,21,27,39],"enum":48,"float":[18,39],"int":[0,3,6,14,18,24,39],"new":[3,9,18,21,27,30,33,39,42,50],"return":[3,6,9,12,14,16,18,21,27,30,33,36,39,42],"short":[6,9,12,14,16,18,21,27,39],"switch":[39,48],"true":39,Yes:[6,24,36],access:[3,4,6,7,9,10,13,15,17,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43],activ:[9,18,21,50],active_group:21,active_level:9,adapt:6,added:21,align:18,applic:48,assist:48,autorestart:39,base:[3,6,9,12,14,16,18,21,24,27,30,33,36,39,42,45],bind:39,bind_set:39,bool:[0,6,16,18,39],brows:48,bug:48,bugzilla:48,button:[6,39],callback:48,carib:[0,1,2,45,46,47,49,50,51],caribou_column_model_first_kei:50,caribou_column_model_get_kei:50,caribou_column_model_new:50,caribou_display_adapter_get_current_group:50,caribou_display_adapter_get_default:50,caribou_display_adapter_get_displai:50,caribou_display_adapter_get_group:50,caribou_display_adapter_keyval_press:50,caribou_display_adapter_keyval_releas:50,caribou_display_adapter_mod_latch:50,caribou_display_adapter_mod_lock:50,caribou_display_adapter_mod_unlatch:50,caribou_display_adapter_mod_unlock:50,caribou_display_adapter_register_button_func:50,caribou_display_adapter_register_key_func:50,caribou_display_adapter_set_default:50,caribou_group_model_create_group_nam:50,caribou_group_model_get_active_level:50,caribou_group_model_get_level:50,caribou_group_model_new:50,caribou_ikeyboard_object_get_children:50,caribou_ikeyboard_object_get_kei:50,caribou_iscannable_group_child_select:50,caribou_iscannable_group_child_step:50,caribou_iscannable_group_get_scan_children:50,caribou_iscannable_group_get_scan_group:50,caribou_iscannable_group_get_selected_path:50,caribou_iscannable_group_get_step_path:50,caribou_iscannable_group_scan_reset:50,caribou_iscannable_group_set_scan_group:50,caribou_iscannable_item_get_scan_select:50,caribou_iscannable_item_get_scan_step:50,caribou_iscannable_item_set_scan_select:50,caribou_iscannable_item_set_scan_step:50,caribou_key_model_activ:50,caribou_key_model_get_align:50,caribou_key_model_get_extended_kei:50,caribou_key_model_get_is_modifi:50,caribou_key_model_get_keyv:50,caribou_key_model_get_label:50,caribou_key_model_get_nam:50,caribou_key_model_get_repeat:50,caribou_key_model_get_show_subkei:50,caribou_key_model_get_text:50,caribou_key_model_get_toggl:50,caribou_key_model_get_width:50,caribou_key_model_new:50,caribou_key_model_press:50,caribou_key_model_releas:50,caribou_key_model_set_align:50,caribou_key_model_set_is_modifi:50,caribou_key_model_set_label:50,caribou_key_model_set_repeat:50,caribou_key_model_set_toggl:50,caribou_key_model_set_width:50,caribou_keyboard_model_get_active_group:50,caribou_keyboard_model_get_group:50,caribou_keyboard_model_get_keyboard_fil:50,caribou_keyboard_model_get_keyboard_typ:50,caribou_keyboard_model_new:50,caribou_keyboard_service_hid:50,caribou_keyboard_service_name_lost:50,caribou_keyboard_service_register_keyboard:50,caribou_keyboard_service_set_cursor_loc:50,caribou_keyboard_service_set_entry_loc:50,caribou_keyboard_service_show:50,caribou_level_model_get_mod:50,caribou_level_model_get_row:50,caribou_level_model_new:50,caribou_modifier_state_latch:50,caribou_modifier_state_lock:50,caribou_modifier_state_non:50,caribou_null_adapter_new:50,caribou_row_model_get_column:50,caribou_row_model_new:50,caribou_scan_grouping_linear:50,caribou_scan_grouping_non:50,caribou_scan_grouping_row:50,caribou_scan_grouping_subgroup:50,caribou_scannable_group_child_select:50,caribou_scannable_group_get_scan_children:50,caribou_scanner_get_autorestart:50,caribou_scanner_get_bind_set:50,caribou_scanner_get_inverse_scan:50,caribou_scanner_get_keyboard_kei:50,caribou_scanner_get_mouse_button:50,caribou_scanner_get_scan_cycl:50,caribou_scanner_get_scan_en:50,caribou_scanner_get_scan_group:50,caribou_scanner_get_step_tim:50,caribou_scanner_get_switch_devic:50,caribou_scanner_new:50,caribou_scanner_reset:50,caribou_scanner_set_autorestart:50,caribou_scanner_set_inverse_scan:50,caribou_scanner_set_keyboard:50,caribou_scanner_set_keyboard_kei:50,caribou_scanner_set_mouse_button:50,caribou_scanner_set_scan_cycl:50,caribou_scanner_set_scan_en:50,caribou_scanner_set_scan_group:50,caribou_scanner_set_step_tim:50,caribou_scanner_set_switch_devic:50,caribou_xadapter_new:50,cariboucolumnmodel:50,cariboucolumnmodelclass:50,cariboucolumnmodelpriv:50,cariboudisplayadapt:50,cariboudisplayadapterclass:50,cariboudisplayadapterpriv:50,caribougroupmodel:50,caribougroupmodelclass:50,caribougroupmodelpriv:50,caribouikeyboardobject:50,caribouikeyboardobjectifac:50,caribouiscannablegroup:50,caribouiscannablegroupifac:50,caribouiscannableitem:50,caribouiscannableitemifac:50,cariboukeyboardmodel:50,cariboukeyboardmodelclass:50,cariboukeyboardmodelpriv:50,cariboukeyboardservic:50,cariboukeyboardserviceclass:50,cariboukeyboardservicepriv:50,cariboukeybuttoncallback:50,cariboukeymodel:50,cariboukeymodelclass:50,cariboukeymodelpriv:50,cariboulevelmodel:50,cariboulevelmodelclass:50,cariboulevelmodelpriv:50,cariboumodifierst:50,caribounulladapt:50,caribounulladapterclass:50,caribounulladapterpriv:50,caribourowmodel:50,caribourowmodelclass:50,caribourowmodelpriv:50,caribouscangroup:50,caribouscann:50,caribouscannablegroup:50,caribouscannablegroupclass:50,caribouscannablegrouppriv:50,caribouscannerclass:50,caribouscannerpriv:50,caribouxadapt:50,caribouxadapterclass:50,caribouxadapterpriv:50,cgi:48,chang:[6,14],child_select:[14,15,36,37,50],child_step:[14,15,50],classmethod:[3,6,9,18,21,27,30,33,39,42],clear:14,click:12,columnmodel:[2,12,16,33,36,46,50],columnmodelclass:[1,3,50],columnmodelpriv:[3,50,51],config:6,config_chang:6,construct:39,construct_onli:[6,21,39],create_group_nam:[9,50],cycl:[14,39],debian:48,depend:48,descript:[3,4,6,7,9,10,12,13,14,15,16,17,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43,48],devic:39,displai:6,displayadapt:[2,30,42,46,50],displayadapterclass:[1,6,31,43,50],displayadapterpriv:[6,50,51],do_child_select:[14,36],do_child_step:14,do_get_children:12,do_get_current_group:6,do_get_group:6,do_get_kei:12,do_get_scan_children:[14,36],do_get_scan_group:14,do_get_scan_select:16,do_get_scan_step:16,do_get_selected_path:14,do_get_step_path:14,do_hid:24,do_keyval_press:6,do_keyval_releas:6,do_mod_latch:6,do_mod_lock:6,do_mod_unlatch:6,do_mod_unlock:6,do_name_lost:24,do_register_button_func:6,do_register_key_func:6,do_scan_reset:14,do_set_cursor_loc:24,do_set_entry_loc:24,do_set_scan_group:14,do_set_scan_select:16,do_set_scan_step:16,do_show:24,enabl:39,end:18,entri:48,fals:[16,18,39],file:21,first_kei:[3,50],flag:[6,9,12,14,16,18,21,27,39],func:6,func_target:6,gdk:[6,48],genum:45,get_active_group:[21,50],get_active_level:[9,50],get_align:[18,50],get_autorestart:[39,50],get_bind_set:[39,50],get_children:[12,13,50],get_column:[33,50],get_current_group:[6,7,50],get_default:[6,50],get_displai:[6,50],get_extended_kei:[18,50],get_group:[6,7,21,50],get_inverse_scan:[39,50],get_is_modifi:[18,50],get_kei:[3,12,13,50],get_keyboard_fil:[21,50],get_keyboard_kei:[39,50],get_keyboard_typ:[21,50],get_keyv:[18,50],get_label:[18,50],get_level:[9,50],get_mod:[27,50],get_mouse_button:[39,50],get_nam:[18,50],get_repeat:[18,50],get_row:[27,50],get_scan_children:[14,15,36,37,50],get_scan_cycl:[39,50],get_scan_en:[39,50],get_scan_group:[14,15,39,50],get_scan_select:[16,17,50],get_scan_step:[16,17,50],get_selected_path:[14,15,50],get_show_subkei:[18,50],get_step_path:[14,15,50],get_step_tim:[39,50],get_switch_devic:[39,50],get_text:[18,50],get_toggl:[18,50],get_width:[18,50],ginterfac:[3,9,12,14,16,18,21,27,33,36],gir1:48,gnome:48,gobject:[3,6,7,9,10,12,13,14,15,16,17,18,19,21,22,24,25,27,30,33,36,37,39,40,42,45,46,48],gok:48,group:[6,9,14,21,39],group_ad:21,group_chang:6,group_nam:[6,21],group_remov:21,groupmodel:[2,12,21,46,50],groupmodelclass:[1,9,50],groupmodelpriv:[9,50,51],hide:[24,25,50],hierarchi:48,hold:18,homepag:48,http:48,ikeyboardobject:[3,9,18,21,27,33,49,50],ikeyboardobjectifac:[12,47,50],implement:[12,14,16],index:3,inherit:[3,6,9,18,21,24,27,30,33,36,39,42],input:48,intend:48,interfac:48,invers:39,inverse_scan:39,is_modifi:18,iscannablegroup:[3,27,33,36,49,50],iscannablegroupifac:[14,47,50],iscannableitem:[3,14,18,33,36,49,50],iscannableitemifac:[16,47,50],item:14,kei:[12,18,39],key_click:12,key_hold:18,key_hold_end:18,key_press:12,key_releas:12,keyboard:[21,39],keyboard_fil:21,keyboard_kei:39,keyboard_typ:21,keyboardmodel:[2,12,39,46,50],keyboardmodelclass:[1,21,50],keyboardmodelpriv:[21,50,51],keyboardservic:[2,46,50],keyboardserviceclass:[1,24,50],keyboardservicepriv:[24,50,51],keybuttoncallback:[0,6,50],keybuttoncod:0,keymodel:[2,3,12,16,46,50],keymodelclass:[1,18,50],keymodelpriv:[18,50,51],keyval:[6,18],keyval_press:[6,7,50],keyval_releas:[6,7,50],kwarg:[3,6,9,18,21,24,27,30,33,36,39,42],label:18,latch:[45,50],level:[9,27],level_nam:9,level_toggl:27,levelmodel:[2,9,12,36,46,50],levelmodelclass:[1,27,50],levelmodelpriv:[27,50,51],linear:[45,50],list:48,listinfo:48,lock:[45,50],mail:48,mailman:48,map:48,mask:6,mod_latch:[6,7,50],mod_lock:[6,7,50],mod_unlatch:[6,7,50],mod_unlock:[6,7,50],mode:27,modifi:[6,18],modifier_st:18,modifiers_chang:6,modifierst:[18,45,50],mous:39,mouse_button:39,name:[3,4,6,7,9,10,12,13,14,15,16,17,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43],name_lost:[24,25,50],navig:48,none:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,50],nulladapt:[2,6,46,50],nulladapterclass:[1,30,50],nulladapterpriv:[30,50,51],object:[0,3,6,7,9,13,15,17,18,21,24,25,27,30,33,36,37,39,42,46],objectclass:[3,6,7,9,10,18,19,21,22,24,25,27,30,33,36,37,39,40,42],org:48,packag:48,paramet:[0,3,6,9,14,16,18,21,24,27,39],parent:48,parent_class:[4,7,10,19,22,25,28,31,34,37,40,43],parent_ifac:[13,15,17],parent_inst:[3,6,9,18,21,24,27,30,33,36,39,42],pointer:48,press:[0,12,18,50],priv:[3,6,9,18,21,24,27,30,33,36,39,42],product:48,project:48,prop:[6,9,14,16,18,21,27,39],python:50,readabl:[6,9,14,16,18,21,27,39],register_button_func:[6,7,50],register_key_func:[6,7,50],register_keyboard:[24,50],releas:[12,18,50],remov:21,repeat:18,reset:[39,50],row:[45,50],rowmodel:[2,12,16,27,36,46,50],rowmodelclass:[1,33,50],rowmodelpriv:[33,50,51],run_last:[6,12,14,18,21,27],scan:[14,16,39],scan_clear:14,scan_cycl:39,scan_en:39,scan_group:[14,39],scan_reset:[14,15,50],scan_select:16,scan_step:16,scangroup:[14,45,50],scannablegroup:[2,3,14,27,33,46,50],scannablegroupclass:[1,4,28,34,36,50],scannablegrouppriv:[36,50,51],scanner:[2,46,50],scannerclass:[1,39,50],scannerpriv:[39,50,51],select:[14,16],selected_item_chang:14,set:39,set_align:[18,50],set_autorestart:[39,50],set_cursor_loc:[24,25,50],set_default:[6,50],set_entry_loc:[24,25,50],set_inverse_scan:[39,50],set_is_modifi:[18,50],set_keyboard:[39,50],set_keyboard_kei:[39,50],set_label:[18,50],set_mouse_button:[39,50],set_repeat:[18,50],set_scan_cycl:[39,50],set_scan_en:[39,50],set_scan_group:[14,15,39,50],set_scan_select:[16,17,50],set_scan_step:[16,17,50],set_step_tim:[39,50],set_switch_devic:[39,50],set_toggl:[18,50],set_width:[18,50],show:[18,24,25,50],show_subkei:18,step:[14,16,39],step_item_chang:14,step_tim:39,str:[6,9,18,21,24,27,39],struct:[3,6,9,18,21,24,27,30,33,36,39,42],structur:[3,6,9,12,14,16,18,21,24,27,30,33,36,39,42,48],subclass:[3,6,9,18,21,24,27,30,33,36,39,42],subgroup:[45,50],subkei:18,switch_devic:39,symbol:48,technolog:48,text:[18,48],time:39,timestamp:24,toggl:[18,27],tracker:48,type:[3,4,6,7,9,10,12,13,14,15,16,17,18,19,21,22,24,25,27,28,30,31,33,34,36,37,39,40,42,43],typeinterfac:[13,15,17],user:48,user_data:0,valu:[6,9,14,16,18,21,27,39,45],variant:9,variant_nam:6,width:18,wiki:48,writabl:[6,14,16,18,21,39],xadapt:[2,6,46,50],xadapterclass:[1,42,50],xadapterpriv:[42,50,51]},titles:["Callbacks","Class Structures","Classes","Caribou.ColumnModel","Caribou.ColumnModelClass","Caribou.ColumnModelPrivate","Caribou.DisplayAdapter","Caribou.DisplayAdapterClass","Caribou.DisplayAdapterPrivate","Caribou.GroupModel","Caribou.GroupModelClass","Caribou.GroupModelPrivate","Caribou.IKeyboardObject","Caribou.IKeyboardObjectIface","Caribou.IScannableGroup","Caribou.IScannableGroupIface","Caribou.IScannableItem","Caribou.IScannableItemIface","Caribou.KeyModel","Caribou.KeyModelClass","Caribou.KeyModelPrivate","Caribou.KeyboardModel","Caribou.KeyboardModelClass","Caribou.KeyboardModelPrivate","Caribou.KeyboardService","Caribou.KeyboardServiceClass","Caribou.KeyboardServicePrivate","Caribou.LevelModel","Caribou.LevelModelClass","Caribou.LevelModelPrivate","Caribou.NullAdapter","Caribou.NullAdapterClass","Caribou.NullAdapterPrivate","Caribou.RowModel","Caribou.RowModelClass","Caribou.RowModelPrivate","Caribou.ScannableGroup","Caribou.ScannableGroupClass","Caribou.ScannableGroupPrivate","Caribou.Scanner","Caribou.ScannerClass","Caribou.ScannerPrivate","Caribou.XAdapter","Caribou.XAdapterClass","Caribou.XAdapterPrivate","Enums","Hierarchy","Interface Structures","Caribou 1.0 (0.4.21)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,6,9,12,14,16,18,21,24,27,30,33,36,39,42],"enum":45,api:48,callback:0,carib:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,48],columnmodel:3,columnmodelclass:4,columnmodelpriv:5,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],displayadapt:6,displayadapterclass:7,displayadapterpriv:8,field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],groupmodel:9,groupmodelclass:10,groupmodelpriv:11,hierarchi:46,ikeyboardobject:12,ikeyboardobjectifac:13,interfac:[47,49],iscannablegroup:14,iscannablegroupifac:15,iscannableitem:16,iscannableitemifac:17,keyboardmodel:21,keyboardmodelclass:22,keyboardmodelpriv:23,keyboardservic:24,keyboardserviceclass:25,keyboardservicepriv:26,keymodel:18,keymodelclass:19,keymodelpriv:20,levelmodel:27,levelmodelclass:28,levelmodelpriv:29,map:50,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],nulladapt:30,nulladapterclass:31,nulladapterpriv:32,properti:[3,6,9,12,14,16,18,21,24,27,30,33,36,39,42],rowmodel:33,rowmodelclass:34,rowmodelpriv:35,scannablegroup:36,scannablegroupclass:37,scannablegrouppriv:38,scanner:39,scannerclass:40,scannerpriv:41,signal:[3,6,9,12,14,16,18,21,24,27,30,33,36,39,42],structur:[1,47,51],symbol:50,virtual:[3,6,9,12,14,16,18,21,24,27,30,33,36,39,42],xadapt:42,xadapterclass:43,xadapterpriv:44}})