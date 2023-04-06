let bgColor = 0;
let ellipseColor = 0;
let squareColor = 0;
let triangleColor = 0;

function setup() { 
  createCanvas(600, 600);
	bgColor = random(255);
	ellipseColor = random(255);
	squareColor = random(255);
    frameRate(6);

} 

function draw() { 
  background(bgColor);

	noStroke();
	fill(ellipseColor);
	ellipse(random(200), random(200), random(200));
    ellipse(random(600), random(600), random(200));
	
    noStroke();
	fill(squareColor);
	rect(random(500), random(500), random(100), random(100));
    rect(random(600), random(600), random(100), random(100));

    noStroke();
    fill(triangleColor);
    triangle(random(600), random(600), random(600), random(600), random(600), random(600));

  
    if (mouseIsPressed) {
    bgColor = color(random(255), random(100, 255), random(200, 255));
		ellipseColor = color(random(255), random(100, 200), random(200, 255));
		squareColor = color(random(255), random(100, 255), random(200, 255));
        triangleColor = color(random(255), random(100, 200), random(200, 255));
  }
    
}

function keyTyped () {
    noLoop();
}