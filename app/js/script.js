//Форма
$(".form__input-name").on("focus", function() {
    $(".form__label-name").addClass("label-js");
    if($(".form__input-email").val().length < 1) {
        $(".form__label-email").removeClass("label-js");
    } 
    if ($(".form__input-subject").val().length < 1) {
        $(".form__label-subject").removeClass("label-js");
    }
    if ($(".form__textarea").val().length < 1) {
        $(".form__label-message").removeClass("label-textarea-js");
    }
})
$(".form__input-email").on("focus", function() {
    $(".form__label-email").addClass("label-js");
    if($(".form__input-name").val().length < 1) {
        $(".form__label-name").removeClass("label-js");
    } 
    if ($(".form__input-subject").val().length < 1) {
        $(".form__label-subject").removeClass("label-js");
    }
    if ($(".form__textarea").val().length < 1) {
        $(".form__label-message").removeClass("label-textarea-js");
    }
})
$(".form__input-subject").on("focus", function() {
    $(".form__label-subject").addClass("label-js");
    if($(".form__input-name").val().length < 1) {
        $(".form__label-name").removeClass("label-js");
    } 
    if ($(".form__input-email").val().length < 1) {
        $(".form__label-email").removeClass("label-js");
    }
    if ($(".form__textarea").val().length < 1) {
        $(".form__label-message").removeClass("label-textarea-js");
    }
})
$(".form__textarea").on("focus", function() {
    $(".form__label-message").addClass("label-textarea-js");
    console.log($(".form__textarea").val().length)
    if($(".form__input-name").val().length < 1) {
        $(".form__label-name").removeClass("label-js");
    } 
    if ($(".form__input-email").val().length < 1) {
        $(".form__label-email").removeClass("label-js");
    }
    if ($(".form__input-subject").val().length < 1) {
        $(".form__label-subject").removeClass("label-js");
    }
})
//Стрелочка наверх
if (window.pageYOffset > 1010) {
    $(".arrow").addClass("arrow-js");
} else {
    $(".arrow").removeClass("arrow-js");
}
$(window).on("scroll", function() {
    if (window.pageYOffset > 1010) {
        $(".arrow").addClass("arrow-js");
    } else {
        $(".arrow").removeClass("arrow-js");
    }
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
    } else {
        $(".menu").css("transform", "translateX(-5000px)");
        $(".menu__item").css("transform", "scale(5)");
        $(".menu__item").css("transform", "rotate(360deg)");
    }
});
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

    /*
    * Translated default messages for the jQuery validation plugin.
    * Locale: RU (Russian; русский язык)
    */
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

//Отступы для Advantages
if (33 > $(".advantages__element .element-title:eq(0)").innerHeight() < 33 || 33 > $(".advantages__element .element-title:eq(1)").innerHeight() < 33 || 33 > $(".advantages__element .element-title:eq(2)").innerHeight() < 33 || 33 > $(".advantages__element .element-title:eq(3)").innerHeight() < 33) {
    $(".advantages__element .element-title").addClass("element-title-js-33");
    if ($(".advantages__element .element-title:eq(0)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(0)").addClass("element-title-js-30");
    }
    if ($(".advantages__element .element-title:eq(1)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(1)").addClass("element-title-js-30");
    }
    if ($(".advantages__element .element-title:eq(2)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(2)").addClass("element-title-js-30");
    }
    if ($(".advantages__element .element-title:eq(3)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(3)").addClass("element-title-js-30");
    }
}
if ($(".advantages__element .element-title:eq(0)").innerHeight() > 45 || $(".advantages__element .element-title:eq(1)").innerHeight() > 45 || $(".advantages__element .element-title:eq(2)").innerHeight() > 45 || $(".advantages__element .element-title:eq(3)").innerHeight() > 45) {
    $(".advantages__element .element-title").addClass("element-title-js-45");
        if ($(".advantages__element .element-title:eq(0)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(0)").addClass("element-title-js-40");
    }
    if ($(".advantages__element .element-title:eq(1)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(1)").addClass("element-title-js-40");
    }
    if ($(".advantages__element .element-title:eq(2)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(2)").addClass("element-title-js-40");
    }
    if ($(".advantages__element .element-title:eq(3)").innerHeight() < 20) {
        $(".advantages__element .element-title:eq(3)").addClass("element-title-js-40");
    }
}
//Категории 
$(".title-phone").on("click", function() {
    if (!$(".filter-element").hasClass('filter-element-js')) {
        $(".filter-element").addClass("filter-element-js");
    } else {
        $(".filter-element").removeClass("filter-element-js");
    }
})
