// your code here

function changeURL() {
	var url = "https://localhost:8080/";
	var name = document.getElementById("name").innerText;
	var year = document.getElementById("year").innerText;
	document.getElementById("url").innerHTML = `${url}?name=${name}&year=${year}`;
}