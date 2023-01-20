// visit office hrs to set up automatic save
// use live server
// how did he commit from vs code?
// put script tag either at end of body or head
// cmd slash to comment out a line
// dev console shortcut is cmd option j

/* block comments */
// single line comments

// use console log for buckets of information
    // variables
    // var isItTuesday = true; // boolean
// camel case is for legibility
// snake case

// simplest form of data is true/false = boolean
// mixed datatype
// string
    // alphanumeric characters
    // concatination aka concat = a string + another string
    // a space is also considered a string " " + myGithub

// use consol logs for debugging
// tells us what is happening in our script

// window.alert(); will open a modal display whatever is in parentheses
    // window.prompt converts everything to strings
    // console.log((inputString * 1) + myNumber); ??????
        // way to convert string >> variable is to mulitply by 1

// NUMBERS
    // var myNumber = 42; 

// MAKING DECISIONS aka conditionals
    // if () {}
        // condition is in the parentheses
        // runs if condition is true
    // conditional operators
        // equality operator
                /* 
                if (5 === (3 + 2)) {
                    console.log("they're the same");
                }
                */
            // use === for equality checking 
            // only two == is more "loose"
        // >= greater than or equal to
    // else (if thats not true)
    // else if 

// p5js.org
    // best source for how to use p5.js
    // CDN link
    // when use CDN source put script tag within head (link to your script file in bottom of body)
    
    //function setup - defining or creating your own action
    /* function setup() {
        createCanvas(400, 400);
        background(0);
    }

    function draw() {
        rect(100, 100, 200, 200);
    }
    */
   
    // rect = create a rectangle
    // (100, 100, 200, 200) is an argument
        // first and second set the location and the second two are width and height?

// 1/18 demo vids
    // let is for variables that get reassigned
    // install Node & NPM
    // want Node package ESLint
    // QUESTION! dev set up vid min 10:20 did I install eslint correctly????
// getting started
    // drawing part of an ellipse
        // 1st and 2nd parameters set location
        // 3rd and 4th set width and height
        // 5th parameter sets the angle to start the arc
        // 6th parameter sets the angle to stop
        // angles are set in radians
        // PI = 180 degrees
        // QUARTER_PI = 45 
        // HALF_PI = 90
        // TWO_PI = 360
    // can convert to degrees from radians using angleMode(DEGREES) in function setup

    // the shape that comes first will be on the bottom
    // 
    
    // QUESTION
    // p5 snippets extension didnd't work / what does it do?