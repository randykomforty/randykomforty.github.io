var elementsH2 = document.querySelectorAll("h2");
var elementsH3 = document.querySelectorAll("h3");
var children = document.querySelectorAll(":has(> :is(h2, h3)) > :not(h2):not(h3)");
var entries = document.querySelectorAll(".entry");

elementsH2.forEach(elementH2 => {
	elementH2.addEventListener("click", function (e) {
		console.log("This is the #" + elementH2.parentElement.id + " element.");
		elementH2.parentNode.classList.toggle("collapse");
	});
});
elementsH3.forEach(elementH3 => {
	elementH3.addEventListener("click", function (e) {
		console.log("This is the #" + elementH3.parentElement.id + " element.");
		elementH3.parentNode.classList.toggle("collapse");
	});
});
entries.forEach(entry => {
	entry.addEventListener("click", function (e) {
		entry.parentNode.classList.toggle("collapse");
	});
});