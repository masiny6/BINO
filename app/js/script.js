$(".form__input-name").on("click", function() {
    $(".form__label-name").addClass("label-js");
})
$(".form__input-email").on("click", function() {
    $(".form__label-email").addClass("label-js");
})
$(".form__input-subject").on("click", function() {
    $(".form__label-subject").addClass("label-js");
})
$(".form__textarea").on("click", function() {
    $(".form__label-message").addClass("label-textarea-js");
})

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
        $(".menu__item").css("margin-left", "50px");
    } else {
        $(".menu").css("transform", "translateX(-5000px)");
        $(".menu__item").css("transform", "scale(5)");
        $(".menu__item").css("transform", "rotate(360deg)");
        $(".menu__item").css("margin-left", "200px");
    }
});