
const DOWN = "down";
const UP = "up";
let startingX = 200;
let startingY = 200;
let cards = [];
const gameState = {

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
    createCanvas(1000, 800);
    background(0);
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
        startingX = 200;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if (cards[k].hit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
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
        this.show(); 
    }
    show () {
        if (this.face === DOWN) {
            fill("rgb(57.7%, 9.9%, 9.9%)"); // face down
            rect(this.x, this.y, this.width, this.height, 5); 
            image(cardBack, this.x, this.y);
        } else {
            fill("#aaa"); // face up
            rect(this.x, this.y, this.width, this.height, 5);
            image(this.cardfaceImg, this.x, this.y); 
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