import arrayStyling from "./dictionary_regexes.js";

const xmlhttp = new XMLHttpRequest();
let url = "";

url = "../../coptic/crum/scripts/crum_entries.json";
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const fetchFromJSON = JSON.parse(this.responseText);
		const appliedRegexes = applyRegexesDictionary(fetchFromJSON);
		const convertedEntries = appliedRegexes;
		const addToDictionary = document.querySelector("#dictionary ul");
		addToDictionary.innerHTML += convertedEntries;
	}
	const entries = document.querySelectorAll(".entry");
	entries.forEach(x => {
		x.classList.toggle("collapse");
		x.querySelector(".togglable").addEventListener("click", function (e) {
			x.classList.toggle("collapse");
		});
	});
};
xmlhttp.open("GET", url);
xmlhttp.send();

function applyRegexesDictionary(x) {
	let processedText = "";
	for (let i = 0; i < x.length; i++) {
		let headword = x[i].headword;
		for (let key in arrayStyling) {
			let regexStyling = new RegExp(arrayStyling[key][0], "msg");
			headword = headword.replace(regexStyling, arrayStyling[key][1]);
			//headword = headword.replace(/\\\\/, "");
		}
		processedText += '<li class="entry"><div class="togglable"></div><div class="definition"><p>' + headword + '</p></div></li>\n';
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