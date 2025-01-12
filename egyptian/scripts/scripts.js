var currentText = document.querySelector("textarea");
var preview = document.querySelector("#preview_area");
var buttons = document.querySelectorAll("button");

function showPreview() {
	var text = currentText.value;
	preview.textContent = text;
	var lastLetter = text.charAt(text.length - 1);
	console.log("Last letter typed: " + lastLetter);
	preview.style.color = "#ffb600ff";
}

currentText.addEventListener("keyup", showPreview);

buttons.forEach(button => {
	button.addEventListener("click", function (e) {
		const decToHex = (dec) => dec.toString(16);
		console.log("Unicode glyph U+" + decToHex(button.value.codePointAt(0)) + " (" + button.value + ") has been copied to clipboard.");
		navigator.clipboard.writeText(button.value);
	});
});

/*
function variantSelector() {
	navigator.clipboard.writeText("︀")
}
function verticalJoiner() {
	navigator.clipboard.writeText("𓐰")
}
function horizontalJoiner() {
	navigator.clipboard.writeText("𓐱")
}
function insertAtTopStart() {
	navigator.clipboard.writeText("𓐲")
}
function insertAtBottomStart() {
	navigator.clipboard.writeText("𓐳")
}
function insertAtTopEnd() {
	navigator.clipboard.writeText("𓐴")
}
function insertAtBottomEnd() {
	navigator.clipboard.writeText("𓐵")
}
function overlayMiddle() {
	navigator.clipboard.writeText("𓐶")
}
function beginSegment() {
	navigator.clipboard.writeText("𓐷")
}
function endSegment() {
	navigator.clipboard.writeText("𓐸")
}
function insertAtMiddle() {
	navigator.clipboard.writeText("𓐹")
}
function insertAtTop() {
	navigator.clipboard.writeText("𓐺")
}
function insertAtBottom() {
	navigator.clipboard.writeText("𓐻")
}
function beginEnclosure() {
	navigator.clipboard.writeText("𓐼")
}
function endEnclosure() {
	navigator.clipboard.writeText("𓐽")
}
function beginWalledEnclosure() {
	navigator.clipboard.writeText("𓐾")
}
function endWalledEnclosure() {
	navigator.clipboard.writeText("𓐿")
}
function mirrorHorizontally() {
	navigator.clipboard.writeText("𓑀")
}
function fullBlank() {
	navigator.clipboard.writeText("𓑁")
}
function halfBlank() {
	navigator.clipboard.writeText("𓑂")
}
function lostSign() {
	navigator.clipboard.writeText("𓑃")
}
function halfLostSign() {
	navigator.clipboard.writeText("𓑄")
}
function tallLostSign() {
	navigator.clipboard.writeText("𓑅")
}
function wideLostSign() {
	navigator.clipboard.writeText("𓑆")
}
function modifierDamagedAtTopStart() {
	navigator.clipboard.writeText("𓑇")
}
function modifierDamagedAtBottomStart() {
	navigator.clipboard.writeText("𓑈")
}
function modifierDamagedAtStart() {
	navigator.clipboard.writeText("𓑉")
}
function modifierDamagedAtTopEnd() {
	navigator.clipboard.writeText("𓑊")
}
function modifierDamagedAtTop() {
	navigator.clipboard.writeText("𓑋")
}
function modifierDamagedAtBottomStartAndTopEnd() {
	navigator.clipboard.writeText("𓑌")
}
function modifierDamagedAtStartAndTop() {
	navigator.clipboard.writeText("𓑍")
}
function modifierDamagedAtBottomEnd() {
	navigator.clipboard.writeText("𓑎")
}
function modifierDamagedAtTopStartAndBottomEnd() {
	navigator.clipboard.writeText("𓑏")
}
function modifierDamagedAtBottom() {
	navigator.clipboard.writeText("𓑐")
}
function modifierDamagedAtStartAndBottom() {
	navigator.clipboard.writeText("𓑑")
}
function modifierDamagedAtEnd() {
	navigator.clipboard.writeText("𓑒")
}
function modifierDamagedAtTopAndEnd() {
	navigator.clipboard.writeText("𓑓")
}
function modifierDamagedAtBottomAndEnd() {
	navigator.clipboard.writeText("𓑔")
}
function modifierDamaged() {
	navigator.clipboard.writeText("𓑕")
}
*/