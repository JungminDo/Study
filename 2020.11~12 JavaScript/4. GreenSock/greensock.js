/*
    SVG
    Canvas
    WebGL
    JS object
*/


$(document).ready(function(){

    // gsap.to(".sail", {duration: 2, x: 300, backgroundColor: "#560563",
    // borderRadius: "20%", border: "5px solid white", ease: "bounce"}); // x300 으로 이동
    // elastic 빠르게 움직이고 제자리로
    // elase 천천히 제자리로
    // bounce 앞으로 통통
    // eases https://greensock.com/docs/v3/Eases 사이트를 통해 움직임을 커스텀 할수있다.
    // gsap.to(".box", {duration: 2, x: 300});
    // gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});


    // gsap.set(".sail, .squirrel", {transformOrigin:"50% 50%"});
    // gsap.to(".sail, .squirrel", {duration:10, rotation: 360});

    // var myObject = {rotation: 0};
    // gsap.to(myObject, {duration:10, rotation: 360, onUpdate: function() {
    //     console.log(myObject.rotation);
    // }});


    gsap.from(".sail, .squirrel", {duration:3, opacity: 0, scale: 0.3, ease: "back"});


    gsap.from(".circle", {duration:1, opacity: 0, y: 150});



})