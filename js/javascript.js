$(document).ready(function() {

(function () {

    if ($.fn.classyNav) {
        $('#headerNav').classyNav();
        $('#footerNav').classyNav();
    }

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        center: true,
        margin:20,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    })

    if ($.fn.sticky) {
        $("#stickyNav").sticky({
            topSpacing: 0
        });
    }

    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: 'Top'
        });
    }

    $("a[href='#']").on('click', function () {
        $.preventDefault();
    });

})(jQuery);

})