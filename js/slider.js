let strelka = document.querySelector('.strelka');
let blur = document.querySelector('.blur');
let slide = document.querySelectorAll('.slide');
let cur = +localStorage.getItem('cur');
let cur2 = 0;

function slider(){
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
		vpravo[i].style= "z-index: 9";
		slide[i].style= 'z-index: 8';
	}
		slide[cur].style= 'z-index: 9';
		vpravo[cur].style= "z-index: 11";
		slide[cur].classList.remove('opacity0');
		if(cur == 0){
			blur.style= "background: rgba(70, 90, 108, 0.88)"
			cur2 = 0;
		} else if (cur == 1){
			blur.style= "background: rgba(133, 72, 27, 0.88)"
			cur2 = 0;
		} else if (cur == 2){
			blur.style= "background: rgba(47, 47, 74, 0.88)"
			cur2 = 1;
		} else if (cur == 3){
			blur.style= "background: rgba(97, 43, 30, 0.88)"
			cur2 = 2;
		} else if(cur == 4){
			blur.style= "background: rgba(51, 86, 30, 0.88)"
			cur2 = 3;
		} else if(cur == 5){
			blur.style= "background: rgba(41, 57, 59, 0.88)"
			cur2 = 4;
		} else if(cur == 6){
			blur.style= "background: rgba(70, 90, 108, 0.88)"
			cur2 = 5;
		} else if(cur == 7){
			blur.style= "background: rgba(64, 31, 36, 0.87)"
			cur2 = 6;
		} else if(cur == 8){
			blur.style= "background: rgba(82, 73, 30, 0.88)"
			cur2 = 7;
		};
		localStorage.setItem('slide', slide[cur].data);
		localStorage.setItem('page', page[cur2].data);
		localStorage.setItem('cur', cur);
};


	strelka.onclick=function(){
	if(cur + 1 == slide.length){
		cur = 0;
	}
	else{
		cur++;
	}
	slider();
	};

function slidertop(){
	if(cur - 1 == -1){
		cur = slide.length - 1;
	}
	else{
		cur--;
	}
	slider();
}

