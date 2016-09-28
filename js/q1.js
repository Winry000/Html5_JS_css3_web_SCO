function remove(){
	document.getElementById("myradioa").checked = false;
	document.getElementById("myradiob").checked = false;
	document.getElementById("myradioc").checked = false;
	document.getElementById("myradiod").checked = false;
	document.getElementById("myradioe").checked = false;
	document.getElementById("myradiof").checked = false;
}

function Question1(){
	if(!document.getElementById("myradioa").checked &&
	   !document.getElementById("myradiob").checked &&
	   !document.getElementById("myradioc").checked &&
	    document.getElementById("myradiod").checked) {
			localStorage.setItem('qscore', 1);
	} else {
		localStorage.setItem('qscore', 0);
	}
	window.location = "./question2.html"
}