let li = document.querySelectorAll('li');
let page = document.querySelectorAll('.page');
let cont_page = document.querySelector('.cont_page');
let vlevo = document.querySelector('.vlevo');
let vpravo = document.querySelectorAll('.cont');
let opa = [];
let non = [];

function enter(){
	for(let i = 0; i < li.length; i++){
	li[i].onclick=function(){
		a=0;
			for(let i = 0; i < page.length; i++){
			page[i].style= "transition: none; z-index: 11";
			page[i].classList.add('min_page');
			page[i].classList.add('none');
		}
			for(let i = 0; i < slide.length; i++){
			setTimeout(slide[i].classList.add('none'), 1000);
		}
		slide[cur].classList.remove('none');
		sessionStorage.setItem('page', page[i].data+1);
		sessionStorage.setItem('slide', slide[i+1].data+1);
		vlevo.style= "transition: none";
		vlevo.classList.remove('opacity0');
		setTimeout(trans, 500);
		strelka.classList.add('opacity0');
		vlevo.classList.remove('none');
		document.addEventListener("touchstart", swipe1);
		document.addEventListener("touchend", swipe2);
		strelka.onclick=function(){
			return false;
		};
		slidertop = function(){
			return false;
		};
		for(let i = 0; i < li.length; i++){
		page[i].classList.add('opacity0');
		slide[i].classList.add('opacity0');
		slide[8].classList.add('opacity0');
	}
		cont_page.classList.remove('opacity0');
		page[i].classList.remove('opacity0');
		page[i].classList.remove('min_page');
		page[i].classList.add('max_page');
		menu.classList.toggle('close_menu');
		menu.classList.toggle('open_menu');
		burger[0].classList.add('opacity0');
		burger[1].classList.remove('opacity0');
		setTimeout("burger[0].classList.remove('is-active')", 1);
		setTimeout("burger[1].classList.remove('is-active')", 1);
		if(i == 0){
			setTimeout("blur.style= 'background: rgba(133, 72, 27, 0.88)'", 500);
			slide[1].classList.remove('opacity0');
			cur = 1;
			sessionStorage.setItem('cur', cur);
			page[0].classList.remove('none');
			}	
		else if (i == 1){
			setTimeout("blur.style= 'background: rgba(47, 47, 74, 0.88)'", 500);
			slide[2].classList.remove('opacity0');
			cur = 2;
			sessionStorage.setItem('cur', cur);
			page[1].classList.remove('none');
			}
		else if (i == 2){
			setTimeout("blur.style= 'background: rgba(97, 43, 30, 0.88)'", 500);
			slide[3].classList.remove('opacity0');
			cur = 3;
			sessionStorage.setItem('cur', cur);
			page[2].classList.remove('none');
			}
		else if (i == 3){
			setTimeout("blur.style= 'background: rgba(51, 86, 30, 0.88)'", 500);
			slide[4].classList.remove('opacity0');
			cur = 4;
			sessionStorage.setItem('cur', cur);
			page[3].classList.remove('none');
			}
		else if(i == 4){
			setTimeout("blur.style= 'background: rgba(41, 57, 59, 0.88)'", 500);
			slide[5].classList.remove('opacity0');
			cur = 5;
			sessionStorage.setItem('cur', cur);
			page[4].classList.remove('none');
			}
		else if(i == 5){
			setTimeout("blur.style= 'background: rgba(70, 90, 108, 0.88)'", 500);
			slide[6].classList.remove('opacity0');
			cur = 6;
			sessionStorage.setItem('cur', cur);
			page[5].classList.remove('none');
			}
		else if(i == 6){
			setTimeout("blur.style= 'background: rgba(64, 31, 36, 0.87)'", 500);
			slide[7].classList.remove('opacity0');
			cur = 7;
			sessionStorage.setItem('cur', cur);
			page[6].classList.remove('none');
			}
		else if(i == 7){
			setTimeout("blur.style= 'background: rgba(82, 73, 30, 0.88)'", 500);
			slide[8].classList.remove('opacity0');
			cur = 8;
			sessionStorage.setItem('cur', cur);
			page[7].classList.remove('none');
			}
	}
	}
};
enter();


