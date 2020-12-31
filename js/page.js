let li = document.querySelectorAll('li');
let page = document.querySelectorAll('.page');
let burg = document.querySelector('.c-hamburger');
let cont_page = document.querySelector('.cont_page');
let vlevo = document.querySelector('.vlevo');
let vpravo = document.querySelectorAll('.vpravo');

function enter(){
	for(let i = 0; i < li.length; i++){
	li[i].onclick=function(){
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
		menu.classList.toggle('close_menu');
		menu.classList.toggle('open_menu');
		burg.classList.toggle("is-active")
		if(i == 0){
			setTimeout("blur.style= 'background: rgba(133, 72, 27, 0.88)'", 500);
			slide[1].classList.remove('opacity0');
			cur = 1;
			}	
		else if (i == 1){
			setTimeout("blur.style= 'background: rgba(47, 47, 74, 0.88)'", 500);
			slide[2].classList.remove('opacity0');
			cur = 2;
			}
		else if (i == 2){
			setTimeout("blur.style= 'background: rgba(97, 43, 30, 0.88)'", 500);
			slide[3].classList.remove('opacity0');
			cur = 3;
			}
		else if (i == 3){
			setTimeout("blur.style= 'background: rgba(51, 86, 30, 0.88)'", 500);
			slide[4].classList.remove('opacity0');
			cur = 4;
			}
		else if(i == 4){
			setTimeout("blur.style= 'background: rgba(41, 57, 59, 0.88)'", 500);
			slide[5].classList.remove('opacity0');
			cur = 5;
			}
		else if(i == 5){
			setTimeout("blur.style= 'background: rgba(70, 90, 108, 0.88)'", 500);
			slide[6].classList.remove('opacity0');
			cur = 6;
			}
		else if(i == 6){
			setTimeout("blur.style= 'background: rgba(64, 31, 36, 0.87)'", 500);
			slide[7].classList.remove('opacity0');
			cur = 7;
			}
		else if(i == 7){
			setTimeout("blur.style= 'background: rgba(82, 73, 30, 0.88)'", 500);
			slide[8].classList.remove('opacity0');
			cur = 8;
			}
	}
	}
};
enter();

vlevo.onclick=function(){
	for(let i = 0; i < page.length; i++){
		page[i].classList.add('opacity0');
	}
	cont_page.classList.add('opacity0');
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
	};
}

function swipe_left(){
	if(cur == 0){
		return false;
	}
	strelka.onclick=function(){
			return false;
		};
		slidertop = function(){
			return false;
		};
	if(cur == 0){
		return false;
	};
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
	}
	if(cur > 7){
		page[7].classList.remove('opacity0');
		cont_page.classList.remove('opacity0');
		slide[cur].classList.remove('opacity0');
		return false;
	}
	cont_page.classList.remove('opacity0');
	page[cur-1].classList.remove('opacity0');
	slide[cur].classList.remove('opacity0');
}
for(let i = 0; i < vpravo.length; i++){
	vpravo[i].onclick= swipe_left;
}
