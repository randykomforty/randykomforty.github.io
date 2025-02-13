var nonLetter = "(\s|\.|,|\?|!|;|:|\\\*|\\\(|\\\)|\\\[|\\\]|·|†|)*";
var testNonLetter = 
	`((\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*
	[language-specific unicode hex ranges go here]+
	(\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*)+`;
const arrayStyling = {
	//ampersand: [/&(?!amp;)/, "&amp;"],
	//asterisk: [/\\\*/, "&ast;"],
	//tab: [/(\n\t)/, "<br>⇥⇥"],
	bold: [/\*(.+?)\*/, "<b>$1<\/b>"],
	italic: [/_(.+?)_/, "<i>$1<\/i>"],
	dialect: [/\[\[(S|B|A|F|O)\]\]/, "<i class=\"dialect\">$1<\/i>"],
	//subdialect: [/\[\[(S|F)\^(a|f|b)\]\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
	//subdialectLyco: [/\[\[(A\^2)\]\]/, "<i class=\"dialect lycopolitan\">A<sup>2<\/sup><\/i>"],
	//superscript: [/\^(\w+)/, "<sup>$1<\/sup>"],
	//coptic: [/(\(?\#?-?([\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+\(.+?†?\)|[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+(†|-|\.|\?|\.\?)?)(\s(?=-?[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]))?\#?\)?)/, "<span class=\"coptic\">$1<\/span>"],
	//headword: [/<span class=\"coptic\">\#(\(?.*?\)?)\#<\/span>/, "<span class=\"headword coptic\">$1<\/span>"],
	//qualitative: [/†/, "<sup>†<\/sup>"],
	//greek: [/(-?([\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+\(.+?\)|[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+(-|\.|\?|\.\?)?)(\s(?=-?[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]))?)/, "<span class=\"greek\">$1<\/span>"],
	//arabic: [/(?:\[)(([\u0600-\u06FF\uFE70-\uFEFF]+\u05f3?\s?)+)(?:\])/, "<span class=\"arabic\">$1<\/span>"],
	//hebrew: [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"],
	//aramaic: [/(?:\[)(([\u0700-\u074F]+\u05f3?\s?)+)(?:\])/, "<span class=\"aramaic\">$1<\/span>"],
	coptic: [/\[((\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+(\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*)+\]/, "<span class=\"coptic\">$1<\/span>"],
	
	greek: [/\[((\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+(\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*)+\]/, "<span class=\"greek\">$1<\/span>"],
	
	arabic: [/\[((\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*[\u05f3\u0600-\u06FF\uFE70-\uFEFF]+(\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*)+\]/, "<span class=\"arabic\">$1<\/span>"],
	
	aramaic: [/\[((\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*[\u05f3\u0700-\u074f]+(\s|\-|\.|,|\?|!|;|:|·|†|\\\*|\\\(|\\\)|\\\[|\\\])*)+\]/, "<span class=\"aramaic\">$1<\/span>"],
	qualitative: [/†/, "<sup>†<\/sup>"]
};
const arrayListing = {
	liOpen: [/{-(?!-)/, "<li>"],
	liOpenSubsection: [/{s-/, "<li class=\"subsection\">"],
	liOpenGroup: [/{g-/, "<li class=\"group\">"],
	liClose: [/(?<!-)-}/, "</li>"],
	ulOpen: [/({--)/, "<ul>"],
	ulClose: [/(--})/, "</ul>"],
	newLine: [/(\\n)/, "<br>"],
	tab: [/(\\t)/, "\t"]
};

export default arrayStyling;