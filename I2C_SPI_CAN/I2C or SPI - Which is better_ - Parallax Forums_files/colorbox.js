$(document).ready(function () {

    $("img.bbcode_img").each(function () {
        var $this = $(this);
        if (!$this.parent('a.bbcode_url').length) {
            var src = $this.attr('src');
            $this.addClass('image');
            var a = $('<a/>').attr({href: src, class: "boximg"});
            $this.wrap(a);
        }
    });

    $('a.boximg').colorbox({ opacity:0.70, rel:'grouped'});
});