for (var i = 0; i < document.getElementsByTagName("ruby").length; i++) {
	document.getElementsByTagName("ruby")[i].getElementsByTagName("a")[0].addEventListener("click", function (event) {
		event.preventDefault();
		return false;
	});
}