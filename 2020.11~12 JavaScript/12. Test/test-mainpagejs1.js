
    $(document).ready(function() {




        $('.submenu').on('click', function(){

            $('.megamenu').toggleClass("hidden");
        });

        // $('submenu').on('mouseenter', function(){
        //     $('.megamenu').hide().stop().slideDown(250);
        //     $('.nav-container').addClass('open');

        // });

        // $('submenu').on('mouseleave', function(){
        //     $('.nav-container').removeClass('open');
        //     $('.megamenu').show().stop().slideDown(250);

        // });

        // $('.mainsidebar').on('mouseenter', function(){

        //     gsap.from(".sidebar-up1", { duration: 1.5, ease: "back", y: 100, opacity:0 });
        //     gsap.from(".sidebar-secnod1", { duration: 1,  ease: "back.inOut(2)", y: 50, opacity:0 });

        //     gsap.from(".sidebar-up2", { duration: 1.8, ease: "back", y: 100, opacity:0 });
        //     gsap.from(".sidebar-secnod2", { duration: 1.2,  ease: "back.inOut(2)", y: 50, opacity:0 });

        //     gsap.from(".sidebar-up3", { duration: 2.0, ease: "back", y: 100, opacity:0 });
        //     gsap.from(".sidebar-secnod3", { duration: 1.5,  ease: "back.inOut(2)", y: 50, opacity:0 });

        // });



        var mainswiper = new Swiper('.mainimage', {

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            });


        var mainswiper = new Swiper('.mainsidebar', {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 5,
            on: {
                //최초 슬라이드 실행 (초기화)
                init: function(){
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex), 1, {y:100, opacity:0}, {y:0, opacity:1});
                    console.log(mainswiper.realIndex+'번1');
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex +1), 1, {y:100, opacity:0}, {delay:.2, y:0, opacity:1})
                    console.log(mainswiper.realIndex+'번2');
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex +2), 1, {y:100, opacity:0}, {delay:.4, y:0, opacity:1})
                    console.log(mainswiper.realIndex+'번3');
                },
                // 슬라이들 될때마다.
                slideChange: function(){
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex), 1, {y:100, opacity:0}, {y:0, opacity:1});
                    console.log(mainswiper.realIndex);
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex +1), 1, {y:100, opacity:0}, {delay:.2, y:0, opacity:1})
                    console.log(mainswiper.realIndex);
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex +2), 1, {y:100, opacity:0}, {delay:.4, y:0, opacity:1,})
                    console.log(mainswiper.realIndex);
                }
            }

        });

        var hideswiper = new Swiper('.showhide', {


            navigation: {
                nextEl: '.main-sub-next',
                prevEl: '.main-sub-prev',
            },

            on: {

                init: function(){
                    gsap.fromTo($('.showhide').find('.showhide-sub-button-next'), 1, {opacity:0}, {delay: 1, opacity:1} );
                    console.log(this.realIndex +'show');
                }
            },





        });

// 연습용 탭메뉴에 이미지 바꾸거나 교체 find, attr 사용해보기
//
  //탭메뉴

//   $(".basicSlider_tabs li").on("click", function(e){
//     e.stopPropagation();
//     if($(this).index() == $(".basicSlider_tabs li").last().index()){
//         _target.removeClass("on").removeClass("reset");

//         $('.writeImg_6 img').attr("src", ".");
//         $('.writeImg_7 img').attr("src", ".");
//         $('.writeImg_8 img').attr("src", ".");
//         $('.writeImg_9 img').attr("src", ".");

//         $('.page_5').find('.num_6 img').attr('src', '이미지 경로')
//         .css('pointer-events','auto');
//         $('.page_5').find('.num_7 img').attr('src', '이미지 경로')
//         .css('pointer-events','auto');
//         $('.page_5').find('.num_8 img').attr('src', '이미지 경로')
//         .css('pointer-events','auto');
//         $('.page_5').find('.num_9 img').attr('src', '이미지 경로')
//         .css('pointer-events','auto');

//         setState(false);

//         return false;
//     }
//     $('.num_6').find('img').attr('src', '이미지 경로')
//     .css('pointer-events','auto');
//     $('.num_7').find('img').attr('src', '이미지 경로')
//     .css('pointer-events','auto');
//     $('.num_8').find('img').attr('src', '이미지 경로')
//     .css('pointer-events','auto');
//     $('.num_9').find('img').attr('src', '이미지 경로')
//     .css('pointer-events','auto');

//     _target.removeClass("on").removeClass("reset");
//     setState(false);
// });
// }




    });
