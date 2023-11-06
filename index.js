let hostScore = 0;
let guestScore = 0;
let hostScoreEl = document.getElementById('hostScore');
let guestScoreEl = document.getElementById('guestScore');


function addOneHost() {
    hostScore += 1;
    hostScoreEl.innerText = hostScore;      
}

function addTwoHost() {
    hostScore += 2;
    hostScoreEl.innerText = hostScore;      
}

function addThreeHost() {
    hostScore += 3;
    hostScoreEl.innerText = hostScore;      
}

function addOneGuest() {
    guestScore += 1;
    guestScoreEl.innerText = guestScore;    
}

function addTwoGuest() {
    guestScore += 2;
    guestScoreEl.innerText = guestScore;    
}

function addThreeGuest() {
    guestScore += 3;
    guestScoreEl.innerText = guestScore;    
}





