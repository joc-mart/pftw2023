// can't put {{}} inside "" in html
const {createApp} = Vue;

createApp({ 
    data() {
        return {
            pageHeader: {
                textAlign: "center",
                fontFamily: "Impact, sans-serif"
            },

            llamaLink: "https://en.wikipedia.org/wiki/Llama",
            llamaTitle: "furriest creature on earth",
            alpacaLink: "https://en.wikipedia.org/wiki/Alpaca",
            alpacaTitle: "second furriest",
        
            currentRoute: "home",

            listStyle: {
                listStyle: "square",
                margin: "0",
                padding: "0",
            
            },
            itemStyle: {
                fontFamily: "sans-serif",
                margin: "0",
                flexDirection: "column",
            },

            llamaFact1: "blue",
            llamaFact2: "red",
            llamaFact3: "orange",
            llamaFact4: "blah",
            llamaFact5: "silver",

            bothFact1: "gold",
            bothFact2: "green",
            bothFact3: "pink",
            bothFact4: "purple",
            bothFact5: "brown",

            alpacaFact1: "something",
            alpacaFact2: "2",
            alpacaFact3: "3",
            alpacaFact4: "4",
            alpacaFact5: "5",
        }
    }
}).mount("#myApp");