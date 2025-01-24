function hideRomaji() {
	document.getElementsByClassName("card-example-romaji")[0].style.display = "none";
	document.getElementsByClassName("card-example-kanji")[0].style.display = "block";
	document.getElementsByClassName("card-example-kanji")[0].addEventListener("mouseenter", showRomaji);
}

function showRomaji() {
	document.getElementsByClassName("card-example-kanji")[0].style.display = "none";
	document.getElementsByClassName("card-example-romaji")[0].style.display = "block";
	document.getElementsByClassName("card-example-romaji")[0].addEventListener("mouseleave", hideRomaji);
}

function showTranslation() {
	if (document.getElementsByClassName("card-reveal")[0].style.display == "block") {
		document.getElementsByClassName("card-reveal")[0].style.display = "none";
		document.getElementsByClassName("card-translation")[0].style.display = "block";


		document.getElementsByClassName("card-translation")[0].addEventListener("click", showTranslation);
	}
	else {

		document.getElementsByClassName("card-translation")[0].style.display = "none";
		document.getElementsByClassName("card-reveal")[0].style.display = "block";

	}
		
		document.getElementsByClassName("card-reveal")[0].addEventListener("click", showTranslation);

}
document.getElementById("generate-card").addEventListener("click", getRandomCard);

function getRandomCard() {

	document.getElementsByClassName("card-reveal")[0].style.display = "block";
	document.getElementsByClassName("card-reveal")[0].addEventListener("click", showTranslation);
	document.getElementsByClassName("card-translation")[0].style.display = "none";

	var url = "./scripts/content.json";

	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			// parse all JSON data into a single object
			var myObj = JSON.parse(this.responseText);
			var cardData = myObj.data;
			
				var randomCard = Math.floor(Math.random() * cardData.length);
				var randomSentence = Math.floor(Math.random() * cardData[randomCard].examples.length);

				var regexes = [

					// regex 1: remove all whitespace
					[/\s/g, ""],

					// regex 2: replace "["
					[/\[/g, "</rb><rt>"],

					// regex 3: replace "]"
					[/\]/g, "</rt></ruby>"],

					// regex 4: add the opening <ruby> tag
					[/([\u{4E00}-\u{9FFF}]*|\u{3005}*)(<\/rb><rt>)/gui, "<ruby><rb>$1$2"]
					
				];
			
				var section =	"Section: " + cardData[randomCard]["book-order"];
				var conjugation = cardData[randomCard].conjugation.kanji;
				var description = cardData[randomCard].description.kanji;
				var sentence = cardData[randomCard].examples[randomSentence].kanji;
				var romaji = cardData[randomCard].examples[randomSentence].romaji;
				var translation = cardData[randomCard].examples[randomSentence].translation;
				var footnotes = cardData[randomCard].examples[randomSentence].footnotes.kanji;
			
				if (sentence == cardData[randomCard].examples[randomSentence].kanji) {
					for (var i = 0; i < regexes.length; i++) {
						sentence = sentence.replace(regexes[i][0], regexes[i][1]);
					}

					for (var j = 1; j < regexes.length; j++) {
						conjugation = conjugation.replace(regexes[j][0], regexes[j][1]);
						description = description.replace(regexes[j][0], regexes[j][1]);
						footnotes = footnotes.replace(regexes[j][0], regexes[j][1]);
					}
				}
				
			document.getElementsByTagName("h1")[0].style.display = "none";
			document.getElementsByClassName("intro")[0].style.display = "none";
			document.getElementsByClassName("card-section-no")[0].innerHTML = section;
			document.getElementsByClassName("card-conjugation")[0].innerHTML = conjugation;
			document.getElementsByClassName("card-description")[0].innerHTML = description;
			document.getElementsByClassName("card-example-kanji")[0].innerHTML = sentence;
			document.getElementsByClassName("card-example-romaji")[0].innerHTML = romaji;
			document.getElementsByClassName("card-translation")[0].innerHTML = translation;
			document.getElementsByClassName("card-footnotes")[0].innerHTML = footnotes;
	document.getElementsByClassName("intro")[0].style.display = "none";
	document.getElementsByClassName("card-description")[0].style.display = "block";	
	document.getElementsByClassName("card-example-kanji")[0].style.display = "block";
	document.getElementsByClassName("card-example-kanji")[0].addEventListener("mouseenter", showRomaji);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}