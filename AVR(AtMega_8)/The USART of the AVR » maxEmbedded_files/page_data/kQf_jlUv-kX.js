/*!CK:2345433293!*//*1459175614,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sgZDr"]); }

__d('DetectBrokenProxyCache',['AsyncSignal','Cookie','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=c('Cookie').get(j);if(k!=i&&k!=null&&i!='0'){var l={c:'si_detect_broken_proxy_cache',m:j+' '+i+' '+k},m=new (c('URI'))('/common/scribe_endpoint.php').getQualifiedURI().toString();new (c('AsyncSignal'))(m,l).send();}}f.exports={run:h};},null);