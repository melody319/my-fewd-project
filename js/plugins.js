// Scrollup js
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),p=!1;switch(a=d.scrollTrigger?l(d.scrollTrigger):l("<a/>",{id:d.scrollName,href:"#top"}),d.scrollTitle&&a.attr("title",d.scrollTitle),a.appendTo("body"),d.scrollImg||d.scrollTrigger||a.html(d.scrollText),a.css({display:"none",position:"fixed",zIndex:d.zIndex}),d.activeOverlay&&l("<div/>",{id:d.scrollName+"-active"}).css({position:"absolute",top:d.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+d.activeOverlay,zIndex:d.zIndex}).appendTo("body"),d.animation){case"fade":s="fadeIn",t="fadeOut",c=d.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=d.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===d.scrollFrom?d.scrollDistance:l(e).height()-l(o).height()-d.scrollDistance,l(o).scroll(function(){l(o).scrollTop()>i?p||(a[s](c),p=!0):p&&(a[t](c),p=!1)}),d.scrollTarget?"number"==typeof d.scrollTarget?n=d.scrollTarget:"string"==typeof d.scrollTarget&&(n=Math.floor(l(d.scrollTarget).offset().top)):n=0,a.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:n},d.scrollSpeed,d.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"easeOutElastic",animation:"fade",animationSpeed:500,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);

/*
 * classyNav.js 1.0.0
 * Responsive Megamenu plugins
 * Copyright (c) 2018 Designing World - https://themeforest.net/user/designing-world
 */

(function ($) {
    $.fn.classyNav = function (options) {

        // Variables
        var navContainer = $('.classy-nav-container');
        var classy_nav = $('.classynav ul');
        var classy_navli = $('.classynav > ul > li');
        var navbarToggler = $('.classy-navbar-toggler');
        var closeIcon = $('.classycloseIcon');
        var navToggler = $('.navbarToggler');
        var classyMenu = $('.classy-menu');
        var var_window = $(window);

        // default options
        var defaultOpt = $.extend({
            theme: 'light',
            breakpoint: 991,
            openCloseSpeed: 300,
            alwaysHidden: false,
            openMobileMenu: 'left',
            dropdownRtl: false,
            stickyNav: false,
            stickyFooterNav: false
        }, options);

        return this.each(function () {

            // light or dark theme
            if (defaultOpt.theme === 'light' || defaultOpt.theme === 'dark') {
                navContainer.addClass(defaultOpt.theme);
            }

            // open mobile menu direction 'left' or 'right' side
            if (defaultOpt.openMobileMenu === 'left' || defaultOpt.openMobileMenu === 'right') {
                navContainer.addClass(defaultOpt.openMobileMenu);
            }

            // dropdown rtl
            if (defaultOpt.dropdownRtl === true) {
                navContainer.addClass('dropdown-rtl');
            }

            // navbar toggler
            navbarToggler.on('click', function () {
                navToggler.toggleClass('active');
                classyMenu.toggleClass('menu-on');
            });

            // close icon
            closeIcon.on('click', function () {
                classyMenu.removeClass('menu-on');
                navToggler.removeClass('active');
            });

            // add dropdown & megamenu class in parent li class
            classy_navli.has('.dropdown').addClass('cn-dropdown-item');
            classy_navli.has('.megamenu').addClass('megamenu-item');

            // adds toggle button to li items that have children
            classy_nav.find('li a').each(function () {
                if ($(this).next().length > 0) {
                    $(this).parent('li').addClass('has-down').append('<span class="dd-trigger"></span>');
                    $(this).parent('li').addClass('has-down').append('<span class="dd-arrow"></span>');
                }
            });

            // expands the dropdown menu on each click
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('ul').stop(true, true).slideToggle(defaultOpt.openCloseSpeed);
                $(this).parent('li').toggleClass('active');
            });

            // add padding in dropdown & megamenu item
            $('.megamenu-item, .cn-dropdown-item').addClass('pr12');
            $('.megamenu-item').removeClass('has-down pr12');

            // expands the megamenu on each click
            classy_nav.find('li .dd-trigger').on('click', function (e) {
                e.preventDefault();
                $(this).parent('li').children('.megamenu').slideToggle(defaultOpt.openCloseSpeed);
            });

            // check browser width in real-time
            function breakpointCheck() {
                var windoWidth = window.innerWidth;
                if (windoWidth <= defaultOpt.breakpoint) {
                    navContainer.removeClass('breakpoint-off').addClass('breakpoint-on');
                } else {
                    navContainer.removeClass('breakpoint-on').addClass('breakpoint-off');
                }
            }

            breakpointCheck();

            var_window.on('resize', function () {
                breakpointCheck();
            });

            // always hidden enable
            if (defaultOpt.alwaysHidden === true) {
                navContainer.addClass('breakpoint-on').removeClass('breakpoint-off');
            }

            // sticky
            if (defaultOpt.stickyNav === true) {
                var_window.on('scroll', function () {
                    if (var_window.scrollTop() > 0) {
                        navContainer.addClass('classy-sticky');
                    } else {
                        navContainer.removeClass('classy-sticky');
                    }
                });
            }

            // footer sticky
            if (defaultOpt.stickyFooterNav === true) {
                navContainer.addClass('classy-sticky-footer');
            }
        });
    };
}(jQuery));