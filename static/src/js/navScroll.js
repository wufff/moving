require(['Swiper'],function(swiper){
	 console.log("navScroll")
	 let mySwiper = new Swiper('#nav', {
		freeMode: true,
		freeModeMomentumRatio: 0.5,
		slidesPerView: 'auto',
	});
let swiperContainer = document.querySelector(".swiper-container");
let slides = document.querySelectorAll(".swiper-slide");
var swiperWidth = mySwiper.container[0].clientWidth
var maxTranslate = mySwiper.maxTranslate();
var maxWidth = -maxTranslate + swiperWidth / 2;
swiperContainer.onclick = function (e){
		e.preventDefault();
}
mySwiper.on('tap', function(swiper) {
	var slide = swiper.slides[swiper.clickedIndex];
	var slideLeft = slide.offsetLeft;
	var slideWidth = slide.clientWidth;
	var slideCenter = slideLeft + slideWidth / 2
	// 被点击slide的中心点
	mySwiper.setWrapperTransition(300);
	if (slideCenter < swiperWidth / 2) {
		mySwiper.setWrapperTranslate(0)
	} else if (slideCenter > maxWidth) {
		mySwiper.setWrapperTranslate(maxTranslate)
	} else {
		nowTlanslate = slideCenter - swiperWidth / 2
		mySwiper.setWrapperTranslate(-nowTlanslate)
	}
	slides.forEach((slide)=>{
        slide.classList.remove("active");
	})
	slides[swiper.clickedIndex].classList.add("active");
})
})
