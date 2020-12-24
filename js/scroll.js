let strelka = document.querySelector('.strelka');
let music = document.querySelector('.music');

let slide = document.querySelectorAll('.slide');
let cur = 0;
let cur2 = 0;

  	strelka.onclick=function(){
		home.classList.remove('fixed');
		fx = 3;
		if(cur2 == 0){
			music.classList.add('music_scroll');
			music.classList.remove('opacity0');
			setTimeout("home.classList.add('opacity0');", 500);
			cur2 = 1;
		}
	(strelka.onclick=function(){
	for(let i = 0; i < slide.length; i++){
		slide[i].classList.add('opacity0');
	}
	slide[cur].classList.remove('opacity0');
	if(cur+1 == slide.length){
		cur = 0;
	}
	else{
		cur++;
	}
})();
	}
