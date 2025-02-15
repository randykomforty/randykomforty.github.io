import arrayStyling from "../../scripts/dictionary_regexes.js";

const container = document.querySelector("#container");
const menu = document.querySelector("#menu");
const tabMenu = document.querySelector("#menu ul");
const activeTab = document.querySelector("#menu > ul > li:nth-child(1) a");
const inactiveTabs = document.querySelectorAll("#menu ul li ul li a");
const allTabs = document.querySelectorAll("#menu a");
const tabContents = [
	document.querySelector("#preface"),
	document.querySelector("#list_of_abbreviations"),
	document.querySelector("#additions_and_corrections"),
	document.querySelector("#dictionary"),
	document.querySelector("#english_index"),
	document.querySelector("#greek_index"),
	document.querySelector("#arabic_index")
];

const entries = document.querySelectorAll(".entry > ul > li:nth-child(1)");
const entriesExpanded = document.querySelectorAll(".entry > ul > li:nth-child(2)");

checkUrl();

activeTab.addEventListener("click", e => {
	e.preventDefault();
});

inactiveTabs.forEach((x, i) => {
	x.addEventListener("click", e => {
		e.preventDefault();
		window.history.pushState({}, "", x.href);
		checkUrl(e.target);
		container.scrollTo({
			top: 0
		});
	});
});

function checkUrl(linkToSwap) {
	for (let i = 0; i < inactiveTabs.length; i++) {
		inactiveTabs[i].parentElement.classList.remove("hide");
		tabContents[i].classList.remove("show");
	}
	let swap = (linkToSwap || inactiveTabs[0]);
	let abc = {};
	abc.incomingLink = swap.href;
	abc.incomingTitle = swap.innerHTML;
	if (activeTab.href != abc.incomingLink) {
		activeTab.href = abc.incomingLink;
		activeTab.innerHTML = abc.incomingTitle;
		swap.parentElement.classList.add("hide");
	}
	else {
		inactiveTabs[0].parentElement.classList.add("hide");
	}
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const section = urlParams.get("section");
	console.log(section);
	switch (section) {
		case "preface":
			tabContents[0].classList.add("show");
		break;
		case "list_of_abbreviations":
			tabContents[1].classList.add("show");
		break;
		case "additions_and_corrections":
			tabContents[2].classList.add("show");
		break;
		case "dictionary":
			tabContents[3].classList.add("show");
		break;
		case "english_index":
			tabContents[4].classList.add("show");
		break;
		case "greek_index":
			tabContents[5].classList.add("show");
		break;
		case "arabic_index":
			tabContents[6].classList.add("show");
		break;
		default:
			tabContents[0].classList.add("show");
	}
}
/*
let findHeight = "";
let expandedHeight = [];
entries.forEach((x, i) => {
	findHeight = window.getComputedStyle(x.nextElementSibling);
	expandedHeight = findHeight.getPropertyValue("height");
	x.nextElementSibling.style.height = expandedHeight;
	x.classList.toggle("collapse");
});
*/
entries.forEach((x, i) => {
	x.addEventListener("click", function (e) {
		x.classList.toggle("collapse");
	});
});

let addAndCorrectPage = document.querySelectorAll("#additions_and_corrections table tr td.page");
let addAndCorrectNote = document.querySelectorAll("#additions_and_corrections table tr td.note");
addAndCorrectPage.forEach(x => {
	x.innerHTML = applyRegexesAdditions(x);
});
addAndCorrectNote.forEach(x => {
	x.innerHTML = applyRegexesAdditions(x);
});

function applyRegexesAdditions(y) {
	let cellContent = y.innerHTML;
	for (let key in arrayStyling) {
		let regexStyling = new RegExp(arrayStyling[key][0], "msg");
		cellContent = cellContent.replace(regexStyling, arrayStyling[key][1]);
	}
	return cellContent;
}

