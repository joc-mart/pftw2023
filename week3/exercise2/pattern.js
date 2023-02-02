function setup () {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, bigSColor, littleSColor, firstTriangleColor, secondTriangleColor) {
    translate(originX, originY);

    fill(primaryColor);
    rect(0, 0, 200, 200);

    stroke(bigSColor);
    strokeWeight(5);
    bezier(85, 20, 10, 10, 90, 90, 15, 80);
    bezier(135, 70, 60, 60, 140, 140, 65, 130);
    bezier(185, 120, 110, 110, 190, 190, 115, 180);

    stroke(littleSColor);
    strokeWeight(5);
    bezier(95, 45, 50, 40, 100, 100, 40, 100);
    bezier(145, 95, 100, 90, 150, 150, 90, 150);

    fill(firstTriangleColor);
    noStroke();
    triangle(20, 175, 20, 140, 55, 175);
    triangle(175, 20, 140, 20, 175, 55);

    fill(secondTriangleColor);
    noStroke();
    triangle(20, 140, 55, 175, 55, 140);
    triangle(140, 55, 175, 55, 140, 20);

}

function draw() {
    createTile(0, 0, "#78DECE", "#87FAC8", "#FAF79C", "#FA87EB", "#4254F5");
    createTile(0, 200, "#4254F5", "#78DECE", "#FAF79C", "#FAF79C", "#FA87EB");
    createTile(0, 200, "#FA87EB", "white", "#4254F5", "#FAF79C", "#87FAC8");
    createTile(200, -400, "#FAF79C", "#4254F5", "#78DECE", "#4254F5","#87FAC8");
    createTile(0, 200, "white", "#FA87EB", "#78DECE", "#78DECE", "#FAF79C");
    createTile(0, 200, "#87FAC8","#78DECE", "#FA87EB", "#FAF79C", "#78DECE");
    createTile(200, -400, "black", "#FA87EB", "#FAF79C","#87FAC8", "#4254F5");
    createTile(0, 200, "#FA87EB", "#78DECE", "#4254F5", "black", "#FAF79C");
    createTile(0, 200, "#4254F5", "#FAF79C", "#FA87EB", "#78DECE", "#87FAC8");
}

// pink = "#FA87EB"
// blue = "#4254F5"
// light blue = "#78DECE"
// turquoise = "#87FAC8"
// yellow = "#FAF79C"