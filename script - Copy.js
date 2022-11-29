
document.querySelector('.cn').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
	document.querySelector('.sidebar').classList.toggle('sidebargo');
	if(document.querySelector('.sidebar').classList.contains('sidebargo')){
		document.querySelector('.hb').style.display='inline'
		document.querySelector('.cn').style.display='none'
	}
	else{
		document.querySelector('.hb').style.display='none'
		setTimeout(() =>{
		document.querySelector('.cn').style.display='inline'
	}, 350);
	}
})

