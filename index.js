let player = {
  name: 'LZ',
  chips: 50,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

// TODO: 1. allow user to enter their starting chip
// 2. make chip change as the player win or lose
playerEl.textContent = 'Player ' + player.name + ': $' + player.chips;

// Alternative way to get element from the DOM
// CSS selector: id - #, class - .
// let sumEl = document.querySelector("#sum-el");

// TODO: allow player to choose to use 1 as 1 or 11
// Gets random card for a blackjack
// First, get a randome number between 1 - 13
// Then, do the mapping per blackjack's rule:
// 1 is treated as 11 (for simpicity for now)
// J, Q, K (11, 12, 13) are treated as 10
function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber < 10) {
    return randomNumber;
  } else {
    return 10;
  }
}

function startGame() {
  if (!isAlive) {
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
  }
}

function renderGame() {
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = 'Sum: ' + sum;

  cardsEl.textContent = 'Cards';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ' ' + cards[i];
  }
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
