let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
}

function draw() {
    background(0);
    
    bubble1.move();
    bubble1.show();

    bubble2.move();
    bubble2.show();
   
}

class Bubble {
    constructor() {
        this.x = 300;
        this.y = 200;
    }
    move() {
        this.x += random(-3, 3);
        this.y += random(-3, 3);
    }
    
    show() {
        stroke(135, 18, 252);
        strokeWeight(10);
        noFill();
        //ellipse(this.x, this.y, 24, 24);
        rect(this.x, this.y, 40, 40);
    }
}


// "new" creates object instance
// cmd + k + c to comment out multiple lines and cmd + k + u to uncomment
// demo didn't use for loop?