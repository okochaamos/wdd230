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
    hamButton.textContent = navigation.classList.contains('show') ? '❌' : '☰';
});


