Search.setIndex({envversion:49,filenames:["callbacks","classes/DbVal","classes/Error","classes/ExtModule","classes/ExtModuleData","classes/ExtModuleFuncs","classes/Extension","classes/Extlang","classes/ExtlangDb","classes/Grandfathered","classes/GrandfatheredDb","classes/Iter","classes/IterTmpl","classes/Lang","classes/LangDb","classes/List","classes/Redundant","classes/RedundantDb","classes/Region","classes/RegionDb","classes/RelationDb","classes/Script","classes/ScriptDb","classes/String","classes/Tag","classes/Variant","classes/VariantDb","constants","enums","functions","index","mapping","structs"],objects:{"LangTag.Error":{"new":[2,4,1,""],clear:[2,3,1,""],is_set:[2,3,1,""],print_:[2,3,1,""],ref:[2,3,1,""],unref:[2,3,1,""]},"LangTag.ExtModule":{ref:[3,3,1,""],unref:[3,3,1,""]},"LangTag.ExtModuleData":{"new":[4,4,1,""],ref:[4,3,1,""],unref:[4,3,1,""]},"LangTag.Extension":{compare:[6,3,1,""],dump:[6,3,1,""],get_canonicalized_tag:[6,3,1,""],get_tag:[6,3,1,""],ref:[6,3,1,""],truncate:[6,3,1,""],unref:[6,3,1,""]},"LangTag.Extlang":{compare:[7,3,1,""],dump:[7,3,1,""],get_macro_language:[7,3,1,""],get_name:[7,3,1,""],get_preferred_tag:[7,3,1,""],get_prefix:[7,3,1,""],get_tag:[7,3,1,""],ref:[7,3,1,""],unref:[7,3,1,""]},"LangTag.ExtlangDb":{"new":[8,4,1,""],lookup:[8,3,1,""],ref:[8,3,1,""],unref:[8,3,1,""]},"LangTag.Grandfathered":{compare:[9,3,1,""],dump:[9,3,1,""],get_better_tag:[9,3,1,""],get_name:[9,3,1,""],get_preferred_tag:[9,3,1,""],get_tag:[9,3,1,""],ref:[9,3,1,""],unref:[9,3,1,""]},"LangTag.GrandfatheredDb":{"new":[10,4,1,""],lookup:[10,3,1,""],ref:[10,3,1,""],unref:[10,3,1,""]},"LangTag.Iter":{finish:[11,3,1,""],init:[11,4,1,""],next:[11,3,1,""],ref:[11,3,1,""],unref:[11,3,1,""]},"LangTag.Lang":{compare:[13,3,1,""],dump:[13,3,1,""],get_better_tag:[13,3,1,""],get_macro_language:[13,3,1,""],get_name:[13,3,1,""],get_preferred_tag:[13,3,1,""],get_scope:[13,3,1,""],get_suppress_script:[13,3,1,""],get_tag:[13,3,1,""],ref:[13,3,1,""],unref:[13,3,1,""]},"LangTag.LangDb":{"new":[14,4,1,""],lookup:[14,3,1,""],ref:[14,3,1,""],unref:[14,3,1,""]},"LangTag.List":{"delete":[15,3,1,""],"new":[15,4,1,""],append:[15,3,1,""],delete_link:[15,3,1,""],find:[15,3,1,""],find_custom:[15,3,1,""],first:[15,3,1,""],free:[15,4,1,""],last:[15,3,1,""],length:[15,3,1,""],next:[15,3,1,""],pop:[15,3,1,""],prepend:[15,3,1,""],previous:[15,3,1,""],ref:[15,3,1,""],remove:[15,3,1,""],sort:[15,3,1,""],unref:[15,3,1,""],value:[15,3,1,""]},"LangTag.Redundant":{compare:[16,3,1,""],dump:[16,3,1,""],get_better_tag:[16,3,1,""],get_name:[16,3,1,""],get_preferred_tag:[16,3,1,""],get_tag:[16,3,1,""],ref:[16,3,1,""],unref:[16,3,1,""]},"LangTag.RedundantDb":{"new":[17,4,1,""],lookup:[17,3,1,""],ref:[17,3,1,""],unref:[17,3,1,""]},"LangTag.Region":{compare:[18,3,1,""],dump:[18,3,1,""],get_better_tag:[18,3,1,""],get_name:[18,3,1,""],get_preferred_tag:[18,3,1,""],get_tag:[18,3,1,""],ref:[18,3,1,""],unref:[18,3,1,""]},"LangTag.RegionDb":{"new":[19,4,1,""],lookup:[19,3,1,""],ref:[19,3,1,""],unref:[19,3,1,""]},"LangTag.RelationDb":{"new":[20,4,1,""],lookup_lang_from_script:[20,3,1,""],lookup_script_from_lang:[20,3,1,""],ref:[20,3,1,""],unref:[20,3,1,""]},"LangTag.Script":{compare:[21,3,1,""],convert_to_modifier:[21,3,1,""],dump:[21,3,1,""],get_name:[21,3,1,""],get_tag:[21,3,1,""],ref:[21,3,1,""],unref:[21,3,1,""]},"LangTag.ScriptDb":{"new":[22,4,1,""],lookup:[22,3,1,""],ref:[22,3,1,""],unref:[22,3,1,""]},"LangTag.String":{"new":[23,4,1,""],append:[23,3,1,""],append_c:[23,3,1,""],at:[23,3,1,""],clear:[23,3,1,""],free:[23,3,1,""],length:[23,3,1,""],ref:[23,3,1,""],replace_c:[23,3,1,""],truncate:[23,3,1,""],unref:[23,3,1,""],value:[23,3,1,""]},"LangTag.Tag":{"new":[24,4,1,""],canonicalize:[24,3,1,""],canonicalize_in_extlang_form:[24,3,1,""],clear:[24,3,1,""],compare:[24,3,1,""],convert_from_locale:[24,4,1,""],convert_from_locale_string:[24,4,1,""],convert_to_locale:[24,3,1,""],copy:[24,3,1,""],dump:[24,3,1,""],get_extension:[24,3,1,""],get_extlang:[24,3,1,""],get_grandfathered:[24,3,1,""],get_language:[24,3,1,""],get_privateuse:[24,3,1,""],get_region:[24,3,1,""],get_script:[24,3,1,""],get_string:[24,3,1,""],get_string_with_filter:[24,3,1,""],get_variants:[24,3,1,""],lookup:[24,3,1,""],match:[24,3,1,""],parse:[24,3,1,""],parse_with_extra_token:[24,3,1,""],ref:[24,3,1,""],transform:[24,3,1,""],truncate:[24,3,1,""],unref:[24,3,1,""]},"LangTag.Variant":{compare:[25,3,1,""],dump:[25,3,1,""],get_better_tag:[25,3,1,""],get_name:[25,3,1,""],get_preferred_tag:[25,3,1,""],get_prefix:[25,3,1,""],get_tag:[25,3,1,""],ref:[25,3,1,""],unref:[25,3,1,""]},"LangTag.VariantDb":{"new":[26,4,1,""],lookup:[26,3,1,""],ref:[26,3,1,""],unref:[26,3,1,""]},LangTag:{CompareFunc:[0,0,1,""],CopyFunc:[0,0,1,""],DIR_SEPARATOR:[27,1,1,""],DIR_SEPARATOR_S:[27,1,1,""],DbVal:[1,2,1,""],DestroyFunc:[0,0,1,""],EXT_MODULE_VERSION:[27,1,1,""],Error:[2,2,1,""],ErrorType:[28,2,1,""],ExtModule:[3,2,1,""],ExtModuleData:[4,2,1,""],ExtModuleDataNewFunc:[0,0,1,""],ExtModuleFuncs:[5,2,1,""],ExtModuleGetFuncsFunc:[0,0,1,""],ExtModuleGetTagFunc:[0,0,1,""],ExtModuleParseFunc:[0,0,1,""],ExtModulePrecheckFunc:[0,0,1,""],ExtModuleSingletonFunc:[0,0,1,""],ExtModuleValidateFunc:[0,0,1,""],ExtModuleVersionFunc:[0,0,1,""],Extension:[6,2,1,""],Extlang:[7,2,1,""],ExtlangDb:[8,2,1,""],Grandfathered:[9,2,1,""],GrandfatheredDb:[10,2,1,""],Iter:[11,2,1,""],IterTmpl:[12,2,1,""],Lang:[13,2,1,""],LangDb:[14,2,1,""],List:[15,2,1,""],PATH_MAX:[27,1,1,""],Redundant:[16,2,1,""],RedundantDb:[17,2,1,""],Region:[18,2,1,""],RegionDb:[19,2,1,""],RelationDb:[20,2,1,""],SEARCHPATH_SEPARATOR:[27,1,1,""],SEARCHPATH_SEPARATOR_S:[27,1,1,""],Script:[21,2,1,""],ScriptDb:[22,2,1,""],String:[23,2,1,""],Tag:[24,2,1,""],TagFilter:[28,2,1,""],Variant:[25,2,1,""],VariantDb:[26,2,1,""],db_finalize:[29,0,1,""],db_get_datadir:[29,0,1,""],db_get_extlang:[29,0,1,""],db_get_grandfathered:[29,0,1,""],db_get_lang:[29,0,1,""],db_get_redundant:[29,0,1,""],db_get_region:[29,0,1,""],db_get_relation:[29,0,1,""],db_get_script:[29,0,1,""],db_get_variant:[29,0,1,""],db_initialize:[29,0,1,""],db_set_datadir:[29,0,1,""],db_set_val:[29,0,1,""],ext_modules_load:[29,0,1,""],ext_modules_unload:[29,0,1,""],iter_init:[29,0,1,""],list_free:[29,0,1,""],tag_convert_from_locale:[29,0,1,""],tag_convert_from_locale_string:[29,0,1,""]}},objnames:{"0":["py","function","Python function"],"1":["py","data","Python data"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"]},objtypes:{"0":"py:function","1":"py:data","2":"py:class","3":"py:method","4":"py:classmethod"},terms:{"byte":23,"class":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28],"const":15,"final":[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"function":[0,2,4,5,9,11,13,15,16,18,25],"int":[0,2,4,6,7,9,11,13,15,16,18,21,23,24,25],"new":[0,2,4,5,8,10,14,15,17,19,20,22,23,24,26,31],"return":[0,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],"static":27,"true":[0,2,6,7,9,13,16,18,21,23,24,25],"try":24,"while":[11,29],_my_module_data_t:4,abc:23,access:[1,4,5,30],accessor:[5,29],accord:[2,13,24],actual:23,adapt:11,add:[15,23],advanc:11,after:[15,23],against:24,align:4,all:[2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],alloc:[2,4,15,23],allow:[4,24,28],alreadi:29,also:23,ani:[2,11,24,25,29],any:24,anymor:[11,29],appear:0,append:[15,23,31],append_c:[23,31],applic:[2,15],appropri:[24,25],argument:15,assign:[7,13,25],associ:13,avail:[7,9,13,16,18,25],back:15,base:28,becom:11,been:11,befor:[11,15,29],better:[9,13,16,18,25],between:5,binari:[24,28],bitbucket:30,buffer:23,built:[0,27],calcul:23,call:[11,15,29],caller:23,canonic:[6,24,31],canonicalize_in_extlang_form:[24,31],charact:[0,5,23],check:[0,2,5],classmethod:[2,4,8,10,11,14,15,17,19,20,22,23,24,26],clean:[2,23],clear:[2,23,24,31],code:[7,13,19,28],collect:5,come:15,compar:[0,6,7,9,13,16,18,21,24,25,31],comparefunc:[0,15,31],comparison:15,compat:27,complet:24,contain:[2,6,7,9,13,15,16,18,20,21,23,24,25],content:4,continu:24,conveni:[9,13,16,18,25],convert:[21,24,29],convert_from_local:[24,31],convert_from_locale_str:[24,31],convert_to_local:[24,31],convert_to_modifi:[21,31],copi:[0,24,31],copyfunc:[0,31],correspond:20,count:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28],creat:[0,2,4,5,8,10,14,15,17,19,20,22,23,24,26],create_data:5,current:[23,24,29],data:[0,15,23,29],databas:[1,8,10,14,17,19,22,26],db_final:[29,31],db_get_datadir:[29,31],db_get_extlang:[29,31],db_get_grandfath:[29,31],db_get_lang:[29,31],db_get_redund:[29,31],db_get_region:[29,31],db_get_rel:[29,31],db_get_script:[29,31],db_get_vari:[29,31],db_initi:[29,31],db_set_datadir:[29,31],db_set_val:[29,31],deal:30,debian:30,debug:1,decreas:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],delet:[15,31],delete_link:[15,31],depend:30,deprec:[7,9,13,16,18,25],describ:30,descript:[1,4,5,7,9,13,16,18,21,25,30],desir:15,destroi:[0,4,15],destroyfunc:[0,4,15,31],differ:15,dir_separator:[27,31],dir_separator_s:[27,31],directli:[2,15],doe:29,drop:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],dummi:4,dump:[6,7,9,13,16,18,21,24,25,31],each:15,element:15,end:[11,15,23],ensur:27,equal:15,error:0,errortyp:[2,28,31],expand:23,ext_module_version:[0,27,31],ext_modules_load:[29,31],ext_modules_unload:[29,31],extend:[5,13],extens:0,extension:0,extlang:1,extlangdb:1,extmoduledata:0,extmoduledatanewfunc:[0,5,31],extmodulefunc:0,extmodulegetfuncsfunc:[0,31],extmodulegettagfunc:[0,5,31],extmoduleparsefunc:[0,5,31],extmoduleprecheckfunc:[0,5,31],extmodulesingletonfunc:[0,5,31],extmodulevalidatefunc:[0,5,31],extmoduleversionfunc:[0,31],fail:[24,29],fals:[0,2,6,7,9,11,13,16,18,21,23,24,25],featur:5,filter:[2,24],find:[15,31],find_custom:[15,31],finish:[11,29,31],first:[15,24,31],form:[7,13,24,25],found:15,free:[11,15,23,29,31],free_seg:23,freed:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],from:[15,23],func:15,gain:23,gener:6,get:[9,13,15,16,18,25],get_better_tag:[9,13,16,18,25,31],get_canonicalized_tag:[6,31],get_extens:[24,31],get_extlang:[24,31],get_grandfath:[24,31],get_languag:[24,31],get_macro_languag:[7,13,31],get_nam:[7,9,13,16,18,21,25,31],get_preferred_tag:[7,9,13,16,18,25,31],get_prefix:[7,25,31],get_privateus:[24,31],get_region:[24,31],get_scop:[13,31],get_script:[24,31],get_singleton:5,get_str:[24,31],get_string_with_filt:[24,28,31],get_suppress_script:[13,31],get_tag:[5,6,7,9,13,16,18,21,25,31],get_vari:[24,31],gir1:30,given:[15,28],glib:[28,30],gobject:30,grandfath:1,grandfathereddb:1,happen:23,head:15,homepag:30,http:30,identifi:30,implement:[0,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],includ:29,increas:[3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],indic:13,inform:[6,7,9,13,16,18,21,24,25],inherit:4,init:[11,31],initi:[11,23,29],initial:[11,24,29],inscreas:2,instanc:[0,1,4,5,8,10,14,17,19,20,22,23,24,26],interfac:30,intern:29,invalid:11,invok:[0,29],is_set:[2,31],isn:[11,29],iso:[7,13],iter_init:[29,31],itertmpl:11,keep:0,kei:[11,29],lang:[1,11],langdb:1,langtag:0,languag:[13,20,24,25,29,30],language_or_cod:19,last:[15,31],len:23,length:[15,23,31],liblangtag:30,librari:[27,28,30],like:4,link:15,link_:15,list_fre:[29,31],load:29,local:[21,24,29],locat:11,look:20,lookup:[8,10,14,17,19,22,24,26,31],lookup_lang_from_script:[20,31],lookup_script_from_lang:[20,31],lt_db_final:31,lt_db_get_datadir:31,lt_db_get_extlang:31,lt_db_get_grandfath:31,lt_db_get_lang:31,lt_db_get_redund:31,lt_db_get_region:31,lt_db_get_rel:31,lt_db_get_script:31,lt_db_get_vari:31,lt_db_initi:31,lt_db_set_datadir:31,lt_db_set_val:31,lt_dir_separator:31,lt_dir_separator_s:31,lt_err_any:2,lt_error_clear:31,lt_error_is_set:31,lt_error_new:31,lt_error_print:31,lt_error_ref:31,lt_error_set:[2,31],lt_error_unref:31,lt_ext_module_data_new:31,lt_ext_module_data_ref:31,lt_ext_module_data_unref:31,lt_ext_module_ref:31,lt_ext_module_unref:31,lt_ext_module_version:31,lt_ext_modules_load:31,lt_ext_modules_unload:31,lt_extension_compar:31,lt_extension_dump:31,lt_extension_get_canonicalized_tag:31,lt_extension_get_tag:31,lt_extension_ref:31,lt_extension_t:[5,29],lt_extension_trunc:31,lt_extension_unref:31,lt_extlang_compar:31,lt_extlang_db_lookup:31,lt_extlang_db_new:31,lt_extlang_db_ref:31,lt_extlang_db_unref:31,lt_extlang_dump:31,lt_extlang_get_macro_languag:31,lt_extlang_get_nam:31,lt_extlang_get_preferred_tag:31,lt_extlang_get_prefix:31,lt_extlang_get_tag:31,lt_extlang_ref:31,lt_extlang_unref:31,lt_grandfathered_compar:31,lt_grandfathered_db_lookup:31,lt_grandfathered_db_new:31,lt_grandfathered_db_ref:31,lt_grandfathered_db_unref:31,lt_grandfathered_dump:31,lt_grandfathered_get_better_tag:31,lt_grandfathered_get_nam:31,lt_grandfathered_get_preferred_tag:31,lt_grandfathered_get_tag:31,lt_grandfathered_ref:31,lt_grandfathered_unref:31,lt_iter_finish:[11,29,31],lt_iter_init:[11,29,31],lt_iter_next:[11,29,31],lt_iter_ref:31,lt_iter_unref:31,lt_lang_compar:31,lt_lang_db:[11,29],lt_lang_db_lookup:31,lt_lang_db_new:[11,29,31],lt_lang_db_ref:31,lt_lang_db_unref:31,lt_lang_dump:31,lt_lang_get_better_tag:31,lt_lang_get_macro_languag:31,lt_lang_get_nam:31,lt_lang_get_preferred_tag:31,lt_lang_get_scop:31,lt_lang_get_suppress_script:31,lt_lang_get_tag:31,lt_lang_ref:31,lt_lang_unref:31,lt_list_append:31,lt_list_delet:31,lt_list_delete_link:31,lt_list_find:31,lt_list_find_custom:31,lt_list_first:31,lt_list_fre:31,lt_list_last:31,lt_list_length:31,lt_list_new:31,lt_list_next:31,lt_list_pop:31,lt_list_prepend:31,lt_list_previ:31,lt_list_ref:31,lt_list_remov:31,lt_list_sort:31,lt_list_unref:31,lt_list_valu:31,lt_path_max:31,lt_redundant_compar:31,lt_redundant_db_lookup:31,lt_redundant_db_new:31,lt_redundant_db_ref:31,lt_redundant_db_unref:31,lt_redundant_dump:31,lt_redundant_get_better_tag:31,lt_redundant_get_nam:31,lt_redundant_get_preferred_tag:31,lt_redundant_get_tag:31,lt_redundant_ref:31,lt_redundant_unref:31,lt_region_compar:31,lt_region_db_lookup:31,lt_region_db_new:31,lt_region_db_ref:31,lt_region_db_unref:31,lt_region_dump:31,lt_region_get_better_tag:31,lt_region_get_nam:31,lt_region_get_preferred_tag:31,lt_region_get_tag:31,lt_region_ref:31,lt_region_unref:31,lt_relation_db_lookup_lang_from_script:31,lt_relation_db_lookup_script_from_lang:31,lt_relation_db_new:31,lt_relation_db_ref:31,lt_relation_db_unref:31,lt_script_compar:31,lt_script_convert_to_modifi:31,lt_script_db_lookup:31,lt_script_db_new:31,lt_script_db_ref:31,lt_script_db_unref:31,lt_script_dump:31,lt_script_get_nam:31,lt_script_get_tag:31,lt_script_ref:31,lt_script_unref:31,lt_searchpath_separator:31,lt_searchpath_separator_s:31,lt_string_append:31,lt_string_append_c:31,lt_string_append_filenam:31,lt_string_append_printf:31,lt_string_at:31,lt_string_clear:31,lt_string_fre:31,lt_string_length:31,lt_string_new:31,lt_string_ref:31,lt_string_replace_c:31,lt_string_trunc:31,lt_string_unref:31,lt_string_valu:31,lt_tag_canonic:31,lt_tag_canonicalize_in_extlang_form:31,lt_tag_clear:31,lt_tag_compar:31,lt_tag_convert_from_local:31,lt_tag_convert_from_locale_str:31,lt_tag_convert_to_local:31,lt_tag_copi:31,lt_tag_dump:31,lt_tag_filter_t:24,lt_tag_get_extens:31,lt_tag_get_extlang:31,lt_tag_get_grandfath:31,lt_tag_get_languag:31,lt_tag_get_privateus:31,lt_tag_get_region:31,lt_tag_get_script:31,lt_tag_get_str:31,lt_tag_get_string_with_filt:31,lt_tag_get_vari:31,lt_tag_lookup:31,lt_tag_match:31,lt_tag_new:31,lt_tag_pars:31,lt_tag_parse_with_extra_token:31,lt_tag_ref:31,lt_tag_transform:31,lt_tag_trunc:31,lt_tag_unref:31,lt_variant_compar:31,lt_variant_db_lookup:31,lt_variant_db_new:31,lt_variant_db_ref:31,lt_variant_db_unref:31,lt_variant_dump:31,lt_variant_get_better_tag:31,lt_variant_get_nam:31,lt_variant_get_preferred_tag:31,lt_variant_get_prefix:31,lt_variant_get_tag:31,lt_variant_ref:31,lt_variant_unref:31,ltcomparefunc:31,ltcopyfunc:31,ltdbval:31,ltdestroyfunc:31,lterror:31,lterrortyp:31,lterrorype_t:2,ltextension:31,ltextlang:[8,31],ltextlangdb:31,ltextmodul:31,ltextmoduledata:[4,31],ltextmoduledatanewfunc:31,ltextmodulefunc:31,ltextmodulegetfuncsfunc:31,ltextmodulegettagfunc:31,ltextmoduleparsefunc:31,ltextmoduleprecheckfunc:31,ltextmodulesingletonfunc:31,ltextmodulevalidatefunc:31,ltextmoduleversionfunc:31,ltgrandfath:[10,31],ltgrandfathereddb:31,ltiter:[11,29,31],ltitermpl_t:[11,29],ltitertmpl:31,ltlang:[14,31],ltlangdb:31,ltlist:31,ltpointer:[11,15,29],ltredund:[17,31],ltredundantdb:31,ltregion:[19,31],ltregiondb:31,ltrelationdb:31,ltscript:[22,31],ltscriptdb:31,ltstring:31,lttag:31,lttagfilt:31,ltvariant:[26,31],ltvariantdb:31,macrolanguag:[7,13],map:30,mark:[7,9,13,16,18,25],match:[24,31],meaning:7,meet:[8,10,14,17,19,22,24,26],member:4,memori:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],messag:2,modifi:21,modul:[0,5,27,29],module_get_func:0,module_get_vers:0,more:[15,24],much:24,must:[6,23],name:[1,4,5,7,8,9,10,13,14,16,17,18,21,22,25,26],necessari:23,need:[11,29],neg:[15,23],newli:[2,15],next:[11,15,31],node:15,none:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],now:11,number:[0,15,23],object:[0,1,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],obtain:[0,5,6,7,9,13,16,18,21,23,24,25],onli:[1,7,9,13,15,16,18,25,28],onto:23,opper:[11,29],org:30,other:25,otherwis:[0,2,6,7,8,9,10,13,14,16,17,18,19,21,22,24,25,26],out:2,outcom:28,output:[2,6,7,9,13,16,18,21,24,25],over:15,own:4,ownership:23,packag:30,paramet:[0,2,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],parent:[4,30],pars:[0,5,24,31],parse_tag:5,parse_with_extra_token:[24,31],particular:7,pass:15,path:29,path_max:[27,31],pattern:24,peek:1,perform:[11,29],placehold:1,pleas:24,point:11,pointer:[4,15],pop:[15,31],posit:[15,23],precheck_tag:5,prefer:[7,9,13,16,18,25],prefix:[7,25],prepend:[15,31],previou:[15,31],primari:13,print_:[2,31],prior:[0,5],privat:[2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],process:[0,29],project:30,protect:[2,15],provid:5,purpos:1,python:31,rang:24,reach:11,real:4,redund:1,redundantdb:1,ref:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,31],refer:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],region:1,regiondb:1,regist:[7,8,10,13,14,17,19,22,26],relat:1,relationdb:1,relationddb:20,remov:[15,31],replac:23,replace_c:[23,31],requir:0,result:[2,11],retriev:11,rfc:[24,30],runtim:27,same:[0,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],scope:13,script:[1,13,20],scriptdb:1,searchpath_separator:[27,31],searchpath_separator_s:[27,31],second:15,self:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26],seqnenc:7,sequenc:[24,25,28],set:[1,2,11,15,23],should:[15,23],shouldn:13,similar:15,singleton:[0,5],size:[4,23],someth:[11,29],sort:[15,31],standard:[6,7,9,13,16,18,21,24,25],start:15,sthre:1,store:[1,11,24],str:[0,6,7,8,9,10,13,14,16,17,18,19,21,22,23,24,25,26,29],string:[0,5,6,7,9,13,16,18,21],struct:[4,5],structur:[1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,30],subgtag:7,subtag:[0,5,7,8,13,14,18,21,22,24,25,26],successfulli:24,suitabl:25,suppli:15,support:0,suppos:[2,5,15],suppress:13,symbol:30,syntax:24,system:29,tag:[0,5,6,7,9,10,13,16,17,18,21],tag_convert_from_local:[29,31],tag_convert_from_locale_str:[29,31],tag_str:24,tagfilt:[28,31],tagoh:30,take:15,target:2,thei:15,them:1,thi:[0,1,2,4,6,7,9,11,13,15,16,18,23,25,27,28,29],though:15,tmpl:[11,29],transform:[24,31],truncat:[6,23,24,31],two:15,type:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],unavail:31,unchang:15,unload:29,unref:[2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,31],use:[2,15],val:[11,29],valid:[0,5,8,10,14,17,19,22,26],validate_tag:5,valu:[7,9,11,13,15,16,18,23,25,28,29,31],variabl:27,variant:[1,21,24],variantdb:1,variou:24,version:[0,27],well:23,when:[0,2,3,4,6,7,8,9,10,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,29],where:23,which:[13,15,23,30],wildcard:24,won:15,work:15,would:0},titles:["Callbacks","LangTag.DbVal","LangTag.Error","LangTag.ExtModule","LangTag.ExtModuleData","LangTag.ExtModuleFuncs","LangTag.Extension","LangTag.Extlang","LangTag.ExtlangDb","LangTag.Grandfathered","LangTag.GrandfatheredDb","LangTag.Iter","LangTag.IterTmpl","LangTag.Lang","LangTag.LangDb","LangTag.List","LangTag.Redundant","LangTag.RedundantDb","LangTag.Region","LangTag.RegionDb","LangTag.RelationDb","LangTag.Script","LangTag.ScriptDb","LangTag.String","LangTag.Tag","LangTag.Variant","LangTag.VariantDb","Constants","Enums","Functions","LangTag 0.6 (0.6.2)","Symbol Mapping","Structures"],titleterms:{"enum":28,"function":29,api:30,callback:0,constant:27,dbval:1,detail:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],error:2,extension:6,extlang:7,extlangdb:8,extmodul:3,extmoduledata:4,extmodulefunc:5,field:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],grandfath:9,grandfathereddb:10,iter:11,itertmpl:12,lang:13,langdb:14,langtag:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,30],list:15,map:31,method:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],redund:16,redundantdb:17,region:18,regiondb:19,relationdb:20,script:21,scriptdb:22,string:23,structur:32,symbol:31,tag:24,variant:25,variantdb:26}})