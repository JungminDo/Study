


$(document).ready(function(){



    var man = document.getElementById("man"),
        car = document.getElementById("car"),
        lift =  document.getElementById("lift"),
        restart = document.getElementById("restart")
        tl = gsap.timeline();

    tl.to(car, {x:445, duration:2, ease:'none'})

    .to(car, {y:"-=160", duration:1, ease:'none'})

    .to(man, {x:-150, duration:1, ease:'none'}, 1)

    .to(lift, {y:"-=160", duration:1, ease:'none'}, ">");

    restart.onclick = function() {
    tl.restart();
    }


});