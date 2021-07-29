$('.select-carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                // slidesToShow: 3,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.prev').on('click', function() {
    $('.select-carousel').slick('slickPrev')
})
$('.next').on('click', function() {
    $('.select-carousel').slick('slickNext')
})
$('.variations-carousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Табы
$(function() {
    $('.tabs__number').on('click', function(e) {
        e.preventDefault();

        $('.tabs__number').removeClass('active');
        $('.tabs__item').removeClass('active');

        $(this).addClass('active');
        $($(this).attr('data-tab')).addClass('active');
    });
    $('.tabs__number:first').click();
});
// Меню бургер
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu-list').toggleClass('active');
    });
});

// Анимация WOW
var wow = new WOW({
    mobile: false,

});
wow.init();