vlevo.onclick=function(){
	for(let i = 0; i < page.length; i++){
		page[i].classList.add('opacity0');
		page[i].classList.add('none');
		page[i].style= "transition: all ease 1s; z-index: 8";
		opa[i] = getComputedStyle(page[i]);
	}
		for(let i = 0; i < slide.length; i++){
			slide[i].classList.remove('none');
		}
	if(cur>0){
		page[cur-1].classList.remove('none');}
	strelka.style= "opacity: 1";
	if(opa[0].opacity == 0 && opa[1].opacity == 0 && opa[2].opacity == 0 && opa[3].opacity == 0 && opa[4].opacity == 0 && opa[5].opacity == 0 && opa[6].opacity == 0 && opa[7].opacity == 0){
		return false;
	}
	burger[0].classList.remove('opacity0');
	burger[1].classList.add('opacity0');
	burger[0].classList.remove('is-active');
	burger[1].classList.remove('is-active');
	for(let i = 0; i < slide.length; i++){
		slide[i].style= 'z-index: 8';

	}
	for(let i = 0; i < vpravo.length; i++){
		vpravo[i].style= "z-index: 9";
	}
	slide[cur].style= 'z-index: 9';
	if(cur<8){
		vpravo[cur].style= "z-index: 11";
	}
	strelka.classList.remove('opacity0');
	vlevo.style= "transition: all ease 1s"
	vlevo.classList.add('opacity0');
	strelka.onclick=function(){
	if(cur + 1 == slide.length){
		cur = 0;
	}
	else{
		cur++;
	}
	slider();
	};
	slidertop = function(){
	if(cur - 1 == -1){
		cur = slide.length - 1;
	}
	else{
		cur--;
	}
	slider();
	}
	sessionStorage.setItem('slide', slide[cur].data);
	sessionStorage.setItem('page', page[cur-1].data);
	sessionStorage.setItem('cur', cur);
	setTimeout(document.addEventListener('touchstart', swipe1, false), 3000);
	setTimeout(document.addEventListener('touchend', swipe2, false), 3000);
}

function swipe_left(){
	window.scrollTo(0,0);
	vpravo[0].style= "z-index: 11";
	vlevo.classList.remove('opacity0');
	strelka.classList.add('opacity0');
	if(cur == 0){
		strelka.classList.remove('opacity0');
		vlevo.classList.add('opacity0');
		return false;
	}
	strelka.onclick=function(){
			return false;
		};
		slidertop = function(){
			return false;
		};
	burger[0].classList.add('opacity0');
	burger[1].classList.remove('opacity0');
	burger[1].classList.remove('is-active');
	burger[0].classList.remove('is-active');
	trans();
	page[cur-1].style= "transition: all ease 1s; z-index: 12";
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
	}
	for(let i = 0; i < page.length; i++){
		page[i].classList.add('min_page');
	}
	if(cur > page.length-1){
		page[page.length-1].classList.remove('opacity0');
		page[page.length-1].classList.remove('min_page');
		page[page.length-1].classList.add('max_page');
		cont_page.classList.remove('opacity0');
		slide[cur].classList.remove('opacity0');
		return false;
	}
	setTimeout("cont_page.classList.remove('opacity0');", 100);
	page[cur-1].classList.remove('min_page');
	page[cur-1].classList.add('max_page');
	setTimeout("page[cur-1].classList.remove('opacity0')", 100);
	slide[cur].classList.remove('opacity0');
	sessionStorage.setItem('slide', page[cur].data+1);
	sessionStorage.setItem('page', page[cur-1].data+1);
	sessionStorage.setItem('cur', cur);
}
for(let i = 0; i < vpravo.length; i++){
	vpravo[i].onclick= swipe_left;
}

function trans(){
	for(let i = 0; i < page.length; i++){
		page[i].style= "transition: all ease 1s; z-index: 11";
	}
	if(cur > page.length-1){
		page[page.length-1].style= "transition: all ease 1s; z-index: 12";
		return false
	}
	page[cur-1].style= "transition: all ease 1s; z-index: 12";
}