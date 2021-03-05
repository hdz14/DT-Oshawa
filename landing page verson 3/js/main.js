/* jslint browser: true */
/* global $, gsap, alert */

// hide all screens and section divs
$("main, section").hide(); // set display: none to main/section divs in css to stop flash

// SPLASH SCREEN //////////////////////////////////////////////

// display splash screen
$("#splash").show();

// animate on the splash screen on app load
gsap.from("#splash", {
    delay: 0.25,
    opacity: 0,
    duration: 2,
    ease: "power1.in"
});


gsap.from("#splash #logo", {
    delay: 1,
    scale: 0,
    duration: 1,
    opacity: 0.5,
    ease: "slow.in"
});

gsap.from("#splash p", {
    delay: 1.5,
    scale: 0,
    duration: 1,
    opacity: 0.5,
    ease: "slow.in"
});

gsap.from("#splash #preloader", {
    delay: 2.5,
    scale: 0,
    duration: 1,
    opacity: 0.5,
    ease: "power4.in"
});

// wait secs then fade out and load landing screen
gsap.to("#splash", {
    delay: 2,
    opacity: 1,
    duration: 3,
    onComplete: loadLanding
});

// LANDING SCREEN ///////////////////////////////////////////

function loadLanding() {

    // hide and reset all screens/sections
    $("main, section").hide().css({opacity: 1});
    
    // display landing screen
    $("#landing1").show();

    // animate on the landing screen
    gsap.from("#landing1", {
        delay: 0.5,
        opacity: 0,
        duration: 2
    });

    $("#landing2").show();

    gsap.from("#landing2", {
        delay: 3.5,
        opacity: 0,
        duration: 2,
        onComplete: loadMenu
    });

}

function loadMenu() {
    
    $("main, section").hide().css({opacity: 1});

    // display menu screen
    $("#menu").show();

    gsap.from("#menu", {
        delay: 0.5,
        opacity: 0,
        duration: 3,
        ease: slow.in
    });

}



