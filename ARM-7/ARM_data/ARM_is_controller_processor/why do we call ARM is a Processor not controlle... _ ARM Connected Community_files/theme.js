$j( document ).ready(function() { 
	
	// check if it's mobile
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	
	// see what style of sidebar this page has
	var sidebarBox = $j('.j-social-actions').length > 0 ? '.j-social-actions' : '#jive-body-sidebarcol-container .j-box:nth-child(2)' ;
	
	// check if it's in chinesse or not
	function isChinese() {
		return (navigator.language == 'zh' || navigator.language == 'zh_CN' || $j('html').attr('lang') == 'zh' || $j('html').attr('lang') == 'zh_CN') ? true : false ;
	}
	
	function isPublic() {
		var privateContainers = [1001, 1004, 1031, 1066, 1114, 1115, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1130, 1131, 1133, 1136, 1139, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1153, 1154, 1155, 1160, 1161, 1162, 1164,1168,1169,1170,1171,1172,1173,2050];
   		var currentContainer = jive.global.containerID;
   		if (privateContainers.indexOf(currentContainer) == -1) {
       		return true;
       	} else {
       		return false;
       	}
   	}
	
	
	// move share icon to the active widget
	if($j('.j-button-share').length > 0 && !isMobile) {		
		$j('<li />').append($j('.j-button-share')
			.text('Share via email')
			.prepend($j('<span>', { class: "jive-icon-med jive-icon-share2 js-create-quick-link" }))
			).prependTo('#ul_socialgroup-actions-tab');
	}
	
	// dont allow speacil chars in username
	$j('#jive-user-registration-form #username').bind('keypress', function (event) {
		console.log(event);
    	var regex = new RegExp("^[a-zA-Z0-9]+$");
    	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    	if (!regex.test(key)) {
       		event.preventDefault();
       		return false;
    	}
	});
	
	// uat yellow background
	if(window.location.href.indexOf("community-uat") > -1) $j('#j-header').css({ 'background' : '#FFEC1B' });   
	
	// add social icons
	if(isPublic()) $j('.jive-content-footer, ' + sidebarBox).jiveShare("63bf086d-ee5b-461a-8f1d-2ce32335a22d", 'ARMCommunity'); 
	
	
	// add qr code
	if ($j('ul.j-box.j-social-actions, #jive-action-sidebar_document-actions-tab').length > -1 && isChinese() && isPublic() && !isMobile) {
    	var socialTrack = "%3futm_source%3dwechat%26utm_medium%3dSocial%2520Networking%26utm_campaign%3dARM%2520Social%2520Media";
    	var weixin = "<img style='display: block;margin: 0 auto; padding:10px;' src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURI(window.location.href) + socialTrack + "' /><div style='text-align:center;margin-bottom:10px;'>扫一扫，分享到微信</div>";
    	var localeId = '${locale}';
		if ((jive.global.containerID == '2104') || isPublic()) {
      		$j(sidebarBox).prepend(weixin);
    	}
 	} else if(_jive_current_user.ID == -1) {
	 	$j('.j-social-actions').remove(); // remove social actions when logged out so we don't have the padding
 	}
	
	// disalow special characters in username
	$j('#jive-user-registration-form #username').bind('keypress', function (event) {
		var regex = new RegExp("^[a-zA-Z0-9]+$");
		var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
		if (!regex.test(key))  {
			event.preventDefault();
			return false;
		}		
	});
	
	// if logged in
	if(_jive_current_user.ID != -1) {
		
		// mirror like button clicks on docs
		$j('.arm-footer-like').on( "click", function() {
			$j('.jive-acclaim-likelink').trigger( "click" );
		});
		$j('.j-social-actions').on("DOMSubtreeModified",function(){
			var fullText = $j('.acclaim-like-container .jive-acclaim-likelink').text(),
				text = fullText.split('L'), // temporary way to remove duplicate Like text
				number = $j('.acclaim-like-container .j-people-count').text();
			text[1] == undefined ?	
				$j('.arm-footer-like').text('('+number+')') :
				$j('.arm-footer-like').text('L'+text[1] + ' ('+number+')') ;
		});
		
	} else {
		$j('.arm-footer-like, .jive-content-footer-item .icon-thumbs-up').remove(); // remove likes if guest
	}
	
});