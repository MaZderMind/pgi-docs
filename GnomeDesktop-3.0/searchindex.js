Search.setIndex({docnames:["callbacks","class-structs","classes","classes/BG","classes/BGClass","classes/BGCrossfade","classes/BGCrossfadeClass","classes/BGSlideShow","classes/BGSlideShowClass","classes/DesktopThumbnailFactory","classes/DesktopThumbnailFactoryClass","classes/IdleMonitor","classes/IdleMonitorClass","classes/PnpIds","classes/PnpIdsClass","classes/RRConfig","classes/RRConfigClass","classes/RRCrtc","classes/RRMode","classes/RROutput","classes/RROutputInfo","classes/RROutputInfoClass","classes/RRScreen","classes/RRScreenClass","classes/WallClock","classes/WallClockClass","classes/XkbInfo","classes/XkbInfoClass","constants","enums","flags","functions","hierarchy","index","mapping","structs"],envversion:53,filenames:["callbacks.rst","class-structs.rst","classes.rst","classes/BG.rst","classes/BGClass.rst","classes/BGCrossfade.rst","classes/BGCrossfadeClass.rst","classes/BGSlideShow.rst","classes/BGSlideShowClass.rst","classes/DesktopThumbnailFactory.rst","classes/DesktopThumbnailFactoryClass.rst","classes/IdleMonitor.rst","classes/IdleMonitorClass.rst","classes/PnpIds.rst","classes/PnpIdsClass.rst","classes/RRConfig.rst","classes/RRConfigClass.rst","classes/RRCrtc.rst","classes/RRMode.rst","classes/RROutput.rst","classes/RROutputInfo.rst","classes/RROutputInfoClass.rst","classes/RRScreen.rst","classes/RRScreenClass.rst","classes/WallClock.rst","classes/WallClockClass.rst","classes/XkbInfo.rst","classes/XkbInfoClass.rst","constants.rst","enums.rst","flags.rst","functions.rst","hierarchy.rst","index.rst","mapping.rst","structs.rst"],objects:{"GnomeDesktop.BG":{"new":[3,2,1,""],changes_with_time:[3,1,1,""],create_frame_thumbnail:[3,1,1,""],create_surface:[3,1,1,""],create_thumbnail:[3,1,1,""],draw:[3,1,1,""],get_filename:[3,1,1,""],get_image_size:[3,1,1,""],get_placement:[3,1,1,""],get_rgba:[3,1,1,""],get_surface_from_root:[3,2,1,""],has_multiple_sizes:[3,1,1,""],is_dark:[3,1,1,""],load_from_preferences:[3,1,1,""],save_to_preferences:[3,1,1,""],set_filename:[3,1,1,""],set_placement:[3,1,1,""],set_rgba:[3,1,1,""],set_surface_as_root:[3,2,1,""],set_surface_as_root_with_crossfade:[3,2,1,""]},"GnomeDesktop.BG.signals":{changed:[3,3,1,""],transitioned:[3,3,1,""]},"GnomeDesktop.BGCrossfade":{"new":[5,2,1,""],do_finished:[5,1,1,""],is_started:[5,1,1,""],set_end_surface:[5,1,1,""],set_start_surface:[5,1,1,""],start:[5,1,1,""],stop:[5,1,1,""]},"GnomeDesktop.BGCrossfade.props":{height:[5,4,1,""],width:[5,4,1,""]},"GnomeDesktop.BGCrossfade.signals":{finished:[5,3,1,""]},"GnomeDesktop.BGSlideShow":{"new":[7,2,1,""],get_current_slide:[7,1,1,""],get_has_multiple_sizes:[7,1,1,""],get_num_slides:[7,1,1,""],get_slide:[7,1,1,""],get_start_time:[7,1,1,""],get_total_duration:[7,1,1,""],load:[7,1,1,""],load_async:[7,1,1,""]},"GnomeDesktop.BGSlideShow.props":{filename:[7,4,1,""],has_multiple_sizes:[7,4,1,""],start_time:[7,4,1,""],total_duration:[7,4,1,""]},"GnomeDesktop.DesktopThumbnailFactory":{"new":[9,2,1,""],can_thumbnail:[9,1,1,""],create_failed_thumbnail:[9,1,1,""],generate_thumbnail:[9,1,1,""],has_valid_failed_thumbnail:[9,1,1,""],lookup:[9,1,1,""],save_thumbnail:[9,1,1,""]},"GnomeDesktop.DesktopThumbnailSize":{LARGE:[29,5,1,""],NORMAL:[29,5,1,""]},"GnomeDesktop.IdleMonitor":{"new":[11,2,1,""],add_idle_watch:[11,1,1,""],add_user_active_watch:[11,1,1,""],get_idletime:[11,1,1,""],new_for_device:[11,2,1,""],remove_watch:[11,1,1,""]},"GnomeDesktop.IdleMonitor.props":{device:[11,4,1,""]},"GnomeDesktop.PnpIds":{"new":[13,2,1,""],get_pnp_id:[13,1,1,""]},"GnomeDesktop.RRConfig":{applicable:[15,1,1,""],apply:[15,1,1,""],apply_persistent:[15,1,1,""],ensure_primary:[15,1,1,""],equal:[15,1,1,""],get_clone:[15,1,1,""],get_outputs:[15,1,1,""],load_current:[15,1,1,""],match:[15,1,1,""],new_current:[15,2,1,""],sanitize:[15,1,1,""],set_clone:[15,1,1,""]},"GnomeDesktop.RRConfig.props":{screen:[15,4,1,""]},"GnomeDesktop.RRCrtc":{can_drive_output:[17,1,1,""],get_current_mode:[17,1,1,""],get_current_rotation:[17,1,1,""],get_gamma:[17,1,1,""],get_id:[17,1,1,""],get_position:[17,1,1,""],get_rotations:[17,1,1,""],set_gamma:[17,1,1,""],supports_rotation:[17,1,1,""]},"GnomeDesktop.RRDpmsMode":{OFF:[29,5,1,""],ON:[29,5,1,""],STANDBY:[29,5,1,""],SUSPEND:[29,5,1,""],UNKNOWN:[29,5,1,""]},"GnomeDesktop.RRDpmsModeType":{OFF:[29,5,1,""],ON:[29,5,1,""],STANDBY:[29,5,1,""],SUSPEND:[29,5,1,""],UNKNOWN:[29,5,1,""]},"GnomeDesktop.RRError":{BOUNDS_ERROR:[29,5,1,""],CRTC_ASSIGNMENT:[29,5,1,""],NO_DPMS_EXTENSION:[29,5,1,""],NO_MATCHING_CONFIG:[29,5,1,""],NO_RANDR_EXTENSION:[29,5,1,""],RANDR_ERROR:[29,5,1,""],UNKNOWN:[29,5,1,""]},"GnomeDesktop.RRMode":{get_freq:[18,1,1,""],get_freq_f:[18,1,1,""],get_height:[18,1,1,""],get_id:[18,1,1,""],get_is_interlaced:[18,1,1,""],get_is_tiled:[18,1,1,""],get_width:[18,1,1,""]},"GnomeDesktop.RROutput":{can_clone:[19,1,1,""],get_backlight:[19,1,1,""],get_crtc:[19,1,1,""],get_current_mode:[19,1,1,""],get_display_name:[19,1,1,""],get_edid_data:[19,1,1,""],get_id:[19,1,1,""],get_ids_from_edid:[19,1,1,""],get_is_primary:[19,1,1,""],get_is_underscanning:[19,1,1,""],get_min_backlight_step:[19,1,1,""],get_name:[19,1,1,""],get_physical_size:[19,1,1,""],get_position:[19,1,1,""],get_possible_crtcs:[19,1,1,""],get_preferred_mode:[19,1,1,""],is_builtin_display:[19,1,1,""],list_modes:[19,1,1,""],set_backlight:[19,1,1,""],supports_mode:[19,1,1,""],supports_underscanning:[19,1,1,""]},"GnomeDesktop.RROutputInfo":{get_aspect_ratio:[20,1,1,""],get_display_name:[20,1,1,""],get_geometry:[20,1,1,""],get_name:[20,1,1,""],get_preferred_height:[20,1,1,""],get_preferred_width:[20,1,1,""],get_primary:[20,1,1,""],get_product:[20,1,1,""],get_refresh_rate:[20,1,1,""],get_rotation:[20,1,1,""],get_serial:[20,1,1,""],get_underscanning:[20,1,1,""],get_vendor:[20,1,1,""],is_active:[20,1,1,""],is_connected:[20,1,1,""],is_primary_tile:[20,1,1,""],set_active:[20,1,1,""],set_geometry:[20,1,1,""],set_primary:[20,1,1,""],set_refresh_rate:[20,1,1,""],set_rotation:[20,1,1,""],set_underscanning:[20,1,1,""],supports_rotation:[20,1,1,""]},"GnomeDesktop.RRRotation":{REFLECT_X:[30,5,1,""],REFLECT_Y:[30,5,1,""],ROTATION_0:[30,5,1,""],ROTATION_180:[30,5,1,""],ROTATION_270:[30,5,1,""],ROTATION_90:[30,5,1,""],ROTATION_NEXT:[30,5,1,""]},"GnomeDesktop.RRScreen":{"new":[22,2,1,""],do_changed:[22,1,1,""],do_output_connected:[22,1,1,""],do_output_disconnected:[22,1,1,""],get_crtc_by_id:[22,1,1,""],get_dpms_mode:[22,1,1,""],get_output_by_id:[22,1,1,""],get_output_by_name:[22,1,1,""],get_ranges:[22,1,1,""],list_clone_modes:[22,1,1,""],list_crtcs:[22,1,1,""],list_modes:[22,1,1,""],list_outputs:[22,1,1,""],new_async:[22,2,1,""],new_finish:[22,2,1,""],refresh:[22,1,1,""],set_dpms_mode:[22,1,1,""]},"GnomeDesktop.RRScreen.props":{dpms_mode:[22,4,1,""],gdk_screen:[22,4,1,""]},"GnomeDesktop.RRScreen.signals":{changed:[22,3,1,""],output_connected:[22,3,1,""],output_disconnected:[22,3,1,""]},"GnomeDesktop.WallClock":{"new":[24,2,1,""],get_clock:[24,1,1,""],get_timezone:[24,1,1,""],string_for_datetime:[24,1,1,""]},"GnomeDesktop.WallClock.props":{clock:[24,4,1,""],time_only:[24,4,1,""],timezone:[24,4,1,""]},"GnomeDesktop.XkbInfo":{"new":[26,2,1,""],description_for_group:[26,1,1,""],description_for_option:[26,1,1,""],get_all_layouts:[26,1,1,""],get_all_option_groups:[26,1,1,""],get_languages_for_layout:[26,1,1,""],get_layout_info:[26,1,1,""],get_layouts_for_country:[26,1,1,""],get_layouts_for_language:[26,1,1,""],get_options_for_group:[26,1,1,""]},GnomeDesktop:{BG:[3,0,1,""],BGClass:[4,0,1,""],BGCrossfade:[5,0,1,""],BGCrossfadeClass:[6,0,1,""],BGSlideShow:[7,0,1,""],BGSlideShowClass:[8,0,1,""],DesktopThumbnailFactory:[9,0,1,""],DesktopThumbnailFactoryClass:[10,0,1,""],DesktopThumbnailSize:[29,0,1,""],IdleMonitor:[11,0,1,""],IdleMonitorClass:[12,0,1,""],IdleMonitorWatchFunc:[0,3,1,""],PnpIds:[13,0,1,""],PnpIdsClass:[14,0,1,""],RRConfig:[15,0,1,""],RRConfigClass:[16,0,1,""],RRCrtc:[17,0,1,""],RRDpmsMode:[29,0,1,""],RRDpmsModeType:[29,0,1,""],RRError:[29,0,1,""],RRMode:[18,0,1,""],RROutput:[19,0,1,""],RROutputInfo:[20,0,1,""],RROutputInfoClass:[21,0,1,""],RRRotation:[30,0,1,""],RRScreen:[22,0,1,""],RRScreenClass:[23,0,1,""],RR_CONNECTOR_TYPE_PANEL:[28,4,1,""],WallClock:[24,0,1,""],WallClockClass:[25,0,1,""],XkbInfo:[26,0,1,""],XkbInfoClass:[27,0,1,""],desktop_thumbnail_is_valid:[31,3,1,""],desktop_thumbnail_path_for_uri:[31,3,1,""],get_all_locales:[31,3,1,""],get_country_from_code:[31,3,1,""],get_country_from_locale:[31,3,1,""],get_input_source_from_locale:[31,3,1,""],get_language_from_code:[31,3,1,""],get_language_from_locale:[31,3,1,""],language_has_translations:[31,3,1,""],normalize_locale:[31,3,1,""],parse_locale:[31,3,1,""],rr_error_quark:[31,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","function","Python function"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:function","4":"py:data","5":"py:attribute"},terms:{"abstract":[3,5,7,9,11,13,15,20,22,24,26],"case":26,"class":[4,6,8,10,12,14,16,17,18,19,21,23,25,27,29,30,33],"default":[5,7,11,15,22,24,31],"enum":33,"float":[7,18,20],"function":[3,5,9,11,22,33],"import":9,"int":[0,3,5,7,9,11,17,18,19,20,22,31],"new":[3,5,7,9,11,13,22,24,26,31,34],"return":[3,5,7,9,11,13,15,17,18,19,20,22,24,26,31],"short":[3,5,7,11,15,22,24,26],"true":[3,5,7,9,17,18,19,20,22,24,26,31],"try":9,"while":[3,22],Has:7,The:[3,5,7,9,11,15,19,22,24,26],UIs:26,_countri:31,_xrootpmap_id:3,about:[11,26],absolut:[9,19,31],access:[5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27],accord:24,accordingli:31,accumul:11,activ:[11,20,22],add:[3,11],add_idle_watch:[11,34],add_user_active_watch:[11,34],added:11,affect:3,after:11,again:11,all:[11,22,26,31],alloc:[24,26,31],alreadi:5,also:[11,22],ani:5,anim:[3,5],anoth:22,apart:11,api:31,appli:[15,24,34],applic:[3,15,22,34],apply_persist:[15,34],arrai:31,assign:[15,20],associ:3,assum:[3,22],async:22,asynchron:7,asyncinit:22,asyncreadycallback:[7,22],asyncresult:22,atom:3,avail:[11,19,22,26],avoid:9,b_g:3,b_g_crossfad:5,back:3,background:[3,5,7],backgroundshad:3,backgroundstyl:3,backlight:19,base:[3,5,7,9,11,13,15,20,22,24,26,29,30],becom:11,been:13,befor:5,begin:5,being:20,best_height:3,best_width:3,between:[5,7],bgclass:[1,3,34],bgcrossfad:[2,3,32,34],bgcrossfadeclass:[1,5,34],bgslideshow:[2,32,34],bgslideshowclass:[1,7,34],black:3,block:[9,31],blue:17,bool:[3,5,7,9,15,17,18,19,20,22,24,26,31],both:[5,26],bound:3,bounds_error:[29,34],bright:19,broken:9,brows:33,bug:33,bugzilla:33,cairo:[3,5,7],call:[3,5,9,11,22],callback:[7,11,22,33],caller:[26,31],can:[3,9,11,22],can_clon:[19,34],can_drive_output:[17,34],can_thumbnail:[9,34],cancel:7,care:11,certain:[3,11],cgi:33,chang:[3,22,23],changes_with_tim:[3,34],classmethod:[3,5,7,9,11,13,15,22,24,26],clock:24,clock_format:24,clockformat:24,clone:[15,19,22],code:[26,31],codeset:31,codesetp:31,come:[3,31],common:33,complet:20,compon:31,config2:15,config:15,configur:[15,22,24],connect:[3,15,20,22],constant:33,construct_onli:[5,7,11,15,22],contain:[26,31],conveni:11,convent:3,copi:[3,5],correct:31,could:[5,22],countri:31,country_cod:26,country_codep:31,cours:15,creat:[3,5,7,9,13,18,22,24],create_failed_thumbnail:[9,34],create_frame_thumbnail:[3,34],create_surfac:[3,34],create_thumbnail:[3,34],crossfad:[3,5],crtc:[15,17,20,22],crtc_assign:[29,34],current:[3,5,7,11,17,19,22,24],dai:24,data:[7,11],date:24,datetim:24,deal:22,debian:33,defin:3,depend:33,descript:[3,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,31,33],description_for_group:[26,34],description_for_opt:[26,34],desktop:33,desktop_thumbnail_is_valid:[31,34],desktop_thumbnail_path_for_uri:[31,34],desktopthumbnailfactori:[2,3,32,34],desktopthumbnailfactoryclass:[1,9,34],desktopthumbnails:[9,29,31,34],dest:3,dest_height:3,dest_width:3,determin:3,devel:33,devic:[11,22],didn:22,differ:[3,7],disabl:[5,22],disconnect:22,displai:[20,22,24,26],display_nam:26,do_chang:22,do_finish:5,do_output_connect:22,do_output_disconnect:22,dock:22,doe:[9,22,31],doesn:26,don:[9,26],dpm:22,dpms_mode:22,draw:[3,5,34],driver:22,due:22,durat:7,dure:22,each:22,effect:5,effici:11,either:11,els:3,embed:31,emiss:22,emit:[5,22],empti:26,end:5,ensure_primari:[15,34],equal:[15,34],error:[3,7,11,15,19,22,31],event:22,exceed:11,exist:[9,22,26,31],extract:31,factori:3,fade:5,fail:9,fals:[5,7,20,22,24,26,31],file1:7,file2:7,file:[7,9],filenam:[3,7,31],find:13,finish:[5,6],first:7,fix:7,flag:[3,5,7,11,15,22,24,33],follow:3,form:31,format:24,found:13,frame:[3,7],frame_num:3,frame_numb:7,free:31,freed:24,from:[3,5,22,31],full:13,gdesktopenum:[3,24,33],gdk:[3,5,11,22],gdk_screen:22,gdkpixbuf:[3,9,31],gener:9,generate_thumbnail:[9,34],genum:29,geometri:20,get:[5,7,11,20,22,31],get_all_layout:[26,34],get_all_local:[31,34],get_all_option_group:[26,34],get_aspect_ratio:[20,34],get_backlight:[19,34],get_clock:[24,34],get_clon:[15,34],get_country_from_cod:[31,34],get_country_from_local:[31,34],get_crtc:[19,34],get_crtc_by_id:[22,34],get_current_mod:[17,19,34],get_current_rot:[17,34],get_current_slid:[7,34],get_display_nam:[19,20,34],get_dpms_mod:[22,34],get_edid_data:[19,34],get_filenam:[3,34],get_freq:[18,34],get_freq_f:[18,34],get_gamma:[17,34],get_geometri:[20,34],get_has_multiple_s:[7,34],get_height:[18,34],get_id:[17,18,19,34],get_idletim:[11,34],get_ids_from_edid:[19,34],get_image_s:[3,34],get_input_source_from_local:[31,34],get_is_interlac:[18,34],get_is_primari:[19,34],get_is_til:[18,34],get_is_underscan:[19,34],get_language_from_cod:[31,34],get_language_from_local:[31,34],get_languages_for_layout:[26,34],get_layout_info:[26,34],get_layouts_for_countri:[26,34],get_layouts_for_languag:[26,34],get_min_backlight_step:[19,34],get_nam:[19,20,34],get_num_slid:[7,34],get_options_for_group:[26,34],get_output:[15,34],get_output_by_id:[22,34],get_output_by_nam:[22,34],get_physical_s:[19,34],get_plac:[3,34],get_pnp_id:[13,34],get_posit:[17,19,34],get_possible_crtc:[19,34],get_preferred_height:[20,34],get_preferred_mod:[19,34],get_preferred_width:[20,34],get_primari:[20,34],get_product:[20,34],get_rang:[22,34],get_refresh_r:[20,34],get_rgba:[3,34],get_rot:[17,20,34],get_seri:[20,34],get_slid:[7,34],get_start_tim:[7,34],get_surface_from_root:[3,34],get_timezon:[24,34],get_total_dur:[7,34],get_underscan:[20,34],get_vendor:[20,34],get_width:[18,34],ginterfac:[11,22],gio:[3,7,11,22],gir1:33,given:[13,26,31],glib:[7,11,15,19,22,24,26,29,30,31],global:11,gnome:33,gnome_bg_changes_with_tim:34,gnome_bg_create_frame_thumbnail:34,gnome_bg_create_surfac:34,gnome_bg_create_thumbnail:34,gnome_bg_crossfade_end:5,gnome_bg_crossfade_is_start:34,gnome_bg_crossfade_new:34,gnome_bg_crossfade_set_end_surfac:34,gnome_bg_crossfade_set_start_surfac:34,gnome_bg_crossfade_start:34,gnome_bg_crossfade_stop:34,gnome_bg_draw:34,gnome_bg_get_filenam:34,gnome_bg_get_image_s:34,gnome_bg_get_plac:34,gnome_bg_get_rgba:34,gnome_bg_get_surface_from_root:34,gnome_bg_has_multiple_s:34,gnome_bg_is_dark:34,gnome_bg_load_from_prefer:34,gnome_bg_new:34,gnome_bg_save_to_prefer:34,gnome_bg_set_filenam:34,gnome_bg_set_plac:34,gnome_bg_set_rgba:34,gnome_bg_set_surface_as_root:34,gnome_bg_set_surface_as_root_with_crossfad:34,gnome_bg_slide_show_get_current_slid:34,gnome_bg_slide_show_get_has_multiple_s:34,gnome_bg_slide_show_get_num_slid:34,gnome_bg_slide_show_get_slid:34,gnome_bg_slide_show_get_start_tim:34,gnome_bg_slide_show_get_total_dur:34,gnome_bg_slide_show_load:34,gnome_bg_slide_show_load_async:34,gnome_bg_slide_show_new:34,gnome_desktop_thumbnail_factory_can_thumbnail:34,gnome_desktop_thumbnail_factory_create_failed_thumbnail:34,gnome_desktop_thumbnail_factory_generate_thumbnail:34,gnome_desktop_thumbnail_factory_has_valid_failed_thumbnail:34,gnome_desktop_thumbnail_factory_lookup:34,gnome_desktop_thumbnail_factory_new:34,gnome_desktop_thumbnail_factory_save_thumbnail:34,gnome_desktop_thumbnail_is_valid:34,gnome_desktop_thumbnail_path_for_uri:34,gnome_desktop_thumbnail_size_larg:34,gnome_desktop_thumbnail_size_norm:34,gnome_get_all_local:34,gnome_get_country_from_cod:34,gnome_get_country_from_local:34,gnome_get_input_source_from_local:34,gnome_get_language_from_cod:34,gnome_get_language_from_local:34,gnome_idle_monitor_add_idle_watch:34,gnome_idle_monitor_add_user_active_watch:34,gnome_idle_monitor_get_idletim:34,gnome_idle_monitor_new:34,gnome_idle_monitor_new_for_devic:34,gnome_idle_monitor_remove_watch:34,gnome_language_has_transl:34,gnome_normalize_local:34,gnome_parse_local:34,gnome_pnp_ids_get_pnp_id:34,gnome_pnp_ids_new:34,gnome_rr_config_appli:34,gnome_rr_config_applic:34,gnome_rr_config_apply_persist:34,gnome_rr_config_ensure_primari:34,gnome_rr_config_equ:34,gnome_rr_config_get_clon:34,gnome_rr_config_get_output:34,gnome_rr_config_load_curr:34,gnome_rr_config_match:34,gnome_rr_config_new_curr:34,gnome_rr_config_sanit:34,gnome_rr_config_set_clon:34,gnome_rr_connector_type_panel:34,gnome_rr_crtc_can_drive_output:34,gnome_rr_crtc_get_current_mod:34,gnome_rr_crtc_get_current_rot:34,gnome_rr_crtc_get_gamma:34,gnome_rr_crtc_get_id:34,gnome_rr_crtc_get_posit:34,gnome_rr_crtc_get_rot:34,gnome_rr_crtc_set_gamma:34,gnome_rr_crtc_supports_rot:34,gnome_rr_dpms_off:34,gnome_rr_dpms_on:34,gnome_rr_dpms_standbi:34,gnome_rr_dpms_suspend:34,gnome_rr_dpms_unknown:34,gnome_rr_error_bounds_error:34,gnome_rr_error_crtc_assign:34,gnome_rr_error_no_dpms_extens:34,gnome_rr_error_no_matching_config:34,gnome_rr_error_no_randr_extens:34,gnome_rr_error_quark:34,gnome_rr_error_randr_error:34,gnome_rr_error_unknown:34,gnome_rr_mode_get_freq:34,gnome_rr_mode_get_freq_f:34,gnome_rr_mode_get_height:34,gnome_rr_mode_get_id:34,gnome_rr_mode_get_is_interlac:34,gnome_rr_mode_get_is_til:34,gnome_rr_mode_get_width:34,gnome_rr_output_can_clon:34,gnome_rr_output_get_backlight:34,gnome_rr_output_get_crtc:34,gnome_rr_output_get_current_mod:34,gnome_rr_output_get_display_nam:34,gnome_rr_output_get_edid_data:34,gnome_rr_output_get_id:34,gnome_rr_output_get_ids_from_edid:34,gnome_rr_output_get_is_primari:34,gnome_rr_output_get_is_underscan:34,gnome_rr_output_get_min_backlight_step:34,gnome_rr_output_get_nam:34,gnome_rr_output_get_physical_s:34,gnome_rr_output_get_posit:34,gnome_rr_output_get_possible_crtc:34,gnome_rr_output_get_preferred_mod:34,gnome_rr_output_info_get_aspect_ratio:34,gnome_rr_output_info_get_display_nam:34,gnome_rr_output_info_get_geometri:34,gnome_rr_output_info_get_nam:34,gnome_rr_output_info_get_preferred_height:34,gnome_rr_output_info_get_preferred_width:34,gnome_rr_output_info_get_primari:34,gnome_rr_output_info_get_product:34,gnome_rr_output_info_get_refresh_r:34,gnome_rr_output_info_get_rot:34,gnome_rr_output_info_get_seri:34,gnome_rr_output_info_get_underscan:34,gnome_rr_output_info_get_vendor:34,gnome_rr_output_info_is_act:34,gnome_rr_output_info_is_connect:34,gnome_rr_output_info_is_primary_til:34,gnome_rr_output_info_set_act:34,gnome_rr_output_info_set_geometri:34,gnome_rr_output_info_set_primari:34,gnome_rr_output_info_set_refresh_r:34,gnome_rr_output_info_set_rot:34,gnome_rr_output_info_set_underscan:34,gnome_rr_output_info_supports_rot:34,gnome_rr_output_is_builtin_displai:34,gnome_rr_output_list_mod:34,gnome_rr_output_set_backlight:34,gnome_rr_output_supports_mod:34,gnome_rr_output_supports_underscan:34,gnome_rr_reflect_i:34,gnome_rr_reflect_x:34,gnome_rr_rotation_0:34,gnome_rr_rotation_180:34,gnome_rr_rotation_270:34,gnome_rr_rotation_90:34,gnome_rr_rotation_next:34,gnome_rr_screen_get_crtc_by_id:34,gnome_rr_screen_get_dpms_mod:34,gnome_rr_screen_get_output_by_id:34,gnome_rr_screen_get_output_by_nam:34,gnome_rr_screen_get_rang:34,gnome_rr_screen_list_clone_mod:34,gnome_rr_screen_list_crtc:34,gnome_rr_screen_list_mod:34,gnome_rr_screen_list_output:34,gnome_rr_screen_new:34,gnome_rr_screen_new_async:34,gnome_rr_screen_new_finish:34,gnome_rr_screen_refresh:34,gnome_rr_screen_set_dpms_mod:34,gnome_wall_clock_get_clock:34,gnome_wall_clock_get_timezon:34,gnome_wall_clock_new:34,gnome_wall_clock_string_for_datetim:34,gnome_xkb_info_description_for_group:34,gnome_xkb_info_description_for_opt:34,gnome_xkb_info_get_all_layout:34,gnome_xkb_info_get_all_option_group:34,gnome_xkb_info_get_languages_for_layout:34,gnome_xkb_info_get_layout_info:34,gnome_xkb_info_get_layouts_for_countri:34,gnome_xkb_info_get_layouts_for_languag:34,gnome_xkb_info_get_options_for_group:34,gnome_xkb_info_new:34,gnomebg:34,gnomebgclass:34,gnomebgcrossfad:34,gnomebgcrossfadeclass:34,gnomebgslideshow:34,gnomebgslideshowclass:34,gnomedesktop:[0,1,2,28,29,30,31,32,34,35],gnomedesktopthumbnailfactori:34,gnomedesktopthumbnailfactoryclass:34,gnomedesktopthumbnails:34,gnomeidlemonitor:34,gnomeidlemonitorclass:34,gnomeidlemonitorwatchfunc:34,gnomepnpid:34,gnomepnpidsclass:34,gnomerr:31,gnomerrconfig:34,gnomerrconfigclass:34,gnomerrcrtc:34,gnomerrdpmsmod:34,gnomerrdpmsmodetyp:34,gnomerrerror:34,gnomerrmod:34,gnomerroutput:34,gnomerroutputinfo:34,gnomerroutputinfoclass:34,gnomerrrot:34,gnomerrscreen:34,gnomerrscreenclass:34,gnomewallclock:34,gnomewallclockclass:34,gnomexkbinfo:34,gnomexkbinfoclass:34,gobject:[3,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,29,32,33],gquark:31,grab:3,green:17,group:26,group_id:26,gtk:33,handler:22,happen:[5,22],happend:5,harmless:5,has:[7,11,22,31],has_multiple_s:[3,7,34],has_valid_failed_thumbnail:[9,34],have:[5,11,13,15,31],height:[3,5,7,15,17,20,22],height_mm:19,hierarchi:33,hot:22,hotplug:22,how:5,http:[31,33],identifi:[22,26,31],idl:[11,22],idlemonitor:[0,2,32,34],idlemonitorclass:[1,11,34],idlemonitorwatchfunc:[0,11,34],idletim:11,ids:26,imag:9,immedi:5,includ:24,info:26,inform:[5,26],inherit:[3,5,7,9,11,13,15,20,22,24,26],init:[11,22],initi:5,input:31,instanc:[22,26],instead:22,intern:[24,26],interv:11,interval_msec:11,irrespect:24,is_act:[20,34],is_builtin_displai:[19,34],is_connect:[20,34],is_dark:[3,34],is_fix:7,is_primary_til:[20,34],is_root:3,is_start:[5,34],iso:[26,31],its:5,keep:22,know:[11,26],kwarg:[3,5,7,9,11,13,15,20,22,24,26],languag:[26,31],language_cod:26,language_codep:31,language_has_transl:[31,34],laptop:22,larg:[29,34],later:[9,22],latter:22,layout:26,layout_id:26,leak:3,least:[9,15],letter:26,librari:33,list:[22,26,33],list_clone_mod:[22,34],list_crtc:[22,34],list_mod:[19,22,34],list_output:[22,34],listen:11,listinfo:33,load:[7,31,34],load_async:[7,34],load_curr:[15,34],load_from_prefer:[3,34],local:[24,26,31],locat:[9,26,31],look:[9,13],lookup:[9,34],mai:[5,22],mail:33,mailman:33,main:9,make:3,manag:[5,7],manufactur:13,map:33,match:[15,34],max_height:22,max_width:22,maximum:[17,22],might:26,millisecond:11,mime:9,mime_typ:9,min_height:22,min_width:22,minimum:[17,19,22],mode:[17,18,19,22],modif:9,modifi:[22,24,26,31],modifierp:31,modul:33,monitor:[0,7,18,20],more:11,most:11,mtime:[9,31],multipl:7,must:[3,9,11,24,26],name:[3,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,31],need:5,never:24,new_async:[22,34],new_curr:[15,34],new_finish:[22,34],new_for_devic:[11,34],newli:[3,24,31],no_dpms_extens:[29,34],no_hook:22,no_matching_config:[29,34],no_randr_extens:[29,34],no_recurs:22,non:[9,22],none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31],normal:[29,31,34],normalize_local:[31,34],note:11,now:24,number:7,object:[0,3,5,6,7,9,11,13,15,20,22,23,24,26,32],objectclass:[3,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27],off:[29,34],offset:[15,20],one:[3,11,13],onli:[11,22,24],oper:22,option:[24,26,31],org:[31,33],origin:9,original_mtim:9,otherwis:[9,22,26,31],out:[3,26],output:[15,17,19,20,22],output_connect:[22,23],output_disconnect:[22,23],ownership:[26,31],packag:33,panel:28,paramet:[0,3,5,7,9,11,13,15,17,19,20,22,24,26,31],parent:[9,10,11,13,15,20,22,33],parent_class:[6,8,12,14,16,21,23,25,27],parent_object:[5,7,24,26],pars:31,parse_local:[31,34],pass:[11,24],path:9,percent:19,physic:20,pixbuf:[3,9,31],pixmap:3,place:[9,22],placement:3,png:31,pnp:13,pnp_id:13,pnpid:[2,32,34],pnpidsclass:[1,13,34],point:[3,24],port:22,posit:11,previous:11,primari:[3,20],product:[19,33],progress:[5,7],project:33,prop:[5,7,11,15,22,24],provid:[22,26,31],purpos:11,python:34,queri:3,quick:5,r_r_screen:22,rais:[7,11,15,19,22],randr_error:[29,34],rang:22,rate:20,readabl:[5,7,11,22,24],receiv:[3,5,22],red:17,refer:[13,22],reflect_i:[30,34],reflect_x:[30,34],refresh:[22,34],remov:11,remove_watch:[11,34],repres:[13,22,24],result:22,retriev:[7,26],reveal:5,rgba:3,right:[9,22,31],root:3,rotat:[17,20],rotation_0:[30,34],rotation_180:[30,34],rotation_270:[30,34],rotation_90:[30,34],rotation_next:[30,34],rr_connector_type_panel:[28,34],rr_error_quark:[31,34],rrconfig:[2,32,34],rrconfigclass:[1,15,34],rrcrtc:[19,22,34,35],rrdpmsmode:[22,29,34],rrdpmsmodetyp:[22,29,34],rrerror:[29,34],rrmode:[17,19,22,34,35],rroutput:[17,22,34,35],rroutputinfo:[2,15,32,34],rroutputinfoclass:[1,20,34],rrrotat:[17,20,30,34],rrscreen:[2,15,32,34],rrscreenclass:[1,22,34],run:5,run_first:22,run_last:[3,5],same:[3,15],sanit:[15,34],save:9,save_thumbnail:[9,34],save_to_prefer:[3,34],screen:[3,15,22],second:7,secondari:[3,20],see:[5,31],self:5,sent:20,serial:19,server:[3,11,22],set:[3,5,11,19,20,24,26],set_act:[20,34],set_backlight:[19,34],set_clon:[15,34],set_dpms_mod:[22,34],set_end_surfac:[5,34],set_filenam:[3,34],set_gamma:[17,34],set_geometri:[20,34],set_plac:[3,34],set_primari:[20,34],set_refresh_r:[20,34],set_rgba:[3,34],set_rot:[20,34],set_start_surfac:[5,34],set_surface_as_root:[3,34],set_surface_as_root_with_crossfad:[3,34],set_underscan:[20,34],sever:9,short_nam:26,should:3,show:[3,7,26],show_full_d:24,show_second:24,show_weekdai:24,shown:5,singl:[3,22],size:[7,9,17,19,31],skip:5,slide:7,slideshow:3,some:26,somebodi:3,someon:3,somewhat:3,sourc:31,span:18,specif:[11,22],specifi:[9,20,22,26],standbi:[29,34],start:[5,7,34],start_tim:7,step:[3,19],stop:[5,34],storag:24,store:[24,26,31],str:[3,7,9,13,19,20,22,24,26,31],strfreev:31,strictli:11,string:[13,24,26,31],string_for_datetim:[24,34],struct:[3,5,7,9,11,13,15,20,22,24,26],structur:[3,5,7,9,11,13,15,20,22,24,26,33],subclass:[3,5,7,9,11,13,15,20,22,24,26],subtl:3,succe:9,succeed:9,success:[3,5,7,17,19,31],suitabl:[3,26],support:[22,26],supports_mod:[19,34],supports_rot:[17,20,34],supports_underscan:[19,34],sure:3,surfac:[3,5,7],suspend:[29,34],symbol:33,take:[26,31],tell:11,temporari:3,termin:31,than:11,thei:[3,15],themselv:26,therefor:22,thi:[3,5,9,11,15,17,18,19,20,22,24,31],those:[15,26],thread:9,threadsaf:[9,31],through:3,thu:22,thumbnail:[3,9,31],tile:[18,20],time:[3,7,9,11,24],time_onli:24,timeout:22,timestamp:7,timezon:24,total:7,total_dur:7,track:11,tracker:33,transit:[3,11],translat:[26,31],tri:[7,9],trigger:11,two:[5,7,15],type:[3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31],under:11,underscan:20,undock:22,uniqu:22,unknown:[22,29,34],unplug:22,until:20,uri:[9,31],usag:9,use:[9,11],used:[9,11,24,31],user:[7,11,24],user_data:[0,7,11,22],vagu:3,valid:22,valu:[5,7,11,15,19,22,24,26,29,30,31],variant:26,variou:[31,33],vendor:19,version:[9,26,31],wallclock:[2,32,34],wallclockclass:[1,24,34],want:11,watch:11,watcher:11,wayland:11,week:24,when:[5,11,13,22],where:3,whether:[5,7,15,20,31],which:[3,5,19,22,26],who:3,width:[3,5,7,15,17,20,22],width_mm:19,wiki:31,wikipedia:31,window:[3,5,7],within:22,won:[3,9],work:11,would:31,writabl:[5,7,11,15,22,24],write:9,written:9,x11:11,xkb:26,xkb_layout:26,xkb_variant:26,xkbinfo:[2,32,34],xkbinfoclass:[1,26,34],xkillclient:3,xlib:[3,22],xrandr:22,you:11,your:22,zone:24},titles:["Callbacks","Class Structures","Classes","GnomeDesktop.BG","GnomeDesktop.BGClass","GnomeDesktop.BGCrossfade","GnomeDesktop.BGCrossfadeClass","GnomeDesktop.BGSlideShow","GnomeDesktop.BGSlideShowClass","GnomeDesktop.DesktopThumbnailFactory","GnomeDesktop.DesktopThumbnailFactoryClass","GnomeDesktop.IdleMonitor","GnomeDesktop.IdleMonitorClass","GnomeDesktop.PnpIds","GnomeDesktop.PnpIdsClass","GnomeDesktop.RRConfig","GnomeDesktop.RRConfigClass","GnomeDesktop.RRCrtc","GnomeDesktop.RRMode","GnomeDesktop.RROutput","GnomeDesktop.RROutputInfo","GnomeDesktop.RROutputInfoClass","GnomeDesktop.RRScreen","GnomeDesktop.RRScreenClass","GnomeDesktop.WallClock","GnomeDesktop.WallClockClass","GnomeDesktop.XkbInfo","GnomeDesktop.XkbInfoClass","Constants","Enums","Flags","Functions","Hierarchy","GnomeDesktop 3.0 (3.28.2)","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,5,7,9,11,13,15,20,22,24,26],"enum":29,"function":31,api:33,bgclass:4,bgcrossfad:5,bgcrossfadeclass:6,bgslideshow:7,bgslideshowclass:8,callback:0,constant:28,desktopthumbnailfactori:9,desktopthumbnailfactoryclass:10,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],flag:30,gnomedesktop:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,33],hierarchi:32,idlemonitor:11,idlemonitorclass:12,map:34,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],pnpid:13,pnpidsclass:14,properti:[3,5,7,9,11,13,15,20,22,24,26],rrconfig:15,rrconfigclass:16,rrcrtc:17,rrmode:18,rroutput:19,rroutputinfo:20,rroutputinfoclass:21,rrscreen:22,rrscreenclass:23,signal:[3,5,7,9,11,13,15,20,22,24,26],structur:[1,35],symbol:34,virtual:[3,5,7,9,11,13,15,20,22,24,26],wallclock:24,wallclockclass:25,xkbinfo:26,xkbinfoclass:27}})