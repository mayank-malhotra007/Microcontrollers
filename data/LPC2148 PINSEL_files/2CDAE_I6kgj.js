/*!CK:3014041604!*//*1460826848,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["1Dmjw"]); }

__d('AbstractLink.react',['$','emptyFunction','Bootloader','LinkshimHandlerConfig','React','URI'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=new (c('URI'))('/l.php').setDomain(c('LinkshimHandlerConfig').linkshim_host);function k(p,q){var r=new (c('URI'))(p);return j.setQueryData({u:p,h:q}).setProtocol(r.getProtocol()).toString();}function l(p,q){var r=c('$')('meta_referrer');r.content=c('LinkshimHandlerConfig').switched_meta_referrer_policy;setTimeout(function(){r.content=c('LinkshimHandlerConfig').default_meta_referrer_policy;n(p,q);},100);}function m(p){c('Bootloader').loadModules(["AsyncSignal","XLinkshimLogController"],p||c('emptyFunction'));}function n(p,q){m(function(r,s){var t=c('LinkshimHandlerConfig').render_verification_rate||0,u=Math.floor(Math.random()*t+1)===t,v=s.getURIBuilder().setString('u',p).setString('h',q).setBool('render_verification',u).getURI();new r(v).send();});}h=babelHelpers.inherits(o,c('React').Component);i=h&&h.prototype;function o(p){i.constructor.call(this,p);this.$AbstractLink1=this.$AbstractLink1.bind(this);}o.prototype.$AbstractLink1=function(p){var q=this.props,r=q.href,s=q.shimhash,t=q.useMetaReferrer,u=q.onClick;if(t)l(r,s||'');u&&u(p);};o.prototype.componentDidMount=function(){if(this.props.useMetaReferrer)m();};o.prototype.render=function(){var p=this.props,q=p.href,r=p.shimhash,s=p.onClick,t=p.useRedirect,u=p.useMetaReferrer,v=p.nofollow,w=p.rel,x=babelHelpers.objectWithoutProperties(p,['href','shimhash','onClick','useRedirect','useMetaReferrer','nofollow','rel']),y=q,z=w;if(t)y=k(q,r||'');if(v)z=w?w+' nofollow':'nofollow';return (c('React').createElement('a',babelHelpers['extends']({},x,{href:y,rel:z,onClick:this.$AbstractLink1})));};f.exports=o;},null);
__d('Link.react',['AbstractLink.react','isFacebookURI','LinkReactUnsafeHrefConfig','LinkshimHandlerConfig','React','URI'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('LinkReactUnsafeHrefConfig').LinkHrefChecker,k=/^(#|\/\w)/;function l(n){return k.test(n)||c('isFacebookURI')(new (c('URI'))(n));}h=babelHelpers.inherits(m,c('React').Component);i=h&&h.prototype;m.prototype.render=function(){var n=this.props,o=n.allowunsafehref,p=n.s,q=n.href,r=babelHelpers.objectWithoutProperties(n,['allowunsafehref','s','href']),s='#',t=null;if(q instanceof c('URI')){s=q.toString();}else if(typeof q==='string'&&q!==''&&q!=='#'){s=q;}else if(typeof q==='object'&&q!==null){s=q.url.toString();t=q.shimhash?q.shimhash.toString():t;}else{s='#';t=null;}if(j)j.logIfInvalidProtocol(s,o);if(t==null&&!l(s))t=c('LinkshimHandlerConfig').link_react_default_hash;var u=t!=null,v=t!=null,w=false;if(c('LinkshimHandlerConfig').supports_meta_referrer){if(p)v=false;if(t!=null)w=true;}return (c('React').createElement(c('AbstractLink.react'),babelHelpers['extends']({},r,{href:s,nofollow:u,shimhash:t,useRedirect:v,useMetaReferrer:w})));};function m(){h.apply(this,arguments);}f.exports=m;},null);
__d('ReactPropTransferer',['emptyFunction','joinClasses'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(m){return function(n,o,p){if(!n.hasOwnProperty(o)){n[o]=p;}else n[o]=m(n[o],p);};}var i=h(function(m,n){return Object.assign({},n,m);}),j={children:c('emptyFunction'),className:h(c('joinClasses')),style:i};function k(m,n){for(var o in n){if(!n.hasOwnProperty(o))continue;var p=j[o];if(p&&j.hasOwnProperty(o)){p(m,o,n[o]);}else if(!m.hasOwnProperty(o))m[o]=n[o];}return m;}var l={mergeProps:function(m,n){return k(Object.assign({},m),n);}};f.exports=l;},null);
__d('cloneWithProps_DEPRECATED',['ReactElement','ReactPropTransferer','keyOf','warning'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('keyOf')({children:null}),i=false;function j(k,l){var m=c('ReactPropTransferer').mergeProps(l,k.props);if(!m.hasOwnProperty(h)&&k.props.hasOwnProperty(h))m.children=k.props.children;return c('ReactElement').createElement(k.type,m);}f.exports=j;},null);
__d('AbstractButton.react',['cx','Link.react','React','cloneWithProps_DEPRECATED','joinClasses'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'AbstractButton',propTypes:{image:i.element,imageRight:i.element,depressed:i.bool,label:i.node,onClick:i.func},handleLinkClick:function(k){if(this.props.disabled){k.preventDefault();}else if(this.props.onClick)this.props.onClick(k);},render:function(){var k="_42ft"+(this.props.disabled?' '+"_42fr":'')+(this.props.depressed?' '+"_42fs":''),l,m=this.props.image;if(m){l={};if(this.props.label){l.alt='';l.className="_3-8_";}m=c('cloneWithProps_DEPRECATED')(m,l);}var n=this.props.imageRight;if(n){l={};if(this.props.label){l.alt='';l.className="_3-99";}n=c('cloneWithProps_DEPRECATED')(n,l);}var o;if(this.props.href){o=c('React').createElement(c('Link.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,k),disabled:null,label:null,onClick:this.handleLinkClick}),m,this.props.label,n);}else if(this.props.type&&this.props.type!=='submit'){o=c('React').createElement('button',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,k),label:null,type:this.props.type}),m,this.props.label,n);}else o=c('React').createElement('button',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,k),label:null,type:'submit',value:'1'}),m,this.props.label,n);return o;}});f.exports=j;},null);
__d("arrayContains",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){return i.indexOf(j)!==-1;}f.exports=h;},null);
__d('concatMap',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=-1,l=j.length,m=[],n=void 0;while(++k<l){n=i(j[k],k,j);if(Array.isArray(n)){Array.prototype.push.apply(m,n);}else Array.prototype.push.call(m,n);}return m;}f.exports=h;},null);
__d("nativeRequestAnimationFrame",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame;f.exports=h;},null);
__d('requestAnimationFramePolyfill',['emptyFunction','nativeRequestAnimationFrame'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=0,i=c('nativeRequestAnimationFrame')||function(j){var k=Date.now(),l=Math.max(0,16-(k-h));h=k+l;return b.setTimeout(function(){j(Date.now());},l);};i(c('emptyFunction'));f.exports=i;},null);
__d('XHRHttpError',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='HTTP_CLIENT_ERROR',i='HTTP_PROXY_ERROR',j='HTTP_SERVER_ERROR',k='HTTP_TRANSPORT_ERROR',l='HTTP_UNKNOWN_ERROR';function m(n,o){if(o===0){var p=n.getProtocol();if(p==='file'||p==='ftp')return null;return k;}else if(o>=100&&o<200){return i;}else if(o>=200&&o<300){return null;}else if(o>=400&&o<500){return h;}else if(o>=500&&o<600){return j;}else if(o>=12001&&o<12156){return k;}else return l;}f.exports={getErrorCode:m,HTTP_CLIENT_ERROR:h,HTTP_PROXY_ERROR:i,HTTP_SERVER_ERROR:j,HTTP_TRANSPORT_ERROR:k,HTTP_UNKNOWN_ERROR:l};},null);
__d('xhrSimpleDataSerializer',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){var j=[],k;for(k in i)j.push(encodeURIComponent(k)+'='+encodeURIComponent(i[k]));return j.join('&');}f.exports=h;},null);
__d('XHRRequest',['invariant','ErrorUtils','TimeSlice','URI','XHRHttpError','getAsyncHeaders','getSameOriginTransport','xhrSimpleDataSerializer'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={errorCode:null,errorMsg:null,errorType:null},j={loadedBytes:null,totalBytes:null};function k(l){'use strict';this.setURI(l);this.setResponseType(null);this.setMethod('POST');this.setTransportBuilder(c('getSameOriginTransport'));this.setDataSerializer(c('xhrSimpleDataSerializer'));this.$XHRRequest1=this.$XHRRequest1.bind(this);}k.prototype.setURI=function(l){'use strict';this.$XHRRequest2=new (c('URI'))(l);return this;};k.prototype.getURI=function(){'use strict';return this.$XHRRequest2;};k.prototype.setResponseType=function(l){'use strict';this.$XHRRequest3=l;return this;};k.prototype.setMethod=function(l){'use strict';this.$XHRRequest4=l;return this;};k.prototype.getMethod=function(){'use strict';return this.$XHRRequest4;};k.prototype.setData=function(l){'use strict';this.$XHRRequest5=l;return this;};k.prototype.getData=function(){'use strict';return this.$XHRRequest5;};k.prototype.setRawData=function(l){'use strict';this.$XHRRequest6=l;return this;};k.prototype.setRequestHeader=function(l,m){'use strict';if(!this.$XHRRequest7)this.$XHRRequest7={};this.$XHRRequest7[l]=m;return this;};k.prototype.setTimeout=function(l){'use strict';this.$XHRRequest8=l;return this;};k.prototype.setResponseHandler=function(l){'use strict';this.$XHRRequest9=l;return this;};k.prototype.setErrorHandler=function(l){'use strict';this.$XHRRequest10=l;return this;};k.prototype.setAbortHandler=function(l){'use strict';this.$XHRRequest11=l;return this;};k.prototype.setTimeoutHandler=function(l){'use strict';this.$XHRRequest12=l;return this;};k.prototype.setUploadProgressHandler=function(l){'use strict';this.$XHRRequest13=l;return this;};k.prototype.setTransportBuilder=function(l){'use strict';this.$XHRRequest14=l;return this;};k.prototype.setDataSerializer=function(l){'use strict';this.$XHRRequest15=l;return this;};k.prototype.send=function(){'use strict';var l=this.$XHRRequest8,m=this.$XHRRequest14(),n=this.getURI();this.$XHRRequest16=m;var o;!(this.$XHRRequest4==='POST'||!this.$XHRRequest6)?h(0):void 0;if(this.$XHRRequest4==='GET'||this.$XHRRequest6){n.addQueryData(this.$XHRRequest5);o=this.$XHRRequest6;}else o=this.$XHRRequest15(this.$XHRRequest5);m.onreadystatechange=c('TimeSlice').guard(this.$XHRRequest1,'XHRRequest onreadystatechange');if(m.upload&&this.$XHRRequest13)m.upload.onprogress=this.$XHRRequest17.bind(this);if(l)this.$XHRRequest18=setTimeout(this.$XHRRequest19.bind(this),l);m.open(this.$XHRRequest4,n.toString(),true);if(this.$XHRRequest7)for(var p in this.$XHRRequest7)m.setRequestHeader(p,this.$XHRRequest7[p]);var q=c('getAsyncHeaders')(n);Object.keys(q).forEach(function(r){m.setRequestHeader(r,q[r]);});if(this.$XHRRequest3==='arraybuffer')if('responseType' in m){m.responseType='arraybuffer';}else if('overrideMimeType' in m){m.overrideMimeType('text/plain; charset=x-user-defined');}else if('setRequestHeader' in m)m.setRequestHeader('Accept-Charset','x-user-defined');m.send(o);};k.prototype.abort=function(){'use strict';this.$XHRRequest20();if(this.$XHRRequest11)c('ErrorUtils').applyWithGuard(this.$XHRRequest11,null,null,null,'XHRRequest:_abortHandler');};k.prototype.$XHRRequest20=function(){'use strict';var l=this.$XHRRequest16;if(l){l.onreadystatechange=null;l.abort();}this.$XHRRequest21();};k.prototype.$XHRRequest19=function(){'use strict';this.$XHRRequest20();if(this.$XHRRequest12)c('ErrorUtils').applyWithGuard(this.$XHRRequest12,null,null,null,'XHRRequest:_abortHandler');};k.prototype.$XHRRequest22=function(l){'use strict';if(this.$XHRRequest3)if('response' in l){return l.response;}else if(this.$XHRRequest3==='arraybuffer')if(window.VBArray)return window.VBArray(l.responseBody).toArray();return l.responseText;};k.prototype.$XHRRequest1=function(){'use strict';var l=this.$XHRRequest16,m=l.readyState;if(m>=2){var n=m===4,o=this.getURI(),p=c('XHRHttpError').getErrorCode(o,l.status),q=this.$XHRRequest9;if(p!==null){if(n){i.errorCode=p;i.errorMsg=this.$XHRRequest22(l);i.errorType='HTTP';if(this.$XHRRequest10)c('ErrorUtils').applyWithGuard(this.$XHRRequest10,null,[i],null,'XHRRequest:_errorHandler');}}else if(q){var r=null;if(q.includeHeaders)r=l.getAllResponseHeaders();if(n||q.parseStreaming&&m===3)c('ErrorUtils').applyWithGuard(q,null,[this.$XHRRequest22(l),r,n],null,'XHRRequest:handler');}if(n)this.$XHRRequest21();}};k.prototype.$XHRRequest17=function(l){'use strict';j.loadedBytes=l.loaded;j.totalBytes=l.total;if(this.$XHRRequest13)c('ErrorUtils').applyWithGuard(this.$XHRRequest13,null,[j],null,'XHRRequest:_uploadProgressHandler');};k.prototype.$XHRRequest21=function(){'use strict';clearTimeout(this.$XHRRequest18);delete this.$XHRRequest16;};f.exports=k;},null);
__d('getCrossOriginTransport',['invariant','ex'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){try{var k=new XMLHttpRequest();if(!('withCredentials' in k)&&typeof XDomainRequest!=='undefined')k=new XDomainRequest();return k;}catch(j){throw new Error(c('ex')('getCrossOriginTransport: %s',j.message));}}i.withCredentials=function(){var j=i();!('withCredentials' in j)?h(0):void 0;var k=j.open;j.open=function(){k.apply(this,arguments);this.withCredentials=true;};return j;};f.exports=i;},null);
__d('EncryptedImg',['URI','XHRRequest','getCrossOriginTransport'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='ek',i={insertIntoStyleBackgroundImage:function(o,p){var q=function(r,s){if(r)r.style.backgroundImage="url('"+s+"')";}.bind(undefined,p);i.load(o,q);},insertIntoDOM:function(o,p){var q=function(r,s){if(r)r.setAttribute('src',s);}.bind(undefined,p);i.load(o,q);},load:function(o,p){var q=arguments.length<=2||arguments[2]===undefined?true:arguments[2],r=new (c('URI'))(o),s=j(r),t=k.bind(undefined,s,p,q);t.includeHeaders=true;new (c('XHRRequest'))(r.toString()).setTransportBuilder(c('getCrossOriginTransport')).setMethod('GET').setResponseType('arraybuffer').setResponseHandler(t).setErrorHandler(function(){b.ImageFailLogger.logImageFailUri(o);}).send();},isEncrypted:function(o){return (!o.startsWith('data:')&&j(new (c('URI'))(o))!=null);},dataUrlPrefix:function(o){var p=arguments.length<=1||arguments[1]===undefined?32:arguments[1];if(!o.startsWith('data:'))return o;var q=o.indexOf(',');if(q<0||q>p)q=p;return o.slice(0,q);}};f.exports=i;function j(o){var p=o.getQueryData(),q=p[h];delete p[h];o.setQueryData(p);return q;}function k(o,p,q,r,s){if(!o){p(n(r,m(s)));return;}var t=l(o),u=new Uint8Array(r),v=u.subarray(2,14);u=u.subarray(14,u.length);var w={name:'AES-GCM',iv:v,tagLength:128};window.crypto.subtle.importKey('raw',t,w,false,['encrypt','decrypt']).then(function(x){return window.crypto.subtle.decrypt(w,x,u);}).then(function(x){if(q){p(n(x,m(s)));}else p(x);})['catch'](function(x){b.ImageFailLogger.logImageFailUri(o);});}function l(o){if(typeof o=='string'){var p=new Uint8Array(Math.floor(o.length/2)),q=0;o.replace(/(..)/g,function(r){p[q++]=parseInt(r,16);});return p;}return null;}function m(o){var p='image/jpeg',q=o.toLowerCase().match(/content-type:\s?([\w\/]*)\s/);if(q&&q.length>1)p=q[1];return p;}function n(o,p){var q=new Uint8Array(o),r='';for(var s=0,t=q.byteLength;s<t;++s)r+=String.fromCharCode(q[s]);return 'data:'+p+';base64,'+window.btoa(r);}},null);
__d('Image.react-upstream',['createCancelableFunction','EncryptedImg','React','joinClasses'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();function j(n){return n&&typeof n==='object'&&n.sprited&&n.spriteMapCssClass&&n.spriteCssClass;}function k(n){if(typeof n==='string')return n;if(n&&typeof n==='object')if(!n.sprited&&n.uri&&typeof n.uri==='string')return n.uri;return '';}function l(n,o,p){var q=n[o];if(q==null||j(q)||k(q)!=='')return;return new Error('Provided `'+o+'` to `'+p+'`. Must be `null`, '+'`undefined`, a string or an `ix` call.');}h=babelHelpers.inherits(m,c('React').Component);i=h&&h.prototype;function m(){'use strict';i.constructor.call(this);this.state={src:null};this.encryptedImgCallback=null;}m.prototype.$ReactImage1=function(n){'use strict';if(j(n))return;var o=k(n);if(o!=null&&c('EncryptedImg').isEncrypted(o)){if(this.encryptedImgCallback)this.encryptedImgCallback.cancel();this.encryptedImgCallback=c('createCancelableFunction')(function(p){if(o===k(this.props.src))this.setState({src:p});}.bind(this));c('EncryptedImg').load(o,this.encryptedImgCallback);}else this.setState({src:o});};m.prototype.componentWillMount=function(){'use strict';this.$ReactImage1(this.props.src);};m.prototype.componentWillReceiveProps=function(n){'use strict';if(n.src!=this.props.src)this.$ReactImage1(n.src);};m.prototype.componentWillUnmount=function(){'use strict';if(this.encryptedImgCallback)this.encryptedImgCallback.cancel();};m.prototype.render=function(){'use strict';var n=c('joinClasses')(this.props.className,'img'),o=this.props.src;if(o==null)return c('React').createElement('img',babelHelpers['extends']({},this.props,{className:n}));var p=null;if(this.props.alt&&j(o))p=c('React').createElement('u',null,this.props.alt);if(typeof o==='string')return c('React').createElement('img',babelHelpers['extends']({},this.props,{src:this.state.src,className:n}),p);if(j(o)){n=c('joinClasses')(n,o.spriteMapCssClass,o.spriteCssClass);return c('React').createElement('i',babelHelpers['extends']({},this.props,{className:n,src:null}),p);}if(this.props.width===undefined&&this.props.height===undefined)return (c('React').createElement('img',babelHelpers['extends']({},this.props,{className:n,width:o.width,height:o.height,src:this.state.src}),p));return (c('React').createElement('img',babelHelpers['extends']({},this.props,{className:n,src:this.state.src}),p));};m.propTypes={src:l};m.validateImageSrcPropType=l;f.exports=m;},null);
__d('Image.react',['Image.react-upstream'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('Image.react-upstream');},null);
__d('requestAnimationFrameAcrossTransitions',['TimeSlice','requestAnimationFramePolyfill'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=function h(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];j[0]=c('TimeSlice').guard(j[0],'requestAnimationFrame');return c('requestAnimationFramePolyfill').apply(b,j);};},null);
__d('requestAnimationFrame',['TimerStorage','requestAnimationFrameAcrossTransitions'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];var k,l=i[0];i[0]=function(){c('TimerStorage').unset(c('TimerStorage').ANIMATION_FRAME,k);Function.prototype.apply.call(l,this,arguments);};k=c('requestAnimationFrameAcrossTransitions').apply(b,i);c('TimerStorage').set(c('TimerStorage').ANIMATION_FRAME,k);return k;}.bind(this);},null);
__d('shallowCompare',['shallowEqual'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j,k){return (!c('shallowEqual')(i.props,j)||!c('shallowEqual')(i.state,k));}f.exports=h;},null);
__d('ReactComponentWithPureRenderMixin',['shallowCompare'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={shouldComponentUpdate:function(i,j){return c('shallowCompare')(this,i,j);}};f.exports=h;},null);
__d('StringTrims',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={trimLeft:function(i){return i.replace(/^\s+/,'');},trimRight:function(i){return i.replace(/\s+$/,'');}};f.exports=h;},null);
__d('LitestandEllipsis',['DOMQuery','StringTrims','concatMap','getElementText','isTextNode'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i={add:function(l,m,n){n=n||l;c('DOMQuery').scry(l,'br').forEach(function(u){u.parentNode&&u.parentNode.removeChild(u);});var o=n.offsetHeight||0;if(o<=m)return l;var p,q='\u2026',r=k(l),s=r.length-1,t=c('getElementText')(r[s]);if(s===0)t=c('StringTrims').trimLeft(t);while(s>=0&&o>m){p=Math.max(t.lastIndexOf(' '),t.lastIndexOf('\n'));if(p===-1)p=t.length-q.length-1;if(p<=0){j(r[s],'');s--;t=c('getElementText')(r[s]);}else{t=c('StringTrims').trimRight(t.substr(0,p))+q;j(r[s],t);}o=(n.offsetHeight||0)-1;}}};function j(l,m){h=h||(l.textContent!=null?'textContent':'innerText');l[h]=m;}function k(l){if(c('isTextNode')(l))return [l];return c('concatMap')(k,Array.from(l.childNodes));}f.exports=i;},null);
__d('queryThenMutateDOM',['Run','emptyFunction','requestAnimationFrame'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j={},k=[],l=[];function m(p,q,r){if(!p&&!q)return;if(r&&j.hasOwnProperty(r)){return;}else if(r)j[r]=1;k.push(q||c('emptyFunction'));l.push(p||c('emptyFunction'));o();if(!h){h=true;c('Run').onLeave(function(){h=false;i=false;j={};k.length=0;l.length=0;});}}m.prepare=function(p,q,r){return function(){for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];t.unshift(this);var v=Function.prototype.bind.apply(p,t),w=q.bind(this);m(v,w,r);};};function n(){j={};var p=l.length,q=k.length,r=[],s;while(p--){s=l.shift();r.push(s());}while(q--){s=k.shift();s(r.shift());}i=false;o();}function o(){if(!i&&(l.length||k.length)){i=true;c('requestAnimationFrame')(n);}}f.exports=m;},null);
__d('LitestandShareAttachment',['csx','cx','CSS','DOMQuery','LitestandEllipsis','LitestandShareAttachmentConfig','queryThenMutateDOM'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=16,k=22,l=20,m=5,n=3,o=2,p=2,q=5,r=5,s="_5qqr",t="_6m2",u={getSimpleCropClass:function(){return s;},_truncateText:function(y,z){var aa,ba,ca,da=v(y);c('queryThenMutateDOM')(function(){aa=c('DOMQuery').scry(y,"._6m6")[0];ba=c('DOMQuery').scry(y,"._6m7")[0];ca=w(y,aa,da);},function(){if(!y.offsetHeight){if(z)c('CSS').addClass(y,s);return;}if(!ca){ba&&c('CSS').hide(ba);aa&&c('LitestandEllipsis').add(aa,da*x(y));}else if(ba&&ca){c('CSS').show(ba);c('LitestandEllipsis').add(ba,ca*j);}});},init:function(y){if(c('CSS').hasClass(y,s)){var z=false;c('queryThenMutateDOM')(function(){if(y.offsetHeight)z=true;},function(){if(z){c('CSS').removeClass(y,s);this._truncateText(y,true);}}.bind(this));return;}else{var aa=c('LitestandShareAttachmentConfig').ALLOW_SIMPLE_CROP&&c('CSS').hasClass(y,t);this._truncateText(y,aa);}},getNumDescriptionLines:function(y){return w(y,c('DOMQuery').scry(y,"._6m6")[0],v(y));},getDescriptionLineHeight:function(){return j;}};function v(y){var z=c('CSS').matchesSelector(y,"._59ap"),aa=c('CSS').matchesSelector(y,"._pb2"),ba=c('DOMQuery').scry(y,"^div._4rtc").length>0,ca;if(aa){ca=p;}else if(ba){ca=o;}else if(z){ca=n;}else ca=m;return ca;}function w(y,z,aa){var ba=c('DOMQuery').scry(y,"._6m3")[0];if(!z||!ba)return 0;var ca=c('DOMQuery').scry(y,"._59tj")[0],da=c('CSS').matchesSelector(y,"._59ap"),ea=c('CSS').matchesSelector(y,"._pb2"),fa=Math.round(z.scrollHeight/x(y));if(fa>aa&&!ea)return 0;var ga=ba.offsetHeight-q-z.offsetHeight-(ca?ca.offsetHeight:0)-(da?0:r)+1;return Math.floor(Math.max(ga,0)/j);}function x(y){return c('CSS').matchesSelector(y,"._pb2")?l:k;}f.exports=u;},null);
__d('JSLogger',['lowerFacebookDomain'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:false};function i(n){if(n=='/'||n.indexOf('/',1)<0)return false;var o=/^\/(v\d+\.\d\d?|head)\//.test(n);if(o)return (/^\/(dialog|plugins)\//.test(n.substring(n.indexOf('/',1))));return (/^\/(dialog|plugins)\//.test(n));}function j(n){if(n instanceof Error&&b.ErrorUtils)n=b.ErrorUtils.normalizeError(n);try{return JSON.stringify(n);}catch(o){return '{}';}}function k(n,event,o){if(!h.counts[n])h.counts[n]={};if(!h.counts[n][event])h.counts[n][event]=0;o=o==null?1:Number(o);h.counts[n][event]+=isFinite(o)?o:0;}h.logAction=function(event,n,o){if(this.type=='bump'){k(this.cat,event,n);}else if(this.type=='rate'){n&&k(this.cat,event+'_n',o);k(this.cat,event+'_d',o);}else{var p={cat:this.cat,type:this.type,event:event,data:n!=null?j(n):null,date:Date.now(),seq:h.seq++};h.head=h.head?h.head.next=p:h.tail=p;while(h.head.seq-h.tail.seq>h.MAX_HISTORY)h.tail=h.tail.next;return p;}};function l(n){if(!h.categories[n]){h.categories[n]={};var o=function(p){var q={cat:n,type:p};h.categories[n][p]=function(){h.forwarding=false;var r=null;if(c('lowerFacebookDomain').isValidDocumentDomain())return;r=h.logAction;if(i(location.pathname)){h.forwarding=false;}else try{r=b.top.require('JSLogger')._.logAction;h.forwarding=r!==h.logAction;}catch(s){}r&&r.apply(q,arguments);};};o('debug');o('log');o('warn');o('error');o('bump');o('rate');}return h.categories[n];}function m(n,o){var p=[];for(var q=o||h.tail;q;q=q.next)if(!n||n(q)){var r={type:q.type,cat:q.cat,date:q.date,event:q.event,seq:q.seq};if(q.data)r.data=JSON.parse(q.data);p.push(r);}return p;}f.exports={_:h,DUMP_EVENT:'jslogger/dump',create:l,getEntries:m};},null);
__d('VideoDisplayTimePlayButton',['CSS','DataStore','Event'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i='_spinner',j={getClicked:function(k){return c('DataStore').get(k,'clicked',false);},register:function(k,l){var m=k.id;h[m]=c('Event').listen(k,'click',function(){if(l){c('CSS').hide(k);c('CSS').show(l);}c('DataStore').set(k,'clicked',true);});if(l)h[m+i]=c('Event').listen(l,'click',function(){c('CSS').hide(l);c('CSS').show(k);c('DataStore').set(k,'clicked',false);});},unregister:function(k){var l=k.id;if(h.hasOwnProperty(l))h[l].remove();var m=l+i;if(h.hasOwnProperty(m))h[m].remove();}};f.exports=j;},null);
__d('VideosRenderingInstrumentation',['DataStore','VideoPlayerHTML5Experiments','performanceAbsoluteNow'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={storeRenderTime:function(i){var j=c('VideoPlayerHTML5Experiments').useMonotonicallyIncreasingTimers?c('performanceAbsoluteNow')():Date.now();c('DataStore').set(i,'videos_rendering_instrumentation',j);return j;},retrieveRenderTime:function(i){var j=c('DataStore').get(i,'videos_rendering_instrumentation',NaN);if(Number.isNaN(j))j=h.storeRenderTime(i);return j;}};f.exports=h;},null);