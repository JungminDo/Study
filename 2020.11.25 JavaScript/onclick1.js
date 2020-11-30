

    $(document).ready(function() {




        /* 메인메뉴 */

        // 자연스럽게 위로 숨기는방법? show hide 는 좌표 기준 0,0 에서부터 시작한다.
        // .stop() 으로 버블링을 막는다.

        $('#main_nav').on('mouseenter', function(){


            $('.menu_content').hide().stop().slideDown(250);
                $('#main_nav').addClass('open').css('overfolw', 'height:450px');
        });

        $('#main_nav').on('mouseleave', function(){
                $('#main_nav').removeClass('open');
                $('.menu_content').show().stop().slideUp(250);

    });

    $('.center_img_slider').bxSlider();

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
                var popupId = $(this).attr("id").replace("notToday_", "");

                setCookie(popupId, "Y", "1");
                $("#" + popupId).hide();
                return false;
            });

            // 닫기
            $("a.close").click(function () {
                var popupId = $(this).attr("id").replace("close_", "");

                $("#" + popupId).hide();
                return false;
            });

            $.each($(".openpopup_wrapper"), function(idx, data){
                if (getCookie(data.id) != "Y") {
                    $("#" + data.id).show();
                } else {
                    $("#" + data.id).hide();
                }
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


    // 탭메뉴 color 바꾸기
    // 살짝살짝 벌어지는거 잡는 방법은?
    $('.tab_study_menu ul li a').on('click', function () {
		var tg = $(this).attr('href');
		$(this).parent('li').addClass('active').siblings('li').removeClass('active');
    });



});


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


          // 팝업 예제1번
    function openpopup(){
        var url = 'popup.html';
        var name = 'popup test';
        var option = 'width = 500, height = 500, top= 100, left = 200, location = no'
        window.open(url, name, option);
    }

    */


    /* center_study_menu 탭 메뉴 만들기 */
    /*
    function pdTab_Sort () {
        var  $hash = window.location.hash;
        var spd = 0.5;
        var eft = power4,easeInout;
        var tg;
    }
     */
