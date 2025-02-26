const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Last modified: ${date}`;



const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


const pageVisitCountDisplay = document.getElementById("pageVisitCount");
    let pageVisitCount = localStorage.getItem("pageVisitCount");
    if (pageVisitCount) {  
        pageVisitCount = parseInt(pageVisitCount) + 1;
    } else {  
        pageVisitCount = 1;
    }
    localStorage.setItem("pageVisitCount", pageVisitCount);

    if (pageVisitCountDisplay) {
        pageVisitCountDisplay.textContent = `Page Visit: ${pageVisitCount} time(s).`;
    }

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.my-link');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show'); // Toggle the display class
    hamButton.textContent = navigation.classList.contains('show') ? '' : '☰';
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        header.style.background = "#000";
		header.style.color = "#fff";
        footer.style.background = "#000";
        footer.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        header.style.background = "navy";
		header.style.color = "white";
        footer.style.background = "navy";
        footer.style.color = "white";
		modeButton.textContent = "🕶️";
	}
});

