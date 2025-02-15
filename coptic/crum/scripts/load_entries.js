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
		let headword = x[i].headword;
		let expanded = x[i].expanded;
		//headword = headword.replace(/\\\\(\(|\))/msg, "\\$1");
		//expanded = expanded.replace(/\\\\(\(|\))/msg, "\\$1");
		//console.log(expanded);
		for (let key in arrayStyling) {
			let regexStyling = new RegExp(arrayStyling[key][0], "msg");
			headword = headword.replace(regexStyling, arrayStyling[key][1]);
			//headword = headword.replace(/\\\\/, "");
			expanded = expanded.replace(regexStyling, arrayStyling[key][1]);
			//expanded = expanded.replace(/(?:\\\\)(\[|\]|\(|\))/, "$1");
		}
		processedText += '<li class="entry">';
		processedText += '<ul>';
		processedText += '<li>' + headword + '</li>\n';
		processedText += '<li><p>' + expanded + '</p></li>\n';
		processedText += '</ul>';
		processedText += '</li>';
	}
	let y = processedText;
	return y;
}


let addAndCorrectPage = document.querySelectorAll("#additions_and_corrections table tr td.page");
let addAndCorrectNote = document.querySelectorAll("#additions_and_corrections table tr td.note");
addAndCorrectPage.forEach(x => {
	x.innerHTML = applyRegexesAdditions(x);
});
addAndCorrectNote.forEach(x => {
	x.innerHTML = applyRegexesAdditions(x);
});

function applyRegexesAdditions(y) {
	let cellContent = [];
	cellContent[0] = y.innerHTML;
	for (let key in arrayStyling) {
		let regexStyling = new RegExp(arrayStyling[key][0], "msg");
		cellContent[0] = cellContent[0].replace(regexStyling, arrayStyling[key][1]);
		cellContent[0] = cellContent[0].replace(/\\\\(\[|\]|\(|\))/mgs, "$1");
	}
	return cellContent[0];
}