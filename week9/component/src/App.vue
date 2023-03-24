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
  <div v-cloak>
    <h2>Camelids</h2>
    <table>
      <thead>
        <th>Name</th>
        <th>Binomial Name</th>
        <th>Order</th>
        <th>Family</th>
        <th>Genus</th>
        <th>Species</th>
        <th>Model</th>
      </thead>
      <tbody>
        <tr v-for="animal in camelids" v-bind:key="animal.commonName">
          <td>{{animal.commonName}}</td>
          <td>{{animal.binomialName}}</td>
          <td>{{animal.order}}</td>
          <td>{{animal.family}}</td>
          <td>{{animal.genus}}</td>
          <td>{{animal.species}}</td>
          <td>{{animal.image}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
