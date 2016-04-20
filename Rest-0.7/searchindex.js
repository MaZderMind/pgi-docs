Search.setIndex({envversion:46,filenames:["callbacks","class-structs/OAuth2ProxyCallClass","class-structs/OAuth2ProxyClass","class-structs/OAuthProxyCallClass","class-structs/OAuthProxyClass","class-structs/ProxyAuthClass","class-structs/ProxyCallClass","class-structs/ProxyClass","class-structs/XmlParserClass","class-structs/index","classes/OAuth2Proxy","classes/OAuth2ProxyCall","classes/OAuthProxy","classes/OAuthProxyCall","classes/Proxy","classes/ProxyAuth","classes/ProxyCall","classes/XmlParser","classes/index","enums","functions","hierarchy","index","mapping","structs/Param","structs/Params","structs/ParamsIter","structs/XmlNode","structs/index"],objects:{"Rest.MemoryUse":{COPY:[19,1,1,""],STATIC:[19,1,1,""],TAKE:[19,1,1,""]},"Rest.OAuth2Proxy":{"new":[10,3,1,""],build_login_url:[10,2,1,""],build_login_url_full:[10,2,1,""],extract_access_token:[10,3,1,""],get_access_token:[10,2,1,""],new_with_token:[10,3,1,""],set_access_token:[10,2,1,""]},"Rest.OAuth2Proxy.props":{access_token:[10,4,1,""],auth_endpoint:[10,4,1,""],client_id:[10,4,1,""]},"Rest.OAuthProxy":{"new":[12,3,1,""],access_token:[12,2,1,""],access_token_async:[12,2,1,""],auth_step:[12,2,1,""],auth_step_async:[12,2,1,""],get_signature_host:[12,2,1,""],get_token:[12,2,1,""],get_token_secret:[12,2,1,""],is_oauth10a:[12,2,1,""],new_echo_proxy:[12,2,1,""],new_with_token:[12,3,1,""],request_token:[12,2,1,""],request_token_async:[12,2,1,""],set_signature_host:[12,2,1,""],set_token:[12,2,1,""],set_token_secret:[12,2,1,""]},"Rest.OAuthProxy.props":{consumer_key:[12,4,1,""],consumer_secret:[12,4,1,""],signature_host:[12,4,1,""],signature_method:[12,4,1,""],token:[12,4,1,""],token_secret:[12,4,1,""]},"Rest.OAuthProxyCall":{parse_token_reponse:[13,2,1,""],parse_token_response:[13,2,1,""]},"Rest.OAuthSignatureMethod":{HMAC_SHA1:[19,1,1,""],PLAINTEXT:[19,1,1,""]},"Rest.Param":{get_content:[24,2,1,""],get_content_length:[24,2,1,""],get_content_type:[24,2,1,""],get_file_name:[24,2,1,""],get_name:[24,2,1,""],is_string:[24,2,1,""],new_full:[24,3,1,""],new_string:[24,3,1,""],new_with_owner:[24,3,1,""],ref:[24,2,1,""],unref:[24,2,1,""]},"Rest.Params":{add:[25,2,1,""],are_strings:[25,2,1,""],as_string_hash_table:[25,2,1,""],free:[25,2,1,""],get:[25,2,1,""],remove:[25,2,1,""]},"Rest.ParamsIter":{init:[26,2,1,""],next:[26,2,1,""]},"Rest.Proxy":{"new":[14,3,1,""],add_soup_feature:[14,2,1,""],do_authenticate:[14,2,1,""],do_new_call:[14,2,1,""],get_user_agent:[14,2,1,""],new_call:[14,2,1,""],new_with_authentication:[14,3,1,""],set_user_agent:[14,2,1,""]},"Rest.Proxy.props":{binding_required:[14,4,1,""],disable_cookies:[14,4,1,""],password:[14,4,1,""],ssl_ca_file:[14,4,1,""],ssl_strict:[14,4,1,""],url_format:[14,4,1,""],user_agent:[14,4,1,""],username:[14,4,1,""]},"Rest.Proxy.signals":{authenticate:[14,5,1,""]},"Rest.ProxyAuth":{pause:[15,2,1,""],unpause:[15,2,1,""]},"Rest.ProxyCall":{add_header:[16,2,1,""],add_param:[16,2,1,""],add_param_full:[16,2,1,""],do_prepare:[16,2,1,""],do_serialize_params:[16,2,1,""],get_function:[16,2,1,""],get_method:[16,2,1,""],get_params:[16,2,1,""],get_payload:[16,2,1,""],get_payload_length:[16,2,1,""],get_response_headers:[16,2,1,""],get_status_code:[16,2,1,""],get_status_message:[16,2,1,""],invoke_async:[16,2,1,""],invoke_finish:[16,2,1,""],lookup_header:[16,2,1,""],lookup_param:[16,2,1,""],lookup_response_header:[16,2,1,""],remove_header:[16,2,1,""],remove_param:[16,2,1,""],run:[16,2,1,""],serialize_params:[16,2,1,""],set_function:[16,2,1,""],set_method:[16,2,1,""],sync:[16,2,1,""],upload:[16,2,1,""]},"Rest.ProxyCall.props":{proxy:[16,4,1,""]},"Rest.ProxyCallError":{FAILED:[19,1,1,""],quark:[19,3,1,""]},"Rest.ProxyError":{CANCELLED:[19,1,1,""],CONNECTION:[19,1,1,""],FAILED:[19,1,1,""],HTTP_BAD_GATEWAY:[19,1,1,""],HTTP_BAD_REQUEST:[19,1,1,""],HTTP_CONFLICT:[19,1,1,""],HTTP_EXPECTATION_FAILED:[19,1,1,""],HTTP_FORBIDDEN:[19,1,1,""],HTTP_FOUND:[19,1,1,""],HTTP_FOUROHTWO:[19,1,1,""],HTTP_GATEWAY_TIMEOUT:[19,1,1,""],HTTP_GONE:[19,1,1,""],HTTP_HTTP_VERSION_NOT_SUPPORTED:[19,1,1,""],HTTP_INTERNAL_SERVER_ERROR:[19,1,1,""],HTTP_LENGTH_REQUIRED:[19,1,1,""],HTTP_METHOD_NOT_ALLOWED:[19,1,1,""],HTTP_MOVED_PERMANENTLY:[19,1,1,""],HTTP_MULTIPLE_CHOICES:[19,1,1,""],HTTP_NOT_ACCEPTABLE:[19,1,1,""],HTTP_NOT_FOUND:[19,1,1,""],HTTP_NOT_IMPLEMENTED:[19,1,1,""],HTTP_NOT_MODIFIED:[19,1,1,""],HTTP_PRECONDITION_FAILED:[19,1,1,""],HTTP_PROXY_AUTHENTICATION_REQUIRED:[19,1,1,""],HTTP_REQUESTED_RANGE_NOT_SATISFIABLE:[19,1,1,""],HTTP_REQUEST_ENTITY_TOO_LARGE:[19,1,1,""],HTTP_REQUEST_TIMEOUT:[19,1,1,""],HTTP_REQUEST_URI_TOO_LONG:[19,1,1,""],HTTP_SEE_OTHER:[19,1,1,""],HTTP_SERVICE_UNAVAILABLE:[19,1,1,""],HTTP_TEMPORARY_REDIRECT:[19,1,1,""],HTTP_THREEOHSIX:[19,1,1,""],HTTP_UNAUTHORIZED:[19,1,1,""],HTTP_UNSUPPORTED_MEDIA_TYPE:[19,1,1,""],HTTP_USE_PROXY:[19,1,1,""],IO:[19,1,1,""],RESOLUTION:[19,1,1,""],SSL:[19,1,1,""],quark:[19,3,1,""]},"Rest.XmlNode":{add_attr:[27,2,1,""],add_child:[27,2,1,""],find:[27,2,1,""],free:[27,2,1,""],get_attr:[27,2,1,""],print_:[27,2,1,""],set_content:[27,2,1,""]},"Rest.XmlParser":{"new":[17,3,1,""],parse_from_data:[17,2,1,""]},Rest:{MemoryUse:[19,0,1,""],OAuth2Proxy:[10,0,1,""],OAuth2ProxyCall:[11,0,1,""],OAuth2ProxyCallClass:[1,0,1,""],OAuth2ProxyClass:[2,0,1,""],OAuthProxy:[12,0,1,""],OAuthProxyAuthCallback:[0,5,1,""],OAuthProxyCall:[13,0,1,""],OAuthProxyCallClass:[3,0,1,""],OAuthProxyClass:[4,0,1,""],OAuthSignatureMethod:[19,0,1,""],Param:[24,0,1,""],Params:[25,0,1,""],ParamsIter:[26,0,1,""],Proxy:[14,0,1,""],ProxyAuth:[15,0,1,""],ProxyAuthClass:[5,0,1,""],ProxyCall:[16,0,1,""],ProxyCallAsyncCallback:[0,5,1,""],ProxyCallClass:[6,0,1,""],ProxyCallContinuousCallback:[0,5,1,""],ProxyCallError:[19,0,1,""],ProxyCallUploadCallback:[0,5,1,""],ProxyClass:[7,0,1,""],ProxyError:[19,0,1,""],XmlNode:[27,0,1,""],XmlParser:[17,0,1,""],XmlParserClass:[8,0,1,""],hmac_sha1:[20,5,1,""],proxy_call_error_quark:[20,5,1,""],proxy_error_quark:[20,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","data","Python data"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:staticmethod","4":"py:data","5":"py:function"},terms:{"abstract":[10,11,12,13,14,15,16,17],"byte":[16,24],"char":26,"class":[1,2,3,4,5,6,7,8],"const":26,"default":[10,12,14,16],"function":[10,12,15,16],"int":[0,16,17,19,20,24,27],"long":19,"new":[10,12,14,16,17,23,24,25,27],"null":14,"return":[10,12,14,16,17,19,20,24,25,26,27],"short":[10,12,14,16],"static":[10,12,14,17,19,23,24],"true":[10,12,14,16,24,25,26],"try":14,"while":26,about:10,accept:19,access:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,27],access_token:[10,12,23],access_token_async:[0,12,23],acquir:10,actual:16,add:[10,14,16,23,25,27],add_attr:[23,27],add_child:[23,27],add_head:[16,23],add_param:[16,23],add_param_ful:[16,23],add_soup_featur:[14,23],advanc:26,after:[10,12,16,26],again:14,agent:[10,14],all:25,alloc:10,allow:[19,24],alreadi:[15,16],also:16,alwai:19,ani:[10,24],anyth:15,api:[10,12,14],append:16,applic:10,are_str:[23,25],as_string_hash_t:[23,25],assum:19,async:16,asynchron:[14,16],asyncreadycallback:16,asyncresult:16,attempt:14,attr:27,attr_nam:27,attribut:27,auth:[10,14],auth_endpoint:10,auth_step:[12,23],auth_step_async:[12,23],authent:[0,7,10,14,19],authoris:[10,12],automat:10,avail:[10,11,12,13,14,15,16,24],bad:19,band:12,bar:10,base:[10,11,12,13,14,15,16,17,19],basic:24,becom:26,been:[10,12,26],befor:[10,12,14,25],behaviour:[6,7],bind:[12,14],bind_valist:7,binding_requir:[10,12,14],block:19,bodi:16,bool:[10,12,14,16,24,25,26],bound:[10,12,14],brows:22,browser:10,buf:0,buffer:24,bug:22,bugzilla:22,build:10,build_login_url:[10,23],build_login_url_ful:[10,23],call:[0,10,12,14,16,19,24,25,26],callback_uri:12,caller:[0,16],can:[10,14,16,19,24],cancel:[16,19,23],caus:14,certif:14,cgi:22,chang:16,check:25,child:27,children:27,choic:19,chunk:16,client:[10,14],client_id:10,code:16,com:[10,12,14,16],commun:[14,22],complet:[12,16],conflict:19,connect:[14,19,23],consid:14,construct:7,construct_onli:[10,12,14,16],constructor:24,consum:12,consumer_kei:12,consumer_secret:12,contain:[10,12,14,25],content:[16,17,24,25,27],content_len:16,content_typ:[16,24],continu:14,control:14,conveni:10,convienc:24,cooki:14,cookie_jar:14,copi:[19,23],count:[16,24],creat:[10,12,14,17,24,25,27],credenti:14,current:[10,12,16],data:[0,12,16,17,24],decreas:24,depend:[12,22],describ:24,descript:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,22,27],destroi:[14,24,25],destroynotifi:24,determin:[12,24],dialog:12,directli:19,disabl:14,disable_cooki:14,displai:10,dispos:16,do_authent:14,do_new_cal:14,do_prepar:16,do_serialize_param:16,document:[10,17],doe:[14,15,16],doesn:[25,27],domain:19,don:25,done:10,dure:16,echo:12,either:12,element:27,embed:10,emiss:14,emit:14,encod:10,end:26,endpoint:[10,12,14],enter:12,entiti:19,equal:16,error:[0,12,14,16,19,24],everi:16,everyth:14,exampl:[10,12,14,16,24],exist:[16,19,25,27],expand:[10,12,14],expect:[16,19],extend:10,extens:14,extra:10,extra_param:10,extract:10,extract_access_token:[10,23],facebook:10,fail:[0,14,19,23],failur:[12,19],fals:[12,14,16,24,25,26],featur:14,file:[14,24],filenam:24,find:[23,27],finish:16,first:27,flag:[10,12,14,16],flow:10,follow:10,foo:[10,12,14],forbidden:19,format:[10,12,14],found:19,fragment:10,free:[19,23,24,25,27],freed:[10,12,16,24,27],from:[0,10,14,16,19,24],full:14,g_mapped_file_get_cont:24,g_mapped_file_get_length:24,g_mapped_file_new:24,g_mapped_file_unref:24,g_object_new:14,gatewai:19,gdestroynotifi:24,gener:[10,19],genum:19,get:[10,12,14,16,23,24,25,27],get_access_token:[10,23],get_attr:[23,27],get_cont:[23,24],get_content_length:[23,24],get_content_typ:[23,24],get_file_nam:[23,24],get_funct:[16,23],get_method:[16,23],get_nam:[23,24],get_param:[16,23],get_payload:[16,23],get_payload_length:[16,23],get_response_head:[16,23],get_signature_host:[12,23],get_status_cod:[16,23],get_status_messag:[16,23],get_token:[12,23],get_token_secret:[12,23],get_user_ag:[14,23],gio:[16,22],given:[24,27],glib:[0,12,16,19,24,25,27],gmappedfil:24,gnome:22,gobject:[0,5,6,7,8,10,11,12,13,14,15,16,17,19,21,22],gone:19,hash:[16,25],hashtabl:[16,25,27],have:[10,12,14,16,24,25],header:16,helper:22,hmac:19,hmac_sha1:[12,19,20,23],host:12,hostnam:12,how:24,http:[10,12,14,16,19,22],http_bad_gatewai:[19,23],http_bad_request:[19,23],http_conflict:[19,23],http_expectation_fail:[19,23],http_forbidden:[19,23],http_found:[19,23],http_fourohtwo:[19,23],http_gateway_timeout:[19,23],http_gone:[19,23],http_http_version_not_support:[19,23],http_internal_server_error:[19,23],http_length_requir:[19,23],http_method_not_allow:[19,23],http_moved_perman:[19,23],http_multiple_choic:[19,23],http_not_accept:[19,23],http_not_found:[19,23],http_not_impl:[19,23],http_not_modifi:[19,23],http_precondition_fail:[19,23],http_proxy_authentication_requir:[19,23],http_request_entity_too_larg:[19,23],http_request_timeout:[19,23],http_request_uri_too_long:[19,23],http_requested_range_not_satisfi:[19,23],http_see_oth:[19,23],http_service_unavail:[19,23],http_temporary_redirect:[19,23],http_threeohsix:[19,23],http_unauthor:[19,23],http_unsupported_media_typ:[19,23],http_use_proxi:[19,23],human:16,imag:24,implement:[6,7,19],increas:24,inform:10,inherit:[10,11,12,13,14,15,16,17],init:[23,26],initi:26,input:19,instanc:[15,16],intercept:10,intern:[16,19],invalid:[17,26],invok:[10,12,14,16],invoke_async:[16,23],invoke_finish:[16,23],is_oauth10a:[12,23],is_str:[23,24],isn:19,iter:26,jpeg:24,kei:[10,12,20],kwarg:[10,11,12,13,14,15,16,17],larg:19,later:14,len:[0,17],length:[16,17,19,24],level:27,librari:22,librest:[14,22],libsoup:[14,22],life:27,lifecycl:[12,16],lifetim:19,like:24,locat:26,log:10,login:10,lookup:16,lookup_head:[16,23],lookup_param:[16,23],lookup_response_head:[16,23],loop:16,mai:16,mainloop:16,make:[10,14,16,19],manner:12,map:22,media:[19,24],member:[10,11,12,13,14,15,16],memori:[19,24],memoryus:[19,23,24],messag:[16,20],mime:24,modifi:[19,24,26],more:[10,19],move:19,multipl:[14,19],must:[10,12,14,16],name:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,24,25,26,27],need:[10,12,14],new_cal:[7,14,23],new_echo_proxi:[12,23],new_ful:[23,24],new_str:[23,24],new_with_authent:[14,23],new_with_own:[23,24],new_with_token:[10,12,23],newli:[10,27],next:[23,26,27],node:27,none:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,24,25,26,27],now:26,nul:17,oauth2:10,oauth2_proxy_build_login_url:23,oauth2_proxy_build_login_url_ful:23,oauth2_proxy_extract_access_token:23,oauth2_proxy_get_access_token:23,oauth2_proxy_new:23,oauth2_proxy_new_with_token:23,oauth2_proxy_set_access_token:23,oauth:12,oauth_proxy_access_token:23,oauth_proxy_access_token_async:23,oauth_proxy_auth_step:23,oauth_proxy_auth_step_async:23,oauth_proxy_call_parse_token_repons:23,oauth_proxy_call_parse_token_respons:23,oauth_proxy_get_signature_host:23,oauth_proxy_get_token:23,oauth_proxy_get_token_secret:23,oauth_proxy_is_oauth10a:23,oauth_proxy_new:23,oauth_proxy_new_echo_proxi:23,oauth_proxy_new_with_token:23,oauth_proxy_request_token:23,oauth_proxy_request_token_async:23,oauth_proxy_set_signature_host:23,oauth_proxy_set_token:23,oauth_proxy_set_token_secret:23,oauth_verifi:12,oauthproxi:0,oauthproxyauthcallback:[0,12],oauthsignaturemethod:[12,19,23],object:[0,6,7,10,11,12,13,14,15,16,17,21,24,25,27],objectclass:[5,6,7,8,10,11,12,13,14,15,16,17],old:16,onc:12,onli:[12,19,24],oob:12,oper:[10,12,14],option:16,org:22,origin:24,other:[12,19],otherwis:[0,12,16,24,25,26],our:16,out:12,output:[19,27],over:[14,26],overrid:7,own:[10,12,16,24,25,27],owner:24,owner_dnotifi:24,ownership:19,param:[16,19,23],paramet:[0,10,12,14,16,17,19,20,24,25,26,27],paramsit:23,paramt:16,parent:[10,11,12,13,14,15,16,17,22,27],parent_class:[1,2,3,4,5,6,7,8],pars:17,parse_from_data:[17,23],parse_token_repons:[13,23],parse_token_respons:[13,23],pass:[0,12,16,24],password:14,paus:[14,15,23],payload:16,perform:12,perman:19,permiss:10,phase:12,plain:[19,24,25],plaintext:19,point:26,pointer:[16,24],popup:12,possibl:14,post:16,precondit:19,prepar:6,present:16,print_:[23,27],product:22,project:22,prop:[10,12,14,16],provid:[14,22],proxi:[0,7,10,12],proxy_call_error_quark:[20,23],proxy_error_quark:[20,23],proxyauth:14,proxycal:[0,6,7,11,12,13,14],proxycallasynccallback:[0,23],proxycallclass:[1,3],proxycallcontinuouscallback:[0,23],proxycallerror:[19,23],proxycalluploadcallback:[0,16,23],proxyclass:[2,4],proxyerror:[19,23],publicli:[10,11,12,13,14,15,16],python:23,quark:[19,23],queri:16,queu:12,rais:[12,16],rang:19,reach:[24,26],read:24,readabl:[10,12,14,16],readi:14,receiv:14,recommend:19,recurs:27,redirect:[10,19],redirect_uri:10,ref:[14,23,24],ref_count:27,refer:[12,16,24],remov:[16,23,25],remove_head:[16,23],remove_param:[16,23],replac:16,repres:27,request:[10,12,16,19],request_token:[12,23],request_token_async:[0,12,23],requir:[12,14,19],resolut:[19,23],rest:0,rest_memory_copi:23,rest_memory_stat:23,rest_memory_tak:23,rest_param_get_cont:23,rest_param_get_content_length:23,rest_param_get_content_typ:23,rest_param_get_file_nam:23,rest_param_get_nam:23,rest_param_is_str:23,rest_param_new_ful:23,rest_param_new_str:23,rest_param_new_with_own:[23,24],rest_param_ref:23,rest_param_unref:23,rest_params_add:23,rest_params_are_str:23,rest_params_as_string_hash_t:23,rest_params_fre:23,rest_params_get:23,rest_params_iter_init:[23,26],rest_params_iter_next:[23,26],rest_params_new:23,rest_params_remov:23,rest_proxy_add_soup_featur:[14,23],rest_proxy_auth_paus:23,rest_proxy_auth_unpaus:23,rest_proxy_bind:[10,12,14,23],rest_proxy_bind_valist:23,rest_proxy_call_add_head:23,rest_proxy_call_add_headers_from_valist:23,rest_proxy_call_add_param:23,rest_proxy_call_add_param_ful:23,rest_proxy_call_add_params_from_valist:23,rest_proxy_call_async:[16,23],rest_proxy_call_cancel:23,rest_proxy_call_continu:23,rest_proxy_call_error_quark:23,rest_proxy_call_fail:23,rest_proxy_call_get_funct:23,rest_proxy_call_get_method:23,rest_proxy_call_get_param:23,rest_proxy_call_get_payload:23,rest_proxy_call_get_payload_length:23,rest_proxy_call_get_response_head:23,rest_proxy_call_get_status_cod:23,rest_proxy_call_get_status_messag:23,rest_proxy_call_invoke_async:23,rest_proxy_call_invoke_finish:23,rest_proxy_call_lookup_head:23,rest_proxy_call_lookup_param:23,rest_proxy_call_lookup_response_head:23,rest_proxy_call_remove_head:23,rest_proxy_call_remove_param:23,rest_proxy_call_run:23,rest_proxy_call_serialize_param:23,rest_proxy_call_set_funct:23,rest_proxy_call_set_method:23,rest_proxy_call_sync:23,rest_proxy_call_upload:23,rest_proxy_error_cancel:23,rest_proxy_error_connect:23,rest_proxy_error_fail:23,rest_proxy_error_http_bad_gatewai:23,rest_proxy_error_http_bad_request:23,rest_proxy_error_http_conflict:23,rest_proxy_error_http_expectation_fail:23,rest_proxy_error_http_forbidden:23,rest_proxy_error_http_found:23,rest_proxy_error_http_fourohtwo:23,rest_proxy_error_http_gateway_timeout:23,rest_proxy_error_http_gon:23,rest_proxy_error_http_http_version_not_support:23,rest_proxy_error_http_internal_server_error:23,rest_proxy_error_http_length_requir:23,rest_proxy_error_http_method_not_allow:23,rest_proxy_error_http_moved_perman:23,rest_proxy_error_http_multiple_choic:23,rest_proxy_error_http_not_accept:23,rest_proxy_error_http_not_found:23,rest_proxy_error_http_not_impl:23,rest_proxy_error_http_not_modifi:23,rest_proxy_error_http_precondition_fail:23,rest_proxy_error_http_proxy_authentication_requir:23,rest_proxy_error_http_request_entity_too_larg:23,rest_proxy_error_http_request_timeout:23,rest_proxy_error_http_request_uri_too_long:23,rest_proxy_error_http_requested_range_not_satisfi:23,rest_proxy_error_http_see_oth:23,rest_proxy_error_http_service_unavail:23,rest_proxy_error_http_temporary_redirect:23,rest_proxy_error_http_threeohsix:23,rest_proxy_error_http_unauthor:23,rest_proxy_error_http_unsupported_media_typ:23,rest_proxy_error_http_use_proxi:23,rest_proxy_error_io:23,rest_proxy_error_quark:23,rest_proxy_error_resolut:23,rest_proxy_error_ssl:23,rest_proxy_get_user_ag:23,rest_proxy_new:23,rest_proxy_new_cal:23,rest_proxy_new_with_authent:23,rest_proxy_set_user_ag:23,rest_proxy_simple_run:23,rest_proxy_simple_run_valist:23,rest_type_proxi:14,rest_xml_node_add_attr:23,rest_xml_node_add_child:23,rest_xml_node_find:23,rest_xml_node_fre:23,rest_xml_node_get_attr:23,rest_xml_node_print:23,rest_xml_node_ref:23,rest_xml_node_set_cont:23,rest_xml_node_unref:23,rest_xml_parser_new:23,rest_xml_parser_parse_from_data:23,restmemoryus:23,restparam:[23,24,26],restparamsit:[23,26],restproxi:[14,23],restproxyauth:23,restproxyauthclass:23,restproxycal:23,restproxycallasynccallback:23,restproxycallclass:23,restproxycallcontinuouscallback:23,restproxycallerror:23,restproxycalluploadcallback:23,restproxyclass:23,restproxyerror:23,restxmlcreat:27,restxmlnod:23,restxmlpars:23,restxmlparserclass:23,result:[10,16,24,26],retri:14,retriev:[10,26],run:[16,23],run_last:14,same:27,satisfi:19,scope:10,search:27,second:14,secret:[10,12],secur:19,see:[10,16,19],self:[12,15,16,24,25,26,27],serial:16,serialize_param:[6,16,23],server:[12,19],servic:[10,12,14,19,22],service_url:12,session:14,sessionfeatur:14,set:[10,12,14,16,24,26,27],set_access_token:[10,23],set_cont:[23,27],set_funct:[12,16,23],set_method:[16,23],set_signature_host:[12,23],set_token:[12,23],set_token_secret:[12,23],set_user_ag:[14,23],sha1:19,shot:14,should:[10,12,14,16,24,27],sibl:27,sign:19,signatur:[12,19],signature_host:12,signature_method:12,simpl:[24,25],simple_run_valist:7,sinc:16,some:12,someth:[24,26],soup:[14,22],soup_cookie_jar_new:14,soup_session_featur:14,soupsessionfeatur:14,spec:10,specialis:[6,7],specif:14,specifi:[10,12,14],ssl:[14,19,23],ssl_ca_fil:14,ssl_strict:14,start:24,state:[14,16],statu:16,step:[10,12],still:[10,12],stop:14,store:26,str:[0,10,12,14,16,17,20,24,25,26,27],strict:14,string:[10,12,14,16,17,24,25,27],struct:[10,11,12,13,14,15,16,17],structur:[6,7],style:16,subclass:[6,7,10,11,12,13,14,15,16,17],success:[12,16],successfulli:12,support:[12,14,19],sure:14,symbol:22,sync:[16,23],tabl:[16,25],tag:27,take:[19,23],taken:10,temporari:19,termin:17,test:[16,19],text:[19,24,25],textual:27,thei:[10,12],thi:[10,12,14,15,16,24,26,27],tie:[12,16],time:[16,27],timeout:19,token:[10,12],token_secret:12,too:[12,19],top:27,total:0,tracker:22,treat:24,type:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,20,24,25,26,27],typic:7,unauthor:19,unauthoris:[10,12],unavail:[19,23],unknown:[10,12],unpaus:[14,15,23],unref:[16,23,24],unsupport:19,until:14,updat:12,upload:[0,16,23,24],uri:[10,12,19],url:[10,12,14,16],url_format:[10,12,14],user:[0,10,12,14,16],user_ag:14,user_data:[12,16],userdata:[0,16],usernam:14,utf:24,util:10,valid:[10,12,25,26,27],valu:[10,12,14,16,24,25,27],verifi:12,version:[14,16,19],wai:24,wait:10,weak:0,weak_object:[0,12,16],weakli:[12,16],web:[10,14],well:19,when:[12,14,16,19,24],whether:[10,12,14],which:[10,14,25],widget:10,wish:12,won:[10,12],would:16,writabl:[10,12,14,16],written:16,www:16,xml:[17,27],xmlnode:[17,23],yet:[10,12],you:[10,12,14,16,24],your:12},titles:["Callbacks","Rest.OAuth2ProxyCallClass","Rest.OAuth2ProxyClass","Rest.OAuthProxyCallClass","Rest.OAuthProxyClass","Rest.ProxyAuthClass","Rest.ProxyCallClass","Rest.ProxyClass","Rest.XmlParserClass","Class Structures","Rest.OAuth2Proxy","Rest.OAuth2ProxyCall","Rest.OAuthProxy","Rest.OAuthProxyCall","Rest.Proxy","Rest.ProxyAuth","Rest.ProxyCall","Rest.XmlParser","Classes","Enums","Functions","Hierarchy","Rest 0.7","Symbol Mapping","Rest.Param","Rest.Params","Rest.ParamsIter","Rest.XmlNode","Structures"],titleterms:{"class":[9,10,11,12,13,14,15,16,17,18],"enum":19,"function":20,api:22,callback:0,detail:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19,20,24,25,26,27],field:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,24,25,26,27],hierarchi:21,map:23,method:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,24,25,26,27],oauth2proxi:10,oauth2proxycal:11,oauth2proxycallclass:1,oauth2proxyclass:2,oauthproxi:12,oauthproxycal:13,oauthproxycallclass:3,oauthproxyclass:4,param:[24,25],paramsit:26,properti:[10,11,12,13,14,15,16,17],proxi:14,proxyauth:15,proxyauthclass:5,proxycal:16,proxycallclass:6,proxyclass:7,rest:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,22,24,25,26,27],signal:[10,11,12,13,14,15,16,17],structur:[9,28],symbol:23,virtual:[10,11,12,13,14,15,16,17],xmlnode:27,xmlparser:17,xmlparserclass:8}})