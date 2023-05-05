<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <div class="page-container">
    <h2>About Me</h2>
    <img :src="`./assets/img/jocelyn.png`" alt="portait featuring Jocelyn Martin" class="project-image" />
    <p>Hi! I'm a designer and illustrator located in Minneapolis, MN. I'm currently completing a Masters in Graphic and Web Design at Minneapolis College of Art and Design. The best way to get in contact is to email me at martinfjocelyn@gmail.com.</p>
    
    <section class="back">
                <h3><RouterLink to="/">back to home</RouterLink></h3>
    </section>
  </div>
</template>

<style scoped>
  .page-container {
        margin: 5% 30%;
    }
  h2 {
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
  }
  h3 {
      font-size: 2rem;
      font-weight: 800;
      text-align: center;
  }
  .project-image {
      display: block;
      width: 300px;
      height: 100%;
      margin: 0 auto 2rem auto;
      padding: 0;
  }
  .back {
      padding-top: 100px;
  }
</style>
