<script setup>
import { RouterLink } from "vue-router"
import ProjectCollection from "../data/project-collection.json"
import ProjectCard from "../components/ProjectCard.vue"

import MoreProjects from "../data/more-projects.json"
import MoreCard from "../components/MoreCard.vue"
</script>

<template>
<div class="section-home">
    <div class="page-container">
        <div class="card-container">
        <ProjectCard :key="project.id" 
        v-for="project in ProjectCollection" 
        :id="project.id"
        :title="project.title" 
        :name="project.name"
        :date="project.date" 
        :image="project.image" />
        </div>
    </div>
    <div class="runner">
        <nav>
            <p>SKILLS:</p>
            <p>FIGMA</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>ILLUSTRATOR</p>
            <p>INDESIGN</p>
            <p>PROCREATE</p>
        </nav>
    </div>
    <section class="section-more">
        <h2>more projects</h2>
        <div class="page-container">
            <div class="card-container">
            <MoreCard :key="moreprojects.id" 
            v-for="moreprojects in MoreProjects" 
            :id="moreprojects.id"
            :title="moreprojects.title" 
            :name="moreprojects.name" 
            :date="moreprojects.date"
            :image="moreprojects.image" />
            </div>
        </div>
    </section>
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
    justify-content: center;
    align-items: center;
    margin: 40px 8px 60px 8px;
    padding: 0px;
  }

  .runner {
      background-color: rgba(255,254,238,.3);
      border-width: 4px 0px 4px 0px;
      border-color: #1f1f1f;
      border-style: solid;
      font-weight: 600;
      margin: 0;
      padding: 0 2rem;
  }
  .runner nav { 
      padding: 1rem;
  }

  /* more projects */
  .section-more {
      margin: 0;
      padding: 1rem;
  }
  h2 {
      text-align: center;
      font-size: 3rem;
      color: #fffeee;
      text-shadow: -4px 0 #1f1f1f, 0 4px #1f1f1f, 4px 0 #1f1f1f, 0 -4px #1f1f1f;
  }

</style>