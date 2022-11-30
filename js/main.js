

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
	/// ---- Display skills image ----- ///
	$(".skills").mouseover(() => {
		$(".skills-block__usual").addClass("skills-box--no-opacity");
	});
	$(".skills").mouseout(() => {
		$(".skills-block__usual").removeClass("skills-box--no-opacity");
	});
	$(".skills-box[data-info='html']").mouseover(() => {
		$(".skills-block__html").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='html']").mouseout(() => {
		$(".skills-block__html").removeClass("skills-box--opacity");
	});
	$(".skills-box[data-info='css']").mouseover(() => {
		$(".skills-block__css").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='css']").mouseout(() => {
		$(".skills-block__css").removeClass("skills-box--opacity");
	});
	$(".skills-box[data-info='flex']").mouseover(() => {
		$(".skills-block__flex").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='flex']").mouseout(() => {
		$(".skills-block__flex").removeClass("skills-box--opacity");
	});
	$(".skills-box[data-info='grid']").mouseover(() => {
		$(".skills-block__grid").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='grid']").mouseout(() => {
		$(".skills-block__grid").removeClass("skills-box--opacity");
	});
	$(".skills-box[data-info='js']").mouseover(() => {
		$(".skills-block__js").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='js']").mouseout(() => {
		$(".skills-block__js").removeClass("skills-box--opacity");
	});
	$(".skills-box[data-info='php']").mouseover(() => {
		$(".skills-block__php").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='php']").mouseout(() => {
		$(".skills-block__php").removeClass("skills-box--opacity");
	});
	$(".skills-box[data-info='wp']").mouseover(() => {
		$(".skills-block__wp").addClass("skills-box--opacity");
	});
	$(".skills-box[data-info='wp']").mouseout(() => {
		$(".skills-block__wp").removeClass("skills-box--opacity");
	});
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