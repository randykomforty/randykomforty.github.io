var elements = document.querySelectorAll("h2, h3");
elements.forEach(element => {
	element.addEventListener("click", function (e) {
		console.log("This is the #" + element.parentElement.id + " element.");
		element.parentNode.classList.toggle("collapse");
	});
});