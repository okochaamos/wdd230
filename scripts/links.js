
const baseURL = "https://okochaamos.github.io/wdd230";  
const linksURL = "https://okochaamos.github.io/wdd230/data/links.json";  

async function getLinks() {  
    try {
        const response = await fetch(linksURL);  
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();  
        displayLinks(data.weeks); // Pass only the weeks array
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}  

function displayLinks(weeks) {  
    const activityList = document.querySelector("#activity-links"); // Ensure this element exists in your HTML

    weeks.forEach(week => {  
        let weekSection = document.createElement("section");  
        let weekTitle = document.createElement("h3");  
        weekTitle.textContent = week.week;  
        weekSection.appendChild(weekTitle);

        let linkList = document.createElement("ul");

        week.links.forEach(link => {  
            let listItem = document.createElement("li");  
            let anchor = document.createElement("a");  
            anchor.href = `${baseURL}/${link.url}`;  
            anchor.textContent = link.title;  
            listItem.appendChild(anchor);  
            linkList.appendChild(listItem);
        });  

        weekSection.appendChild(linkList);
        activityList.appendChild(weekSection);
    });  
}  

getLinks();
