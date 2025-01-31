const elementsH2 = document.querySelectorAll("h2");
const elementsH3 = document.querySelectorAll("h3");

elementsH2.forEach(elementH2 => {
	elementH2.addEventListener("click", function (e) {
		elementH2.parentNode.classList.toggle("collapse");
	});
});

elementsH3.forEach(elementH3 => {
	elementH3.addEventListener("click", function (e) {
		elementH3.parentNode.classList.toggle("collapse");
	});
});