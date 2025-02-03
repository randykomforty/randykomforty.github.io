const menu = document.querySelector("#menu");
const tabMenu = document.querySelector("#menu ul");
const tabs = document.querySelectorAll("#menu ul li");
const tabContents = [
	document.querySelector("#preface"),
	document.querySelector("#list_of_abbreviations"),
	document.querySelector("#additions_and_corrections"),
	document.querySelector("#dictionary")
];
const entries = document.querySelectorAll(".entry > ul > li:nth-child(1)");
tabs.forEach((x, i) => {
	x.addEventListener("click", y => {
		for (let i = 0; i < tabContents.length; i++) {
			tabContents[i].classList.remove("show");
			tabs[i].classList.remove("active");
		}
		tabContents[i].classList.toggle("show");
		tabs[i].classList.toggle("active");
		menu.scrollTo({
			left: 0,
			behavior: "smooth"
		});
		window.scrollTo({
			top: 0
		});
	});
});
entries.forEach(x => {
	x.addEventListener("click", function (e) {
		//console.log("This is the #" + elementH2.parentElement.id + " element.");
		x.classList.toggle("collapse");
	});
});
