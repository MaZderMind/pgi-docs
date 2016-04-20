Search.setIndex({envversion:46,filenames:["class-structs/ConferenceClass","class-structs/ElementAddedNotifierClass","class-structs/ParticipantClass","class-structs/PluginClass","class-structs/SessionClass","class-structs/StreamClass","class-structs/StreamTransmitterClass","class-structs/TransmitterClass","class-structs/index","classes/Conference","classes/ElementAddedNotifier","classes/Participant","classes/Plugin","classes/Session","classes/Stream","classes/StreamTransmitter","classes/Transmitter","classes/index","constants","enums","flags","functions","hierarchy","index","mapping","structs/Candidate","structs/Codec","structs/CodecParameter","structs/FeedbackParameter","structs/RtpHeaderExtension","structs/index"],objects:{"Farstream.Candidate":{"new":[25,3,1,""],copy:[25,2,1,""],new_full:[25,3,1,""]},"Farstream.CandidateType":{HOST:[19,4,1,""],MULTICAST:[19,4,1,""],PRFLX:[19,4,1,""],RELAY:[19,4,1,""],SRFLX:[19,4,1,""]},"Farstream.Codec":{"new":[26,3,1,""],add_feedback_parameter:[26,2,1,""],add_optional_parameter:[26,2,1,""],are_equal:[26,2,1,""],copy:[26,2,1,""],get_feedback_parameter:[26,2,1,""],get_optional_parameter:[26,2,1,""],remove_feedback_parameter:[26,2,1,""],remove_optional_parameter:[26,2,1,""],to_string:[26,2,1,""]},"Farstream.CodecParameter":{copy:[27,2,1,""],free:[27,2,1,""]},"Farstream.ComponentType":{NONE:[19,4,1,""],RTCP:[19,4,1,""],RTP:[19,4,1,""]},"Farstream.Conference":{do_new_participant:[9,2,1,""],do_new_session:[9,2,1,""],new_participant:[9,2,1,""],new_session:[9,2,1,""]},"Farstream.DTMFEvent":{"0":[19,4,1,""],"1":[19,4,1,""],"2":[19,4,1,""],"3":[19,4,1,""],"4":[19,4,1,""],"5":[19,4,1,""],"6":[19,4,1,""],"7":[19,4,1,""],"8":[19,4,1,""],"9":[19,4,1,""],"_0":[19,4,1,""],"_1":[19,4,1,""],"_2":[19,4,1,""],"_3":[19,4,1,""],"_4":[19,4,1,""],"_5":[19,4,1,""],"_6":[19,4,1,""],"_7":[19,4,1,""],"_8":[19,4,1,""],"_9":[19,4,1,""],A:[19,4,1,""],B:[19,4,1,""],C:[19,4,1,""],D:[19,4,1,""],POUND:[19,4,1,""],STAR:[19,4,1,""]},"Farstream.DTMFMethod":{RTP_RFC4733:[19,4,1,""],SOUND:[19,4,1,""]},"Farstream.ElementAddedNotifier":{"new":[10,3,1,""],add:[10,2,1,""],remove:[10,2,1,""],set_default_properties:[10,2,1,""],set_properties_from_file:[10,2,1,""],set_properties_from_keyfile:[10,2,1,""]},"Farstream.ElementAddedNotifier.signals":{element_added:[10,5,1,""]},"Farstream.Error":{ALREADY_EXISTS:[19,4,1,""],CONNECTION_FAILED:[19,4,1,""],CONSTRUCTION:[19,4,1,""],DISPOSED:[19,4,1,""],INTERNAL:[19,4,1,""],INVALID_ARGUMENTS:[19,4,1,""],NEGOTIATION_FAILED:[19,4,1,""],NETWORK:[19,4,1,""],NOT_IMPLEMENTED:[19,4,1,""],NO_CODECS:[19,4,1,""],NO_CODECS_LEFT:[19,4,1,""],UNKNOWN_CODEC:[19,4,1,""],quark:[19,3,1,""]},"Farstream.FeedbackParameter":{copy:[28,2,1,""],free:[28,2,1,""]},"Farstream.MediaType":{APPLICATION:[19,4,1,""],AUDIO:[19,4,1,""],LAST:[19,4,1,""],VIDEO:[19,4,1,""],to_string:[19,3,1,""]},"Farstream.NetworkProtocol":{TCP:[19,4,1,""],TCP_ACTIVE:[19,4,1,""],TCP_PASSIVE:[19,4,1,""],TCP_SO:[19,4,1,""],UDP:[19,4,1,""]},"Farstream.Plugin":{list_available:[12,3,1,""]},"Farstream.RtpHeaderExtension":{"new":[29,3,1,""],are_equal:[29,2,1,""]},"Farstream.Session":{codecs_need_resend:[13,2,1,""],destroy:[13,2,1,""],do_codecs_need_resend:[13,2,1,""],do_get_stream_transmitter_type:[13,2,1,""],do_list_transmitters:[13,2,1,""],do_new_stream:[13,2,1,""],do_set_allowed_caps:[13,2,1,""],do_set_codec_preferences:[13,2,1,""],do_set_encryption_parameters:[13,2,1,""],do_set_send_codec:[13,2,1,""],do_start_telephony_event:[13,2,1,""],do_stop_telephony_event:[13,2,1,""],emit_error:[13,2,1,""],get_stream_transmitter_type:[13,2,1,""],list_transmitters:[13,2,1,""],new_stream:[13,2,1,""],parse_codecs_changed:[13,2,1,""],parse_send_codec_changed:[13,2,1,""],parse_telephony_event_started:[13,2,1,""],parse_telephony_event_stopped:[13,2,1,""],set_allowed_caps:[13,2,1,""],set_codec_preferences:[13,2,1,""],set_encryption_parameters:[13,2,1,""],set_send_codec:[13,2,1,""],start_telephony_event:[13,2,1,""],stop_telephony_event:[13,2,1,""]},"Farstream.Session.props":{allowed_sink_caps:[13,0,1,""],allowed_src_caps:[13,0,1,""],codec_preferences:[13,0,1,""],codecs:[13,0,1,""],codecs_without_config:[13,0,1,""],conference:[13,0,1,""],current_send_codec:[13,0,1,""],encryption_parameters:[13,0,1,""],id:[13,0,1,""],media_type:[13,0,1,""],sink_pad:[13,0,1,""],tos:[13,0,1,""]},"Farstream.Session.signals":{error:[13,5,1,""]},"Farstream.Stream":{add_id:[14,2,1,""],add_remote_candidates:[14,2,1,""],destroy:[14,2,1,""],do_add_id:[14,2,1,""],do_add_remote_candidates:[14,2,1,""],do_force_remote_candidates:[14,2,1,""],do_set_decryption_parameters:[14,2,1,""],do_set_remote_codecs:[14,2,1,""],do_set_transmitter:[14,2,1,""],emit_error:[14,2,1,""],emit_src_pad_added:[14,2,1,""],force_remote_candidates:[14,2,1,""],iterate_src_pads:[14,2,1,""],parse_component_state_changed:[14,2,1,""],parse_local_candidates_prepared:[14,2,1,""],parse_new_active_candidate_pair:[14,2,1,""],parse_new_local_candidate:[14,2,1,""],parse_recv_codecs_changed:[14,2,1,""],set_decryption_parameters:[14,2,1,""],set_remote_codecs:[14,2,1,""],set_transmitter:[14,2,1,""],set_transmitter_ht:[14,2,1,""]},"Farstream.Stream.props":{current_recv_codecs:[14,0,1,""],decryption_parameters:[14,0,1,""],direction:[14,0,1,""],negotiated_codecs:[14,0,1,""],participant:[14,0,1,""],remote_codecs:[14,0,1,""],session:[14,0,1,""]},"Farstream.Stream.signals":{error:[14,5,1,""],src_pad_added:[14,5,1,""]},"Farstream.StreamDirection":{BOTH:[20,4,1,""],NONE:[20,4,1,""],RECV:[20,4,1,""],SEND:[20,4,1,""]},"Farstream.StreamState":{CONNECTED:[19,4,1,""],CONNECTING:[19,4,1,""],DISCONNECTED:[19,4,1,""],FAILED:[19,4,1,""],GATHERING:[19,4,1,""],READY:[19,4,1,""]},"Farstream.StreamTransmitter":{add_remote_candidates:[15,2,1,""],do_add_remote_candidates:[15,2,1,""],do_force_remote_candidates:[15,2,1,""],do_gather_local_candidates:[15,2,1,""],do_stop:[15,2,1,""],emit_error:[15,2,1,""],force_remote_candidates:[15,2,1,""],gather_local_candidates:[15,2,1,""],stop:[15,2,1,""]},"Farstream.StreamTransmitter.props":{associate_on_source:[15,0,1,""],preferred_local_candidates:[15,0,1,""],sending:[15,0,1,""]},"Farstream.StreamTransmitter.signals":{error:[15,5,1,""],known_source_packet_received:[15,5,1,""],local_candidates_prepared:[15,5,1,""],new_active_candidate_pair:[15,5,1,""],new_local_candidate:[15,5,1,""],state_changed:[15,5,1,""]},"Farstream.Transmitter":{"new":[16,3,1,""],do_get_stream_transmitter_type:[16,2,1,""],do_new_stream_transmitter:[16,2,1,""],emit_error:[16,2,1,""],get_stream_transmitter_type:[16,2,1,""],list_available:[16,3,1,""],new_stream_transmitter:[16,2,1,""]},"Farstream.Transmitter.props":{components:[16,0,1,""],do_timestamp:[16,0,1,""],gst_sink:[16,0,1,""],gst_src:[16,0,1,""],tos:[16,0,1,""]},"Farstream.Transmitter.signals":{error:[16,5,1,""]},Farstream:{CODEC_FORMAT:[18,0,1,""],CODEC_ID_ANY:[18,0,1,""],CODEC_ID_DISABLE:[18,0,1,""],Candidate:[25,1,1,""],CandidateType:[19,1,1,""],Codec:[26,1,1,""],CodecParameter:[27,1,1,""],ComponentType:[19,1,1,""],Conference:[9,1,1,""],ConferenceClass:[0,1,1,""],DTMFEvent:[19,1,1,""],DTMFMethod:[19,1,1,""],ElementAddedNotifier:[10,1,1,""],ElementAddedNotifierClass:[1,1,1,""],Error:[19,1,1,""],FeedbackParameter:[28,1,1,""],MediaType:[19,1,1,""],NetworkProtocol:[19,1,1,""],Participant:[11,1,1,""],ParticipantClass:[2,1,1,""],Plugin:[12,1,1,""],PluginClass:[3,1,1,""],RTP_HEADER_EXTENSION_FORMAT:[18,0,1,""],RtpHeaderExtension:[29,1,1,""],Session:[13,1,1,""],SessionClass:[4,1,1,""],Stream:[14,1,1,""],StreamClass:[5,1,1,""],StreamDirection:[20,1,1,""],StreamState:[19,1,1,""],StreamTransmitter:[15,1,1,""],StreamTransmitterClass:[6,1,1,""],Transmitter:[16,1,1,""],TransmitterClass:[7,1,1,""],candidate_list_copy:[21,5,1,""],codec_list_are_equal:[21,5,1,""],codec_list_copy:[21,5,1,""],codec_list_from_keyfile:[21,5,1,""],error_quark:[21,5,1,""],media_type_to_string:[21,5,1,""],parse_error:[21,5,1,""],rtp_header_extension_list_copy:[21,5,1,""],rtp_header_extension_list_from_keyfile:[21,5,1,""],utils_get_default_codec_preferences:[21,5,1,""],utils_get_default_rtp_header_extension_preferences:[21,5,1,""],utils_set_bitrate:[21,5,1,""],value_set_candidate_list:[21,5,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:data","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function"},terms:{"50m":13,"_new_stream_transmitt":16,"abstract":[9,10,11,12,13,14,15,16],"case":19,"char":25,"class":[0,1,2,3,4,5,6,7],"default":[10,13,14,15,16,21],"enum":[13,14],"final":19,"function":[10,13,14,15,16,19],"import":13,"int":[10,13,14,15,16,19,21,25,26,29],"new":[9,10,13,14,15,16,21,24,25,26,29],"null":26,"return":[9,10,12,13,14,15,16,19,21,25,26,27,28,29],"short":[10,13,14,15,16],"static":[10,12,16,19,21,25,26,29],"true":[10,13,14,15,16,21,26,29],"try":[10,19],abc:21,abl:14,about:25,accept:13,access:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,25,26,27,28,29],ack:28,action:13,activ:[13,14,15,19],actual:13,add:[10,14,15,24,26],add_feedback_paramet:[24,26],add_id:[5,14,24],add_optional_paramet:[24,26],add_remote_candid:[5,6,14,15,24],address:[14,15,19,25],after:[10,14],against:21,all:[1,9,10,11,12,13,14,15,16,19,21,25],alloc:[12,16,25,26,27,28],allocagt:13,allow:[13,14,21],allowed_sink_cap:13,allowed_src_cap:13,alreadi:[14,19],already_exist:[19,24],also:[13,14,25],alwai:13,ani:[13,14,15,16,25,26],announc:14,anoth:[13,14],another_param:21,answer:15,anymor:[13,14],appli:16,applic:[13,14,19,24,26],appropri:16,arbitari:27,are_equ:[24,26,29],argument:[16,19],around:21,arrai:[12,13,14,16],assign:[13,19],associ:15,associate_on_sourc:15,async:16,asynchron:13,attach:2,attempt:19,audio:[13,19,21,24],auto:25,automat:[13,15],avail:[12,13,16,21],band:19,base:[9,10,11,12,13,14,15,16,19,20,21,25,26],base_ip:25,base_port:25,becaus:[13,14],been:[9,10,13,14,15,19],befor:[15,16],behind:14,benefit:21,between:[13,19,21,25,26],bin:[0,9,10,22],binclass:0,bind:[10,13,16,21],bit:21,bitrat:21,bool:[10,13,14,15,16,21,26,29],both:[7,13,20,21,24],box:10,buffer:[15,16,19],call:[10,13,14,15,16,19],callback:[14,15],can:[10,13,14,15,16,18,19,25,26,28,29],candid:[14,15,19,21,24],candidate_list:21,candidate_list_copi:[21,24],candidatetyp:[19,24,25],cannot:13,cap:13,care:10,caus:[13,14],ccm:28,certain:12,chandid:15,chang:[13,14,15],channel:[18,26],check:[10,13,14,15,19,21],childproxi:9,client:25,clock:[18,21,26],clock_rat:26,close:9,codec1:21,codec2:[21,26],codec3:21,codec:[5,10,13,14,18,19,21,24],codec_format:[18,24],codec_id_ani:[13,18,24],codec_id_dis:[13,18,24],codec_list:21,codec_list_are_equ:[21,24],codec_list_copi:[21,24],codec_list_from_keyfil:[21,24],codec_prefer:13,codecparamet:[24,26],codecs_need_resend:[4,13,24],codecs_without_config:13,come:[14,15,19],common:19,compar:[26,29],complet:19,compliant:25,compon:[14,15,16,19,25],component_id:25,componenttyp:[19,24,25],conclud:19,condit:[13,14,15,16],config:[13,14],configur:13,confirm:15,connect:[10,14,15,19,24,25],connection_fail:[19,24],construct:[13,14,19,24],construct_onli:[13,14,15,16],construction_error:16,constructor:13,contain:[13,14,16,19,26,28],content:[13,15,21,25],control:19,convert:13,copi:[13,14,15,21,24,25,26,27,28],correspond:[14,16,19],could:[13,14,15,19],couldn:[13,14],couldnt:15,creat:[9,10,13,14,16,29],current:[13,14,16],current_recv_codec:14,current_send_codec:13,cut:13,data:[13,14,15,19,26],date:2,dbm0:13,decid:26,decis:14,declar:26,decod:[13,26],decrypt:14,decryption_paramet:14,deep:21,defin:[13,19,25,29],denot:19,depend:[13,14,23],describ:[13,21],descript:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,25,26,27,28,29],desir:13,destroi:[13,14,24],detect:19,differ:[14,19,26],direct:[13,14,20,21,29],directli:[10,13],disabl:[13,19],discard:19,disconnect:[10,19,24],discov:[13,15],displai:[14,16],dispos:[19,24],do_add_id:14,do_add_remote_candid:[14,15],do_codecs_need_resend:13,do_force_remote_candid:[14,15],do_gather_local_candid:15,do_get_stream_transmitter_typ:[13,16],do_list_transmitt:13,do_new_particip:9,do_new_sess:9,do_new_stream:13,do_new_stream_transmitt:16,do_set_allowed_cap:13,do_set_codec_prefer:13,do_set_decryption_paramet:14,do_set_encryption_paramet:13,do_set_remote_codec:14,do_set_send_codec:13,do_set_transmitt:14,do_start_telephony_ev:13,do_stop:15,do_stop_telephony_ev:13,do_timestamp:16,doe:[10,13,21],doesn:10,domain:19,don:13,done:[9,13,14],dot:25,drop:15,dtmf:[13,19],dtmfevent:[13,19,24],dtmfmethod:[13,19,24],due:15,durat:13,dure:[13,15],dynam:[13,18],each:14,effect:13,either:[13,19],element:[9,10,15,16,19,21,22,26],element_ad:10,element_added_notifi:10,elementclass:9,emit:[10,13,14,15,16],emit_error:[13,14,15,16,24],emit_src_pad_ad:[14,24],empti:[21,28],encod:[13,19,26],encoding_nam:26,encrypt:13,encryption_paramet:13,end:13,equival:15,error:[9,10,13,14,15,16,19,21,24],error_msg:[13,14,15,16,21],error_no:[13,14,15,16],error_quark:[21,24],errorno:[14,15,16],establish:[14,15,19],even:26,event:[13,19],everi:10,exact:[13,14],exampl:[14,21],except:14,exist:[14,19],expect:14,extens:[21,29],extension2:29,extern:14,extra:[26,28],extra_param:[26,28],fail:[19,24],fals:[10,13,14,15,16,21,26,29],fatal:19,fed:13,feeback:26,feedback:[21,26,28],feedback_param:26,feedbackparamet:[24,26],feedbck:26,fetch:[13,21],file:10,filenam:[10,21],fill:25,filter:13,find:26,first:[10,13],flag:[10,13,14,15,16],follow:21,forc:[14,15],force_remote_candid:[5,6,14,15,24],format:[18,21,25],found:12,foundat:25,free:[13,14,24,27,28],freed:[12,13,16,21],friendli:[10,14],from:[13,14,15,19,21,26],fs_candidate_copi:24,fs_candidate_destroi:[14,24],fs_candidate_list_copi:24,fs_candidate_list_destroi:24,fs_candidate_new:24,fs_candidate_new_ful:24,fs_candidate_type_host:24,fs_candidate_type_multicast:24,fs_candidate_type_prflx:24,fs_candidate_type_relai:24,fs_candidate_type_srflx:24,fs_codec_add_feedback_paramet:24,fs_codec_add_optional_paramet:24,fs_codec_are_equ:24,fs_codec_copi:24,fs_codec_destroi:[13,24],fs_codec_format:24,fs_codec_get_feedback_paramet:24,fs_codec_get_optional_paramet:24,fs_codec_id_ani:24,fs_codec_id_dis:24,fs_codec_list_are_equ:24,fs_codec_list_copi:24,fs_codec_list_destroi:[13,14,21,24],fs_codec_list_from_keyfil:24,fs_codec_new:24,fs_codec_parameter_copi:24,fs_codec_parameter_fre:24,fs_codec_remove_feedback_paramet:24,fs_codec_remove_optional_paramet:24,fs_codec_to_str:24,fs_component_non:24,fs_component_rtcp:24,fs_component_rtp:24,fs_conference_new_particip:24,fs_conference_new_sess:24,fs_direction_both:24,fs_direction_non:24,fs_direction_recv:24,fs_direction_send:24,fs_dtmf_event_0:24,fs_dtmf_event_1:24,fs_dtmf_event_2:24,fs_dtmf_event_3:24,fs_dtmf_event_4:24,fs_dtmf_event_5:24,fs_dtmf_event_6:24,fs_dtmf_event_7:24,fs_dtmf_event_8:24,fs_dtmf_event_9:24,fs_dtmf_event_a:24,fs_dtmf_event_b:24,fs_dtmf_event_c:24,fs_dtmf_event_d:24,fs_dtmf_event_pound:24,fs_dtmf_event_star:24,fs_dtmf_method_rtp_rfc4733:24,fs_dtmf_method_sound:24,fs_element_added_notifier_add:24,fs_element_added_notifier_new:24,fs_element_added_notifier_remov:24,fs_element_added_notifier_set_default_properti:24,fs_element_added_notifier_set_properties_from_fil:24,fs_element_added_notifier_set_properties_from_keyfil:24,fs_error:19,fs_error_already_exist:24,fs_error_connection_fail:24,fs_error_construct:24,fs_error_dispos:24,fs_error_intern:24,fs_error_invalid_argu:24,fs_error_negotiation_fail:24,fs_error_network:24,fs_error_no_codec:24,fs_error_no_codecs_left:24,fs_error_not_impl:24,fs_error_quark:24,fs_error_unknown_codec:24,fs_feedback_parameter_copi:24,fs_feedback_parameter_fre:24,fs_media_type_appl:24,fs_media_type_audio:24,fs_media_type_last:24,fs_media_type_to_str:24,fs_media_type_video:24,fs_network_protocol_tcp:24,fs_network_protocol_tcp_act:24,fs_network_protocol_tcp_pass:24,fs_network_protocol_tcp_so:24,fs_network_protocol_udp:24,fs_parse_error:24,fs_plugin_cr:24,fs_plugin_create_valist:24,fs_plugin_list_avail:24,fs_rtp_header_extension_are_equ:24,fs_rtp_header_extension_copi:24,fs_rtp_header_extension_destroi:24,fs_rtp_header_extension_format:24,fs_rtp_header_extension_list_copi:24,fs_rtp_header_extension_list_destroi:[21,24],fs_rtp_header_extension_list_from_keyfil:24,fs_rtp_header_extension_new:24,fs_session_codecs_need_resend:24,fs_session_destroi:24,fs_session_emit_error:24,fs_session_get_stream_transmitter_typ:24,fs_session_list_transmitt:24,fs_session_new_stream:24,fs_session_parse_codecs_chang:24,fs_session_parse_send_codec_chang:24,fs_session_parse_telephony_event_start:24,fs_session_parse_telephony_event_stop:24,fs_session_set_allowed_cap:24,fs_session_set_codec_prefer:24,fs_session_set_encryption_paramet:24,fs_session_set_send_codec:24,fs_session_start_telephony_ev:24,fs_session_stop_telephony_ev:24,fs_stream_add_id:24,fs_stream_add_remote_candid:24,fs_stream_destroi:24,fs_stream_emit_error:24,fs_stream_emit_src_pad_ad:24,fs_stream_force_remote_candid:24,fs_stream_iterate_src_pad:24,fs_stream_parse_component_state_chang:24,fs_stream_parse_local_candidates_prepar:24,fs_stream_parse_new_active_candidate_pair:24,fs_stream_parse_new_local_candid:24,fs_stream_parse_recv_codecs_chang:24,fs_stream_set_decryption_paramet:24,fs_stream_set_remote_codec:24,fs_stream_set_transmitt:24,fs_stream_set_transmitter_ht:24,fs_stream_state_connect:24,fs_stream_state_disconnect:24,fs_stream_state_fail:24,fs_stream_state_gath:24,fs_stream_state_readi:24,fs_stream_transmitter_add_remote_candid:24,fs_stream_transmitter_emit_error:24,fs_stream_transmitter_force_remote_candid:24,fs_stream_transmitter_gather_local_candid:24,fs_stream_transmitter_stop:24,fs_transmitter_emit_error:24,fs_transmitter_get_stream_transmitter_typ:24,fs_transmitter_list_avail:24,fs_transmitter_new:24,fs_transmitter_new_stream_transmitt:24,fs_type_candidate_list:21,fs_utils_get_default_codec_prefer:24,fs_utils_get_default_element_properti:[10,24],fs_utils_get_default_rtp_header_extension_prefer:24,fs_utils_set_bitr:24,fs_value_set_candidate_list:24,fscandid:[15,24],fscandidatetyp:24,fscodec:[13,14,21,24],fscodecparamet:24,fscomponenttyp:24,fsconfer:24,fsconferenceclass:24,fsdtmfevent:24,fsdtmfmethod:24,fselementaddednotifi:24,fselementaddednotifierclass:24,fserror:24,fsfeedbackparamet:24,fsmediatyp:24,fsnetworkprotocol:24,fsparticip:24,fsparticipantclass:24,fsplugin:24,fspluginclass:24,fsrtpheaderextens:24,fssession:24,fssessionclass:24,fsstream:24,fsstreamclass:24,fsstreamdirect:24,fsstreamdtmfev:13,fsstreamstat:24,fsstreamtransmitt:24,fsstreamtransmitterclass:24,fstransmitt:24,fstransmitterclass:24,futur:10,g_maxuint:26,gather:[15,19,24],gather_local_candid:[6,15,24],gener:14,genum:19,gerror:19,get:[12,13,14,16,21],get_feedback_paramet:[24,26],get_optional_paramet:[24,26],get_stream_transmitter_typ:[4,7,13,16,24],gflag:20,ginterfac:[9,12],give:[19,21],given:[9,13,14],glib:[9,10,11,12,13,14,15,16,21,26],glist:21,gobject:[1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,19,20,21,22,23,26],group:[10,21],gst:[0,9,10,13,14,15,16,19,21,22,23],gst_sink:16,gst_src:16,gstreamer:[13,14,19,21],gtype:[12,13,16],guarante:10,gvalu:14,happen:19,hashtabl:14,have:[5,10,13,14,15,16,19,21],hdrext:21,header:[21,29],here:25,higher:13,hold:25,host:[19,24],http:[13,19],iana:[13,19],ident:[21,26,29],identifi:[14,26,29],ietf:[21,26],ignor:[19,26],immedi:[13,14,15],implement:[2,15,19],includ:13,incom:[14,15,19],inconsist:19,indic:[13,25],inform:[13,25],inherit:[9,10,11,12,13,14,15,16],initi:[14,26],initiallyunown:[9,22],innapropri:19,input:13,insid:13,instal:19,instead:10,intern:[19,24],interv:26,introspect:[14,16,21],invalid:[13,19],invalid_argu:[19,24],ipv6:[13,16],item:26,iter:14,iterate_src_pad:[14,24],itself:[13,14],keep:14,kei:[10,21,26],keyfil:[10,21],know:21,known:[14,15],known_source_packet_receiv:15,kwarg:[9,10,11,12,13,14,15,16],largest:19,last:[15,19,24],later:14,least:[4,19],less:[13,19],level:10,like:[18,19,21,28],limit:21,link:[13,14],list1:21,list2:21,list:[12,13,14,15,16,21,26],list_avail:[12,16,24],list_transmitt:[4,13,24],listen:[13,19],load:[10,16],local:[13,14,15,19,25],local_candid:[14,15],local_candidates_prepar:15,look:15,lower:13,made:14,mai:[2,10,13,14,19],main:[10,13,14,21],make:[14,27,28],mani:13,manual:25,map:23,match:[10,13,14,21],materi:14,max:16,maximum:25,mean:[13,19,25],meant:[14,16],media:[13,19,21,26],media_typ:[9,13,19,21,26],media_type_to_str:[21,24],mediatyp:[9,13,19,21,24,26],member:[1,9,10,11,13,14,15,16],messag:[13,14,15,16,21],minimum:[13,26],minimum_reporting_interv:26,modifi:[14,15],more:[2,14],most:[14,15,19],mostli:14,multicast:[14,19,24,25],multipl:14,must:[4,5,6,7,9,13,14,15,16,21,26],mutex:11,muxer:14,n_paramet:[14,16],nack:21,name:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,21,25,26,27,28,29],necessari:25,need:[13,16],neg:13,negoti:[5,13,14,19,29],negotiated_codec:14,negotiati:14,negotiation_fail:[19,24],network:[15,16,19,24],networkprotocol:[19,24,25],new_active_candidate_pair:15,new_codec:13,new_ful:[24,25],new_local_candid:15,new_particip:[0,9,24],new_sess:[0,9,24],new_stream:[4,13,14,24],new_stream_transmitt:[7,16,24],newli:[10,12,13,14,15,16,25,26,27,28],no_codec:[19,24],no_codecs_left:[19,24],non:26,none:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,19,20,21,24,25,26],normal:14,not_impl:[19,24],note:13,noth:26,now:19,ntp:21,number:[13,14,15,16,19,21,26],numer:26,object:[0,3,4,5,6,7,9,10,11,12,13,14,15,16,19,21,22],objectclass:[1,2,4,5,6,7,9,10,11,12,13,14,15,16],obsolet:[19,21],occur:[13,21],offer:[15,26],old_codec:13,onc:[13,14],one_param:21,ongo:13,onli:[13,14,15,16,19,20,21,29],opaqu:12,open:19,option:[13,14,19,21,25,26],optional_param:26,order:26,org:[13,19],other:[13,14],otherwis:[10,13,14,15,21,25,26,29],our:[2,4,5,6,7],out:13,outbound:19,output:13,outsid:[14,15],over:13,overrid:[2,4,5,6,7,14],overwrit:14,own:9,ownership:[10,13],packet:[13,14,15,16,25],pad:[13,14,16],pair:[14,15,19,26],param:[13,14,18,21,26],paramet:[9,10,12,13,14,15,16,19,21,25,26,27,28,29],paramt:27,parent:[0,1,2,4,5,6,7,9,10,11,12,13,14,15,16],parent_class:[1,2,3,4,5,6,7],pars:[13,14,21],parse_codecs_chang:[13,24],parse_component_state_chang:[14,24],parse_error:[21,24],parse_local_candidates_prepar:[14,24],parse_new_active_candidate_pair:[14,24],parse_new_local_candid:[14,24],parse_recv_codecs_chang:[14,24],parse_send_codec_chang:[13,24],parse_telephony_event_start:[13,24],parse_telephony_event_stop:[13,24],parti:19,particip:[2,9],pass:[10,13,14,15,16],password:25,payload:[13,18,19,26],peer:[13,14,19],per:[14,15,16,21],person:15,plai:13,pli:21,pointer:26,port:25,posit:13,possibl:[13,15,16,19,21],pound:[19,24],prefer:[10,13,15,19,21],preferred_local_candid:15,prepar:[14,15],present:10,previd:14,previous:[13,14],prflx:[19,24],printabl:[19,21],printf:18,prioriti:[13,25],privat:[1,9,10,11,13,14,15,16],probabl:19,produc:13,program:19,programm:15,prop:[13,14,15,16],properti:2,proto:25,protocol:[14,19,21,25,26],provid:16,python:24,qcif:21,quark:[19,24],rais:[9,10,13,14,15,16,21],rang:21,rate:[21,26],raw:13,read:[13,14,21],readabl:[13,14,15,16],readi:[19,24],receiv:[10,13,14,15,16,19,20,21,26],recent:13,recogn:14,recommend:[13,14],recv:[14,20,24],ref:14,refer:[13,14,15],reflex:19,registri:[13,19],regularli:13,relai:[19,24],relat:[13,19],releas:[13,14],reliabl:13,remot:[14,15,19],remote_candid:[14,15],remote_codec:14,remov:[10,13,14,24,26],remove_feedback_paramet:[24,26],remove_optional_paramet:[24,26],renegoti:13,replac:[14,18],report:[19,26],repositori:21,reprens:26,repres:[12,13,14,19,21,25,26],request:[16,26],requir:[13,14,16],resent:13,reserv:13,rest:[19,25],result:[10,19],retransmit:13,retriev:[13,14],retriv:13,rfc:19,right:14,rtcp:[19,24,25,26],rtp:[14,19,21,24,25,26,29],rtp_header_extension_format:[18,24],rtp_header_extension_list_copi:[21,24],rtp_header_extension_list_from_keyfil:[21,24],rtp_rfc4733:[19,24],rtpheaderextens:[18,21,24],run_last:[10,13,14,15,16],runtim:18,safe:19,same:[10,13,14,19],schedul:19,scope:[14,15],sdp:[15,26],search:26,sec:21,second:[26,29],secondary_codec:13,see:25,select:[14,15,19],self:[13,14],send:[13,14,15,19,20,21,24,25],send_codec:13,sender:13,sent:[13,14,15,16,19],server:[14,19],servic:[13,16],session:9,set:[10,13,14,15,16,21],set_allowed_cap:[4,13,24],set_codec_prefer:[4,13,24],set_decryption_paramet:[5,14,24],set_default_properti:[10,24],set_encryption_paramet:[4,13,24],set_properties_from_fil:[10,24],set_properties_from_keyfil:[10,24],set_remote_codec:[5,14,24],set_send_codec:[4,13,24],set_transmitt:[5,14,24],set_transmitter_ht:[14,24],setter:10,share:13,should:[12,13,14,15,16,19,21,26,29],side:[13,19],sign:13,signal_handler_disconnect:10,signifi:19,simpl:19,simultanu:19,sinc:10,sink:[13,16],sink_:16,sink_cap:13,sink_pad:13,sip:21,socket:16,some:[13,19],soon:14,sound:[19,24],sourc:[13,14,15,16],special:[15,19],specif:[13,14,16],specifi:[13,19,20,26],src:[13,14,16],src_:16,src_cap:13,src_pad_ad:14,srflx:[19,24],ssrc:14,standard:21,star:[19,24],start:[13,15,16],start_telephony_ev:[4,13,24],state:[14,15,19],state_chang:15,still:14,stop:[6,10,13,15,24],stop_telephony_ev:[4,13,24],store:[27,28],str:[10,12,13,14,15,16,19,21,25,26,27,28,29],stream:13,stream_transmitt:15,stream_transmitter_paramet:14,streamdirect:[13,14,20,24,29],streamstat:[14,15,19,24],streamtransmitt:14,strfreev:[12,13,16],strict:19,string:[12,14,16,18,19,21,25,26,28],strongli:[13,14],struct:[9,10,11,12,13,14,15,16,25],structur:0,sub:[10,19],subbin:10,subclass:[4,5,6,7,9,10,11,12,13,14,15,16],subtyp:[26,28],succe:[14,15],success:13,successfulli:10,sucess:13,suffix:12,suitabl:[13,21],support:[13,14,26],symbol:23,take:[10,13],taken:13,tclass:[13,16],tcp:[19,24,25],tcp_activ:[19,24],tcp_passiv:[19,24],tcp_so:[19,24],telephon:[13,19],telephoni:13,tell:15,termin:[12,13],tfrc:21,than:[13,14],thei:[13,14,21,29],them:[11,13,14,15,16],theora:13,therefor:13,thi:[10,12,13,14,15,16,18,19,21,25,26,29],those:[13,19],thread:[10,13,14],through:14,time:[13,16,19],timestamp:16,to_str:[19,24,26],toffset:21,tone:[13,19],too:5,top:10,transmit:13,transmitt:[13,14,15],triplet:26,ttl:25,two:[21,26,29],type:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,21,25,26,27,28,29],type_suffix:12,typemodul:[12,22],typemoduleclass:3,typeplugin:12,udp:[19,24,25],unavail:24,uniqu:21,unit:21,unknown:19,unknown_codec:[19,24],unref:[9,13],until:13,unus:[3,12],updat:13,uri:[21,29],urn:21,user:[9,13,14,15,16,19,21],usernam:25,utils_get_default_codec_prefer:[21,24],utils_get_default_rtp_header_extension_prefer:[21,24],utils_set_bitr:[21,24],valid:[13,14,19,21],valu:[10,13,14,15,16,19,21,25,26,27],value_set_candidate_list:[21,24],vario:14,verifi:21,video:[13,19,21,24],virtual:2,volum:13,vorbi:13,wai:19,want:[2,14,15],watch:10,were:[12,13,14],when:[9,10,13,14,15,19,21,25],whenev:13,where:[10,13,15,21],whether:15,which:[10,13,14,15,16,19,21,25,26,29],wierd_param:21,without:[13,15,16,21],work:[19,21],would:[13,14,15,19],wow:21,writabl:[13,14,15,16],www:[13,19],xmpp:21,xxx:21,you:[2,4,5,6,7,13,14],your:10},titles:["Farstream.ConferenceClass","Farstream.ElementAddedNotifierClass","Farstream.ParticipantClass","Farstream.PluginClass","Farstream.SessionClass","Farstream.StreamClass","Farstream.StreamTransmitterClass","Farstream.TransmitterClass","Class Structures","Farstream.Conference","Farstream.ElementAddedNotifier","Farstream.Participant","Farstream.Plugin","Farstream.Session","Farstream.Stream","Farstream.StreamTransmitter","Farstream.Transmitter","Classes","Constants","Enums","Flags","Functions","Hierarchy","Farstream 0.2","Symbol Mapping","Farstream.Candidate","Farstream.Codec","Farstream.CodecParameter","Farstream.FeedbackParameter","Farstream.RtpHeaderExtension","Structures"],titleterms:{"class":[8,9,10,11,12,13,14,15,16,17],"enum":19,"function":21,api:23,candid:25,codec:26,codecparamet:27,confer:9,conferenceclass:0,constant:18,detail:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,20,21,25,26,27,28,29],elementaddednotifi:10,elementaddednotifierclass:1,farstream:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,23,25,26,27,28,29],feedbackparamet:28,field:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,25,26,27,28,29],flag:20,hierarchi:22,map:24,method:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,25,26,27,28,29],particip:11,participantclass:2,plugin:12,pluginclass:3,properti:[9,10,11,12,13,14,15,16],rtpheaderextens:29,session:13,sessionclass:4,signal:[9,10,11,12,13,14,15,16],stream:14,streamclass:5,streamtransmitt:15,streamtransmitterclass:6,structur:[8,30],symbol:24,transmitt:16,transmitterclass:7,virtual:[9,10,11,12,13,14,15,16]}})