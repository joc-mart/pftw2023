// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put h1 inside 
// create new element
let heading = document.createElement("h1");
heading.innerHTML = "Did you know? Llamas can shoot green spit up to 10 feet away."; 
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);

myEmptyDiv.appendChild(heading); // attach to dom

function handleHeadingClick () {
    console.log("Heading has been clicked");
    document.body.style.backgroundColor = "limegreen";
}

