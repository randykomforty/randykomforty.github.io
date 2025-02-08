const xmlhttp = new XMLHttpRequest();
let url = "";

url = "./scripts/crum_entries.json";
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const fetchFromJSON = JSON.parse(this.responseText);
		const appliedRegexes = applyRegexesDictionary(fetchFromJSON);
		//const convertedEntries = countReplacements(appliedRegexes);
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

url = "./scripts/additions_and_corrections.json";
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const fetchFromJSON = JSON.parse(this.responseText);
		const appliedRegexes = applyRegexesAdditions(fetchFromJSON);
		//const convertedAdditions = countReplacements(appliedRegexes);
		const convertedAdditions = appliedRegexes;
		const additionsAndCorrections = document.querySelector("#additions_and_corrections ul");
		additionsAndCorrections.innerHTML += convertedAdditions;
	}
};
xmlhttp.open("GET", url);
xmlhttp.send();

let arrayStyling = [
	ampersand = [/&(?!amp;)/, "&amp;"],
	asterisk = [/\\\*/, "&ast;"],
	bold = [/\*(.+?)\*/, "<b>$1<\/b>"],
	italic = [/_(.+?)_/, "<i>$1<\/i>"],
	dialect = [/\[\[(S|B|A|F|O)\]\]/, "<i class=\"dialect\">$1<\/i>"],
	subdialect = [/\[\[(S|F)\^(a|f|b)\]\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
	subdialectLyco = [/\[\[(A\^2)\]\]/, "<i class=\"dialect lycopolitan\">A<sup>2<\/sup><\/i>"],
	superscript = [/\^(\w+)/, "<sup>$1<\/sup>"],
	coptic = [/(\(?\#?-?([\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+\(.+?†?\)|[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+(†|-|\.|\?|\.\?)?)(\s(?=-?[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]))?\#?\)?)/, "<span class=\"coptic\">$1<\/span>"],
	headword = [/<span class=\"coptic\">\#(\(?.*?\)?)\#<\/span>/, "<span class=\"headword coptic\">$1<\/span>"],
	qualitative = [/†/, "<sup>†<\/sup>"],
	greek = [/(-?([\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+\(.+?\)|[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+(-|\.|\?|\.\?)?)(\s(?=-?[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]))?)/, "<span class=\"greek\">$1<\/span>"],
	arabic = [/(?:\[)([\u0600-\u06FF\uFE70-\uFEFF]+\u05f3?)(?:\])/, "<span class=\"arabic\">$1<\/span>"],
	hebrew = [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"],
	aramaic = [/(?:\[)([\u0700-\u074F]+\u05f3?)(?:\])/, "<span class=\"aramaic\">$1<\/span>"]
];
const arrayListing = [
	liOpen = [/{-(?!-)/, "<li>"],
	liOpenSubsection = [/{s-/, "<li class=\"subsection\">"],
	liOpenGroup = [/{g-/, "<li class=\"group\">"],
	liClose = [/(?<!-)-}/, "</li>"],
	ulOpen = [/({--)/, "<ul>"],
	ulClose = [/(--})/, "</ul>"],
	newLine = [/(\\n)/, "<br>"],
	tab = [/(\\t)/, "\t"]
];

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

function applyRegexesAdditions(x) {
	let processedText = "";
	for (let i = 0; i < x.length; i++) {
		processedText += "<li>" + x[i].line + "</li>\n";
	}
	let y = processedText;
	for (let i = 0; i < arrayStyling.length; i++) {
		let regexStyling = new RegExp(arrayStyling[i][0], "msg");
		y = y.replace(regexStyling, arrayStyling[i][1]);
	}
	return y;
}


/*
function countReplacements(z) {
	for (let i = 0; i < arrayListing.length; i++) {
	let regexListing = new RegExp(arrayListing[i][0], "msg");
		z = z.replace(regexListing, arrayListing[i][1]);
	}
	return z;
}
*/