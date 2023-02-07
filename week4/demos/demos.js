// DOM DEMO VID

// DOM: document object model
    // connect to and manipulate objects on browser page
// doument.body.attributes
    // document.body has children
    // document.body.children[0]
// window.location.reload
// temporary changes

// document.querySelector
    // selects just one

// can change elements of html document

//////////////////////
// p5 CLICK EVENTS VID

// detecting mouse clicks on objects
function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    fill("purple");
    ellipse(100, 100, 100);
}
function mousePressed() {
    console.log(mouseX, mouseY);
    // for a circle
    const distance = dist(mouseX, mouseY, 100, 100);
    console.log(distance);
    if(distance < 50) {
        alert("you hit it");
    }
}

// for rectangle, don't use distance 
//rect(100, 100, 200, 200)
    /* if((mouseX >= 100 && mouseX <= 300) && (mouseY >= 100 && mouseY <= 300)) {
        console.log("you got the x");
    }
    */

// can use variables and change position += #

