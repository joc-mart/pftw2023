<script setup>
    const props = defineProps(["item", "index"]);
console.log("the item", props.item);
</script>

<template>
    <tr
    v-bind:class="{even: (index + 1) % 2 === 0, odd: (index + 1) % 2 !== 0}">
        <td>{{item.name}}</td>
        <td id="artist">{{item.artist}}</td>
        <td>{{item.year}}</td>
        <td>{{item.genre}}</td>
        <td><img v-bind:src="item.cover"></td>
        <td>{{item.collected}}</td>
        <td>
            <button type="button" v-on:click="$emit('deleteItem', item)">Delete</button>
        </td>
    </tr>
</template>

<style scoped>
  * {
    font-family: 'Sen', sans-serif;
  }
  h2 {
    text-align: center;
    font-weight: 800;
  }
  .table {
    text-align: center;
    width: 100%;
    padding: 0 3rem 3rem;
  }
  td {
    background-color: white;
    padding: .5rem;
    border: 1px dotted black;
  }
  .even td{
    background-color: #beebab;
  }
  img {
    max-width: 100px;
  }
  button {
    background-color: #ffb0b9;
    font-family: 'Sen', sans-serif;
    font-weight: 700;
    border-style: none;
    border-radius: 5px;
    padding: 1rem;
  }
  button:hover {
    cursor: pointer;
  }
  .new-album fieldset {
    background-color: #beebab;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0rem 3rem 8rem 3rem;
    padding: 2rem;
  }
  .new-album div {
    margin: 10px 0;
    width: 120px;
  }
  .new-album div label {
    max-width: 120px;
  }
  .new-album input {
    background-color: white;
    max-width: 120px;
    display: block;
  }
  .new-album button {
    background-color: #fffab0;
  }
</style>