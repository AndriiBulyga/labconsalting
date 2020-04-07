$(document).ready(function() {
    // Бургер меню
    $('.navigation__burger').click(function(event) {
        $('.navigation__burger,.navigation__menu').toggleClass('active');
        $('.body').toggleClass('lock');
    });
    // Слайдер
    $('.big-slider').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        prewArrow: '<i class="fa fa-angle-left"></i>'
    });
    
});

