let strelka = document.querySelector('.strelka');
let music = document.querySelector('.music');

let slide = document.querySelectorAll('.slide');
let cur = 0;
let cur2 = 0;

function slider(){
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
	}
		slide[cur].classList.remove('opacity0');
};

  	strelka.onclick=function(){
		home.classList.remove('fixed');
		fx = 3;
		if(cur2 == 0){
			music.classList.add('slide_scroll');
			music.classList.remove('opacity0');
			setTimeout("home.classList.add('opacity0');", 500);
			setTimeout("music.classList.remove('slide_scroll');", 500);
			cur2 = 1;
		}
	strelka.onclick=function(){
	if(cur + 1 == slide.length){
		cur = 0;
	}
	else{
		cur++;
	}
	slider();
	};
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


