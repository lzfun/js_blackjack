let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

// Alternative way to get element from the DOM
// CSS selector: id - #, class - .
// let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el");

// Handles the button onClick event
function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards " + firstCard + " " + secondCard;
}