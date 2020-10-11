//Слайдер
var swiper = new Swiper('.header__carousel .swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop: true,
    effect: 'flip'
});
var swiperServiceInfo = new Swiper('.our-service__list .swiper-container', {
    direction: "vertical",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop: true,
    effect: 'slide'
});
var swiperServicePhoto = new Swiper('.our-service__swiper-photo .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop: true,
    effect: 'slide'
});
var swiperCaseInfo = new Swiper('.case-study__swiper .swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.case-study__swiper .swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop: true
});
var swiperCaseImages = new Swiper('.case-study__picture .swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.case-study__swiper .swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop: true
});
swiperCaseInfo.controller.control = swiperCaseImages;
swiperCaseImages.controller.control = swiperCaseInfo;
swiperServicePhoto.controller.control = swiperServiceInfo;
swiperServiceInfo.controller.control = swiperServicePhoto

//Форма
//Клик вне формы
$(".input-js").on("focus", function () {
    this.nextElementSibling.classList.add("label-js");
})
$(".input-js").on("blur", function () {
    if ($(this).val().length < 1) {
        this.nextElementSibling.classList.remove("label-js");
    }
})

//Стрелочка наверх
var arrow = function () {
    if (window.pageYOffset > 1010) {
        $(".arrow").addClass("arrow-js");
    } else {
        $(".arrow").removeClass("arrow-js");
    }
}
arrow();
$(window).on("scroll", function () {
    arrow();
}) 
$(".arrow-js").on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
})

// Бургер меню
$(".burger-menu").on("click", function () {
    if ($(this).prop("checked")) {
        $(".menu").addClass("menu-active-js");
        $(".menu__item").css("transform", "rotate(0deg)");
    } else {
        $(".menu").removeClass("menu-active-js");
        $(".menu__item").css("transform", "rotate(360deg)");
    }
});
    if ($(window).width() < 1280) {
        $(document).mouseup(function (e){ // событие клика по странице
            if (!$(".header__menu").is(e.target) && // если клик сделан не по элементу
                $(".header__menu").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
                    $(".menu").removeClass("menu-active-js");
                    $(".menu__item").css("transform", "rotate(360deg)");
                    $(".burger-menu").prop("checked", false);
            }
        });
    }

//Прокрутка цифр
function countup(count) {
    var countBlockTop = $("." + count).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
        if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
            $(".element-number-js").animate({
                opacity: 1,
            }, 4000);
            show = false;

            $('.' + count).spincrement({
                from: 0,
                duration: 4000,
                thousandSeparator: false,
            });
        }
    })
}
$(function () {
    countup("count", $(".count").text());
});

//Валидация формы
$.extend($.validator.messages, {
    required: "Это поле необходимо заполнить.",
    remote: "Пожалуйста, введите правильное значение.",
    email: "Пожалуйста, введите корректный адрес электронной почты.",
    url: "Пожалуйста, введите корректный URL.",
    date: "Пожалуйста, введите корректную дату.",
    dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
    number: "Пожалуйста, введите число.",
    digits: "Пожалуйста, вводите только цифры.",
    creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
    equalTo: "Пожалуйста, введите такое же значение ещё раз.",
    extension: "Пожалуйста, выберите файл с правильным расширением.",
    maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
    minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
    rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
    range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
    max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
    min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});

//$.validator.addMethod('js-input-tel', function(value, element) {
//    return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
//}, 'Введите корректный номер');

$('.js-form').validate({
    submitHandler: function (form) {
        // Отправка формы при успешной валидации
        $(form).trigger('formSubmit');
        $(".modal-form").animate({
            left: 0,
        }, 500)
        //Очистка формы
        var clean = function() {
            $(function () {
                $(".input-js").each(function () {
                    $(this).data('defvalue', this.value);
                });
            })
            $(".input-js").each(function () {
                $(this).val($(this).data('defvalue'));
                this.nextElementSibling.classList.remove("label-js");
            })
        }
        setTimeout(clean, 1000);
        setTimeout(modalCross, 3000);
    },
    errorPlacement: function (error, element) {
        element.parent().append(error);
    }
});

//$('.js-form-login').validate({
//    submitHandler: function(form) {
// Отправка формы при успешной валидации
//        $(form).trigger('formSubmit');
//    },
//    errorPlacement: function(error, element) {
//        element.parent().append(error);
//    }
//});

//$('.js-input-tel').inputmask('+7 (999) 999-99-99');

//Отступы для Advantages ДОРАБОТАТЬ
var advantages33 = function () {
    $(".advantages__element .element-title").each(function (index, element) {
        $(element).addClass("element-title-js-33");
        if ($(element).innerHeight()) {
            $(element).addClass("element-title-js-30");
        };
    });
};
var advantages45 = function () {
    $(".advantages__element .element-title").each(function (index, element) {
        $(element).addClass("element-title-js-45");
        if ($(element).innerHeight() < 20) {
            $(element).addClass("element-title-js-40");
        };
    });
};
if ($(".advantages__element .element-title").each(function (index, element) {
        33 > $(element).innerHeight() > 30;
    })) {
    advantages33();
};
if ($(".advantages__element .element-title").each(function (index, element) {
        45 > $(element).innerHeight() > 40;
    })) {
    advantages45();
};

//Категории 
$(".title-phone").on("click", function () {
    $(".filter-element").toggleClass('filter-element-js');
})

//Якоря меню
$(".menu__item-text").on('click', function (e) {
    $('html,body').stop().animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
    e.preventDefault();
});

//Якорь
$(".anchor-js").on('click', function (e) {
    $('html,body').stop().animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 1000);
    e.preventDefault();
});

//Центровка price
$(".our-pricing .centering").scrollLeft(250);

//Модалка на форму
var modalCross = function() {
    $(".modal-form").animate({
        left: 1000,
    }, 800);
}
$(".modal-cross").on("click", function(e) {
    e.preventDefault();
    modalCross();
})
