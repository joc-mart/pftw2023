let myCard;
const DOWN = "down";
const UP = "up";
let startingX = 200;
let startingY = 200;
let cards = [];
const gameState = {

}

function setup () {
    createCanvas(1000, 800);
    background(0);
    for (let j = 0; j < 2; j++) {
        for (let i = 0; 1 < 5; i++) {
        cards.push(new Card(startingX, startingY));
        startingX += 200;
        console.log(startingX);
    }
        startingY += 200;
        startingX = 200;
    }
    

}

function mousePressed() {
    console.log(myCard.hit(mouseX, mouseY));
}


class Card {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 150;

        this.face = DOWN;
        this.show(); 
    }
    show () {
        if (this.face === DOWN) {
            fill("rgb(57.7%, 9.9%, 9.9%)"); // face down
            rect(this.x, this.y, this.width, this.height, 5); 
        } else {
            fill("#aaa"); // face up
            rect(this.x, this.y, this.width, this.height, 5); 
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