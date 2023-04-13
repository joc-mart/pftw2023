var song;
var button;

function preload() {
    song = loadSound("assets/heart.mp3");
    img = loadImage("assets/hearticon.png");
}

function setup() {
    createCanvas(200, 200);
    // slider = createSlider(0, 1, .5, .01);
    // song.play();

    button = createButton("play");
    button.mousePressed(togglePlaying);


    loadImage("assets/hearticon.png");
}

function draw() {
    background(0);
    song.setVolume(slider.value());
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song.play();
        button.html("pause");
    } else {
        song.pause();
        button.html("play");
    }
    
}