let changeColor = 0;
var r;
var g;
var b;
var a;
let color = ["#b3f72a", "#1eebe7", "#f73636", "#36e7f7"];
frameCount = 3;

function setup() {
    createCanvas(600, 600, WEBGL);
    // color = random(color);
    // sprinkleX = random();
}

function draw() {
    background(179, 188, 255);

    // drawDonut();
    
    drawRing();
    drawEcho();

    // if (mousePressed) {
    //     echoColor = color(random(255), random(255), random(255));
    // }
    
    //donut
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // torus(100, 50);
    // fill(r, g, b, a);
    
    // r = random(255);
    // g = random(100, 200);
    // b = random(200, 255);
    // a = random(200, 255);
    // noStroke();

    // 2nd
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // torus(175, 15);
    // fill(255, 220, 150);


    // 3rd
    // rotateX(frameCount * 0.01);
    // rotateY(frameCount * 0.01);
    // torus(20, 20);
    // fill(255, 220, 150, 20);
    // noStroke();
    
    // sprinkles
    // drawSprinkles()
    // sprinkleY += 5;
    // if(sprinkleY > height) {
    //     sprinkleY = 0;
    // }


    // // point
    // point(300, 300);
    // stroke("#363040");
    
    // second sprinkle

}

function mousePressed() {
    window.location.reload();
}

// function drawSprinkles() {
//     fill(color);
//     ellipse(sprinkleX, sprinkleY, 10, 40);
//     ellipse(sprinkleX, sprinkleY, 10, 40);
// }
function drawDonut() {
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(100, 50);
    fill(r, g, b, a);
    
    r = random(255);
    g = random(100, 200);
    b = random(200, 255);
    a = random(200, 255);
    noStroke();
}
function drawRing() {
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(175, 15);
    // fill(255, 220, 150);
    fill(208, 150, 255);
    noStroke();
}
function drawEcho() {
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(300, 100);
    fill(150, 255, 154, 50);

    noStroke();
}