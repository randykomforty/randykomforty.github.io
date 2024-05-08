function myFunction() {
	var count = document.getElementsByClassName("translation").length;
	for (i = 0; i < count; i++) {
		var x = document.getElementsByClassName("translation")[i];
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
}

var morpheme_count = document.getElementsByTagName("a").length;
for (j = 0; j < morpheme_count; j++) {
	var elem = document.getElementsByTagName("a");
	elem[j].addEventListener("mouseenter", posOn, false);
	elem[j].addEventListener("mouseleave", posOff, false);
	elem[j].addEventListener("focusin", posOn, false);
	elem[j].addEventListener("focusout", posOff, false);

	function posOn() {
		document.getElementById("pos_screen").innerHTML = this.innerHTML;
	}

	function posOff() {
		document.getElementById("pos_screen").innerHTML = "";
	}
	
}

