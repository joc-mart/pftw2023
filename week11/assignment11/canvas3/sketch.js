let img;
let cnv;


function preload() {
  img = loadImage('../img/pinkflower.JPG');
}

function setup() {
  createCanvas(img.width, img.height);
  for(let col = 0; col< img.width; col+=5) {
    for(let row = 0; row < img.height; row+=3){
      
      let xPos = col;
      let yPos = row;
      
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      
      noFill();
      strokeWeight(random(1));
      stroke(color(c));
      
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(80), random(140), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50);
      pop();
    }
  }
}

