(function ( $j ) {
	$j.fn.jiveShare = function(pubCode, handle) {
		
		// check if it's in chinesse or not
		function isChinese() {
			return (navigator.language == 'zh' || $j('html').attr('lang') == 'zh') ? true : false ;
		}
	
		var html = $j('<div />', { class: 'social-icons' });
		
		// add each social link
		if(isChinese()) $j('<span />', { class: 'st_sina', title: '分享至微博', displayText:'' }).appendTo(html);
		$j('<span />', { class: 'st_facebook', title: 'Facebook', displayText:'' }).appendTo(html);
		$j('<span />', { class: 'st_twitter', st_via: handle, title: 'Twitter', displayText:'' }).appendTo(html);
		$j('<span />', { class: 'st_linkedin', title: 'Linkedin', displayText:'' }).appendTo(html);
		$j('<span />', { class: 'st_reddit', title: 'Reddit', displayText:'' }).appendTo(html);
		$j('<span />', { class: 'st_googleplus', title: 'Google+', displayText:'' }).appendTo(html);
		if(!isChinese()) $j('<span />', { class: 'st_sina', title: '分享至微博', displayText:'' }).appendTo(html);
		
		// attach to dom
		$j(this).append(html);
		
		// run the button script
		stLight.options({
			publisher: pubCode, 
			doNotHash: true, 
			doNotCopy: true, 
			hashAddressBar: false
		});	
		
	}
}( jQuery ));