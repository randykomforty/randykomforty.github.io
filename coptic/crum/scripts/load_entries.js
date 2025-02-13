import arrayStyling from "../../scripts/dictionary_regexes.js";

const xmlhttp = new XMLHttpRequest();
let url = "";

url = "./scripts/crum_entries.json";
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const fetchFromJSON = JSON.parse(this.responseText);
		const appliedRegexes = applyRegexesDictionary(fetchFromJSON);
		const convertedEntries = appliedRegexes;
		const addToDictionary = document.querySelector("#dictionary ul");
		addToDictionary.innerHTML += convertedEntries;
	}
	const dict_entries = document.querySelectorAll("#dictionary > ul > li.entry > ul > li:first-child");
	dict_entries.forEach(dict_entry => {
		dict_entry.addEventListener("click", function (e) {
			dict_entry.classList.toggle("collapse");
		});
	});
};
xmlhttp.open("GET", url);
xmlhttp.send();

function applyRegexesDictionary(x) {
	let processedText = "";
	for (let i = 0; i < x.length; i++) {
		processedText += '<li class="entry">';
		processedText += '<ul>';
		processedText += '<li class="collapse">' + x[i].headword + '</li>\n';
		processedText += '<li>' + x[i].expanded + '</li>\n';
		processedText += '</ul>';
		processedText += '</li>';
	}
	let y = processedText;
	for (let i = 0; i < arrayStyling.length; i++) {
		let regexStyling = new RegExp(arrayStyling[i][0], "msg");
		y = y.replace(regexStyling, arrayStyling[i][1]);
	}
	return y;
}