// your code here

function changeURL(url) {
	var url = "https://localhost:8080/";
var name = document.getElementById("name").innerText;
var year = document.getElementById("year").innerText;
	console.log(name,year);
	document.getElementById("url").innerHTML = `${url}?name=${name}&year=${year}/`;
}