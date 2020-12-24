let burger = document.querySelector('.c-hamburger');
let menu = document.querySelector('.menu');

burger.onclick=function(){
	menu.classList.toggle('open_menu');
	menu.classList.toggle('close_menu');
	menu.classList.remove('none');
}