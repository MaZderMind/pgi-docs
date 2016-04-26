Search.setIndex({envversion:49,filenames:["class-structs","classes","classes/Map","classes/MapClass","classes/MapImage","classes/MapImageClass","classes/MapLayer","classes/MapLayerIface","classes/MapOsd","classes/MapOsdClass","classes/MapPoint","classes/MapPolygon","classes/MapPolygonClass","classes/MapTrack","classes/MapTrackClass","constants","enums","hierarchy","iface-structs","index","interfaces","mapping","structs"],objects:{"OsmGpsMap.Map":{"new":[2,3,1,""],convert_geographic_to_screen:[2,2,1,""],convert_screen_to_geographic:[2,2,1,""],do_draw_gps_point:[2,2,1,""],download_cancel_all:[2,2,1,""],download_maps:[2,2,1,""],get_bbox:[2,2,1,""],get_default_cache_directory:[2,3,1,""],get_event_location:[2,2,1,""],get_scale:[2,2,1,""],gps_add:[2,2,1,""],gps_clear:[2,2,1,""],gps_get_track:[2,2,1,""],image_add:[2,2,1,""],image_add_with_alignment:[2,2,1,""],image_add_with_alignment_z:[2,2,1,""],image_add_z:[2,2,1,""],image_remove:[2,2,1,""],image_remove_all:[2,2,1,""],layer_add:[2,2,1,""],layer_remove:[2,2,1,""],layer_remove_all:[2,2,1,""],map_redraw:[2,2,1,""],map_redraw_idle:[2,2,1,""],polygon_add:[2,2,1,""],polygon_remove:[2,2,1,""],polygon_remove_all:[2,2,1,""],scroll:[2,2,1,""],set_center:[2,2,1,""],set_center_and_zoom:[2,2,1,""],set_keyboard_shortcut:[2,2,1,""],set_zoom:[2,2,1,""],set_zoom_offset:[2,2,1,""],source_get_friendly_name:[2,3,1,""],source_get_image_format:[2,3,1,""],source_get_max_zoom:[2,3,1,""],source_get_min_zoom:[2,3,1,""],source_get_repo_uri:[2,3,1,""],source_is_valid:[2,3,1,""],track_add:[2,2,1,""],track_remove:[2,2,1,""],track_remove_all:[2,2,1,""],zoom_fit_bbox:[2,2,1,""],zoom_in:[2,2,1,""],zoom_out:[2,2,1,""]},"OsmGpsMap.Map.props":{auto_center:[2,0,1,""],auto_center_threshold:[2,0,1,""],auto_download:[2,0,1,""],drag_limit:[2,0,1,""],gps_track_highlight_radius:[2,0,1,""],gps_track_point_radius:[2,0,1,""],gps_track_width:[2,0,1,""],image_format:[2,0,1,""],latitude:[2,0,1,""],longitude:[2,0,1,""],map_source:[2,0,1,""],map_x:[2,0,1,""],map_y:[2,0,1,""],max_zoom:[2,0,1,""],min_zoom:[2,0,1,""],proxy_uri:[2,0,1,""],record_trip_history:[2,0,1,""],repo_uri:[2,0,1,""],show_gps_point:[2,0,1,""],show_trip_history:[2,0,1,""],tile_cache:[2,0,1,""],tile_cache_base:[2,0,1,""],tile_zoom_offset:[2,0,1,""],tiles_queued:[2,0,1,""],zoom:[2,0,1,""]},"OsmGpsMap.Map.signals":{changed:[2,4,1,""]},"OsmGpsMap.MapImage":{"new":[4,3,1,""],draw:[4,2,1,""],get_point:[4,2,1,""],get_rotation:[4,2,1,""],get_zorder:[4,2,1,""],set_rotation:[4,2,1,""]},"OsmGpsMap.MapImage.props":{pixbuf:[4,0,1,""],point:[4,0,1,""],rotation:[4,0,1,""],x_align:[4,0,1,""],y_align:[4,0,1,""],z_order:[4,0,1,""]},"OsmGpsMap.MapKey_t":{DOWN:[16,5,1,""],FULLSCREEN:[16,5,1,""],LEFT:[16,5,1,""],MAX:[16,5,1,""],RIGHT:[16,5,1,""],UP:[16,5,1,""],ZOOMIN:[16,5,1,""],ZOOMOUT:[16,5,1,""]},"OsmGpsMap.MapLayer":{busy:[6,2,1,""],button_press:[6,2,1,""],do_busy:[6,2,1,""],do_button_press:[6,2,1,""],do_draw:[6,2,1,""],do_render:[6,2,1,""],draw:[6,2,1,""],render:[6,2,1,""]},"OsmGpsMap.MapOsd":{"new":[8,3,1,""]},"OsmGpsMap.MapOsd.props":{dpad_radius:[8,0,1,""],osd_x:[8,0,1,""],osd_y:[8,0,1,""],show_coordinates:[8,0,1,""],show_crosshair:[8,0,1,""],show_dpad:[8,0,1,""],show_gps_in_dpad:[8,0,1,""],show_gps_in_zoom:[8,0,1,""],show_scale:[8,0,1,""],show_zoom:[8,0,1,""]},"OsmGpsMap.MapPoint":{copy:[10,2,1,""],free:[10,2,1,""],get_degrees:[10,2,1,""],get_radians:[10,2,1,""],new_degrees:[10,3,1,""],new_radians:[10,3,1,""],set_degrees:[10,2,1,""],set_radians:[10,2,1,""]},"OsmGpsMap.MapPolygon":{"new":[11,3,1,""]},"OsmGpsMap.MapPolygon.props":{editable:[11,0,1,""],shaded:[11,0,1,""],track:[11,0,1,""],visible:[11,0,1,""]},"OsmGpsMap.MapSource_t":{GOOGLE_HYBRID:[16,5,1,""],GOOGLE_SATELLITE:[16,5,1,""],GOOGLE_STREET:[16,5,1,""],LAST:[16,5,1,""],MAPS_FOR_FREE:[16,5,1,""],NULL:[16,5,1,""],OPENAERIALMAP:[16,5,1,""],OPENCYCLEMAP:[16,5,1,""],OPENSTREETMAP:[16,5,1,""],OPENSTREETMAP_RENDERER:[16,5,1,""],OSMC_TRAILS:[16,5,1,""],OSM_PUBLIC_TRANSPORT:[16,5,1,""],VIRTUAL_EARTH_HYBRID:[16,5,1,""],VIRTUAL_EARTH_SATELLITE:[16,5,1,""],VIRTUAL_EARTH_STREET:[16,5,1,""]},"OsmGpsMap.MapTrack":{"new":[13,3,1,""],add_point:[13,2,1,""],get_color:[13,2,1,""],get_length:[13,2,1,""],get_point:[13,2,1,""],get_points:[13,2,1,""],insert_point:[13,2,1,""],n_points:[13,2,1,""],remove_point:[13,2,1,""],set_color:[13,2,1,""]},"OsmGpsMap.MapTrack.props":{alpha:[13,0,1,""],color:[13,0,1,""],editable:[13,0,1,""],line_width:[13,0,1,""],track:[13,0,1,""],visible:[13,0,1,""]},"OsmGpsMap.MapTrack.signals":{point_added:[13,4,1,""],point_changed:[13,4,1,""],point_inserted:[13,4,1,""],point_removed:[13,4,1,""]},OsmGpsMap:{MAP_CACHE_AUTO:[15,0,1,""],MAP_CACHE_DISABLED:[15,0,1,""],MAP_CACHE_FRIENDLY:[15,0,1,""],MAP_INVALID:[15,0,1,""],Map:[2,1,1,""],MapClass:[3,1,1,""],MapImage:[4,1,1,""],MapImageClass:[5,1,1,""],MapKey_t:[16,1,1,""],MapLayer:[6,1,1,""],MapLayerIface:[7,1,1,""],MapOsd:[8,1,1,""],MapOsdClass:[9,1,1,""],MapPoint:[10,1,1,""],MapPolygon:[11,1,1,""],MapPolygonClass:[12,1,1,""],MapSource_t:[16,1,1,""],MapTrack:[13,1,1,""],MapTrackClass:[14,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:data","1":"py:class","2":"py:method","3":"py:classmethod","4":"py:function","5":"py:attribute"},terms:{"abstract":[2,4,8,11,13],"default":[2,4,8,11,13],"float":[2,4,10,13],"function":2,"int":[2,4,8,11,13],"new":[2,4,8,10,11,13,21],"null":[16,21],"return":[2,4,6,8,10,11,13],"short":[2,4,8,11,13],"true":[2,8,11,13],about:2,access:[2,3,4,5,7,8,9,10,11,12,13,14],accord:2,action:2,add:13,add_point:[13,21],align:4,all:2,alpha:13,also:2,amount:2,amp:2,ani:2,any:2,append:2,applic:[2,19],associ:2,associat:2,atk:2,auto:[2,15],auto_cent:2,auto_center_threshold:2,auto_download:2,axi:2,base:[2,4,6,8,11,13,16],befor:2,begin:2,bool:[2,6,8,11,13],both:2,bottom:[2,10],bound:2,box:2,buildabl:2,busi:[6,7,21],button_press:[6,7,21],cacel:2,cach:2,cairo:[2,4,6],call:2,can:2,cancel:2,caus:2,center:2,centr:8,chage:2,chang:[2,13],charact:2,circl:2,classmethod:[2,4,8,10,11,13],click:2,color:13,com:19,complet:2,connect:2,construct:[2,4,8,11,13],construct_only:[2,13],constructor:2,content:2,context:[2,4,6],control:[2,8],conveni:2,convert:2,convert_geographic_to_screen:[2,21],convert_screen_to_geograph:[2,21],coordin:8,copi:[10,21],corner:[2,10],correspond:2,could:2,creat:[2,8],crosshair:8,current:[2,10],data:[2,19],debian:19,defin:2,degre:[2,10],depend:19,deriv:2,describ:2,descript:[2,3,4,5,7,8,9,10,11,12,13,14,19],design:2,dir:2,directori:2,disabl:2,disk:2,displai:19,do_busi:6,do_button_press:6,do_draw:6,do_draw_gps_point:2,do_rend:6,doe:2,down:[16,21],download:[2,19],download_cancel_al:[2,21],download_map:[2,21],dpad:8,dpad_radiu:8,drag:2,drag_limit:2,draw:[4,6,7,19,21],draw_gps_point:[2,3],drawingarea:[2,17],drawingareaclass:3,drawn:[2,13],east:2,edit:[11,13],either:2,emb:19,emit:2,event:[2,6],eventbutton:[2,6],explicitli:2,fals:[2,8,11,13],fetch:2,fill:2,fit:2,flag:[2,4,8,11,13],follow:2,format:2,free:[2,10,21],friendli:[2,15],friendlynam:2,from:[2,19],full:2,fullscreen:[16,21],gdk:[2,4,6,13],gdkpixbuf:[2,4],geograph:2,get:2,get_bbox:[2,21],get_color:[13,21],get_default_cache_directori:[2,21],get_degre:[10,21],get_event_loc:[2,21],get_length:[13,21],get_point:[4,13,21],get_radian:[10,21],get_rot:[4,21],get_scal:[2,21],get_zord:[4,21],ginterfac:[2,6,8],gir1:19,github:19,given:[2,19],glib:16,globe:2,gobject:[2,4,5,6,7,8,9,11,12,13,14,17,19],google_hybrid:[16,21],google_satellite:[16,21],google_street:[16,21],gps:[2,19],gps_add:[2,21],gps_clear:[2,21],gps_get_track:[2,21],gps_track_highlight_radiu:2,gps_track_point_radiu:2,gps_track_width:2,gtk:[2,3,17,19],gtkeventbutton:2,have:2,head:2,highlight:2,histori:2,homepag:19,http:[2,19],imag:[2,4],image_add:[2,21],image_add_with_align:[2,21],image_add_with_alignment_z:[2,21],image_add_z:[2,21],image_format:2,image_remov:[2,21],image_remove_al:[2,21],implement:[2,6],implementorifac:2,includ:19,indic:8,inform:2,inherit:[2,4,8,11,13],initial:2,initiallyunown:[2,17],inner:2,insert:13,insert_point:[13,21],insid:2,instanc:8,instead:2,integ:2,interest:[2,19],intern:2,interpret:2,jpg:2,kei:2,keyboard:2,keyval:2,keyval_from_nam:2,kwarg:[2,4,8,11,13],lagitud:10,larg:2,last:[16,21],lat:10,latitud:[2,10],latitude1:2,latitude2:2,layer:2,layer_add:[2,21],layer_remov:[2,21],layer_remove_al:[2,21],left:[2,10,16,21],length:13,level:2,libosmgpsmap:19,librari:[2,19],limit:2,line:[2,13],line_width:13,list:[11,13],local:2,locat:[2,4],lon:10,longitud:[2,10],longitude1:2,longitude2:2,manag:2,map:1,map_cache_auto:[2,15,21],map_cache_disabled:[2,15,21],map_cache_friendly:[2,15,21],map_i:2,map_invalid:[2,15,21],map_redraw:[2,21],map_redraw_idl:[2,21],map_sourc:2,map_track:13,map_x:2,mapclass:[0,2],mapimag:[1,2],mapimageclass:[0,4],mapkey_t:[2,16,21],maplay:2,maplayerifac:6,maposd:[1,6],maposdclass:[0,8],mappoint:[2,4],mappolygon:[1,2],mappolygonclass:[0,11],maps_for_free:[16,21],mapsource_t:[2,16,21],maptrack:[1,2],maptrackclass:[0,13],max:[2,16,21],max_zoom:2,maximum:2,md5:2,md5sum:2,mercat:2,meter:[2,13],middl:8,min:2,min_zoom:2,minimum:2,modifi:2,more:2,mous:2,move:[2,19],must:2,n_point:[13,21],name:[2,3,4,5,7,8,9,10,11,12,13,14],navig:8,network:2,new_degre:[10,21],new_radian:[10,21],newli:[2,8],none:[2,3,4,5,6,7,8,9,11,12,13,14,15],north:2,note:2,notifi:2,num:2,number:[2,19],numx:2,numy:2,numz:2,nzjr:19,object:[2,3,4,7,8,11,13,17],objectclass:[2,4,5,8,9,11,12,13,14],occur:2,offset:2,omit:2,onli:2,openaerialmap:[16,19,21],opencyclemap:[16,21],openstreemap:2,openstreetmap:[2,16,19,21],openstreetmap_renderer:[16,21],order:[2,4],ordin:19,org:[2,19],osd:8,osd_i:8,osd_x:8,osm:19,osm_gps_map_cache_auto:21,osm_gps_map_cache_disabled:21,osm_gps_map_cache_friendly:21,osm_gps_map_convert_geographic_to_screen:21,osm_gps_map_convert_screen_to_geograph:21,osm_gps_map_download_cancel_al:21,osm_gps_map_download_map:21,osm_gps_map_get_bbox:21,osm_gps_map_get_default_cache_directori:21,osm_gps_map_get_event_loc:21,osm_gps_map_get_scal:21,osm_gps_map_gps_add:21,osm_gps_map_gps_clear:21,osm_gps_map_gps_get_track:21,osm_gps_map_image_add:21,osm_gps_map_image_add_with_align:21,osm_gps_map_image_add_with_alignment_z:21,osm_gps_map_image_add_z:21,osm_gps_map_image_draw:21,osm_gps_map_image_get_point:21,osm_gps_map_image_get_rot:21,osm_gps_map_image_get_zord:21,osm_gps_map_image_new:21,osm_gps_map_image_remov:21,osm_gps_map_image_remove_al:21,osm_gps_map_image_set_rot:21,osm_gps_map_invalid:21,osm_gps_map_key_down:21,osm_gps_map_key_fullscreen:21,osm_gps_map_key_left:21,osm_gps_map_key_max:21,osm_gps_map_key_right:21,osm_gps_map_key_up:21,osm_gps_map_key_zoomin:21,osm_gps_map_key_zoomout:21,osm_gps_map_layer_add:21,osm_gps_map_layer_busi:21,osm_gps_map_layer_button_press:21,osm_gps_map_layer_draw:21,osm_gps_map_layer_remov:21,osm_gps_map_layer_remove_al:21,osm_gps_map_layer_rend:21,osm_gps_map_map_redraw:21,osm_gps_map_map_redraw_idl:21,osm_gps_map_new:21,osm_gps_map_osd_new:21,osm_gps_map_point_copi:21,osm_gps_map_point_fre:21,osm_gps_map_point_get_degre:21,osm_gps_map_point_get_radian:21,osm_gps_map_point_new_degre:21,osm_gps_map_point_new_radian:21,osm_gps_map_point_set_degre:21,osm_gps_map_point_set_radian:21,osm_gps_map_polygon_add:21,osm_gps_map_polygon_get_track:21,osm_gps_map_polygon_new:21,osm_gps_map_polygon_remov:21,osm_gps_map_polygon_remove_al:21,osm_gps_map_scrol:21,osm_gps_map_set_cent:21,osm_gps_map_set_center_and_zoom:21,osm_gps_map_set_keyboard_shortcut:21,osm_gps_map_set_zoom:21,osm_gps_map_set_zoom_offset:21,osm_gps_map_source_get_friendly_nam:21,osm_gps_map_source_get_image_format:21,osm_gps_map_source_get_max_zoom:21,osm_gps_map_source_get_min_zoom:21,osm_gps_map_source_get_repo_uri:21,osm_gps_map_source_google_hybrid:21,osm_gps_map_source_google_satellite:21,osm_gps_map_source_google_street:21,osm_gps_map_source_is_valid:21,osm_gps_map_source_last:21,osm_gps_map_source_maps_for_free:21,osm_gps_map_source_null:21,osm_gps_map_source_openaerialmap:21,osm_gps_map_source_opencyclemap:21,osm_gps_map_source_openstreetmap:21,osm_gps_map_source_openstreetmap_renderer:21,osm_gps_map_source_osm_public_transport:21,osm_gps_map_source_osmc_trails:21,osm_gps_map_source_virtual_earth_hybrid:21,osm_gps_map_source_virtual_earth_satellite:21,osm_gps_map_source_virtual_earth_street:21,osm_gps_map_track_add:21,osm_gps_map_track_add_point:21,osm_gps_map_track_get_color:21,osm_gps_map_track_get_length:21,osm_gps_map_track_get_point:21,osm_gps_map_track_insert_point:21,osm_gps_map_track_n_point:21,osm_gps_map_track_new:21,osm_gps_map_track_remov:21,osm_gps_map_track_remove_al:21,osm_gps_map_track_remove_point:21,osm_gps_map_track_set_color:21,osm_gps_map_zoom_fit_bbox:21,osm_gps_map_zoom_in:21,osm_gps_map_zoom_out:21,osm_public_transport:[16,21],osmc_trails:[16,21],osmgpsmap:[0,1],osmgpsmapclass:21,osmgpsmapimag:21,osmgpsmapimageclass:21,osmgpsmapkey_t:21,osmgpsmaplay:21,osmgpsmaplayerifac:21,osmgpsmaposd:21,osmgpsmaposdclass:21,osmgpsmappoint:21,osmgpsmappolygon:21,osmgpsmappolygonclass:21,osmgpsmapsource_t:21,osmgpsmaptrack:21,osmgpsmaptrackclass:21,other:[2,19],out:13,outlin:2,over:2,packag:19,paramet:[2,4,6,10,13],parent:[4,7,8,11,13,19],parent_class:[3,5,9,12,14],parent_inst:2,pass:2,path:2,pixbuf:[2,4],pixel:2,pixel_i:2,pixel_x:2,png:2,point:[2,4,11,13,19],point_ad:13,point_chang:13,point_insert:13,point_remov:13,pointer:2,poli:[2,11],polygon:11,polygon_add:[2,21],polygon_remov:[2,21],polygon_remove_al:[2,21],posit:[2,13],predefin:2,press:2,primarili:2,project:[2,19],prop:[2,4,8,11,13],provid:2,proxi:2,proxy_uri:2,pt1:2,pt2:2,python:21,qrt:2,quad:2,queu:2,radiu:[2,8],random:2,rang:2,readable:[2,4,8,11,13],receiv:[2,13],recommen:2,record:2,record_trip_histori:2,rect:4,rectangl:4,rectangular:2,region:2,remov:13,remove_point:[13,21],render:[6,7,21],replac:2,repo:2,repo_uri:2,repositori:2,repres:2,rgba:13,right:[2,10,16,21],rlat:10,rlon:10,rot:4,rotat:4,rule:2,run_first:[2,13],scale:[2,8],scroll:[2,21],see:2,self:13,set:2,set_cent:[2,21],set_center_and_zoom:[2,21],set_color:[13,21],set_degre:[10,21],set_keyboard_shortcut:[2,21],set_radian:[10,21],set_rot:[4,21],set_zoom:[2,21],set_zoom_offset:[2,21],shade:11,shortcut:2,should:[2,11,13],show:[2,8],show_coordin:8,show_crosshair:8,show_dpad:8,show_gps_in_dpad:8,show_gps_in_zoom:8,show_gps_point:2,show_scal:8,show_trip_histori:2,show_zoom:8,shown:2,simiar:2,simpli:2,slippi:2,sourc:2,source_get_friendly_nam:[2,21],source_get_image_format:[2,21],source_get_max_zoom:[2,21],source_get_min_zoom:[2,21],source_get_repo_uri:[2,21],source_is_valid:[2,21],south:2,special:2,specif:2,specifi:2,start:2,str:2,string:2,struct:[2,4,8,11,13],subclass:[2,4,8,11,13],suppli:2,support:2,symbol:19,than:2,thi:[2,4,11,13],threshold:2,thu:2,tile:2,tile_cach:2,tile_cache_bas:2,tile_zoom_offset:2,tiles_queu:2,time:2,token:2,top:[2,10],track:[2,11,13,19],track_add:[2,21],track_remov:[2,21],track_remove_al:[2,21],transpar:13,treat:2,tree:2,trigger:2,trip:2,type:[2,3,4,5,6,7,8,9,10,11,12,13,14],typeinterfac:7,typic:2,unavail:21,understand:2,upsampl:2,uri:2,user:2,valu:[2,4,8,11,13,16],version:[2,10,13],vfunc:2,virtual_earth_hybrid:[16,21],virtual_earth_satellite:[16,21],virtual_earth_street:[16,21],visibl:[11,13],wait:2,want:2,websit:19,west:2,when:[2,19],where:2,whether:2,which:[2,13],widget:[2,17],widgetclass:2,width:[2,13],window:[2,10],wish:2,writable:[2,4,8,11,13],x_align:4,xalign:2,xdg:2,y_align:4,yalign:2,you:2,z_order:4,zoom:[2,8],zoom_end:2,zoom_fit_bbox:[2,21],zoom_in:[2,21],zoom_offset:2,zoom_out:[2,21],zoom_start:2,zoomin:[16,21],zoomout:[16,21],zorder:2},titles:["Class Structures","Classes","OsmGpsMap.Map","OsmGpsMap.MapClass","OsmGpsMap.MapImage","OsmGpsMap.MapImageClass","OsmGpsMap.MapLayer","OsmGpsMap.MapLayerIface","OsmGpsMap.MapOsd","OsmGpsMap.MapOsdClass","OsmGpsMap.MapPoint","OsmGpsMap.MapPolygon","OsmGpsMap.MapPolygonClass","OsmGpsMap.MapTrack","OsmGpsMap.MapTrackClass","Constants","Enums","Hierarchy","Interface Structures","OsmGpsMap 1.0","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,4,6,8,11,13],"enum":16,api:19,constant:15,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],field:[2,3,4,5,6,7,8,9,10,11,12,13,14],hierarchi:17,interfac:[18,20],map:[2,21],mapclass:3,mapimag:4,mapimageclass:5,maplay:6,maplayerifac:7,maposd:8,maposdclass:9,mappoint:10,mappolygon:11,mappolygonclass:12,maptrack:13,maptrackclass:14,method:[2,3,4,5,6,7,8,9,10,11,12,13,14],osmgpsmap:[2,3,4,5,6,7,8,9,10,11,12,13,14,19],properti:[2,4,6,8,11,13],signal:[2,4,6,8,11,13],structur:[0,18,22],style:2,symbol:21,virtual:[2,4,6,8,11,13]}})