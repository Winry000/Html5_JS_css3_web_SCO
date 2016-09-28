var qscore = localStorage.getItem('qscore');
var rscore = localStorage.getItem('rscore');
var vscore = localStorage.getItem('vscore');

document.getElementById("q").innerHTML += qscore;
document.getElementById("r").innerHTML += rscore;
document.getElementById("v").innerHTML += vscore;
document.getElementById("qscore").innerHTML += parseInt(qscore) * 50;
document.getElementById("rscore").innerHTML += parseInt(rscore) * 100;
document.getElementById("vscore").innerHTML += parseInt(vscore) * 100;

function Scorecard(){
	window.location = "./index.html"
}