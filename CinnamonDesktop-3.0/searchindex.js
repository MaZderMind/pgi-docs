Search.setIndex({envversion:49,filenames:["callbacks","class-structs","classes","classes/BG","classes/BGClass","classes/BGCrossfade","classes/BGCrossfadeClass","classes/DesktopThumbnailFactory","classes/DesktopThumbnailFactoryClass","classes/PnpIds","classes/PnpIdsClass","classes/RRConfig","classes/RRConfigClass","classes/RRCrtc","classes/RRLabeler","classes/RRLabelerClass","classes/RRMode","classes/RROutput","classes/RROutputInfo","classes/RROutputInfoClass","classes/RRScreen","classes/RRScreenClass","classes/WallClock","classes/WallClockClass","classes/XkbInfo","classes/XkbInfoClass","constants","enums","flags","functions","hierarchy","index","mapping","structs"],objects:{"CinnamonDesktop.BG":{"new":[3,2,1,""],changes_with_time:[3,1,1,""],create_and_set_gtk_image:[3,1,1,""],create_and_set_surface_as_root:[3,1,1,""],create_frame_thumbnail:[3,1,1,""],create_surface:[3,1,1,""],create_thumbnail:[3,1,1,""],draw:[3,1,1,""],get_filename:[3,1,1,""],get_image_size:[3,1,1,""],get_surface_from_root:[3,2,1,""],has_multiple_sizes:[3,1,1,""],is_dark:[3,1,1,""],load_from_preferences:[3,1,1,""],save_to_preferences:[3,1,1,""],set_accountsservice_background:[3,2,1,""],set_filename:[3,1,1,""],set_surface_as_root:[3,2,1,""],set_surface_as_root_with_crossfade:[3,2,1,""]},"CinnamonDesktop.BG.signals":{changed:[3,3,1,""],transitioned:[3,3,1,""]},"CinnamonDesktop.BGCrossfade":{"new":[5,2,1,""],do_finished:[5,1,1,""],is_started:[5,1,1,""],set_end_surface:[5,1,1,""],set_start_surface:[5,1,1,""],start:[5,1,1,""],stop:[5,1,1,""]},"CinnamonDesktop.BGCrossfade.props":{height:[5,4,1,""],width:[5,4,1,""]},"CinnamonDesktop.BGCrossfade.signals":{finished:[5,3,1,""]},"CinnamonDesktop.DesktopThumbnailFactory":{"new":[7,2,1,""],can_thumbnail:[7,1,1,""],create_failed_thumbnail:[7,1,1,""],generate_thumbnail:[7,1,1,""],has_valid_failed_thumbnail:[7,1,1,""],lookup:[7,1,1,""],save_thumbnail:[7,1,1,""]},"CinnamonDesktop.DesktopThumbnailSize":{LARGE:[27,5,1,""],NORMAL:[27,5,1,""]},"CinnamonDesktop.PnpIds":{"new":[9,2,1,""],get_pnp_id:[9,1,1,""]},"CinnamonDesktop.RRConfig":{applicable:[11,1,1,""],apply_from_filename_with_time:[11,2,1,""],apply_with_time:[11,1,1,""],ensure_primary:[11,1,1,""],equal:[11,1,1,""],get_backup_filename:[11,2,1,""],get_clone:[11,1,1,""],get_intended_filename:[11,2,1,""],get_outputs:[11,1,1,""],load_current:[11,1,1,""],load_filename:[11,1,1,""],match:[11,1,1,""],new_current:[11,2,1,""],new_stored:[11,2,1,""],sanitize:[11,1,1,""],save:[11,1,1,""],set_clone:[11,1,1,""]},"CinnamonDesktop.RRConfig.props":{screen:[11,4,1,""]},"CinnamonDesktop.RRCrtc":{can_drive_output:[13,1,1,""],get_current_mode:[13,1,1,""],get_current_rotation:[13,1,1,""],get_gamma:[13,1,1,""],get_id:[13,1,1,""],get_position:[13,1,1,""],get_rotations:[13,1,1,""],set_config_with_time:[13,1,1,""],set_gamma:[13,1,1,""],supports_rotation:[13,1,1,""]},"CinnamonDesktop.RRDpmsMode":{DISABLED:[27,5,1,""],OFF:[27,5,1,""],ON:[27,5,1,""],STANDBY:[27,5,1,""],SUSPEND:[27,5,1,""],UNKNOWN:[27,5,1,""]},"CinnamonDesktop.RRError":{BOUNDS_ERROR:[27,5,1,""],CRTC_ASSIGNMENT:[27,5,1,""],NO_DPMS_EXTENSION:[27,5,1,""],NO_MATCHING_CONFIG:[27,5,1,""],NO_RANDR_EXTENSION:[27,5,1,""],RANDR_ERROR:[27,5,1,""],UNKNOWN:[27,5,1,""]},"CinnamonDesktop.RRLabeler":{"new":[14,2,1,""],get_rgba_for_output:[14,1,1,""],hide:[14,1,1,""],show:[14,1,1,""]},"CinnamonDesktop.RRLabeler.props":{config:[14,4,1,""]},"CinnamonDesktop.RRMode":{get_freq:[16,1,1,""],get_height:[16,1,1,""],get_id:[16,1,1,""],get_width:[16,1,1,""]},"CinnamonDesktop.RROutput":{can_clone:[17,1,1,""],get_backlight:[17,1,1,""],get_backlight_max:[17,1,1,""],get_backlight_min:[17,1,1,""],get_connector_type:[17,1,1,""],get_crtc:[17,1,1,""],get_current_mode:[17,1,1,""],get_edid_data:[17,1,1,""],get_height_mm:[17,1,1,""],get_id:[17,1,1,""],get_ids_from_edid:[17,1,1,""],get_is_primary:[17,1,1,""],get_name:[17,1,1,""],get_position:[17,1,1,""],get_possible_crtcs:[17,1,1,""],get_preferred_mode:[17,1,1,""],get_size_inches:[17,1,1,""],get_width_mm:[17,1,1,""],is_connected:[17,1,1,""],is_laptop:[17,1,1,""],list_modes:[17,1,1,""],set_backlight:[17,1,1,""],supports_mode:[17,1,1,""]},"CinnamonDesktop.RROutputInfo":{get_aspect_ratio:[18,1,1,""],get_display_name:[18,1,1,""],get_geometry:[18,1,1,""],get_name:[18,1,1,""],get_preferred_height:[18,1,1,""],get_preferred_width:[18,1,1,""],get_primary:[18,1,1,""],get_product:[18,1,1,""],get_refresh_rate:[18,1,1,""],get_rotation:[18,1,1,""],get_serial:[18,1,1,""],get_vendor:[18,1,1,""],is_active:[18,1,1,""],is_connected:[18,1,1,""],set_active:[18,1,1,""],set_geometry:[18,1,1,""],set_primary:[18,1,1,""],set_refresh_rate:[18,1,1,""],set_rotation:[18,1,1,""]},"CinnamonDesktop.RRRotation":{REFLECT_X:[28,5,1,""],REFLECT_Y:[28,5,1,""],ROTATION_0:[28,5,1,""],ROTATION_180:[28,5,1,""],ROTATION_270:[28,5,1,""],ROTATION_90:[28,5,1,""],ROTATION_NEXT:[28,5,1,""]},"CinnamonDesktop.RRScreen":{"new":[20,2,1,""],create_clone_modes:[20,1,1,""],get_crtc_by_id:[20,1,1,""],get_dpms_mode:[20,1,1,""],get_output_by_id:[20,1,1,""],get_output_by_name:[20,1,1,""],get_ranges:[20,1,1,""],get_timestamps:[20,1,1,""],list_clone_modes:[20,1,1,""],list_crtcs:[20,1,1,""],list_modes:[20,1,1,""],list_outputs:[20,1,1,""],refresh:[20,1,1,""],set_dpms_mode:[20,1,1,""],set_primary_output:[20,1,1,""],set_size:[20,1,1,""]},"CinnamonDesktop.RRScreen.props":{gdk_screen:[20,4,1,""]},"CinnamonDesktop.RRScreen.signals":{changed:[20,3,1,""],output_connected:[20,3,1,""],output_disconnected:[20,3,1,""]},"CinnamonDesktop.WallClock":{"new":[22,2,1,""],get_clock:[22,1,1,""]},"CinnamonDesktop.WallClock.props":{clock:[22,4,1,""],time_only:[22,4,1,""]},"CinnamonDesktop.XkbInfo":{"new":[24,2,1,""],description_for_option:[24,1,1,""],get_all_layouts:[24,1,1,""],get_all_option_groups:[24,1,1,""],get_layout_info:[24,1,1,""],get_layout_info_for_language:[24,1,1,""],get_options_for_group:[24,1,1,""]},CinnamonDesktop:{BG:[3,0,1,""],BGClass:[4,0,1,""],BGCrossfade:[5,0,1,""],BGCrossfadeClass:[6,0,1,""],DesktopThumbnailFactory:[7,0,1,""],DesktopThumbnailFactoryClass:[8,0,1,""],DesktopThumbnailSize:[27,0,1,""],InstallerClientCallback:[0,3,1,""],PnpIds:[9,0,1,""],PnpIdsClass:[10,0,1,""],RRConfig:[11,0,1,""],RRConfigClass:[12,0,1,""],RRCrtc:[13,0,1,""],RRDpmsMode:[27,0,1,""],RRError:[27,0,1,""],RRLabeler:[14,0,1,""],RRLabelerClass:[15,0,1,""],RRMode:[16,0,1,""],RROutput:[17,0,1,""],RROutputInfo:[18,0,1,""],RROutputInfoClass:[19,0,1,""],RRRotation:[28,0,1,""],RRScreen:[20,0,1,""],RRScreenClass:[21,0,1,""],RR_CONNECTOR_TYPE_PANEL:[26,4,1,""],WallClock:[22,0,1,""],WallClockClass:[23,0,1,""],XkbInfo:[24,0,1,""],XkbInfoClass:[25,0,1,""],desktop_get_media_key_string:[29,3,1,""],desktop_prepend_terminal_to_vector:[29,3,1,""],desktop_thumbnail_cache_check_permissions:[29,3,1,""],desktop_thumbnail_cache_fix_permissions:[29,3,1,""],desktop_thumbnail_has_uri:[29,3,1,""],desktop_thumbnail_is_valid:[29,3,1,""],desktop_thumbnail_md5:[29,3,1,""],desktop_thumbnail_path_for_uri:[29,3,1,""],desktop_thumbnail_scale_down_pixbuf:[29,3,1,""],installer_check_for_packages:[29,3,1,""],installer_install_packages:[29,3,1,""],rr_error_quark:[29,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","function","Python function"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:function","4":"py:data","5":"py:attribute"},terms:{"abstract":[3,5,7,9,11,14,18,20,22,24],"case":24,"default":[5,11,14,20,22,29],"float":18,"function":[3,5,7,20],"import":7,"int":[3,5,7,11,13,16,17,18,20,29],"new":[3,5,7,9,14,20,22,24,29,32],"null":29,"return":[3,5,7,9,11,13,14,16,17,18,20,22,24,29],"short":[3,5,11,14,20,22,24],"true":[3,5,7,17,20,22,24,29],"try":7,"while":[3,20],_xrootpmap_id:3,about:24,absolut:[7,17,29],access:[5,6,7,8,9,10,11,12,14,15,18,19,20,21,22,23,24,25],activ:[18,20],add:3,affect:3,all:[20,24,29],alloc:[24,29],alreadi:5,also:[20,24,29],amount:29,ani:5,anim:[3,5],anoth:20,api:29,appli:11,applic:[3,11,20,32],apply_from_filename_with_tim:[11,32],apply_with_tim:[11,32],argc:29,argv:29,arrai:29,assign:[11,18],associ:3,assum:[3,20],async:20,atom:3,avail:[20,24],avoid:7,b_g:3,b_g_crossfad:5,back:3,background:[3,5],backlight:17,base:[3,5,7,9,11,14,18,20,22,24,27,28],been:[9,29],befor:5,begin:5,best_height:3,best_width:3,better:24,between:5,bgclass:[1,3],bgcrossfad:[2,3],bgcrossfadeclass:[1,5],black:3,blue:13,bool:[0,3,5,7,11,13,17,18,20,22,24,29],both:[5,24],bound:3,bounds_error:[27,32],bright:17,broken:7,cairo:[3,5],calcul:29,call:[3,5,7,20],caller:24,can:[3,7,20,24,29],can_clon:[17,32],can_drive_output:[13,32],can_thumbnail:[7,32],cdesktopmediakeytyp:29,certain:3,chang:[3,20,21],change_timestamp_ret:20,changes_with_tim:[3,32],check:29,checksum:29,cinnamon:31,cinnamondesktop:[0,1,2],classmethod:[3,5,7,9,11,14,20,22,24],clock:22,clone:[11,17,20],code:24,color:14,com:31,come:[3,29],common:29,comput:29,config2:11,config:[11,14],config_timestamp_ret:20,configur:[11,14,20,22,29],connect:[3,11,14,18,20],construct_only:[5,11,14,20],contain:24,convent:3,copi:[3,5],correct:29,correspond:29,could:[5,20],cours:11,creat:[3,5,7,9,14,20,29],create_and_set_gtk_imag:[3,32],create_and_set_surface_as_root:[3,32],create_clone_mod:[20,32],create_failed_thumbnail:[7,32],create_frame_thumbnail:[3,32],create_surfac:[3,32],create_thumbnail:[3,32],crossfad:[3,5],crtc:[11,18,20],crtc_assignment:[27,32],current:[3,5,17,22],dai:22,data:29,date:22,deal:20,debian:31,defin:3,depend:31,deprec:29,descript:[3,5,6,7,8,9,10,11,12,14,15,18,19,20,21,22,23,24,25,31],description_for_opt:[24,32],desir:29,desktop:31,desktop_get_media_key_str:[29,32],desktop_prepend_terminal_to_vector:[29,32],desktop_thumbnail_cache_check_permiss:[29,32],desktop_thumbnail_cache_fix_permiss:[29,32],desktop_thumbnail_has_uri:[29,32],desktop_thumbnail_is_valid:[29,32],desktop_thumbnail_md5:[29,32],desktop_thumbnail_path_for_uri:[29,32],desktop_thumbnail_scale_down_pixbuf:[29,32],desktopthumbnailfactori:[2,3],desktopthumbnailfactoryclass:[1,7],desktopthumbnails:[7,27,29,32],dest:3,dest_height:[3,29],dest_width:[3,29],determin:3,devic:[14,20],didn:20,differ:3,digest:29,disabl:[5,20],disabled:[27,32],disconnect:20,displai:[14,18,20,22,24],display_nam:24,do_finish:5,dock:20,doe:20,doesn:24,don:[7,24],down:29,dpms:20,draw:[3,5,32],driver:20,due:20,dure:20,each:[14,20],effect:5,either:29,element:[14,29],els:3,embed:29,emiss:20,emit:[5,20],empti:[24,29],emul:29,end:5,ensure_primari:[11,32],equal:[11,20,32],error:[3,11,13,17,20,29],event:20,exist:[7,20,24],extens:20,extra:29,factori:[3,29],fade:5,fail:7,fals:[5,20,22,24],faster:29,fetch:24,file:[7,29,31],filenam:[3,11,29],find:9,finish:[5,6],first:29,fit:24,flag:[3,5,11,14,20,22],follow:3,format:22,found:[9,24],frame:3,frame_num:3,free:29,from:[3,5,20,29],full:9,gdk:[3,5,14,20,29],gdk_screen:20,gdkpixbuf:[3,7,29],gener:7,generate_thumbnail:[7,32],get:[5,14,20],get_all_layout:[24,32],get_all_option_group:[24,32],get_aspect_ratio:[18,32],get_backlight:[17,32],get_backlight_max:[17,32],get_backlight_min:[17,32],get_backup_filenam:[11,32],get_clock:[22,32],get_clon:[11,32],get_connector_typ:[17,32],get_crtc:[17,32],get_crtc_by_id:[20,32],get_current_mod:[13,17,32],get_current_rot:[13,32],get_display_nam:[18,32],get_dpms_mod:[20,32],get_edid_data:[17,32],get_filenam:[3,32],get_freq:[16,32],get_gamma:[13,32],get_geometri:[18,32],get_height:[16,32],get_height_mm:[17,32],get_id:[13,16,17,32],get_ids_from_edid:[17,32],get_image_s:[3,32],get_intended_filenam:[11,32],get_is_primari:[17,32],get_layout_info:[24,32],get_layout_info_for_languag:[24,32],get_nam:[17,18,32],get_options_for_group:[24,32],get_output:[11,32],get_output_by_id:[20,32],get_output_by_nam:[20,32],get_pnp_id:[9,32],get_posit:[13,17,32],get_possible_crtc:[17,32],get_preferred_height:[18,32],get_preferred_mod:[17,32],get_preferred_width:[18,32],get_primari:[18,32],get_product:[18,32],get_rang:[20,32],get_refresh_r:[18,32],get_rgba_for_output:[14,32],get_rot:[13,18,32],get_seri:[18,32],get_size_inch:[17,32],get_surface_from_root:[3,32],get_timestamp:[20,32],get_vendor:[18,32],get_width:[16,32],get_width_mm:[17,32],ginterfac:20,gio:[3,20,29],gir1:31,given:[9,14,24,29],glib:[11,13,17,20,24,27,28,29],gnome:29,gnome_bg_changes_with_tim:32,gnome_bg_create_and_set_gtk_imag:32,gnome_bg_create_and_set_surface_as_root:32,gnome_bg_create_frame_thumbnail:32,gnome_bg_create_surfac:32,gnome_bg_create_thumbnail:32,gnome_bg_crossfade_end:5,gnome_bg_crossfade_is_start:32,gnome_bg_crossfade_new:32,gnome_bg_crossfade_set_end_surfac:32,gnome_bg_crossfade_set_start_surfac:32,gnome_bg_crossfade_start:32,gnome_bg_crossfade_stop:32,gnome_bg_draw:32,gnome_bg_get_color:32,gnome_bg_get_filenam:32,gnome_bg_get_image_s:32,gnome_bg_get_plac:32,gnome_bg_get_surface_from_root:32,gnome_bg_has_multiple_s:32,gnome_bg_is_dark:32,gnome_bg_load_from_prefer:32,gnome_bg_new:32,gnome_bg_save_to_prefer:32,gnome_bg_set_accountsservice_background:32,gnome_bg_set_color:32,gnome_bg_set_filenam:32,gnome_bg_set_plac:32,gnome_bg_set_surface_as_root:32,gnome_bg_set_surface_as_root_with_crossfad:32,gnome_desktop_get_media_key_str:32,gnome_desktop_get_session_user_pw:32,gnome_desktop_prepend_terminal_to_vector:32,gnome_desktop_thumbnail_cache_check_permiss:32,gnome_desktop_thumbnail_cache_fix_permiss:32,gnome_desktop_thumbnail_factory_can_thumbnail:32,gnome_desktop_thumbnail_factory_create_failed_thumbnail:32,gnome_desktop_thumbnail_factory_generate_thumbnail:32,gnome_desktop_thumbnail_factory_has_valid_failed_thumbnail:32,gnome_desktop_thumbnail_factory_lookup:32,gnome_desktop_thumbnail_factory_new:32,gnome_desktop_thumbnail_factory_save_thumbnail:32,gnome_desktop_thumbnail_has_uri:32,gnome_desktop_thumbnail_is_valid:32,gnome_desktop_thumbnail_md5:32,gnome_desktop_thumbnail_path_for_uri:32,gnome_desktop_thumbnail_scale_down_pixbuf:32,gnome_desktop_thumbnail_size_large:32,gnome_desktop_thumbnail_size_normal:32,gnome_installer_check_for_packag:32,gnome_installer_install_packag:32,gnome_pnp_ids_get_pnp_id:32,gnome_pnp_ids_new:32,gnome_rr_config_applic:32,gnome_rr_config_apply_from_filename_with_tim:32,gnome_rr_config_apply_with_tim:32,gnome_rr_config_ensure_primari:32,gnome_rr_config_equ:32,gnome_rr_config_get_backup_filenam:32,gnome_rr_config_get_clon:32,gnome_rr_config_get_intended_filenam:32,gnome_rr_config_get_output:32,gnome_rr_config_load_curr:32,gnome_rr_config_load_filenam:32,gnome_rr_config_match:32,gnome_rr_config_new_curr:32,gnome_rr_config_new_stor:32,gnome_rr_config_sanit:32,gnome_rr_config_sav:32,gnome_rr_config_set_clon:32,gnome_rr_connector_type_panel:32,gnome_rr_crtc_can_drive_output:32,gnome_rr_crtc_get_current_mod:32,gnome_rr_crtc_get_current_rot:32,gnome_rr_crtc_get_gamma:32,gnome_rr_crtc_get_id:32,gnome_rr_crtc_get_posit:32,gnome_rr_crtc_get_rot:32,gnome_rr_crtc_set_config_with_tim:32,gnome_rr_crtc_set_gamma:32,gnome_rr_crtc_supports_rot:32,gnome_rr_dpms_disabled:32,gnome_rr_dpms_off:32,gnome_rr_dpms_on:32,gnome_rr_dpms_standby:32,gnome_rr_dpms_suspend:32,gnome_rr_dpms_unknown:32,gnome_rr_error_bounds_error:32,gnome_rr_error_crtc_assignment:32,gnome_rr_error_no_dpms_extension:32,gnome_rr_error_no_matching_config:32,gnome_rr_error_no_randr_extension:32,gnome_rr_error_quark:32,gnome_rr_error_randr_error:32,gnome_rr_error_unknown:32,gnome_rr_labeler_get_rgba_for_output:32,gnome_rr_labeler_hid:32,gnome_rr_labeler_new:32,gnome_rr_labeler_show:32,gnome_rr_mode_get_freq:32,gnome_rr_mode_get_height:32,gnome_rr_mode_get_id:32,gnome_rr_mode_get_width:32,gnome_rr_output_can_clon:32,gnome_rr_output_get_backlight:32,gnome_rr_output_get_backlight_max:32,gnome_rr_output_get_backlight_min:32,gnome_rr_output_get_connector_typ:32,gnome_rr_output_get_crtc:32,gnome_rr_output_get_current_mod:32,gnome_rr_output_get_edid_data:32,gnome_rr_output_get_height_mm:32,gnome_rr_output_get_id:32,gnome_rr_output_get_ids_from_edid:32,gnome_rr_output_get_is_primari:32,gnome_rr_output_get_nam:32,gnome_rr_output_get_posit:32,gnome_rr_output_get_possible_crtc:32,gnome_rr_output_get_preferred_mod:32,gnome_rr_output_get_size_inch:32,gnome_rr_output_get_width_mm:32,gnome_rr_output_info_get_aspect_ratio:32,gnome_rr_output_info_get_display_nam:32,gnome_rr_output_info_get_geometri:32,gnome_rr_output_info_get_nam:32,gnome_rr_output_info_get_preferred_height:32,gnome_rr_output_info_get_preferred_width:32,gnome_rr_output_info_get_primari:32,gnome_rr_output_info_get_product:32,gnome_rr_output_info_get_refresh_r:32,gnome_rr_output_info_get_rot:32,gnome_rr_output_info_get_seri:32,gnome_rr_output_info_get_vendor:32,gnome_rr_output_info_is_act:32,gnome_rr_output_info_is_connect:32,gnome_rr_output_info_set_act:32,gnome_rr_output_info_set_geometri:32,gnome_rr_output_info_set_primari:32,gnome_rr_output_info_set_refresh_r:32,gnome_rr_output_info_set_rot:32,gnome_rr_output_is_connect:32,gnome_rr_output_is_laptop:32,gnome_rr_output_list_mod:32,gnome_rr_output_set_backlight:32,gnome_rr_output_supports_mod:32,gnome_rr_reflect_x:32,gnome_rr_reflect_y:32,gnome_rr_rotation_0:32,gnome_rr_rotation_180:32,gnome_rr_rotation_270:32,gnome_rr_rotation_90:32,gnome_rr_rotation_next:32,gnome_rr_screen_create_clone_mod:32,gnome_rr_screen_get_crtc_by_id:32,gnome_rr_screen_get_dpms_mod:32,gnome_rr_screen_get_output_by_id:32,gnome_rr_screen_get_output_by_nam:32,gnome_rr_screen_get_rang:32,gnome_rr_screen_get_timestamp:32,gnome_rr_screen_list_clone_mod:32,gnome_rr_screen_list_crtc:32,gnome_rr_screen_list_mod:32,gnome_rr_screen_list_output:32,gnome_rr_screen_new:32,gnome_rr_screen_refresh:32,gnome_rr_screen_set_dpms_mod:32,gnome_rr_screen_set_primary_output:32,gnome_rr_screen_set_s:32,gnome_wall_clock_get_clock:32,gnome_wall_clock_new:32,gnome_xkb_info_description_for_opt:32,gnome_xkb_info_free_var_def:32,gnome_xkb_info_get_all_layout:32,gnome_xkb_info_get_all_option_group:32,gnome_xkb_info_get_layout_info:32,gnome_xkb_info_get_layout_info_for_languag:32,gnome_xkb_info_get_options_for_group:32,gnome_xkb_info_get_var_def:32,gnome_xkb_info_new:32,gnomebg:32,gnomebgclass:32,gnomebgcrossfad:32,gnomebgcrossfadeclass:32,gnomedesktopthumbnailfactori:32,gnomedesktopthumbnailfactoryclass:32,gnomedesktopthumbnails:32,gnomeiconfactori:7,gnomeinstallerclientcallback:32,gnomepnpid:32,gnomepnpidsclass:32,gnomerr:29,gnomerrconfig:32,gnomerrconfigclass:32,gnomerrcrtc:32,gnomerrdpmsmod:32,gnomerrerror:32,gnomerrlabel:32,gnomerrlabelerclass:32,gnomerrmod:32,gnomerroutput:32,gnomerroutputinfo:32,gnomerroutputinfoclass:32,gnomerrrot:32,gnomerrscreen:32,gnomerrscreenclass:32,gnomewallclock:32,gnomewallclockclass:32,gnomexkbinfo:32,gnomexkbinfoclass:32,gobject:[3,5,6,7,8,9,10,11,12,14,15,18,19,20,21,22,23,24,25,30,31],gquark:29,grab:3,green:13,group:24,group_id:24,gtk:[3,31],gui:14,handl:29,handler:20,happen:[5,20],happend:5,harmless:5,has_multiple_s:[3,32],has_valid_failed_thumbnail:[7,32],have:[5,9,11,20,29],height:[3,5,11,18,20,29],hide:[14,32],homepag:31,hot:20,hotplug:20,how:5,howev:29,http:31,identifi:[14,20,24,29],idl:20,imag:[3,7],image:3,immedi:5,includ:22,indentifi:24,info:24,inform:[5,24],inherit:[3,5,7,9,11,14,18,20,22,24],initabl:20,initi:5,instal:29,installer_check_for_packag:[29,32],installer_install_packag:[29,32],installerclientcallback:[0,29,32],instanc:[20,24],instead:[20,29],integ:29,intern:24,irrespect:22,is_act:[18,32],is_connect:[17,18,32],is_dark:[3,32],is_laptop:[17,32],is_root:3,is_start:[5,32],iso:24,just:29,keep:20,kei:29,know:24,kwarg:[3,5,7,9,11,14,18,20,22,24],label:14,languag:24,laptop:20,larg:29,large:[27,32],last:20,later:[7,20],latest:20,latter:20,layout:24,leak:3,least:[7,11],letter:24,librari:31,like:24,linuxmint:31,list:[20,24,29],list_clone_mod:[20,32],list_crtc:[20,32],list_mod:[17,20,32],list_output:[20,32],load:[29,31],load_curr:[11,32],load_filenam:[11,32],load_from_prefer:[3,32],local:24,locat:[7,20,24],look:[7,9],lookup:[7,32],lot:29,mai:[5,20],main:7,maintain:20,make:3,malloc:29,manag:5,manual:29,manufactur:9,map:31,match:[11,32],max:17,max_height:20,max_width:20,maximum:[17,20],md5:29,media:29,might:24,mime:7,mime_typ:7,mimimum:17,min:17,min_height:20,min_width:20,minimum:20,mm_height:20,mm_width:20,mode:[13,17,20],modif:7,modifi:[20,24,29],monitor:[14,18],mtime:[7,29],multipl:14,must:[3,7,24,29],n_output:13,name:[3,5,6,7,8,9,10,11,12,14,15,18,19,20,21,22,23,24,25,29],need:5,neg:29,never:22,new_curr:[11,32],new_stor:[11,32],newli:3,no_dpms_extension:[27,32],no_hooks:20,no_matching_config:[27,32],no_randr_extension:[27,32],no_recurse:20,non:20,none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,29],normal:[27,32],note:29,object:[0,3,5,6,7,9,11,14,18,20,21,22,24,29,30],objectclass:[3,5,6,7,8,9,10,11,12,14,15,18,19,20,21,22,23,24,25],obtain:20,off:[27,32],offset:11,older:20,onli:[20,22],oper:20,option:[24,29],origin:[7,29],original_mtim:7,otherwis:[7,20,24],ouput:14,out:[3,24],output:[11,13,14,18,20],output_connect:[20,21],output_disconnect:[20,21],ownership:24,packag:[29,31],packagekit:29,panel:26,paramet:[0,3,5,7,9,11,13,14,17,18,20,24,29],parent:[7,8,9,11,14,18,20,31],parent_class:[6,10,12,15,19,21,23,25],parent_object:[5,22,24],pass:29,path:7,physic:18,pixbuf:[3,7,29],pixmap:3,place:[7,20],png:29,pnp:9,pnp_id:9,pnpid:2,pnpidsclass:[1,9],point:[3,29],pointer:29,port:20,prepend:29,prevent:20,primari:18,process:29,product:17,progress:5,project:31,prop:[5,11,14,20,22],provid:[20,24,29],python:32,queri:[3,14,20],quick:[5,29],r_r_screen:20,rais:[11,13,17,20],randr:[14,20],randr_error:[27,32],rang:20,rate:18,readable:[5,20,22],receiv:[3,5,20],red:13,refer:[9,20],reflect_x:[28,32],reflect_y:[28,32],refresh:[20,32],repres:[9,20,22],request:20,requir:14,result:29,retriev:24,reveal:5,rgba:14,rgba_out:14,right:[7,20,29],root:3,root_window:3,rotat:[13,18],rotation_0:[28,32],rotation_180:[28,32],rotation_270:[28,32],rotation_90:[28,32],rotation_next:[28,32],rr_connector_type_panel:[26,32],rr_error_quark:[29,32],rrconfig:2,rrconfigclass:[1,11],rrdpmsmode:[20,27,32],rrerror:[27,32],rrlabel:2,rrlabelerclass:[1,14],rrmode:13,rroutput:13,rroutputinfo:[2,11,14],rroutputinfoclass:[1,18],rrrotat:[13,18,28,32],rrscreen:[2,11],rrscreenclass:[1,20],run:[5,29],run_first:20,run_last:[3,5],same:[3,11],sanit:[11,32],save:[7,11,32],save_thumbnail:[7,32],save_to_prefer:[3,32],scale:29,screen:[3,11,14,20],see:5,select:14,self:5,sent:[18,29],separ:29,serial:17,server:[3,20],set:[3,5,17,24,29],set_accountsservice_background:[3,32],set_act:[18,32],set_backlight:[17,32],set_clon:[11,32],set_config_with_tim:[13,32],set_dpms_mod:[20,32],set_end_surfac:[5,32],set_filenam:[3,32],set_gamma:[13,32],set_geometri:[18,32],set_primari:[18,32],set_primary_output:[20,32],set_refresh_r:[18,32],set_rot:[18,32],set_siz:[20,32],set_start_surfac:[5,32],set_surface_as_root:[3,32],set_surface_as_root_with_crossfad:[3,32],setup:29,sever:7,short_nam:24,should:[3,29],show:[3,14,24,32],shown:[5,14],sinc:29,singl:[3,20],size:[7,13,17,29],skip:5,slideshow:3,some:24,somebodi:3,someon:3,somewhat:3,specif:20,specifi:[7,20,24],stale:20,standard:29,standby:[27,32],start:[5,32],step:3,stop:[5,32],store:[20,24],str:[3,7,9,11,17,18,20,22,24,29],string:[9,22,24,29],struct:[3,5,7,9,11,14,18,20,22,24],subclass:[3,5,7,9,11,14,18,20,22,24],subtl:3,succe:7,succeed:7,success:[0,3,5,17],suitabl:[3,24],support:[17,20],supports_mod:[17,32],supports_rot:[13,32],sure:3,surfac:[3,5],suspend:[27,32],symbol:31,take:24,temporari:3,termin:29,than:29,thei:[3,11],them:14,themselv:24,therefor:20,thi:[3,5,7,11,14,17,18,20,29,31],those:[11,20,24],thread:7,threadsaf:7,through:3,thu:20,thumb:29,thumbnail:[3,7,29],time:[3,7,22],time_onli:22,timeout:20,timestamp:[11,13,20],transit:3,translat:24,tri:7,two:[5,11,20],type:[3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,29],unavail:32,undock:20,uniqu:20,unknown:[27,32],unplug:20,uri:[7,29],usage:7,use:29,user:[14,29],user_data:[0,29],vagu:3,valid:20,valu:[5,11,14,17,20,22,24,27,28,29],variant:24,vector:29,vendor:[17,18],version:[7,24,29],wai:29,wallclock:2,wallclockclass:[1,22],want:29,week:22,when:[5,9,14,20,29],where:3,whether:[5,11,18,29],which:[3,5,14,17,20,24],who:3,whose:20,width:[3,5,11,18,20,29],window:[3,5],within:20,won:[3,7],would:29,writable:[5,11,14,20,22],write:7,written:7,xkb:24,xkb_layout:24,xkb_variant:24,xkbinfo:2,xkbinfoclass:[1,24],xkillclient:3,xlib:[3,20],xrandr:20,xterm:29,you:29,your:20},titles:["Callbacks","Class Structures","Classes","CinnamonDesktop.BG","CinnamonDesktop.BGClass","CinnamonDesktop.BGCrossfade","CinnamonDesktop.BGCrossfadeClass","CinnamonDesktop.DesktopThumbnailFactory","CinnamonDesktop.DesktopThumbnailFactoryClass","CinnamonDesktop.PnpIds","CinnamonDesktop.PnpIdsClass","CinnamonDesktop.RRConfig","CinnamonDesktop.RRConfigClass","CinnamonDesktop.RRCrtc","CinnamonDesktop.RRLabeler","CinnamonDesktop.RRLabelerClass","CinnamonDesktop.RRMode","CinnamonDesktop.RROutput","CinnamonDesktop.RROutputInfo","CinnamonDesktop.RROutputInfoClass","CinnamonDesktop.RRScreen","CinnamonDesktop.RRScreenClass","CinnamonDesktop.WallClock","CinnamonDesktop.WallClockClass","CinnamonDesktop.XkbInfo","CinnamonDesktop.XkbInfoClass","Constants","Enums","Flags","Functions","Hierarchy","CinnamonDesktop 3.0 (3.2.4)","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,5,7,9,11,14,18,20,22,24],"enum":27,"function":29,api:31,bgclass:4,bgcrossfad:5,bgcrossfadeclass:6,callback:0,cinnamondesktop:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,31],constant:26,desktopthumbnailfactori:7,desktopthumbnailfactoryclass:8,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],flag:28,hierarchi:30,map:32,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],pnpid:9,pnpidsclass:10,properti:[3,5,7,9,11,14,18,20,22,24],rrconfig:11,rrconfigclass:12,rrcrtc:13,rrlabel:14,rrlabelerclass:15,rrmode:16,rroutput:17,rroutputinfo:18,rroutputinfoclass:19,rrscreen:20,rrscreenclass:21,signal:[3,5,7,9,11,14,18,20,22,24],structur:[1,33],symbol:32,virtual:[3,5,7,9,11,14,18,20,22,24],wallclock:22,wallclockclass:23,xkbinfo:24,xkbinfoclass:25}})