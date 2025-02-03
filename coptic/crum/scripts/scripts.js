const menu = document.querySelector("#menu");
const tabMenu = document.querySelector("#menu ul");
const tabs = document.querySelectorAll("#menu ul li");
const tabContents = [
	document.querySelector("#preface"),
	document.querySelector("#list_of_abbreviations"),
	document.querySelector("#additions_and_corrections"),
	document.querySelector("#dictionary")
];
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
	});
});
const menuObserver = new ResizeObserver((entries) => {
	const isTall = entries[0].contentRect.height >= 64;
	//let isSecondRow = "";
	//for (let i = 0; i < tabs.length; i++) {
		//isSecondRow = tabs[i].offsetTop = 48;
		//tabs[i].style.height = isSecondRow ? "4em" : "2em";
	//}
	//entries[0].target.style.background = isTall ? "linear-gradient(to top, #232448 50%, transparent 50%)" : "transparent";
});
menuObserver.observe(tabMenu);
