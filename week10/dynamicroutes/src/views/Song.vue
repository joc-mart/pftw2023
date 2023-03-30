<script setup>
import { useRoute } from "vue-router"
import MusicList from "../data/music-list.json"

const route = useRoute();
console.log(route.params.slug);
const song = MusicList.find(song => {
    return song.slug === route.params.slug;
})
</script>

<template>
    <div class="song-detail" :class="{
    rising: song.rank > song.position.positionLastWeek,
    falling: song.rank < song.position.positionLastWeek,
    same: song.rank === song.position.positionLastWeek}">
        <h1>{{song.rank}}</h1>
        <h2>{{song.title}}</h2>
        <img :src="song.cover" :alt="song.title">
        <p>Artist: {{song.artist}}</p>
    </div>
</template>

<style scoped>
    .song-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10% 30% 10% 30%;
        padding: 0;
    }
    .song-detail img {
        max-width: 20%;
    }
    .song-detail.rising {
        border: 6px solid green;
        border-radius: 20px;
    }
    .song-detail.falling {
        border: 6px solid red;
        border-radius: 20px;
    }
    .song-detail.same {
        border: 6px solid yellow;
        border-radius: 20px;
    }
</style>