var loopNum = 0;
var basicColor = window.prompt("choose a color", "red");


function setup () {
    createCanvas(400, 400);
    background(200);
}


function draw() {
    fill(basicColor);
    if (basicColor === "red") {
        rect(100, 200, loopNum, 400);
    } else {
        circle(100, 100, 100);
    }
    console.log(loopNum);
    console.log(basicColor);
   
    loopNum = loopNum + 1;
}
