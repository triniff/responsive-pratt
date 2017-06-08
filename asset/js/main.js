var boton = document.getElementsByClassName("navbar-toggle")[0];
boton.addEventListener("click", function(){
	var nav = document.getElementsByClassName("navbar-collapse")[0];
	nav.classList.toggle("in");
})