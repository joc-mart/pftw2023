const DOWN = "down";
const UP = "up";
let startingX = 300;
let startingY = 200;
let cards = [];
const gameState = {
    totalPairs: 4,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
}
let cardfaceArray = [];
let cardBack;

function preload() {
    cardBack = loadImage("images/cardbackimg.png");
    cardfaceArray = [
        loadImage("images/bluebird.png"),
        loadImage("images/flamingo.png"),
        loadImage("images/kitty.png"),
        loadImage("images/polarbear.png")
    ]
}

function setup () {
    bg = loadImage("images/savannah.jpg");
    createCanvas(1000, 598);
    let selectedFaces = [];
    for (let z = 0; z < 4; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so that it doesnt get randomly selected again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 150;
        }
        startingY += 200;
        startingX = 300;
    }
}

function draw () {
    background(bg);
    if (gameState.numMatched === gameState.totalPairs) {
        fill("#4254F5");
        textSize(64);
        text("you did it!", 500, 100);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) { // ! means not
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill("#4254F5");
    textSize(36);
    textFont("Courier New");
    text("attempts " + gameState.attempts, 50, 75);
    text("matches " + gameState.numMatched, 50, 125);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards lenght, then trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].hit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardfaceImg === gameState.flippedCards[1].cardfaceImg) {
            // if cards match
            // mark cards as flipped so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0; // empty the array
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}


class Card {
    constructor (x, y, cardfaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;
        this.cardfaceImg = cardfaceImg;
        this.face = DOWN;
        this.isMatch = false;
        this.show(); 
    }
    show () {
        if (this.face === UP || this.isMatch) {
            fill("#aaa"); // face up
            rect(this.x, this.y, this.width, this.height);
            image(this.cardfaceImg, this.x, this.y); 
        } else {
            fill("rgb(57.7%, 9.9%, 9.9%)"); // face down
            rect(this.x, this.y, this.width, this.height); 
            image(cardBack, this.x, this.y);
        }
    }
    hit(mouseX, mouseY) {
        if ((mouseX >= this.x && mouseX <= (this.x + this.width)) && (mouseY >= this.y && mouseY <= (this.y + this.height))) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1
        counter--;
        // swap last element
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}