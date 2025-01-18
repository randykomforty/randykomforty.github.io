var xmlhttp = new XMLHttpRequest();
var url = "./scripts/crum_entries.json";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		myFunction(myArr);
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
	var out = "";
	var i;
	out += "<ul>";
	for (i = 0; i < arr.length; i++) {
		out += '<li class="entry">' + arr[i].entry + '<ul><li>' + arr[i].more_info + '</li></ul></li>';
	}
	out += "</ul>"
	document.getElementById("dictionary").innerHTML = out;
}
