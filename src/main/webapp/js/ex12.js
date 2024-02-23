const box = document.querySelector(`#box`);

box.style.width = `50%`;
box.style.height = `300px`;
box.style.border = `1px solid red`;

//	배경색 바꾸기 (-c => 대문자 C)
//	스타일에 바 - 가 있으면, 
//	**바 - 를 없애고 다음 문자를 대문자로 바꾸자
box.style.backgroundColor = `green`;