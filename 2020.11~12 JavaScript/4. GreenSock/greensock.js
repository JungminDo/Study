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
    // bounce 앞으로 통통 튀는 듯한 애니메이션을 준다.
    // +=1 이전 애니메이션이 끝난후 +=x x 초 이후에 트윈을 배치한다.
    // -=1 이전 애니메이션이 끝난후 -1초 전에 트윈을 배치한다.
    // insert tween 1 second into timeline
    // 절대값을 사용하여 트윈이 시작 되어야하는 정확한 시간(초)을 지정한다.
    // .to("#orange", {duration: 2, x: 750}, 1);
    // transfomOrigin 변화 하는 대상의 시작 좌표값 50 50 x와 y의 좌표이다.
    // duration 애니메이션 효과 시간
    // delay 몇초 뒤에 시작 되는지
    // ease 다른 편의 기능을 추가할떄
    // seek(3) 3초 후 위치로 이동
    // opacity 불투명도
    // stagger 각각의 애니메이션의 시작 시간을 설정한다
    // y: () => Math.random()  * 400 - 200 이미지가 y 축 방향 위 아래 랜덤 방향으로 나온다.
    // random(-200,200) 같이 간략하게 사용가능하다.

    // scale 크기 1은 원본 0.1 아주 작은 크기부터 2로 하면 아주 커졌다가 작아진다
    // eases https://greensock.com/docs/v3/Eases 사이트를 통해 움직임을 커스텀 할수있다.
    // gsap.to(".box", {duration: 2, x: 300});

    // gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});
    // gsap.set(".sail, .squirrel", {transformOrigin:"50% 50%"});

    // 일부 속성을 즉시 설정하려면 .set() 을 스자
    // transformOrigin 기준점 설정
    // x축 : left, center, right, length, %
    // y축 : top, center, bottom, length, %
    // z축 : length, view 가 z축에 배치되는 곳을 지정한다(3D 변환(transition)과 함께 사용될 경우)

    // keyframes 같은 대상에게 연속적으로 애니메이션을 적용하려면 keyframes를 사용한다.

    // gsap.to(".sail, .squirrel", {duration:3, rotation: 360});

    // var myObject = {rotation: 0};
    // gsap.to(myObject, {duration:10, rotation: 360, onUpdate: function() {
    //     console.log(myObject.rotation);
    // }});


    // gsap.from(".sail, .squirrel", {duration:2, opacity: 0.2, scale: 0.3, ease: "back"});


    // gsap.from(".circle", {duration:1, opacity: 0, y: "random(-200,200)", stagger: 0.2});


        /* Control Method
        var tween = gsap.to(".sail, .squirrel, .circle", {duration:3, y: "random(-200,200)"});

        document.querySelector("#play").onclick = () => tween.play();
        document.querySelector("#pause").onclick = () => tween.pause();
        document.querySelector("#seek").onclick = () => { tween.seek(2);
            sequenceUpdateDragger(); };
        document.querySelector("#progress").onclick = () => {
            tween.progress(0.2); sequenceUpdateDragger(); };
        document.querySelector("#reverse").onclick = () => tween.reverse();
        document.querySelector("#restart").onclick = () => tween.restart();
        document.querySelector("#time4").onclick = () => tween.timeScale(4);
        document.querySelector("#time2").onclick = () => tween.timeScale(0.2);

             */
