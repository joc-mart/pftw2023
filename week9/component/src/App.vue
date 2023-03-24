<script setup>
 const camelids = [
    {
      commonName: "Llama",
      binomialName: "Lama glama",
      order: "Artiodactyla",
      family: "Camelidae",
      genus: "Lama",
      species: "L. glama",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/bb9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg"
    },
    {
      commonName: "Alpaca",
      binomialName: "Vicugna pacos",
      order: "Artiodactyla",
      family: "Camelidae",
      genus: "Vicugna",
      species: "V. pacos",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/ddb/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29jpg"
    },
  ]

</script>

<template>
  <div>
    <p v-for="animal in camelids" v-bind:key="animal.commonName">{{animal.commonName}}</p>
  </div>
</template>

<style scoped>
</style>
