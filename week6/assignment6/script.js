const {createApp} = Vue;

createApp({ 
    data() {
        return {
            llamaPoop: "Llama poop has almost no odor.",
            llamaFood: "Llamas graze on grass and other plants.",
            group: "herd",
            domesticated: true,
            maturity: "Llamas reach maturity at about 2 to 3 years of age",
            size: "Llamas grow to about 4ft tall at the shoulder.",
            strength: "A llama can carry as much as 200 pounds for 12 hours a day.",
            dislike: "Llamas will stick their tongue out at another llama to express their dislike.",
            spit: "Llamas can spit green partially digested food 15 feet or more away.",
            weight: "Llamas weigh around 286 to 341 lbs."
        }
    }
}).mount("#llamaFacts"); // #llamas is html element

// facts sourced from https://racinezoo.org/llama-fact-sheet and https://www.britannica.com/animal/llama