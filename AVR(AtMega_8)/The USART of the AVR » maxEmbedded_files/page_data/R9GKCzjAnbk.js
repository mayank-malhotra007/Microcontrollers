/*!CK:1564100666!*//*1458859477,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["WLvgd"]); }

__d('DimensionTracking',['Cookie','Event','debounce','getViewportDimensions','isInIframe'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){var i=c('getViewportDimensions')();c('Cookie').set('wd',i.width+'x'+i.height);}if(!c('isInIframe')()){setTimeout(h,100);c('Event').listen(window,'resize',c('debounce')(h,250));c('Event').listen(window,'focus',h);}},null);