
 $(document).ready(function(){

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
    $('.main-content ul').hover(function(){
        $('manu-sub').addClass('on').show();
    }, function() {
        $('manu-sub').hide();
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



    var myswiper = new Swiper('.swiper-container', {
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
                spaceBetween: 20,
                autoHeight: true

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 10,
                effect: "coverflow",

            },
            on: {
                resize:function(){
                    if($(document).width() < 1024) {
                        console.log('1111')
                        swiper.slideToLoop(0);
                    }else if($(document).width() >= 1024) {
                        console.log('2222')
                        swiper.slideToLoop(0);
                    }
                }
            }
        }
        });


        $("")










 })