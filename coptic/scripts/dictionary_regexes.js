let arrayStyling = [
	//ampersand = [/&/, "&amp;"],
	asterisk = [/\\\*/, "&ast;"],
	bold = [/\*(.+?)\*/, "<b>$1<\/b>"],
	italic = [/_(.+?)_/, "<i>$1<\/i>"],
	dialect = [/\[\[(S|B|A|F|O)\]\]/, "<i class=\"dialect\">$1<\/i>"],
	subdialect = [/\[\[(S|F)\^(a|f|b)\]\]/, "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>"],
	subdialectLyco = [/\[\[(A\^2)\]\]/, "<i class=\"dialect lycopolitan\">A<sup>2<\/sup><\/i>"],
	superscript = [/\^(\w+)/, "<sup>$1<\/sup>"],
	coptic = [/(\#?-?([\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+\(.+?†?\)|[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]+(†|-|\.|\?|\.\?)?)(\s(?=-?[\u2c80-\u2cFF\u0305\ufe26\u2e17\u03e2-\u03ef]))?\#?)/, "<span class=\"coptic\">$1<\/span>"],
	qualitative = [/†/, "<sup>†<\/sup>"],
	greek = [/(-?([\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+\(.+?\)|[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]+(-|\.|\?|\.\?)?)(\s(?=-?[\u0323\u0370-\u03e1\u03f0-\u03ff\u1f00-\u1fff]))?)/, "<span class=\"greek\">$1<\/span>"],
	arabic = [/(?:\[)([\u0600-\u06FF\uFE70-\uFEFF]+\u05f3?)(?:\])/, "<span class=\"arabic\">$1<\/span>"],
	hebrew = [/\~he\[(.*?)\]/, "<span class=\"hebrew\">$1<\/span>"],
	aramaic = [/(?:\[)([\u0700-\u074F]+\u05f3?)(?:\])/, "<span class=\"aramaic\">$1<\/span>"]
];