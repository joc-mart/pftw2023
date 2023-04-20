var pos;
var slider;

function setup() {
    createCanvas(800, 500);
    angleMode(DEGREES);
    slider = createSlider(1, 7, 0);

    pos = 0.0; // float value uses decimal places
    inc = 3.0;

    pos2 = 0.0; 
    inc2 = 9.0;
}

function draw() {
    clear();

    translate(width/2, height/2);

    var mySinVal = sin(pos)
    var mySinVal2 = sin(pos2)

    amplified = mySinVal * 1000;
    amplified2 = mySinVal2 * 200;

    for (x = 0; x<= 360; x = x + 5) {
        fill("#6355e0"); ; // blue
        curve(30, 20, 100, 100, amplified, 100, amplified2, 300);
        rotate(x);
    }

    for (x = 0; x<= 360; x = x + 5) {
        c = color("hsla(240, 100%, 30%, .3)"); // dark blue
        fill(c)
        curve(0, 10, 10, amplified, 100, 10, amplified, amplified);
        rotate(x);
    }

    for (x = 0; x<= 360; x = x + 2) {
        fill("#b064e3"); // purple
        curve(0, 10, 10, amplified2, amplified, 10, 10, 10);
        rotate(x);
    }

    // for (x = 0; x<= 360; x = x + 5) {
    //     fill("#e359b2"); // pink
    //     curve(0, 10, 10, 50, amplified, 10, amplified2, 10);
    //     rotate(x);
    // }


    pos = pos + slider.value();
    pos2 = pos2 + inc;

}