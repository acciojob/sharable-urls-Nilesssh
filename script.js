// your code here

function changeURL(url) {
	var url = "https://localhost:8080/";
var name = document.getElementById("name").innerHTML;
var year = document.getElementById("year").innerHTML;
	console.log(name,year);
	document.getElementById("url").innerHTML = `${url}/?name=${name}&year=${year}`;
}