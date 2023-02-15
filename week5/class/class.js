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


