// 1/31 lecture: loops and functions

/*
// OBJECT
const myCar = {
    tires: "goodyear",
    engine: "combustion rotary",
    go: () => {
        console.log("I'm going")
    }
}
console.log(myCar.tires);
myCar.go();

// ARRAY
const colors = ["red", "green", "blue"];

// array of objects
const myCars = [
    { tires: "goodyear", engine: "4 cylinder", name: "honda "}, 
    { tires: "michelin", engine: "v6", name: "toyota" }
]
*/
/*
// FUNCTIONS 
// method: function that belongs to an object or class
// older method
function showDate(desiredDate) { // desiredDate is parameter
    const var1 = "one";
    console.log("the date is");
    console.log(desiredDate);
    console.log("bye");
    console.log("this in function 1", this);
}
showDate("jan 30"); // need to call the function for it to do something // jan 30 is the argument > used as the parameter


const addNumbers = function (number1, number2) {
    console.log(typeof number2);
    // typeof will tell you what type of variable it is
    console.log("this in function 2", this);
    if (typeof number1 !== "number" || typeof number2 !== "number") {
    return; // exit out of the function
    }
    console.log(number1 + number2);
}
addNumbers(3, 2);
addNumbers(5, 9);
addNumbers(13, "bob");


// !== means does not equal

// fat arrow function =>
const mySuperFunction = () => {
    const var2 = "two"; // this is specific to this block
    console.log("Hi, I'm super");
    console.log("this in function 3", this);
}
mySuperFunction();
// what is this? const var2 = two etc ?????????
    // will send out another example of => and how they are diff than other functions
*/
/*
const multiplyNumbers = (number1, number2) => {
    const result = number1 * number2;
    return result;
}
console.log("multiply 3 * 15 = ", multiplyNumbers(3, 15));

// can also do return number1 * number2;
// const/let/var + name = function
// or const name = => 
*/

// LOOPS
/*
window.addEventListener("load", () => { // while window loads
    console.log("everything is loaded", document.getElementById("myTarget"));
});
const main = () => {

} // picks up <div id="myTarget"></div>
*/

const colors = ["magenta", "yellow", "black", "cyan"];
for (let loopVar = 0; loopVar < colors.length; loopVar++){
    console.log("loop var", colors[loopVar]);
}
// first, define a loop variable then set limit
// colors.length is the number of objects in the array
// third, increment by one ++
// decrease by one --
// +=3 *=2

for (let i = 200; i < 400; i+=10) {
    console.log(i);
}
// loop from 200 to 390 increasing by 10

// while loop
let myNumber = 0
while(myNumber < 200) {
    console.log("myNumber", myNumber);
    myNumber += 10;
}
