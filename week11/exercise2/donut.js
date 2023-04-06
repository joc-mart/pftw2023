let bgColor = 0;
let ellipseColor = 0;
let squareColor = 0;
let triangleColor = 0;
let pause = false;

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
    ellipse(random(600), random(600), random(200, 600));
	
	fill(squareColor);
    noStroke();
	rect(random(500), random(500), random(100), random(100));
    
    noFill();
    stroke(255, 255, 255);
    rect(random(600), random(600), random(600), random(600));

    noStroke();
    fill(triangleColor);
    triangle(random(600), random(600), random(600), random(600), random(600), random(600));
    triangle(random(1000), random(1000), random(1000), random(1000), random(1000), random(1000));

    if (mouseIsPressed) {
        bgColor = color(1, 59, 117);
		ellipseColor = color(random(255), random(255), random(255));
		squareColor = color(random(255), random(100, 255), random(200, 255));
        triangleColor = color(random(255), random(255), random(200, 255), random(30, 90));
  }
}

function keyTyped () {
    if(pause==false){
        noLoop();
        pause=true;
      }else{
        loop();
        pause = false;
      }
}

