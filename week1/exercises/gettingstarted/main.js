function setup() {
    createCanvas(500, 500);
}

function draw() {
   if (mouseIsPressed) {
       fill(color(80, 55, 100, 80));
   } else {
       fill(color(155, 0, 55, 100));
   }
   noStroke();
   blendMode(LIGHTEST);
   rect(mouseX, mouseY, 80, 80);

 
}

