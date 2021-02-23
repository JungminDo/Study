$(document).ready(function () {

    /* a 태그 클릭시 class on 추가 */
    /*
        $('.main-content li a').on('click', function(){
            if($('.manu-sub').hasClass('on')){
                $('.manu-sub').removeClass('on')
            } else {
                $('.manu-sub').addClass('on')
            }
            })
        });
         */

    /* ul li 마우스 올리면 보여준다. */
    $('.main-content ul').on('click', function () {
        $('.manu-sub').toggleClass('on');
        console.log('mouse click')
    });




    /*
    $('.video-btn').on('clcik',function(){
        if($('.video-btn').hasClass('on')){
            $(this).removeClass('on')
        } else {
            $(this).addClass('on)
        }
        if 문 다시 한번 공부하고 개선방법 알아보기
    var $test = $('.top-line')

    $('.video-btn a').on('click', function (e) {
        e.preventDefault();
        $('.video-outer').toggleClass('on')
        $test.closest(".video-outer").toggleClass("on");
        closest 기능 공부하기
    });
     */



    var myswiper = new Swiper('.studyfirst', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        coverflowEffect: {
            slideShadows: true,
            rotate: 50,
        },
        cubeEffect: {
            slideShadows: false,
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
                autoHeight: true

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 10,
                effect: "coverflow",

            }
            // on: {
            //     resize:function(){
            //         if($(document).width() < 768) {
            //             if($('.swiper-container').hasClass('mobile')) return false;
            //             console.log('phone1')
            //             playswiper.slideToLoop(0);
            //             $('.swiper-container').addClass('mobile');
            //         }else if($(document).width() >= 1024) {
            //             $('.swiper-container').removeClass('mobile');
            //             console.log('pc2')
            //             playswiper.slideToLoop(0);
            //         }
            //     }
            // }

        }
    });

    var playswiper = new Swiper('.second', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoHeight: true,
        pagination: '.swiper-pagiantion',
        paginationClickable: true,
        runCallbacksOnInit: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,

        },
        on: {
            resize: function () {
                if ($(document).width() < 768) {
                    if ($('.swiper-container').hasClass('mobile')) return false;
                    console.log('phone')
                    $('.swiper-container').addClass('mobile');
                    playswiper.slideReset(0);
                } else if ($(document).width() >= 960) {
                    $('.swiper-container').removeClass('mobile');
                    console.log('pc')

                    playswiper.slideReset(0);
                }

            }

        }
    });




});

function myFunction() {
    document.getElementById('title').innerHTML = "추가된 이야기";

}

// global Scope
var carName = "Volvo";



function myFunction() {

}

// local Scope
function myFunction() {
    var carName = "Volvo";
}

// Redeclaring Variables 변수 재 선언
var x = 10;
// Here x is 10
{
    var x = 2;
    // Here x is 2
}
// Here x is 2


// let 을 이용하여 내부 변수 선언시 블록 외부의 변수 다시 선언되지않게하기.
var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10
