// trivia question and answers
const quiz = [ 
    {question: "What is the name of the longest mountain range in the world?", answer: "The Mid-Oceanic Ridge."},

    {question: "What is the world's largest living structure?", answer: "The Great Barrier Reef."},

    {question: "What is the deepest known area of the Earth's oceans?", answer: "The Mariana Trench."},

    {question: "About what percent of the Earth's surface is ocean?", answer: "70%."}
]
console.log(quiz);


// length
const quizLength = quiz.length;
console.log(quizLength);
// random question prompt
// Math.floor(Math.random() * quizLength);
const questionIndex = Math.floor(Math.random() * quizLength);
const answer = window.prompt(quiz[questionIndex].question);

// "you answered" alert + response 
window.alert("You answered " + answer + ". The correct answer was " + quiz[questionIndex].answer);