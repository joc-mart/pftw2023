let rectX = 0;
let rectWidth = 75;
let rectY;
let rectHeight = 75;

let clickCount = 0
let speed;
let color = ["#CBC5EA", "#B79DD6", "#8A627C", "#628A6A"];

function setup () {
    createCanvas(500, 500); 
    rectY = random(height - rectHeight);
    speed = random(1, 3); // 1 is min, 3 is max
    color = random(color);
    textFont("Georgia");
    textSize(32);
}

function draw () {
    background("#313D5A");
    drawShape();
    rectX += speed;
    if(rectX > width) {
        noLoop();
        text("your score was " + clickCount, 125, 250);
    
    }
}

function mousePressed () {
    if((mouseX >= 0 && rectX <= (rectX + rectWidth)) && (mouseY >= rectY && mouseY <= (rectY + rectHeight))) {
        clickCount++;
        console.log("hit", clickCount);
    }
    
}
// why does it still say hit when its clicking left or right of square?

function drawShape () {
    fill(color);
    rect(rectX, rectY, rectWidth, rectHeight);

}
