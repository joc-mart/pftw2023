let blockX = 0;
let blockY = 0;
let blockColor = 0;
let drawTimer;
const speed = 10;
const distance = 2;

function setup () {
    createCanvas(500, 500);
    background(0);
    
}

function drawBlock (x, y, color) {
    fill(color || 3, 90, 252); // || means or
    rect(x, y, 50, 50);
}

function keyTyped () {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 0, 9, 0, 255);
    console.log("converted number", keyToNumber);
    blockColor = keyToNumber;
    
}

drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
        drawBlock(blockX, blockY, blockColor);
        blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    if (blockY - 50 < height && blockX - 50 > width) {
        window.clearInterval(drawTimer);
        console.log("done");
        // clears timer
    }
}, speed);
// went one past
// keyTyped (key) vs keyPressed (keyCode)

// colors 3, 252, 190