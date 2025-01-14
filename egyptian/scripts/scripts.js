var currentText = document.querySelector("textarea");
var preview = document.querySelector("#preview_area");
var schematic = document.querySelector("#schematic_area");
var buttons = document.querySelectorAll("button");

function showPreview() {
	var previewText = currentText.value;
	const glyphSubstitutes = {
		"𓐰": "",
		"𓐱": "",
		"𓐲": "",
		"𓐳": "",
		"𓐴": "",
		"𓐵": "",
		"𓐶": "",
		"𓐷": "",
		"𓐸": "",
		"𓐹": "",
		"𓐺": "",
		"𓐻": "",
		"𓐼": "",
		"𓐽": "",
		"𓐾": "",
		"𓐿": "",
		"𓑀": "",
		"𓑁": "",
		"𓑂": "",
		"𓑃": "",
		"𓑄": "",
		"𓑅": "",
		
		"𓑆": "",
		"𓑇": "",
		"𓑈": "",
		"𓑉": "",
		"𓑊": "",
		"𓑋": "",
		"𓑌": "",
		"𓑍": "",
		"𓑎": "",
		"𓑏": "",
		"𓑐": "",
		"𓑑": "",
		"𓑒": "",
		"𓑓": "",
		"𓑔": "",
		"𓑕": "",
		
		
		"︀": "",
		"︁": "",
		"︂": "",
		"︃": "",
		"︆": ""
	};
	let s = currentText.value;
	let schematicText = s.replace(/(𓐰|𓐱|𓐲|𓐳|𓐴|𓐵|𓐶|𓐷|𓐸|𓐹|𓐺|𓐻|𓐼|𓐽|𓐾|𓐿|𓑀|𓑁|𓑂|𓑃|𓑄|𓑅|𓑆|𓑇|𓑈|𓑉|𓑊|𓑋|𓑍|𓑌|𓑎|𓑏|𓑐|𓑑|𓑒|𓑓|𓑔|𓑕|︀|︁|︂|︃|︆)/g, m => glyphSubstitutes[m]);
	preview.textContent = previewText;
	schematic.textContent = schematicText;
	//var lastLetterPreview = previewText.charAt(previewText.length - 1);
	//var lastLetterSchematic = schematicText.charAt(schematicText.length - 1);
	//console.log("Last letter typed: " + lastLetterPreview);
	//console.log("Last letter typed: " + lastLetterSchematic);
	preview.style.color = "#ffb600ff";
	schematic.style.color = "#ffb600ff";
}

currentText.addEventListener("keyup", showPreview);

buttons.forEach(button => {
	button.addEventListener("click", function (e) {
		const decToHex = (dec) => dec.toString(16);
		console.log("Unicode glyph U+" + decToHex(button.value.codePointAt(0)) + " (" + button.value + ") has been copied to clipboard.");
		navigator.clipboard.writeText(button.value);
	});
});
