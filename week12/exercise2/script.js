var song;
var button;
var amp;
let r;
let g;

function preload() {
    song = loadSound("assets/heart.mp3");
    img = loadImage("assets/hearticon.png");
}

function setup() {
    createCanvas(400, 400);
    
    // play/pause button
    button = createButton("play");
    button.mousePressed(togglePlaying);

    // change size with volume
    amp = new p5.Amplitude();
    // color = ("#32a87d", "#a83294");
    // g = ("#32a87d");
    // r = ("#a83294");
}

function draw() {
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol, 0, .3, 10, 200);
    fill("#32a87d");
    ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
    if (!song.isPlaying()) { // pause button
        song.play();
        button.html("pause");
    } else {    // play button
        song.pause();
        button.html("play");
    }
    
}