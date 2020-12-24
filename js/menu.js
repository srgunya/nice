let burger = document.querySelector('.c-hamburger');
let menu = document.querySelector('.menu');
let home = document.querySelector('.home');
let fx = 0;


  	burger.onclick=function(){
	menu.classList.toggle('open_menu');
	menu.classList.toggle('close_menu');
	menu.classList.remove('none');
		if(fx == 0){
			home.classList.remove('fixed');
			fx = 1;
		} else if(fx == 1){
			home.classList.add('fixed');
			fx = 0;
		}
}