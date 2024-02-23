const link = document.querySelector(`#a`);

//	버튼을 누르면 이벤트 처리 => click

//	변수.addEventListener( `이벤트명`, (전달될 값) => {실행구문} );

link.addEventListener(`click`, (e) => {
	//alert(`눌렀네`);
	
	//	해당 이벤트의 기능을 동작하지 마세요.
	//	(즉, 지금은 링크기능을 하지 마세요.)
	e.preventDefault();
	
	console.log(`눌렀네`);
});


//	마우스를 올리면 이벤트 처리
const box = document.querySelector(`#box`);

//	마우스를 올리면 이벤트 처리 => mouseenter
box.addEventListener(`mouseenter`, (e) => {
	box.style.backgroundColor = `pink`;
})

//	마우스를 빼면 이벤트 처리 => mouseleave
box.addEventListener(`mouseleave`, (e) => {
	box.style.backgroundColor = `aqua`;
})








