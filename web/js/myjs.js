require([
    'jquery',
    'owlcarousel'
], function($) {
    $('.brand-img').owlCarousel({
        loop: true,
        nav: false,
        margin: 32,
        items: 6,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3
            },
            481: {
                items: 4
            },
            1023: {
                items: 6
            }
        }
    });
});