/*jslint browser : true */
/*global $, window*/
$(window).ready(function () {
    "use strict";
    var defaultNum1 = 0,
        defaultNum2 = 0,
        defaultNum3 = 0,
        zindexValue = 0,
        ///////////////////////
        defaultNum4 = 0;
    ///////////////////////////////////
    //layers;
    $(".place-section .place").on("click", function () {

        $(this).animate({
            left: "30%",
            marginTop: "20px"
        }, 400, function () {
            zindexValue = zindexValue - 1;
            $(this).css("z-index", zindexValue);

        }).animate({
            left: $(this).css("left"),
            marginTop: 0

        }, 400);
        (".about-stories .item .text .number").val();
    });

    ///////////

    //click on scroll tot top 
    $(".scroll-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({

            scrollTop: 0

        }, 1000);

    });
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1000) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }

    });
});
//////////////////////////// loader
$(window).load(function () {
    "use strict";
    $(".load").fadeOut(2000, function () {
         $("body").css("overflow", "auto");
    });

});
