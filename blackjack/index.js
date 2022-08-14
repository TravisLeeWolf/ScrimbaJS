let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

let playerEl = document.getElementById("player-el");
let player = {
    name: "Player",
    score: 200,
};

function getRandomCard() {
    let card = Math.ceil(Math.random() * 13);
    switch(card) {
        case 1:
            return 11;
        case 11:
        case 12:
        case 13:
            return 10;
    }
    return card;
}

function startGame() {
    cards.length = 0;
    sum = 0;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    hasBlackJack = false;
    isAlive = true;
    playerEl.textContent = player.name + ": " + player.score;
    renderGame();
}

function renderGame() {
    calculateSum();
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        addPoints();
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        removePoints();
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function drawCard() {
    if (isAlive && !hasBlackJack) {
        cards.push(getRandomCard());
        renderGame();
    }
}

function calculateSum() {
    sum = 0;
    for (const card of cards) {
        sum += card;
    }
}

function addPoints() {
    player.score += 50;
}

function removePoints() {
    player.score -= 25;
}