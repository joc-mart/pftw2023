const {createApp} = Vue;

createApp({ 
    data() {
        return {
            llamaPoop: "Llama poop has almost no odor.",
            llamaFood: "Llamas graze on grass and other plants.",
            group: "herd",
            domesticated: true
            
        }
    }
}).mount("#llamaFacts"); // #llamas is html element

