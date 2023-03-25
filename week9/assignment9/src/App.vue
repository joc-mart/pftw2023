<script setup>
import { reactive } from 'vue';

const albums = [
  {name: "Carrie & Lowell",
  artist: "Sufjan Stevens",
  year: 2015,
  genre: "Indie", 
  cover: "https://upload.wikimedia.org/wikipedia/en/e/ec/Sufjan_Stevens_-_Carrie_%26_Lowell.jpg",
  collected: true},

  {name: "Growing Pains",
  artist: "Sammy Copley",
  year: 2021,
  genre: "Pop", 
  cover: "https://i.scdn.co/image/ab67616d0000b273c2c5fc762fa24d14ef29011f",
  collected: false},

  {name: "Heart-Shaped Leaves",
  artist: "Super Saturated Sugar Strings",
  year: 2014,
  genre: "Folk", 
  cover: "https://f4.bcbits.com/img/a2003727927_10.jpg",
  collected: true},

  {name: "All Their Many Miles",
  artist: "Super Saturated Sugar Strings",
  year: 2018,
  genre: "Folk", 
  cover: "https://f4.bcbits.com/img/a2178237143_10.jpg",
  collected: true},

  {name: "The New Abnormal",
  artist: "The Strokes",
  year: 2020,
  genre: "Indie Rock", 
  cover: "https://upload.wikimedia.org/wikipedia/en/f/f8/The_Strokes_-_The_New_Abnormal.png",
  collected: false},                
];
const newAlbum = {
  name: "",
  artist: "",
  year: null,
  genre: "", 
  cover: "",
  collected: false,
};

const state = reactive({albums: albums, newAlbum: newAlbum});
// const stae = reactive({albums, newAlbum}); shortened version
</script>

<template>
  <div class="app-wrapper">
    <div class="container" v-cloak>
            <h2>CD Collection</h2>
            <table class="table">
                <thead>
                    <th>Album Name</th>
                    <th>Artist</th>
                    <th>Year Released</th>
                    <th>Genre</th>
                    <th>Album Cover</th>
                    <th>Collected?</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr v-for="(album, index) in state.albums" v-bind:key="index" v-bind:class="{even: (index + 1) % 2 === 0, odd: (index + 1) % 2 !== 0}">
                        <td>{{album.name}}</td>
                        <td id="artist">{{album.artist}}</td>
                        <td>{{album.year}}</td>
                        <td>{{album.genre}}</td>
                        <td><img v-bind:src="album.cover"></td>
                        <td>{{album.collected}}</td>
                        <td>
                            <button type="button" v-on:click="deleteItem(album)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <form v-on:submit.prevent="submitHandler" class="new-album">
            <fieldset>
                <legend>Add a game to the collection</legend>
                <div>
                    <label for="name">Album Name</label>
                    <input id="name" type="text" v-model="newAlbum.name">
                </div>

                <div>
                    <label for="artist-name">Artist</label>
                    <input id="artist-name" type="text" v-model="newAlbum.artist">
                </div>

                <div>
                    <label for="year">Year Released</label>
                    <input id="year" type="date" v-model="newAlbum.year">
                </div>

                <div>
                    <label for="genre">Genre</label>
                    <input id="genre" type="text" v-model="newAlbum.genre">
                </div>

                <div>
                    <label for="cover">Album Cover</label>
                    <input id="cover" type="text" v-model="newAlbum.cover">
                </div>

                <div>
                    <label for="owned">Owned</label>
                    <input id="owned" type="checkbox" v-model="newAlbum.collected">
                </div>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
  </div>
</template>

<style scoped>
  html {
    background-color: #b0b9ff;
  }
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
