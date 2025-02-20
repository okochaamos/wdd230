document.addEventListener("DOMContentLoaded", function () {
    const membersContainer = document.getElementById("members-container");
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Failed to fetch members data");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching member data:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            // Ensure website has correct format
            let websiteUrl = member.website.startsWith("http") ? member.website : `https://${member.website}`;

            card.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${websiteUrl}" target="_blank">${member.website}</a>
                <p class="membership ${member.membership.toLowerCase()}">${member.membership} Member</p>
            `;

            membersContainer.appendChild(card);
        });
    }

    // View Toggle
    gridViewButton.addEventListener("click", () => {
        membersContainer.classList.add("grid");
        membersContainer.classList.remove("list");
    });

    listViewButton.addEventListener("click", () => {
        membersContainer.classList.add("list");
        membersContainer.classList.remove("grid");
    });

    fetchMembers();
});
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

