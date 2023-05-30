
(function($, undefined){
  $(function(){
/// ------ Start jQuery ------- ///

/// ------ Moving Eye1 ------- ///
  	let topEye = 0;
	var upping = undefined;
	var downing = undefined;
	let delay = 30;
	let step = 0.1;
	const stepDown = function() {
		topEye = topEye + step;
		$('.info-box__eye').css({
	    	'top': topEye + '%',
			'background-position-y': topEye + '%',
	    });
	    if(Math.round(topEye) == 90) {
	    	clearInterval(downing);
	    	upping = setInterval(stepUp, delay);
	    }
	};
	const stepUp = function() {
		topEye = topEye - step;
		$('.info-box__eye').css({
	    	'top': topEye + '%',
			'background-position-y': topEye + '%',
	    });
	    if(Math.round(topEye) == 0) {
	    	clearInterval(upping);
	    	downing = setInterval(stepDown, delay);
	    }
	};
	downing = setInterval(stepDown, delay);

	/// ---- Slider for principals ---- ///
	$(".principles").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
		cssEase: 'linear',
		pauseOnFocus: true,
		pauseOnDotsHover: true,
	})

	///----------- Modal window ---------///
	$('.site-order__btn').click(function() {
		$('body').addClass('over-hidn')
		$('.modal').addClass('active')
	})
	$('.close').click(function() {
		$('body').removeClass('over-hidn')
		$('.modal').removeClass('active')
	})
	///------------ Burger-------------///
    const menuToggle = function() {
      $("body").toggleClass("over-hidn");
      $(".menu__burger").toggleClass("active");
      $(".menu__list").toggleClass("active");
    }
    const menuRemove = function() {
      $("body").removeClass("over-hidn");
      $(".menu__burger").removeClass("active");
      $(".menu__list").removeClass("active");
    }
    $(".menu__burger-btn").click(function() {
      menuToggle();
    })
    $(".menu__item").click(function() {
      menuRemove();
    })
    $(".menu__close-btn").click(function() {
      menuRemove();
    })
    //
	
/// ------ End jQuery ------- ///
  });
})(jQuery);

/// ---- Display skills image ----- ///
const images = { 
	html: "html5.png", 
	css: "css3_500.png",
	flex: "flexbox_300.png",
	grid: "grid.png",
	js: "java-script.png",
	vue: "vue.png",
	php: "php-icon.png",
	wp: "wordpress-logo-29042.png"
};
const elementsOfSkills = document.querySelectorAll(".skills-box");
const elementForImage = document.querySelector(".skills-block__img")
const animateDuration = 90;
elementsOfSkills.forEach((el) => {
	const infoTeg = el.dataset.info;
	const imageFile = images[infoTeg];
	el.addEventListener("mouseenter", async (event) => {
		await new Promise((resolve, reject) => {
				elementForImage.animate([{opacity: 1}, {opacity: 0}], animateDuration);
				setTimeout(() => resolve(), animateDuration);
			});
		elementForImage.setAttribute("src", `./img/${imageFile}`);
		elementForImage.animate([{opacity: 0}, {opacity: 1}], animateDuration);
	})
});
document.querySelector(".skills-list").addEventListener("mouseleave", async () => {
		await new Promise((resolve, reject) => {
				elementForImage.animate([{opacity: 1}, {opacity: 0}], animateDuration);
				setTimeout(() => resolve(), animateDuration);
			});
		elementForImage.setAttribute("src", "./img/avk_photo_square_700.jpg");
		elementForImage.animate([{opacity: 0}, {opacity: 1}], animateDuration);
	});
