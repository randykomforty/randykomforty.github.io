var elementsH2 = document.querySelectorAll("h2");
var elementsH3 = document.querySelectorAll("h3");
var entries = document.getElementsByClassName("entry");

elementsH2.forEach(elementH2 => {
	elementH2.addEventListener("click", function (e) {
		//console.log("This is the #" + elementH2.parentElement.id + " element.");
		elementH2.parentNode.classList.toggle("collapse");
	});
});
elementsH3.forEach(elementH3 => {
	elementH3.addEventListener("click", function (e) {
		//console.log("This is the #" + elementH3.parentElement.id + " element.");
		elementH3.parentNode.classList.toggle("collapse");
	});
});

/*
entries.forEach(addCollapse);

function addCollapse(a, b) {
	console.log(a + " " + b);
	a.addEventListener("click", function (e) {
		this.childNodes.classList.toggle("collapse");
	});
}
*/

for (let i = 0; i < entries.length; i++) {
	//console.log(entries);
	entries[i].addEventListener("click", function (e) {
		entries[i].classList.toggle("collapse");
	});
}
/*
entries.forEach(entry => {
	entry.addEventListener("click", function (e) {
		console.log(entry.children.classList);
		//entry.childNodes.classList.toggle("collapse");
	});
});
*/