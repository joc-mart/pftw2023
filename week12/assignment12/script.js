
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
    createCanvas(0, 0);

    button = createButton("do");
    button.mousePressed(togglePlaying1);
    button.style('background-color', "red");

    button2 = createButton("re");
    button2.mousePressed(togglePlaying2);
    button2.style('background-color', "orange");

    button3 = createButton("mi");
    button3.mousePressed(togglePlaying3);
    button3.style('background-color', "yellow");

    button4 = createButton("fa");
    button4.mousePressed(togglePlaying4);
    button4.style('background-color', "#1ac447");

    button5 = createButton("sol");
    button5.mousePressed(togglePlaying5);
    button5.style('background-color', "#4882e0");

    button6 = createButton("la");
    button6.mousePressed(togglePlaying6);
    button6.style('background-color', "#a74ced");
}

function draw() {
    background(0);
}

function togglePlaying1() {
    if (!dos.isPlaying() || dos.isPlaying()) {
        dos.play();
    }
}

function togglePlaying2() {
    if (!re.isPlaying() || re.isPlaying()) {
        re.play();
    }
}

function togglePlaying3() {
    if (!mi.isPlaying() || mi.isPlaying()) {
        mi.play();
    }
}

function togglePlaying4() {
    if (!fa.isPlaying() || fa.isPlaying()) {
        fa.play();
    }
}

function togglePlaying5() {
    if (!sol.isPlaying() || sol.isPlaying()) {
        sol.play();
    }
}

function togglePlaying6() {
    if (!la.isPlaying() || la.isPlaying()) {
        la.play();
    }
}