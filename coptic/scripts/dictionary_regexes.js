const arrayStyling = {
	//ampersand: [/&(?!amp;)/, "&amp;"],
	asterisk: [/\\\*/, "&ast;"],
	tab: [/(\n)/, "</p><p>"],
	bold: [/\*(.+?)\*/, "<b>$1<\/b>"],
	italic: [/_(.+?)_/, "<i>$1<\/i>"],
	dialect: [/\[\[(S|B|A|F|O)\]\]/, "<i class=\"dialect\">$1<\/i>"],
	subdialect: [/\[\[(S|F)\^(a|f|b)\]\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
	subdialectLyco: [/\[\[(A\^2)\]\]/, "<i class=\"dialect lycopolitan\">A<sup>2<\/sup><\/i>"],
	superscript: [/\^(\w+)/, "<sup>$1<\/sup>"],
	headword: [/#\[((\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*([\u2c80-\u2cff\u0304\u0305\u0308\ufe26\u2e17\u03e2-\u03ef\ufe24-\ufe26]+(\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*)+)\]#/, "<span class=\"headword coptic\">$1<\/span>"],
	coptic: [/\[((\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*([\u2c80-\u2cff\u0304\u0305\u0308\ufe26\u2e17\u03e2-\u03ef\ufe24-\ufe26]+(\s|\-|\.|,|\/|\?|!|;|:|'|·|…|†|\.|\\\[|\\\]|\\\(|\\\))*)+)\]/, "<span class=\"coptic\">$1<\/span>"],
	
	greek: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*([\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*)+)\]/, "<span class=\"greek\">$1<\/span>"],
	
	arabic: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*([\u05f3\u0600-\u06ff\ufe70-\ufeff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*)+)\]/, "<span class=\"arabic\">$1<\/span>"],
	
	aramaic: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*([\u05f3\u0700-\u074f]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*)+)\]/, "<span class=\"aramaic\">$1<\/span>"],
	hebrew: [/\[((\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*([\u0590-\u05ff]+(\s|\-|\.|,|\?|!|;|:|'|·|…|†|\.|\\\\\[|\\\\\]|\\\\\(|\\\\\))*)+)\]/, "<span class=\"hebrew\">$1<\/span>"],
	qualitative: [/†/, "<sup>†<\/sup>"]
};
export default arrayStyling;