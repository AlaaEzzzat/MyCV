/*jslint browser : true */
/*global $, window*/
$(window).ready(function () {
    "use strict";
    var defaultNum1 = 0,
        defaultNum2 = 0,
        defaultNum3 = 0,
        defaultNum4 = 0,
        Hbanar = $("#mh-home").height,
        Habout = $("#about").height + Hbanar,
        Hskills = $("#skills").height + Habout,
        Hportfolio = $("#potfolio").height + Hskills,
        Heducation = $("#education").height + Hportfolio;

    $(".scroll-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);

    });
    // smoth scroll to elements
    $(".navbar-item .nav-link").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top + 10
        }, 1000);
        $(".navbar-nav .navbar-item").removeClass("active");
        $(this).addClass("active");

    });
    //sycn links 
    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockID = $(this).attr("id");
                $(".navbar-nav .navbar-item").removeClass("active");
                $(".navbar-nav a[data-scroll = '" + blockID + "']").parent().addClass("active");
            }

        });
    });



    /*****************************/
    function timer() {

        if (window.document.getElementById("svg1").innerHTML >= 90) {
            window.clearInterval(timer);
        } else {
            defaultNum1 = defaultNum1 + 1;

            window.document.getElementById("svg1").innerHTML = defaultNum1;
        }

        if (window.document.getElementById("svg2").innerHTML >= 70) {
            window.clearInterval(timer);
        } else {
            defaultNum2 = defaultNum2 + 1;

            window.document.getElementById("svg2").innerHTML = defaultNum2;
        }
        if (window.document.getElementById("svg3").innerHTML >= 86) {
            window.clearInterval(timer);
        } else {
            defaultNum3 = defaultNum3 + 1;
            window.document.getElementById("svg3").innerHTML = defaultNum3;
        }

        if (window.document.getElementById("svg4").innerHTML >= 60) {
            window.clearInterval(timer);
        } else {
            defaultNum4 = defaultNum4 + 1;

            window.document.getElementById("svg4").innerHTML = defaultNum4;
        }
    }
    /*********************************/

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 2250) {
            window.setInterval(timer, 100);
            $(".comun").animate({
                strokeDashoffset: 15
            }, 1500);
            $(".comun1").animate({
                strokeDashoffset: 90
            }, 1500);
            $(".comun2").animate({
                strokeDashoffset: 60
            }, 1500);
            $(".comun3").animate({
                strokeDashoffset: 120
            }, 1500);
        }
    });
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1000) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }

    });

    //////////////////////potrfolio
    $(".portfolio ul li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shuffle-image .col-md-4").fadeIn(100);

        } else {
            $(".shuffle-image .col-md-4").fadeOut(100);
            $($(this).data("class")).parent().delay(100).fadeIn();
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
