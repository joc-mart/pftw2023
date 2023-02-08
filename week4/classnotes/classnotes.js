// 2/7 lecture

// DOM
// always check your console
// cmd option j opens console
// document.querySelector("body")
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

