let editorText = document.querySelector("#editor_text textarea");
const previewRendered = document.querySelector("#rendered_view div");
editorText.value = "~co1[ϩⲟⲩⲏⲧ] _d[S]_d[A2], pl ~co[ϩⲟⲩⲁⲧⲉ] _d[S] & sg as pl, nn, _[passenger] on board ship (?): Ex 27 29 ~co[ⲛⲉϩ.] (_d[B] om) ~gr[ἐπιβάτης] (var ~gr[ναύτης]) _[nauta]; P1312 156 ~co[ⲛⲛⲉⲉϥ…ⲙⲛⲛⲉϩ. ⲉⲧⲧⲁⲗⲏⲩ ⲛⲙⲙⲁⲩ]";
//previewRendered.innerHTML = editorText.value;
//previewRendered.addEventListener("load", applyRegexes);

//applyRegexes(editorText.value);
editorText.addEventListener("focus", applyRegexes);
editorText.addEventListener("input", applyRegexes);

function applyRegexes(x) {
	let processedText = this.value;
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
	console.log(toBeRegexed);
	for (let j = 0; j < toBeRegexed.length; j++) {
		let regex = new RegExp(toBeRegexed[j][0], flags);
		processedText = processedText.replace(regex, toBeRegexed[j][1]);
	}
	previewRendered.innerHTML = processedText;
}





















/*
var editorText = document.querySelector("#editor_text textarea");
*/
//const previewMarkup = document.querySelector("#markup_view code");
/*
const previewRendered = document.querySelector("#rendered_view div");


editorText.addEventListener("input", addTextToPreviews);

function addTextToPreviews() {
	let result = editorText.value.replace(/c\[(.*?)\]/g, `<span class="coptic">$1</span>`);
	result = result.replace(/g\[(.*?)\]/g, `<span class="greek">$1</span>`);
	result = result.replace(/\*\[(.*?)\]/g, `<b>$1</b>`);
	result = result.replace(/\_\[(.*?)\]/g, `<i>$1</i>`);
	result = result.replace(/\_d\[(.?)(\^).)\]/g, `<i class="dialect">$1<sup>$3</sup></i>`);
	result = result.replace(/\^(.)/g, `<sup>$1</sup>`);
	*/
	//previewMarkup.textContent = result;
	/*
	previewRendered.innerHTML = result;
}
*/
/*
editorText.addEventListener("keydown", function(e) {
	if (e.key == "Tab") {
		e.preventDefault();
		var start = this.selectionStart;
		var end = this.selectionEnd;
*/
		// set textarea value to: text before caret + tab + text after caret
		/*
		this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
*/
		// put caret at right position again
		/*
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
*/


/*


const addDialect = document.querySelector("#add_dialect");
const addLanguage = document.querySelector("#add_language");
const addFormatted = document.querySelector("#add_formatted");
const addQualitative = document.querySelector("#add_qualitative");
const previewRendered = document.querySelector("#preview_rendered");
const previewMarkup = document.querySelector("#preview_markup code");

addDialect.addEventListener("click", addDialectToPreview);
addLanguage.addEventListener("click", addLanguageToPreview);
addFormatted.addEventListener("click", addFormattedToPreview);
addQualitative.addEventListener("click", addQualitativeToPreview);
let mostRecentPreviewText = "";

function addDialectToPreview() {
	var dialectOption = document.querySelector('input[name="selected_dialect"]:checked');
	mostRecentPreviewText += `<i class="dialect">${dialectOption.value}</i>`;
	previewRendered.innerHTML = mostRecentPreviewText;
	previewMarkup.textContent = mostRecentPreviewText;
}

function addLanguageToPreview() {
	var languageOption = document.querySelector('input[name="selected_language"]:checked');
	var languageText = document.querySelector('#language_text').value;
	mostRecentPreviewText += `<span class="${languageOption.value}">${languageText}</span>`;
	previewRendered.innerHTML = mostRecentPreviewText;
	previewMarkup.textContent = mostRecentPreviewText;
}

function addFormattedToPreview() {
	var formattedOption = document.querySelector('input[name="selected_formatted"]:checked');
	var formattedText = document.querySelector('#formatted_text').value;
	mostRecentPreviewText += `<${formattedOption.value}>${formattedText}</${formattedOption.value}>`;
	previewRendered.innerHTML = mostRecentPreviewText;
	previewMarkup.textContent = mostRecentPreviewText;
}

function addQualitativeToPreview() {
	mostRecentPreviewText += `<sup>†</sup>`;
	previewRendered.innerHTML = mostRecentPreviewText;
	previewMarkup.textContent = mostRecentPreviewText;
}



*/