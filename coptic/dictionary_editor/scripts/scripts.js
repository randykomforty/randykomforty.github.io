const addDialect = document.querySelector("#add_dialect");
const addLanguage = document.querySelector("#add_language");
const addFormatted = document.querySelector("#add_formatted");
const addQualitative = document.querySelector("#add_qualitative");
const previewRendered = document.querySelector("#preview_rendered");
const previewMarkup = document.querySelector("#preview_markup");

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