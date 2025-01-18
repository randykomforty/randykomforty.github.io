var regexBold = new RegExp(/\*\[(.*?)\]/, "gi");
var regexItalic = new RegExp(/\_\[(.*?)\]/, "gi");
var regexDialect = new RegExp(/\_d\[(.)\]/, "gi");
var regexSubdialect = new RegExp(/\_d\[(.)(.)\]/, "gi");
var regexCoptic = new RegExp(/\~co\[(.*?)\]/, "gi");
var regexGreek = new RegExp(/\~gr\[(.*?)\]/, "gi");
var regexArabic = new RegExp(/\~ab\[(.*?)\]/, "gi");
var regexHebrew = new RegExp(/\~he\[(.*?)\]/, "gi");
var regexAramaic = new RegExp(/\~am\[(.*?)\]/, "gi");
var regexArray = [regexBold, regexItalic, regexDialect, regexSubdialect, regexCoptic, regexGreek, regexArabic, regexHebrew, regexAramaic];
var processedBold = "<b>$1<\/b>";
var processedItalic = "<i>$1<\/i>";
var processedDialect = "<i class=\"dialect\">$1<\/i>";
var processedSubdialect = "<i class=\"dialect\">$1<sup>$2<\/sup><\/i>";
var processedCoptic = "<span class=\"coptic\">$1<\/span>";
var processedGreek = "<span class=\"greek\">$1<\/span>";
var processedArabic = "<span class=\"arabic\">$1<\/span>";
var processedHebrew = "<span class=\"hebrew\">$1<\/span>";
var processedAramaic = "<span class=\"aramaic\">$1<\/span>";
var processedArray = [processedBold, processedItalic, processedDialect, processedSubdialect, processedCoptic, processedGreek, processedArabic, processedHebrew, processedAramaic];
var processedText = "";
var sourceTextForRegex = "<ul><li>~co[ⲁϥϣⲱⲡⲉ ϯⲟ ⲛ̄ϩⲗⲗⲟ] _d[B]_d[A]_d[Sf]_d[Bf]_d[A2] ~gr[dikaiosunh], _[sdasdas] *[adasdasd] aasfsafaf ~ab[sadsASD] dfdfsdfsdsdf _d[Sf]_d[Bf] ~co[skdjalksdjk]… asdsadasd.</li><li></li><li></li></ul>";

for (var i = 0; i < regexArray.length; i++) {
	sourceTextForRegex = sourceTextForRegex.replace(regexArray[i], processedArray[i]);
}

document.querySelector("#destination_text_for_regex").innerHTML = sourceTextForRegex;