let burger = document.querySelectorAll('.c-hamburger');
let menu = document.querySelector('.menu');
let home = document.querySelector('.home');
let a = 0;

	for(let i = 0; i < burger.length; i++){
			burger[i].onclick=function(){
		for(let i = 0; i < page.length; i++){
			page[i].style= "transition: none; z-index: 11";
			opa[i] = getComputedStyle(page[i]);
			setTimeout("page[i].classList.toggle('min_page')", 1);
		};
		if(opa[0].opacity == 0 && opa[1].opacity == 0 && opa[2].opacity == 0 && opa[3].opacity == 0 && opa[4].opacity == 0 && opa[5].opacity == 0 && opa[6].opacity == 0 && opa[7].opacity == 0){
			burger[0].classList.add('opacity0');
			burger[1].classList.remove('opacity0');		
		}
			burger[1].classList.toggle('opacity0');
			burger[0].classList.toggle('opacity0');
				window.scrollTo(0,0);
	menu.classList.toggle('open_menu');
	menu.classList.toggle('close_menu');
	menu.classList.remove('none');
		if(a == 0){
			setTimeout("burger[0].classList.toggle('is-active')", 1);
			setTimeout("burger[1].classList.toggle('is-active')", 1);
			document.removeEventListener("touchstart", swipe1);
			document.removeEventListener("touchend", swipe2);
			window.onresize = function onresize() {
  			document.removeEventListener("touchstart", swipe1);
			document.removeEventListener("touchend", swipe2);
			}
			a = 1;
			return false
		} else if (a == 1){
			setTimeout("burger[0].classList.toggle('is-active')", 1);
			setTimeout("burger[1].classList.toggle('is-active')", 1);
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
	};
	}


  