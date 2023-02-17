// let startX = 200;
// let startY = 200;
// let cards = [];
// let startingId = 0;

// function setup () {
//     createCanvas(1000, 800);
//     background(0);
//     for (let k = 0; k < 2; k++) {
//         for (let i = 0; i < 4; i++) {
//             rect(startX, startY, 100, 150);

            
//             cards.push({ x: startX, y: startY, id: startingId });
//             startX += 150;
//             startingId++;
//         }
//         startY += 200;
//         startX = 200;
//     }
//     console.log(cards);
// }

let myCard;
const DOWN = "down";
const UP = "up";

function setup () {
    createCanvas(1000, 800);
    background(0);
    myCard = new Card();

}

function mousePressed() {
    console.log(myCard.hit(mouseX, mouseY));
}


class Card {
    constructor () {
        this.x = 200;
        this.y = 200;
        this.width = 100;
        this.height = 150;

        this.face = DOWN;
        this.show(); 
    }
    show () {
        if (this.face === DOWN) {
            fill("rgb(57.7%, 9.9%, 9.9%)");
            rect(this.x, this.y, this.width, this.height, 5); 
        } else {
            fill("#aaa");
            rect(this.x, this.y, this.width, this.height, 5); 
        }
    }
    hit(mouseX, mouseY) {
        if ((mouseX >= this.x && mouseX <= (this.x + this.width)) && (mouseY >= this.y && mouseY <= (this.y + this.height))) {
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