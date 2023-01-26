// 1.24.23
// const: variables that don't change (constant)
// string: string of characters wrapped with quote marks
    // "I am a string 123"
// boolean (true/false)
// parentheses () used to add a configuration
    // pop: pop() has empty parentheses, it is an action to be exectued
// brackets [] used to identify where things are
// curly brackets {} are blocks of code
    // mini program
// ARRAYS  
    // allows you to store multiple values in one variable
    // [] = empty array
    const myFaveMovies = "cars, finding nemo, moana".split(", ");
        // used a string and split using .split to create an array of three items
    // arrays start with 0
    myCringyMovies = ["holiday", "fight club", "titanic"];
        // put the quotations around individual items (don't use that as much?)
    const moarMoviesString = "toy store|mary poppins|trolls"; 
        const moarMoviesArray = moarMoviesString.split("|");
        //  convert string to array
        // can use any character to split
            // choose something that doesn't appear in the values themself like | or "
    // can add to the array myFaveMovies[3] = "coco"
    // can have an array of arrays [2][5]

// LENGTH OF array
    console.log("length of cringe", myCringiestMovies.length)
    // property
// PUSH
    // mutates existing array
    myCringiestMovies.push("san andreas")
    console.log("my cringiest updated", myCringiestMovies);

// POP
    myCringiestMovies.pop()
    console.log("popped cringy", myCringiestMovies);
    // removes last item in array

// SHIFT
    // removes first item
    const removedElement = myCringiestMovies.shift();
    console.log("shifted cringy", myCringiestMovies);
    console.log("remove element", removedElement);

// UNSHIFT
    // adds item to beginning
    myCringiestMovies.unshift("fast five");
    console.log("unshifted, myCringiestMovies);

// SPLICE
    // take an item from array & remove or insert
    myCringiestMovies.splice(2, 1)
    console.log("spliced", myCringiestMovies);
    // 2 = index location, 1 = amount of items
    // if you put 0 number items, you add an item

// indexOf
    // find which item in array I'm looking for
    const colors = ["red", "orange, "blue, "indigo"];
    console.log(colors.indexOf("green");)
    // output is -1 because we don't have green in array
    // otherwise it would output index location

// CONCAT
    // make two arrays into one
    const oneBigArray = myCringiestMovies.concat(myMix);
    console.log(oneBigArray);
    // does not mutate existing arrays
    // concatination

// JOIN
    // opposite of split
    // turns array into string
    console.log(oneBigArray.join(", "));
// min 57:27 developer.mozilla.org Array under methods tab
// ********************************************** //

// ~ OBJECTS ~
    const myObject = {} // empty object
    const myBicycle = {color: "yellow", wheels: "knobby", suspension: "shock"}; 
    console.log("bike", myBicycle);
    // uses strings to decribe variable myBicycle
    // add
    myBicycle.seat = "soft and cushy";
    // delete
    delete myBicycle.seat;
    
    // constants aren't really constant bc items can change
    
    const jocsBike = { madeOf: "steel", gears; 12: color: "black" }
    console.log("bike", myBicycle);
    const mergedBike = Object.assign(myBicycle, jocsBike);
    console.log(mergedBike);
    // if there is a repeated property, the one that came last (color) takes precedence


//Example program
    // program: ask a random question
    const questions = [
        { question: "red + blue", answer: "purple" },
        { question: "2 + banana", answer: "2banana"},
        { question: "adding white", answer: "tint" }
    ]
    // determine how long question is
    const questionLength = questions.length;
    // choose a pseudo-random number between 0 and lenth of array
    // Math.floor(Math.random() * ARRAY_LENGTH)
    Math.floor(Math.random() * questionLength)
    // 1:16
    // math.floor rounds down to nearest integer
    const questionIndex = Math.floor(Math.random() * questionLenth);
    window.prompt(questions[questionIndex].question)
    // access property with a period .
    const answer = window.prompt(questions[questionIndex].question])
    if (answer === questions[questionIndex].answer) {
        window.alert("you win");
    }
    // ? last part ? 


    // 1/25
    // Reading: Arrays and Objects 
    // https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/ch2.md#objects
    
    // object: compound value where you can set named locations that each hold thir own values 
    // dot notation: obj.a -- preferred
    // bracket notation: obj["a"]
        // used for property name with special characters aka keys
    
    // array: object that holds values in numerically indexed positions
        // start counting at 0
        // can also have properties such as length
    
        
    // https://eloquentjavascript.net/04_data.html
        // 


    // toString()
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString


    // https://www.w3schools.com/js/js_objects.asp

    