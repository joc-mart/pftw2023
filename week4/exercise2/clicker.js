let rectX = 0;
let rectWidth = 75;
let rectY;
let rectHeight = 75;

let clickCount = 0
let speed;

function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3); // 1 is min, 3 is max
}

function draw () {
    background(155);
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        text("your score was " + clickCount, 100, 300);
    }
}

function mousePressed () {
    if((mouseX >= 0 && rectX <= (rectX + rectWidth)) && (mouseY >= rectY && mouseY <= (rectY + rectHeight))) {
        clickCount++;
        console.log("hit", clickCount);
    }
    
}
// why does it still say hit when its clicking left or righ of square?

function drawShape () {
    fill("purple");
    rect(rectX, rectY, rectWidth, rectHeight);

}

// random method
