let editorText = document.querySelector("#editor_text textarea");
let previewRendered = document.querySelector("#rendered_view div");

editorText.addEventListener("input", applyRegexes);

editorText.addEventListener("keydown", function(e) {
	if (e.key == "Tab") {
		e.preventDefault();
		var start = this.selectionStart;
		var end = this.selectionEnd;
		// set textarea value to: text before caret + tab + text after caret
		
		this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
		
		// put caret at right position again
		
		this.selectionStart = this.selectionEnd = start + 1;
	}
	if (e.key == "Enter") {
		e.preventDefault();
		var start = this.selectionStart;
		var end = this.selectionEnd;

		this.value = this.value.substring(0, start) + "\n" + this.value.substring(end);

		this.selectionStart = this.selectionEnd = start + 1;
	}
});

function applyRegexes(x) {
	let processedText = x.target.value;
	//const indent = [/\t/, "<span class=\"indent-space\"> </span>"];
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
	const arrayStyling = [bold, italic, superscript, qualitative, dialect, subdialect, subdialectLyco, headword, coptic, greek, arabic, hebrew, aramaic];
	const liOpen = [/{-(?!-)/, "<li>"];
	const liOpenSubsection = [/{s-/, "<li class=\"subsection\">"];
	const liOpenGroup = [/{g-/, "<li class=\"group\">"];
	const liClose = [/(?<!-)-}/, "</li>"];
	const ulOpen = [/({--)/, "<ul>"];
	const ulClose = [/(--})/, "</ul>"];
	const newLine = [/(\\n)/, "\n"];
	const tab = [/(\\t)/, "\t"];
	const arrayListing = [liOpen, liOpenSubsection, liOpenGroup, liClose, ulOpen, ulClose, newLine, tab];
	for (let j = 0; j < arrayListing.length; j++) {
		let regex = new RegExp(arrayListing[j][0], "msg");
		processedText = processedText.replace(regex, arrayListing[j][1]);
	}
	for (let j = 0; j < arrayStyling.length; j++) {
		let regex = new RegExp(arrayStyling[j][0], "msg");
		processedText = processedText.replace(regex, arrayStyling[j][1]);
	}
	previewRendered.innerHTML = processedText;
}