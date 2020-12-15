


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

        $(document).ready(function(){

        /* 내가 만드는 ScrollTrigger */
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".c", {
            scrollTrigger: {
                trigger: ".c",
                start: "top 100px", // 스크롤시 애니메이션 시작 지점
                endTrigger: ".c",
                end: "bottom 20px",  // 스크롤시 애니메이션 끝나는 지점
                // markers: true,
                pin: true,
                toggleActions: "restart pause reverse pause"
            },
            x: 400,
            rotation: 360,
            duration: 3
        });

        // scrub animation

        gsap.to(".test2", {
            scrollTrigger: {
                trigger: ".test2",
                start: "top center", // 스크롤시 애니메이션 시작 지점
                end: "top 100px",  // 스크롤시 애니메이션 끝나는 지점
                scrub: 3,
                pin: ".ghost",  // ScrollTrigger 가 활성 상태 인 동안 고정되어야 하는요소
                                // 나머지 콘텐츠가 아래에서 계속 스크롤되는 동안 시작 위치에 고정 된 것처럼 보인다.
                                //trigger 요소가 고정되며 고정된 요소 자체에 애니메이션을 적용하지 마라
                onEnter: () => console.log("enter"),
                onLeave: () => console.log("leave"),
                onEnterBack: () => console.log("enter back"),
                onLeaveBack: () => console.log("leave back all the"),
                markers: true,
            },
            x: 400,
            rotation: 360,
            ease: "none",
            duration: 3
        });

        gsap.to(".ghost", {
            scrollTrigger: {
                trigger: ".ghost",
                start: "top 50%", // 스크롤시 애니메이션 시작 지점
                end: "top 10%",  // 스크롤시 애니메이션 끝나는 지점
                scrub: true,
                markers: true,
            },
            x: 400,
            rotation: 360,
            ease: "none",
            duration: 3
        });

        // scrub anumation2

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".test33",
                start: "top center", // 스크롤시 애니메이션 시작 지점
                end: "top 100px",  // 스크롤시 애니메이션 끝나는 지점
                scrub: 3,
                // markers: true,
            }
        });

        tl.to(".test33",{
            x: 400,
            rotation: 360,
            ease: "none",
            duration: 3
        })
        .to(".test33", {
            backgroundColor: "purple",
            duration: 1
        })
        .to (".test33", {
            x: 0,
            duration: 3
        });


    });
