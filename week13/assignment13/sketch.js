
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)

    noLoop()
}

function draw() {
    background(200)

    translate(0, 200, 0)

    branch(100)
}

function branch(len) {
    line(0, 0, 0, 0, -len, 0)
}