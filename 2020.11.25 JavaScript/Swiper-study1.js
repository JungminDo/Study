

    var swiper = new Swiper(".swiper-container", {
		slidesPerView: 3,
		spaceBetween: 20,
		direction: 'horizontal',
			breakpoints: {
				1024: {
					allowTouchMove: false,
					followFinger: false,
				}

		}

    //

	if(window.matchMedia("(min-width: 1024px)").matches){
		console.log("1024px 보다 크다.")
	} else {
		console.log("1024 보다 작다.")
    }


    // 자바 스크립트에서 화면 확인할때 matchMedia 사용해보자