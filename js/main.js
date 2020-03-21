$(".social_btn_wrapper").on("click", function() {
    $(this).toggleClass("rubberBandAnimated");
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