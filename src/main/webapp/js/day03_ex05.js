function displaySrc(){
	let cup = document.querySelector(`#cup`);
	alert(`이미지 소스 : ${cup.getAttribute('src')}`)
}

//	상세보기 함수
function show(){
	document.querySelector(`#detail`).style.display = `block`;
}

//	작은 이미지 요소를 모두 가져옴 => 배열
let smallPick = document.querySelectorAll(`.small`);

//	배열이니까 for 문으로 클릭하면 함수를 실행
for(let k in smallPick){
	smallPick[k].addEventListener(`click`, changePick);
}

//	클릭했을때 이미지가 바뀌는 함수
function changePick(){
	//	클릭한 이미지의 src 를 가져와서
	let newPick = this.src;
	//	큰 이미지에 클릭한 이미지를 넣어주세요
	document.querySelector(`#cup`).setAttribute('src', newPick);
}