Search.setIndex({docnames:["classes/MIKEYMapSRTP","classes/MIKEYMessage","classes/MIKEYPayload","classes/MIKEYPayloadKEMAC","classes/MIKEYPayloadKeyData","classes/MIKEYPayloadPKE","classes/MIKEYPayloadRAND","classes/MIKEYPayloadSP","classes/MIKEYPayloadSPParam","classes/MIKEYPayloadT","classes/SDPAttribute","classes/SDPBandwidth","classes/SDPConnection","classes/SDPKey","classes/SDPMedia","classes/SDPMessage","classes/SDPOrigin","classes/SDPTime","classes/SDPZone","constants","enums","functions","index","mapping","structs"],envversion:53,filenames:["classes/MIKEYMapSRTP.rst","classes/MIKEYMessage.rst","classes/MIKEYPayload.rst","classes/MIKEYPayloadKEMAC.rst","classes/MIKEYPayloadKeyData.rst","classes/MIKEYPayloadPKE.rst","classes/MIKEYPayloadRAND.rst","classes/MIKEYPayloadSP.rst","classes/MIKEYPayloadSPParam.rst","classes/MIKEYPayloadT.rst","classes/SDPAttribute.rst","classes/SDPBandwidth.rst","classes/SDPConnection.rst","classes/SDPKey.rst","classes/SDPMedia.rst","classes/SDPMessage.rst","classes/SDPOrigin.rst","classes/SDPTime.rst","classes/SDPZone.rst","constants.rst","enums.rst","functions.rst","index.rst","mapping.rst","structs.rst"],objects:{"GstSdp.MIKEYCacheType":{ALWAYS:[20,1,1,""],FOR_CSB:[20,1,1,""],NONE:[20,1,1,""]},"GstSdp.MIKEYEncAlg":{AES_CM_128:[20,1,1,""],AES_KW_128:[20,1,1,""],NULL:[20,1,1,""]},"GstSdp.MIKEYKVType":{INTERVAL:[20,1,1,""],NULL:[20,1,1,""],SPI:[20,1,1,""]},"GstSdp.MIKEYKeyDataType":{TEK:[20,1,1,""],TGK:[20,1,1,""]},"GstSdp.MIKEYMacAlg":{HMAC_SHA_1_160:[20,1,1,""],NULL:[20,1,1,""]},"GstSdp.MIKEYMapType":{MIKEY_MAP_TYPE_SRTP:[20,1,1,""]},"GstSdp.MIKEYMessage":{"new":[1,3,1,""],add_cs_srtp:[1,2,1,""],add_payload:[1,2,1,""],add_pke:[1,2,1,""],add_rand:[1,2,1,""],add_rand_len:[1,2,1,""],add_t:[1,2,1,""],add_t_now_ntp_utc:[1,2,1,""],base64_encode:[1,2,1,""],find_payload:[1,2,1,""],get_cs_srtp:[1,2,1,""],get_n_cs:[1,2,1,""],get_n_payloads:[1,2,1,""],get_payload:[1,2,1,""],insert_cs_srtp:[1,2,1,""],insert_payload:[1,2,1,""],new_from_bytes:[1,3,1,""],new_from_caps:[1,3,1,""],new_from_data:[1,3,1,""],remove_cs_srtp:[1,2,1,""],remove_payload:[1,2,1,""],replace_cs_srtp:[1,2,1,""],replace_payload:[1,2,1,""],set_info:[1,2,1,""],to_bytes:[1,2,1,""],to_caps:[1,2,1,""]},"GstSdp.MIKEYPRFFunc":{MIKEY_PRF_MIKEY_1:[20,1,1,""]},"GstSdp.MIKEYPayload":{"new":[2,3,1,""],kemac_add_sub:[2,2,1,""],kemac_get_n_sub:[2,2,1,""],kemac_get_sub:[2,2,1,""],kemac_remove_sub:[2,2,1,""],kemac_set:[2,2,1,""],key_data_set_interval:[2,2,1,""],key_data_set_key:[2,2,1,""],key_data_set_salt:[2,2,1,""],key_data_set_spi:[2,2,1,""],pke_set:[2,2,1,""],rand_set:[2,2,1,""],sp_add_param:[2,2,1,""],sp_get_n_params:[2,2,1,""],sp_get_param:[2,2,1,""],sp_remove_param:[2,2,1,""],sp_set:[2,2,1,""],t_set:[2,2,1,""]},"GstSdp.MIKEYPayloadType":{CERT:[20,1,1,""],CHASH:[20,1,1,""],DH:[20,1,1,""],ERR:[20,1,1,""],GEN_EXT:[20,1,1,""],ID:[20,1,1,""],KEMAC:[20,1,1,""],KEY_DATA:[20,1,1,""],LAST:[20,1,1,""],PKE:[20,1,1,""],RAND:[20,1,1,""],SIGN:[20,1,1,""],SP:[20,1,1,""],T:[20,1,1,""],V:[20,1,1,""]},"GstSdp.MIKEYSecProto":{MIKEY_SEC_PROTO_SRTP:[20,1,1,""]},"GstSdp.MIKEYSecSRTP":{AUTH_ALG:[20,1,1,""],AUTH_KEY_LEN:[20,1,1,""],AUTH_TAG_LEN:[20,1,1,""],ENC_ALG:[20,1,1,""],ENC_KEY_LEN:[20,1,1,""],FEC_ORDER:[20,1,1,""],KEY_DERIV_RATE:[20,1,1,""],PRF:[20,1,1,""],SALT_KEY_LEN:[20,1,1,""],SRTCP_ENC:[20,1,1,""],SRTP_AUTH:[20,1,1,""],SRTP_ENC:[20,1,1,""],SRTP_PREFIX_LEN:[20,1,1,""]},"GstSdp.MIKEYTSType":{COUNTER:[20,1,1,""],NTP:[20,1,1,""],NTP_UTC:[20,1,1,""]},"GstSdp.MIKEYType":{DH_INIT:[20,1,1,""],DH_RESP:[20,1,1,""],ERROR:[20,1,1,""],INVALID:[20,1,1,""],PK_INIT:[20,1,1,""],PK_VERIFY:[20,1,1,""],PSK_INIT:[20,1,1,""],PSK_VERIFY:[20,1,1,""]},"GstSdp.SDPAttribute":{clear:[10,2,1,""],set:[10,2,1,""]},"GstSdp.SDPBandwidth":{clear:[11,2,1,""],set:[11,2,1,""]},"GstSdp.SDPConnection":{clear:[12,2,1,""],set:[12,2,1,""]},"GstSdp.SDPMedia":{"new":[14,3,1,""],add_attribute:[14,2,1,""],add_bandwidth:[14,2,1,""],add_connection:[14,2,1,""],add_format:[14,2,1,""],as_text:[14,2,1,""],attributes_len:[14,2,1,""],attributes_to_caps:[14,2,1,""],bandwidths_len:[14,2,1,""],connections_len:[14,2,1,""],copy:[14,2,1,""],formats_len:[14,2,1,""],free:[14,2,1,""],get_attribute:[14,2,1,""],get_attribute_val:[14,2,1,""],get_attribute_val_n:[14,2,1,""],get_bandwidth:[14,2,1,""],get_caps_from_media:[14,2,1,""],get_connection:[14,2,1,""],get_format:[14,2,1,""],get_information:[14,2,1,""],get_key:[14,2,1,""],get_media:[14,2,1,""],get_num_ports:[14,2,1,""],get_port:[14,2,1,""],get_proto:[14,2,1,""],init:[14,2,1,""],insert_attribute:[14,2,1,""],insert_bandwidth:[14,2,1,""],insert_connection:[14,2,1,""],insert_format:[14,2,1,""],parse_keymgmt:[14,2,1,""],remove_attribute:[14,2,1,""],remove_bandwidth:[14,2,1,""],remove_connection:[14,2,1,""],remove_format:[14,2,1,""],replace_attribute:[14,2,1,""],replace_bandwidth:[14,2,1,""],replace_connection:[14,2,1,""],replace_format:[14,2,1,""],set_information:[14,2,1,""],set_key:[14,2,1,""],set_media:[14,2,1,""],set_media_from_caps:[14,3,1,""],set_port_info:[14,2,1,""],set_proto:[14,2,1,""],uninit:[14,2,1,""]},"GstSdp.SDPMessage":{"new":[15,3,1,""],add_attribute:[15,2,1,""],add_bandwidth:[15,2,1,""],add_email:[15,2,1,""],add_media:[15,2,1,""],add_phone:[15,2,1,""],add_time:[15,2,1,""],add_zone:[15,2,1,""],as_text:[15,2,1,""],as_uri:[15,3,1,""],attributes_len:[15,2,1,""],attributes_to_caps:[15,2,1,""],bandwidths_len:[15,2,1,""],copy:[15,2,1,""],dump:[15,2,1,""],emails_len:[15,2,1,""],free:[15,2,1,""],get_attribute:[15,2,1,""],get_attribute_val:[15,2,1,""],get_attribute_val_n:[15,2,1,""],get_bandwidth:[15,2,1,""],get_connection:[15,2,1,""],get_email:[15,2,1,""],get_information:[15,2,1,""],get_key:[15,2,1,""],get_media:[15,2,1,""],get_origin:[15,2,1,""],get_phone:[15,2,1,""],get_session_name:[15,2,1,""],get_time:[15,2,1,""],get_uri:[15,2,1,""],get_version:[15,2,1,""],get_zone:[15,2,1,""],init:[15,2,1,""],insert_attribute:[15,2,1,""],insert_bandwidth:[15,2,1,""],insert_email:[15,2,1,""],insert_phone:[15,2,1,""],insert_time:[15,2,1,""],insert_zone:[15,2,1,""],medias_len:[15,2,1,""],parse_buffer:[15,3,1,""],parse_keymgmt:[15,2,1,""],parse_uri:[15,3,1,""],phones_len:[15,2,1,""],remove_attribute:[15,2,1,""],remove_bandwidth:[15,2,1,""],remove_email:[15,2,1,""],remove_phone:[15,2,1,""],remove_time:[15,2,1,""],remove_zone:[15,2,1,""],replace_attribute:[15,2,1,""],replace_bandwidth:[15,2,1,""],replace_email:[15,2,1,""],replace_phone:[15,2,1,""],replace_time:[15,2,1,""],replace_zone:[15,2,1,""],set_connection:[15,2,1,""],set_information:[15,2,1,""],set_key:[15,2,1,""],set_origin:[15,2,1,""],set_session_name:[15,2,1,""],set_uri:[15,2,1,""],set_version:[15,2,1,""],times_len:[15,2,1,""],uninit:[15,2,1,""],zones_len:[15,2,1,""]},"GstSdp.SDPResult":{EINVAL:[20,1,1,""],OK:[20,1,1,""]},"GstSdp.SDPTime":{clear:[17,2,1,""],set:[17,2,1,""]},"GstSdp.SDPZone":{clear:[18,2,1,""],set:[18,2,1,""]},GstSdp:{MIKEYCacheType:[20,0,1,""],MIKEYEncAlg:[20,0,1,""],MIKEYKVType:[20,0,1,""],MIKEYKeyDataType:[20,0,1,""],MIKEYMacAlg:[20,0,1,""],MIKEYMapSRTP:[0,0,1,""],MIKEYMapType:[20,0,1,""],MIKEYMessage:[1,0,1,""],MIKEYPRFFunc:[20,0,1,""],MIKEYPayload:[2,0,1,""],MIKEYPayloadKEMAC:[3,0,1,""],MIKEYPayloadKeyData:[4,0,1,""],MIKEYPayloadPKE:[5,0,1,""],MIKEYPayloadRAND:[6,0,1,""],MIKEYPayloadSP:[7,0,1,""],MIKEYPayloadSPParam:[8,0,1,""],MIKEYPayloadT:[9,0,1,""],MIKEYPayloadType:[20,0,1,""],MIKEYSecProto:[20,0,1,""],MIKEYSecSRTP:[20,0,1,""],MIKEYTSType:[20,0,1,""],MIKEYType:[20,0,1,""],MIKEY_VERSION:[19,4,1,""],SDPAttribute:[10,0,1,""],SDPBandwidth:[11,0,1,""],SDPConnection:[12,0,1,""],SDPKey:[13,0,1,""],SDPMedia:[14,0,1,""],SDPMessage:[15,0,1,""],SDPOrigin:[16,0,1,""],SDPResult:[20,0,1,""],SDPTime:[17,0,1,""],SDPZone:[18,0,1,""],SDP_BWTYPE_AS:[19,4,1,""],SDP_BWTYPE_CT:[19,4,1,""],SDP_BWTYPE_EXT_PREFIX:[19,4,1,""],SDP_BWTYPE_RR:[19,4,1,""],SDP_BWTYPE_RS:[19,4,1,""],SDP_BWTYPE_TIAS:[19,4,1,""],sdp_address_is_multicast:[21,5,1,""],sdp_make_keymgmt:[21,5,1,""],sdp_media_new:[21,5,1,""],sdp_media_set_media_from_caps:[21,5,1,""],sdp_message_as_uri:[21,5,1,""],sdp_message_new:[21,5,1,""],sdp_message_parse_buffer:[21,5,1,""],sdp_message_parse_uri:[21,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","data","Python data"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:classmethod","4":"py:data","5":"py:function"},terms:{"byte":[1,2,4,15,21],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22],"enum":22,"function":[1,14,15,20,22],"int":[0,1,2,4,5,6,7,8,9,11,12,14,15],"long":[1,15],"new":[1,2,10,11,12,14,15,17,18,21,23],"null":[15,20,21,23],"public":[5,20],"return":[1,2,10,11,12,14,15,17,18,20,21],"true":[1,2,21],AES:20,NOT:20,The:[0,1,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21],access:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],activ:19,add:[1,2,14,15],add_attribut:[14,15,23],add_bandwidth:[14,15,23],add_connect:[14,23],add_cs_srtp:[1,23],add_email:[15,23],add_format:[14,23],add_media:[15,23],add_payload:[1,23],add_phon:[15,23],add_pk:[1,23],add_rand:[1,23],add_rand_len:[1,23],add_t:[1,23],add_t_now_ntp_utc:[1,23],add_tim:[15,23],add_zon:[15,23],added:4,addit:14,addr:[15,16,21],addr_numb:[12,14,15],address:[12,14,15,16,21],addrtyp:[12,14,15,16,21],adj_tim:[15,18],adjust:[15,18],aes_cm_128:[20,23],aes_kw_128:[20,23],after:[14,15],again:15,algorithm:[5,20],all:[2,14,15],alloc:[14,15,19,21],allow:18,also:22,alwai:[20,23],announc:16,anymor:[14,15],append:[1,14],appli:[0,1,7],applic:19,arrai:[1,7,14,15],as_text:[14,15,23],as_uri:[15,23],associ:20,attr:[14,15],attribut:[10,14,15],attributes_len:[14,15,23],attributes_to_cap:[14,15,23],audio:22,auth:20,auth_alg:[20,23],auth_key_len:[20,23],auth_tag_len:[20,23],authent:20,author:1,bandwidth:[11,14,15,19],bandwidths_len:[14,15,23],base64:[1,21],base64_encod:[1,23],base:[18,20,22],basic:22,been:20,befor:[14,15],bit:[6,20],bool:[1,2,21],buffer:[15,21],bug:22,bugzilla:22,bundl:1,bwtype:[11,14,15],cach:[1,2,5,20],call:[14,15],can:[4,15],cap:[1,14,15,21],carri:9,cert:[20,23],certif:[5,20],cgi:22,cgit:22,chash:[20,23],check:21,cipher:1,classmethod:[1,2,14,15],clear:[10,11,12,17,18,23],clock_rat:[14,21],collect:22,common:[2,3,5],compon:22,concept:16,confer:[17,19],configur:15,conn:14,connect:[12,14,15],connections_len:[14,23],consist:6,constant:22,contain:[1,4,5,10,12,22],content:[10,11,12,13,14,15,16,17,18,21],convei:13,convert:[1,14,15],copi:[14,15,23],counter:[0,1,20,23],creat:[14,15,16,21],creator:15,crypto:[1,20],csb:20,csb_id:1,current:[0,1],data:[1,2,4,5,12,13,14,15,19,20,21],data_len:5,debian:22,decim:17,decod:22,decrypt:1,defin:[7,12,14,15,16],depend:[1,22],deriv:20,descript:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,22],devel:22,dh_init:[20,23],dh_resp:[20,23],differ:20,doe:16,draft:[15,21],dump:[15,23],dynam:[14,15],each:[15,21],easi:15,einval:[20,23],element:22,email:15,emails_len:[15,23],enc_alg:[2,3,20,23],enc_key_len:[20,23],encod:[1,15,21,22],encoding_nam:[14,21],encoding_param:[14,21],encr:20,encrypt:[1,2,5,13,14,15,20],end:15,enter_bug:22,entri:15,envelop:[1,2,5,20],err:[20,23],error:[1,14,20,23],exchang:20,expir:20,extens:[19,20],fail:1,failur:2,fec:20,fec_ord:[20,23],field:[20,21],fill:1,filter:22,find:1,find_payload:[1,23],first:[14,15,18],flag:1,fmt:14,fmtp:[14,21],for_csb:[20,23],form:[15,16,21],format:[1,14,15,21],formats_len:[14,23],frames:[14,21],free:[14,15,23],freedesktop:22,freshli:[14,15],from:[1,2,5,14,15,16,18,21],fujikawa:[15,21],gen_ext:[20,23],gener:20,get:[1,2,14,15],get_attribut:[14,15,23],get_attribute_v:[14,15,23],get_attribute_val_n:[14,15,23],get_bandwidth:[14,15,23],get_caps_from_media:[14,23],get_connect:[14,15,23],get_cs_srtp:[1,23],get_email:[15,23],get_format:[14,23],get_inform:[14,15,23],get_kei:[14,15,23],get_media:[14,15,23],get_n_c:[1,23],get_n_payload:[1,23],get_num_port:[14,23],get_origin:[15,23],get_payload:[1,23],get_phon:[15,23],get_port:[14,23],get_proto:[14,23],get_session_nam:[15,23],get_tim:[15,23],get_uri:[15,23],get_vers:[15,23],get_zon:[15,23],gir1:22,give:16,given:[1,12,14,15,20,21],glib:[1,20],global:16,gnome:22,groom:22,gst:[1,2,14,15,21,22],gst_mikey_cache_alwai:23,gst_mikey_cache_for_csb:23,gst_mikey_cache_non:23,gst_mikey_enc_aes_cm_128:23,gst_mikey_enc_aes_kw_128:23,gst_mikey_enc_nul:23,gst_mikey_kd_tek:23,gst_mikey_kd_tgk:23,gst_mikey_kv_interv:23,gst_mikey_kv_nul:23,gst_mikey_kv_spi:23,gst_mikey_mac_hmac_sha_1_160:23,gst_mikey_mac_nul:23,gst_mikey_map_type_srtp:23,gst_mikey_message_add_cs_srtp:23,gst_mikey_message_add_payload:23,gst_mikey_message_add_pk:23,gst_mikey_message_add_rand:23,gst_mikey_message_add_rand_len:23,gst_mikey_message_add_t:23,gst_mikey_message_add_t_now_ntp_utc:23,gst_mikey_message_base64_encod:23,gst_mikey_message_find_payload:23,gst_mikey_message_get_cs_srtp:23,gst_mikey_message_get_n_c:23,gst_mikey_message_get_n_payload:23,gst_mikey_message_get_payload:23,gst_mikey_message_insert_cs_srtp:23,gst_mikey_message_insert_payload:23,gst_mikey_message_new:23,gst_mikey_message_new_from_byt:23,gst_mikey_message_new_from_cap:23,gst_mikey_message_new_from_data:23,gst_mikey_message_remove_cs_srtp:23,gst_mikey_message_remove_payload:23,gst_mikey_message_replace_cs_srtp:23,gst_mikey_message_replace_payload:23,gst_mikey_message_set_info:23,gst_mikey_message_to_byt:23,gst_mikey_message_to_cap:23,gst_mikey_payload_kemac_add_sub:23,gst_mikey_payload_kemac_get_n_sub:23,gst_mikey_payload_kemac_get_sub:23,gst_mikey_payload_kemac_remove_sub:23,gst_mikey_payload_kemac_set:23,gst_mikey_payload_key_data_set_interv:23,gst_mikey_payload_key_data_set_kei:23,gst_mikey_payload_key_data_set_salt:23,gst_mikey_payload_key_data_set_spi:23,gst_mikey_payload_new:23,gst_mikey_payload_pke_set:23,gst_mikey_payload_rand_set:23,gst_mikey_payload_sp_add_param:23,gst_mikey_payload_sp_get_n_param:23,gst_mikey_payload_sp_get_param:23,gst_mikey_payload_sp_remove_param:23,gst_mikey_payload_sp_set:23,gst_mikey_payload_t_set:23,gst_mikey_prf_mikey_1:23,gst_mikey_pt_cert:23,gst_mikey_pt_chash:23,gst_mikey_pt_dh:23,gst_mikey_pt_err:23,gst_mikey_pt_gen_ext:23,gst_mikey_pt_id:23,gst_mikey_pt_kemac:23,gst_mikey_pt_key_data:23,gst_mikey_pt_last:23,gst_mikey_pt_pk:23,gst_mikey_pt_rand:23,gst_mikey_pt_sign:23,gst_mikey_pt_sp:23,gst_mikey_pt_t:23,gst_mikey_pt_v:23,gst_mikey_sec_proto_srtp:23,gst_mikey_sp_srtp_auth_alg:23,gst_mikey_sp_srtp_auth_key_len:23,gst_mikey_sp_srtp_auth_tag_len:23,gst_mikey_sp_srtp_enc_alg:23,gst_mikey_sp_srtp_enc_key_len:23,gst_mikey_sp_srtp_fec_ord:23,gst_mikey_sp_srtp_key_deriv_r:23,gst_mikey_sp_srtp_prf:23,gst_mikey_sp_srtp_salt_key_len:23,gst_mikey_sp_srtp_srtcp_enc:23,gst_mikey_sp_srtp_srtp_auth:23,gst_mikey_sp_srtp_srtp_enc:23,gst_mikey_sp_srtp_srtp_prefix_len:23,gst_mikey_ts_type_count:23,gst_mikey_ts_type_ntp:23,gst_mikey_ts_type_ntp_utc:23,gst_mikey_type_dh_init:23,gst_mikey_type_dh_resp:23,gst_mikey_type_error:23,gst_mikey_type_invalid:23,gst_mikey_type_pk_init:23,gst_mikey_type_pk_verifi:23,gst_mikey_type_psk_init:23,gst_mikey_type_psk_verifi:23,gst_mikey_vers:23,gst_sdp_address_is_multicast:23,gst_sdp_attribute_clear:23,gst_sdp_attribute_set:23,gst_sdp_bandwidth_clear:23,gst_sdp_bandwidth_set:23,gst_sdp_bwtype_a:23,gst_sdp_bwtype_ct:23,gst_sdp_bwtype_ext_prefix:23,gst_sdp_bwtype_r:23,gst_sdp_bwtype_rr:23,gst_sdp_bwtype_tia:23,gst_sdp_connection_clear:23,gst_sdp_connection_set:23,gst_sdp_einval:23,gst_sdp_make_keymgmt:23,gst_sdp_media_add_attribut:23,gst_sdp_media_add_bandwidth:23,gst_sdp_media_add_connect:23,gst_sdp_media_add_format:23,gst_sdp_media_as_text:23,gst_sdp_media_attributes_len:23,gst_sdp_media_attributes_to_cap:23,gst_sdp_media_bandwidths_len:23,gst_sdp_media_connections_len:23,gst_sdp_media_copi:23,gst_sdp_media_formats_len:23,gst_sdp_media_fre:23,gst_sdp_media_get_attribut:23,gst_sdp_media_get_attribute_v:23,gst_sdp_media_get_attribute_val_n:23,gst_sdp_media_get_bandwidth:23,gst_sdp_media_get_caps_from_media:23,gst_sdp_media_get_connect:23,gst_sdp_media_get_format:23,gst_sdp_media_get_inform:23,gst_sdp_media_get_kei:23,gst_sdp_media_get_media:23,gst_sdp_media_get_num_port:23,gst_sdp_media_get_port:23,gst_sdp_media_get_proto:23,gst_sdp_media_init:23,gst_sdp_media_insert_attribut:23,gst_sdp_media_insert_bandwidth:23,gst_sdp_media_insert_connect:23,gst_sdp_media_insert_format:23,gst_sdp_media_new:23,gst_sdp_media_parse_keymgmt:23,gst_sdp_media_remove_attribut:23,gst_sdp_media_remove_bandwidth:23,gst_sdp_media_remove_connect:23,gst_sdp_media_remove_format:23,gst_sdp_media_replace_attribut:23,gst_sdp_media_replace_bandwidth:23,gst_sdp_media_replace_connect:23,gst_sdp_media_replace_format:23,gst_sdp_media_set_inform:23,gst_sdp_media_set_kei:23,gst_sdp_media_set_media:23,gst_sdp_media_set_media_from_cap:23,gst_sdp_media_set_port_info:23,gst_sdp_media_set_proto:23,gst_sdp_media_uninit:23,gst_sdp_message_add_attribut:23,gst_sdp_message_add_bandwidth:23,gst_sdp_message_add_email:23,gst_sdp_message_add_media:23,gst_sdp_message_add_phon:23,gst_sdp_message_add_tim:23,gst_sdp_message_add_zon:23,gst_sdp_message_as_text:23,gst_sdp_message_as_uri:23,gst_sdp_message_attributes_len:23,gst_sdp_message_attributes_to_cap:23,gst_sdp_message_bandwidths_len:23,gst_sdp_message_copi:23,gst_sdp_message_dump:23,gst_sdp_message_emails_len:23,gst_sdp_message_fre:23,gst_sdp_message_get_attribut:23,gst_sdp_message_get_attribute_v:23,gst_sdp_message_get_attribute_val_n:23,gst_sdp_message_get_bandwidth:23,gst_sdp_message_get_connect:23,gst_sdp_message_get_email:23,gst_sdp_message_get_inform:23,gst_sdp_message_get_kei:23,gst_sdp_message_get_media:23,gst_sdp_message_get_origin:23,gst_sdp_message_get_phon:23,gst_sdp_message_get_session_nam:23,gst_sdp_message_get_tim:23,gst_sdp_message_get_uri:23,gst_sdp_message_get_vers:23,gst_sdp_message_get_zon:23,gst_sdp_message_init:23,gst_sdp_message_insert_attribut:23,gst_sdp_message_insert_bandwidth:23,gst_sdp_message_insert_email:23,gst_sdp_message_insert_phon:23,gst_sdp_message_insert_tim:23,gst_sdp_message_insert_zon:23,gst_sdp_message_medias_len:23,gst_sdp_message_new:23,gst_sdp_message_parse_buff:23,gst_sdp_message_parse_keymgmt:23,gst_sdp_message_parse_uri:23,gst_sdp_message_phones_len:23,gst_sdp_message_remove_attribut:23,gst_sdp_message_remove_bandwidth:23,gst_sdp_message_remove_email:23,gst_sdp_message_remove_phon:23,gst_sdp_message_remove_tim:23,gst_sdp_message_remove_zon:23,gst_sdp_message_replace_attribut:23,gst_sdp_message_replace_bandwidth:23,gst_sdp_message_replace_email:23,gst_sdp_message_replace_phon:23,gst_sdp_message_replace_tim:23,gst_sdp_message_replace_zon:23,gst_sdp_message_set_connect:23,gst_sdp_message_set_inform:23,gst_sdp_message_set_kei:23,gst_sdp_message_set_origin:23,gst_sdp_message_set_session_nam:23,gst_sdp_message_set_uri:23,gst_sdp_message_set_vers:23,gst_sdp_message_times_len:23,gst_sdp_message_uninit:23,gst_sdp_message_zones_len:23,gst_sdp_ok:23,gst_sdp_time_clear:23,gst_sdp_time_set:23,gst_sdp_zone_clear:23,gst_sdp_zone_set:23,gstmikeycachetyp:23,gstmikeycsidmaptyp:1,gstmikeyencalg:23,gstmikeykeydatatyp:23,gstmikeykvtyp:23,gstmikeymacalg:23,gstmikeymapsrtp:23,gstmikeymaptyp:23,gstmikeymessag:23,gstmikeypayload:23,gstmikeypayloadkemac:23,gstmikeypayloadkeydata:23,gstmikeypayloadpk:23,gstmikeypayloadpsparam:7,gstmikeypayloadrand:23,gstmikeypayloadsp:23,gstmikeypayloadspparam:23,gstmikeypayloadt:23,gstmikeypayloadtyp:23,gstmikeyprffunc:23,gstmikeysecproto:23,gstmikeysecsrtp:23,gstmikeytstyp:23,gstmikeytyp:23,gstreamer:22,gstsdp:[19,20,21,23,24],gstsdpattribut:23,gstsdpbandwidth:23,gstsdpconnect:23,gstsdpkei:23,gstsdpmedia:23,gstsdpmessag:23,gstsdporigin:23,gstsdpresult:23,gstsdptime:23,gstsdpzone:23,happen:[14,15,18],has:[15,20,21],hash:20,have:[12,14,15,16],header:[4,6,7,9],height:[14,21],helper:[15,22],hmac:20,hmac_sha_1_160:[20,23],hold:[1,2,3],homepag:22,host:16,html:[15,21,22],http:[15,21,22],identifi:[1,15,16],ids:16,idx:[1,2,14,15],ietf:[15,21],implicit:5,includ:[1,22],independ:19,index:[1,2,14,15],indic:[1,2,5],info:1,inform:[1,9,11,14,15,17,18],init:[14,15,23],initi:[14,15,20],ins:22,insert:[1,14,15],insert_attribut:[14,15,23],insert_bandwidth:[14,15,23],insert_connect:[14,23],insert_cs_srtp:[1,23],insert_email:[15,23],insert_format:[14,23],insert_payload:[1,23],insert_phon:[15,23],insert_tim:[15,23],insert_zon:[15,23],internet:[12,14,15,16],interv:[20,23],invalid:[20,23],invok:[14,15],item:0,its:[14,15],kei:[1,2,4,5,10,13,14,15,20,21],kemac:[2,3,4,20,23],kemac_add_sub:[2,23],kemac_get_n_sub:[2,23],kemac_get_sub:[2,23],kemac_remove_sub:[2,23],kemac_set:[2,23],key_data:[2,4,20,23],key_data_set_interv:[2,23],key_data_set_kei:[2,23],key_data_set_salt:[2,23],key_data_set_spi:[2,23],key_deriv_r:[20,23],key_len:[2,4],key_typ:[2,4],kilobit:[11,14,15],kv_data:4,kv_len:4,kv_type:4,last:[20,23],layer:[12,14,15],len:[1,2,6,8],length:[1,2,4,5,6,8,20],librari:22,list:[15,18,22],listinfo:22,live:[12,14,15],login:16,loosl:[15,21],mac_alg:[2,3],machin:16,mail:22,mailman:22,maintain:22,make:[1,2,15,21],malloc:[14,15],manag:21,map:[0,1,14,15,20,21,22],map_info:1,map_typ:1,materi:4,maximum:19,mean:[12,14,15,16],med:14,media:[11,14,15,21],medias_len:[15,23],messag:[1,15,20],method:20,mgmt:[14,15,21],mikei:[1,14,15,19,20],mikey_map_type_srtp:[20,23],mikey_prf_mikey_1:[20,23],mikey_sec_proto_srtp:[20,23],mikey_vers:[19,23],mikeycachetyp:[1,2,5,20,23],mikeydecryptinfo:1,mikeyencalg:[2,3,20,23],mikeyencryptinfo:1,mikeykeydatatyp:[2,4,20,23],mikeykvtyp:[4,20,23],mikeymacalg:[2,3,20,23],mikeymapsrtp:[1,23,24],mikeymaptyp:[1,20,23],mikeymessag:[14,15,23,24],mikeypayload:[1,3,4,5,6,7,9,23,24],mikeypayloadkemac:[23,24],mikeypayloadkeydata:[23,24],mikeypayloadpk:[23,24],mikeypayloadrand:[23,24],mikeypayloadsp:[23,24],mikeypayloadspparam:[2,23,24],mikeypayloadt:[23,24],mikeypayloadtyp:[1,2,20,23],mikeyprffunc:[1,20,23],mikeysecproto:[2,7,20,23],mikeysecsrtp:[20,23],mikeytstyp:[1,2,9,20,23],mikeytyp:[1,20,23],mini_object:[1,2],miniobject:[1,2],mki:[2,20],modifi:[11,14,15,19],modul:22,mostli:[14,15],msg:[15,21],multicast:21,must:[0,1,2,20],name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],nettyp:[12,14,15,16,21],network:[12,14,15,16,17,21],new_from_byt:[1,23],new_from_cap:[1,23],new_from_data:[1,23],newli:[14,15],newpai:2,noa:[15,21],none:[0,1,2,3,4,5,6,7,8,9,10,13,14,16,20,23],nth:[1,14,15],ntp:[1,15,17,18,20,23],ntp_utc:[20,23],num_port:14,number:[1,2,7,12,14,15,16],numer:16,object:[1,3,7,14,15,17],occur:1,off:20,offset:[15,18],one:[14,22],onli:[14,20],oper:[14,15],order:20,org:[15,21,22],origin:[15,16],owner:15,ownership:15,packag:22,pair:10,param1:[14,21],param2:[14,21],param:[7,14,21],paramat:8,paramet:[1,2,8,10,11,12,14,15,17,18,20,21],parent:22,pars:[1,14,15,21],parse_buff:[15,23],parse_keymgmt:[14,15,23],parse_uri:[15,23],part:1,payload:[1,2,3,4,5,6,7,9,14,20,21],per:[11,14,15],period:2,phone:15,phones_len:[15,23],pk_init:[20,23],pk_verifi:[20,23],pke:[1,2,20,23],pke_set:[2,23],plu:16,plug:22,plugin:22,point:[2,15,21],pointer:[14,15,21],polici:[0,1,2,7,20],port:14,posit:[14,15],possibl:22,pre:20,prefix:[19,20],prf:[20,23],prf_func:1,product:22,project:22,properti:10,propos:11,protect:5,proto:[2,7,14],protocol:[7,14,15,17,20],pseudo:[6,20],psk_init:[20,23],psk_verifi:[20,23],python:23,rais:1,rand:[1,2,6,20,23],rand_set:[2,23],random:[1,2,6,20],rang:22,rate:20,read:1,receiv:19,reiniti:15,relat:14,releas:[14,15],remain:[1,15],remov:[1,2,14,15],remove_attribut:[14,15,23],remove_bandwidth:[14,15,23],remove_connect:[14,23],remove_cs_srtp:[1,23],remove_email:[15,23],remove_format:[14,23],remove_payload:[1,23],remove_phon:[15,23],remove_tim:[15,23],remove_zon:[15,23],repeat:[15,17],replac:[1,14,15],replace_attribut:[14,15,23],replace_bandwidth:[14,15,23],replace_connect:[14,23],replace_cs_srtp:[1,23],replace_email:[15,23],replace_format:[14,23],replace_payload:[1,23],replace_phon:[15,23],replace_tim:[15,23],replace_zon:[15,23],repositori:22,repres:[14,15],represent:17,resembl:[15,21],reset:[11,17,18],resourc:[14,15],respond:20,result:[14,15,21],rfc:19,roc:[0,1],rollov:[0,1],rtcp:[14,19,21],rtpmap:[14,21],rule:20,salt:[2,4,20],salt_data:[2,4],salt_key_len:[20,23],salt_len:[2,4],schedul:[15,18],scheme:[15,21],sdp:[10,11,12,13,14,15,16,17,18,20,21],sdp_address_is_multicast:[21,23],sdp_bwtype_a:[19,23],sdp_bwtype_ct:[19,23],sdp_bwtype_ext_prefix:[19,23],sdp_bwtype_r:[19,23],sdp_bwtype_rr:[19,23],sdp_bwtype_tia:[19,23],sdp_make_keymgmt:[21,23],sdp_media_new:[21,23],sdp_media_set_media_from_cap:[21,23],sdp_message_as_uri:[21,23],sdp_message_new:[21,23],sdp_message_parse_buff:[21,23],sdp_message_parse_uri:[21,23],sdpattribut:[14,15,23,24],sdpbandwidth:[14,15,23,24],sdpconnect:[14,15,23,24],sdpkei:[14,15,23,24],sdpmedia:[15,21,23,24],sdpmessag:[21,23,24],sdporigin:[15,23,24],sdpresult:[10,11,12,14,15,17,18,20,21,23],sdptime:[15,23,24],sdpzone:[15,23,24],second:[11,14,15,17],secur:[0,1,2,7,8,20],self:[1,2,11,14,15,17,18],sender:[18,19,20],sent:14,sess_id:[15,16],sess_vers:[15,16],session:[1,11,15,16,17,18,20],session_nam:15,sessionnam:[15,21],set:[1,2,7,10,11,12,14,15,17,18,23],set_connect:[15,23],set_info:[1,23],set_inform:[14,15,23],set_kei:[14,15,23],set_media:[14,23],set_media_from_cap:[14,23],set_origin:[15,23],set_port_info:[14,23],set_proto:[14,23],set_session_nam:[15,23],set_uri:[15,23],set_vers:[15,23],sha:20,share:20,should:[2,4,14,15,21],sign:[20,23],signatur:20,size:[1,15,21],sourc:[1,2,10,11,12,14,15,17,18,21],sp_add_param:[2,23],sp_get_n_param:[2,23],sp_get_param:[2,23],sp_remove_param:[2,23],sp_set:[2,23],span:22,specif:[7,19,20],specifi:[1,8,11,14,15,17,18,20],spi:[2,20,23],spi_data:2,srtcp:[1,20],srtcp_enc:[20,23],srtp:[0,1,20],srtp_auth:[20,23],srtp_enc:[20,23],srtp_prefix_len:[20,23],ssrc:[0,1],stack:[14,15],start:[15,17,20,21],stdout:15,stop:[15,17],store:[14,15,21],str:[1,10,11,12,13,14,15,16,17,18,21],stream:[0,1,14],string:[6,14,15,16],structur:[1,3,22],sub:[1,2,4,20],subpayload:3,success:[1,2,15,20,21],support:[16,19],symbol:22,t_set:[2,23],tag:20,take:15,tek:[20,23],termin:[15,21],text:[14,15],tgk:[20,23],thi:[14,15,16,20,21],tia:19,time:[1,12,14,15,17,18,20],times_len:[15,23],timestamp:[1,2,9,20],timezon:20,titl:14,to_byt:[1,23],to_cap:[1,23],tool:[15,21],total:19,tracker:22,traffic:20,transport:[1,5,14,19,20],ts_valu:[1,2,9],ttl:[12,14,15,21],tupl:16,type:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22],typed_tim:[15,18],undo:[14,15],uninit:[14,15,23],uniqu:[16,20],uri:[15,21],url:[15,21],usag:20,use:1,used:[0,1,5,11,13,14,15,20],useful:22,user:[15,16],usernam:[15,16],using:20,utc:[1,20],val:[2,8],valid:[1,2,4,15,20],valu:[1,2,6,8,9,10,14,15,17,20,21],verfic:20,verif:20,verifi:1,version:[1,2,10,11,12,14,15,16,17,18,19,21],vf_data:2,vf_len:2,video:22,vt_data:2,want:22,well:22,when:[1,10,14,15,18,21],where:[15,21],which:[10,11,12,13,14,16,17,18],wide:22,width:[14,21],would:22,wrap:20,write:22,zone:[15,18],zones_len:[15,23]},titles:["GstSdp.MIKEYMapSRTP","GstSdp.MIKEYMessage","GstSdp.MIKEYPayload","GstSdp.MIKEYPayloadKEMAC","GstSdp.MIKEYPayloadKeyData","GstSdp.MIKEYPayloadPKE","GstSdp.MIKEYPayloadRAND","GstSdp.MIKEYPayloadSP","GstSdp.MIKEYPayloadSPParam","GstSdp.MIKEYPayloadT","GstSdp.SDPAttribute","GstSdp.SDPBandwidth","GstSdp.SDPConnection","GstSdp.SDPKey","GstSdp.SDPMedia","GstSdp.SDPMessage","GstSdp.SDPOrigin","GstSdp.SDPTime","GstSdp.SDPZone","Constants","Enums","Functions","GstSdp 1.0 (1.12.4.0)","Symbol Mapping","Structures"],titleterms:{"enum":20,"function":21,api:22,constant:19,detail:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],field:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],gstsdp:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,22],map:23,method:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],mikeymapsrtp:0,mikeymessag:1,mikeypayload:2,mikeypayloadkemac:3,mikeypayloadkeydata:4,mikeypayloadpk:5,mikeypayloadrand:6,mikeypayloadsp:7,mikeypayloadspparam:8,mikeypayloadt:9,sdpattribut:10,sdpbandwidth:11,sdpconnect:12,sdpkei:13,sdpmedia:14,sdpmessag:15,sdporigin:16,sdptime:17,sdpzone:18,structur:24,symbol:23}})