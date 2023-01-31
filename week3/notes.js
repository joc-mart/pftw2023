// FUNCTIONS vid

function logoutGreeting(greeting) { // greeting is a parameter
    console.log(greeting);
}
logoutGreeting("salutations"); // execute function by using function name to call it // salutations is an argument

// how to parameterize functions
function getStuff(ingredient) {
    console.log("get " + ingredient);
}

getStuff("bread");
getStuff("peanut butter");

// ?? min 9
/* const makeSandwich = function (ingredientArray) {
    four(let i )
}
*/
// declarative vs expression 
// if use equals, use the semicolon?

//declarative function
function makeRand (maxNumber){
    const output = Math.ceil(Math.random() * maxNumber);
    return output; // can also write return instead of const ouput =
}
console.log(makeRand(100));
// alternatively,
const randomOutput = makeRand(100);
console.log(randomOutput);

//
function checkLegality (age) {
    return age >= 21;
}
console.log(checkLegality(18));

// console.log is a function

//
const kensAge = 49;
if (checkLegality(kensAge)) {
    console.log("He is legal");
}

// min 12 ???

//
/* const myObject = {
    x: 200,
    y: 400,
    getPosition: function() {
        console.log("we are " + this.x + " from the left and " + this.y + " from the top.");
    }
}
myObject.getPosition();
*/
// this.x or this.y is a reference


const myObject = {
    x: 200,
    y: 400,
    getPosition: () => {
        this.x = 35;
        this.y = 45;
        console.log("we are " + this.x + " from the left and " + this.y + " from the top.");
    }
}
myObject.getPosition();
console.log(myObject.x, myObject.y);
// isolates your scope

// LOOPS vid

// basic "for loop"
// i is often used as a variable definition
// i++ is the increment, it increases by 1
// i < 10 is when the loop ends
for (let i = 0; i < 10; i++) {
    console.log("this is i", i);
}

// loops with an array
const myMovies = ["star wars", "the two towers", "legally blonde", "what we do in the shadows", "pride and prejudice"];
for (let j = 0; j < myMovies.length; j++) {
    console.log(myMovies[j]);
}

// while loop --- can freeze browsers? danger
let myVar = false
while(myVar === false) {
    console.log("this will happen once");
    myVar = true;
}
// while loop -- remove items from an array -- use for quiz assignment
const myNum = [1, 2, 3, 4, 5, 6];
while (myNum.length > 0) {
    console.log("removing " + myNum[myNum.length - 1]);
    myNum.pop();
}
console.log(myNum); // becomes an empty array
// assignment: after question is answered correctly, use splice to remove the question
////////////////////////////////

// p5 dom inputs and buttons
// multiple cdn links?




















// **********QUESTIONS*******************
// loops vid cuts off at the end??


