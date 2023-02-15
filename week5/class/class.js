// video demos are a walkthrough for how to do the memory game

/*
// timeout/timer
function alertUser(name) {
    window.alert("surprise " + name + "!");
}
*/
/*
window.setTimeout(alertUser, 5000); // function/method on the window w/ 2 arguments, 1st is a function, 2nd is delay in ms // happens once // can clear
*/
/* window.setInterval(alertUser, 5000, "jimmy"); // set interval is on repeat */

/* ???? I did it wrong
const myInterval = setInterval(alertUser, 5000, "Robert");

const newButton = document.querySelector("#clearButton");

newButton.addEventListener("click", () => {
    console.log("clearing timeout");
    clearInterval(myInterval);
})
*/ // ????

/*
// OOP = Object Orient Programming
    // how does class create multiples of something
// "this" refers to entire class
// describe object with multiple properties
class Mouse {
    constructor (weight, color, surface, finish, connection) {
        this.weight = weight;
        this.color = color;
        this.surface = surface;
        this.finish = finish;
        this.connection = connection;
    }
    bump () {       // method
        console.log("mouse bumped");
    }
}
// if want it to be unique, use arguments within ()
// then create variable that is a copy of the mouse

const myWhiteMouse = new Mouse(0.25, "white", "tactile", "glossy", "bluetooth");
console.log("my mouse is ", myWhiteMouse);
console.log(myWhiteMouse.weight);


// call method
myWhiteMouse.bump();
*/

/*
let startDotLocation = 50;
function setup() {
    createCanvas(1000, 800);
    background(0);

}

function draw () {
    const myDot = new Dot(startDotLocation, 500, "blue");
    myDot.show();
    startDotLocation++;
}

class Dot {
    constructor(startX, startY, color) {
        this.x = startX;
        this.y = startY;
        this.color = color;
    }
    show () {
        if(this.x >= 500) {
            fill("red");
        } else {
            fill(this.color); 
        }
        
        circle(this.x, this.y, 100);
    }
}

// why use this?
*/

/////////////////////////////////////////
// QUIZ : 20 questions
// const cars = [] use arrays
// array example: array of objects
const cars = [
    {
        owner: "jocelyn",
        color: "black",
        make: "subaru",
        model: "xv crosstrek",
        trim: "maroon",
        engine: "4 cylinder"
    },
    {
        owner: "ken",
        color: "black",
        make: "nissan",
        model: "juke",
        trim: "red",
        engine: "4 cylinder"
    }
]
// add item with push
cars.push ({
    owner: "yoshi",
    color: "green",
    make: "nintendo",
    model: "mushroom",
    trim: "red",
    engine: "idk"
})
// remove item from array !!!

console.log(cars);

// objects
// classes aren't on the quiz
// find kens car // create a loop
/*
for (let i = 0; i < cars.length; i++) {
    if(cars[i].owner === "ken"){
        console.log(cars[i].color);
    }

}
*/
/*
let age = 16; // asignment operator
if (age === 16); // equality operator
*/
// remember how conditions work
// remember how a push works
// what a function does, how to create it
// can use notes, one attempt
