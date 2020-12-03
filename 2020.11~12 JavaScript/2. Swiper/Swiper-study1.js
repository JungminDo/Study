const { pkgConf } = require("yargs");


	$(document).ready(function(){

	var swiper = new Swiper(".swiper-container", {
		slidesPerView: 3,
		spaceBetween: 20,
		direction: 'horizontal',
			breakpoints: {
				1024: {
					allowTouchMove: false, // 터치 기능 사용하지말게
					followFinger: false	 	// 손으로 밀어도 금지
				}

		},

	/*
	if(window.matchMedia("(min-width: 1024px)").matches){
		console.log("1024px 보다 크다.")
	} else {
		console.log("1024 보다 작다.")
    }
		*/

	resize: function(){
		// 1024 보다 작은 화면일때 ( mobile 화면 )
		if($(document).width() < 1024){
			if($('.wiper-size').hasClass('mobile')) return false; // 리사이즈 이벤트 마다 동작하면 모바일 환경에서도 계속 0번째로 이동하므로, 현재 모바일 화면일 경우 리턴 펄스
			console.log('mobile')
			swiper.slideToLoop(0); // slide 초기화를 위해 0번째 인덱스로 변경
			$('.wiper-size').addClass('mobile'); // mobile 화면을 판단하기 위한 .mobile 클래스 추가
		}else if($(document).width() >= 1024){
			$('.wiper-size').removeClass('mobile');
			console.log('pc')
			swiper.slideToLoop(0);
		}
	}

	// 자바 스크립트에서 화면 확인할때 matchMedia 사용해보자

	/* resize: function(){
		if($(document).width() < 1024){ // 문서의 넓이가 1024보다 작으면
			if(swiper.getTranslate() != 0){ // swiper의 translate 가 0이 아니면
				console.log('!!!!')	     // console.log !!!! 를 출력하고
				// if($('.wiper-size').hasClass('mobile')) return false;
				swiper.setTranslate(0);    // swiper translate 0 으로 세팅
				$('.wiper-size').addClass('mobile');  // wiper-size 에 mobile 클래스 추가
			}
		}else if($(document).width() >= 1024){  // 위 경우가 아니면  문서의 넓이가 1024거나 크면
			swiper.setTranslate(1);	// translate 를 1로 세팅
			$('.wiper-size').removeClass('mobile'); // wiper-size mobile 클래스 제거
		}
	}
	 */
		/*
		resize: function(){ // 작동은 하지만 모바일 화면으로 줄일시 항상 동영상이 초기화됨
			if($(document).width() < 1024){ // 문서의 넓이가 1024보다 작으면
				if(swiper.getTranslate() != 0)  return false;  // swiper의 translate 가 0이 아니면
				console.log('12312')
				swiper.setTranslate(0)   // swiper translate 0 으로 세팅
					$('.wiper-size').addClass('mobile') ;
					console.log('mobile') 	     // console.log !!!! 를 출력하고
					// if($('.wiper-size').hasClass('mobile')) return false;
						// wiper-size 에 mobile 클래스 추가

			}else if($(document).width() >= 1024){  // 위 경우가 아니면  문서의 넓이가 1024거나 크면
				swiper.setTranslate(1);	// translate 를 1로 세팅
					console.log('pc')
					$('.wiper-size').removeClass('mobile'); // wiper-size mobile 클래스 제거
			}
		}
		*/





	});
});