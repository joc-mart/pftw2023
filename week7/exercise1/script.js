// can't put {{}} inside "" in html
const {createApp} = Vue;

createApp({ 
    data() {
        return {
            
            // list style
            pageHeader: {
                            textAlign: "center",
                            fontFamily: "Impact, sans-serif",
                            padding: "1rem",

                        },
            flexContainer: {
                display: "flex",
                flexDirection: "row",
                margin: "3rem", 
               justifyContent: "space-between",
            },
            listStyle: {
                listStyle: "square",
                padding: "0",
            },
            itemStyle: {
                fontFamily: "sans-serif",
                margin: "1rem",
                flexDirection: "column",
            },

            // facts
            llamaFact1: "binomial name is Lama glama",
            llamaFact2: "height of 3 to 4 ft on average at the shoulders",
            llamaFact3: "can carry 25 to 30% of their body weight for 5 to 8 mi",
            llamaFact4: "bred as a meat pack animal",
            llamaFact5: "typically live between 15 and 25 years",

            bothFact1: "domesticated",
            bothFact2: "spit when distressed",
            bothFact3: "part of the lama genus",
            bothFact4: "social herd animals",
            bothFact5: "baby is called a cria",

            alpacaFact1: "binomial name is Lama pacos",
            alpacaFact2: "smaller than llamas, they are generally between 32 and 39 inches in height at the shoulders",
            alpacaFact3: "the two breeds are Suri alpaca and Huacaya alpaca",
            alpacaFact4: "bred for fiber",
            alpacaFact5: "typically live between 15-20 years",

            // bottom navigation
            currentRoute: "llamaWiki",
            llamaLink: "https://en.wikipedia.org/wiki/Llama",
            llamaTitle: "furriest creature on earth",
            alpacaLink: "https://en.wikipedia.org/wiki/Alpaca",
            alpacaTitle: "second furriest",
        }
        
    }
}).mount("#myApp");