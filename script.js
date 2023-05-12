// your code here

function changeURL() {
	var url = "https://localhost:8080/";
	var name = document.getElementById("name").value;
	var year = document.getElementById("year").value;
	let abc = document.querySelector("#url");
	abc.textContent = `${url}${name!=""?`name=${name}`:""}${year!=""?`&year=${year}`:""}`;
}