




let homeScore = 0
let guestScore = 0
homeScore = document.getElementById("home-score-board")
guestScore = document.getElementById("guest-score-board")
let homeCount = 0
let guestCount = 0


function homeIncrease(u) {
    homeCount += u
    homeScore.textContent = homeCount
}

function guestIncrease(u) {
    guestCount += u
    guestScore.textContent = guestCount
}

