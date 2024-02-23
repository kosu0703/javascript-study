/*

const desc = document.querySelector(`#desc`);
const open = document.querySelector(`#open`);
const close = document.querySelector(`#close`);

function showDetail(){
	desc.style.display = `inline-block`;	// 	block 도 가능
	open.style.display = `none`;
}

function hiddenDetail(){
	desc.style.display = `none`;
	open.style.display = `inline-block`;	//	block 도 가능
}

*/

//	다른방법
const desc1 = document.querySelector(`#desc`);
const open1 = document.querySelector(`#open`);
const close1 = document.querySelector(`#close`);

open1.addEventListener(`click`, (e) => {
	desc1.style.display = `inline-block`;	// 	block 도 가능
	open1.style.display = `none`;
});

close1.addEventListener(`click`, (e) => {
	desc1.style.display = `none`;	// 	block 도 가능
	open1.style.display = `inline-block`;
});

//	더하기 빼기
const btnPlus = document.querySelector(`#btnPlus`);
const res = document.querySelector(`#res`);
const btnMinus = document.querySelector(`#btnMinus`);

btnPlus.addEventListener(`click`, (e) => {
	res.innerHTML++;
});

btnMinus.addEventListener(`click`, (e) => {
	res.innerHTML--;
});

//	다른방법
//	getter , setter 사용
const btnPlus2 = document.querySelector(`#btnPlus2`);
const res2 = document.querySelector(`#res2`);
const btnMinus2 = document.querySelector(`#btnMinus2`);

btnPlus2.addEventListener(`click`, (e) => {
	let k = res2.innerHTML;
	k++;
	res2.innerHTML = k;
})

btnMinus2.addEventListener(`click`, (e) => {
	let k = res2.innerHTML;
	k--;
	res2.innerHTML = k;
})


