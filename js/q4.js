function remove(){
	document.getElementById("myradioa").checked = false;
	document.getElementById("myradiob").checked = false;
	document.getElementById("myradioc").checked = false;
	document.getElementById("myradiod").checked = false;
	document.getElementById("myradioe").checked = false;
	document.getElementById("myradiof").checked = false;
}

function Question4(){
	if( document.getElementById("myradioa").checked &&
	   !document.getElementById("myradiob").checked &&
	   !document.getElementById("myradioc").checked &&
	   !document.getElementById("myradiod").checked) {
	   	localStorage.setItem('vscore', 1);
	} else {
		localStorage.setItem('vscore', 0);
	}
	window.location = "./survey.html"
}