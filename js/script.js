$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img src="img/Header/arrows/left.svg" class="slider-arrows slider-arrows__left" alt="Arrow link">',
        nextArrow: '<img src="img/Header/arrows/right.svg" class="slider-arrows slider-arrows__right" alt="Arrow link">',
        asNavFor: '.slider-dots__head',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.slider-dots__head').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
            {
                breakpoint: 961,
                settings: "unslick"
            }
        ]
    });

    $('.surf-slider').slick({
        prevArrow: '<img src="img/Header/arrows/left.svg" class="slider-arrows slider-arrows__left" alt="Arrow link">',
        nextArrow: '<img src="img/Header/arrows/right.svg" class="slider-arrows slider-arrows__right" alt="Arrow link">',
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-map',
        responsive: [
            {
                breakpoint: 1166,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1021,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img src="img/Header/arrows/left.svg" class="slider-arrows slider-arrows__left" alt="Arrow link">',
        nextArrow: '<img src="img/Header/arrows/right.svg" class="slider-arrows slider-arrows__right" alt="Arrow link">'
    });

    $('.shop__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img src="img/Header/arrows/left.svg" class="slider-arrows slider-arrows__left" alt="Arrow link">',
        nextArrow: '<img src="img/Header/arrows/right.svg" class="slider-arrows slider-arrows__right" alt="Arrow link">'
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/section-4/plus.svg" alt="Company logo"></div><div class="quantity-button quantity-down"><img src="img/section-4/minus.svg" alt="Company logo"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $('.quantity-button').on('click', function () {
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html('$ ' + summ);
    });
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$ ' + summ);

    $('.surfboard-box__circle').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.menu-btn').on('click', function() {
        $('.menu').toggleClass('active');
    });

    new WOW().init();
});

