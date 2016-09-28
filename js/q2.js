var qscore = localStorage.getItem('qscore');
var score = parseInt(qscore);

function remove(){
	document.getElementById("myradioa").checked = false;
	document.getElementById("myradiob").checked = false;
	document.getElementById("myradioc").checked = false;
	document.getElementById("myradiod").checked = false;
	document.getElementById("myradioe").checked = false;
	document.getElementById("myradiof").checked = false;
}

function Question2(){
	if(document.getElementById("myradioa").checked && 
	   document.getElementById("myradiob").checked && 
	   document.getElementById("myradioc").checked && 
	   document.getElementById("myradiod").checked) {
			score++;
	}
	localStorage.setItem('qscore', score);
	window.location = "./question3.html"
}