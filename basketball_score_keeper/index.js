let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

function addScore(whichButton) {
    switch(whichButton){
        case "h1":
            homeScore += 1;
            break;
        case "h2":
            homeScore += 2;
            break;
        case "h3":
            homeScore += 3;
            break;
        case "g1":
            guestScore += 1;
            break;
        case "g2":
            guestScore += 2;
            break;
        case "g3":
            guestScore += 3;
            break;

    }
    updateScores();
}

function updateScores() {
    homeScoreEl.innerText = homeScore;
    guestScoreEl.innerHTML = guestScore;
}