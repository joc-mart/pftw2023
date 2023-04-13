var song;

function preload() {
    song = loadSound("assets/heart.mp3");
    img = loadImage("assets/hearticon.png");
}

function setup() {
    createCanvas(200, 200);
    slider = createSlider(0, 1, .5, .01);
    song.play();

}

function draw() {
    background(0);

    song.setVolume(slider.value());
}
