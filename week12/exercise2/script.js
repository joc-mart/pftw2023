var song;
var button;
var amp;
let img;

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
}

function draw() {
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol, 0, .3, 10, 200);
    // fill("#32a87d");
    // ellipse(width / 2, height / 2, diam, diam);
    image(img, 0, 0, diam,  diam);
    // ellipse(x, y, w, [h])
    // image(img, x, y, width, height)
    img.loadPixels();
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