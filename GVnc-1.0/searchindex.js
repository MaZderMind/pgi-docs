Search.setIndex({docnames:["class-structs","classes","classes/Audio","classes/AudioFormat","classes/AudioInterface","classes/AudioSample","classes/BaseAudio","classes/BaseAudioClass","classes/BaseFramebuffer","classes/BaseFramebufferClass","classes/ColorMap","classes/ColorMapEntry","classes/Connection","classes/ConnectionClass","classes/Cursor","classes/CursorClass","classes/Framebuffer","classes/FramebufferInterface","classes/PixelFormat","constants","enums","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:50,filenames:["class-structs.rst","classes.rst","classes/Audio.rst","classes/AudioFormat.rst","classes/AudioInterface.rst","classes/AudioSample.rst","classes/BaseAudio.rst","classes/BaseAudioClass.rst","classes/BaseFramebuffer.rst","classes/BaseFramebufferClass.rst","classes/ColorMap.rst","classes/ColorMapEntry.rst","classes/Connection.rst","classes/ConnectionClass.rst","classes/Cursor.rst","classes/CursorClass.rst","classes/Framebuffer.rst","classes/FramebufferInterface.rst","classes/PixelFormat.rst","constants.rst","enums.rst","functions.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"GVnc.Audio":{do_playback_data:[2,1,1,""],do_playback_start:[2,1,1,""],do_playback_stop:[2,1,1,""],playback_data:[2,1,1,""],playback_start:[2,1,1,""],playback_stop:[2,1,1,""]},"GVnc.AudioFormat":{"new":[3,2,1,""],copy:[3,1,1,""],free:[3,1,1,""]},"GVnc.AudioFormatType":{S16:[20,3,1,""],S32:[20,3,1,""],S8:[20,3,1,""],U16:[20,3,1,""],U32:[20,3,1,""],U8:[20,3,1,""]},"GVnc.AudioSample":{"new":[5,2,1,""],copy:[5,1,1,""],free:[5,1,1,""]},"GVnc.BaseAudio":{"new":[6,2,1,""],do_playback_data:[6,1,1,""],do_playback_start:[6,1,1,""],do_playback_stop:[6,1,1,""]},"GVnc.BaseAudio.signals":{vnc_audio_playback_data:[6,4,1,""],vnc_audio_playback_start:[6,4,1,""],vnc_audio_playback_stop:[6,4,1,""]},"GVnc.BaseFramebuffer":{"new":[8,2,1,""]},"GVnc.BaseFramebuffer.props":{buffer:[8,5,1,""],color_map:[8,5,1,""],height:[8,5,1,""],local_format:[8,5,1,""],remote_format:[8,5,1,""],rowstride:[8,5,1,""],width:[8,5,1,""]},"GVnc.ColorMap":{"new":[10,2,1,""],copy:[10,1,1,""],free:[10,1,1,""],lookup:[10,1,1,""],set:[10,1,1,""]},"GVnc.Connection":{"new":[12,2,1,""],audio_disable:[12,1,1,""],audio_enable:[12,1,1,""],client_cut_text:[12,1,1,""],do_vnc_auth_choose_subtype:[12,1,1,""],do_vnc_auth_choose_type:[12,1,1,""],do_vnc_auth_credential:[12,1,1,""],do_vnc_auth_failure:[12,1,1,""],do_vnc_auth_unsupported:[12,1,1,""],do_vnc_bell:[12,1,1,""],do_vnc_connected:[12,1,1,""],do_vnc_cursor_changed:[12,1,1,""],do_vnc_desktop_resize:[12,1,1,""],do_vnc_disconnected:[12,1,1,""],do_vnc_error:[12,1,1,""],do_vnc_framebuffer_update:[12,1,1,""],do_vnc_initialized:[12,1,1,""],do_vnc_led_state:[12,1,1,""],do_vnc_pixel_format_changed:[12,1,1,""],do_vnc_pointer_mode_changed:[12,1,1,""],do_vnc_server_cut_text:[12,1,1,""],framebuffer_update_request:[12,1,1,""],get_abs_pointer:[12,1,1,""],get_audio_format:[12,1,1,""],get_cursor:[12,1,1,""],get_ext_key_event:[12,1,1,""],get_height:[12,1,1,""],get_ledstate:[12,1,1,""],get_name:[12,1,1,""],get_pixel_format:[12,1,1,""],get_shared:[12,1,1,""],get_width:[12,1,1,""],has_error:[12,1,1,""],is_initialized:[12,1,1,""],is_open:[12,1,1,""],key_event:[12,1,1,""],open_addr:[12,1,1,""],open_fd:[12,1,1,""],open_fd_with_hostname:[12,1,1,""],open_host:[12,1,1,""],pointer_event:[12,1,1,""],set_audio:[12,1,1,""],set_audio_format:[12,1,1,""],set_auth_subtype:[12,1,1,""],set_auth_type:[12,1,1,""],set_credential:[12,1,1,""],set_encodings:[12,1,1,""],set_framebuffer:[12,1,1,""],set_pixel_format:[12,1,1,""],set_shared:[12,1,1,""],shutdown:[12,1,1,""]},"GVnc.Connection.props":{framebuffer:[12,5,1,""]},"GVnc.Connection.signals":{vnc_auth_choose_subtype:[12,4,1,""],vnc_auth_choose_type:[12,4,1,""],vnc_auth_credential:[12,4,1,""],vnc_auth_failure:[12,4,1,""],vnc_auth_unsupported:[12,4,1,""],vnc_bell:[12,4,1,""],vnc_connected:[12,4,1,""],vnc_cursor_changed:[12,4,1,""],vnc_desktop_resize:[12,4,1,""],vnc_disconnected:[12,4,1,""],vnc_error:[12,4,1,""],vnc_framebuffer_update:[12,4,1,""],vnc_initialized:[12,4,1,""],vnc_led_state:[12,4,1,""],vnc_pixel_format_changed:[12,4,1,""],vnc_pointer_mode_changed:[12,4,1,""],vnc_server_cut_text:[12,4,1,""]},"GVnc.ConnectionAuth":{ARD:[20,3,1,""],INVALID:[20,3,1,""],MSLOGON:[20,3,1,""],NONE:[20,3,1,""],RA2:[20,3,1,""],RA2NE:[20,3,1,""],SASL:[20,3,1,""],TIGHT:[20,3,1,""],TLS:[20,3,1,""],ULTRA:[20,3,1,""],VENCRYPT:[20,3,1,""],VNC:[20,3,1,""]},"GVnc.ConnectionAuthVencrypt":{PLAIN:[20,3,1,""],TLSNONE:[20,3,1,""],TLSPLAIN:[20,3,1,""],TLSSASL:[20,3,1,""],TLSVNC:[20,3,1,""],X509NONE:[20,3,1,""],X509PLAIN:[20,3,1,""],X509SASL:[20,3,1,""],X509VNC:[20,3,1,""]},"GVnc.ConnectionCredential":{CLIENTNAME:[20,3,1,""],PASSWORD:[20,3,1,""],USERNAME:[20,3,1,""]},"GVnc.ConnectionEncoding":{AUDIO:[20,3,1,""],COPY_RECT:[20,3,1,""],CORRE:[20,3,1,""],CURSOR_POS:[20,3,1,""],DESKTOP_RESIZE:[20,3,1,""],EXT_KEY_EVENT:[20,3,1,""],HEXTILE:[20,3,1,""],LED_STATE:[20,3,1,""],POINTER_CHANGE:[20,3,1,""],RAW:[20,3,1,""],RICH_CURSOR:[20,3,1,""],RRE:[20,3,1,""],TIGHT:[20,3,1,""],TIGHT_JPEG0:[20,3,1,""],TIGHT_JPEG1:[20,3,1,""],TIGHT_JPEG2:[20,3,1,""],TIGHT_JPEG3:[20,3,1,""],TIGHT_JPEG4:[20,3,1,""],TIGHT_JPEG5:[20,3,1,""],TIGHT_JPEG6:[20,3,1,""],TIGHT_JPEG7:[20,3,1,""],TIGHT_JPEG8:[20,3,1,""],TIGHT_JPEG9:[20,3,1,""],WMVI:[20,3,1,""],XCURSOR:[20,3,1,""],ZRLE:[20,3,1,""]},"GVnc.Cursor":{"new":[14,2,1,""],get_data:[14,1,1,""],get_height:[14,1,1,""],get_hotx:[14,1,1,""],get_hoty:[14,1,1,""],get_width:[14,1,1,""]},"GVnc.Cursor.props":{data:[14,5,1,""],height:[14,5,1,""],hotx:[14,5,1,""],hoty:[14,5,1,""],width:[14,5,1,""]},"GVnc.Framebuffer":{blt:[16,1,1,""],copyrect:[16,1,1,""],do_blt:[16,1,1,""],do_copyrect:[16,1,1,""],do_fill:[16,1,1,""],do_get_buffer:[16,1,1,""],do_get_height:[16,1,1,""],do_get_local_format:[16,1,1,""],do_get_remote_format:[16,1,1,""],do_get_rowstride:[16,1,1,""],do_get_width:[16,1,1,""],do_perfect_format_match:[16,1,1,""],do_rgb24_blt:[16,1,1,""],do_set_color_map:[16,1,1,""],do_set_pixel_at:[16,1,1,""],fill:[16,1,1,""],get_buffer:[16,1,1,""],get_height:[16,1,1,""],get_local_format:[16,1,1,""],get_remote_format:[16,1,1,""],get_rowstride:[16,1,1,""],get_width:[16,1,1,""],perfect_format_match:[16,1,1,""],rgb24_blt:[16,1,1,""],set_color_map:[16,1,1,""],set_pixel_at:[16,1,1,""]},"GVnc.PixelFormat":{"new":[18,2,1,""],copy:[18,1,1,""],free:[18,1,1,""]},GVnc:{Audio:[2,0,1,""],AudioFormat:[3,0,1,""],AudioFormatType:[20,0,1,""],AudioInterface:[4,0,1,""],AudioSample:[5,0,1,""],BaseAudio:[6,0,1,""],BaseAudioClass:[7,0,1,""],BaseFramebuffer:[8,0,1,""],BaseFramebufferClass:[9,0,1,""],ColorMap:[10,0,1,""],ColorMapEntry:[11,0,1,""],Connection:[12,0,1,""],ConnectionAuth:[20,0,1,""],ConnectionAuthVencrypt:[20,0,1,""],ConnectionClass:[13,0,1,""],ConnectionCredential:[20,0,1,""],ConnectionEncoding:[20,0,1,""],Cursor:[14,0,1,""],CursorClass:[15,0,1,""],Framebuffer:[16,0,1,""],FramebufferInterface:[17,0,1,""],LEDSTATE_CAPS_LOCK:[19,5,1,""],LEDSTATE_NUM_LOCK:[19,5,1,""],LEDSTATE_SCROLL_LOCK:[19,5,1,""],PADDING:[19,5,1,""],PADDING_LARGE:[19,5,1,""],PixelFormat:[18,0,1,""],util_check_version:[21,4,1,""],util_get_debug:[21,4,1,""],util_get_version:[21,4,1,""],util_get_version_string:[21,4,1,""],util_set_debug:[21,4,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","data","Python data"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:attribute","4":"py:function","5":"py:data"},terms:{"abstract":[6,8,12,14],"byte":[5,8,14,16],"class":[3,4,5,7,9,10,11,13,15,17,18,20,24],"default":[8,12,14],"enum":[12,24],"final":12,"function":24,"int":[3,5,8,10,11,12,14,16,18,21],"long":8,"new":[2,3,5,6,8,10,12,14,16,18,21,26],"return":[2,3,5,6,8,10,12,14,16,18,21],"short":[6,8,12,14],"switch":12,"true":[10,12,16,21],"while":24,For:12,TLS:[20,24,26],The:[3,5,6,8,10,12,14,16,21,24],abl:[5,10],about:2,absolut:12,abspoint:12,access:[3,4,5,6,7,8,9,10,11,12,13,14,15,17,18],activ:12,addr:12,address:12,after:12,against:12,all:[3,16],alloc:[3,5,8,10],allow:[12,24],alreadi:12,alwai:16,ani:12,ard:[20,26],associ:[3,5,10,12],asynchron:24,audio:[3,5,6,12,20,25,26],audio_dis:[12,26],audio_en:[12,26],audioformat:[2,6,12,26,27],audioformattyp:[20,26],audiointerfac:[2,23,26],audiosampl:[2,6,26,27],auth:12,authent:[12,24],authtyp:12,avail:[12,24],axi:14,back:12,base:[2,6,8,12,14,16,20],base_audio:6,baseaudio:[1,2,22,26],baseaudioclass:[0,6,26],baseframebuff:[1,16,22,26],baseframebufferclass:[0,8,26],been:12,befor:[8,12],bell:12,bind:24,bit:[14,21],bitmap:[12,14],bits_per_pixel:18,blt:[16,17,26],blue:[10,11],blue_max:18,blue_shift:18,bool:[2,6,10,12,16,21],both:[12,24],brows:24,buffer:[8,12],bug:24,bugzilla:24,built:24,button:12,button_mask:12,byte_ord:18,caller:6,can:[6,12],capac:5,caus:12,certif:[12,24],cgi:24,chang:12,check:[12,21],choos:12,classmethod:[3,5,6,8,10,12,14,18],client:12,client_cut_text:[12,26],clientnam:[20,26],close:12,code:[12,21],color:[8,10,16],color_map:8,colormap:[8,16,26,27],colormapentri:[10,26,27],colour:10,complet:[2,12,24],compon:21,connect:[1,6,22,24,26],connectionauth:[20,26],connectionauthvencrypt:[20,26],connectionclass:[0,12,26],connectioncredenti:[12,20,26],connectionencod:[20,26],constant:24,construct:14,construct_onli:8,content:[3,16],continu:12,control:21,copi:[3,5,10,16,18,26],copy_rect:[20,26],copyrect:[16,17,26],core:24,coroutin:24,corr:[20,26],creat:[6,12,14],cred:12,credenti:12,current:12,cursor:[1,12,22,26],cursor_po:[20,26],cursorclass:[0,14,26],cut:12,damag:12,data:[3,5,6,8,10,12,14,16],debian:24,debug:21,depend:24,depth:18,descript:[3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,24],descriptor:12,desir:21,desktop:[2,12],desktop_res:[20,26],determin:[12,16,21],disconnect:12,displai:12,do_blt:16,do_copyrect:16,do_fil:16,do_get_buff:16,do_get_height:16,do_get_local_format:16,do_get_remote_format:16,do_get_rowstrid:16,do_get_width:16,do_perfect_format_match:16,do_playback_data:[2,6],do_playback_start:[2,6],do_playback_stop:[2,6],do_rgb24_blt:16,do_set_color_map:16,do_set_pixel_at:16,do_vnc_auth_choose_subtyp:12,do_vnc_auth_choose_typ:12,do_vnc_auth_credenti:12,do_vnc_auth_failur:12,do_vnc_auth_unsupport:12,do_vnc_bel:12,do_vnc_connect:12,do_vnc_cursor_chang:12,do_vnc_desktop_res:12,do_vnc_disconnect:12,do_vnc_error:12,do_vnc_framebuffer_upd:12,do_vnc_initi:12,do_vnc_led_st:12,do_vnc_pixel_format_chang:12,do_vnc_pointer_mode_chang:12,do_vnc_server_cut_text:12,done:12,down_flag:12,drop:12,dstx:16,dsty:16,each:[14,21],either:12,emit:[6,12,21],enabl:21,encod:[12,21],encrypt:24,endpoint:12,entri:10,error:12,event:[6,12],exampl:12,exist:[8,12],ext_key_ev:[20,26],extend:12,extens:[12,24],facil:6,failur:12,fals:[10,12,21],file:12,fill:[16,17,26],flag:[6,8,12,14],flight:12,fmt:12,format:[2,3,6,8,12,14,16,21],found:3,frambuff:16,frame:12,framebuff:[8,12,25,26],framebuffer_update_request:[12,26],framebufferinterfac:[16,23,26],free:[3,5,8,10,18,26],freed:[5,10],frequenc:3,from:[12,16],fulli:12,gener:[6,8],genum:20,get:[12,14,16,21],get_abs_point:[12,26],get_audio_format:[12,26],get_buff:[16,17,26],get_cursor:[12,26],get_data:[14,26],get_ext_key_ev:[12,26],get_height:[12,14,16,17,26],get_hoti:[14,26],get_hotx:[14,26],get_ledst:[12,26],get_local_format:[16,17,26],get_nam:[12,26],get_pixel_format:[12,26],get_remote_format:[16,17,26],get_rowstrid:[16,17,26],get_shar:[12,26],get_width:[12,14,16,17,26],ginterfac:[2,6,8,16],gio:[12,24],gir1:24,glib:[12,20],gnome:24,gobject:[2,4,6,7,8,9,12,13,14,15,16,17,20,22,24],green:[10,11],green_max:18,green_shift:18,gtk:24,gvnc:[0,1,19,20,21,22,23,25,26,27],has:[2,12],has_error:[12,26],height:[8,12,14,16],hextil:[20,26],hierarchi:24,hold:10,homepag:24,horizont:[12,14,16],host:12,hostnam:12,hot:14,hoti:14,hotspot:14,hotx:14,http:24,identifi:12,idx:10,implement:[2,16],imposs:12,increment:12,index:10,indic:2,inform:12,inherit:[6,8,12,14],initi:[3,5,10,12],instanc:12,instead:12,interfac:24,invalid:[20,26],ipv4:[12,24],ipv6:24,is_initi:[12,26],is_open:[12,26],its:12,kei:[6,12],key_ev:[12,26],keyboard:12,kwarg:[6,8,12,14],layer:24,least:21,led:12,led_stat:[20,26],ledstate_caps_lock:[19,26],ledstate_num_lock:[19,26],ledstate_scroll_lock:[19,26],length:[5,12],level:12,librari:[21,24],line:[8,16],list:12,listen:12,live:24,local:[8,16],local_format:8,localformat:8,longer:[3,5,10,12],lookup:[10,26],mai:12,major:21,map:[8,10,16,24],match:16,memori:[3,5,8,10],messag:[12,21],micro:21,minor:21,mode:12,motion:12,movement:12,mslogon:[20,26],multi:12,must:[3,5,8,10,16],name:[3,4,5,6,7,8,9,10,11,12,13,14,15,17,18],nchannel:3,negoti:12,network:24,none:[2,4,6,7,8,9,11,12,13,14,15,16,17,20,26],number:[8,10,12,16,21],object:[4,6,7,8,10,12,13,14,17,22],objectclass:[6,7,8,9,12,13,14,15],occur:[6,12],offset:[10,12],onc:12,one:[8,12],onli:12,open:12,open_addr:[12,26],open_fd:[12,26],open_fd_with_hostnam:[12,26],open_host:[12,26],org:24,other:12,otherwis:[10,12,21],over:[12,16,24],packag:24,packet:12,pad:[19,26],padding_larg:[19,26],paramet:[2,5,6,8,10,12,14,16,21],parent:[4,6,8,12,14,17,24],parent_class:[7,9,13,15],password:[20,26],pend:12,per:[8,16],perfect_format_match:[16,17,26],permit:12,phase:12,pixel:[8,12,14,16],pixelformat:[8,12,16,26,27],plai:12,plain:[16,20,26],playback:[2,6,12],playback_data:[2,4,7,26],playback_start:[2,4,7,26],playback_stop:[2,4,7,26],point:[12,14],pointer:[8,10,12,16],pointer_chang:[20,26],pointer_ev:[12,26],port:12,posit:[10,12,14],press:12,printabl:21,product:24,project:24,prop:[8,12,14],protocol:[12,24],provid:[6,12,24],proxi:12,purpos:8,pygtk:24,python:[24,26],queri:16,ra2:[20,26],ra2n:[20,26],rang:[10,16],raw:[12,20,26],readabl:[8,12,14],reason:12,receiv:[6,12],recommend:12,red:[10,11],red_max:18,red_shift:18,refer:12,reflect:12,region:[8,12,16],releas:[3,5,10,12,21],remain:24,remot:[2,8,12,16],remote_format:8,remoteformat:8,repres:[8,14],request:[2,12,21],requir:[3,5,10,12],resiz:12,rfb:24,rgb24:16,rgb24_blt:[16,17,26],rgb:10,rgba24:14,rgba:14,rich_cursor:[20,26],row:16,rowstrid:[8,16],rre:[20,26],run_first:[6,12],s16:[20,26],s32:[20,26],safe:12,sampl:[2,5,6],sasl:[20,26],scan:12,scancod:12,scheme:12,screen:8,second:12,see:12,self:[3,5,10],send:12,sent:12,server:12,servic:12,session:12,set:[10,12,16,26],set_audio:[12,26],set_audio_format:[12,26],set_auth_subtyp:[12,26],set_auth_typ:[12,26],set_color_map:[16,17,26],set_credenti:[12,26],set_encod:[12,26],set_framebuff:[12,26],set_pixel_at:[16,17,26],set_pixel_format:[12,26],set_shar:[12,26],share:12,sharedflag:12,should:[8,12,14],shutdown:[12,26],sinc:12,singl:[2,24],sink:12,size:[5,8,10,12,14],socket:12,socketaddress:12,some:12,specif:12,src:16,srcx:16,srcy:16,ssl:24,start:[2,6,10,16],state:12,stderr:21,still:12,stop:6,storag:8,store:[5,8,10,16],str:[12,21],stream:12,stride:16,string:[12,21],struct:[3,6,8,12,14],structur:[2,6,8,12,14,16,24],sub:12,subclass:[6,8,12,14],subset:12,subtyp:12,support:[12,24],symbol:24,target:16,tcp:12,tell:12,text:12,thi:12,thread:24,through:24,thu:12,tight:[20,26],tight_jpeg0:[20,26],tight_jpeg1:[20,26],tight_jpeg2:[20,26],tight_jpeg3:[20,26],tight_jpeg4:[20,26],tight_jpeg5:[20,26],tight_jpeg6:[20,26],tight_jpeg7:[20,26],tight_jpeg8:[20,26],tight_jpeg9:[20,26],time:12,tlsnone:[20,26],tlsplain:[20,26],tlssasl:[20,26],tlsvnc:[20,26],tracker:24,transmit:12,transport:12,true_color_flag:18,turn:21,type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21],typeinterfac:[4,17],u16:[20,26],u32:[20,26],ultra:[20,26],unix:12,unsupport:12,updat:[8,10,12],use:[12,16],used:[12,16],usernam:[20,26],using:[3,12,14,24],util_check_vers:[21,26],util_get_debug:[21,26],util_get_vers:[21,26],util_get_version_str:[21,26],util_set_debug:[21,26],valid:12,valu:[8,10,12,14,16,20],valuearrai:12,vencrypt:[20,24,26],verbos:21,verit:12,version:21,vertic:[12,14,16],viewer:24,vlaue:12,vnc:[3,6,12,20,21,24,26],vnc_audio_format_copi:26,vnc_audio_format_fre:26,vnc_audio_format_new:26,vnc_audio_format_raw_s16:26,vnc_audio_format_raw_s32:26,vnc_audio_format_raw_s8:26,vnc_audio_format_raw_u16:26,vnc_audio_format_raw_u32:26,vnc_audio_format_raw_u8:26,vnc_audio_playback_data:[6,26],vnc_audio_playback_start:[6,26],vnc_audio_playback_stop:[6,26],vnc_audio_sample_copi:26,vnc_audio_sample_fre:26,vnc_audio_sample_new:26,vnc_auth_choose_subtyp:[12,13],vnc_auth_choose_typ:[12,13],vnc_auth_credenti:[12,13],vnc_auth_failur:[12,13],vnc_auth_unsupport:[12,13],vnc_base_audio_new:26,vnc_base_framebuffer_new:26,vnc_bell:[12,13],vnc_color_map_copi:26,vnc_color_map_fre:26,vnc_color_map_lookup:26,vnc_color_map_new:26,vnc_color_map_set:26,vnc_connect:[12,13],vnc_connection_audio_dis:26,vnc_connection_audio_en:26,vnc_connection_auth_ard:26,vnc_connection_auth_invalid:26,vnc_connection_auth_mslogon:26,vnc_connection_auth_non:26,vnc_connection_auth_ra2:26,vnc_connection_auth_ra2n:26,vnc_connection_auth_sasl:26,vnc_connection_auth_tight:26,vnc_connection_auth_tl:26,vnc_connection_auth_ultra:26,vnc_connection_auth_vencrypt:26,vnc_connection_auth_vencrypt_plain:26,vnc_connection_auth_vencrypt_tlsnon:26,vnc_connection_auth_vencrypt_tlsplain:26,vnc_connection_auth_vencrypt_tlssasl:26,vnc_connection_auth_vencrypt_tlsvnc:26,vnc_connection_auth_vencrypt_x509non:26,vnc_connection_auth_vencrypt_x509plain:26,vnc_connection_auth_vencrypt_x509sasl:26,vnc_connection_auth_vencrypt_x509vnc:26,vnc_connection_auth_vnc:26,vnc_connection_client_cut_text:26,vnc_connection_credential_clientnam:26,vnc_connection_credential_password:26,vnc_connection_credential_usernam:26,vnc_connection_encoding_audio:26,vnc_connection_encoding_copy_rect:26,vnc_connection_encoding_corr:26,vnc_connection_encoding_cursor_po:26,vnc_connection_encoding_desktop_res:26,vnc_connection_encoding_ext_key_ev:26,vnc_connection_encoding_hextil:26,vnc_connection_encoding_led_st:26,vnc_connection_encoding_pointer_chang:26,vnc_connection_encoding_raw:26,vnc_connection_encoding_rich_cursor:26,vnc_connection_encoding_rr:26,vnc_connection_encoding_tight:26,vnc_connection_encoding_tight_jpeg0:26,vnc_connection_encoding_tight_jpeg1:26,vnc_connection_encoding_tight_jpeg2:26,vnc_connection_encoding_tight_jpeg3:26,vnc_connection_encoding_tight_jpeg4:26,vnc_connection_encoding_tight_jpeg5:26,vnc_connection_encoding_tight_jpeg6:26,vnc_connection_encoding_tight_jpeg7:26,vnc_connection_encoding_tight_jpeg8:26,vnc_connection_encoding_tight_jpeg9:26,vnc_connection_encoding_xcursor:26,vnc_connection_encoding_zrl:26,vnc_connection_framebuffer_update_request:26,vnc_connection_get_abs_point:26,vnc_connection_get_audio_format:26,vnc_connection_get_cursor:26,vnc_connection_get_ext_key_ev:26,vnc_connection_get_height:26,vnc_connection_get_ledst:26,vnc_connection_get_nam:26,vnc_connection_get_pixel_format:26,vnc_connection_get_shar:26,vnc_connection_get_width:26,vnc_connection_has_error:26,vnc_connection_is_initi:26,vnc_connection_is_open:26,vnc_connection_key_ev:26,vnc_connection_new:26,vnc_connection_open_addr:26,vnc_connection_open_fd:26,vnc_connection_open_fd_with_hostnam:26,vnc_connection_open_host:26,vnc_connection_pointer_ev:26,vnc_connection_set_audio:26,vnc_connection_set_audio_format:26,vnc_connection_set_auth_subtyp:26,vnc_connection_set_auth_typ:26,vnc_connection_set_credenti:26,vnc_connection_set_encod:26,vnc_connection_set_framebuff:26,vnc_connection_set_pixel_format:26,vnc_connection_set_shar:26,vnc_connection_shutdown:26,vnc_cursor_chang:[12,13],vnc_cursor_get_data:26,vnc_cursor_get_height:26,vnc_cursor_get_hoti:26,vnc_cursor_get_hotx:26,vnc_cursor_get_width:26,vnc_cursor_new:26,vnc_desktop_res:[12,13],vnc_disconnect:[12,13],vnc_error:[12,13],vnc_framebuffer_blt:26,vnc_framebuffer_copyrect:26,vnc_framebuffer_fil:26,vnc_framebuffer_get_buff:26,vnc_framebuffer_get_height:26,vnc_framebuffer_get_local_format:26,vnc_framebuffer_get_remote_format:26,vnc_framebuffer_get_rowstrid:26,vnc_framebuffer_get_width:26,vnc_framebuffer_perfect_format_match:26,vnc_framebuffer_rgb24_blt:26,vnc_framebuffer_set_color_map:26,vnc_framebuffer_set_pixel_at:26,vnc_framebuffer_upd:[12,13],vnc_initi:[12,13],vnc_led_stat:[12,13],vnc_ledstate_caps_lock:26,vnc_ledstate_num_lock:26,vnc_ledstate_scroll_lock:26,vnc_pad:26,vnc_padding_larg:26,vnc_pixel_format_chang:[12,13],vnc_pixel_format_copi:26,vnc_pixel_format_fre:26,vnc_pixel_format_new:26,vnc_pointer_mode_chang:[12,13],vnc_server_cut_text:[12,13],vnc_util_check_vers:26,vnc_util_get_debug:26,vnc_util_get_vers:26,vnc_util_get_version_str:26,vnc_util_set_debug:26,vncaudio:26,vncaudioformat:26,vncaudioformattyp:26,vncaudiointerfac:26,vncaudiosampl:26,vncbaseaudio:26,vncbaseaudioclass:26,vncbaseframebuff:26,vncbaseframebufferclass:26,vnccolormap:26,vnccolormapentri:26,vncconnect:26,vncconnectionauth:26,vncconnectionauthvencrypt:26,vncconnectionclass:26,vncconnectioncredenti:26,vncconnectionencod:26,vnccursor:26,vnccursorclass:26,vncframebuff:26,vncframebufferinterfac:26,vncpixelformat:26,what:12,when:[3,5,6,10,12],whether:21,which:[6,10,12,14],whose:3,widget:24,width:[8,12,14,16],wmvi:20,writabl:[8,12,14],written:[12,24],wth:12,x11:12,x509:[12,24],x509none:[20,26],x509plain:[20,26],x509sasl:[20,26],x509vnc:[20,26],xcursor:[20,26],zero:3,zrle:[20,26]},titles:["Class Structures","Classes","GVnc.Audio","GVnc.AudioFormat","GVnc.AudioInterface","GVnc.AudioSample","GVnc.BaseAudio","GVnc.BaseAudioClass","GVnc.BaseFramebuffer","GVnc.BaseFramebufferClass","GVnc.ColorMap","GVnc.ColorMapEntry","GVnc.Connection","GVnc.ConnectionClass","GVnc.Cursor","GVnc.CursorClass","GVnc.Framebuffer","GVnc.FramebufferInterface","GVnc.PixelFormat","Constants","Enums","Functions","Hierarchy","Interface Structures","GVnc 1.0 (0.7.1)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,6,8,12,14,16],"enum":20,"function":21,api:24,audio:2,audioformat:3,audiointerfac:4,audiosampl:5,baseaudio:6,baseaudioclass:7,baseframebuff:8,baseframebufferclass:9,colormap:10,colormapentri:11,connect:12,connectionclass:13,constant:19,cursor:14,cursorclass:15,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],framebuff:16,framebufferinterfac:17,gvnc:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,24],hierarchi:22,interfac:[23,25],map:26,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],pixelformat:18,properti:[2,6,8,12,14,16],signal:[2,6,8,12,14,16],structur:[0,23,27],symbol:26,virtual:[2,6,8,12,14,16]}})