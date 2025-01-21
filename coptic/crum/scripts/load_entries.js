const xmlhttp = new XMLHttpRequest();
const url = "./scripts/crum_entries.json";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		const myArr = JSON.parse(this.responseText);
		const itemizedEntries = itemizeEntries(myArr);
		const appliedRegexes = applyRegexes(itemizedEntries);
		document.querySelector("#dictionary ul").innerHTML += appliedRegexes;
	}
	const dict_entries = document.querySelectorAll("#dictionary > ul > li.entry > ul > li:first-child");
	dict_entries.forEach(dict_entry => {
		dict_entry.addEventListener("click", function (e) {
			//e.preventDefault();
			//e.stopPropagation();
			console.log(e.target);
			
			dict_entry.classList.toggle("collapse");
			//if (e.target.tagName =="li") {
				//dict_entry.classList.toggle("collapse");
			//}
			//e.preventDefault();
			//e.stopPropagation();
			//window.event.cancelBubble = "true";
			//console.log(e);
		});
			
	});
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function itemizeEntries(arr) {
	let combinedEntriesOutput = "";
	for (let i = 0; i < arr.length; i++) {
		combinedEntriesOutput += '<li class="entry"><ul><li>' + arr[i].headword + '</li><li>' + arr[i].expanded + '</li></ul></li>';
	}
	return combinedEntriesOutput;
}

function applyRegexes(x) {
	let processedText = x;
	const bold = [/\*\[(.*?)\]/, "<b>$1<\/b>"];
	const italic = [/\_\[(.*?)\]/, "<i>$1<\/i>"];
	const dialect = [/\_d\[(.)\]/, "<i class=\"dialect\">$1<\/i>"];
	const subdialect = [/\_d\[(.)([a-zA-Z])\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"];
	const subdialectLyco = [/\_d\[(.)([0-9])\]/, "<i class=\"dialect lycopolitan\">$1<sup>$2<\/sup><\/i>"];
	const headword = [/\~co1\[(.*?)\]/, "<span class=\"headword coptic\">$1<\/span>"];
	const coptic = [/\~co\[(.*?)\]/, "<span class=\"coptic\">$1<\/span>"];
	const greek = [/\~gr\[(.*?)\]/, "<span class=\"greek\">$1<\/span>"];
	const arabic = [/\~ab\[(.*?)\]/, "<span class=\"arabic\">$1<\/span>"];
	const hebrew = [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"];
	const aramaic = [/\~am\[(.*?)\]/, "<span class=\"aramaic\">$1<\/span>"];
	const toBeRegexed = [bold, italic, dialect, subdialect, subdialectLyco, headword, coptic, greek, arabic, hebrew, aramaic];
	const flags = "gi";
	for (let j = 0; j < toBeRegexed.length; j++) {
		let regex = new RegExp(toBeRegexed[j][0], flags);
		processedText = processedText.replace(regex, toBeRegexed[j][1]);
	}
	return processedText;
}