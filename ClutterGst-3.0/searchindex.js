Search.setIndex({envversion:49,filenames:["class-structs","classes","classes/Aspectratio","classes/AspectratioClass","classes/Box","classes/Camera","classes/CameraClass","classes/CameraDevice","classes/CameraDeviceClass","classes/CameraManager","classes/CameraManagerClass","classes/Content","classes/ContentClass","classes/Crop","classes/CropClass","classes/Frame","classes/Overlay","classes/Overlays","classes/Playback","classes/PlaybackClass","classes/Player","classes/PlayerIface","classes/VideoResolution","classes/VideoSink","classes/VideoSinkClass","constants","enums","flags","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],objects:{"ClutterGst.Aspectratio":{"new":[2,1,1,""]},"ClutterGst.Aspectratio.props":{fill_allocation:[2,2,1,""],paint_borders:[2,2,1,""]},"ClutterGst.Box":{get_height:[4,3,1,""],get_width:[4,3,1,""]},"ClutterGst.BufferingMode":{DOWNLOAD:[26,4,1,""],STREAM:[26,4,1,""]},"ClutterGst.Camera":{"new":[5,1,1,""],do_photo_saved:[5,3,1,""],do_photo_taken:[5,3,1,""],do_ready_for_capture:[5,3,1,""],do_video_saved:[5,3,1,""],get_brightness:[5,3,1,""],get_brightness_range:[5,3,1,""],get_camera_device:[5,3,1,""],get_color_balance_property:[5,3,1,""],get_color_balance_property_range:[5,3,1,""],get_contrast:[5,3,1,""],get_contrast_range:[5,3,1,""],get_filter:[5,3,1,""],get_gamma:[5,3,1,""],get_gamma_range:[5,3,1,""],get_hue:[5,3,1,""],get_hue_range:[5,3,1,""],get_saturation:[5,3,1,""],get_saturation_range:[5,3,1,""],is_ready_for_capture:[5,3,1,""],is_recording_video:[5,3,1,""],remove_filter:[5,3,1,""],set_brightness:[5,3,1,""],set_camera_device:[5,3,1,""],set_color_balance_property:[5,3,1,""],set_contrast:[5,3,1,""],set_filter:[5,3,1,""],set_gamma:[5,3,1,""],set_hue:[5,3,1,""],set_photo_profile:[5,3,1,""],set_saturation:[5,3,1,""],set_video_profile:[5,3,1,""],start_video_recording:[5,3,1,""],stop_video_recording:[5,3,1,""],supports_color_balance:[5,3,1,""],supports_gamma_correction:[5,3,1,""],take_photo:[5,3,1,""],take_photo_pixbuf:[5,3,1,""]},"ClutterGst.Camera.props":{device:[5,2,1,""]},"ClutterGst.Camera.signals":{photo_saved:[5,5,1,""],photo_taken:[5,5,1,""],ready_for_capture:[5,5,1,""],video_saved:[5,5,1,""]},"ClutterGst.CameraDevice":{do_capture_resolution_changed:[7,3,1,""],get_capture_resolution:[7,3,1,""],get_name:[7,3,1,""],get_node:[7,3,1,""],get_supported_resolutions:[7,3,1,""],set_capture_resolution:[7,3,1,""]},"ClutterGst.CameraDevice.props":{element_factory:[7,2,1,""],name:[7,2,1,""],node:[7,2,1,""]},"ClutterGst.CameraDevice.signals":{capture_resolution_changed:[7,5,1,""]},"ClutterGst.CameraManager":{get_camera_devices:[9,3,1,""],get_default:[9,1,1,""]},"ClutterGst.CameraManager.signals":{camera_added:[9,5,1,""],camera_removed:[9,5,1,""]},"ClutterGst.Content":{"new":[11,1,1,""],do_has_painting_content:[11,3,1,""],get_frame:[11,3,1,""],get_overlays:[11,3,1,""],get_player:[11,3,1,""],get_sink:[11,3,1,""],new_with_sink:[11,1,1,""],set_frame:[11,3,1,""],set_player:[11,3,1,""],set_sink:[11,3,1,""]},"ClutterGst.Content.props":{frame:[11,2,1,""],paint_frame:[11,2,1,""],paint_overlays:[11,2,1,""],player:[11,2,1,""],sink:[11,2,1,""]},"ClutterGst.Content.signals":{size_change:[11,5,1,""]},"ClutterGst.Crop":{"new":[13,1,1,""]},"ClutterGst.Crop.props":{cull_backface:[13,2,1,""],input_region:[13,2,1,""],output_region:[13,2,1,""],paint_borders:[13,2,1,""]},"ClutterGst.Playback":{"new":[18,1,1,""],do_should_buffer:[18,3,1,""],get_audio_stream:[18,3,1,""],get_audio_streams:[18,3,1,""],get_buffer_duration:[18,3,1,""],get_buffer_fill:[18,3,1,""],get_buffer_size:[18,3,1,""],get_buffering_mode:[18,3,1,""],get_duration:[18,3,1,""],get_in_seek:[18,3,1,""],get_position:[18,3,1,""],get_progress:[18,3,1,""],get_seek_flags:[18,3,1,""],get_subtitle_font_name:[18,3,1,""],get_subtitle_track:[18,3,1,""],get_subtitle_tracks:[18,3,1,""],get_subtitle_uri:[18,3,1,""],get_uri:[18,3,1,""],get_user_agent:[18,3,1,""],is_live_media:[18,3,1,""],set_audio_stream:[18,3,1,""],set_buffer_duration:[18,3,1,""],set_buffer_size:[18,3,1,""],set_buffering_mode:[18,3,1,""],set_filename:[18,3,1,""],set_progress:[18,3,1,""],set_seek_flags:[18,3,1,""],set_subtitle_font_name:[18,3,1,""],set_subtitle_track:[18,3,1,""],set_subtitle_uri:[18,3,1,""],set_uri:[18,3,1,""],set_user_agent:[18,3,1,""]},"ClutterGst.Playback.props":{audio_stream:[18,2,1,""],audio_streams:[18,2,1,""],buffer_fill:[18,2,1,""],can_seek:[18,2,1,""],duration:[18,2,1,""],in_seek:[18,2,1,""],progress:[18,2,1,""],seek_flags:[18,2,1,""],subtitle_font_name:[18,2,1,""],subtitle_track:[18,2,1,""],subtitle_tracks:[18,2,1,""],subtitle_uri:[18,2,1,""],uri:[18,2,1,""],user_agent:[18,2,1,""]},"ClutterGst.Playback.signals":{should_buffer:[18,5,1,""]},"ClutterGst.Player":{do_eos:[20,3,1,""],do_error:[20,3,1,""],do_get_audio_volume:[20,3,1,""],do_get_frame:[20,3,1,""],do_get_idle:[20,3,1,""],do_get_pipeline:[20,3,1,""],do_get_playing:[20,3,1,""],do_get_video_sink:[20,3,1,""],do_new_frame:[20,3,1,""],do_ready:[20,3,1,""],do_set_audio_volume:[20,3,1,""],do_set_playing:[20,3,1,""],do_size_change:[20,3,1,""],get_audio_volume:[20,3,1,""],get_frame:[20,3,1,""],get_idle:[20,3,1,""],get_pipeline:[20,3,1,""],get_playing:[20,3,1,""],get_video_sink:[20,3,1,""],set_audio_volume:[20,3,1,""],set_playing:[20,3,1,""]},"ClutterGst.Player.props":{audio_volume:[20,2,1,""],idle:[20,2,1,""],playing:[20,2,1,""]},"ClutterGst.Player.signals":{eos:[20,5,1,""],error:[20,5,1,""],new_frame:[20,5,1,""],ready:[20,5,1,""],size_change:[20,5,1,""]},"ClutterGst.SeekFlags":{ACCURATE:[27,4,1,""],NONE:[27,4,1,""]},"ClutterGst.VideoSink":{"new":[23,1,1,""],do_new_frame:[23,3,1,""],do_new_overlays:[23,3,1,""],do_pipeline_ready:[23,3,1,""],get_frame:[23,3,1,""],get_overlays:[23,3,1,""],is_ready:[23,3,1,""]},"ClutterGst.VideoSink.props":{update_priority:[23,2,1,""]},"ClutterGst.VideoSink.signals":{new_frame:[23,5,1,""],new_overlays:[23,5,1,""],pipeline_ready:[23,5,1,""]},ClutterGst:{Aspectratio:[2,0,1,""],AspectratioClass:[3,0,1,""],Box:[4,0,1,""],BufferingMode:[26,0,1,""],Camera:[5,0,1,""],CameraClass:[6,0,1,""],CameraDevice:[7,0,1,""],CameraDeviceClass:[8,0,1,""],CameraManager:[9,0,1,""],CameraManagerClass:[10,0,1,""],Content:[11,0,1,""],ContentClass:[12,0,1,""],Crop:[13,0,1,""],CropClass:[14,0,1,""],Frame:[15,0,1,""],MAJOR_VERSION:[25,2,1,""],MICRO_VERSION:[25,2,1,""],MINOR_VERSION:[25,2,1,""],Overlay:[16,0,1,""],Overlays:[17,0,1,""],Playback:[18,0,1,""],PlaybackClass:[19,0,1,""],Player:[20,0,1,""],PlayerIface:[21,0,1,""],SeekFlags:[27,0,1,""],VERSION_HEX:[25,2,1,""],VERSION_S:[25,2,1,""],VideoResolution:[22,0,1,""],VideoSink:[23,0,1,""],VideoSinkClass:[24,0,1,""],create_video_sink:[28,5,1,""],init:[28,5,1,""],init_with_args:[28,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","classmethod","Python class method"],"2":["py","data","Python data"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:classmethod","2":"py:data","3":"py:method","4":"py:attribute","5":"py:function"},terms:{"24pt":18,"abstract":[2,5,7,9,11,13,18,23],"byte":18,"default":[2,5,7,9,11,13,18,20,23,27],"float":[4,5,18,20],"function":[5,9,23],"int":[7,11,18,20,22,23],"new":[2,4,5,7,9,11,12,13,15,16,17,18,20,21,22,23,24,26,27,28,33],"return":[2,4,5,7,9,11,13,18,20,23,28],"short":[2,5,7,9,11,13,18,20,23],"true":[5,11,18,20,23],"while":[5,18],access:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],accurat:27,accurate:[27,33],action:5,activ:5,actor:[4,5,13,20],actual:20,add:28,addition:28,after:[23,28],agent:18,all:[5,13],alloc:[2,4,13],allow:[5,28],also:23,altern:23,amount:18,ani:[5,28],api:[11,12,20,23],appear:18,applic:23,area:4,argv:28,arrai:[7,9,17,28],aspect:2,aspectratio:1,aspectratioclass:[0,2],assum:5,asynchron:20,attach:[11,23],audio:[18,20],audio_stream:18,audio_volum:20,automat:28,avail:[9,18,23,28],backfac:13,balanc:5,base:[2,3,5,6,7,8,9,10,11,13,14,18,19,20,23,26,27],base_ifac:21,basesink:[23,29],becaus:18,becom:20,been:18,befor:[23,28],begin:18,between:[13,18,20,23],bool:[2,5,11,13,18,20,23],border:[2,13],both:28,bottom:4,bound:4,boundari:27,buffer:[18,26],buffer_fil:18,bufferingmod:[18,26,33],bug:31,bugzilla:31,call:[5,9,23,28],camera:1,camera_ad:9,camera_devic:[7,9],camera_manag:9,camera_remov:9,cameraclass:[0,5],cameradevic:[1,5],cameradeviceclass:[0,7],cameramanag:1,cameramanagerclass:[0,9],can:[5,18,23,27],can_seek:18,cannot:20,captur:[5,7],capture_resolution_chang:[7,8],caus:23,cgi:31,chang:[5,7,11,20],check:5,classmethod:[2,5,9,11,13,18,23],clutter:[2,5,9,11,13,18,20,26,28,31],clutter_gst_aspectratio_new:33,clutter_gst_box_get_height:33,clutter_gst_box_get_width:33,clutter_gst_buffering_mode_download:33,clutter_gst_buffering_mode_stream:33,clutter_gst_camera_device_get_capture_resolut:33,clutter_gst_camera_device_get_nam:33,clutter_gst_camera_device_get_nod:33,clutter_gst_camera_device_get_supported_resolut:33,clutter_gst_camera_device_set_capture_resolut:33,clutter_gst_camera_get_bright:33,clutter_gst_camera_get_brightness_rang:33,clutter_gst_camera_get_camera_devic:33,clutter_gst_camera_get_color_balance_properti:33,clutter_gst_camera_get_color_balance_property_rang:33,clutter_gst_camera_get_contrast:33,clutter_gst_camera_get_contrast_rang:33,clutter_gst_camera_get_filt:33,clutter_gst_camera_get_gamma:33,clutter_gst_camera_get_gamma_rang:33,clutter_gst_camera_get_hu:33,clutter_gst_camera_get_hue_rang:33,clutter_gst_camera_get_satur:33,clutter_gst_camera_get_saturation_rang:33,clutter_gst_camera_is_ready_for_captur:33,clutter_gst_camera_is_recording_video:33,clutter_gst_camera_manager_get_camera_devic:33,clutter_gst_camera_manager_get_default:33,clutter_gst_camera_new:33,clutter_gst_camera_remove_filt:33,clutter_gst_camera_set_bright:33,clutter_gst_camera_set_camera_devic:33,clutter_gst_camera_set_color_balance_properti:33,clutter_gst_camera_set_contrast:33,clutter_gst_camera_set_filt:33,clutter_gst_camera_set_gamma:33,clutter_gst_camera_set_hu:33,clutter_gst_camera_set_photo_profil:33,clutter_gst_camera_set_satur:33,clutter_gst_camera_set_video_profil:33,clutter_gst_camera_start_video_record:33,clutter_gst_camera_stop_video_record:33,clutter_gst_camera_supports_color_bal:33,clutter_gst_camera_supports_gamma_correct:33,clutter_gst_camera_take_photo:33,clutter_gst_camera_take_photo_pixbuf:33,clutter_gst_content_get_fram:33,clutter_gst_content_get_overlai:33,clutter_gst_content_get_play:33,clutter_gst_content_get_sink:33,clutter_gst_content_new:33,clutter_gst_content_new_with_sink:33,clutter_gst_content_set_fram:33,clutter_gst_content_set_play:33,clutter_gst_content_set_sink:33,clutter_gst_create_video_sink:33,clutter_gst_crop_new:33,clutter_gst_init:33,clutter_gst_init_with_arg:33,clutter_gst_major_version:33,clutter_gst_micro_version:33,clutter_gst_minor_version:33,clutter_gst_playback_get_audio_stream:33,clutter_gst_playback_get_buffer_dur:33,clutter_gst_playback_get_buffer_fil:33,clutter_gst_playback_get_buffer_s:33,clutter_gst_playback_get_buffering_mod:33,clutter_gst_playback_get_dur:33,clutter_gst_playback_get_in_seek:33,clutter_gst_playback_get_posit:33,clutter_gst_playback_get_progress:33,clutter_gst_playback_get_seek_flag:33,clutter_gst_playback_get_subtitle_font_nam:33,clutter_gst_playback_get_subtitle_track:33,clutter_gst_playback_get_subtitle_uri:33,clutter_gst_playback_get_uri:33,clutter_gst_playback_get_user_ag:33,clutter_gst_playback_is_live_media:33,clutter_gst_playback_new:33,clutter_gst_playback_set_audio_stream:33,clutter_gst_playback_set_buffer_dur:33,clutter_gst_playback_set_buffer_s:33,clutter_gst_playback_set_buffering_mod:33,clutter_gst_playback_set_filenam:33,clutter_gst_playback_set_progress:33,clutter_gst_playback_set_seek_flag:33,clutter_gst_playback_set_subtitle_font_nam:[18,33],clutter_gst_playback_set_subtitle_track:33,clutter_gst_playback_set_subtitle_uri:33,clutter_gst_playback_set_uri:33,clutter_gst_playback_set_user_ag:33,clutter_gst_player_get_audio_volum:33,clutter_gst_player_get_fram:33,clutter_gst_player_get_idl:33,clutter_gst_player_get_pipelin:33,clutter_gst_player_get_plai:33,clutter_gst_player_get_video_sink:33,clutter_gst_player_set_audio_volum:33,clutter_gst_player_set_plai:33,clutter_gst_player_set_seek_flag:27,clutter_gst_seek_flag_accurate:33,clutter_gst_seek_flag_none:33,clutter_gst_version:25,clutter_gst_version_hex:33,clutter_gst_version_s:33,clutter_gst_video_sink_attach_fram:23,clutter_gst_video_sink_get_fram:33,clutter_gst_video_sink_get_overlai:33,clutter_gst_video_sink_get_pipelin:[23,33],clutter_gst_video_sink_is_readi:33,clutter_gst_video_sink_new:33,clutter_gst_video_sink_setup_pipelin:[23,33],cluttergst:[0,1],cluttergstaspectratio:33,cluttergstaspectratioclass:33,cluttergstbox:33,cluttergstbufferingmod:33,cluttergstcamera:33,cluttergstcameraclass:33,cluttergstcameradevic:33,cluttergstcameradeviceclass:33,cluttergstcameramanag:33,cluttergstcameramanagerclass:33,cluttergstcont:33,cluttergstcontentclass:33,cluttergstcrop:33,cluttergstcropclass:33,cluttergstfram:33,cluttergstoverlai:33,cluttergstplay:33,cluttergstplayback:33,cluttergstplaybackclass:33,cluttergstplayerifac:33,cluttergstseekflag:33,cluttergstvideoactor:20,cluttergstvideoresolut:33,cluttergstvideosink:33,cluttergstvideosinkclass:33,cogl:[11,28,31],coglpipelin:[15,16],color:5,colorbal:23,combin:18,command:28,complet:23,compon:23,configur:23,connect:23,construct_only:7,constructor:5,contain:[2,5,7,9,11,12,13,18,23],content:[1,2],contentclass:[0,3,11],context:28,continu:18,coordin:4,copi:23,corner:4,correct:5,could:23,creat:[5,23,28],create_video_sink:[28,33],crop:[1,11],cropclass:[0,13],cull:13,cull_backfac:13,cur_valu:5,current:[5,7,11,18,20,23],custom:[18,23],data:[2,5,7,9,11,12,13,18,23],debian:31,decid:18,default_valu:5,depend:31,describ:[18,28],descript:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,31],devic:[5,7,9],didn:23,differ:[20,26],dimens:20,direct:20,directli:[2,5,7,9,13,18,20],disk:[5,26],displai:[2,5,13,18,23,28],do_capture_resolution_chang:7,do_eo:20,do_error:20,do_get_audio_volum:20,do_get_fram:20,do_get_idl:20,do_get_pipelin:20,do_get_plai:20,do_get_video_sink:20,do_has_painting_cont:11,do_new_fram:[20,23],do_new_overlai:23,do_photo_sav:5,do_photo_taken:5,do_pipeline_readi:23,do_readi:20,do_ready_for_captur:5,do_set_audio_volum:20,do_set_plai:20,do_should_buff:18,do_size_chang:20,do_video_sav:5,doe:[5,28],domain:28,done:18,doubl:20,download:[18,26,33],durat:18,each:[11,20],effect:5,either:[18,23],element:[5,7,20,23,28,29],element_factori:7,elementclass:23,elementfactori:7,els:23,emit:[5,7,9,11,18,20,23],encod:[5,25],encodingprofil:5,end:[18,20],enough:23,enter_bug:31,entri:28,error:[20,21,23,28],etc:5,everi:18,exampl:20,exist:5,express:[4,18],factori:7,failur:28,fals:[2,5,13,18,20,23],fast:27,file:[5,18],filenam:[5,18],fill:[2,18],fill_alloc:2,filter:5,first:28,flag:[2,5,7,9,11,13,18,20,23],follow:18,font:18,font_nam:18,fontdescript:18,format:[18,28],frame:[11,13],free:[18,23],freed:18,from:[5,9,18,20,23],from_str:18,full:25,g_thread_init:28,gamma:5,gather:23,gdkpixbuf:[5,31],gener:28,genum:26,get:[9,18,20,23],get_audio_stream:[18,33],get_audio_volum:[20,21,33],get_bright:[5,33],get_brightness_rang:[5,33],get_buffer_dur:[18,33],get_buffer_fil:[18,33],get_buffer_s:[18,33],get_buffering_mod:[18,33],get_camera_devic:[5,9,33],get_capture_resolut:[7,33],get_color_balance_properti:[5,33],get_color_balance_property_rang:[5,33],get_contrast:[5,33],get_contrast_rang:[5,33],get_default:[9,33],get_dur:[18,33],get_filt:[5,33],get_fram:[11,20,21,23,33],get_gamma:[5,33],get_gamma_rang:[5,33],get_height:[4,33],get_hu:[5,33],get_hue_rang:[5,33],get_idl:[20,21,33],get_in_seek:[18,33],get_nam:[7,33],get_nod:[7,33],get_overlai:[11,23,33],get_pipelin:[20,21,33],get_plai:[20,21,33],get_play:[11,33],get_posit:[18,33],get_progress:[18,33],get_satur:[5,33],get_saturation_rang:[5,33],get_seek_flag:[18,33],get_sink:[11,33],get_subtitle_font_nam:[18,33],get_subtitle_track:[18,33],get_subtitle_uri:[18,33],get_supported_resolut:[7,33],get_uri:[18,33],get_user_ag:[18,33],get_video_sink:[20,21,33],get_width:[4,33],gettext:28,gflag:27,ginterfac:[2,5,11,13,18,20,23],gir1:31,git:31,given:[23,27],glib:[18,20,28],gnome:31,gobject:[2,5,6,7,8,9,10,11,12,13,18,19,20,21,23,26,27,29,31],grammar:18,gst:[5,7,18,20,23,26,28,29,31],gstaudio:31,gstbase:[23,29,31],gstpbutil:[5,31],gstreamer:[5,7,18,20,28,31],gstvideo:[23,24,29,31],handler:23,happen:5,has_painting_cont:12,have:[18,23],height:[4,7,11,20,22],help:28,hexadecim:25,homepag:31,http:31,idl:20,idle:20,imag:5,imperson:18,implement:[2,5,13,18,20,21],in_seek:18,index:18,index_:18,inform:23,inherit:[2,5,7,9,11,13,18,23],init:[28,33],init_with_arg:[28,33],initerror:28,initi:28,initialis:28,initiallyunown:[23,29],input:13,input_region:13,instanc:[2,11,13],instead:23,integ:28,integr:31,interfac:21,interv:4,is_live_media:[18,33],is_readi:[23,33],is_ready_for_captur:[5,33],is_recording_video:[5,33],isn:23,jpeg:5,kei:27,know:[5,20],kwarg:[2,5,7,9,11,13,18,23],last:20,left:4,level:18,librari:31,like:18,line:28,list:[9,18,31],live:18,locat:[7,18],mail:31,main:[5,9],major:25,major_version:[25,33],make:[18,23],manag:9,map:31,max_valu:5,maximum:5,mean:18,media:[18,20],member:20,memori:26,micro:25,micro_version:[25,33],might:[18,20],min_valu:5,minimum:5,minor:25,minor_version:[25,33],mode:[18,20],modifi:23,must:[18,28],name:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],navig:23,need:18,neg:28,network:18,new_fram:[20,21,23,24],new_overlai:[23,24],new_with_sink:[11,33],newli:[5,20,28],nice:28,node:7,none:[2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,33],normal:[18,20,23],note:23,notifi:20,number:18,object:[2,5,6,7,8,9,11,12,13,15,16,17,18,19,20,21,23,24,29],objectclass:[2,5,6,7,8,9,10,11,12,13,18,19,23],occur:20,off:18,ogg:5,onli:[2,5,7,9,11,12,13,18,23],opaqu:20,opportun:23,option:28,optionentri:28,optiongroup:28,org:31,other:28,otherwis:[5,18,20],output:[13,15,16,28],output_region:13,overlai:11,own:28,packag:31,paint:[2,11,13,15,16],paint_bord:[2,13],paint_fram:11,paint_overlai:11,pango:18,par_d:22,par_n:22,paramet:[5,7,9,11,18,20,23,28],parameter_str:28,parent:[2,5,7,9,11,13,18,23,31],parent_class:[3,6,8,10,12,14,19,24],pass:23,path:18,photo:5,photo_sav:[5,6],photo_taken:[5,6],pipelin:[15,16,20,23],pipeline_readi:[23,24],piplin:20,pixbuf:5,pixel:22,plai:[5,18,20],playback:1,playbackclass:[0,18],player:[5,11,18],playerifac:20,pointer:[5,7,28],polici:26,poll:23,posit:[16,18],potenti:27,previou:20,prioriti:23,privat:[2,5,7,9,11,12,13,18,23],process:5,produc:20,product:31,profil:5,program:28,programnam:28,progress:18,project:31,promot:18,prop:[2,5,7,11,13,18,20,23],protocol:18,provid:[11,12,23],python:33,queri:18,rais:28,rather:2,ratio:2,readable:[2,5,7,11,13,18,20,23],readi:[5,20,21,23],ready_for_captur:[5,6],receiv:[5,7,9,11,18,20,23],recogn:18,record:5,region:13,remov:[5,9],remove_filt:[5,33],render:[18,23],repositori:31,repres:[7,9,15,16,18],requir:[5,18],resolut:[7,15,22],respect:2,retriev:[4,5,7,9,18,20],right:4,run_last:[5,7,9,11,18,20,23],same:[5,18,28],san:18,save:5,second:18,see:5,seek:[18,27],seek_flag:18,seekabl:18,seekflag:[18,27,33],select:5,self:[4,5,7,11,18,20],server:18,set:[5,7,11,18,20,23,28],set_audio_stream:[18,33],set_audio_volum:[20,21,33],set_bright:[5,33],set_buffer_dur:[18,33],set_buffer_s:[18,33],set_buffering_mod:[18,33],set_camera_devic:[5,33],set_capture_resolut:[7,33],set_color_balance_properti:[5,33],set_contrast:[5,33],set_filenam:[18,33],set_filt:[5,33],set_fram:[11,33],set_gamma:[5,33],set_hu:[5,33],set_photo_profil:[5,33],set_plai:[20,21,33],set_play:[11,33],set_progress:[18,33],set_satur:[5,33],set_seek_flag:[18,33],set_sink:[11,33],set_subtitle_font_nam:[18,33],set_subtitle_track:[18,33],set_subtitle_uri:[18,33],set_uri:[18,33],set_user_ag:[18,33],set_video_profil:[5,33],setup:23,sever:18,should:[2,5,7,9,11,12,13,18,23,28],should_buff:[18,19],side:[2,13],sink:[11,20,23],size:[11,18,20],size_chang:[11,20,21],slower:27,softwar:18,some:23,sometim:23,soon:23,sourc:18,spawn:5,special:18,start:[5,20],start_video_record:[5,33],state:20,statist:18,statu:[20,23],stop:[5,20],stop_video_record:[5,33],store:[5,7],str:[5,7,18,28],stream:[2,5,13,18,20,26,33],string:[18,25,28],struct:[2,5,7,9,11,13,18,23],sub:13,subclass:[2,5,7,9,11,13,18,23],subtil:18,subtitl:18,subtitle_font_nam:18,subtitle_track:18,subtitle_uri:18,subtitlest:18,success:[5,28],successfulli:5,suitabl:23,support:[5,7,9,26],supports_color_bal:[5,33],supports_gamma_correct:[5,33],symbol:31,system:[9,28],take:5,take_photo:[5,33],take_photo_pixbuf:[5,33],taken:5,termin:28,textur:[4,23],than:2,theora:5,thi:[5,7,9,23,28],those:23,thread:[5,9,23,28],time:[11,18,20],top:4,track:18,tracker:31,trade:18,translat:28,translation_domain:28,turn:18,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,28],typeinterfac:21,typic:23,unavail:33,underli:18,unplug:9,until:23,updat:23,update_prior:23,uri:18,use:18,user:18,user_ag:18,usual:4,utiliti:28,valid:18,valu:[2,5,7,11,13,18,20,23,25,26,27],version:[2,4,11,12,13,15,16,17,18,20,21,22,23,24,25,26,27,28],version_hex:[25,33],version_s:[25,33],video:[2,4,5,11,13,16,20,22,23],video_sav:[5,6],video_sink:23,videoresolut:[7,15],videosink:[1,11,15,16,20],videosinkclass:[0,23],volum:20,vtabl:21,wai:20,wait:23,want:[5,18,23],when:[5,18,23],whenev:[5,7,9,23],where:5,whether:[2,5,13,18,20,23],which:[5,7,9,11,18,20,23,28],whose:20,width:[4,7,11,20,22],wiki:31,within:16,without:23,work:[5,28],writable:[2,5,7,11,13,18,20,23],yet:23,you:[18,28],your:[18,28]},titles:["Class Structures","Classes","ClutterGst.Aspectratio","ClutterGst.AspectratioClass","ClutterGst.Box","ClutterGst.Camera","ClutterGst.CameraClass","ClutterGst.CameraDevice","ClutterGst.CameraDeviceClass","ClutterGst.CameraManager","ClutterGst.CameraManagerClass","ClutterGst.Content","ClutterGst.ContentClass","ClutterGst.Crop","ClutterGst.CropClass","ClutterGst.Frame","ClutterGst.Overlay","ClutterGst.Overlays","ClutterGst.Playback","ClutterGst.PlaybackClass","ClutterGst.Player","ClutterGst.PlayerIface","ClutterGst.VideoResolution","ClutterGst.VideoSink","ClutterGst.VideoSinkClass","Constants","Enums","Flags","Functions","Hierarchy","Interface Structures","ClutterGst 3.0 (3.0.24)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,5,7,9,11,13,18,20,23],"enum":26,"function":28,api:31,aspectratio:2,aspectratioclass:3,box:4,camera:5,cameraclass:6,cameradevic:7,cameradeviceclass:8,cameramanag:9,cameramanagerclass:10,cluttergst:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,31],constant:25,content:11,contentclass:12,crop:13,cropclass:14,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],flag:27,frame:15,hierarchi:29,interfac:[30,32],map:33,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],overlai:[16,17],playback:18,playbackclass:19,player:20,playerifac:21,properti:[2,5,7,9,11,13,18,20,23],signal:[2,5,7,9,11,13,18,20,23],structur:[0,30,34],symbol:33,videoresolut:22,videosink:23,videosinkclass:24,virtual:[2,5,7,9,11,13,18,20,23]}})