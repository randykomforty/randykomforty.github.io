let editorText = document.querySelector("#editor_text");
let previewRendered = document.querySelector("#rendered_view");

applyRegexes(editorText);
editorText.addEventListener("input", applyRegexes);


editorText.addEventListener("keydown", function(e) {
	
	
	
	if (e.keyCode === 9) { // tab key
        e.preventDefault();  // this will prevent us from tabbing out of the editor

        // now insert four non-breaking spaces for the tab key
        var editor = document.getElementById("editor_text");
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
		//bold = [/\*\[(.*?)\]/, "<b>$1<\/b>"],
		bold = [/\*(.*?)\*/, "<b>$1<\/b>"],
		//italic = [/\_\[(.*?)\]/, "<i>$1<\/i>"],
		italic = [/_(.*?)_/, "<i>$1<\/i>"],
		//qualitative = [/\^\+/, "<sup>†<\/sup>"],
		//dialect = [/\_d\[(\w)\]/, "<i class=\"dialect\">$1<\/i>"],
		dialect = [/\[\[(S|B|A|F|O)\]\]/, "<i class=\"dialect\">$1<\/i>"],
		//subdialect = [/\_d\[(\w)([a-zA-Z])\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
		subdialect = [/\[\[(S|F)\^(a|f|b)\]\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
		//subdialectLyco = [/\_d\[(\w)([0-9])\]/, "<i class=\"dialect lycopolitan\">$1<sup>$2<\/sup><\/i>"],
		subdialectLyco = [/\[\[(A\^2)\]\]/, "<i class=\"dialect lycopolitan\">A<sup>2<\/sup><\/i>"],
		superscript = [/\^(\d+)/, "<sup>$1<\/sup>"],
		//headword = [/\~co1\[(.*?)\]/, "<span class=\"headword coptic\">$1<\/span>"],
		//coptic = [/\~co\[(.*?)\]/, "<span class=\"coptic\">$1<\/span>"],
		coptic = [/\~co\[(.*?)\]/, "<span class=\"coptic\">$1<\/span>"],
		coptic = [/(\#?-?([\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+\(.+?†?\)|[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+(†|-|\.|\?|\.\?)?)(\s(?=-?[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]))?\#?)/, "<span class=\"coptic\">$1<\/span>"],
		qualitative = [/†/, "<sup>†<\/sup>"],
		//greek = [/\~gr\[(.*?)\]/, "<span class=\"greek\">$1<\/span>"],
		greek = [/(-?([\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+\(.+?\)|[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+(-|\.|\?|\.\?)?)(\s(?=-?[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]))?)/, "<span class=\"greek\">$1<\/span>"],
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
		newLine = [/(\\n)/, "<br>"],
		tab = [/(\\t)/, "\t"]
	];
	for (let j = 0; j < arrayListing.length; j++) {
		let regex = new RegExp(arrayListing[j][0], "msg");
		processedText = processedText.replace(regex, arrayListing[j][1]);
	}
	for (let j = 0; j < arrayStyling.length; j++) {
		let regex = new RegExp(arrayStyling[j][0], "msg");
		processedText = processedText.replace(regex, arrayStyling[j][1]);
	}
	
	headword = [/<span class=\"coptic\">\#(.*?)\#<\/span>/, "<span class=\"headword coptic\">$1<\/span>"];
	
	let regex = new RegExp(headword[0], "msg");
	processedText = processedText.replace(regex, headword[1]);
	
	previewRendered.innerHTML = processedText;
}



