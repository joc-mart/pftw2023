const dogs = ["Lucky", "Lucy", "Limda", "Lacey", "Carl"];
for (let loopVar = 0; loopVar < dogs.length; loopVar++){
    console.log("My dog", dogs[loopVar], "is a really good puppy");
}

let greekMythicalCharacters = ["Athena", "Zeus", "Hermes", "Hercules", "Hera", "that one guy"];

greekMythicalCharacters.splice(5, 1, "Hades");
console.log(greekMythicalCharacters);