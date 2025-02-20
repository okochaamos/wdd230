const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.13919250832533&lon=7.310635404365536&units=imperial&appid=efd3c8f9c561a341c88cb8b5182c6312'; 

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Now correctly calling the function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    // Display temperature
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    // Set the weather icon URL
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // Get weather description
    let desc = data.weather[0].description;

    // Set image attributes
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    // Set weather description text
    captionDesc.textContent = desc;
}
