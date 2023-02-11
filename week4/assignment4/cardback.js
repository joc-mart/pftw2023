function setup () {
    createCanvas(800, 800);

}

// card back

function createTile(originX) {
    translate(originX, 0);

    fill("#4254F5");
    rect(0, 0, 100, 150);
    // big s
    stroke("#78DECE");
    strokeWeight(5);
    bezier(85, 40, 5, 30, 95, 110, 15, 100);
    // outside triangles
    fill("#FAF79C");
    noStroke();
    triangle(5, 145, 5, 130, 20, 145); // bottom left
    triangle(80, 5, 95, 5, 95, 20); // top right
    triangle(5, 5, 20, 5, 5, 20); // top left
    triangle(80, 145, 95, 130, 95, 145) // bottom right
    // inside triangles
    fill("#FA87EB");
    noStroke();
    triangle(20, 130, 5, 130, 20, 145); // bottom left
    triangle(80, 5, 80, 20, 95, 20); // top right
    triangle(20, 20, 20, 5, 5, 20); // top left
    triangle(80, 145, 95, 130, 80, 130) // bottom right
}

function draw () {
    //background("green");
    for (let i = 50; i < 800; i += 150) {
        rect(i, 200, 100, 150);
    }
    

    createTile(50, 200, "#4254F5", "#78DECE", "#FAF79C", "#FAF79C", "#FA87EB");
    createTile(150, 200, "#4254F5", "#78DECE", "#FAF79C", "#FAF79C", "#FA87EB");
    createTile(150, 200, "#4254F5", "#78DECE", "#FAF79C", "#FAF79C", "#FA87EB");
    createTile(150, 200, "#4254F5", "#78DECE", "#FAF79C", "#FAF79C", "#FA87EB");
    createTile(150, 200, "#4254F5", "#78DECE", "#FAF79C", "#FAF79C", "#FA87EB");
}
