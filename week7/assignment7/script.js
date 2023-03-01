const { createApp } = Vue;
createApp({
    data () {
        return {
            cardGames: [
                {name: "Pokémon Trading Cards",
                description: "A strategy-based card game in which two players use the Pokémon represented by cards to battle each other.",
                players: 2,
                year: "1996", 
                origin: "Japan"},

                {name: "Solitaire", 
                description: "Also called Patience, Solitaire is a single-player card game in which the player arranges the cards in a systematic order. ", 
                players: 1, 
                year: "late 1700s", 
                origin: "Baltic Region"},

                {name: "Euchre", 
                description: "A trick-taking card game played with a deck of 24, 28, or 38 standard playing cards. Euchre introduced the joker into the modern deck of cards.", 
                players: 4, 
                year: "early 1800s", 
                origin: "Alstasia"},

                {name: "Hearts", 
                description: "A trick-taking card game in which the player with the most points loses.", 
                players: 4, 
                year: "mid 1700s", 
                origin: "Spain"},

                {name: "Uno", 
                description: "A shedding-type card game played with a specially printed deck. First player to play all of one's own cards wins.", 
                players: "2 to 10", 
                year: "1971", 
                origin: "Merle Robbings in Redding, Ohio"},
            ]
        }

    }
}).mount("#myApp");