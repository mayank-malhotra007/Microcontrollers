Cufon.replace('h1,h2,h3,h4,h5,h6, #main-nav li a');


function createMobileMenu(menu_id, mobile_menu_id){
    // Create the dropdown base
    jQuery("<select />").appendTo(menu_id);
    jQuery(menu_id).find('select').first().attr("id",mobile_menu_id);
    
    // Populate dropdown with menu items
    jQuery(menu_id).find('a').each(function() {        
        var el = jQuery(this);       
        
        var selected = '';
        if (el.parent().hasClass('current-menu-item') == true){
            selected = "selected='selected'";
        }        
        
        var depth = el.parents("ul").size();
        var space = '';
        if(depth > 1){
            for(i=1; i<depth; i++){
                space += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
            }
        }        
        
        jQuery("<option "+selected+" value='"+el.attr("href")+"'>"+space+el.text()+"</option>").appendTo(jQuery(menu_id).find('select').first());
    });
    jQuery(menu_id).find('select').first().change(function() {
        window.location = jQuery(this).find("option:selected").val();
    });    
}


/* =========================================================
Create mobile main menu
============================================================ */
jQuery(document).ready(function(){
    if(jQuery('#main-menu').length > 0){
        createMobileMenu('#main-menu','responsive-menu');	
    }
});
/* =========================================================
Create mobile top menu
============================================================ */
jQuery(document).ready(function(){
    if(jQuery('#main-menu').length > 0){
        createMobileMenu('#top-nav','top-responsive-menu');	    
    }
});
	
/* =========================================================
Featured news slider
============================================================ */
jQuery(function() {
	
    var kp_carousel = jQuery('.kp-carousel');
    if(kp_carousel.length > 0){
        jQuery.each(kp_carousel, function(index, item){
            var _id = '#'+jQuery(this).attr('id');
            var _prev_id = '#'+jQuery(this).parent().find(jQuery('.prev')).first().attr('id');
            var _next_id = '#'+jQuery(this).parent().find(jQuery('.next')).first().attr('id');
		
            jQuery(_id).carouFredSel({
                responsive: true,
                prev: _prev_id,
                next: _next_id,
                width: '100%',
                scroll: 1,
                auto: false,
                items: {
                    width: 210,
                    visible: {
                        min: 1,
                        max: 3
                    }
                }
            });
        });	
    }
});	
	
/* =========================================================
Social icons hover
============================================================ */
jQuery(document).ready(function(){
    jQuery("#header-top .social-links a").mouseenter(function(){
        jQuery(this).find('img').fadeTo(300, 0);
    }).mouseleave(function(){
        jQuery(this).find('img').fadeTo(300, 1);
    });
    jQuery("#footer-aside .social-links a").mouseenter(function(){
        jQuery(this).find('img').fadeTo(300, 0);
    }).mouseleave(function(){
        jQuery(this).find('img').fadeTo(300, 1);
    });	
});
/* =========================================================
Fix css
============================================================ */
jQuery(document).ready(function(){
    jQuery(".loading-gif").hide();
    if(jQuery("#comments #respond").prev().find("li").length==0){
        jQuery("#comments #respond").css("border-top","none");
    };
    jQuery('.h-post-item').parent().find('.pagination').css({
        "border-top":"solid 1px #cccccc",
        "padding-top":"5px"
    });
    jQuery(".container .kp-divider:last").remove();
    jQuery("#main-nav ul li:first-child a").css("border-top","none");
    jQuery("#main-nav ul ul li:first-child").css("margin-top",0);	
    jQuery("#main-nav ul li:first-child").css("border-top","none");
    jQuery("#footer-aside .footer-widget ul li:last-child").css("border-bottom","none");
    jQuery("#sidebar .widget ul li:last-child").css("border-bottom","none");
    jQuery(".vertical-widget li:first-child").css("margin-top",0);
    jQuery("#top-nav ul li ul li:last-child").css("border-bottom","none");
    jQuery(".h-post-item li:last-child").css({
        "border-bottom":"none",
        "padding-bottom":5
    });	

});
/* =========================================================
Accordion
============================================================ */
jQuery(document).ready(function() {
    (function() {
        var acc_wrapper=jQuery('.acc-wrapper');
        if (acc_wrapper.length >0) 
        {
            jQuery('.acc-wrapper .accordion-container').hide();
            jQuery.each(acc_wrapper, function(index, item){
                jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
				
            });
            jQuery('.accordion-title').on('click', function(e) {
                if( jQuery(this).next().is(':hidden') ) {
                    jQuery(this).parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
                    jQuery(this).toggleClass('active').next().slideDown(300);
                }
                e.preventDefault();
            });
        }
    })();
});
/* =========================================================
Flickr Feed
============================================================ */
jQuery(document).ready(function(){ 
    if(jQuery('.flickr_wrap').length > 0){

        jQuery.each(jQuery('.flickr_wrap'), function(index, item){

            jQuery(this).jflickrfeed({
                limit: jQuery(this).find('.flick_count').first().val(),
                qstrings: {
                    id: jQuery(this).find('.flick_id').first().val(),
                    tags: jQuery(this).find('.flick_tags').first().val()
                },
                itemTemplate:
                '<li class="flickr-badge-image">' +
            '<a rel="prettyPhoto[kopa_flickr]" href="{{image}}" title="{{title}}">' +
            '<img src="{{image_s}}" alt="{{title}}" width="55px" heigth="55px" />' +
            '</a>' +
            '</li>'
            }, function(data) {
                jQuery("a[rel^='prettyPhoto']").prettyPhoto({
                    show_title: false
                });
            });
            
        });
        
    }
});
/* =========================================================
prettyPhoto
============================================================ */
function kopaSetupPrettyPhoto(){
    jQuery("a[rel^='prettyPhoto']").prettyPhoto({
        deeplinking:false
    }).mouseenter(function(){
        jQuery(this).find('img').fadeTo(500, 0.3);
    }).mouseleave(function(){
        jQuery(this).find('img').fadeTo(400, 0.6);
    });    
}

