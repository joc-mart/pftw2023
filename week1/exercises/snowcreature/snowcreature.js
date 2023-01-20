let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "red");
let stroke2 = prompt("enter another basic color in lowercase", "black");
function setup() {
    createCanvas(1000, 800);
    background("#ADD8E6");
    grid = loadImage("100px_grid.png");
}
function draw() {
    background(grid);
    // snowman legs
    fill("#e6f3f8");
    stroke(stroke1);
    strokeWeight(15);
    
       // bottom
    ellipse(500, 600, 400, 400);
    // body
    ellipse(500, 400, 300, 300);
    // head
    ellipse(500, 200, 200);
    // left leg
    ellipse(400, 750, 100);
    // right leg
    ellipse(600, 750 , 100);
    // hat brim
    stroke(stroke2);
    strokeWeight(20);
    line (400, 120, 600, 120);
    // hat body
    fill(stroke2);
    quad(400, 50, 600, 50, 580, 120, 420, 120);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(450, 200);
    point(550, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 225, 50, 50, 0, PI);
    // eyebrows
    noFill();
    strokeWeight(10);
    line(460, 150, 470, 160);
    line(530, 160, 540, 150);

    // small snowpeople
    stroke(stroke1);
    fill("#e6f3f8");
    // 1st
    ellipse(100, 200, 50);
    ellipse(100, 170, 40);
    ellipse(100, 140, 30);
    // 2nd
    ellipse(200, 300, 50);
    ellipse(200, 270, 40);
    ellipse(200, 240, 30);

}
