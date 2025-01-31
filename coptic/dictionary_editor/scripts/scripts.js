let editorText = document.querySelector("#text_goes_here");
let previewRendered = document.querySelector("#rendered_view div");

applyRegexes(editorText);
editorText.addEventListener("input", applyRegexes);


editorText.addEventListener("keydown", function(e) {
	
	
	
	if (e.keyCode === 9) { // tab key
        e.preventDefault();  // this will prevent us from tabbing out of the editor

        // now insert four non-breaking spaces for the tab key
        var editor = document.getElementById("text_goes_here");
        var doc = editor.ownerDocument.defaultView;
        var sel = doc.getSelection();
        var range = sel.getRangeAt(0);

        var tabNode = document.createTextNode("	");
        range.insertNode(tabNode);

        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode); 
        sel.removeAllRanges();
        sel.addRange(range);
    }
});

function applyRegexes(x) {
	
	let processedText = (x.innerHTML||this.innerHTML);
	let arrayStyling = [
		bold = [/\*\[(.*?)\]/, "<b>$1<\/b>"],
		italic = [/\_\[(.*?)\]/, "<i>$1<\/i>"],
		superscript = [/\^(\d+)/, "<sup>$1<\/sup>"],
		qualitative = [/\^\+/, "<sup>†<\/sup>"],
		dialect = [/\_d\[(\w)\]/, "<i class=\"dialect\">$1<\/i>"],
		subdialect = [/\_d\[(\w)([a-zA-Z])\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
		subdialectLyco = [/\_d\[(\w)([0-9])\]/, "<i class=\"dialect lycopolitan\">$1<sup>$2<\/sup><\/i>"],
		headword = [/\~co1\[(.*?)\]/, "<span class=\"headword coptic\">$1<\/span>"],
		coptic = [/\~co\[(.*?)\]/, "<span class=\"coptic\">$1<\/span>"],
		greek = [/\~gr\[(.*?)\]/, "<span class=\"greek\">$1<\/span>"],
		arabic = [/\~ab\[(.*?)\]/, "<span class=\"arabic\">$1<\/span>"],
		hebrew = [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"],
		aramaic = [/\~am\[(.*?)\]/, "<span class=\"aramaic\">$1<\/span>"]
	];
	const arrayListing = [
		liOpen = [/{-(?!-)/, "<li>"],
		liOpenSubsection = [/{s-/, "<li class=\"subsection\">"],
		liOpenGroup = [/{g-/, "<li class=\"group\">"],
		liClose = [/(?<!-)-}/, "</li>"],
		ulOpen = [/({--)/, "<ul>"],
		ulClose = [/(--})/, "</ul>"],
		newLine = [/(\\n)/, "\n"],
		tab = [/(\\t)/, "\t"]
	]
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