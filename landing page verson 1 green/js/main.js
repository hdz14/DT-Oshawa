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

gsap.from("#splash #preloader", {
    delay: 2,
    scale: 0,
    duration: 1,
    opacity: 0.5,
    ease: "power4.in"
});

// wait secs then fade out and load landing screen
gsap.to("#splash", {
    delay: 2,
    opacity: 1,
    duration: 5,
    onComplete: loadLanding
});

// LANDING SCREEN ///////////////////////////////////////////

function loadLanding() {

    // hide and reset all screens/sections
    $("main, section").hide().css({opacity: 1});
    
    // display landing screen
    $("#landing").show();

    // animate on the landing screen
    gsap.from("#landing", {
        delay: 0.5,
        opacity: 0,
        duration: 2
    });

    gsap.from("#landing header", {
        delay: 0.25,
        y: -$("#landing header").outerHeight(),
        duration: 0.5,
        ease: "circ.out"
    });

}

