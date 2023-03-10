const {createApp} = Vue;

Vue.createApp({
  data() {
    return {
      llamas: [
        {rank: 1, name: "Barack O. Llama"}, 
        {rank: 2, name: "Llamanade"},
        {rank: 3, name: "Carl"},
        {rank: 4, name: "Shama Llama Ding Dong"},
        {rank: 5, name: "Drama Llama"},
        {rank: 6, name: "No Probllama"},
        {rank: 7, name: "Fluffy"},
        {rank: 8, name: "Llamacorn"},
        {rank: 9, name: "Kuzco"},
        {rank: 10, name: "Llama Bean"},
        {rank: 11, name: "Bahama Llama"},
        {rank: 12, name: "Tina"},
        {rank: 13, name: "Llamanator"},
        {rank: 14, name: "Giraffe Sheep"},
        {rank: 15, name: "Llamabogini"}
      ]
    }
  }
}).mount("#llama-list");

