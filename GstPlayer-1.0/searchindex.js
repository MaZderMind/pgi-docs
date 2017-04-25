Search.setIndex({envversion:49,filenames:["callbacks","class-structs","classes","classes/Player","classes/PlayerAudioInfo","classes/PlayerAudioInfoClass","classes/PlayerClass","classes/PlayerGMainContextSignalDispatcher","classes/PlayerGMainContextSignalDispatcherClass","classes/PlayerMediaInfo","classes/PlayerMediaInfoClass","classes/PlayerSignalDispatcher","classes/PlayerSignalDispatcherInterface","classes/PlayerStreamInfo","classes/PlayerStreamInfoClass","classes/PlayerSubtitleInfo","classes/PlayerSubtitleInfoClass","classes/PlayerVideoInfo","classes/PlayerVideoInfoClass","classes/PlayerVideoOverlayVideoRenderer","classes/PlayerVideoOverlayVideoRendererClass","classes/PlayerVideoRenderer","classes/PlayerVideoRendererInterface","classes/PlayerVisualization","enums","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],objects:{"GstPlayer.Player":{"new":[3,1,1,""],config_get_position_update_interval:[3,1,1,""],config_get_user_agent:[3,1,1,""],config_set_position_update_interval:[3,1,1,""],config_set_user_agent:[3,1,1,""],get_audio_streams:[3,1,1,""],get_audio_video_offset:[3,2,1,""],get_color_balance:[3,2,1,""],get_config:[3,2,1,""],get_current_audio_track:[3,2,1,""],get_current_subtitle_track:[3,2,1,""],get_current_video_track:[3,2,1,""],get_current_visualization:[3,2,1,""],get_duration:[3,2,1,""],get_media_info:[3,2,1,""],get_multiview_flags:[3,2,1,""],get_multiview_mode:[3,2,1,""],get_mute:[3,2,1,""],get_pipeline:[3,2,1,""],get_position:[3,2,1,""],get_rate:[3,2,1,""],get_subtitle_streams:[3,1,1,""],get_subtitle_uri:[3,2,1,""],get_uri:[3,2,1,""],get_video_streams:[3,1,1,""],get_volume:[3,2,1,""],has_color_balance:[3,2,1,""],pause:[3,2,1,""],play:[3,2,1,""],seek:[3,2,1,""],set_audio_track:[3,2,1,""],set_audio_track_enabled:[3,2,1,""],set_audio_video_offset:[3,2,1,""],set_color_balance:[3,2,1,""],set_config:[3,2,1,""],set_multiview_flags:[3,2,1,""],set_multiview_mode:[3,2,1,""],set_mute:[3,2,1,""],set_rate:[3,2,1,""],set_subtitle_track:[3,2,1,""],set_subtitle_track_enabled:[3,2,1,""],set_subtitle_uri:[3,2,1,""],set_uri:[3,2,1,""],set_video_track:[3,2,1,""],set_video_track_enabled:[3,2,1,""],set_visualization:[3,2,1,""],set_visualization_enabled:[3,2,1,""],set_volume:[3,2,1,""],stop:[3,2,1,""],visualizations_free:[3,1,1,""],visualizations_get:[3,1,1,""]},"GstPlayer.Player.props":{audio_video_offset:[3,3,1,""],current_audio_track:[3,3,1,""],current_subtitle_track:[3,3,1,""],current_video_track:[3,3,1,""],duration:[3,3,1,""],media_info:[3,3,1,""],mute:[3,3,1,""],pipeline:[3,3,1,""],position:[3,3,1,""],rate:[3,3,1,""],signal_dispatcher:[3,3,1,""],suburi:[3,3,1,""],uri:[3,3,1,""],video_multiview_flags:[3,3,1,""],video_multiview_mode:[3,3,1,""],video_renderer:[3,3,1,""],volume:[3,3,1,""]},"GstPlayer.Player.signals":{buffering:[3,4,1,""],duration_changed:[3,4,1,""],end_of_stream:[3,4,1,""],error:[3,4,1,""],media_info_updated:[3,4,1,""],mute_changed:[3,4,1,""],position_updated:[3,4,1,""],seek_done:[3,4,1,""],state_changed:[3,4,1,""],uri_loaded:[3,4,1,""],video_dimensions_changed:[3,4,1,""],volume_changed:[3,4,1,""],warning:[3,4,1,""]},"GstPlayer.PlayerAudioInfo":{get_bitrate:[4,2,1,""],get_channels:[4,2,1,""],get_language:[4,2,1,""],get_max_bitrate:[4,2,1,""],get_sample_rate:[4,2,1,""]},"GstPlayer.PlayerColorBalanceType":{BRIGHTNESS:[24,5,1,""],CONTRAST:[24,5,1,""],HUE:[24,5,1,""],SATURATION:[24,5,1,""],get_name:[24,1,1,""]},"GstPlayer.PlayerError":{FAILED:[24,5,1,""],get_name:[24,1,1,""],quark:[24,1,1,""]},"GstPlayer.PlayerGMainContextSignalDispatcher":{"new":[7,1,1,""]},"GstPlayer.PlayerGMainContextSignalDispatcher.props":{application_context:[7,3,1,""]},"GstPlayer.PlayerMediaInfo":{get_container_format:[9,2,1,""],get_duration:[9,2,1,""],get_image_sample:[9,2,1,""],get_stream_list:[9,2,1,""],get_tags:[9,2,1,""],get_title:[9,2,1,""],get_uri:[9,2,1,""],is_live:[9,2,1,""],is_seekable:[9,2,1,""]},"GstPlayer.PlayerSignalDispatcher":{do_dispatch:[11,2,1,""]},"GstPlayer.PlayerState":{BUFFERING:[24,5,1,""],PAUSED:[24,5,1,""],PLAYING:[24,5,1,""],STOPPED:[24,5,1,""],get_name:[24,1,1,""]},"GstPlayer.PlayerStreamInfo":{get_caps:[13,2,1,""],get_codec:[13,2,1,""],get_index:[13,2,1,""],get_stream_type:[13,2,1,""],get_tags:[13,2,1,""]},"GstPlayer.PlayerSubtitleInfo":{get_language:[15,2,1,""]},"GstPlayer.PlayerVideoInfo":{get_bitrate:[17,2,1,""],get_framerate:[17,2,1,""],get_height:[17,2,1,""],get_max_bitrate:[17,2,1,""],get_pixel_aspect_ratio:[17,2,1,""],get_width:[17,2,1,""]},"GstPlayer.PlayerVideoOverlayVideoRenderer":{"new":[19,1,1,""],expose:[19,2,1,""],get_render_rectangle:[19,2,1,""],get_window_handle:[19,2,1,""],set_render_rectangle:[19,2,1,""],set_window_handle:[19,2,1,""]},"GstPlayer.PlayerVideoOverlayVideoRenderer.props":{window_handle:[19,3,1,""]},"GstPlayer.PlayerVisualization":{copy:[23,2,1,""],free:[23,2,1,""]},GstPlayer:{Player:[3,0,1,""],PlayerAudioInfo:[4,0,1,""],PlayerAudioInfoClass:[5,0,1,""],PlayerClass:[6,0,1,""],PlayerColorBalanceType:[24,0,1,""],PlayerError:[24,0,1,""],PlayerGMainContextSignalDispatcher:[7,0,1,""],PlayerGMainContextSignalDispatcherClass:[8,0,1,""],PlayerMediaInfo:[9,0,1,""],PlayerMediaInfoClass:[10,0,1,""],PlayerSignalDispatcher:[11,0,1,""],PlayerSignalDispatcherFunc:[0,4,1,""],PlayerSignalDispatcherInterface:[12,0,1,""],PlayerState:[24,0,1,""],PlayerStreamInfo:[13,0,1,""],PlayerStreamInfoClass:[14,0,1,""],PlayerSubtitleInfo:[15,0,1,""],PlayerSubtitleInfoClass:[16,0,1,""],PlayerVideoInfo:[17,0,1,""],PlayerVideoInfoClass:[18,0,1,""],PlayerVideoOverlayVideoRenderer:[19,0,1,""],PlayerVideoOverlayVideoRendererClass:[20,0,1,""],PlayerVideoRenderer:[21,0,1,""],PlayerVideoRendererInterface:[22,0,1,""],PlayerVisualization:[23,0,1,""],player_color_balance_type_get_name:[25,4,1,""],player_error_get_name:[25,4,1,""],player_error_quark:[25,4,1,""],player_state_get_name:[25,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","classmethod","Python class method"],"2":["py","method","Python method"],"3":["py","data","Python data"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:classmethod","2":"py:method","3":"py:data","4":"py:function","5":"py:attribute"},terms:{"0x00000000":3,"18446744073709551615l":3,"abstract":[3,4,7,9,13,15,17,19],"case":3,"default":[3,7,19],"float":3,"function":[3,9,13],"int":[3,4,9,13,17,19,24,25],"new":[3,7,19,28,30],"return":[3,4,7,9,13,15,17,19,23,24,25],"short":[3,7,19],"true":[3,9],about:28,absolut:3,access:[12,22,23],activ:3,actual:28,after:[3,19],agent:3,all:3,alloc:23,alreadi:3,ani:3,anyth:28,api:9,applic:7,applicat:[7,9,28],application_context:7,architectur:28,area:19,aren:28,arrai:3,aspect:17,associ:9,audio:[3,4,13],audio_video_offset:3,avail:3,bad1:28,bad:28,balanc:[3,24,25],base:[3,4,7,9,11,13,15,17,19,21,24,28],been:[3,19],between:3,bitrat:[4,17],black:24,bool:[3,9],bright:24,brightness:[24,30],buffer:[3,9,24],buffering:[24,30],call:[3,19],caller:3,can:[3,9,13,19,28],cap:[9,13],capabl:28,chang:3,channel:[3,4],check:3,chroma:24,classmethod:[3,7,19,24],close:28,code:28,codec:13,color:[3,24,25],compar:28,concer:13,config:3,config_get_position_update_interv:[3,30],config_get_user_ag:[3,30],config_set_position_update_interv:[3,30],config_set_user_ag:[3,30],configur:[3,19],connect:3,construct:19,construct_only:[3,7],contain:[3,9,13],context:7,contrast:[24,30],copi:[3,23,30],correctli:3,could:3,creat:[3,7],create_video_sink:22,current:[3,17,19,24],current_audio_track:3,current_subtitle_track:3,current_video_track:3,data:[0,11,28],debian:28,denomin:17,depend:[13,28],describ:13,descript:[3,7,12,19,22,23,28],descriptor:23,develop:28,dimens:3,directli:3,disabl:3,dispatch:[3,7,12],do_dispatch:11,document:28,done:3,drawabl:19,durat:[3,9],duration_chang:3,dure:3,either:3,element:3,els:28,emb:19,emit:3,emitt:11,enabl:3,end:3,end_of_stream:3,error:[3,24,25],etc:9,even:19,event:3,expos:[19,30],extern:3,failed:[24,30],fals:3,file:28,fill:19,filter:28,find:13,first:3,flag:[3,7,19],forc:19,format:9,fps_d:17,fps_n:17,frame:[3,17,19],framework:28,free:[3,23,30],freed:[3,23],freedesktop:28,from:[3,13,28],fullscreen:19,gain:24,gener:24,genum:24,get:[3,9,13,24,25],get_audio_stream:[3,30],get_audio_video_offset:[3,30],get_bitr:[4,17,30],get_cap:[13,30],get_channel:[4,30],get_codec:[13,30],get_color_bal:[3,30],get_config:[3,30],get_container_format:[9,30],get_current_audio_track:[3,30],get_current_subtitle_track:[3,30],get_current_video_track:[3,30],get_current_visu:[3,30],get_dur:[3,9,30],get_framer:[17,30],get_height:[17,30],get_image_sampl:[9,30],get_index:[13,30],get_languag:[4,15,30],get_max_bitr:[4,17,30],get_media_info:[3,30],get_multiview_flag:[3,30],get_multiview_mod:[3,30],get_mut:[3,30],get_nam:[24,30],get_pipelin:[3,30],get_pixel_aspect_ratio:[17,30],get_posit:[3,30],get_rat:[3,30],get_render_rectangl:[19,30],get_sample_r:[4,30],get_stream_list:[9,30],get_stream_typ:[13,30],get_subtitle_stream:[3,30],get_subtitle_uri:[3,30],get_tag:[9,13,30],get_titl:[9,30],get_uri:[3,9,30],get_video_stream:[3,30],get_volum:[3,30],get_width:[17,30],get_window_handl:[19,30],gint64:3,ginterfac:[7,11,19,21],gir1:28,given:[13,24,25],glib:[3,7,9],gobject:[3,4,7,9,11,12,13,15,17,19,21,22,24,26],good:28,graph:28,gst:[3,9,13,26,28],gst_player_audio_info_get_bitr:30,gst_player_audio_info_get_channel:30,gst_player_audio_info_get_languag:30,gst_player_audio_info_get_max_bitr:30,gst_player_audio_info_get_sample_r:30,gst_player_color_balance_brightness:30,gst_player_color_balance_contrast:30,gst_player_color_balance_hue:30,gst_player_color_balance_saturation:30,gst_player_color_balance_type_get_nam:30,gst_player_config_get_position_update_interv:30,gst_player_config_get_user_ag:30,gst_player_config_set_position_update_interv:30,gst_player_config_set_user_ag:30,gst_player_error_failed:30,gst_player_error_get_nam:30,gst_player_error_quark:30,gst_player_g_main_context_signal_dispatcher_new:30,gst_player_get_audio_stream:30,gst_player_get_audio_video_offset:30,gst_player_get_color_bal:30,gst_player_get_config:30,gst_player_get_current_audio_track:30,gst_player_get_current_subtitle_track:30,gst_player_get_current_video_track:30,gst_player_get_current_visu:30,gst_player_get_dur:30,gst_player_get_media_info:30,gst_player_get_multiview_flag:30,gst_player_get_multiview_mod:30,gst_player_get_mut:30,gst_player_get_pipelin:30,gst_player_get_posit:30,gst_player_get_r:30,gst_player_get_subtitle_stream:30,gst_player_get_subtitle_uri:30,gst_player_get_uri:30,gst_player_get_video_stream:30,gst_player_get_volum:30,gst_player_has_color_bal:30,gst_player_media_info_get_container_format:30,gst_player_media_info_get_dur:30,gst_player_media_info_get_image_sampl:30,gst_player_media_info_get_stream_list:30,gst_player_media_info_get_tag:30,gst_player_media_info_get_titl:30,gst_player_media_info_get_uri:30,gst_player_media_info_is_l:30,gst_player_media_info_is_seek:30,gst_player_new:30,gst_player_new_ful:7,gst_player_paus:30,gst_player_plai:30,gst_player_seek:30,gst_player_set_audio_track:30,gst_player_set_audio_track_en:30,gst_player_set_audio_video_offset:30,gst_player_set_color_bal:30,gst_player_set_config:30,gst_player_set_multiview_flag:30,gst_player_set_multiview_mod:30,gst_player_set_mut:30,gst_player_set_r:30,gst_player_set_subtitle_track:30,gst_player_set_subtitle_track_en:30,gst_player_set_subtitle_uri:30,gst_player_set_uri:30,gst_player_set_video_track:30,gst_player_set_video_track_en:30,gst_player_set_visu:30,gst_player_set_visualization_en:30,gst_player_set_volum:30,gst_player_state_buffering:30,gst_player_state_get_nam:30,gst_player_state_paused:30,gst_player_state_playing:30,gst_player_state_stopped:30,gst_player_stop:30,gst_player_stream_info_get_cap:30,gst_player_stream_info_get_codec:30,gst_player_stream_info_get_index:30,gst_player_stream_info_get_stream_typ:30,gst_player_stream_info_get_tag:30,gst_player_subtitle_info_get_languag:30,gst_player_video_info_get_bitr:30,gst_player_video_info_get_framer:30,gst_player_video_info_get_height:30,gst_player_video_info_get_max_bitr:30,gst_player_video_info_get_pixel_aspect_ratio:30,gst_player_video_info_get_width:30,gst_player_video_overlay_video_renderer_expos:30,gst_player_video_overlay_video_renderer_get_render_rectangl:30,gst_player_video_overlay_video_renderer_get_window_handl:30,gst_player_video_overlay_video_renderer_new:30,gst_player_video_overlay_video_renderer_set_render_rectangl:30,gst_player_video_overlay_video_renderer_set_window_handl:30,gst_player_visualization_copi:30,gst_player_visualization_fre:30,gst_player_visualizations_fre:30,gst_player_visualizations_get:30,gst_sample_:9,gstplayer:[0,1,2],gstplayeraudioinfo:30,gstplayeraudioinfoclass:30,gstplayerclass:30,gstplayercolorbalancetyp:30,gstplayererror:30,gstplayergmaincontextsignaldispatch:30,gstplayergmaincontextsignaldispatcherclass:30,gstplayermediainfo:30,gstplayermediainfoclass:30,gstplayersignaldispatch:30,gstplayersignaldispatcherfunc:30,gstplayersignaldispatcherinterfac:30,gstplayerst:30,gstplayerstreaminfo:30,gstplayerstreaminfoclass:30,gstplayersubtitleinfo:30,gstplayersubtitleinfoclass:30,gstplayervideoinfo:30,gstplayervideoinfoclass:30,gstplayervideooverlayvideorender:30,gstplayervideooverlayvideorendererclass:30,gstplayervideorender:30,gstplayervideorendererinterfac:30,gstplayervisu:30,gstreamer:[3,28],gstvideo:[3,28],handl:[3,19],has_color_bal:[3,30],haven:3,height:[17,19],homepag:28,horizont:19,html:28,http:[3,28],hue:[24,30],human:13,imag:9,implement:[11,21],index:[3,13],indic:3,info:[3,9],inform:[3,9,13],inherit:[3,4,7,9,13,15,17,19],initiallyunown:[3,26],insid:19,instal:28,instanc:[3,13],intern:3,interpret:3,interv:3,is_liv:[9,30],is_seek:[9,30],just:28,kwarg:[3,4,7,9,13,15,17,19],languag:[4,15],layout:3,level:[3,24],librari:28,list:[3,9],live:[9,28],load:3,loop:3,luma:24,maincontext:7,maintain:28,make:23,map:28,match:[3,9],maximum:[4,17],mean:28,media:[3,9,13,28],media_info:3,media_info_upd:3,might:28,millisecond:3,miss:28,mode:3,modifi:3,modul:28,more:13,multiview:3,must:[3,23],mute:3,mute_chang:3,name:[3,7,12,13,19,22,23,24,25],nanosecond:3,need:[3,19],next:3,no_hooks:3,no_recurse:3,non:19,none:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],number:4,numer:17,object:[0,3,4,7,9,11,12,13,15,17,19,22,26],objectclass:[3,4,7,9,13,15,17,19],obtain:3,offset:[3,19],onli:19,oper:28,org:28,otherwis:3,overlai:19,overlaid:19,overrid:3,ownership:3,pack:3,packag:28,par:28,par_d:17,par_n:17,paramet:[0,3,7,11,19,24,25],parent:28,parent_ifac:[12,22],pass:[3,19],paus:[3,24,30],paused:[19,24,30],percentag:3,perform:3,pipelin:[3,19],pixel:17,plai:[3,24,28,30],platform:19,playback:3,playbin:3,player:2,player_color_balance_type_get_nam:[25,30],player_error_get_nam:[25,30],player_error_quark:[25,30],player_state_get_nam:[25,30],playeraudioinfo:[2,3],playeraudioinfoclass:[1,4],playerclass:[1,3],playercolorbalancetyp:[3,24,25,30],playererror:[24,25,30],playergmaincontextsignaldispatch:[2,3],playergmaincontextsignaldispatcherclass:[1,7],playermediainfo:[2,3],playermediainfoclass:[1,9],playersignaldispatch:[3,7],playersignaldispatcherfunc:[0,11,30],playersignaldispatcherinterfac:11,playerst:[3,24,25,30],playerstreaminfo:[2,4,9],playerstreaminfoclass:[1,13],playersubtitleinfo:[2,3,13],playersubtitleinfoclass:[1,15],playervideoinfo:[2,3,13],playervideoinfoclass:[1,17],playervideooverlayvideorender:2,playervideooverlayvideorendererclass:[1,19],playervideorender:[3,19],playervideorendererinterfac:21,playervisu:3,playing:[24,30],plug:28,plugin:28,posit:3,position_upd:3,preview:9,process:28,project:28,prop:[3,7,19],provid:3,python:30,qualiti:28,quark:[24,30],rang:3,rate:[3,4,17],ratio:17,readabl:13,readable:[3,7,19],real:28,receiv:3,rectangl:19,redraw:19,referenc:19,region:19,relat:28,remain:3,render:[3,19],repres:[3,24,25],request:3,reset:3,rest:28,result:23,retriev:3,review:28,rtsp:3,run_last:3,sampl:[4,9],satur:24,saturation:[24,30],see:[3,7,19],seek:[3,30],seek_don:3,seekabl:9,self:[3,13,23],server:3,set:[3,19,28],set_audio_track:[3,30],set_audio_track_en:[3,30],set_audio_video_offset:[3,30],set_color_bal:[3,30],set_config:[3,30],set_multiview_flag:[3,30],set_multiview_mod:[3,30],set_mut:[3,30],set_rat:[3,30],set_render_rectangl:[19,30],set_subtitle_track:[3,30],set_subtitle_track_en:[3,30],set_subtitle_uri:[3,30],set_uri:[3,30],set_video_track:[3,30],set_video_track_en:[3,30],set_visu:[3,30],set_visualization_en:[3,30],set_volum:[3,30],set_window_handl:[19,30],sever:3,should:[3,19],signal_dispatch:3,simpli:28,some:[3,28],someth:28,sound:28,special:3,specif:[4,13,15,17,19],specifi:[3,19],state:[3,24,25],state_chang:3,stereoscop:3,stop:[3,24,30],stopped:[3,24,30],store:9,str:[3,4,9,13,15,23,24,25],strack:3,stream:[3,4,13,15,17,24,28],stream_idex:3,stream_index:3,string:[3,13,24,25],struct:[3,4,7,9,13,15,17,19],subclass:[3,4,7,9,13,15,17,19],subregion:19,subtitl:[3,13,15],suburi:3,subwindow:19,support:[3,19],symbol:28,synchronis:3,system:3,tag:[9,13],taglist:[9,13],take:3,target:19,tell:19,termin:3,test:28,thei:28,thi:[3,13,19,28],thread:7,time:[3,28],titl:9,toolkit:19,track:3,two:3,type:[3,4,7,9,12,13,15,17,19,22,23,24,25,28],typeinterfac:[12,22],typic:3,unknown:[4,13,15],unref:3,unset:19,updat:3,uri:[3,9],uri_load:3,usag:3,use:3,user:3,val:3,valu:[3,7,19,24],version:3,vertic:19,video:[3,13,17,19,28],video_dimensions_chang:3,video_multiview_flag:3,video_multiview_mod:3,video_render:3,videomultiviewflag:3,videomultiviewframepack:3,videomultiviewmod:3,viss:3,visual:[3,23],visualizations_fre:[3,30],visualizations_get:[3,30],volum:3,volume_chang:3,warn:3,when:3,whether:3,which:[3,19,28],wide:28,width:[17,19],window:19,window_handl:19,within:19,writable:[3,7,19]},titles:["Callbacks","Class Structures","Classes","GstPlayer.Player","GstPlayer.PlayerAudioInfo","GstPlayer.PlayerAudioInfoClass","GstPlayer.PlayerClass","GstPlayer.PlayerGMainContextSignalDispatcher","GstPlayer.PlayerGMainContextSignalDispatcherClass","GstPlayer.PlayerMediaInfo","GstPlayer.PlayerMediaInfoClass","GstPlayer.PlayerSignalDispatcher","GstPlayer.PlayerSignalDispatcherInterface","GstPlayer.PlayerStreamInfo","GstPlayer.PlayerStreamInfoClass","GstPlayer.PlayerSubtitleInfo","GstPlayer.PlayerSubtitleInfoClass","GstPlayer.PlayerVideoInfo","GstPlayer.PlayerVideoInfoClass","GstPlayer.PlayerVideoOverlayVideoRenderer","GstPlayer.PlayerVideoOverlayVideoRendererClass","GstPlayer.PlayerVideoRenderer","GstPlayer.PlayerVideoRendererInterface","GstPlayer.PlayerVisualization","Enums","Functions","Hierarchy","Interface Structures","GstPlayer 1.0 (1.10.4)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[1,2,3,4,7,9,11,13,15,17,19,21],"enum":24,"function":25,api:28,callback:0,detail:[0,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],field:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],gstplayer:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,28],hierarchi:26,interfac:[27,29],map:30,method:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],player:3,playeraudioinfo:4,playeraudioinfoclass:5,playerclass:6,playergmaincontextsignaldispatch:7,playergmaincontextsignaldispatcherclass:8,playermediainfo:9,playermediainfoclass:10,playersignaldispatch:11,playersignaldispatcherinterfac:12,playerstreaminfo:13,playerstreaminfoclass:14,playersubtitleinfo:15,playersubtitleinfoclass:16,playervideoinfo:17,playervideoinfoclass:18,playervideooverlayvideorender:19,playervideooverlayvideorendererclass:20,playervideorender:21,playervideorendererinterfac:22,playervisu:23,properti:[3,4,7,9,11,13,15,17,19,21],signal:[3,4,7,9,11,13,15,17,19,21],structur:[1,27,31],symbol:30,virtual:[3,4,7,9,11,13,15,17,19,21]}})