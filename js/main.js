$(".social_btn_wrapper").on("click", function() {
    $(this).toggleClass("rubberBandAnimated");
});

$(".navbar_option").on("click", function() {
    if (!($(this).hasClass("navbar_option_active"))) {
        $(".navbar_option").removeClass("navbar_option_active_menu");
        $(".navbar_option").removeClass("navbar_option_active");
    }
    $(this).toggleClass("navbar_option_active_menu");
    $(this).toggleClass("navbar_option_active");
});

function redirect(URL) {
    window.location = URL;
}

function redirect(URL, delay) {
    setTimeout( function() { window.location = URL }, delay );
}

var height = $('#header').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        $(".navbar").addClass("fixed");
        $("#header").addClass("header_active_navbar");
    } else {
        $(".navbar").removeClass("fixed");
        $("#header").removeClass("header_active_navbar");
    }
});