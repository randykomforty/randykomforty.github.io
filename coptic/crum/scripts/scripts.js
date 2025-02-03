const tabs = document.querySelectorAll("#menu ul li");
const tabContents = [
	document.querySelector("#preface"),
	document.querySelector("#list_of_abbreviations"),
	document.querySelector("#additions_and_corrections"),
	document.querySelector("#dictionary")
];
tabs.forEach((x, i) => {
	x.addEventListener("click", y => {
		console.log("Element \"" + y.target.id + "\" has been clicked.");
		for (let i = 0; i < tabContents.length; i++) {
			tabContents[i].classList.remove("show");
			tabs[i].classList.remove("active");
		}
		tabContents[i].classList.toggle("show");
		tabs[i].classList.toggle("active");
	});
});

