var url = "./scripts/rtk1_cards.json";


	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

			// parse all JSON data into a single object
			var myObj = JSON.parse(this.responseText);
			var cardData = myObj.data;
			
			var totalKanjiLoaded = 0;
			var addKanji = 100;
			
			
			for (var i = 0; i < 100; i++) {
				document.getElementById("data").innerHTML +=
				"<li class=\"kanji\">" +
					"<ul>" +
						"<li class=\"card-number\">" + cardData[i]["number"] + "</li>" +
						"<li class=\"card-kanji\">" + cardData[i]["kanji"] + "</li>" +
						"<li class=\"card-keyword\">" + cardData[i]["keyword"] + "</li>" +
					"</ul>" +
				"</li>";
			}
			
			document.addEventListener("scroll", detectScroll);
			
			function detectScroll() {
				document.getElementById("stats").innerHTML =
				"Cards loaded: " + document.getElementsByClassName("kanji").length +
				"<br /><br />" +
				"Window height: " + innerHeight +
				"<br />" +
				"Document height: " + document.body.scrollHeight +
				"<br />" +
				"Scrollbar X position: " + scrollX +
				"<br />" +
				"Scrollbar Y position: " + pageYOffset;
				
				if (document.body.scrollHeight - innerHeight == pageYOffset) {
					totalKanjiLoaded += addKanji;
					for (var i = totalKanjiLoaded; i < totalKanjiLoaded + addKanji; i++) {
						document.getElementById("data").innerHTML +=
						"<li class=\"kanji\">" + 
							"<ul>" + 
								"<li class=\"card-number\">" + cardData[i]["number"] + "</li>" +
								"<li class=\"card-kanji\">" + cardData[i]["kanji"] + "</li>" +
								"<li class=\"card-keyword\">" + cardData[i]["keyword"] + "</li>" +
							"</ul>" +
						"</li>";
					}
				}
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();