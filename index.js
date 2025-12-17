let homescore = 0;
let guestscore= 0;

function increment(team, points) {
    if (team === 'home') {
        homescore += points
        document.getElementById("homescore").textContent = homescore;
       
    } else if (team === 'guest') {
        guestscore += points
        document.getElementById("guestscore").textContent = guestscore;
    }
    highlightLeader();    
}

function resetScores() {
    homescore = 0;
    guestscore = 0;
    document.getElementById("homescore").textContent = homescore;
    document.getElementById("guestscore").textContent = guestscore;
    highlightLeader();}

function highlightLeader() {
    const homeEl = document.getElementById("homescore");
    const guestEl = document.getElementById("guestscore");

    if (homescore > guestscore) {
        homeEl.style.color = "red";
        guestEl.style.color = "green";
    } else if (guestscore > homescore) {
        guestEl.style.color = "red";
        homeEl.style.color = "green";
    } else {
        // Tie
        homeEl.style.color = "green";
        guestEl.style.color = "green";
    }
}
