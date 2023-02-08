let startX = 100;

function setup () {
    createCanvas(800, 800);
    background("blue");
}
/*
function draw () {
    fill(255);
    rect(startX, 100, 200, 200);
    startX++;
}
*/
/*
// mouse pressed function
function mousePressed() {
    console.log("I've been pressed", mouseX, mouseY);
    if(mouseX <= 300 && mouseX >= 100 && mouseY >= 100 && mouseY <= 300) {
        console.log("bingo");
    }
}
*/
/*
function mousePressed() {
    console.log("I've been pressed", mouseX, mouseY);
    if(mouseX <= (startX + boxWidth) && mouseX >= startX && mouseY >= 100 && mouseY <= 300){
        console.log("bingo");
    }
}
*/

function draw () {
    fill(255);
    circle(startX, 100, 50);
    //startX++;
}

function mousePressed () {
    console.log("checkin", dist(dist(mouseX, mouseY, startX, 150)));
    if (dist(mouseX, mouseY, startX, 150) <= 50) {
        console.log("you clicked the circle");
    }
}
//  didn't work below circle? it said I clicked it when I didn't




