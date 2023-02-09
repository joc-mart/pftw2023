let rectX = 0;
let rectWidth = 75;
let rectY = 0;
let rectHeight = 75;

let clickCount = 0

function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(155);
    drawShape();
    rectX ++; // += 2 is x = x + 2
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
// why does it still say 

function drawShape () {
    fill("purple");
    rect(rectX, rectY, rectWidth, rectHeight);

}
