const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Last modified: ${date}`;



const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;