

    $(document).ready(function() {




        /* 메인메뉴 */

        // 자연스럽게 위로 숨기는방법? show hide 는 좌표 기준 0,0 에서부터 시작한다.
        // .stop() 으로 버블링을 막는다.
        // swiper 슬라이드 써보기 bx바꾸기

        $('#main-nav').on('mouseenter', function(){
            $('.menu-content').hide().stop().slideDown(250);
                $('#main-nav').addClass('open').css('overfolw', 'height:450px');
                console.log('mainnav')
        });

        $('#main-nav').on('mouseleave', function(){
                $('#main-nav').removeClass('open');
                $('.menu-content').show().stop().slideUp(250);

    });

    // $('.center_img_slider').bxSlider();

        // 팝업창 오늘 하루 안보이기
        // F5누르면 초기화 쿠키가 이유 같은데
        function getCookie(name) {
            var nameOfCookie = name + "=";
            var x = 0;
            while (x <= document.cookie.length) {
                var y = (x + nameOfCookie.length);
                if (document.cookie.substring(x, y) == nameOfCookie) {
                    if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                        endOfCookie = document.cookie.length;
                    return unescape(document.cookie.substring(y, endOfCookie));
                }
                x = document.cookie.indexOf(" ", x) + 1;
                if (x == 0) break;
            }
            return "";
        }

        function setCookie(name, value, expiredays) {
            var todayDate = new Date();
            todayDate.setDate(todayDate.getDate() + expiredays);
            document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
        }


            // 오늘 하루 안보기
            $(".notToday").click(function () {
                var popupId = $(this).attr("id").replace("notToday-", "");

                setCookie(popupId, "Y", "1");
                $("#" + popupId).hide();
                return false;
            });

            // 닫기
            $("a.close").click(function () {
                var popupId = $(this).attr("id").replace("close-", "");

                $("#" + popupId).hide();
                return false;
            });

            $.each($(".openpopup-wrapper"), function(idx, data){
                if (getCookie(data.id) != "Y") {
                    $("#" + data.id).hide(); // show 로 바꾸기
                } else {
                    $("#" + data.id).hide();
                }
            });





            // Swiper 슬라이드 적용
            var swiper = new Swiper('.studymain', {
                slidesPerView: 1,
                spaceBetween: 30,
                // loop: true,
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                //     },
                    // autoplay: {
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // },

                        // allowTouchMove: false,
                        // fals의 경우 슬라이드를 전환 할 수 있는  유일한 방법은
                        // slide prev slide Next만 사용해야한다.
                        // followFinger: false
                        // 비활성화하면 슬라이더를 놓을때만 애니메이션이 적용되며
                        // 손가락을 잡고 있는 동안에는 움직이지 않는다.
                    on: {
                        init: function(){
                            $('.swiper-slide-prev .content-hover').css('opacity', '0');
                            $('.swiper-slide-next .content-hover').css('opacity', '0');
                                $('.swiper-slide-active').on('mouseenter', function() {
                                    gsap.to('.content-hover', {
                                        duration: 0.5,
                                        y: -100,
                                        opacity: 1,
                                    })
                                })

                                $('.swiper-slide-active').on('mouseleave', function() {
                                    gsap.to('.content-hover', {
                                        duration: 0.5,
                                        y: 0,
                                    })

                                });


                        }
                    }
            });

                var myswiper = new Swiper('.tabsub', {
                    slidesPerView: 3,
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
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 10,

                        },
                    }
                    });







                    // var contenthover = $('.content-hover')
                    // var contentdoc = $('.content-doc')
                    // var contentdocleft = $('.content-doc-left')
                    // var onslide = $('.swiper-slide')
                    // var contentnum = $('.content-hover').length
                    // /* swiper 안의 사진이나 내용 애니메이션 */
                    // /* 같이 작동 하니 class 명을 따로 하지 않고 각각 작동하게 할려면? this로 구분지어준다.*/



                    // onslide.on('mouseenter', function(a,b,c) {
                    //     gsap.to(contenthover, {
                    //         duration: 0.5,
                    //         y: -100,
                    //         opacity: 1,
                    //     })
                    //     console.log(a);
                    //     console.log(b);
                    //     console.log(c);
                    //     console.log(contentnum);

                    // });

                    // onslide.on('mouseleave', function(a,b,c) {
                    //     gsap.to(contenthover, {
                    //         duration: 0.5,
                    //         y: 0,
                    //     })
                    //     console.log(a);
                    //     console.log(b);
                    //     console.log(c);
                    // });




            /* 모듈화 시키기 */
            /* 클래스 하나로 조종하기 */
            /*  */


            $('.content-doc').on('mouseenter', function() {


                gsap.to('.content-doc', {
                            duration: 0.5,
                            y: -50,
                        })
                        $('.content-doc-left').css('display', 'block');

                    });
                    $('.content-doc').on('mouseleave', function() {
                        gsap.to('.content-doc', {
                            duration: 0.5,
                            y: 0,
                        })
                        $('.content-doc-left').css('display', 'none');
                    });

    // 탭메뉴 color 바꾸기
    // 살짝살짝 벌어지는거 잡는 방법은?
    // $('.tab_study_menu ul li a').on('click', function () {
	// 	var tg = $(this).attr('href');
	// 	$(this).parent('li').addClass('active').siblings('li').removeClass('active');
    // });

    $('.tab-study-menu ul li ').on('click', function () {
	    var tab_id = $(this).attr('data-tab');

        $('.tab-study-menu ul li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');

    });

});









































            //오늘하루 안보이기 예제2

   /*
        $(".openpopup_footer .notToday").click(function () {
            setCookieMobile( "todayCookie", "done" , 1);
                    $(".openpopup_wrapper").hide();
                });

            function setCookieMobile ( name, value, expiredays ) {
                var todayDate = new Date();
                todayDate.setDate( todayDate.getDate() + expiredays );
                document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
            }
            function getCookieMobile () {
                var cookiedata = document.cookie;
                if ( cookiedata.indexOf("todayCookier=done") < 0 ){
                    $(".openpopup_wrapper").show();
                }
                else {
                    $(".openpopup_wrapper").hide();
                }
            }
            getCookieMobile();
            */

    /*
                    var toDate = new Date();
                    var endDate = new Date(('2018-02-17 00:00:00').replace(/-/g, "/"));
                    if(toDate >= endDate){
                        $("div[class=openpopup_wrapper]").hide();
                    }else{
                        if(getCookie("popup_20180214") != "Y"){
                            $("div[class=openpopup_wrapper]").show();
                        }else{
                            $("div[class=openpopup_wrapper]").hide();
                        }
                    }

                });
    */






    /*
    function centerSlider() { // 가운데 이미지 슬라이더
        $('center-slider').bxSlider({
            infinitedLoop: false,
            inSliderLodad: function (currentIndex) {
                $('.center_slider li').eq(currentIndex).find('.center_info')
            },
            onSlideAfter: function (slideElement, oldIndex, newIndex){
                $('.center_slider li').eq(newIndex).find('.center_info')
                $('.center_slider li').eq(newIndex).siblings('li').find('.center_info').attr('style', '')
            }
        });
    }



    */
