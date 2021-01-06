for(let i = 0; i < slide.length; i++){
	slide[i].data = i
}

for(let i = 0; i < page.length; i++){
	page[i].data = i
}

let q = 0

let lc = document.querySelector('.landscape');



function cls(){
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
		slide[i].classList.remove('none');
		slide[i].style= 'transition: none; z-index: 8';
	}
	for(let i = 0; i < slide.vpravo; i++){
		vpravo[i].style= "z-index: 9";
	}
		for(let i = 0; i < page.length; i++){
		page[i].classList.add('opacity0');
		page[i].style= 'transition: none; z-index: 7';
		page[i].classList.add('none');
	}
	if(cur>0){
		page[cur-1].classList.remove('none');
	} else if(cur == 0){
		page[0].classList.remove('none');
	}
	if(+sessionStorage.getItem('slide') == 9 &&
	   +sessionStorage.getItem('page') == 8 &&
	 	+sessionStorage.getItem('cur') == 8){
		return false
	}
	perevorot();
	slide[+sessionStorage.getItem('slide')].style= 'z-index: 9';
	vpravo[+sessionStorage.getItem('slide')].style= "z-index: 11";
}

window.onorientationchange = function(event) {
	if(document.documentElement.clientWidth > 		document.documentElement.clientHeight){
		lc.classList.add('none');
	} else if(document.documentElement.clientWidth < 		document.documentElement.clientHeight){
		lc.classList.remove('none');
	}
  	
};

function perevorot(){
		if(document.documentElement.clientWidth > 		document.documentElement.clientHeight){
			lc.classList.remove('none')
		} else if(document.documentElement.clientWidth < 		document.documentElement.clientHeight) {
			lc.classList.add('none')
	}}

let myTimer = setInterval(perevorot, 1000)

window.onload=function(){
	if(+sessionStorage.getItem('slide') == 0 &&
	   		+sessionStorage.getItem('page') == 0 &&
			+sessionStorage.getItem('cur') == 0){
		cls()
		slide[0].classList.remove('opacity0');
		blur.style= 'background: rgba(70, 90, 108, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 1 &&
	   		+sessionStorage.getItem('page') == 0 &&
			+sessionStorage.getItem('cur') == 1){
		cls()
		slide[1].classList.remove('opacity0');
		blur.style= 'background: rgba(133, 72, 27, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 2 &&
	   		+sessionStorage.getItem('page') == 1 &&
	 		+sessionStorage.getItem('cur') == 2){
		cls()
		slide[2].classList.remove('opacity0');
		blur.style= 'background: rgba(47, 47, 74, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 3 &&
	   		+sessionStorage.getItem('page') == 2 &&
			+sessionStorage.getItem('cur') == 3){
		cls()
		slide[3].classList.remove('opacity0');
		blur.style= 'background: rgba(97, 43, 30, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 4 &&
	   		+sessionStorage.getItem('page') == 3 &&
	 		+sessionStorage.getItem('cur') == 4){
		cls()
		slide[4].classList.remove('opacity0');
		blur.style= 'background: rgba(51, 86, 30, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 5 &&
	   		+sessionStorage.getItem('page') == 4 &&
			+sessionStorage.getItem('cur') == 5){
		cls()
		slide[5].classList.remove('opacity0');
		blur.style= 'background: rgba(41, 57, 59, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 6 &&
	   		+sessionStorage.getItem('page') == 5 &&
	 		+sessionStorage.getItem('cur') == 6){
		cls()
		slide[6].classList.remove('opacity0');
		blur.style= 'background: rgba(70, 90, 108, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 7 &&
	   		+sessionStorage.getItem('page') == 6 &&
	 		+sessionStorage.getItem('cur') == 7){
		cls()
		slide[7].classList.remove('opacity0');
		blur.style= 'background: rgba(64, 31, 36, 0.87)';
	}
	else if(+sessionStorage.getItem('slide') == 8 &&
	   		+sessionStorage.getItem('page') == 7 &&
	 		+sessionStorage.getItem('cur') == 8){
		cls()
		slide[8].classList.remove('opacity0');
		blur.style= 'background: rgba(82, 73, 30, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 2 &&
	   		+sessionStorage.getItem('page') == 1 &&
	 		+sessionStorage.getItem('cur') == 1){
		cls();
		NewSwipe();
		page[0].classList.remove('opacity0');
		blur.style= 'background: rgba(133, 72, 27, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 3 &&
	   		+sessionStorage.getItem('page') == 2 &&
			+sessionStorage.getItem('cur') == 2){
		cls()
		NewSwipe();
		page[1].classList.remove('opacity0');
		blur.style= 'background: rgba(47, 47, 74, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 4 &&
	   		+sessionStorage.getItem('page') == 3 &&
	 		+sessionStorage.getItem('cur') == 3){
		cls();
		NewSwipe();
		page[2].classList.remove('opacity0');
		blur.style= 'background: rgba(97, 43, 30, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 5 &&
	   		+sessionStorage.getItem('page') == 4 &&
	 		+sessionStorage.getItem('cur') == 4){
		cls();
		NewSwipe();
		page[3].classList.remove('opacity0');
		blur.style= 'background: rgba(51, 86, 30, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 6 &&
	   		+sessionStorage.getItem('page') == 5 &&
	 		+sessionStorage.getItem('cur') == 5){
		cls();
		NewSwipe();
		page[4].classList.remove('opacity0');
		blur.style= 'background: rgba(41, 57, 59, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 7 &&
	   		+sessionStorage.getItem('page') == 6 &&
	 		+sessionStorage.getItem('cur') == 6){
		cls();
		NewSwipe();
		page[5].classList.remove('opacity0');
		blur.style= 'background: rgba(70, 90, 108, 0.88)';
	}
	else if(+sessionStorage.getItem('slide') == 8 &&
	   		+sessionStorage.getItem('page') == 7 &&
	 		+sessionStorage.getItem('cur') == 7){
		cls();
		NewSwipe();
		page[6].classList.remove('opacity0');
		blur.style= 'background: rgba(64, 31, 36, 0.87)';
	}
	else if(+sessionStorage.getItem('slide') == 9 &&
	   		+sessionStorage.getItem('page') == 8 &&
	 		+sessionStorage.getItem('cur') == 8){
		cls();
		NewSwipe();
		page[7].classList.remove('opacity0');
		blur.style= 'background: rgba(82, 73, 30, 0.88)';
	}
}

function NewSwipe(){
	window.scrollTo(0,0);
	vlevo.style="transition: none";
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
	page[cur-1].style= "z-index: 12";
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
	cont_page.classList.remove('opacity0');
	page[cur-1].classList.remove('min_page');
	page[cur-1].classList.add('max_page');
	page[cur-1].classList.remove('opacity0');
	slide[cur].classList.remove('opacity0');
	sessionStorage.setItem('slide', page[cur].data+1);
	sessionStorage.setItem('page', page[cur-1].data+1);
	sessionStorage.setItem('cur', cur);
}


