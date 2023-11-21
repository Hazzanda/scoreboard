let counterH = document.getElementById("homeCounter")
let counterG = document.getElementById("guestCounter")


let countH = 0

function onePointHome() {
    countH += 1
    counterH.textContent = countH
}

function twoPointHome() {
    countH += 2
    counterH.innerText = countH
}

function threePointHome() {
    countH += 3
    counterH.innerText = countH
}

let countG = 0

function onePointGuest() {
    countG += 1
    counterG.innerText = countG
}

function twoPointGuest() {
    countG += 2
    counterG.innerText = countG
}

function threePointGuest() {
    countG += 3
    counterG.innerText = countG
}