$(document).ready(function () {
    var slides = $(".slide");
    var images = $(".img");
    slides.hover(
        function()
        {
            $(this).find(".progress-bar-value").css("width", "100%");
        },
        function()
        {
            $(this).find(".progress-bar-value").css("width", "0");
        }
    );

    images.hover(function () {
        $(this).find("span").toggleClass("hide");
    },
    function () {
        $(this).find("span").toggleClass("hide");
    });
});