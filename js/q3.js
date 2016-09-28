function remove(){
	document.getElementById("myradioa").checked = false;
	document.getElementById("myradiob").checked = false;
	document.getElementById("myradioc").checked = false;
	document.getElementById("myradiod").checked = false;
	document.getElementById("myradioe").checked = false;
	document.getElementById("myradiof").checked = false;
}

function Question3(){
	if( document.getElementById("myradioa").checked &&
	    document.getElementById("myradiob").checked &&
	   !document.getElementById("myradioc").checked &&
	   !document.getElementById("myradiod").checked &&
	   !document.getElementById("myradioe").checked &&
	   !document.getElementById("myradiof").checked) {
			localStorage.setItem('rscore', 1);
	} else {
		localStorage.setItem('rscore', 0);
	}
	window.location = "./question4.html"
}
