function setup () {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill("#78DECE");
    rect(0, 0, 200, 200);

    stroke("#87FAC8");
    strokeWeight(5);
    bezier(85, 20, 10, 10, 90, 90, 15, 80);
    bezier(135, 70, 60, 60, 140, 140, 65, 130);
    bezier(185, 120, 110, 110, 190, 190, 115, 180);

    stroke("#FAF79C");
    strokeWeight(5);
    bezier(95, 45, 50, 40, 100, 100, 40, 100);
    bezier(145, 95, 100, 90, 150, 150, 90, 150);

    fill("#FA87EB");
    noStroke();
    triangle(20, 175, 20, 140, 55, 175);
    triangle(175, 20, 140, 20, 175, 55);

    fill("#4254F5");
    noStroke();
    triangle(20, 140, 55, 175, 55, 140);
    triangle(140, 55, 175, 55, 140, 20);

}

function draw() {
    createTile();
}
