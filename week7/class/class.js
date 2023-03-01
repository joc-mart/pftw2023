// what is an object
// to organize a collection, make an array of objects
// const myOtherObject = {
//     age: 25,
//     hair: "blond"
// };
// const { age, hair } = myOtherObject // object destructuring not on quiz
// console.log(age);
// // cmd + / to comment out

// v-cloak

// // attribute binding
// v-bind:attribute="var"
// <a v-bind:href="url"></a>
// v-bind:title="name"
// shortcut
    // :attr="var"

// inline style
    // v:bind:style="{fontSize: '36px', fontWeight: 900}"

// loop
const { createApp } = Vue;
createApp({
    data () {
        return {
            names: ["Yoshi", "Ken", "Caroline", "Max", "Chell"],
            car: {
                tires: "goodyear",
                engine: "v6",
                color: "red"
            },
            pets: [
                {type: "dog", breed: "labrador", color: "brown"},
                {type: "dog", breed: "golden retriever", color: "orange"},
                {type: "dog", breed: "pug", color: "white"},
                {type: "dog", breed: "french bulldog", color: "black"},
                {type: "fish", breed: "clown", color: "orange and white"},
            ]
        }
    }
}).mount("#myApp");

// modulo % means remainder

// assignment 7
    // like the pets
    // use table
    // will build on it next assignment

// quiz
    // v-cloak
    // v-for
    // is lo-dash an example of a framework or a library? it is a library

// exercise 


// QUESTION: CAN YOU GO OVER INCLUDES()