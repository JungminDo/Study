
    $(document).ready(function() {



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

            breakpoints: {

                1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },

            },
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
                    gsap.fromTo($('.mainsidebar').find('.swiper-slide').eq(mainswiper.realIndex +2), 1, {y:100, opacity:0,}, {delay:.4, y:0, opacity:1,})
                    console.log(mainswiper.realIndex);
                }
            }


        });


        var subswiper = new Swiper('.showhide', {

            navigation: {
                nextEl: '.main-sub-next',
                prevEl: '.main-sub-prev',
            },

        });




    });