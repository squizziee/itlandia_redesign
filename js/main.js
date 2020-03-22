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

function delay (URL) {
    setTimeout( function() { window.location = URL }, 1500 );
}

var height = $('#header').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > height) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});