let butt = document.querySelectorAll('.butt');
let maxRead = [];
let contText = [];
let b = 0;

for(let i = 0; i < butt.length; i++){
	maxRead[i] = butt[i].previousElementSibling;
	contText[i] = butt[i].parentNode;
}


for(let i = 0; i < butt.length; i++){
	butt[i].onclick=function(){
			maxRead[i].classList.toggle('max_height');
			contText[i].classList.toggle('max_width');
			if(b == 0){
				butt[i].innerText= 'ЗАКРЫТЬ';
				b=1;
			} else if(b == 1){
				butt[i].innerText= 'ЧИТАТЬ';
				b=0;
			}
			
	}
}