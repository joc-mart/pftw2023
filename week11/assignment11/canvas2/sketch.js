let img;
let cnv;


function preload() {
  img = loadImage('../img/redflower2.jpg');
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
      fill(color(c));
      noStroke();
      rect(col, row, 20, 10);
      pop();
    }
  }
}

