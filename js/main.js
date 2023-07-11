
// import { messages } from './messages.js';

const messages = {
	order: {
		uk: `<p class="cont__text">Замовити верстку можна електронною поштою: <a href="mailto:aleks_vk@ukr.net" class="cont__link">aleks_vk@ukr.net</a>; по телефону: <a href="tel:380964662905" class="cont__link">+38(096)466-29-05</a>; написати в <a class="cont__link" href="https://t.me/a_v_kuk" rel="nofollow noopener noreferrer" target="_blank">Telegram</a>; або на моїх облікових записах фрілансбірж: </p>
			<!-- noindex -->
			<a href="https://www.upwork.com/freelancers/~012b3af5cb896500b3" class="cont__link" rel="noreferrer noreferrer nofollow" target="_blank">UpWork</a>; 
			<a href="https://freelancehunt.com/freelancer/AVKprodakshn.html" class="cont__link" rel="noreferrer noreferrer nofollow" target="_blank">Freelancehunt</a>
			<!-- /noindex -->`,
		en: `<p class="cont__text">You can order layout by e-mail: <a href="mailto:aleks_vk@ukr.net" class="cont__link">aleks_vk@ukr.net</a>; by phone: <a href="tel:380964662905" class="cont__link">+38(096)466-29-05</a>; write to <a class="cont__link" href="https://t.me/a_v_kuk" rel="nofollow noopener noreferrer" target="_blank">Telegram</a>; or on my freelance services accounts: </p>
			<!-- noindex -->
			<a href="https://www.upwork.com/freelancers/~012b3af5cb896500b3" class="cont__link" rel="noreferrer noreferrer nofollow" target="_blank">UpWork</a>; 
			<a href="https://freelancehunt.com/freelancer/AVKprodakshn.html" class="cont__link" rel="noreferrer noreferrer nofollow" target="_blank">Freelancehunt</a>
			<!-- /noindex -->`,
		ru: `<p class="cont__text">Заказать верстку можно по електронной почте: <a href="mailto:aleks_vk@ukr.net" class="cont__link">aleks_vk@ukr.net</a>; по телефону: <a href="tel:380964662905" class="cont__link">+38(096)466-29-05</a>; написать в <a class="cont__link" href="https://t.me/a_v_kuk" rel="nofollow noopener noreferrer" target="_blank">Telegram</a>; или на моих аккаунтах фрилансбирж: </p>
			<!-- noindex -->
			<a href="https://www.upwork.com/freelancers/~012b3af5cb896500b3" class="cont__link" rel="noreferrer noreferrer nofollow" target="_blank">UpWork</a>; 
			<a href="https://freelancehunt.com/freelancer/AVKprodakshn.html" class="cont__link" rel="noreferrer noreferrer nofollow" target="_blank">Freelancehunt</a>
			<!-- /noindex -->`
	},
	m_at_h: {
		uk: `<p class="cont__text">Сайт виконаний на фреймворку Vue.js (3) як однофайловий додаток.</p> <p class="cont__text">Дані, що відображаються, надходять з трьох різних вільних API. (https://metmuseum.github.io/ - The Metropolitan Museum of Art, https://api.artic.edu/docs/ - Art Institute of Chicago API, https://pro.europeana.eu/page/apis - Europeana Foundation).</p> <p class="cont__text">Результат можна подивитися на <a class="cont__link" ref="https://museumathome.onrender.com/" rel="nofollow noopener noreferrer" target="_blank">https://museumathome.onrender.com/</a></p>`,
		en: `<p class="cont__text">The site is made on the Vue.js (3) framework as a single-file application.</p> <p class="cont__text">Displayed data comes from three different free APIs. (https://metmuseum.github.io/ - The Metropolitan Museum of Art, https://api.artic.edu/docs/ - Art Institute of Chicago API, https://pro.europeana.eu/page/apis - Europeana Foundation).</p> <p class="cont__text">The result can be viewed at <a class="cont__link" ref="https://museumathome.onrender.com/" rel="nofollow noopener noreferrer" target="_blank">https://museumathome.onrender.com/</a></p>`,
		ru: `<p class="cont__text">Сайт выполнен на фреймворке Vue.js (3) как однофайловое приложение.</p> <p class="cont__text">Отображаемые данные поступают с трех разных свободных API. (https://metmuseum.github.io/ - The Metropolitan Museum of Art, https://api.artic.edu/docs/ - Art Institute of Chicago API, https://pro.europeana.eu/page/apis - Europeana Foundation).</p> <p class="cont__text">Результат можно посмотреть на <a class="cont__link" ref="https://museumathome.onrender.com/" rel="nofollow noopener noreferrer" target="_blank">https://museumathome.onrender.com/</a></p>`
	},
};


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
		console.log(lang);
		$('.modal div').html(messages.order[lang]);
		$('body').addClass('over-hidn');
		$('.modal').addClass('active');
	})
	$('.close').click(function() {
		$('body').removeClass('over-hidn');
		$('.modal').removeClass('active');
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

/// ---- Display sample details ----- ///
const lang = document.documentElement.lang;
const modal = document.querySelector('.modal');
const body = document.body;
const buttons = Array.from(document.querySelectorAll('.sampls__btn'));
	console.log(body);
buttons.forEach(nod => nod.onclick = function (event) {
	const messageIdentifier = event.target.dataset.info;
	// console.log(messages[messageIdentifier]);
	const messageItem = messages[messageIdentifier][lang];
	console.log(modal.lastElementChild);
	modal.lastElementChild.innerHTML = messageItem;
	modal.classList.add('active');
	body.classList.add('over-hidn');
	// document.querySelector('.close').addEventListener('click', closeModal);
});
function closeModal (ev) {
	modal.classList.remove('active');
	body.classList.remove('over-hidn');
	document.querySelector('.close').removeEventListener('click', closeModal);
};