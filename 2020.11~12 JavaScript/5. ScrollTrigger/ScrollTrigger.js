


        function animateFrom(elem, direction) {
        direction = direction | 1;
            // direction 스크롤 되는 순간 1이나 -1을 스크롤 방향을 반영한다.
        var x = 0,
            y = direction * 100;
        if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
        } else if(elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
        }
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1, // opacity 불투명도와 같은 기능이다.
        ease: "expo",  // expo 속성으로 그림이 나오는 효과를준다.
        overwrite: "auto" // 자동으로 덮어 쓴다.
        });
        }

        function hide(elem) {
        gsap.set(elem, {autoAlpha:0}); // alpha 값이 0 이하로 떨어지면 자동으로
                //visible을 false 시켜주는 역할을 하며 그 반대로
                // alpha 값을 0 보다 큰 값을 주며 false 인 속성을 true로 만들어 주는 역할도한다.
        }

        document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // 뷰로 스크롤할때 요소가 숨겨져있는지 확인한다.
        ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) },
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } // 확인한다.
        });
        });





        });


        /* 내가 만드는 ScrollTrigger */
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".orange", {
            ScrollTrigger: {
                trigger: ".orange",
                start: "center center",
                end: () => "+=" +
        document.querySelector(".orange").offsetWidth,
            markers: true,
            toggleActions: "restart pause reverse pause"
        },
            x: 400,
            rotation: 360,
            duration: 3
        });
