let editorText = document.querySelector("#text_goes_here");
let previewRendered = document.querySelector("#rendered_view div");

applyRegexes(editorText);
editorText.addEventListener("input", applyRegexes);

editorText.addEventListener("keydown", function(e) {
	if (e.key == "Tab") {
		e.preventDefault();
		var start = this.selectionStart;
		var end = this.selectionEnd;
		// set textarea value to: text before caret + tab + text after caret
		
		this.innerHTML = this.innerHTML.substring(0, start) + "\t" + this.innerHTML.substring(end);
		
		// put caret at right position again
		
		this.selectionStart = this.selectionEnd = start + 1;
	}
	if (e.key == "Enter") {
		e.preventDefault();
		var start = this.selectionStart;
		var end = this.selectionEnd;

		this.innerHTML = this.innerHTML.substring(0, start) + "\n" + this.innerHTML.substring(end);

		this.selectionStart = this.selectionEnd = start + 1;
	}
});

function applyRegexes(x) {
	
	let processedText = (x.innerHTML||this.innerHTML);
	//const indent = [/\t/, "<span class=\"indent-space\"> </span>"];
	const bold = [/\*\[(.*?)\]/, "<b>$1<\/b>"];
	const italic = [/\_\[(.*?)\]/, "<i>$1<\/i>"];
	const superscript = [/\^(\d+)/, "<sup>$1<\/sup>"];
	const qualitative = [/\^\+/, "<sup>†<\/sup>"];
	const dialect = [/\_d\[(\w)\]/, "<i class=\"dialect\">$1<\/i>"];
	const subdialect = [/\_d\[(\w)([a-zA-Z])\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"];
	const subdialectLyco = [/\_d\[(\w)([0-9])\]/, "<i class=\"dialect lycopolitan\">$1<sup>$2<\/sup><\/i>"];
	const headword = [/\~co1\[(.*?)\]/, "<span class=\"headword coptic\">$1<\/span>"];
	const coptic = [/\~co\[(.*?)\]/, "<span class=\"coptic\">$1<\/span>"];
	const greek = [/\~gr\[(.*?)\]/, "<span class=\"greek\">$1<\/span>"];
	const arabic = [/\~ab\[(.*?)\]/, "<span class=\"arabic\">$1<\/span>"];
	const hebrew = [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"];
	const aramaic = [/\~am\[(.*?)\]/, "<span class=\"aramaic\">$1<\/span>"];
	let arrayStyling = [bold, italic, superscript, qualitative, dialect, subdialect, subdialectLyco, headword, coptic, greek, arabic, hebrew, aramaic];
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
	let moreProcessedText = processedText;
	const boldEdit = [/<b>(.*?)<\/b>/, "<b class=\"discrete\">$1<\/b>"];
	const italicEdit = [/<i>(.*?)<\/>/, "<i class=\"discrete\">$1<\/i>"];
	const superscriptEdit = [/(?<!<i class=\"dialect\">.*?)<sup>(\d+)<\/sup>/, "<sup class=\"discrete\">$1<\/sup>"];
	const qualitativeEdit = [/<sup>†<\/sup>/, "<sup class=\"discrete\">†<\/sup>"];
	const dialectEdit = [/<i class=\"dialect\">(\w)<\/i>/, "<i class=\"dialect discrete\">$1<\/i>"];
	const subdialectEdit = [/<i class=\"dialect\">(\w)<sup>([a-zA-Z])<\/sup><\/i>/, "<i class=\"dialect discrete\">$1<sup>$2<\/sup><\/i>"];
	const subdialectLycoEdit = [/<i class=\"dialect lycopolitan\">(\w)<sup>([0-9])<\/sup><\/i>/, "<i class=\"dialect lycopolitan discrete\">$1<sup>$2<\/sup><\/i>"];
	const headwordEdit = [/<span class=\"headword coptic\">(.*?)<\/span>/, "<span class=\"headword coptic discrete\">$1<\/span>"];
	const copticEdit = [/<span class=\"coptic\">(.*?)<\/span>/, "<span class=\"coptic discrete\">$1<\/span>"];
	const greekEdit = [/<span class=\"greek\">(.*?)<\/span>/, "<span class=\"greek discrete\">$1<\/span>"];
	const arabicEdit = [/<span class=\"arabic\">(.*?)<\/span>/, "<span class=\"arabic discrete\">$1<\/span>"];
	const hebrewEdit = [/<span class=\"hebrew\">(.*?)<\/span>/, "<span class=\"hebrew discrete\">$1<\/span>"];
	const aramaicEdit = [/<span class=\"aramaic\">(.*?)<\/span>/, "<span class=\"aramaic discrete\">$1<\/span>"];
	arrayStyling = [boldEdit, italicEdit, superscriptEdit, qualitativeEdit, subdialectLycoEdit, dialectEdit, subdialectEdit, headwordEdit, copticEdit, greekEdit, arabicEdit, hebrewEdit, aramaicEdit];
	for (let j = 0; j < arrayStyling.length; j++) {
		let regex = new RegExp(arrayStyling[j][0], "msg");
		moreProcessedText = moreProcessedText.replace(regex, arrayStyling[j][1]);
	}
	editorText.innerHTML = moreProcessedText;
	previewRendered.innerHTML = processedText;
}