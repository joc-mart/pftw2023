// array of games
const gameOne = {
    title: "Hearts",
    type: "card game",
    numberOfPlayers: "four",
    shortDescription: "It is a fast and fun card game in which the player with the most points loses.",
    rating: "5/5"
}
console.log(gameOne);

const gameTwo = {
    title: "Azul",
    type: "board game",
    numberOfPlayers: "2 to 4",
    shortDescription: "Azul is a strategy game in which players take turns laying out colorful tiles. It is aesthetically pleasing and fun.",
    rating: "100/100"
}
console.log(gameTwo);

const gameThree = {
    title: "Mario Kart",
    type: "video game",
    numberOfPlayers: "1 to 4", 
    shortDescription: "Mario Kart is a highly entertaining game in which players choose to play as characters from the Mario universe and compete in various go-kart races.",
    rating: "1000/10"
}
console.log(gameThree);

// prompt
const yourNumber = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.");
console.log("User chose", yourNumber);

// concat
if (yourNumber === "1"){
   window.alert("You chose " + gameOne["title"] + "! " + "Hearts is a " + gameOne["type"] + " that can be played by " + gameOne["numberOfPlayers"] + " people. " + gameOne["shortDescription"] + " I would rate it a " + gameOne["rating"] + "."); 
}

if (yourNumber === "2"){
    window.alert("You chose " + gameTwo["title"] + "! " + "It is a " + gameTwo["type"] + " that can be played by " + gameTwo["numberOfPlayers"] + " people. " + gameTwo["shortDescription"] + " I would rate it a " + gameTwo["rating"] + "."); 
 }

 if (yourNumber === "3"){
    window.alert("You chose " + gameThree["title"] + "! " + "It is a " + gameThree["type"] + " that can be played by " + gameThree["numberOfPlayers"] + " people. " + gameThree["shortDescription"] + " I would rate it a " + gameThree["rating"] + "."); 
 }