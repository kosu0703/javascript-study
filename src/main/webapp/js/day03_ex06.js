//	선언
let pic = document.querySelectorAll(`.pic`);
let lightbox = document.querySelector(`#lightbox`);
let lightboxImage = document.querySelector(`#lightboxImage`);

/* for in 문 안될때 */

//	1. Array.from 사용
/*
let arr = Array.from(pic);
for ( let k in arr ){
	arr[k].addEventListener(`click`, show);
}
*/

//	2. for of 문 사용
for ( let k of pic ){
	k.addEventListener(`click`, img_open);
}

function img_open(){
	let bigPic = this.getAttribute('data-src');
	lightboxImage.setAttribute('src', bigPic);
	lightbox.style.display = `block`;
}

//	외부 배경을 눌렀을때 숨기겠다.
lightbox.onclick = function(){
	lightbox.style.display = `none`;
}