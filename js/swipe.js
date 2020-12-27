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
/*СВАЙП ВЛЕВО*/}
else{
/*СВАЙП ВПРАВО*/}
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