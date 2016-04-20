Search.setIndex({envversion:46,filenames:["class-structs/RTPBaseAudioPayloadClass","class-structs/RTPBaseDepayloadClass","class-structs/RTPBasePayloadClass","class-structs/index","classes/RTPBaseAudioPayload","classes/RTPBaseDepayload","classes/RTPBasePayload","classes/index","constants","enums","flags","functions","hierarchy","index","mapping","structs/RTCPBuffer","structs/RTCPPacket","structs/RTPBuffer","structs/RTPPayloadInfo","structs/index"],objects:{"GstRtp.RTCPBuffer":{"new":[15,2,1,""],add_packet:[15,1,1,""],get_first_packet:[15,1,1,""],get_packet_count:[15,1,1,""],new_copy_data:[15,2,1,""],new_take_data:[15,2,1,""],unmap:[15,1,1,""],validate:[15,2,1,""],validate_data:[15,2,1,""],validate_data_reduced:[15,2,1,""],validate_reduced:[15,2,1,""]},"GstRtp.RTCPFBType":{FB_TYPE_INVALID:[9,3,1,""],PSFB_TYPE_AFB:[9,3,1,""],PSFB_TYPE_FIR:[9,3,1,""],PSFB_TYPE_PLI:[9,3,1,""],PSFB_TYPE_RPSI:[9,3,1,""],PSFB_TYPE_SLI:[9,3,1,""],PSFB_TYPE_TSTN:[9,3,1,""],PSFB_TYPE_TSTR:[9,3,1,""],PSFB_TYPE_VBCN:[9,3,1,""],RTPFB_TYPE_NACK:[9,3,1,""],RTPFB_TYPE_RTCP_SR_REQ:[9,3,1,""],RTPFB_TYPE_TMMBN:[9,3,1,""],RTPFB_TYPE_TMMBR:[9,3,1,""]},"GstRtp.RTCPPacket":{add_rb:[16,1,1,""],bye_add_ssrc:[16,1,1,""],bye_add_ssrcs:[16,1,1,""],bye_get_nth_ssrc:[16,1,1,""],bye_get_reason:[16,1,1,""],bye_get_reason_len:[16,1,1,""],bye_get_ssrc_count:[16,1,1,""],bye_set_reason:[16,1,1,""],fb_get_fci:[16,1,1,""],fb_get_fci_length:[16,1,1,""],fb_get_media_ssrc:[16,1,1,""],fb_get_sender_ssrc:[16,1,1,""],fb_get_type:[16,1,1,""],fb_set_fci_length:[16,1,1,""],fb_set_media_ssrc:[16,1,1,""],fb_set_sender_ssrc:[16,1,1,""],fb_set_type:[16,1,1,""],get_count:[16,1,1,""],get_length:[16,1,1,""],get_padding:[16,1,1,""],get_rb:[16,1,1,""],get_rb_count:[16,1,1,""],get_type:[16,1,1,""],move_to_next:[16,1,1,""],remove:[16,1,1,""],rr_get_ssrc:[16,1,1,""],rr_set_ssrc:[16,1,1,""],sdes_add_entry:[16,1,1,""],sdes_add_item:[16,1,1,""],sdes_copy_entry:[16,1,1,""],sdes_first_entry:[16,1,1,""],sdes_first_item:[16,1,1,""],sdes_get_entry:[16,1,1,""],sdes_get_item_count:[16,1,1,""],sdes_get_ssrc:[16,1,1,""],sdes_next_entry:[16,1,1,""],sdes_next_item:[16,1,1,""],set_rb:[16,1,1,""],sr_get_sender_info:[16,1,1,""],sr_set_sender_info:[16,1,1,""]},"GstRtp.RTCPSDESType":{CNAME:[9,3,1,""],EMAIL:[9,3,1,""],END:[9,3,1,""],INVALID:[9,3,1,""],LOC:[9,3,1,""],NAME:[9,3,1,""],NOTE:[9,3,1,""],PHONE:[9,3,1,""],PRIV:[9,3,1,""],TOOL:[9,3,1,""]},"GstRtp.RTCPType":{APP:[9,3,1,""],BYE:[9,3,1,""],INVALID:[9,3,1,""],PSFB:[9,3,1,""],RR:[9,3,1,""],RTPFB:[9,3,1,""],SDES:[9,3,1,""],SR:[9,3,1,""]},"GstRtp.RTPBaseAudioPayload":{flush:[4,1,1,""],get_adapter:[4,1,1,""],push:[4,1,1,""],set_frame_based:[4,1,1,""],set_frame_options:[4,1,1,""],set_sample_based:[4,1,1,""],set_sample_options:[4,1,1,""],set_samplebits_options:[4,1,1,""]},"GstRtp.RTPBaseAudioPayload.props":{buffer_list:[4,4,1,""]},"GstRtp.RTPBaseDepayload":{do_handle_event:[5,1,1,""],do_packet_lost:[5,1,1,""],do_process:[5,1,1,""],do_process_rtp_packet:[5,1,1,""],do_set_caps:[5,1,1,""],push:[5,1,1,""],push_list:[5,1,1,""]},"GstRtp.RTPBaseDepayload.props":{stats:[5,4,1,""]},"GstRtp.RTPBasePayload":{do_get_caps:[6,1,1,""],do_handle_buffer:[6,1,1,""],do_query:[6,1,1,""],do_set_caps:[6,1,1,""],do_sink_event:[6,1,1,""],do_src_event:[6,1,1,""],is_filled:[6,1,1,""],push:[6,1,1,""],push_list:[6,1,1,""],set_options:[6,1,1,""]},"GstRtp.RTPBasePayload.props":{max_ptime:[6,4,1,""],min_ptime:[6,4,1,""],mtu:[6,4,1,""],perfect_rtptime:[6,4,1,""],pt:[6,4,1,""],ptime_multiple:[6,4,1,""],seqnum:[6,4,1,""],seqnum_offset:[6,4,1,""],ssrc:[6,4,1,""],stats:[6,4,1,""],timestamp:[6,4,1,""],timestamp_offset:[6,4,1,""]},"GstRtp.RTPBuffer":{add_extension_onebyte_header:[17,1,1,""],add_extension_twobytes_header:[17,1,1,""],allocate_data:[17,2,1,""],calc_header_len:[17,2,1,""],calc_packet_len:[17,2,1,""],calc_payload_len:[17,2,1,""],compare_seqnum:[17,2,1,""],default_clock_rate:[17,2,1,""],ext_timestamp:[17,2,1,""],get_csrc:[17,1,1,""],get_csrc_count:[17,1,1,""],get_extension:[17,1,1,""],get_extension_data:[17,1,1,""],get_extension_onebyte_header:[17,1,1,""],get_extension_twobytes_header:[17,1,1,""],get_header_len:[17,1,1,""],get_marker:[17,1,1,""],get_packet_len:[17,1,1,""],get_padding:[17,1,1,""],get_payload:[17,1,1,""],get_payload_buffer:[17,1,1,""],get_payload_len:[17,1,1,""],get_payload_subbuffer:[17,1,1,""],get_payload_type:[17,1,1,""],get_seq:[17,1,1,""],get_ssrc:[17,1,1,""],get_timestamp:[17,1,1,""],get_version:[17,1,1,""],new_allocate:[17,2,1,""],new_allocate_len:[17,2,1,""],new_copy_data:[17,2,1,""],new_take_data:[17,2,1,""],pad_to:[17,1,1,""],set_csrc:[17,1,1,""],set_extension:[17,1,1,""],set_extension_data:[17,1,1,""],set_marker:[17,1,1,""],set_packet_len:[17,1,1,""],set_padding:[17,1,1,""],set_payload_type:[17,1,1,""],set_seq:[17,1,1,""],set_ssrc:[17,1,1,""],set_timestamp:[17,1,1,""],set_version:[17,1,1,""],unmap:[17,1,1,""]},"GstRtp.RTPBufferMapFlags":{LAST:[10,3,1,""],SKIP_PADDING:[10,3,1,""]},"GstRtp.RTPPayload":{"1016":[9,3,1,""],"_1016":[9,3,1,""],CELLB:[9,3,1,""],CN:[9,3,1,""],DVI4_11025:[9,3,1,""],DVI4_16000:[9,3,1,""],DVI4_22050:[9,3,1,""],DVI4_8000:[9,3,1,""],G721:[9,3,1,""],G722:[9,3,1,""],G723:[9,3,1,""],G728:[9,3,1,""],G729:[9,3,1,""],GSM:[9,3,1,""],H261:[9,3,1,""],H263:[9,3,1,""],JPEG:[9,3,1,""],L16_MONO:[9,3,1,""],L16_STEREO:[9,3,1,""],LPC:[9,3,1,""],MP2T:[9,3,1,""],MPA:[9,3,1,""],MPV:[9,3,1,""],NV:[9,3,1,""],PCMA:[9,3,1,""],PCMU:[9,3,1,""],QCELP:[9,3,1,""]},"GstRtp.RTPPayloadInfo":{for_name:[18,2,1,""],for_pt:[18,2,1,""]},"GstRtp.RTPProfile":{AVP:[9,3,1,""],AVPF:[9,3,1,""],SAVP:[9,3,1,""],SAVPF:[9,3,1,""],UNKNOWN:[9,3,1,""]},GstRtp:{RTCPBuffer:[15,0,1,""],RTCPFBType:[9,0,1,""],RTCPPacket:[16,0,1,""],RTCPSDESType:[9,0,1,""],RTCPType:[9,0,1,""],RTCP_MAX_BYE_SSRC_COUNT:[8,4,1,""],RTCP_MAX_RB_COUNT:[8,4,1,""],RTCP_MAX_SDES:[8,4,1,""],RTCP_MAX_SDES_ITEM_COUNT:[8,4,1,""],RTCP_REDUCED_SIZE_VALID_MASK:[8,4,1,""],RTCP_VALID_MASK:[8,4,1,""],RTCP_VALID_VALUE:[8,4,1,""],RTCP_VERSION:[8,4,1,""],RTPBaseAudioPayload:[4,0,1,""],RTPBaseAudioPayloadClass:[0,0,1,""],RTPBaseDepayload:[5,0,1,""],RTPBaseDepayloadClass:[1,0,1,""],RTPBasePayload:[6,0,1,""],RTPBasePayloadClass:[2,0,1,""],RTPBuffer:[17,0,1,""],RTPBufferMapFlags:[10,0,1,""],RTPPayload:[9,0,1,""],RTPPayloadInfo:[18,0,1,""],RTPProfile:[9,0,1,""],RTP_HDREXT_BASE:[8,4,1,""],RTP_HDREXT_NTP_56:[8,4,1,""],RTP_HDREXT_NTP_56_SIZE:[8,4,1,""],RTP_HDREXT_NTP_64:[8,4,1,""],RTP_HDREXT_NTP_64_SIZE:[8,4,1,""],RTP_PAYLOAD_1016_STRING:[8,4,1,""],RTP_PAYLOAD_CELLB_STRING:[8,4,1,""],RTP_PAYLOAD_CN_STRING:[8,4,1,""],RTP_PAYLOAD_DVI4_11025_STRING:[8,4,1,""],RTP_PAYLOAD_DVI4_16000_STRING:[8,4,1,""],RTP_PAYLOAD_DVI4_22050_STRING:[8,4,1,""],RTP_PAYLOAD_DVI4_8000_STRING:[8,4,1,""],RTP_PAYLOAD_DYNAMIC_STRING:[8,4,1,""],RTP_PAYLOAD_G721_STRING:[8,4,1,""],RTP_PAYLOAD_G722_STRING:[8,4,1,""],RTP_PAYLOAD_G723_53:[8,4,1,""],RTP_PAYLOAD_G723_53_STRING:[8,4,1,""],RTP_PAYLOAD_G723_63:[8,4,1,""],RTP_PAYLOAD_G723_63_STRING:[8,4,1,""],RTP_PAYLOAD_G723_STRING:[8,4,1,""],RTP_PAYLOAD_G728_STRING:[8,4,1,""],RTP_PAYLOAD_G729_STRING:[8,4,1,""],RTP_PAYLOAD_GSM_STRING:[8,4,1,""],RTP_PAYLOAD_H261_STRING:[8,4,1,""],RTP_PAYLOAD_H263_STRING:[8,4,1,""],RTP_PAYLOAD_JPEG_STRING:[8,4,1,""],RTP_PAYLOAD_L16_MONO_STRING:[8,4,1,""],RTP_PAYLOAD_L16_STEREO_STRING:[8,4,1,""],RTP_PAYLOAD_LPC_STRING:[8,4,1,""],RTP_PAYLOAD_MP2T_STRING:[8,4,1,""],RTP_PAYLOAD_MPA_STRING:[8,4,1,""],RTP_PAYLOAD_MPV_STRING:[8,4,1,""],RTP_PAYLOAD_NV_STRING:[8,4,1,""],RTP_PAYLOAD_PCMA_STRING:[8,4,1,""],RTP_PAYLOAD_PCMU_STRING:[8,4,1,""],RTP_PAYLOAD_QCELP_STRING:[8,4,1,""],RTP_PAYLOAD_TS41:[8,4,1,""],RTP_PAYLOAD_TS41_STRING:[8,4,1,""],RTP_PAYLOAD_TS48:[8,4,1,""],RTP_PAYLOAD_TS48_STRING:[8,4,1,""],RTP_VERSION:[8,4,1,""],rtcp_buffer_map:[11,5,1,""],rtcp_buffer_new:[11,5,1,""],rtcp_buffer_new_copy_data:[11,5,1,""],rtcp_buffer_new_take_data:[11,5,1,""],rtcp_buffer_validate:[11,5,1,""],rtcp_buffer_validate_data:[11,5,1,""],rtcp_buffer_validate_data_reduced:[11,5,1,""],rtcp_buffer_validate_reduced:[11,5,1,""],rtcp_ntp_to_unix:[11,5,1,""],rtcp_sdes_name_to_type:[11,5,1,""],rtcp_sdes_type_to_name:[11,5,1,""],rtcp_unix_to_ntp:[11,5,1,""],rtp_buffer_allocate_data:[11,5,1,""],rtp_buffer_calc_header_len:[11,5,1,""],rtp_buffer_calc_packet_len:[11,5,1,""],rtp_buffer_calc_payload_len:[11,5,1,""],rtp_buffer_compare_seqnum:[11,5,1,""],rtp_buffer_default_clock_rate:[11,5,1,""],rtp_buffer_ext_timestamp:[11,5,1,""],rtp_buffer_map:[11,5,1,""],rtp_buffer_new_allocate:[11,5,1,""],rtp_buffer_new_allocate_len:[11,5,1,""],rtp_buffer_new_copy_data:[11,5,1,""],rtp_buffer_new_take_data:[11,5,1,""],rtp_hdrext_get_ntp_56:[11,5,1,""],rtp_hdrext_get_ntp_64:[11,5,1,""],rtp_hdrext_set_ntp_56:[11,5,1,""],rtp_hdrext_set_ntp_64:[11,5,1,""],rtp_payload_info_for_name:[11,5,1,""],rtp_payload_info_for_pt:[11,5,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","staticmethod","Python static method"],"3":["py","attribute","Python attribute"],"4":["py","data","Python data"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:staticmethod","3":"py:attribute","4":"py:data","5":"py:function"},terms:{"_1016":[9,14],"_init":4,"abstract":[4,5,6],"byte":[4,8,11,15,16,17],"case":[4,6,11,17,18],"class":[0,1,2],"default":[4,5,6,11,17,18],"function":[4,5,6],"int":[4,5,6,11,15,16,17,18],"long":[11,17],"new":[4,9,10,11,14,15,16,17],"null":16,"public":16,"return":[4,5,6,11,15,16,17,18],"short":[4,5,6],"static":[11,15,17,18],"true":[6,11,15,16,17],"try":6,about:9,abov:6,accept:8,access:[0,1,2,4,5,6,15,16,17,18],accord:[11,15],accordingli:4,act:15,adapt:4,add:[6,15,16,17],add_extension_onebyte_head:[14,17],add_extension_twobytes_head:[14,17],add_packet:[14,15],add_rb:[14,16],addit:10,address:9,adjust:15,adpcm:9,after:[8,15,16],all:[4,6,11,15,16,17],alloc:[11,15,16,17],allocate_data:[14,17],allow:[8,16],alreadi:[5,17],also:[6,13],alwai:4,amount:[6,8,11,16,17],ani:[4,17],app:[9,14],appbit:17,append:17,appli:[5,8],applic:[5,6,9,15,17,18],arrai:[16,17],arriv:6,assign:9,atom:[5,6],attach:16,audio:[0,1,2,4,6,9,13,18],automat:4,avail:4,avoid:[9,17],avp:[9,14],avpf:[9,14],back:9,bandwidth:[11,18],base:[0,1,2,4,5,6,9,10,13],base_t:4,basic:[8,13],becaus:6,been:16,befor:[4,6,11,15],between:[11,17],bigger:[11,17],bind:17,bit:[4,8,9,11,16,17],bitrat:[4,18],block:[8,16],bool:[4,5,6,11,15,16,17],both:4,buffer:[4,5,6,10,11,15,16,17],buffer_list:4,bufferlist:[5,6],bug:13,bugzilla:13,bye:[8,9,14,16],bye_add_ssrc:[14,16],bye_get_nth_ssrc:[14,16],bye_get_reason:[14,16],bye_get_reason_len:[14,16],bye_get_ssrc_count:[14,16],bye_set_reason:[14,16],calc_header_len:[14,17],calc_packet_len:[14,17],calc_payload_len:[11,14,17],calcul:[4,11,17],call:[4,6,11,15,16,17],caller:11,can:[4,6,11,15,16,17],canon:9,cap:[5,6,15,17],care:[4,11,17],cellb:[9,14],cgi:13,cgit:13,channel:[9,18],check:[6,11,15,17],child:4,circumv:6,clock:[5,6,11,17,18],clock_rat:[5,6,18],close:6,cname:[9,14],codec:4,coder:9,collect:13,comfort:9,command:9,compar:[11,17],compare_seqnum:[14,17],compon:13,compound:[11,15],configur:6,conflict:9,consid:6,consist:15,constant:4,constantli:[11,17],construct:[11,15],contain:[4,5,6,11,13,15,16,17],content:[9,11],control:16,convert:11,copi:[11,15,16,17],correctli:17,correl:6,could:[11,15,16,17,18],count:[10,16,17],creat:[4,11,15,16,17],csrc:[11,17],csrc_count:[11,17],cumulul:16,current:[5,6,16],current_ssrc:6,custom:17,data:[4,6,11,15,16,17],declar:15,decod:13,default_clock_r:[14,17],defin:[9,10],delai:16,depayload:[4,5],depend:[11,13,17],deriv:4,describ:17,descript:[0,1,2,4,5,6,9,13,15,16,17,18],devel:13,did:[16,17],didn:5,differ:[9,11,17],disabl:6,divid:4,dlsr:16,do_get_cap:6,do_handle_buff:6,do_handle_ev:5,do_packet_lost:5,do_process:5,do_process_rtp_packet:5,do_queri:6,do_set_cap:[5,6],do_sink_ev:6,do_src_ev:6,doe:[4,16,17],don:6,done:[4,17],downstream:4,duract:4,durat:6,dvi4_11025:[9,14],dvi4_16000:[9,14],dvi4_22050:[9,14],dvi4_8000:[9,14],dynam:[6,11,18],each:[5,6],earli:9,easi:[15,17],eia:9,either:4,electron:9,element:[4,5,6,12,13,16],elementclass:[1,2,4,5,6],email:[9,14],empti:17,enabl:6,encod:[6,9,11,13,18],encoding_nam:[6,11,18],encoding_paramet:18,encrypt:10,end:[9,14,17],enough:[11,16,17],enter_bug:13,entri:[9,11,16,17],entry_offset:16,equal:[4,11,17],equival:11,even:[11,17],event:[5,6],exactli:[11,17],exce:6,exceed:[15,16],exclud:17,exist:[15,17],experiment:9,ext_timestamp:[14,17],extend:[11,16,17],extens:[9,11,17],exthighestseq:16,exttimestamp:[11,17],fals:[4,11,15,16,17],fb_get_fci:[14,16],fb_get_fci_length:[14,16],fb_get_media_ssrc:[14,16],fb_get_sender_ssrc:[14,16],fb_get_typ:[14,16],fb_set_fci_length:[14,16],fb_set_media_ssrc:[14,16],fb_set_sender_ssrc:[14,16],fb_set_typ:[14,16],fb_type_invalid:[9,14],fci:16,feedback:[9,16],fill:[4,17],filter:[6,13],find:[11,18],finish:15,first:[6,8,11,15,16,17],fix:[9,17],flag:[4,5,6],flowreturn:[4,5,6],flush:[4,14],follow:[5,6,17],for_nam:[14,18],for_pt:[14,18],forc:6,format:11,found:[11,18],fraction:[11,16],fractionlost:16,frame:4,frame_dur:4,frame_s:4,frederick:9,free:16,freed:[11,15,16,17],freedesktop:13,from:[4,6,11,16,17],full:[4,9,11,15],g721:[9,14],g722:[9,14],g723:[9,14],g728:[9,14],g729:[9,14],gener:[4,6,9],genum:9,geograph:9,get:[4,11,15,16,17,18],get_adapt:[4,14],get_cap:2,get_count:[14,16],get_csrc:[14,17],get_csrc_count:[14,17],get_extens:[14,17],get_extension_data:[14,17],get_extension_onebyte_head:[14,17],get_extension_twobytes_head:[14,17],get_first_packet:[14,15,16],get_header_len:[14,17],get_length:[14,16],get_mark:[14,17],get_packet_count:[14,15],get_packet_len:[14,17],get_pad:[14,16,17],get_payload:[14,17],get_payload_buff:[14,17],get_payload_len:[14,17],get_payload_subbuff:[14,17],get_payload_typ:[14,17],get_rb:[14,16],get_rb_count:[14,16],get_seq:[14,17],get_ssrc:[14,17],get_timestamp:[14,17],get_typ:[14,16],get_vers:[14,17],gflag:10,given:[11,16,17],glib:[16,17],gnome:13,gobject:[4,5,6,9,10,12],goodby:9,greater:16,groom:13,gsm:[9,14],gst:[1,2,4,5,6,11,12,13,15,17],gst_buffer_offset:6,gst_buffer_pt:6,gst_rtcp_buffer_add_packet:14,gst_rtcp_buffer_get_first_packet:14,gst_rtcp_buffer_get_packet_count:14,gst_rtcp_buffer_map:14,gst_rtcp_buffer_new:14,gst_rtcp_buffer_new_copy_data:14,gst_rtcp_buffer_new_take_data:14,gst_rtcp_buffer_unmap:14,gst_rtcp_buffer_valid:14,gst_rtcp_buffer_validate_data:14,gst_rtcp_buffer_validate_data_reduc:14,gst_rtcp_buffer_validate_reduc:14,gst_rtcp_fb_type_invalid:14,gst_rtcp_max_bye_ssrc_count:14,gst_rtcp_max_rb_count:14,gst_rtcp_max_sd:14,gst_rtcp_max_sdes_item_count:14,gst_rtcp_ntp_to_unix:14,gst_rtcp_packet_add_rb:14,gst_rtcp_packet_bye_add_ssrc:14,gst_rtcp_packet_bye_get_nth_ssrc:14,gst_rtcp_packet_bye_get_reason:14,gst_rtcp_packet_bye_get_reason_len:14,gst_rtcp_packet_bye_get_ssrc_count:14,gst_rtcp_packet_bye_set_reason:14,gst_rtcp_packet_fb_get_fci:14,gst_rtcp_packet_fb_get_fci_length:14,gst_rtcp_packet_fb_get_media_ssrc:14,gst_rtcp_packet_fb_get_sender_ssrc:14,gst_rtcp_packet_fb_get_typ:14,gst_rtcp_packet_fb_set_fci_length:14,gst_rtcp_packet_fb_set_media_ssrc:14,gst_rtcp_packet_fb_set_sender_ssrc:14,gst_rtcp_packet_fb_set_typ:14,gst_rtcp_packet_get_count:14,gst_rtcp_packet_get_length:14,gst_rtcp_packet_get_pad:14,gst_rtcp_packet_get_rb:14,gst_rtcp_packet_get_rb_count:14,gst_rtcp_packet_get_typ:14,gst_rtcp_packet_move_to_next:14,gst_rtcp_packet_remov:14,gst_rtcp_packet_rr_get_ssrc:14,gst_rtcp_packet_rr_set_ssrc:14,gst_rtcp_packet_sdes_add_entri:14,gst_rtcp_packet_sdes_add_item:14,gst_rtcp_packet_sdes_copy_entri:14,gst_rtcp_packet_sdes_first_entri:14,gst_rtcp_packet_sdes_first_item:14,gst_rtcp_packet_sdes_get_entri:14,gst_rtcp_packet_sdes_get_item_count:14,gst_rtcp_packet_sdes_get_ssrc:14,gst_rtcp_packet_sdes_next_entri:14,gst_rtcp_packet_sdes_next_item:14,gst_rtcp_packet_set_rb:14,gst_rtcp_packet_sr_get_sender_info:14,gst_rtcp_packet_sr_set_sender_info:14,gst_rtcp_psfb_type_afb:14,gst_rtcp_psfb_type_fir:14,gst_rtcp_psfb_type_pli:14,gst_rtcp_psfb_type_rpsi:14,gst_rtcp_psfb_type_sli:14,gst_rtcp_psfb_type_tstn:14,gst_rtcp_psfb_type_tstr:14,gst_rtcp_psfb_type_vbcn:14,gst_rtcp_reduced_size_valid_mask:14,gst_rtcp_rtpfb_type_nack:14,gst_rtcp_rtpfb_type_rtcp_sr_req:14,gst_rtcp_rtpfb_type_tmmbn:14,gst_rtcp_rtpfb_type_tmmbr:14,gst_rtcp_sdes_cnam:14,gst_rtcp_sdes_email:14,gst_rtcp_sdes_end:14,gst_rtcp_sdes_invalid:14,gst_rtcp_sdes_loc:14,gst_rtcp_sdes_nam:14,gst_rtcp_sdes_name_to_typ:14,gst_rtcp_sdes_not:14,gst_rtcp_sdes_phon:14,gst_rtcp_sdes_priv:14,gst_rtcp_sdes_tool:14,gst_rtcp_sdes_type_to_nam:14,gst_rtcp_type_app:14,gst_rtcp_type_by:14,gst_rtcp_type_invalid:14,gst_rtcp_type_psfb:14,gst_rtcp_type_rr:14,gst_rtcp_type_rtpfb:14,gst_rtcp_type_sd:14,gst_rtcp_type_sr:14,gst_rtcp_unix_to_ntp:14,gst_rtcp_valid_mask:14,gst_rtcp_valid_valu:14,gst_rtcp_version:14,gst_rtp_base_audio_payload_flush:14,gst_rtp_base_audio_payload_get_adapt:14,gst_rtp_base_audio_payload_push:14,gst_rtp_base_audio_payload_set_frame_bas:14,gst_rtp_base_audio_payload_set_frame_opt:14,gst_rtp_base_audio_payload_set_sample_bas:14,gst_rtp_base_audio_payload_set_sample_opt:14,gst_rtp_base_audio_payload_set_samplebits_opt:14,gst_rtp_base_depayload_push:14,gst_rtp_base_depayload_push_list:14,gst_rtp_base_payload_is_fil:14,gst_rtp_base_payload_push:14,gst_rtp_base_payload_push_list:14,gst_rtp_base_payload_set_opt:14,gst_rtp_base_payload_set_outcap:[6,14],gst_rtp_buffer_add_extension_onebyte_head:14,gst_rtp_buffer_add_extension_twobytes_head:14,gst_rtp_buffer_allocate_data:14,gst_rtp_buffer_calc_header_len:14,gst_rtp_buffer_calc_packet_len:14,gst_rtp_buffer_calc_payload_len:14,gst_rtp_buffer_compare_seqnum:14,gst_rtp_buffer_default_clock_r:14,gst_rtp_buffer_ext_timestamp:14,gst_rtp_buffer_get_csrc:14,gst_rtp_buffer_get_csrc_count:14,gst_rtp_buffer_get_extens:14,gst_rtp_buffer_get_extension_byt:14,gst_rtp_buffer_get_extension_data:14,gst_rtp_buffer_get_extension_onebyte_head:14,gst_rtp_buffer_get_extension_twobytes_head:14,gst_rtp_buffer_get_header_len:14,gst_rtp_buffer_get_mark:14,gst_rtp_buffer_get_packet_len:14,gst_rtp_buffer_get_pad:14,gst_rtp_buffer_get_payload:14,gst_rtp_buffer_get_payload_buff:14,gst_rtp_buffer_get_payload_byt:14,gst_rtp_buffer_get_payload_len:14,gst_rtp_buffer_get_payload_subbuff:14,gst_rtp_buffer_get_payload_typ:14,gst_rtp_buffer_get_seq:14,gst_rtp_buffer_get_ssrc:14,gst_rtp_buffer_get_timestamp:14,gst_rtp_buffer_get_vers:14,gst_rtp_buffer_map:14,gst_rtp_buffer_map_flag_last:14,gst_rtp_buffer_map_flag_skip_pad:14,gst_rtp_buffer_new_alloc:14,gst_rtp_buffer_new_allocate_len:14,gst_rtp_buffer_new_copy_data:14,gst_rtp_buffer_new_take_data:14,gst_rtp_buffer_pad_to:14,gst_rtp_buffer_set_csrc:14,gst_rtp_buffer_set_extens:14,gst_rtp_buffer_set_extension_data:14,gst_rtp_buffer_set_mark:14,gst_rtp_buffer_set_packet_len:14,gst_rtp_buffer_set_pad:14,gst_rtp_buffer_set_payload_typ:14,gst_rtp_buffer_set_seq:14,gst_rtp_buffer_set_ssrc:14,gst_rtp_buffer_set_timestamp:14,gst_rtp_buffer_set_vers:14,gst_rtp_buffer_unmap:14,gst_rtp_hdrext_bas:14,gst_rtp_hdrext_get_ntp_56:14,gst_rtp_hdrext_get_ntp_64:14,gst_rtp_hdrext_ntp_56:14,gst_rtp_hdrext_ntp_56_siz:14,gst_rtp_hdrext_ntp_64:14,gst_rtp_hdrext_ntp_64_siz:14,gst_rtp_hdrext_set_ntp_56:14,gst_rtp_hdrext_set_ntp_64:14,gst_rtp_payload_1016:14,gst_rtp_payload_1016_str:14,gst_rtp_payload_cellb:14,gst_rtp_payload_cellb_str:14,gst_rtp_payload_cn:14,gst_rtp_payload_cn_str:14,gst_rtp_payload_dvi4_11025:14,gst_rtp_payload_dvi4_11025_str:14,gst_rtp_payload_dvi4_16000:14,gst_rtp_payload_dvi4_16000_str:14,gst_rtp_payload_dvi4_22050:14,gst_rtp_payload_dvi4_22050_str:14,gst_rtp_payload_dvi4_8000:14,gst_rtp_payload_dvi4_8000_str:14,gst_rtp_payload_dynamic_str:14,gst_rtp_payload_g721:14,gst_rtp_payload_g721_str:14,gst_rtp_payload_g722:14,gst_rtp_payload_g722_str:14,gst_rtp_payload_g723:14,gst_rtp_payload_g723_53:14,gst_rtp_payload_g723_53_str:14,gst_rtp_payload_g723_63:14,gst_rtp_payload_g723_63_str:14,gst_rtp_payload_g723_str:14,gst_rtp_payload_g728:14,gst_rtp_payload_g728_str:14,gst_rtp_payload_g729:14,gst_rtp_payload_g729_str:14,gst_rtp_payload_gsm:14,gst_rtp_payload_gsm_str:14,gst_rtp_payload_h261:14,gst_rtp_payload_h261_str:14,gst_rtp_payload_h263:14,gst_rtp_payload_h263_str:14,gst_rtp_payload_info_for_nam:14,gst_rtp_payload_info_for_pt:14,gst_rtp_payload_jpeg:14,gst_rtp_payload_jpeg_str:14,gst_rtp_payload_l16_mono:14,gst_rtp_payload_l16_mono_str:14,gst_rtp_payload_l16_stereo:14,gst_rtp_payload_l16_stereo_str:14,gst_rtp_payload_lpc:14,gst_rtp_payload_lpc_str:14,gst_rtp_payload_mp2t:14,gst_rtp_payload_mp2t_str:14,gst_rtp_payload_mpa:14,gst_rtp_payload_mpa_str:14,gst_rtp_payload_mpv:14,gst_rtp_payload_mpv_str:14,gst_rtp_payload_nv:14,gst_rtp_payload_nv_str:14,gst_rtp_payload_pcma:14,gst_rtp_payload_pcma_str:14,gst_rtp_payload_pcmu:14,gst_rtp_payload_pcmu_str:14,gst_rtp_payload_qcelp:14,gst_rtp_payload_qcelp_str:14,gst_rtp_payload_ts41:14,gst_rtp_payload_ts41_str:14,gst_rtp_payload_ts48:14,gst_rtp_payload_ts48_str:14,gst_rtp_profile_avp:14,gst_rtp_profile_avpf:14,gst_rtp_profile_savp:14,gst_rtp_profile_savpf:14,gst_rtp_profile_unknown:14,gst_rtp_version:14,gstbase:[4,13],gstclocktim:4,gstreamer:13,gstrtcpbuffer:14,gstrtcpfbtype:14,gstrtcppacket:14,gstrtcpsdestyp:[11,14],gstrtcptype:14,gstrtpbaseaudiopayload:14,gstrtpbaseaudiopayloadclass:14,gstrtpbasedepayload:14,gstrtpbasedepayloadclass:14,gstrtpbasepayload:14,gstrtpbasepayloadclass:14,gstrtpbuffer:14,gstrtpbuffermapflag:14,gstrtpcbuffer:15,gstrtppayload:14,gstrtppayloadinfo:14,gstrtpprofil:14,h261:[9,14],h263:[9,14],had:17,handl:6,handle_buff:2,handle_ev:1,have:[5,11,15,17],hdrext:8,header:[4,6,11,17],helper:[13,15,17],hold:[11,17,18],homepag:13,host:17,html:13,http:[9,13],iana:9,idea:4,idx:17,ietf:8,ima:9,implement:16,in_:5,includ:[13,17],incom:5,increas:[11,17],increment:6,index:17,indic:9,info:[6,11,16,18],inform:[16,18],inherit:[4,5,6],initi:[15,16],initiallyunown:[4,5,6,12],input:6,insensitv:[11,18],instead:16,interarriv:16,intern:[4,17],intra:9,invalid:[9,14,16],is_fil:[6,14],iso:9,item:[8,11,15,16],item_count:16,item_offset:16,itu:9,jitter:16,jpeg:[9,14],kei:11,kwarg:[4,5,6],l16_mono:[9,14],l16_stereo:[9,14],languag:17,larg:[4,17],larger:[4,17],last:[4,5,6,10,14,16],law:9,layer:9,least:11,len:[11,15,16,17],length:[4,8,11,15,16,17],librari:13,like:16,limit:6,linear:9,list:[4,6,9,13,17],listinfo:13,loc:[9,14],locat:[9,11,17],loss:9,lost:16,lower:11,lpc:[9,14],lsr:16,made:[16,17],mai:[6,10],mail:[9,13],mailman:13,maintain:13,make:[11,15,17],map:[10,11,13],mapflag:11,mapinfo:[15,17],marker:17,mask:8,max:[4,6,15,16],max_ptim:6,maximum:[4,6,8,9,11,15,16],mean:[6,18],mecan:17,media:[6,9,11,16,18],memcpi:17,memori:[11,17],messag:[8,9,11,16,18],millisecond:4,min:[4,6],min_ptim:6,minimum:[4,6],minu:16,modifi:17,modul:[11,13,15],mono:9,more:[6,10,15,17],most:[11,17],mostli:[11,18],move:[15,16],move_to_next:[14,15,16],mp2t:[9,14],mpa:[9,14],mpeg:9,mpv:[9,14],mtu:[4,6,11,15,16],much:16,multipl:6,must:[4,6,11,16,17],nack:9,name:[0,1,2,4,5,6,9,11,14,15,16,17,18],nanosecond:11,necessarili:6,need:[4,17],need_newseg:5,neg:[11,17],network:6,new_alloc:[14,17],new_allocate_len:[14,17],new_copy_data:[14,15,17],new_take_data:[14,15,17],newli:[11,15,17],next:[15,16],nois:9,non:[11,15],none:[0,1,2,4,5,6,11,16,17,18],note:[9,14,15,16,17],notic:9,notif:9,npt:5,nth:[16,17],ntp:[8,11,16],ntptime:[11,16],number:[6,9,11,15,16,17,18],object:[1,2,4,5,6,11,12,15,17],objectclass:[4,5,6],octet:16,octet_count:16,off:9,offici:9,offset:[6,10,16,17],onli:4,open:11,option:[4,6],order:17,org:[9,13],other:[4,5,6,8,11,15,17],otherwis:17,out_buf:5,out_list:5,outgo:[5,6],overrid:4,ownership:[5,6,11,15,17],pack:4,packet:[4,6,8,9,11,15,16,17],packet_count:16,packet_len:[11,17],packet_lost:1,packetslost:16,pad:[5,6,8,10,11,16,17],pad_len:[11,17],pad_to:[14,17],pair:8,param:8,paramet:[4,5,6,9,11,15,16,17,18],parent:[0,1,2,5,13],parent_class:[0,1,2],pars:[15,16,17],pass:11,payload:[0,1,2,4,6,9,11,16,17,18],payload_len:[4,11,17],payload_typ:[11,17,18],pcm:9,pcma:[9,14],pcmu:[9,14],peer:[5,6],pend:4,per:4,perfect:6,perfect_rtptim:6,perform:[11,18],phone:[9,14],pictur:9,place:17,plai:5,playback:5,plug:13,plugin:13,point:[11,15,16,17],pointer:[15,16,17],posit:[11,17],possibl:[6,13],predefin:9,predict:9,present:[10,16,17],previou:[11,17],previous:17,priv:[9,11,14],privat:[9,11],process:[1,5,6],process_rtp_packet:1,product:13,profil:9,project:13,prop:[4,5,6],provid:[4,5,6],psfb:[9,14,16],psfb_type_afb:[9,14],psfb_type_fir:[9,14],psfb_type_pli:[9,14],psfb_type_rpsi:[9,14],psfb_type_sli:[9,14],psfb_type_tstn:[9,14],psfb_type_tstr:[9,14],psfb_type_vbcn:[9,14],ptime:[4,6],ptime_multipl:6,ptse:6,push:[4,5,6,14],push_list:[5,6,14],python:14,qcelp:[9,14],queri:[2,6],random:6,rang:13,rate:[5,6,9,11,17,18],rather:6,reach:16,read:[11,17],readabl:[4,5,6],reason:16,receiv:[8,9,16],recommend:9,reduc:[8,11,15],refer:[9,16],regular:[15,17],relat:[5,6],remov:[14,16,17],report:[8,9,16],repositori:13,request:[9,17],requir:[4,11],reserv:9,residu:4,respect:[11,15,17],result:[4,6,11,16],retriev:[5,6,15],rfc:[9,11,15,17],ron:9,rr_get_ssrc:[14,16],rr_set_ssrc:[14,16],rtcp:[8,9,11,15,16],rtcp_buffer_map:[11,14],rtcp_buffer_new:[11,14],rtcp_buffer_new_copy_data:[11,14],rtcp_buffer_new_take_data:[11,14],rtcp_buffer_valid:[11,14],rtcp_buffer_validate_data:[11,14],rtcp_buffer_validate_data_reduc:[11,14],rtcp_buffer_validate_reduc:[11,14],rtcp_max_bye_ssrc_count:[8,14,16],rtcp_max_rb_count:[8,14,16],rtcp_max_sd:[8,14],rtcp_max_sdes_item_count:[8,14],rtcp_ntp_to_unix:[11,14],rtcp_reduced_size_valid_mask:[8,14],rtcp_sdes_name_to_typ:[11,14],rtcp_sdes_type_to_nam:[11,14],rtcp_unix_to_ntp:[11,14],rtcp_valid_mask:[8,14],rtcp_valid_valu:[8,14],rtcp_version:[8,14],rtcpbuffer:[11,14],rtcpfbtype:[9,14,16],rtcppacket:[14,15],rtcpsdestyp:[9,11,14,16],rtcptype:[9,14,15,16],rtp:[0,1,2,4,5,6,8,9,10,11,16,17],rtp_buffer:5,rtp_buffer_allocate_data:[11,14],rtp_buffer_calc_header_len:[11,14],rtp_buffer_calc_packet_len:[11,14],rtp_buffer_calc_payload_len:[11,14],rtp_buffer_compare_seqnum:[11,14],rtp_buffer_default_clock_r:[11,14],rtp_buffer_ext_timestamp:[11,14],rtp_buffer_map:[11,14],rtp_buffer_new_alloc:[11,14],rtp_buffer_new_allocate_len:[11,14],rtp_buffer_new_copy_data:[11,14],rtp_buffer_new_take_data:[11,14],rtp_hdrext_bas:[8,14],rtp_hdrext_get_ntp_56:[11,14],rtp_hdrext_get_ntp_64:[11,14],rtp_hdrext_ntp_56:[8,14],rtp_hdrext_ntp_56_siz:[8,11,14],rtp_hdrext_ntp_64:[8,14],rtp_hdrext_ntp_64_siz:[8,11,14],rtp_hdrext_set_ntp_56:[11,14],rtp_hdrext_set_ntp_64:[11,14],rtp_payload_1016_str:[8,14],rtp_payload_cellb_str:[8,14],rtp_payload_cn_str:[8,14],rtp_payload_dvi4_11025_str:[8,14],rtp_payload_dvi4_16000_str:[8,14],rtp_payload_dvi4_22050_str:[8,14],rtp_payload_dvi4_8000_str:[8,14],rtp_payload_dynamic_str:[8,14],rtp_payload_g721_str:[8,14],rtp_payload_g722_str:[8,14],rtp_payload_g723_53:[8,14],rtp_payload_g723_53_str:[8,14],rtp_payload_g723_63:[8,14],rtp_payload_g723_63_str:[8,14],rtp_payload_g723_str:[8,14],rtp_payload_g728_str:[8,14],rtp_payload_g729_str:[8,14],rtp_payload_gsm_str:[8,14],rtp_payload_h261_str:[8,14],rtp_payload_h263_str:[8,14],rtp_payload_info_for_nam:[11,14],rtp_payload_info_for_pt:[11,14],rtp_payload_jpeg_str:[8,14],rtp_payload_l16_mono_str:[8,14],rtp_payload_l16_stereo_str:[8,14],rtp_payload_lpc_str:[8,14],rtp_payload_mp2t_str:[8,14],rtp_payload_mpa_str:[8,14],rtp_payload_mpv_str:[8,14],rtp_payload_nv_str:[8,14],rtp_payload_pcma_str:[8,14],rtp_payload_pcmu_str:[8,14],rtp_payload_qcelp_str:[8,14],rtp_payload_ts41:[8,14],rtp_payload_ts41_str:[8,14],rtp_payload_ts48:[8,14],rtp_payload_ts48_str:[8,14],rtp_version:[8,14],rtpbasepayload:4,rtpbasepayloadclass:0,rtpbuffer:[5,10,11,14],rtpbuffermapflag:[10,14],rtpfb:[9,14,16],rtpfb_type_nack:[9,14],rtpfb_type_rtcp_sr_req:[9,14],rtpfb_type_tmmbn:[9,14],rtpfb_type_tmmbr:[9,14],rtppayload:[9,14],rtppayloadinfo:[11,14],rtpprofil:[9,14],rtptime:[6,16],run:[5,6],sai:9,same:6,sampl:4,sample_s:4,savp:[9,14],savpf:[9,14],scale:5,sde:[8,9,11,14,16],sdes_add_entri:[14,16],sdes_add_item:[14,16],sdes_copy_entri:[14,16],sdes_first_entri:[14,16],sdes_first_item:[14,16],sdes_get_entri:[14,16],sdes_get_item_count:[14,16],sdes_get_ssrc:[14,16],sdes_next_entri:[14,16],sdes_next_item:[14,16],search:[11,18],second:11,secur:9,see:9,seen:5,segment:[5,6],segnum2:[11,17],select:9,self:[5,15,16,17],sender:[9,16],sent:4,seq:17,seqnum1:[11,17],seqnum2:[11,17],seqnum:[5,6],seqnum_bas:6,seqnum_offset:6,sequenc:[6,11,16,17],set:[4,6,11,15,16,17],set_cap:[1,2],set_csrc:[14,17],set_extens:[14,17],set_extension_data:[14,17],set_frame_bas:[4,14],set_frame_opt:[4,14],set_mark:[14,17],set_opt:[6,14],set_packet_len:[14,17],set_pad:[14,17],set_payload_typ:[14,17],set_rb:[14,16],set_sample_bas:[4,14],set_sample_opt:[4,14],set_samplebits_opt:[4,14],set_seq:[14,17],set_ssrc:[14,17],set_timestamp:[14,17],set_vers:[14,17],shadow:14,should:[11,17],similar:17,sinc:[4,11,16],sink_ev:2,sinkpad:[5,6],size:[4,6,8,11,15,16,17],skip:[10,17],skip_pad:[10,14],slice:9,smaller:[4,11,17],sourc:[4,5,6,9,11,15,16,17,18],space:16,span:13,spatial:9,specif:[4,9,17],specifi:[11,17,18],speech:9,speed:5,sr_get_sender_info:[14,16],sr_set_sender_info:[14,16],src_event:2,srcpad:[5,6],ssrc:[6,8,16,17],stabl:15,stack:16,standard:9,start:[5,17],stat:[5,6],state:[5,6,11,17],statist:[5,6],stereo:9,stop:5,store:[4,11,16],str:[6,11,16,18],stream:[5,6,9],string:[11,16],struct:[4,5,6],style:17,subbuff:17,subclass:[4,5,6],success:11,suitabl:17,support:[4,8,11,15],sure:[11,17],symbol:13,synchroiz:[5,6],synchron:9,take:[4,5,6,11,17],tell:4,tempor:9,temporari:9,termin:16,text:[8,16,18],than:[6,8,11,16,17],thei:[11,17],them:8,therefor:[5,6,17],thi:[4,5,6,11,15,16,17,18],tia:9,time:[4,5,6,11,16],timestamp:[4,5,6,11,17],timestamp_offset:6,tool:[9,14],total:[11,15,17],tracker:13,trade:9,transfer:[9,11,15,17],transport:9,ts_base:6,ts_offset:6,two:[8,11,17],type:[0,1,2,4,5,6,8,9,11,13,15,16,17,18],type_doubl:5,type_uint64:[5,6],type_uint:[5,6],typic:[6,11,15,17],unassign:9,unavail:14,unchang:17,undefin:[11,17],unix:11,unixtim:11,unknown:[9,14,18],unlimit:6,unmap:[14,15,17],unref:[11,15,17],unrel:6,updat:[6,11,15,17],upper:11,urn:8,usag:[4,16,17],user:9,usual:[4,15,18],utf8:16,valid:[8,10,11,14,15,16,17],validate_data:[11,14,15],validate_data_reduc:[14,15],validate_reduc:[11,14,15],valu:[4,5,6,8,11,16,17],variabl:[4,18],variou:[5,6],version:[8,9,10,11,15,17],video:[6,9,13,18],visual:9,wai:[11,18],want:13,wave:9,well:[11,13,15],were:16,when:[5,6,10,11,15,16,17,18],where:[6,10,11,17],which:6,wide:13,word:[16,17],wordlen:16,work:[4,17],would:[6,13],wraparound:[11,17],writabl:[4,6,11,17],write:[11,13],www:9,yet:15,you:15,your:4,zero:17},titles:["GstRtp.RTPBaseAudioPayloadClass","GstRtp.RTPBaseDepayloadClass","GstRtp.RTPBasePayloadClass","Class Structures","GstRtp.RTPBaseAudioPayload","GstRtp.RTPBaseDepayload","GstRtp.RTPBasePayload","Classes","Constants","Enums","Flags","Functions","Hierarchy","GstRtp 1.0 (1.6.3.0)","Symbol Mapping","GstRtp.RTCPBuffer","GstRtp.RTCPPacket","GstRtp.RTPBuffer","GstRtp.RTPPayloadInfo","Structures"],titleterms:{"class":[3,4,5,6,7],"enum":9,"function":11,api:13,constant:8,detail:[0,1,2,4,5,6,8,9,10,11,15,16,17,18],field:[0,1,2,4,5,6,15,16,17,18],flag:10,gstrtp:[0,1,2,4,5,6,13,15,16,17,18],hierarchi:12,map:14,method:[0,1,2,4,5,6,15,16,17,18],properti:[4,5,6],rtcpbuffer:15,rtcppacket:16,rtpbaseaudiopayload:4,rtpbaseaudiopayloadclass:0,rtpbasedepayload:5,rtpbasedepayloadclass:1,rtpbasepayload:6,rtpbasepayloadclass:2,rtpbuffer:17,rtppayloadinfo:18,signal:[4,5,6],structur:[3,19],symbol:14,virtual:[4,5,6]}})