let img;
let cnv;


function preload() {
  img = loadImage('../img/llama2.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  for(let col = 0; col< img.width; col+=2) {
    for(let row = 0; row < img.height; row+=2){
      
      let xPos = col;
      let yPos = row;
      
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
     
      noFill();
      strokeWeight(random(5));
      stroke(color(c));
      
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(40), random(10), random(80), cos(yPos) * sin(yPos) * random(140), cos(xPos) * sin(xPos) * 50);
      pop();
    }
  }
}

