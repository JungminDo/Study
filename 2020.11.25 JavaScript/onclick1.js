
    // 탑메뉴
    $(document).ready(function() {

        $('.mn1').on('mouseenter', function(){
            $('.me2').show(300);
                $('.mn1').addClass('open').css('overfolw');
        });



        $('.mn1').on('mouseleave', function(){
                $('.mn1').removeClass('open');
                $('.me2').hide(300);

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
    } */



    $('.center_img_slider').bxSlider();





    });