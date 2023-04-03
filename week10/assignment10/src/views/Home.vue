<script setup>
import { RouterLink } from "vue-router"
import ProjectCollection from "../data/project-collection.json"
import ProjectCard from "../components/ProjectCard.vue"

const image = new URL("../assets/img/project6.png", import.meta.url).href

console.log(ProjectCollection);
</script>

<template>
  <div class="page-container">
    <div class="card-container">
      <ProjectCard :key="project.id" 
      v-for="project in ProjectCollection" 
      :id="project.id" 
      :name="project.name" 
      :image="project.image" />
    </div>

  </div>
</template>

<style scoped>
  a {
    text-align: center;
  }
  img {
    width: 200px;
  }
  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: .5rem;
    margin: 5% 20% 20% 20%;
  }

</style>