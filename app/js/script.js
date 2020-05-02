$(document).ready(function() {
    // Бургер меню
    $('.navigation__burger').click(function(event) {
        $('.navigation__burger,.navigation__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });

    // Слайдер
    $('.big-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<i class="fa fa-angle-left arrow-left"></i>',
        nextArrow: '<i class="fa fa-angle-right arrow-right"></i>',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    
});

