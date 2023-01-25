const myFaveMovies = ["What We do in the Shadows", "Pride & Prejudice", "The Nightmare Before Christmas", "My Neighbor Totoro", "Moonlight", "Back to the Future"];
console.log("length of list", myFaveMovies.length);
console.log(myFaveMovies);

const newMovie = window.prompt("What is your favorite movie?");
myFaveMovies.push(newMovie);
console.log("My favorite movies updated", myFaveMovies);

// display full list of movies with toString() method
console.log(myFaveMovies.toString());
