Search.setIndex({docnames:["class-structs","classes","classes/Backend","classes/BackendInterface","classes/BoundingBox","classes/BoundingBoxClass","classes/Forward","classes/ForwardClass","classes/Location","classes/LocationClass","classes/MockBackend","classes/MockBackendClass","classes/MockBackendQuery","classes/Nominatim","classes/NominatimClass","classes/Place","classes/PlaceClass","classes/Reverse","classes/ReverseClass","constants","enums","functions","hierarchy","iface-structs","index","interfaces","mapping","structs"],envversion:53,filenames:["class-structs.rst","classes.rst","classes/Backend.rst","classes/BackendInterface.rst","classes/BoundingBox.rst","classes/BoundingBoxClass.rst","classes/Forward.rst","classes/ForwardClass.rst","classes/Location.rst","classes/LocationClass.rst","classes/MockBackend.rst","classes/MockBackendClass.rst","classes/MockBackendQuery.rst","classes/Nominatim.rst","classes/NominatimClass.rst","classes/Place.rst","classes/PlaceClass.rst","classes/Reverse.rst","classes/ReverseClass.rst","constants.rst","enums.rst","functions.rst","hierarchy.rst","iface-structs.rst","index.rst","interfaces.rst","mapping.rst","structs.rst"],objects:{"GeocodeGlib.Backend":{do_forward_search:[2,1,1,""],do_forward_search_async:[2,1,1,""],do_forward_search_finish:[2,1,1,""],do_reverse_resolve:[2,1,1,""],do_reverse_resolve_async:[2,1,1,""],do_reverse_resolve_finish:[2,1,1,""],forward_search:[2,1,1,""],forward_search_async:[2,1,1,""],forward_search_finish:[2,1,1,""],reverse_resolve:[2,1,1,""],reverse_resolve_async:[2,1,1,""],reverse_resolve_finish:[2,1,1,""]},"GeocodeGlib.BoundingBox":{"new":[4,2,1,""],equal:[4,1,1,""],get_bottom:[4,1,1,""],get_left:[4,1,1,""],get_right:[4,1,1,""],get_top:[4,1,1,""]},"GeocodeGlib.BoundingBox.props":{bottom:[4,3,1,""],left:[4,3,1,""],right:[4,3,1,""],top:[4,3,1,""]},"GeocodeGlib.Error":{INTERNAL_SERVER:[20,4,1,""],INVALID_ARGUMENTS:[20,4,1,""],NOT_SUPPORTED:[20,4,1,""],NO_MATCHES:[20,4,1,""],PARSE:[20,4,1,""],quark:[20,2,1,""]},"GeocodeGlib.Forward":{get_answer_count:[6,1,1,""],get_bounded:[6,1,1,""],get_search_area:[6,1,1,""],new_for_params:[6,2,1,""],new_for_string:[6,2,1,""],search:[6,1,1,""],search_async:[6,1,1,""],search_finish:[6,1,1,""],set_answer_count:[6,1,1,""],set_backend:[6,1,1,""],set_bounded:[6,1,1,""],set_search_area:[6,1,1,""]},"GeocodeGlib.Forward.props":{answer_count:[6,3,1,""],bounded:[6,3,1,""],search_area:[6,3,1,""]},"GeocodeGlib.Location":{"new":[8,2,1,""],equal:[8,1,1,""],get_accuracy:[8,1,1,""],get_altitude:[8,1,1,""],get_crs:[8,1,1,""],get_description:[8,1,1,""],get_distance_from:[8,1,1,""],get_latitude:[8,1,1,""],get_longitude:[8,1,1,""],get_timestamp:[8,1,1,""],new_with_description:[8,2,1,""],set_description:[8,1,1,""],set_from_uri:[8,1,1,""],to_uri:[8,1,1,""]},"GeocodeGlib.Location.props":{accuracy:[8,3,1,""],altitude:[8,3,1,""],crs:[8,3,1,""],description:[8,3,1,""],latitude:[8,3,1,""],longitude:[8,3,1,""],timestamp:[8,3,1,""]},"GeocodeGlib.LocationCRS":{WGS84:[20,4,1,""]},"GeocodeGlib.LocationURIScheme":{GEO:[20,4,1,""]},"GeocodeGlib.MockBackend":{"new":[10,2,1,""],add_forward_result:[10,1,1,""],add_reverse_result:[10,1,1,""],clear:[10,1,1,""],get_query_log:[10,1,1,""]},"GeocodeGlib.Nominatim":{"new":[13,2,1,""],do_query:[13,1,1,""],do_query_async:[13,1,1,""],do_query_finish:[13,1,1,""],get_gnome:[13,2,1,""]},"GeocodeGlib.Nominatim.props":{base_url:[13,3,1,""],maintainer_email_address:[13,3,1,""],user_agent:[13,3,1,""]},"GeocodeGlib.Place":{"new":[15,2,1,""],equal:[15,1,1,""],get_administrative_area:[15,1,1,""],get_area:[15,1,1,""],get_bounding_box:[15,1,1,""],get_building:[15,1,1,""],get_continent:[15,1,1,""],get_country:[15,1,1,""],get_country_code:[15,1,1,""],get_county:[15,1,1,""],get_icon:[15,1,1,""],get_location:[15,1,1,""],get_name:[15,1,1,""],get_osm_id:[15,1,1,""],get_osm_type:[15,1,1,""],get_place_type:[15,1,1,""],get_postal_code:[15,1,1,""],get_state:[15,1,1,""],get_street:[15,1,1,""],get_street_address:[15,1,1,""],get_town:[15,1,1,""],new_with_location:[15,2,1,""],set_administrative_area:[15,1,1,""],set_area:[15,1,1,""],set_bounding_box:[15,1,1,""],set_building:[15,1,1,""],set_continent:[15,1,1,""],set_country:[15,1,1,""],set_country_code:[15,1,1,""],set_county:[15,1,1,""],set_location:[15,1,1,""],set_name:[15,1,1,""],set_postal_code:[15,1,1,""],set_state:[15,1,1,""],set_street:[15,1,1,""],set_street_address:[15,1,1,""],set_town:[15,1,1,""]},"GeocodeGlib.Place.props":{administrative_area:[15,3,1,""],area:[15,3,1,""],bounding_box:[15,3,1,""],building:[15,3,1,""],continent:[15,3,1,""],country:[15,3,1,""],country_code:[15,3,1,""],county:[15,3,1,""],icon:[15,3,1,""],location:[15,3,1,""],name:[15,3,1,""],osm_id:[15,3,1,""],osm_type:[15,3,1,""],place_type:[15,3,1,""],postal_code:[15,3,1,""],state:[15,3,1,""],street:[15,3,1,""],street_address:[15,3,1,""],town:[15,3,1,""]},"GeocodeGlib.PlaceOsmType":{NODE:[20,4,1,""],RELATION:[20,4,1,""],UNKNOWN:[20,4,1,""],WAY:[20,4,1,""]},"GeocodeGlib.PlaceType":{AIRPORT:[20,4,1,""],BAR:[20,4,1,""],BUILDING:[20,4,1,""],BUS_STOP:[20,4,1,""],COLLOQUIAL:[20,4,1,""],CONTINENT:[20,4,1,""],COUNTRY:[20,4,1,""],COUNTY:[20,4,1,""],DRAINAGE:[20,4,1,""],ESTATE:[20,4,1,""],HISTORICAL_COUNTY:[20,4,1,""],HISTORICAL_STATE:[20,4,1,""],HISTORICAL_TOWN:[20,4,1,""],ISLAND:[20,4,1,""],LAND_FEATURE:[20,4,1,""],LIGHT_RAIL_STATION:[20,4,1,""],LOCAL_ADMINISTRATIVE_AREA:[20,4,1,""],MISCELLANEOUS:[20,4,1,""],MOTORWAY:[20,4,1,""],OCEAN:[20,4,1,""],PLACE_OF_WORSHIP:[20,4,1,""],POINT_OF_INTEREST:[20,4,1,""],POSTAL_CODE:[20,4,1,""],RAILWAY_STATION:[20,4,1,""],RESTAURANT:[20,4,1,""],SCHOOL:[20,4,1,""],SEA:[20,4,1,""],STATE:[20,4,1,""],STREET:[20,4,1,""],SUBURB:[20,4,1,""],SUPERNAME:[20,4,1,""],TIME_ZONE:[20,4,1,""],TOWN:[20,4,1,""],UNKNOWN:[20,4,1,""],ZONE:[20,4,1,""]},"GeocodeGlib.Reverse":{new_for_location:[17,2,1,""],resolve:[17,1,1,""],resolve_async:[17,1,1,""],resolve_finish:[17,1,1,""],set_backend:[17,1,1,""]},GeocodeGlib:{Backend:[2,0,1,""],BackendInterface:[3,0,1,""],BoundingBox:[4,0,1,""],BoundingBoxClass:[5,0,1,""],Error:[20,0,1,""],Forward:[6,0,1,""],ForwardClass:[7,0,1,""],LOCATION_ACCURACY_CITY:[19,3,1,""],LOCATION_ACCURACY_CONTINENT:[19,3,1,""],LOCATION_ACCURACY_COUNTRY:[19,3,1,""],LOCATION_ACCURACY_REGION:[19,3,1,""],LOCATION_ACCURACY_STREET:[19,3,1,""],LOCATION_ACCURACY_UNKNOWN:[19,3,1,""],Location:[8,0,1,""],LocationCRS:[20,0,1,""],LocationClass:[9,0,1,""],LocationURIScheme:[20,0,1,""],MockBackend:[10,0,1,""],MockBackendClass:[11,0,1,""],MockBackendQuery:[12,0,1,""],Nominatim:[13,0,1,""],NominatimClass:[14,0,1,""],Place:[15,0,1,""],PlaceClass:[16,0,1,""],PlaceOsmType:[20,0,1,""],PlaceType:[20,0,1,""],Reverse:[17,0,1,""],ReverseClass:[18,0,1,""],error_quark:[21,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","data","Python data"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:data","4":"py:attribute","5":"py:function"},terms:{"7976931348623157e":8,"abstract":[4,6,8,10,13,15,17],"case":[2,6,15,17],"class":[3,5,7,9,11,12,14,16,18,20,24],"default":[4,6,8,13,14,15,17],"enum":24,"float":[4,8],"function":[2,6,13,14,17,20,24],"int":[6,8,20,21],"new":[2,3,4,6,8,10,12,13,14,15,17,26],"return":[2,4,6,8,10,12,13,15,17,20,21],"short":[4,6,8,13,15],"true":[4,6,8,12,15],CRS:[8,20],For:[8,15],One:20,The:[2,4,6,8,10,12,13,14,15,20],Use:[2,4,6,8,13,15,17],Used:20,accept:[10,12],access:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],account:8,accuraci:[8,19],act:6,add:10,add_forward_result:[10,26],add_reverse_result:[10,26],added:10,addition:10,address:[8,13,15],admin_area:15,administr:[15,20],administrative_area:15,agent:13,airport:[20,26],all:[2,4,5,6,7,8,9,10,13,14,15,16,17,18,20],allow:14,along:8,also:[2,6,8],altitud:8,ambigu:2,android:8,ani:20,anoth:[4,8,15],answer:6,answer_count:6,api:13,applic:[12,13,14],appropri:2,area:[6,15,20],argument:20,associ:15,asynchron:[2,6,10,17],asyncreadycallback:[2,6,13,17],asyncresult:[2,6,13,17],attract:20,backend:[6,10,13,17,25,26],backendinterfac:[2,23,26],bai:20,bar:[20,26],base:[2,4,6,8,10,13,15,17,20],base_url:13,basic:3,bbox:15,beach:20,been:10,between:8,bind:6,block:2,bodi:[14,20],bool:[4,6,8,12,15],both:[4,8,15],bottom:4,bound:[4,6,15],boundari:[15,20],bounding_box:15,boundingbox:[1,6,15,22,26],boundingboxclass:[0,4,26],box:[4,6,15],brows:24,build:[15,20,26],bus:20,bus_stop:[20,26],calcul:8,call:[2,6,10,12,14,17],callback:[2,6,13,17],caller:10,campu:15,can:[2,6,17],canal:20,cancel:[2,6,13,17],capac:20,carri:20,chang:8,check:14,citi:[19,20],classmethod:[4,6,8,10,13,15,17,20],clear:[10,26],client:14,code:[12,15,20],colloqui:[20,26],compar:[4,8,15],constant:24,construct_onli:[4,8,13,15],contact:13,contain:[6,20],context:20,contin:[15,19,20,26],coordin:[2,4,8,17,20],correspond:10,could:[2,17],count:6,counti:[15,20,26],countri:[15,19,20,26],country_cod:15,cover:20,creat:[4,6,8,10,13,15,17],crs:8,current:[6,8,17],curvatur:8,data:[2,6,17],databas:20,debian:24,defin:[3,20],degre:8,denomin:20,depend:[20,24],deriv:[13,14],descript:[3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,24],design:20,develop:20,didn:20,differ:8,directli:[2,4,5,6,7,8,9,10,13,15,16,17,18],distanc:8,do_forward_search:2,do_forward_search_async:2,do_forward_search_finish:2,do_queri:13,do_query_async:13,do_query_finish:13,do_reverse_resolv:2,do_reverse_resolve_async:2,do_reverse_resolve_finish:2,document:[2,6,13],doe:[8,15],done:[2,4,6,8,13,15,17],down:20,drainag:[20,26],each:14,earth:[8,20],effect:10,either:10,element:20,email:13,empti:[10,12],encount:20,epoch:8,equal:[4,8,15,26],error:[2,6,8,10,12,17,20,21,26],error_quark:[21,26],estat:[20,26],event:13,exactli:[4,8,10,15],exampl:[8,13,14,15],explain:20,extens:8,facil:20,fals:[4,6,8,12,15],far:10,fast:20,featur:20,finish:[2,6,17],first:2,five:20,flag:[4,6,8,13,15],form:[6,8],formal:20,format:[2,6,10,12],forward:[1,2,10,12,22,26],forward_search:[2,3,10,26],forward_search_async:[2,3,26],forward_search_finish:[2,3,26],forwardclass:[0,6,26],found:[2,6,17],free:[2,6,8,17],freed:8,from:[6,8,13,20],full:20,g_ifac:3,g_list_fre:[2,6],gener:20,genum:20,geo:[8,20,26],geocod:[2,3,6,13,17,20,21,24],geocode_backend_forward_search:26,geocode_backend_forward_search_async:26,geocode_backend_forward_search_finish:26,geocode_backend_reverse_resolv:26,geocode_backend_reverse_resolve_async:26,geocode_backend_reverse_resolve_finish:26,geocode_bounding_box_equ:26,geocode_bounding_box_get_bottom:26,geocode_bounding_box_get_left:26,geocode_bounding_box_get_right:26,geocode_bounding_box_get_top:26,geocode_bounding_box_new:26,geocode_error_internal_serv:26,geocode_error_invalid_argu:26,geocode_error_no_match:26,geocode_error_not_support:26,geocode_error_pars:26,geocode_error_quark:26,geocode_forward_get_answer_count:26,geocode_forward_get_bound:26,geocode_forward_get_search_area:26,geocode_forward_new_for_param:26,geocode_forward_new_for_str:26,geocode_forward_search:26,geocode_forward_search_async:26,geocode_forward_search_finish:26,geocode_forward_set_answer_count:26,geocode_forward_set_backend:26,geocode_forward_set_bound:26,geocode_forward_set_search_area:26,geocode_location_accuracy_c:26,geocode_location_accuracy_contin:26,geocode_location_accuracy_countri:26,geocode_location_accuracy_region:26,geocode_location_accuracy_street:26,geocode_location_accuracy_unknown:26,geocode_location_crs_wgs84:26,geocode_location_equ:26,geocode_location_get_accuraci:26,geocode_location_get_altitud:26,geocode_location_get_cr:26,geocode_location_get_descript:26,geocode_location_get_distance_from:26,geocode_location_get_latitud:26,geocode_location_get_longitud:26,geocode_location_get_timestamp:26,geocode_location_new:26,geocode_location_new_with_descript:26,geocode_location_set_descript:26,geocode_location_set_from_uri:26,geocode_location_to_uri:26,geocode_location_uri_scheme_geo:26,geocode_mock_backend_add_forward_result:26,geocode_mock_backend_add_reverse_result:26,geocode_mock_backend_clear:26,geocode_mock_backend_get_query_log:26,geocode_mock_backend_new:26,geocode_nominatim_get_gnom:26,geocode_nominatim_new:26,geocode_place_equ:26,geocode_place_get_administrative_area:26,geocode_place_get_area:26,geocode_place_get_bounding_box:26,geocode_place_get_build:26,geocode_place_get_contin:26,geocode_place_get_counti:26,geocode_place_get_countri:26,geocode_place_get_country_cod:26,geocode_place_get_icon:26,geocode_place_get_loc:26,geocode_place_get_nam:26,geocode_place_get_osm_id:26,geocode_place_get_osm_typ:26,geocode_place_get_place_typ:26,geocode_place_get_postal_cod:26,geocode_place_get_st:26,geocode_place_get_street:26,geocode_place_get_street_address:26,geocode_place_get_town:26,geocode_place_new:26,geocode_place_new_with_loc:26,geocode_place_osm_type_nod:26,geocode_place_osm_type_rel:26,geocode_place_osm_type_unknown:26,geocode_place_osm_type_wai:26,geocode_place_set_administrative_area:26,geocode_place_set_area:26,geocode_place_set_bounding_box:26,geocode_place_set_build:26,geocode_place_set_contin:26,geocode_place_set_counti:26,geocode_place_set_countri:26,geocode_place_set_country_cod:26,geocode_place_set_loc:26,geocode_place_set_nam:26,geocode_place_set_postal_cod:26,geocode_place_set_st:26,geocode_place_set_street:26,geocode_place_set_street_address:26,geocode_place_set_town:26,geocode_place_type_airport:26,geocode_place_type_bar:26,geocode_place_type_build:26,geocode_place_type_bus_stop:26,geocode_place_type_colloqui:26,geocode_place_type_contin:26,geocode_place_type_counti:26,geocode_place_type_countri:26,geocode_place_type_drainag:26,geocode_place_type_est:26,geocode_place_type_historical_counti:26,geocode_place_type_historical_st:26,geocode_place_type_historical_town:26,geocode_place_type_island:26,geocode_place_type_land_featur:26,geocode_place_type_light_rail_st:26,geocode_place_type_local_administrative_area:26,geocode_place_type_miscellan:26,geocode_place_type_motorwai:26,geocode_place_type_ocean:26,geocode_place_type_place_of_worship:26,geocode_place_type_point_of_interest:26,geocode_place_type_postal_cod:26,geocode_place_type_railway_st:26,geocode_place_type_restaur:26,geocode_place_type_school:26,geocode_place_type_sea:26,geocode_place_type_st:26,geocode_place_type_street:26,geocode_place_type_suburb:26,geocode_place_type_supernam:26,geocode_place_type_time_zon:26,geocode_place_type_town:26,geocode_place_type_unknown:26,geocode_place_type_zon:26,geocode_reverse_new_for_loc:26,geocode_reverse_resolv:26,geocode_reverse_resolve_async:26,geocode_reverse_resolve_finish:26,geocode_reverse_set_backend:26,geocodebackend:26,geocodebackendinterfac:26,geocodeboundingbox:26,geocodeboundingboxclass:26,geocodeerror:26,geocodeforward:26,geocodeforwardclass:26,geocodeglib:[0,1,19,20,21,22,23,25,26,27],geocodeloc:26,geocodelocationclass:26,geocodelocationcr:26,geocodelocationurischem:26,geocodemockbackend:26,geocodemockbackendclass:26,geocodemockbackendqueri:26,geocodenominatim:26,geocodenominatimclass:26,geocodeplac:[15,26],geocodeplaceclass:26,geocodeplaceosmtyp:26,geocodeplacetyp:26,geocoderevers:26,geocodereverseclass:26,geodet:20,get:[2,4,6,8,10,13,14,15,17,20,21],get_accuraci:[8,26],get_administrative_area:[15,26],get_altitud:[8,26],get_answer_count:[6,26],get_area:[15,26],get_bottom:[4,26],get_bound:[6,26],get_bounding_box:[15,26],get_build:[15,26],get_contin:[15,26],get_counti:[15,26],get_countri:[15,26],get_country_cod:[15,26],get_cr:[8,26],get_descript:[8,26],get_distance_from:[8,26],get_gnom:[13,26],get_icon:[15,26],get_latitud:[8,26],get_left:[4,26],get_loc:[15,26],get_longitud:[8,26],get_nam:[15,26],get_osm_id:[15,26],get_osm_typ:[15,26],get_place_typ:[15,26],get_postal_cod:[15,26],get_query_log:[10,26],get_right:[4,26],get_search_area:[6,26],get_stat:[15,26],get_street:[15,26],get_street_address:[15,26],get_timestamp:[8,26],get_top:[4,26],get_town:[15,26],ginterfac:[2,10,13],gio:[2,6,13,15,17,24],gir1:24,git:24,give:8,given:[2,6,8,10,17],glib:[2,6,8,10,12,13,17,20,21,24],gnome:[6,13,17,24],gobject:[2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,20,22,24],gquark:[20,21],greater:6,happen:[2,17],has:[8,15],hash:2,hashtabl:[2,6],have:[8,10,14,15,20],helper:24,hierarchi:24,high:20,highwai:20,histor:20,historical_counti:[20,26],historical_st:[20,26],historical_town:[20,26],homepag:24,hospit:20,hous:20,how:20,http:[13,24],icon:15,identif:[8,20],identifi:13,ignor:[2,6,17],implement:[2,10,13,14],includ:12,independ:20,info:15,inform:[2,6,17],inherit:[4,6,8,10,13,15,17],initi:[8,10],input:12,instanc:[2,4,6,8,15,17],instead:10,institut:20,intend:14,interest:20,interfac:[3,24],interleav:10,intern:[14,20],internal_serv:[20,26],interpret:8,invalid:20,invalid_argu:[20,26],is_forward:12,island:[20,26],iso:[15,20],item:6,its:[2,8,10,14,15,20],json:24,just:14,kei:[2,6],known:20,kwarg:[4,6,8,10,13,15,17],lake:20,land:20,land_featur:[20,26],lat:2,latitud:[2,8],learn:20,left:4,level:19,librari:24,light:20,light_rail_st:[20,26],like:[6,8],limit:6,linear:20,list:[2,6,12],local:15,local_administrative_area:[20,26],locat:[1,4,6,15,17,20,22,26],location_accuracy_c:[19,26],location_accuracy_contin:[19,26],location_accuracy_countri:[19,26],location_accuracy_region:[19,26],location_accuracy_street:[19,26],location_accuracy_unknown:[19,26],locationclass:[0,8,26],locationcr:[8,20,26],locationurischem:[8,20,26],locb:8,log:10,lon:2,longer:[8,20],longitud:[2,8],look:8,made:[10,20],mai:[2,10,14],mail:13,mainli:14,maintain:13,maintainer_email_address:13,major:20,make:[13,14],map:[8,10,24],mass:20,match:[10,20],meal:20,mean:[2,10],meter:8,middl:[2,17],miscellan:[20,26],mock:10,mockbackend:[1,2,12,22,26],mockbackendclass:[0,10,26],mockbackendqueri:[10,26,27],more:[2,6,17],most:[2,10],motor:20,motorwai:[20,26],mountain:20,msa:20,multipl:[2,10,20],must:[4,6,8,10,13,15],myappid:13,name:[3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,20],need:8,neighborhood:[15,20],network:[2,14],never:[2,4,5,6,7,8,9,10,13,15,16,17,18],new_for_loc:[17,26],new_for_param:[6,26],new_for_str:[6,26],new_with_descript:[8,26],new_with_loc:[15,26],no_match:[2,6,10,12,20,26],node:[20,26],nominatim:[1,2,6,14,17,22,24,26],nominatimclass:[0,13,26],non:[4,8,10,15],none:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],normal:14,not_support:[2,10,12,17,20,26],note:8,number:6,obj:8,object:[2,3,4,6,8,10,12,13,14,15,17,22],objectclass:[4,5,6,7,8,9,10,11,13,14,15,16,17,18],occur:20,ocean:[2,17,20,26],offer:24,olson:20,one:[6,8,10,17],onli:[4,6,8,15],onlin:13,open:20,openstreetmap:[15,24],oper:[2,3,6,17],option:[2,6,17],order:[2,10],org:[13,24],origin:20,osm:[15,20],osm_id:15,osm_typ:15,other:[8,20],otherwis:[4,8,12,15],out:8,output:12,overrid:14,packag:24,pad:3,param:[2,6,10,12],paramet:[2,4,6,8,10,12,13,15,17],parent:24,parent_class:[5,7,9,11,14,16,18],parent_inst:[4,6,8,13,15,17],park:20,pars:[20,26],partial:20,pass:[2,6,17],per:13,perform:[2,6,12,17],physic:8,place:[1,2,6,10,12,17,20,22,26],place_of_worship:[20,26],place_typ:15,placeclass:[0,15,26],placeosmtyp:[15,20,26],placetyp:[15,20,26],point:20,point_of_interest:[20,26],polici:13,popul:20,possibl:20,postal:[15,20],postal_cod:[15,20,26],potenti:10,prefer:6,primari:20,privat:[2,4,5,6,7,8,9,10,13,15,16,17,18],problem:13,project:24,prop:[4,6,8,13,15],provid:10,pub:20,python:26,quark:[20,21,26],queri:[2,6,10,12,14,17],query_async:14,query_finish:14,rail:20,railwai:20,railway_st:[20,26],rais:[2,6,8,17],rather:12,readabl:[4,6,8,13,15],receiv:10,recent:10,refer:[8,13,20],region:19,regul:6,relat:[20,26],relev:2,religion:20,repres:[2,8,10,12,15,19],request:[2,6,8,10,13,14,17,20],res:[6,13,17],reset:10,resolut:17,resolv:[8,10,12,17,26],resolve_async:[17,26],resolve_finish:[17,26],respond:10,respons:20,restaur:[20,26],restrict:6,result:[2,6,10,12,17],revers:[1,2,10,12,22,24,26],reverse_resolv:[2,3,10,26],reverse_resolve_async:[2,3,26],reverse_resolve_finish:[2,3,26],reverseclass:[0,17,26],rfc:[8,20],right:4,river:20,safe:[13,20],same:[2,6,8,10,15,17],satisfi:[2,6,17],scheme:[8,20],school:[20,26],sea:[20,26],search:[6,10,12,26],search_area:6,search_async:[6,26],search_finish:[6,26],second:8,secondari:20,see:[2,6,8,10,13,17],self:[2,4,8,15],sell:20,send:13,sequenc:10,serv:20,server:[6,13,17,20],servic:[6,13,17,20,24],set:[6,8,10,12,13,15],set_administrative_area:[15,26],set_answer_count:[6,26],set_area:[15,26],set_backend:[6,17,26],set_bound:[6,26],set_bounding_box:[15,26],set_build:[15,26],set_contin:[15,26],set_counti:[15,26],set_countri:[15,26],set_country_cod:[15,26],set_descript:[8,26],set_from_uri:[8,26],set_loc:[15,26],set_nam:[15,26],set_postal_cod:[15,26],set_search_area:[6,26],set_stat:[15,26],set_street:[15,26],set_street_address:[15,26],set_town:[15,26],settlement:20,should:[2,4,5,6,7,8,9,10,13,14,15,16,17,18],similarli:8,simplest:8,sinc:[8,10],singl:2,sit:20,site:6,situat:2,smaller:20,softwar:13,some:2,soup:24,space:20,specif:[2,6,15,20],specifi:[6,8,17],standard:20,state:[10,15,20,26],station:20,stop:20,store:10,str:[2,6,8,10,13,15],street:[15,19,20,26],street_address:15,string:[2,6,8,13],struct:[4,6,8,10,13,15,17],structur:[2,4,5,6,7,8,9,10,13,15,16,17,18,24],subclass:[4,6,8,10,13,15,17],subdivis:20,suburb:[20,26],success:8,supernam:[20,26],supervis:20,support:[8,20],symbol:24,synchron:[2,6,17],system:[8,20],tabl:2,taken:8,teacher:20,telepathi:[2,6],territori:20,tertiari:20,test:14,than:[6,12,20],thei:2,them:13,thi:[2,4,6,8,10,12,13,15,17,20],thing:[2,6,17],those:10,thread:13,through:10,time:[8,10],time_zon:[20,26],timestamp:8,to_uri:[8,26],togeth:20,top:4,tourist:20,town:[15,20,26],traffic:20,tram:20,treat:6,two:[4,8,15],type:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21],typeinterfac:3,typic:[2,17],uncategor:20,under:20,unknown:[15,19,20,26],unrecover:20,unref:[2,4,6,8,13,15,17],upper:15,uri:[8,13,14,20],url:13,usag:[2,13],use:[6,13,17],used:[2,6,10,13,17],user:13,user_ag:13,user_data:[2,6,13,17],using:[2,6,10,13,17],valid:[8,13],valu:[2,4,6,8,10,13,15,20],variant:10,version:[2,3,4,6,8,10,12,13,14,15,17],villag:20,virtual:14,wai:[20,26],waiter:20,want:14,water:20,web:[6,17,20],were:10,wgs84:[8,20,26],when:[2,4,6,8,13,15,17],whether:6,which:[2,3,6,8,10,12,13,14],within:[6,20],work:20,world:20,worship:20,writabl:[4,6,8,13,15],xep:[2,6],you:[2,6,17],zero:[6,8],zone:[20,26]},titles:["Class Structures","Classes","GeocodeGlib.Backend","GeocodeGlib.BackendInterface","GeocodeGlib.BoundingBox","GeocodeGlib.BoundingBoxClass","GeocodeGlib.Forward","GeocodeGlib.ForwardClass","GeocodeGlib.Location","GeocodeGlib.LocationClass","GeocodeGlib.MockBackend","GeocodeGlib.MockBackendClass","GeocodeGlib.MockBackendQuery","GeocodeGlib.Nominatim","GeocodeGlib.NominatimClass","GeocodeGlib.Place","GeocodeGlib.PlaceClass","GeocodeGlib.Reverse","GeocodeGlib.ReverseClass","Constants","Enums","Functions","Hierarchy","Interface Structures","GeocodeGlib 1.0 (3.26.0)","Interfaces","Symbol Mapping","Structures"],titleterms:{"class":[0,1,2,4,6,8,10,13,15,17],"enum":20,"function":21,api:24,backend:2,backendinterfac:3,boundingbox:4,boundingboxclass:5,constant:19,detail:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],field:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],forward:6,forwardclass:7,geocodeglib:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,24],hierarchi:22,interfac:[23,25],locat:8,locationclass:9,map:26,method:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],mockbackend:10,mockbackendclass:11,mockbackendqueri:12,nominatim:13,nominatimclass:14,place:15,placeclass:16,properti:[2,4,6,8,10,13,15,17],revers:17,reverseclass:18,signal:[2,4,6,8,10,13,15,17],structur:[0,23,27],symbol:26,virtual:[2,4,6,8,10,13,15,17]}})