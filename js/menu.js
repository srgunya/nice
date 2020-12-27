let burger = document.querySelector('.c-hamburger');
let menu = document.querySelector('.menu');
let home = document.querySelector('.home');
let fx = 0;
let a = 0;


  	burger.onclick=function(){
	menu.classList.toggle('open_menu');
	menu.classList.toggle('close_menu');
	menu.classList.remove('none');
		if(a == 0){
			document.removeEventListener("touchstart", swipe1);
			document.removeEventListener("touchend", swipe2);
			window.onresize = function onresize() {
  			document.removeEventListener("touchstart", swipe1);
			document.removeEventListener("touchend", swipe2);
			}
			a = 1;
		} else if (a == 1){
			document.addEventListener("touchstart", swipe1);
			document.addEventListener("touchend", swipe2);
			window.onresize = function onresize() {
  			document.removeEventListener("touchstart", swipe1);
			document.removeEventListener("touchend", swipe2);
			setTimeout("document.addEventListener('touchstart', swipe1);", 1000);
			setTimeout("document.addEventListener('touchend', swipe2);", 1000);
			}
			a = 0;
		};
		if(fx == 0){
			home.classList.remove('fixed');
			fx = 1;
		} else if(fx == 1){
			home.classList.add('fixed');
			fx = 0;
		};
	};