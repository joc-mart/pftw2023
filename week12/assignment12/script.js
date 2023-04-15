
var dos;
var re;
var mi;
var fa;
var sol;
var la;

function preload() {
    dos = loadSound("assets/do.mp3");
    re = loadSound("assets/re.mp3");
    mi = loadSound("assets/mi.mp3");
    fa = loadSound("assets/fa.mp3");
    sol = loadSound("assets/sol.mp3");
    la = loadSound("assets/la.mp3");
}

function setup() {
    createCanvas(100, 100);
    
    button = createButton("do");
    button.mousePressed(play());

    button2 = createButton("re");
    button2.mousePressed(play());

    // button = createButton("mi");
    // button.mousePressed(togglePlaying);

    // button = createButton("fa");
    // button.mousePressed(togglePlaying);

    // button = createButton("sol");
    // button.mousePressed(togglePlaying);

    // button = createButton("la");
    // button.mousePressed(togglePlaying);
}

function draw() {
    background(0);
}

// function togglePlaying() {
//     // if (dos.isPaused()) {
//     //     dos.play();
//     //     // button.html("do");
//     //     console.log("do is playing");
//     // }
//     // if (re.isPaused()) {
//     //     re.play();
//     //     // button.html("re");
//     // }
//     play();
    
    // re.play();
    // mi.play();
    // fa.play();
    // sol.play();
    // la.play();
// }