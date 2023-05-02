<script setup>
import { RouterLink } from "vue-router"
import ProjectCollection from "../data/project-collection.json"
import ProjectCard from "../components/ProjectCard.vue"

import MoreProjects from "../data/more-projects.json"
import MoreCard from "../components/MoreCard.vue"
// console.log(ProjectCollection);
</script>

<template>
<div class="section-home">
    <div class="page-container">
        <div class="card-container">
        <ProjectCard :key="project.id" 
        v-for="project in ProjectCollection" 
        :id="project.id" 
        :name="project.name" 
        :image="project.image" />
        </div>
    </div>
    <div class="runner">
        <nav>
            <p>UX DESIGN</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>ILLUSTRATION</p>
            <p>PACKAGE DESIGN</p>
            <p>PUBLICATION DESIGN</p>
        </nav>
    </div>
    <h2>more projects</h2>
    <div class="page-container">
        <div class="card-container">
        <MoreCard :key="moreprojects.id" 
        v-for="moreprojects in MoreProjects" 
        :id="moreprojects.id" 
        :name="moreprojects.name" 
        :image="moreprojects.image" />
        </div>
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
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: .5rem;
    margin: 5% 20% 20% 20%; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 8px;
    padding: 0px;
  }

  .runner {
      border-width: 4px 0px 4px 0px;
      border-color: black;
      border-style: solid;
      font-weight: 600;
      margin: 0;
      padding: 0;
  }
  .runner nav {
      padding: 1rem;
  }
  /* section 2: more projects */
  h2 {
      text-align: center;
      font-size: 4rem;
  }

</style>