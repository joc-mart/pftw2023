let startX = 200;
let startY = 200;
let cards = [];
let startingId = 0;

function setup () {
    createCanvas(1000, 800);
    background(0);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startX, startY, 100, 150);

            
            cards.push({ x: startX, y: startY, id: startingId });
            startX += 150;
            startingId++;
        }
        startY += 200;
        startX = 200;
    }
    console.log(cards);
}

