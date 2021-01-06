var initialPoint;
var finalPoint;

function swipe1(event){
	initialPoint=event.changedTouches[0];
};

function swipe2(event){
	finalPoint=event.changedTouches[0];
var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
if (xAbs > 20 || yAbs > 20) {
if (xAbs > yAbs) {
if (finalPoint.pageX < initialPoint.pageX){
/*СВАЙП ВЛЕВО*/
	for(let i = 0; i < slide.length; i++){
		non[i] = getComputedStyle(slide[i]);
	}
	if(document.body.className == 'baguetteBox-open'){
		return false;
	}
swipe_left();}
else{
/*СВАЙП ВПРАВО*/
	for(let i = 0; i < page.length; i++){
		opa[i] = getComputedStyle(page[i]);
	}
	if(document.body.className == 'baguetteBox-open'){
		return false;
	} else if (opa[0].opacity == 0 && opa[1].opacity == 0 && opa[2].opacity == 0 && opa[3].opacity == 0 && opa[4].opacity == 0 && opa[5].opacity == 0 && opa[6].opacity == 0 && opa[7].opacity == 0){
		swipe_left();
		return false;
	}
vlevo.onclick()}
}
else {
if (finalPoint.pageY < initialPoint.pageY){
/*СВАЙП ВВЕРХ*/
strelka.onclick();}
else{
/*СВАЙП ВНИЗ*/
slidertop();}
}
}
};

window.onresize = function onresize() {
  		document.removeEventListener("touchstart", swipe1);
		document.removeEventListener("touchend", swipe2);
		setTimeout("document.addEventListener('touchstart', swipe1);", 1000);
		setTimeout("document.addEventListener('touchend', swipe2);", 1000);
}

window.addEventListener('gestureend', function(e) {
    if (e.scale < 1.0) {
       	document.removeEventListener("touchstart", swipe1);
		document.removeEventListener("touchend", swipe2);
		setTimeout("document.addEventListener('touchstart', swipe1);", 500);
		setTimeout("document.addEventListener('touchend', swipe2);", 500);
    } else if (e.scale > 1.0) {
        document.removeEventListener("touchstart", swipe1);
		document.removeEventListener("touchend", swipe2);
		setTimeout("document.addEventListener('touchstart', swipe1);", 500);
		setTimeout("document.addEventListener('touchend', swipe2);", 500);
    }
}, false);

document.addEventListener('touchstart', swipe1, false);
document.addEventListener('touchend', swipe2, false);

let str;
function proverka(){
	str = getComputedStyle(strelka);
	if(str.opacity == 0){
			return false
	} else if(str.opacity == 1){
		document.addEventListener('touchstart', swipe1, false);
		document.addEventListener('touchend', swipe2, false);
	}
}
let timerId = setInterval(proverka, 1000)