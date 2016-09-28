function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "Qianwen Xie" && password == "010807771"){
		window.location = "./question1.html";
	} else{
		alert("Invalid username and password!");
	}
}

function survey(){
	window.location = "./Scorecard.html"
}