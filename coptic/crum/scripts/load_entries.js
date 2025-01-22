const xmlhttp = new XMLHttpRequest();
const url = "./scripts/crum_entries.json";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const myArr = JSON.parse(this.responseText);
		const createdEntries = createEntries(myArr);
		const appliedRegexes = applyRegexes(createdEntries);
		/* */
		
		document.querySelector("#dictionary ul").innerHTML += appliedRegexes;
	}
	const dict_entries = document.querySelectorAll("#dictionary > ul > li.entry > ul > li:first-child");
	dict_entries.forEach(dict_entry => {
		dict_entry.addEventListener("click", function (e) {
			dict_entry.classList.toggle("collapse");
		});
	});
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function createEntries(arr) {
	let combinedEntriesOutput = "";
	for (let i = 0; i < arr.length; i++) {
		combinedEntriesOutput += '<li class="entry">\n\t<ul>\n\t\t<li>' + arr[i].headword + '</li>\n\t\t<li><ul>' + arr[i].expanded + '</ul></li></ul></li>';
	}
	return combinedEntriesOutput;
}

function applyRegexes(x) {
	let processedText = x;
	//const indent = [/\t/, "<span class=\"indent-space\"> </span>"];
	/*
	const ulOpen = [/{--/, "<ul>"];
	const ulClose = [/--}/, "</ul>"];
	*/
	const liOpen = [/(?=({-))(?!{--)/, "<li>"];
	const liOpenSubsection = [/{s-/, "<li class=\"subsection\">"];
	const liOpenGroup = [/{g-/, "<li class=\"group\">\n<ul>"];
	const liClose = [/(?=(-})+)/, "</li>"];
	const bold = [/\*\[(.*?)\]/, "<b>$1<\/b>"];
	const italic = [/\_\[(.*?)\]/, "<i>$1<\/i>"];
	const superscript = [/\^(\d)/, "<sup>$1<\/sup>"];
	const qualitative = [/\^\+/, "<sup>†<\/sup>"];
	const dialect = [/\_d\[(.)\]/, "<i class=\"dialect\">$1<\/i>"];
	const subdialect = [/\_d\[(.)([a-zA-Z])\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"];
	const subdialectLyco = [/\_d\[(.)([0-9])\]/, "<i class=\"dialect lycopolitan\">$1<sup>$2<\/sup><\/i>"];
	const headword = [/\~co1\[(.*?)\]/, "<span class=\"headword coptic\">$1<\/span>"];
	const coptic = [/\~co\[(.*?)\]/, "<span class=\"coptic\">$1<\/span>"];
	const greek = [/\~gr\[(.*?)\]/, "<span class=\"greek\">$1<\/span>"];
	const arabic = [/\~ab\[(.*?)\]/, "<span class=\"arabic\">$1<\/span>"];
	const hebrew = [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"];
	const aramaic = [/\~am\[(.*?)\]/, "<span class=\"aramaic\">$1<\/span>"];
	const toBeRegexed = [indent, bold, italic, superscript, qualitative, dialect, subdialect, subdialectLyco, headword, coptic, greek, arabic, hebrew, aramaic, liOpen, liClose];
	const flags = "gi";
	for (let j = 0; j < toBeRegexed.length; j++) {
		let regex = new RegExp(toBeRegexed[j][0], flags);
		processedText = processedText.replace(regex, toBeRegexed[j][1]);
	}
	console.log(processedText);
	return countReplacements(processedText);
	//return processedText;
}

function countReplacements(x) {
	let regex = new RegExp(/({--)/, "gi");
	const match = x.match(regex);
	const count = match ? match.length : 0;
	let result = "";
	let newlyRegex = "";
	let betterRegex = "";
	let betterSub = "";
	let tabAccumulate = "";
	let tabs = "\n\t<ul>\n\t\t";
	for (i = 1; i <= count; i++) {
		betterRegex += "(.*){--";
		betterSub += `$${i}${tabs}`;
		tabAccumulate += "\t";
		tabs = "\n\t" + tabAccumulate + tabAccumulate + "<ul>\n\t\t" + tabAccumulate + tabAccumulate;
		//console.log(tabs);
	}
	newlyRegex = new RegExp(betterRegex, "gi");
	result = x.replace(newlyRegex, betterSub);
	//console.log(betterRegex);
	//console.log(betterSub);
	//console.log(tabs);
	return result;
}