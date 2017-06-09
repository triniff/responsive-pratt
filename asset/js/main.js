var botonMenu = document.getElementsByClassName("navbar-toggle")[0];
	botonMenu.addEventListener("click", function(){
		var nav = document.getElementsByClassName("navbar-collapse")[0];
		nav.classList.toggle("in");
	})

var btnSubmit = document.getElementById("btn-submit");
	btnSubmit.addEventListener("click", function(){
		var name = document.getElementById("inputName");
		var address = document.getElementById("inputEmail");
		var textArea = document.getElementById("textAreaInput");

		if(name.value == "" || name.value != isNaN){
			name.classList.add("alert-danger");
		} if(address.value == "" ){
			address.classList.add("alert-danger");
		} if (textArea.value == ""){
			textArea.classList.add("alert-danger");
		}else{
			name.classList.remove("alert-danger");
			address.classList.remove("alert-danger");
			textArea.classList.remove("alert-danger");

			document.getElementById("inputName").value = "" ;
			document.getElementById("inputEmail").value = "";
			document.getElementById("textAreaInput").value = "";


		}
	})