/*
        var tl = gsap.timeline({repeat:2, yoyo: true});

        tl.from(".sail, .squirrel", {duration:1.5, opacity: 0.2, x: 300, scale: 0.3, ease: "back"});
        tl.from(".circle", {duration:1, opacity: 0, x: 350, stagger: 0.2});
    // from 조건 부터 to .class 부터 조건 까지
        tl.addLabel("circlesOutro", "+=1");
        tl.to(".circle", {duration: 0.5, opacity: 0, x: 300, ease: "power3.out"}, "circlesOutro");

        gsap.to("h2.title", {duration: 1, opacity: 0.3});
        gsap.fromTo(".box", {width: 0, height: 0}, {duration: 1.5, width: 100, height: 200, x: 200});
    // fromTo 를 쓰면 시작과 끝 조건을 설정할수도있다.
        gsap.to(".green", {duration: 3, rotation: 360, scale: 0.5});

        gsap.to ( ".green" , { duration : 1 , x : 200 , onComplete : tweenComplete }); function tweenComplete () {
            console.log ( "트윈이 완료되었습니다" ); }
    // TimeLine (순차적으로 재생)


        gsap.to("h2.title1", {duration: 1, opacity: 0.3});
        gsap.to(".green1", {duration: 3, rotation: 360, scale: 0.5, y: 0, x: 200});


        var tl = gsap.timeline();
            tl.to("#green", {duration: 1, x: 750})
        //add blueGreenSpin label 1 second after end of timeline
            .add("blueGreenSpin", "+=1")
            // blueGreenSpin을 green이 끝난 1초후에 추가한다.
        //add tween at blueGreenSpin label
            .to("#blue", {duration: 2, x: 750, rotation: 360}, "blueGreenSpin")
            // blue의 옵션을 blueGreenSpin 에 추가한다.
        //insert tween 0.5 seconds after blueGreenSpin label
            .to("#orange", {duration: 2, x: 750, rotation: 360}, "blueGreenSpin+=0.5");
            // orange 옵션을 blueGreenSpin 시작0.5초후에 넣는다.


        //tweens are inserted at absolute position
        var tl = gsap.timeline();
            tl.to("#green", {duration: 4, x: 750})
         //insert tween at the end of the previous tween
            .to("#blue", {duration: 2, x: 750}, ">")
            // blue 를 전트윈이 끝난 시점에 추가한다.
        //insert tween at the start of the previous tween
            .to("#orange", {duration: 2, x: 750}, "<");
        // orange 를 전 트윈 시작 전에 추가한다.


            // 인덱스를 기반으로 이동 방향을 설정하기

        var yMove = 50;
            gsap.to(".box4", {
                delay: 0.5,
                duration: 1,
                stagger: 0.2, // 시작시간을 엇갈리게 하며 시작 시간 사이에 0.2를 준다.
                y: function(i, elem, boxes) {
                    return i % 2 === 1 ? yMove : -yMove;
                    // i 를 숫자 2로 나우고 남은값을 비교하여 1이면 y 아니면 -y 를 넣어준다.
                }
            });

 */
        /*  //Effect-test

            gsap.registerEffect({
                name: "fade",
                defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
                effect: (targets, config) => {
                    return gsap.to(targets, {duration: config.duration, opacity: 0});
                }
            });

            //now we can use it like this:
            //gsap.effects.fade(".box");

            document.querySelectorAll(".box").forEach(function(box) {
            box.addEventListener("mouseenter", function() {
                gsap.effects.fade(this);
            });
            });

           */


            /*
            // gsap.globalTimeline

            gsap.globalTimeline.pause()
            // 모든 애니메이션에 영향을 미치는 글로벌 타임 라인을 일시 중지하고 자신을 반환한다.
            gsap.globalTimeline.play()
            // 모든 애니메이션에 영향을 미치는 글로벌 타임 라인을 다시 시작하고 자신을 반환한다.
            gsap.globalTimeline.paused()
            // true 상태면 글로벌 타임 라인이 일시 중지 된 경우 반환 되고 false인 글로벌 타임 라인이 재생중일때 반환한다.
            gsap.globalTimeline.timeScale()
            // 모든 애니메이션에 영향을 미치는 글로벌 시간 척도를 가져오거나 설정한다. 모든 애니메이션을 합너에 전체적으로
            // 속도를 높이거나 낮출수 있는 좋은 방법이다.

            gsap.globalTimeline.timeScale(0.5); //plays at half-speed
            gsap.globalTimeline.timeScale(2); //plays twice the normal speed
            var currentTimeScale = gsap.globalTimeline.timeScale(); //returns the current global timeScale

            */

            /*
            // gsap.ticker
            // type : Object
            // GSAP 엔진의 심장 박동과 같으며 모든 requestAnimationFrame 이벤트에서
            // globalTimeline 을 업데이트 하고 브라우저의 렌더링주기와 완벽하게
            // 동기화 되며 각업데이트 후에 사용자 지정 논리를 실행하기 위해 자체 리스너를 추가 가능하다

            // add listener
            // 리스너 추가
                gsap.ticker.add(myFunction);

                function myFunction(time, deltaTime, frame) {
                    // makes use of time, deltaTime, and frame
                }   // time: 티커의 시작 시간을 lagSmooting 에 의해 앞으로 밀리게 할수 있다.
                    // deltaTime: 이전 틱 이후 경과 한 밀리 초에 해당하는 양이며 gsap.ticker.deltaRatio()
                    // 를 이용하여 특정 대상 FPS 를 기반으로 하는 비율을 얻을 수 있다.
                    // frame 각 틱에 증가된 프레임 번호 이다.

            //  TweenMax . lagSmoothing ()
            //  엔진의 업데이트 사이에서 너무 많은 시간이 경과할 때 발생하는 작업을 제어할 수 있도록 한다.
            //  코어 타이밍 메커니즘을 조정하여 점프 상황을 방지하고 보완 할 수 있다.

            //to remove the listener later...
                gsap.ticker.remove(myFunction);


                gsap.ticker.fps ()
            // 티커를 특정 프레임 속도로 제한하려면 사용한다.

                gsap.ticker.deltaRatio ()
            // 특정 대상 FPS 를 기준으로 한 비율로 마지막 틱 이후 경과 된 시간을 반환한다.
            // gsap.ticker.deltaRatio(60)마지막 틱 이후 경과 된 시간이 실제로 30pfs에서 실행되는 것과
            // 비슷하다면 2프레임 속도 변화에 동적으로 조정되는 루프를 쉽게 설정할 수 있도록 반환된다.

                gsap.ticker.add(function() {
                    obj.x += 3 * gsap.ticker.deltaRatio(60); // rate of change will always be consistent even if the frame rate fluctuates
                });
            // 기본 fps 매개 변수는 60 이므로 60 fps 이외의 것을 하용하지 않는 한 하나를 전달할 필요가 없다
            //  30fps 로 실행되는 것을 기준으로 비율을 얻으려면 다음을 실행한다.
            //  gsap.ticker.deltaRatio(30)

                gsap.ticker.lagSmoothing ()
            // 이 메서드는 GSAP 의 지연 완화를 위한 getter 및 setter 역할을 한다.
            //
                */

                /* gsap-utils */

            /*
            function onMove(mouseX){
                var value = gsap.utils.snap(50, mouseX);
                display(value);
            }

            */

            /* cyberpunk animation */






}) ;
