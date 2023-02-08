// 2/7 lecture

// DOM
// always check your console
// cmd option j opens console
// document.querySelector("body")
/*
const myDivTarget = document.getElementById("target"); // no need for #
console.log("here", myDivTarget);

// style
myDivTarget.style.color = "red";
myDivTarget.style.background = "yellow";
myDivTarget.innerHTML = "Bobs ur uncle"; // replaces "here" in div tag
myDivTarget.addEventListener("click", () =>  {
    window.alert("clicked my div");
})
// click, mouseover, mouseout
*/

// use . for classes # for ids for document.querySelector - find the first to match within the class
/*
const coolDivs = document.getElementsbyClassName("cool-divs");
console.log("cool divs", coolDivs);
const coolDivSingle = document.querySelector(".cool-divs");
coolDivSingle.style.fontSize = "2rem";
*/
/*
const coolDivSingle = document.querySelector(".cool-divs");
coolDivSingle.style.fontSize = "2rem";
coolDivSingle.addEventListener("mouseover", () => {
    coolDivSingle.style.textAlign = "right";
})
*/
// hover is an _ ?
//addEventListener acts as a function

/*
function clickHandler () {
    console.log("clicked");
}
*/
//??? error

/*
// create new div
function clickHandler () {
    const myNewDiv = document.createElement("div");
    myNewDiv.innerHTML = "I just got added";
    myDivTarget.appendChild(myNewDiv);

}
*/
// mouse events https://www.w3schools.com/jsref/obj_mouseevent.asp

