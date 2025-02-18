const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.prophets); // Check if the data is fetched correctly
        displayProphets(data.prophets); // Now properly calling the function
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // Corrected element type
        let portrait = document.createElement('img');

        // Fill content
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Set image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.firstName} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append card to the container
        cards.appendChild(card);
    });
};
