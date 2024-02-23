const result = document.querySelector(`#result`);

const btn1 = document.querySelector(`#btn1`);
btn1.addEventListener(`click`, (e) => {
	//	화면이 안바뀌도록
	e.preventDefault;
	result.style.backgroundColor = `green`;
});
const btn2 = document.querySelector(`#btn2`);
btn2.addEventListener(`click`, (e) => {
	e.preventDefault;
	result.style.backgroundColor = `orange`;
});
const btn3 = document.querySelector(`#btn3`);
btn3.addEventListener(`click`, (e) => {
	e.preventDefault;
	result.style.backgroundColor = `purple`;
});

//	**function 사용해서 색상 바꾸기
//		함수로 인자(매개변수)로 색상을 받아서, 
//		함수 안에서 스타일(배경색)을 변경하자. 
function changBg(k){
	result.style.backgroundColor = k;
}

