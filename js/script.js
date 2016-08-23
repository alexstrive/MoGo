var $ = jQuery;
$(document).ready(function () {
    $(".slide").hover(function () {
        $(this).find("progress").attr("value", 100);
    }, function () {
        $(this).find("progress").attr("value", 0);
    });
});
//# sourceMappingURL=script.js.map