var currentText = document.querySelector("textarea");
var preview = document.querySelector("#preview_area");
var schematic = document.querySelector("#schematic_area");
var buttons = document.querySelectorAll("button");

function showPreview() {
	var previewText = currentText.value;
	const glyphsForSchematic = {
		"︀": "",
		"︁": "",
		"︂": "",
		"︃": "",
		"︆": "",
		
		":": "",
		"*": "",
		"+1": "",
		"+2": "",
		"+3": "",
		"+4": "",
		"+5": "",
		"+6": "",
		"+7": "",
		"+8": "",
		"(": "",
		")": "",
		"[": "",
		"]": "",
		"{": "",
		"}": "",
		"<>": "",
		"_": "",
		"-": "",
		"?1": "",
		"?2": "",
		"?3": "",
		"?4": "",
		"!1": "",
		"!2": "",
		"!3": "",
		"!4": "",
		"!5": "",
		"!6": "",
		"!7": "",
		"!8": "",
		"!9": "",
		"!a": "",
		"!b": "",
		"!c": "",
		"!d": "",
		"!e": "",
		"!f": "",
		
		"~1": "",
		"~2": "",
		"~3": "",
		"~4": "",
		"~7": ""
	};
	const glyphsForSimple = {
		"𓐰": ":",
		"𓐱": "*",
		"𓐶": "+1",
		"𓐹": "+2",
		"𓐺": "+3",
		"𓐻": "+4",
		"𓐲": "+5",
		"𓐳": "+6",
		"𓐴": "+7",
		"𓐵": "+8",
		"𓐷": "(",
		"𓐸": ")",
		"𓐼": "[",
		"𓐽": "]",
		"𓐾": "{",
		"𓐿": "}",
		"𓑀": "<>",
		"𓑁": "_",
		"𓑂": "-",
		"𓑃": "?1",
		"𓑄": "?2",
		"𓑅": "?3",
		"𓑆": "?4",
		"𓑕": "!1",
		"𓑉": "!2",
		"𓑒": "!3",
		"𓑋": "!4",
		"𓑐": "!5",
		"𓑇": "!6",
		"𓑈": "!7",
		"𓑊": "!8",
		"𓑎": "!9",
		"𓑔": "!a",
		"𓑓": "!b",
		"𓑑": "!c",
		"𓑍": "!d",
		"𓑏": "!e",
		"𓑌": "!f",
		"︀": "~1",
		"︁": "~2",
		"︂": "~3",
		"︃": "~4",
		"︆": "~7"
	}
	const glyphsForPreview = {
		":": "𓐰",
		"*": "𓐱",
		"+1": "𓐶",
		"+2": "𓐹",
		"+3": "𓐺",
		"+4": "𓐻",
		"+5": "𓐲",
		"+6": "𓐳",
		"+7": "𓐴",
		"+8": "𓐵",
		"(": "𓐷",
		")": "𓐸",
		"[": "𓐼",
		"]": "𓐽",
		"{": "𓐾",
		"}": "𓐿",
		"<>": "𓑀",
		"_": "𓑁",
		"-": "𓑂",
		"?1": "𓑃",
		"?2": "𓑄",
		"?3": "𓑅",
		"?4": "𓑆",
		"!1": "𓑕",
		"!2": "𓑉",
		"!3": "𓑒",
		"!4": "𓑋",
		"!5": "𓑐",
		"!6": "𓑇",
		"!7": "𓑈",
		"!8": "𓑊",
		"!9": "𓑎",
		"!a": "𓑔",
		"!b": "𓑓",
		"!c": "𓑑",
		"!d": "𓑍",
		"!e": "𓑏",
		"!f": "𓑌",
		
		"~1": "︀",
		"~2": "︁",
		"~3": "︂",
		"~4": "︃",
		"~7": "︆"
	}
	let s = currentText.value;
	let controlCharsToSimple = s.replace(/(𓐰|𓐱|𓐶|𓐹|𓐺|𓐻|𓐲|𓐳|𓐴|𓐵|𓐷|𓐸|𓐼|𓐽|𓐾|𓐿|𓑀|𓑁|𓑂|𓑃|𓑄|𓑅|𓑆|𓑕|𓑉|𓑒|𓑋|𓑐|𓑇|𓑈|𓑊|𓑎|𓑔|𓑓|𓑑|𓑍|𓑏|𓑌|︀|︁|︂|︃|︆)/g, m => glyphsForSimple[m]);
	currentText.value = controlCharsToSimple;
	let simplifiedChars = controlCharsToSimple;

	let textToSchematic = simplifiedChars.replace(/(\:|\*|\+1|\+2|\+3|\+4|\+5|\+6|\+7|\+8|\(|\)|\[|\]|\{|\}|\<\>|\_|\-|\?1|\?2|\?3|\?4|\!1|\!2|\!3|\!4|\!5|\!6|\!7|\!8|\!9|\!a|\!b|\!c|\!d|\!e|\!f|\~1|\~2|\~3|\~4|\~7)/g, m => glyphsForSchematic[m]);
	schematic.textContent = textToSchematic;

	let textToPreview = simplifiedChars.replace(/(\:|\*|\+1|\+2|\+3|\+4|\+5|\+6|\+7|\+8|\(|\)|\[|\]|\{|\}|\<\>|\_|\-|\?1|\?2|\?3|\?4|\!1|\!2|\!3|\!4|\!5|\!6|\!7|\!8|\!9|\!a|\!b|\!c|\!d|\!e|\!f|\~1|\~2|\~3|\~4|\~7)/g, m => glyphsForPreview[m]);
	preview.textContent = textToPreview;

	preview.style.color = "#ffb600ff";
	schematic.style.color = "#ffb600ff";
}

currentText.addEventListener("input", showPreview);

buttons.forEach(button => {
	button.addEventListener("click", function (e) {
		const decToHex = (dec) => dec.toString(16);
		console.log("Unicode glyph U+" + decToHex(button.value.codePointAt(0)) + " (" + button.value + ") has been copied to clipboard.");
		navigator.clipboard.writeText(button.value);
	});
});