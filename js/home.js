
$(document).ready(function() {

 $("#owl-demo").owlCarousel({
   autoPlay : 5000,
   stopOnHover : true,
   navigation:true,
   paginationSpeed : 1000,
   goToFirstSpeed : 2000,
   singleItem : true,
   autoHeight : true,
   transitionStyle:"fade",
   navigationText: ["<span class='icon la la-arrow-circle-left'></span>", "<i class='icon la la-arrow-circle-right'></span>"]
 });

});

$(".owl-1-pag-auto").owlCarousel({
    autoPlay: 5e3,
    items: 1,
    itemsDesktop: [1e3, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [470, 1],
    itemsMobile: !1,
    pagination: !0,
    paginationNumbers: !1
})

$(".owl-3-pag-auto").owlCarousel({
    autoPlay: !1,
    items: 3,
    navigation: true,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [768, 2],
    itemsTablet: [480, 1],
    itemsMobile: !1,
    pagination: !0,
    paginationNumbers: !1
})

function initPageSliders() {
    ! function(e) {
        "use strict";
        e(".fullwidth-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon la la-arrow-circle-left'></span>", "<i class='icon la la-arrow-circle-right'></span>"]
        }), e(".fullwidth-slider-auto").owlCarousel({
            autoPlay: 4e3,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<span class='icon la la-arrow-circle-left'></span>", "<i class='icon la la-arrow-circle-right'></span>"]
        }), e("#owl-clients").owlCarousel({
            autoPlay: 6e3,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [768, 3],
            itemsTablet: [480, 2],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1
        }), e(".owl-clients-auto").owlCarousel({
            autoPlay: 5e3,
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1
        }), e(".owl-clients-no-auto").owlCarousel({
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }), e(".owl-3items-nav").owlCarousel({
            items: 4,
            itemsDesktop: [1e3, 3],
            itemsDesktopSmall: [900, 2],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon la la-arrow-circle-left'></span>", "<i class='icon la la-arrow-circle-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), e(".owl-clients-nav").owlCarousel({
            items: 5,
            itemsDesktop: [1e3, 4],
            itemsDesktopSmall: [900, 3],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !1,
            paginationNumbers: !1,
            navigation: !0,
            navigationText: ["<span class='icon la la-arrow-circle-left'></span>", "<i class='icon la la-arrow-circle-right'></span>"],
            rewindNav: !0,
            scrollPerPage: !1
        }), e(".owl-1-pag").owlCarousel({
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }), e(".owl-1-pag-auto").owlCarousel({
            autoPlay: 5e3,
            items: 1,
            itemsDesktop: [1e3, 1],
            itemsDesktopSmall: [900, 1],
            itemsTablet: [470, 1],
            itemsMobile: !1,
            pagination: !0,
            paginationNumbers: !1
        }); 
        var t = e(".fullwidth-slideshow").data("owlCarousel");
        if (e(document.documentElement).keyup(function(e) {
                37 == e.keyCode ? t.prev() : 39 == e.keyCode && t.next()
            }), e(".owl-carousel").lenth) {
            var t = e(".owl-carousel").data("owlCarousel");
            t.reinit()
        }
    }(jQuery)
}
