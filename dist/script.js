// Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Jolly",
    chips: 121,
    sayHello: function () {
        console.log("Hey!");
    }
}
player.sayHello();
// Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
let firstCard = getRandomCard();
let secondCard = getRandomCard();

// Create a new array - cards- that contains firstCard and sceondCard
let cards = [];

// Create a variable, sum, and set it to the sum of the two cards
let sum = 0;
let hasBlackJack = false;


// 1. Declare a variable called message and assign its value to an empty string
let message = "";

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

// Store the sum paragraph in a variable called sumEl using query method
let sumEl = document.querySelector("#sum-el");

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el");

// Grab ahold of the player-el paragraph and store it in a variable called playerEl
// Render the player's name and chips in playerEl
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


//Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } 
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

//  Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() {
    // Create a variable called isAlive and assign it to true
    isAlive  = true
     // Generate two random numbes
     let firstCard = getRandomCard();
     let secondCard = getRandomCard();
     cards = [firstCard, secondCard];
    // Re-assign the cards and sum variables so that the game can start
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: ";
    // Create a for loop that renders out all the cards instead of just two
    for(i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    // black jack is when the sum is exactly 21
    // if sum is greater then 21 you'll lose your money
    // if i not get 21 thn you might ge as close to 21 but not more than 21

    // Render the sum on the page using this format -> "Sum: 10"
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "It's a Black-Jack";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
    
}

// Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    console.log("Drawing a new card from the deck!");
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    //Push the card to the cards array
    cards.push("card");
        renderGame();
    }
}