for(let i = 0; i < slide.length; i++){
	slide[i].data = i
}

for(let i = 0; i < page.length; i++){
	page[i].data = i
}

let q = 0


function cls(){
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
		vpravo[i].style= "z-index: 9";
		slide[i].style= 'transition: none; z-index: 8';
	}
		for(let i = 0; i < page.length; i++){
		page[i].classList.add('opacity0');
		page[i].style= 'transition: none';
	}
	if(+localStorage.getItem('slide') == 9 &&
	   +localStorage.getItem('page') == 8 &&
	 	+localStorage.getItem('cur') == 8){
		return false
	}
	slide[+localStorage.getItem('slide')].style= 'z-index: 9';
	vpravo[+localStorage.getItem('slide')].style= "z-index: 11";
}

window.onload=function(){
	if(+localStorage.getItem('slide') == 0 &&
	   		+localStorage.getItem('page') == 0 &&
			+localStorage.getItem('cur') == 0){
		cls()
		slide[0].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 1 &&
	   		+localStorage.getItem('page') == 0 &&
			+localStorage.getItem('cur') == 1){
		cls()
		slide[1].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 2 &&
	   		+localStorage.getItem('page') == 1 &&
	 		+localStorage.getItem('cur') == 2){
		cls()
		slide[2].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 3 &&
	   		+localStorage.getItem('page') == 2 &&
			+localStorage.getItem('cur') == 3){
		cls()
		slide[3].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 4 &&
	   		+localStorage.getItem('page') == 3 &&
	 		+localStorage.getItem('cur') == 4){
		cls()
		slide[4].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 5 &&
	   		+localStorage.getItem('page') == 4 &&
			+localStorage.getItem('cur') == 5){
		cls()
		slide[5].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 6 &&
	   		+localStorage.getItem('page') == 5 &&
	 		+localStorage.getItem('cur') == 6){
		cls()
		slide[6].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 7 &&
	   		+localStorage.getItem('page') == 6 &&
	 		+localStorage.getItem('cur') == 7){
		cls()
		slide[7].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 8 &&
	   		+localStorage.getItem('page') == 7 &&
	 		+localStorage.getItem('cur') == 8){
		cls()
		slide[8].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 2 &&
	   		+localStorage.getItem('page') == 1 &&
	 		+localStorage.getItem('cur') == 1){
		cls();
		NewSwipe();
		page[0].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 3 &&
	   		+localStorage.getItem('page') == 2 &&
			+localStorage.getItem('cur') == 2){
		cls()
		NewSwipe();
		page[1].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 4 &&
	   		+localStorage.getItem('page') == 3 &&
	 		+localStorage.getItem('cur') == 3){
		cls();
		NewSwipe();
		page[2].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 5 &&
	   		+localStorage.getItem('page') == 4 &&
	 		+localStorage.getItem('cur') == 4){
		cls();
		NewSwipe();
		page[3].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 6 &&
	   		+localStorage.getItem('page') == 5 &&
	 		+localStorage.getItem('cur') == 5){
		cls();
		NewSwipe();
		page[4].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 7 &&
	   		+localStorage.getItem('page') == 6 &&
	 		+localStorage.getItem('cur') == 6){
		cls();
		NewSwipe();
		page[5].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 8 &&
	   		+localStorage.getItem('page') == 7 &&
	 		+localStorage.getItem('cur') == 7){
		cls();
		NewSwipe();
		page[6].classList.remove('opacity0');
	}
	else if(+localStorage.getItem('slide') == 9 &&
	   		+localStorage.getItem('page') == 8 &&
	 		+localStorage.getItem('cur') == 8){
		cls();
		NewSwipe();
		page[7].classList.remove('opacity0');
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
	localStorage.setItem('slide', page[cur].data+1);
	localStorage.setItem('page', page[cur-1].data+1);
	localStorage.setItem('cur', cur);
}