jQuery(document).ready(function(){
    kopaSetupPrettyPhoto();
});
/* =========================================================
Scroll to top
============================================================ */
jQuery(document).ready(function(){	
    // scroll body to 0px on click
    jQuery('#scroll-to-top').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
});		
/* =========================================================
Comment Form
============================================================ */
jQuery(document).ready(function() {
    var validator = jQuery("#comments-form").kendoValidator().data("kendoValidator"),
    status = jQuery("#status-message");
    jQuery("#submit-comment").click(function() {
        if (validator.validate()) {
            status.text(jQuery('#kopa_verify_msg_1').val()).addClass("valid");
        } else {
            status.text(jQuery('#kopa_verify_msg_2').val()).addClass("invalid");
        }
    });
});

/* =========================================================
Remove Broken Images
============================================================ */			
jQuery(window).bind('load', function() {
    jQuery('img').each(function() {
        if((typeof this.naturalWidth != "undefined" && this.naturalWidth == 0 ) || this.readyState == 'uninitialized' ) {
            var parent = jQuery(this).parent();
            if(  parent[0].tagName.toLowerCase() == 'a'){
                parent.remove();
            }else{
                jQuery(this).remove();
            }
        }
    });
})

/* =========================================================
Ajax Pagin For Widget
============================================================ */	
function pagingWidget_ONCLICK(obj,paged,total,id_wrap){
    
    var li_wrap = jQuery(obj).parent();
    var ul_wrap = li_wrap.parent();    
    var paging_wrap = ul_wrap.parent();
    var content_wrap = paging_wrap.parent().find('.h-post-item-widget').first();   
    
    var wargs = paging_wrap.find('.kopa-widget-query-args').first().val();    
    
    if(jQuery(obj).parent().hasClass('current') == false){
        jQuery.ajax({
            type:'POST',
            url: jQuery('#kopa-ajaxurl').val(),
            dataType:'html',
            async:true,
            data: {
                action  : 'kopa_widget_paging',
                nonce   : jQuery('#kopa_widget_paging_nonce').val(),
                paged   : paged,
                wargs   : wargs
            },
            beforeSend:function(XMLHttpRequest, settings){                  
                paging_wrap.hide();
                content_wrap.slideUp(500);                
            },
            complete:function(XMLHttpRequest, textStatus){
                
            },
            success : function(data){                  
                content_wrap.html(data);                                   
                
                ul_wrap.find('.current').removeClass('current');                                
                ul_wrap.find("a[rel^='"+paged+"']").first().parent().addClass('current');                
                Cufon.refresh();
                FB.XFBML.parse();
                kopaSetupPrettyPhoto();
                   
                if(ul_wrap.find('.previous-page').first().length > 0){
                    ul_wrap.find('.previous-page').first().parent().remove();
                }
                
                if(ul_wrap.find('.next-page').first().length > 0){
                    ul_wrap.find('.next-page').first().parent().remove();
                }
                if(paged > 1){
                    ul_wrap.prepend('<li><a class="previous-page paging" href="#'+id_wrap+'" onclick="pagingWidget_ONCLICK(jQuery(this),'+(paged - 1 )+','+total+',\''+id_wrap+'\');">'+kopa_translate_string['PREVIOUS']+'</a></li>');
                }
                if(paged < total){
                    ul_wrap.append('<li><a class="next-page paging" href="#'+id_wrap+'" onclick="pagingWidget_ONCLICK(jQuery(this),'+(paged + 1 )+','+total+',\''+id_wrap+'\');">'+kopa_translate_string['NEXT']+'</a></li>');                
                }
                
                content_wrap.slideDown(500);
                paging_wrap.show();
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest +' : '+textStatus +' : '+ errorThrown);
            }
        });  
    }
    return false;
}