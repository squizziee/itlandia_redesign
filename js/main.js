$(".social_btn_wrapper").on("click", function() {
    $(this).toggleClass("rubberBandAnimated");
});

function delay (URL) {
    setTimeout( function() { window.location = URL }, 1500 );
}