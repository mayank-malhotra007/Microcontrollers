/*!CK:2130982129!*//*1460387204,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ur8cT"]); }

__d("EmbeddedPostPluginActions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"};},null);
__d("EmbeddedPostPluginActionTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CLICK:"click"};},null);
__d("FBFeedLocations",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,SPACES_FEED:41,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65,FUNDRAISER_PAGE:66,EXPLORE_FEED:67,CRT:68,REVIEWS_FEED:69,VIDEO_HOME_CHANNEL:70,NEWS:71,TIMELINE_FRIENDSHIP:72,SAVED_REMINDERS:73,PSYM:74,ADMIN_FEED:75,CAMPFIRE_NOTE:76,PAGES_CONTEXT_CARD:77,ACTIVITY_LOG:78,WALL_POST_REPORT:79,TIMELINE_BREAKUP:80,POLITICIANS_FEED:81,PRODUCT_DETAILS:82,SPORTS_PLAY_FEED:83,GROUP_TOP_STORIES:84,WATCH_AND_SCROLL:85,PAGE_TIMELINE_PERMALINK:86,OFFERS_WALLET:87,STORYSET_FEED:88};},null);
__d("VideoPlayerReason",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={AUTOPLAY:"autoplay_initiated",USER:"user_initiated",PAGE_VISIBILITY:"page_visibility_initiated",SEEK:"seek_initiated",LOOP:"loop_initiated",EMBEDDED_VIDEO_API:"embedded_video_api_initiated",CONNECTION:"host-connection-error",VIDEO_DATA_REPLACED:"video_data_replaced",VOD_NOT_READY:"vod_not_ready",VIDEO_DATA_SWITCH:"video_data_switch",FALLBACK_MODE:"fallback_mode"};},null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={addTrackingToken:function(i,j){i.setAttribute('data-xt',j.token);},setupWithTrackingTokenReference:function(i,j){var k='xt='+j.token,l=i.href.split('#'),m=l[0].indexOf('?')!==-1,n=m?l[0].replace(/([\?|&]xt=[^&]*)/,'')+'&'+k+(l[1]||''):i.href+='?'+k;i.href=n;var o=i.onmousedown;i.onmousedown=function(p){h.swap(this,n);i.href=i.href.replace(/([\?|&]sig=[^&]*)/,'')+'&sig='+Math.floor(Math.random()*65535+65536);if(typeof o==='function')o();};},swap:function(i,j){var k=c('UserAgent_DEPRECATED').ie()<=8;if(k){var l=c('DOM').create('wbr',{},null);c('DOM').appendContent(i,l);}i.href=j;if(k)c('DOM').remove(l);},referrer_log:function(i,j,k){var l=c('$')('meta_referrer');l.content=c('LinkshimHandlerConfig').switched_meta_referrer_policy;h.swap(i,j);setTimeout(function(){l.content=c('LinkshimHandlerConfig').default_meta_referrer_policy;new (c('AsyncSignal'))(k,{}).send();},100);}};f.exports=h;},null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.LinkshimAsyncLink=c('LinkshimAsyncLink');},3);
__d('DeferredComponent.react',['React','createCancelableFunction'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l,m){'use strict';i.constructor.call(this,l,m);this.$DeferredComponent1=this.$DeferredComponent1.bind(this);this.state={ComponentClass:null,cancelableModulesLoaded:c('createCancelableFunction')(this.$DeferredComponent1)};}k.prototype.componentWillMount=function(){'use strict';this.props.deferredComponent(this.state.cancelableModulesLoaded);};k.prototype.componentWillUnmount=function(){'use strict';this.state.cancelableModulesLoaded.cancel();};k.prototype.render=function(){'use strict';var l=this.state.ComponentClass;if(!l||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var m=this.props,n=m.deferredPlaceholder,o=m.deferredComponent,p=m.onComponentLoad,q=m.deferredForcePlaceholder,r=babelHelpers.objectWithoutProperties(m,['deferredPlaceholder','deferredComponent','onComponentLoad','deferredForcePlaceholder']);return c('React').createElement(l,r);};k.prototype.$DeferredComponent1=function(l){'use strict';this.setState({ComponentClass:l},function(){this.props.onComponentLoad&&this.props.onComponentLoad(l);}.bind(this));};k.propTypes={deferredPlaceholder:j.element.isRequired,deferredComponent:j.func.isRequired,onComponentLoad:j.func,deferredForcePlaceholder:j.bool};f.exports=k;},null);
__d('JSResourceReference',['Promise','Bootloader'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.$JSResourceReference1=i;}h.prototype.getModuleId=function(){'use strict';return this.$JSResourceReference1;};h.prototype.load=function(){'use strict';return new (c('Promise'))(function(i){c('Bootloader').loadModules.call(c('Bootloader'),[this.$JSResourceReference1],i);}.bind(this));};h.prototype.equals=function(i){'use strict';return this===i||this.$JSResourceReference1==i.$JSResourceReference1;};f.exports=h;},null);
__d('JSResource',['JSResourceReference'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(i){return new (c('JSResourceReference'))(i);};h.Reference=c('JSResourceReference');f.exports=h;},null);
__d('BootloadedComponent.react',['Bootloader','DeferredComponent.react','JSResource','React'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l,m){'use strict';i.constructor.call(this,l,m);this.$BootloadedComponent1=this.$BootloadedComponent1.bind(this);}k.prototype.render=function(){'use strict';var l=this.props,m=l.bootloadLoader,n=l.bootloadPlaceholder,o=l.bootloadForcePlaceholder,p=babelHelpers.objectWithoutProperties(l,['bootloadLoader','bootloadPlaceholder','bootloadForcePlaceholder']);return (c('React').createElement(c('DeferredComponent.react'),babelHelpers['extends']({deferredPlaceholder:n,deferredComponent:this.$BootloadedComponent1,deferredForcePlaceholder:o},p)));};k.prototype.$BootloadedComponent1=function(l){'use strict';c('Bootloader').loadModules.call(c('Bootloader'),[this.props.bootloadLoader.getModuleId()],l);};f.exports=Object.assign(k,{propTypes:{bootloadPlaceholder:j.element.isRequired,bootloadLoader:j.instanceOf(c('JSResource').Reference).isRequired,bootloadForcePlaceholder:j.bool},create:function(l){var m,n;m=babelHelpers.inherits(o,c('React').Component);n=m&&m.prototype;o.prototype.render=function(){'use strict';var p=this.props,q=p.bootloadLoader,r=babelHelpers.objectWithoutProperties(p,['bootloadLoader']);return (c('React').createElement(k,babelHelpers['extends']({bootloadLoader:l},r)));};function o(){'use strict';m.apply(this,arguments);}o.displayName='BootloadedComponent('+l.getModuleId()+')';return o;}});},null);
__d('randomInt',['invariant'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){var l=arguments.length;!(l>0&&l<=2)?h(0):void 0;if(l===1){k=j;j=0;}!(k>j)?h(0):void 0;var m=this.random||Math.random;return Math.floor(j+m()*(k-j));}f.exports=i;},null);
__d('ClientIDs',['randomInt'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={getNewClientID:function(){var j=Date.now(),k=j+':'+(c('randomInt')(0,4294967295)+1);h[k]=true;return k;},isExistingClientID:function(j){return !!h[j];}};f.exports=i;},null);
__d('ServerTime',['InitialServerTime'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();k(c('InitialServerTime').serverTime);var h;function i(){return Date.now()-h;}function j(){return h;}function k(l){h=Date.now()-l;}f.exports={getMillis:i,getOffsetMillis:j,update:k,get:i,getSkew:j};},null);
__d('AttachmentRelatedShareConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join',PRODUCT_CLICK:'product_click'};f.exports=h;},null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});},null);
__d('tidyEvent',['Run'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[];function i(){while(h.length){var l=h.shift();l&&l.remove?l.remove():l.unsubscribe();}}function j(l){var m;function n(){if(!m)return;m.apply(l,arguments);m=null;l=null;}if(l.remove){m=l.remove;l.remove=n;}else{m=l.unsubscribe;l.unsubscribe=n;}return l;}function k(l){if(!h.length)c('Run').onLeave(i);if(Array.isArray(l)){for(var m=0;m<l.length;m++)h.push(j(l[m]));}else h.push(j(l));return l;}f.exports=k;},null);
__d('EntstreamAttachmentRelatedShare',['csx','cx','Arbiter','AsyncRequest','AttachmentRelatedShareConstants','CSS','DOM','Event','XPubcontentInlinePhotoPivotsEventsController','ge','getOrCreateDOMID','tidyEvent'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=2,k=3,l={loadRelatedAttachment:function(m,n,o){var p=null;if(typeof m==="string"){p=c('ge')(m);}else p=m;if(!p)return;var q=c('Event').listen(p,'click',function(){q.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:p,global_share_id:n,is_right_click:false,share_id:o});}),r=c('Event').listen(p,'mousedown',function(event){if(event.which===k||event.button===j){r.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:p,global_share_id:n,is_right_click:true});}});},loadInlineStoryPivotAttachment:function(m,n){var o=c('ge')(m);if(!o)return;var p=c('Event').listen(o,'click',function(){p.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').PHOTO_CLICK,{attachment:o,storyid:n});});},loadRelatedGameAttachment:function(m,n){var o=null;if(typeof m==="string"){o=c('ge')(m);}else o=m;if(!o)return;c('tidyEvent')(c('Event').listen(o,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:o,global_share_id:n});}));c('tidyEvent')(c('Event').listen(o,'mousedown',function(event){if(event.which===k||event.button===j)c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:o,global_share_id:n});}));},loadRelatedLSCVideoAttachment:function(m,n){var o=null;if(typeof m==='string'){o=c('ge')(m);}else o=m;if(!o)return;var p="^div._4-u2",q=c('DOM').scry(o,p),r=c('Event').listen(o,'click',function(){r.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').VIDEO_CLICK,{attachment:o,global_share_id:n});});},loadRelatedLSCInlineVideoAttachment:function(m,n){var o=null;if(typeof m==='string'){o=c('ge')(m);}else o=m;if(!o)return;c('Event').listen(o,'click',function(){var p="^div._4-u2",q="_1d8v",r=c('DOM').scry(o,p),s=r.length===1?r[0]:null,t=s.parentNode,u=t.previousSibling;while(!u){t=t.parentNode;u=t.previousSibling;}if(!c('CSS').hasClass(u,q)){var v=c('DOM').create('div',{className:q}),w=c('DOM').insertBefore(s.parentNode,v),x=w.length>=1?w[0]:null;}else x=u;var y=c('getOrCreateDOMID')(x);new (c('AsyncRequest'))().setURI('/ajax/flash/expand_inline.php').setData({share_id:n,target_div:y,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(o.parentNode).send();});},loadRelatedEventsPivotAttachment:function(m,n){var o=null;if(typeof m==="string"){o=c('ge')(m);}else o=m;if(!o)return;c('tidyEvent')(c('Event').listen(o,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').EVENT_JOIN,{attachment:o,event_id:n});}));},loadRelatedProductAttachment:function(m,n){var o=null;if(typeof m==='string'){o=c('ge')(m);}else o=m;if(!o)return;c('tidyEvent')(c('Event').listen(o,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').PRODUCT_CLICK,{attachment:o,product_id:n});}));},closeButton:function(m,n){c('Event').listen(m,'click',function(){c('DOM').remove(n);});},closeButtonPhotoPivots:function(m,n,o,p){c('Event').listen(m,'click',function(){var q=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),r={story_id:o,search_query_type:p,event:'hide'};new (c('AsyncRequest'))().setMethod('POST').setURI(q.getURI()).setData(r).send();c('DOM').remove(n);});},seeAllLinkPhotoPivots:function(m,n,o){c('Event').listen(m,'click',function(){var p=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),q={story_id:n,search_query_type:o,event:'see_all'};new (c('AsyncRequest'))().setMethod('POST').setURI(p.getURI()).setData(q).send();});},removeOldSuggestions:function(m){var n=c('ge')(m);if(!n)return;var o=c('DOM').scry(n.parentNode,"._5d73");for(var p=1;p<o.length;p++)c('DOM').remove(o[p]);setTimeout(function(){c('CSS').show(o[0]);},1000);},showHiddenSuggestions:function(m){var n=c('Event').listen(m,'click',function(){n.remove();var o="^._1ui8",p=c('DOM').scry(m,o);if(!p)return;c('CSS').hide(p[0]);var q=p[0].previousSibling;while(q){c('CSS').show(q);q=q.previousSibling;}});}};f.exports=l;},null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null;});};},null);
__d('LitestandMessages',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={NEWSFEED_LOAD:'LitestandMessages/NewsFeedLoad',LEAVE_HOME:'LitestandMessages/LeaveHome',STORIES_REQUESTED:'LitestandMessages/StoriesRequested',STORIES_INSERTED:'LitestandMessages/StoriesInserted',NEWER_STORIES_INSERTED:'LitestandMessages/NewerStoriesInserted',NEW_STORIES_CONTAINER_CREATED:'LitestandMessages/NewStoriesContainer',RHC_RELOADED:'LitestandMessages/RHCReloaded'};f.exports=h;},null);
__d('LiveTimer',['fbt','csx','cx','CSS','DOM','ServerTime'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=1000,l=60,m=3600,n=43200,o=86400,p=60,q=60000,r={restart:function(s){c('ServerTime').update(s*1000);this.updateTimeStamps();},getApproximateServerTime:function(){return c('ServerTime').get();},getServerTimeOffset:function(){return -1*c('ServerTime').getSkew();},updateTimeStamps:function(){this.timestamps=c('DOM').scry(document.body,'abbr.livetimestamp');this.startLoop(q);},addTimeStamps:function(s){if(!s)return;this.timestamps=this.timestamps||[];if(c('DOM').isNodeOfType(s,'abbr')&&c('CSS').hasClass(s,'livetimestamp')){this.timestamps.push(s);}else{var t=c('DOM').scry(s,'abbr.livetimestamp');for(var u=0;u<t.length;++u)this.timestamps.push(t[u]);}this.startLoop(0);},removeTimestamp:function(s){if(!this.timestamps||!s)return;var t=this.timestamps.indexOf(s);if(t>-1)this.timestamps.splice(t,1);},startLoop:function(s){this.stop();this.timeout=setTimeout(function(){this.loop();}.bind(this),s);},stop:function(){clearTimeout(this.timeout);},loop:function(s){if(s)this.updateTimeStamps();var t=Math.floor(c('ServerTime').get()/k),u=-1;this.timestamps&&this.timestamps.forEach(function(w){var x=w.getAttribute('data-utime'),y=w.getAttribute('data-shorten'),z=w.getAttribute('data-minimize'),aa=this.renderRelativeTime(t,x,y,z);if(aa.text){var ba={'class':"timestampContent"},ca=c('DOM').scry(w,".timestampContent")[0],da=ca&&ca.getAttribute('id');if(da)ba.id=da;c('DOM').setContent(w,c('DOM').create('span',ba,aa.text));}if(aa.next!=-1&&(aa.next<u||u==-1))u=aa.next;}.bind(this));if(u!=-1){var v=Math.max(q,u*k);this.timeout=setTimeout(function(){this.loop();}.bind(this),v);}},renderRelativeTime:function(s,t,u,v){var w={text:"",next:-1};if(s-t>o)return w;var x=s-t,y=Math.floor(x/l),z=Math.floor(y/p);if(y<1){if(v){w.text=h._("1m");w.next=20-x%20;}else if(u){w.text=h._("Just now");w.next=20-x%20;}else{w.text=h._("a few seconds ago");w.next=l-x%l;}return w;}if(z<1){if(v){w.text=h._({"*":"{number}m"},[h.param('number',y,[0])]);}else if(u&&y==1){w.text=h._("1 min");}else if(u){w.text=h._({"*":"{number} mins"},[h.param('number',y,[0])]);}else w.text=y==1?h._("about a minute ago"):h._({"*":"{number} minutes ago"},[h.param('number',y,[0])]);w.next=l-x%l;return w;}if(z<11)w.next=m-x%m;if(v){w.text=h._({"*":"{number}h"},[h.param('number',z,[0])]);}else if(u&&z==1){w.text=h._("1 hr");}else if(u){w.text=h._({"*":"{number} hrs"},[h.param('number',z,[0])]);}else w.text=z==1?h._("about an hour ago"):h._({"*":"{number} hours ago"},[h.param('number',z,[0])]);return w;},renderRelativeTimeToServer:function(s,t,u){return this.renderRelativeTime(Math.floor(c('ServerTime').get()/k),s,t,u);}};f.exports=r;f.exports.CONSTS={MS_IN_SEC:k,SEC_IN_MIN:l,SEC_IN_HOUR:m,SEC_IN_12_HOUR:n,SEC_IN_24_HOUR:o,MIN_IN_HOUR:p,HEARTBEAT:q};},null);
__d('AsyncFormRequestUtils',['Arbiter'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={subscribe:function(i,j,k){c('Arbiter').subscribe('AsyncRequest/'+j,function(l,m){var n=m.request.relativeTo;if(n&&n===i)k(m);});}};f.exports=h;},null);
__d('PluginTabLoadMore',['CSS','Event'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={noMoreContent:function(){c('Event').fire(this.root,'noMoreContent');c('CSS').hide(this.spinner);},setCursor:function(i){c('Event').fire(this.root,'setCursor',i);},init:function(i,j){this.root=i;this.spinner=j;}};f.exports=h;},null);
__d('PluginFeedFooterActionLogger',['BanzaiLogger','DOM','Event','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={initializeClickLoggers:function(i,j,k,l,m,n,o,p,q){var r=function(s,t){try{var v=c('DOM').find(i,'.'+s);c('Event').listen(v,'click',function(w){c('BanzaiLogger').log('PostPluginActionsLoggerConfig',{embedded_post_action:t,embedded_post_action_type:c('EmbeddedPostPluginActionTypes').CLICK,embedded_post_source:n,story_token:o,referer_url:p,is_sdk:q});});}catch(u){}};r(j,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_LIKE);r(k,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_UNLIKE);r(l,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_COMMENT);r(m,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_SHARE);}};f.exports=h;},null);
__d('PluginFeedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMEventListener','FBFeedLocations','FormSubmit','Keys','PluginOptin','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();window.resetConfirmStoryLike=function(i){c('CSS').show(c('DOM').find(document,'#likeStory_'+i));c('DOM').remove(c('DOM').find(document,'#confirmStory_'+i));};var h={addClientId:function(i){i.setAttribute('value',c('ClientIDs').getNewClientID());},loggedOutLikeButton:function(i,j,k){var l='';if(j===c('FBFeedLocations').EMBED){l='post';}else if(j===c('FBFeedLocations').PAGE_PLUGIN){l='page';}else throw new Error('Invalid FBFeedLocation type.');var m=new (c('PluginOptin'))(l).addReturnParams({act:'like_'+i});c('DOMEventListener').add(k,'click',m.start.bind(m));},init:function(i,j,k,l,m){var n=function(q){if(q.type==='keypress')if(q.keyCode===c('Keys').RETURN||q.keyCode===c('Keys').SPACE){c('FormSubmit').send(m);}else return;c('FormSubmit').send(m);};c('DOMEventListener').add(j,'click',n);c('DOMEventListener').add(k,'click',n);c('DOMEventListener').add(j,'keypress',n);c('DOMEventListener').add(k,'keypress',n);var o=l.getAttribute('value')==='1';c('AsyncFormRequestUtils').subscribe(m,'send',function(q){var r=l.getAttribute('value')==='1';c('CSS').conditionShow(k,r);c('CSS').conditionShow(j,!r);c('Arbiter').inform('embeddedUfiToggle',{isLike:r,storyToken:i});l.setAttribute('value',r?'':'1');});c('AsyncFormRequestUtils').subscribe(m,'response',function(q){var r=q.response.payload;if(r&&!r.success){var s=r.isLike;c('CSS').conditionShow(j,s);c('CSS').conditionShow(k,!s);c('Arbiter').inform('revertLike',{isLike:s,storyToken:i});l.setAttribute('value',s?'1':'');}});var p=new (c('URI'))(window.location.search).getQueryData();if(o&&p.act==='like_'+i)c('FormSubmit').send(m);}};f.exports=h;},null);
__d('FbFeedAccessible',['csx','cx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='Accessibility/StoriesRequested',m='Accessibility/StoriesLoaded',n='Accessibility/StoryContentInserted',o='Accessibility/SubstreamInserted',p=void 0,q=void 0,r={init:function(s){p=s;if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){var t=new (c('SubscriptionsHandler'))();t.addSubscriptions(c('Arbiter').subscribe(c('LitestandMessages').STORIES_REQUESTED,this._onStoriesRequested.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(m,this._processStoriesLoaded.bind(this)),c('Arbiter').subscribe(l,this._processStoriesRequested.bind(this)),c('Arbiter').subscribe(n,this._processStoryContentInserted.bind(this)),c('Arbiter').subscribe(o,this._processInsertedSubstream.bind(this)));this._enumerateStories();}},informStoryContentInserted:function(s){c('Arbiter').inform(n,s);this.setAriaLabelledBy(s);},setAriaLabelledBy:function(s){var t=c('ge')(s),u;if(t&&this._isStory(t)){if(t.getAttribute('aria-labelledby'))return;u=this._filterForElement(t,["._4gns","._5pbw",".timestampContent",".uiStreamSponsoredLink","._5pbx"]);if(u.length>0)t.setAttribute('aria-labelledby',u.map(function(v){return c('getOrCreateDOMID')(v);}).join(' '));}},_getStories:function(s){return c('DOMQuery').scry(s||p,"._5jmm");},_onInsertedSubstream:function(s,t){if(t&&t.substream_id)c('Arbiter').inform(o,t.substream_id);},_onStoriesRequested:function(){c('Arbiter').inform(l);},_setEnumerationText:function(s,t,u){var v=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('FbFeedPager.react'),bootloadPlaceholder:c('React').createElement('div',null),position:t,total:u,'aria-hidden':'true'});c('ReactDOM').render(v,s);},_enumerateStories:function(){var s=this._getStories(p);q=s.length;s.forEach(function(t,u){this._enumerateStory(t,u+=1);}.bind(this));},_enumerateSubstream:function(s){var t=this._getStories();q=t.length;var u=this._getStories(c('ge')(s)),v=u.length||0;for(var w=0;w<v;w++)this._registerStoryEnumerationPosition(u[w],q-v+(w+1),w+1);},_enumerateStory:function(s,t){!this._isStory(s)?k(0):void 0;if(t>0){var u=c('DOMQuery').scry(s,"._4gns");if(u&&u[0])this._setEnumerationText(u[0],t,q);}},_processStoriesLoaded:function(){c('ARIA').notify(j._("More stories loaded."));},_processStoriesRequested:function(){c('ARIA').notify(j._("More stories requested."));},_processInsertedSubstream:function(s,t){this._enumerateSubstream(t);this._enumerateStories();},_processStoryContentInserted:function(s,t){var u=void 0,v=c('ge')(t);if(v)u=JSON.parse(v.getAttribute('data-ft'));if(u&&u.ordinal_position){var w=u.ordinal_position.split(':'),x=w[0],y=w[1];x=parseInt(x,10);y=parseInt(y,10);this._enumerateStory(v,x);if(y===1)c('Arbiter').inform(m);}},_registerStoryEnumerationPosition:function(s,t,u){var v=JSON.parse(s.getAttribute('data-ft'));if(v){v.ordinal_position=t+':'+u;s.setAttribute('data-ft',JSON.stringify(v));}},_isStory:function(s){return c('CSS').matchesSelector(s,"._5jmm");},_filterForElement:function(s,t){return t.map(function(u){return c('DOMQuery').scry(s||document,u)[0];}).filter(function(u){return !!u;});}};f.exports=r;},null);