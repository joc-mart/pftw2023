let rotateBy = 5;

function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke("#32CD32");
    strokeWeight(2);
    triangle(30, 75, 58, 20, 86, 75);

    noFill();
    stroke("#7045FF");
    strokeWeight(2);
    line(30, 20, 100, 175);

    fill("yellow");
    noStroke();
    circle(10, 10, 5);

    fill("yellow");
    noStroke();
    circle(180, 180, 5);

    noFill();
    stroke("#FF45D6");
    quad(138, 131, 186, 120, 169, 163, 130, 176);

    noFill();
    stroke("#32CD32");
    rect(130, 120, 155, 155);

}

function draw() {
    translate(300, 300);
    rotate(rotateBy) // rotates the canvas
    makeArm(rotateBy);
    rotateBy += 11;
}
function mousePressed() {
    noLoop(); // what if I want it to start again?
}