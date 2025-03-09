const arrayStyling = {
	//ampersand: [/&(?!amp;)/, "&amp;"],
	verbose: [/@(.+?)@/, "<span class=\"verbose\">$1<\/span>"],
	asterisk: [/\\\*/, "&ast;"],
	tab: [/(\n)/, "</p><p>"],
	bold: [/\*(.+?)\*/, "<b>$1<\/b>"],
	italic: [/_(.+?)_/, "<i>$1<\/i>"],
	dialect: [/\[(S|B|A|F|O)\]/, "<i class=\"dialect\">$1<\/i>"],
	subdialect: [/\[(S|F)\^(a|f|b)\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
	subdialectLyco: [/\[(A\^2)\]/, "<i class=\"dialect lycopolitan\">A<sup>2<\/sup><\/i>"],
	superscript: [/\^(\w+)/, "<sup>$1<\/sup>"],
	headword: [/#\[((\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u2c80-\u2cff\u0304\u0305\u0308\ufe26\u2e17\u03e2-\u03ef\ufe24-\ufe26]+(\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]#/, "<span class=\"headword coptic\">$1<\/span>"],
	coptic: [/\[((\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u2c80-\u2cff\u0304\u0305\u0308\ufe26\u2e17\u03e2-\u03ef\ufe24-\ufe26]+(\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"coptic\">$1<\/span>"],
	greek: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u0323\u0370-\u03ff\u1f00-\u1fff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"greek\">$1<\/span>"],
	arabic: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u05f3\u0600-\u06ff\ufe70-\ufeff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"arabic\">$1<\/span>"],
	aramaic: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u05f3\u0700-\u074f]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"aramaic\">$1<\/span>"],
	hebrew: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u0590-\u05ff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"hebrew\">$1<\/span>"],
	amharic: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u1200-\u137f\u1380-\u139f\u2d80-\u2ddf\uab00-\uab2f\u1e7e0-\u1e7ff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"amharic\">$1<\/span>"],
	//copticSlashes: [/(\\)/,""],
	qualitative: [/†/, "<sup>†<\/sup>"],
	lineBreaks: [/\\n/, "</p><p>"]
};
export default arrayStyling;