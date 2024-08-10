let player = {
    name: "Player",
    chips: 200
}

let cardImages = [
    "images/cards/1.png",
    "images/cards/2.png",
    "images/cards/3.png",
    "images/cards/4.png",
    "images/cards/5.png",
    "images/cards/6.png",
    "images/cards/7.png",
    "images/cards/8.png",
    "images/cards/9.png",
    "images/cards/10.png",
    "images/cards/11.png",
    "images/cards/12.png",
    "images/cards/13.png"
]

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerHTML += `<img src="images/cards/${cards[i]}.png"></img>`
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 10;
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 10;
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
