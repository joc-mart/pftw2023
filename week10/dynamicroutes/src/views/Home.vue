<script setup>
import { RouterLink } from "vue-router";
import MusicList from "../data/music-list.json";
console.log("Music List", MusicList);
</script>

<template>
    <div class="song-container">
        <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
        <RouterLink :to="'/song/' + song.slug">{{song.title}}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .song-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .song-list-item {
        width: 10%;
        padding: 10px;
        margin: 5px;
        border: 1px solid black;
        border-radius: 4px;
        background: greenyellow;
    }
    .song-list-item a {
        color: black;
    }
    .song-list-item:hover {
        background: black;
        border: 1px solid pink;
    }
    .song-list-item:hover a {
        color: white;
    }
</style>