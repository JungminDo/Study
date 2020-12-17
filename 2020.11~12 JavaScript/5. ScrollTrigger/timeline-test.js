    // ------------- VARIABLES ------------- //
    var ticking = false; // ticking 디폴트로 false 를 준다.
    var isFirefox = (/Firefox/i.test(navigator.userAgent)); // 파폭에 대한 변수
    var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
    var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    var slideDurationSetting = 600; //Amount of time for which slide is "locked"
    var currentSlideNumber = 0;
    var totalSlideNumber = $(".background").length;


    // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt) {
    var totalSlideNumber = $(".background").length;
    console.log('slideNumber : ' + totalSlideNumber)

    if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * (-120);
        console.log('firefox');
    } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
        console.log('IE');
    } else {
        console.log('else : ' + totalSlideNumber)
        //Set delta for all other browsers
        delta = evt.wheelDelta;
        console.log('other');
        console.log(totalSlideNumber);

        console.log();
    }

    if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
        //Down scroll
        ticking = true;
        if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
            console.log('ticking');
            console.log(totalSlideNumber);

        }
        slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
        //Up scroll
        ticking = true;
        if (currentSlideNumber !== 0) {
            currentSlideNumber--;
        }
        previousItem();
        slideDurationTimeout(slideDurationSetting);
        }
    }
    }

    // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration) {
    setTimeout(function() {
        ticking = false;
    }, slideDuration);
    }

    // ------------- ADD EVENT LISTENER ------------- //
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

    // ------------- SLIDE MOTION ------------- //
    function nextItem() {
    var $previousSlide = $(".background").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
    }

    function previousItem() {
    var $currentSlide = $(".background").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }