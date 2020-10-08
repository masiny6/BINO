//Слайдер
var swiper = new Swiper('.header__carousel .swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop:true,
    effect: 'flip'
});
var swiperServiceInfo = new Swiper('.our-service__list .swiper-container', {
    direction: "vertical",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop:true,
    effect: 'slide'
});
var swiperServicePhoto = new Swiper('.our-service__swiper-photo .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: true,
    loop:true,
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
    loop:true
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
    loop:true
});
swiperCaseInfo.controller.control = swiperCaseImages;
swiperCaseImages.controller.control = swiperCaseInfo;
swiperServicePhoto.controller.control = swiperServiceInfo;
swiperServiceInfo.controller.control = swiperServicePhoto

//Форма
//Клик вне формы
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("#form-js"); // тут указываем ID элемента
      if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
          $(".form__label-name").removeClass("label-js");
          $(".form__label-email").removeClass("label-js");
          $(".form__label-subject").removeClass("label-js");
          $(".form__label-message").removeClass("label-textarea-js");
        }
    });

var inputName = function() {
    if($(".form__input-name").val().length < 1) {
        $(".form__label-name").removeClass("label-js");
    } 
}
var inputEmail = function() {
    if ($(".form__input-email").val().length < 1) {
        $(".form__label-email").removeClass("label-js");
    }
}
var inputSubject = function() {
    if ($(".form__input-subject").val().length < 1) {
        $(".form__label-subject").removeClass("label-js");
    }
}
var inputMessage = function() {
    if ($(".form__textarea").val().length < 1) {
        $(".form__label-message").removeClass("label-textarea-js");
    }
}

$(".form__input-name").on("focus", function() {
    $(".form__label-name").addClass("label-js");
    inputEmail();
    inputSubject();
    inputMessage();
})
$(".form__input-email").on("focus", function() {
    $(".form__label-email").addClass("label-js");
    inputName();
    inputSubject();
    inputMessage();
})
$(".form__input-subject").on("focus", function() {
    $(".form__label-subject").addClass("label-js");
    inputName();
    inputEmail();
    inputMessage();
})
$(".form__textarea").on("focus", function() {
    $(".form__label-message").addClass("label-textarea-js");
    inputName();
    inputEmail();
    inputSubject();
})

//Стрелочка наверх
var strelka = function() {
    if (window.pageYOffset > 1010) {
        $(".arrow").addClass("arrow-js");
    } else {
        $(".arrow").removeClass("arrow-js");
    }
}
strelka();
$(window).on("scroll", function() {
    strelka();
})
$(".arrow-js").on("click", function() {
    $('html, body').animate({scrollTop: 0},600);
    return false;
})

// Бургер меню

$(".burger-menu").on("click", function(){
    if ($(".burger-menu").prop("checked")) {
        $(".menu").css("transform", "translateX(0px)");
        $(".menu__item").css("transform", "scale(1)");
        $(".menu__item").css("transform", "rotate(0deg)");
    }
     else {
        $(".menu").css("transform", "translateX(-5000px)");
        $(".menu__item").css("transform", "scale(5)");
        $(".menu__item").css("transform", "rotate(360deg)");
    }
});
//ДОРАБОТАТЬ КЛИК ВНЕ МЕНЮ
/*$(document).mouseup(function (e) {
    var container = $(".header-menu");
    if (container.has(e.target).length === 0){
        $(".menu").css("transform", "translateX(-5000px)");
        $(".menu__item").css("transform", "scale(5)");
        $(".menu__item").css("transform", "rotate(360deg)");
    }
});
*/

//Прокрутка цифр
function countup(count){
    var countBlockTop = $("."+count).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;
                
    $(window).scroll( function (){
        if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
            show = false;
                    
            $('.'+count).spincrement({
                from: 0,
                duration: 4000,
                thousandSeparator: false,
            });
        }
    })	
}
    $(function() {
    countup("count", $(".count").text());
    });
    
//Валидация формы
   $.extend( $.validator.messages, {
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
    maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
    minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
    rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
    range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
    max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
    min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );

//$.validator.addMethod('js-input-tel', function(value, element) {
//    return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
//}, 'Введите корректный номер');

$('.js-form').validate({
    submitHandler: function(form) {
        // Отправка формы при успешной валидации
        $(form).trigger('formSubmit');
    },
    errorPlacement: function(error, element) {
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
var advantages33 = function() {
    $(".advantages__element .element-title").each(function(index, element) {
        $(element).addClass("element-title-js-33");
        if($(element).innerHeight() < 20) {
            $(element).addClass("element-title-js-30");
        };
    });
};
var advantages45 = function() {
    $(".advantages__element .element-title").each(function(index, element) {
        $(element).addClass("element-title-js-45");
        if($(element).innerHeight() < 20) {
            $(element).addClass("element-title-js-40");
        };
    });
};
if ($(".advantages__element .element-title").each(function(index, element) {
    $(element).innerHeight() > 30;
})) {
    advantages33();
};
if ($(".advantages__element .element-title").each(function(index, element) {
    $(element).innerHeight() > 40;
})) {
    advantages45();
};

//Категории 
$(".title-phone").on("click", function() {
    if (!$(".filter-element").hasClass('filter-element-js')) {
        $(".filter-element").addClass("filter-element-js");
    } else {
        $(".filter-element").removeClass("filter-element-js");
    }
})
//Якоря меню
$(".about-us-js").on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $("#our-history").offset().top }, 1000);
    e.preventDefault();
});
$(".portfolio-js").on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $("#portfolio").offset().top }, 1000);
    e.preventDefault();
});
$(".pricing-js").on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $("#pricing").offset().top }, 1000);
    e.preventDefault();
});
$(".team-js").on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $("#team").offset().top }, 1000);
    e.preventDefault();
});
$(".blog-js").on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $("#blog").offset().top }, 1000);
    e.preventDefault();
});
$(".contact-js").on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $("#contact").offset().top }, 1000);
    e.preventDefault();
});

//Центровка price
$(".our-pricing .centering").scrollLeft(280);