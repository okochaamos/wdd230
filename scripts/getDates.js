const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Last modified: ${date}`;

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


