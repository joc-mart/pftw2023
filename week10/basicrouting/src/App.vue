<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to ="/">Home</RouterLink> |
      <RouterLink to ="/alpaca">Alpacas</RouterLink> |
      <RouterLink to ="/llama">Llamas</RouterLink>
    </nav>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>    
</template>

<style>
  html {
    font-size: 16px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  body, #app {
    margin: 0;
    padding: 0;
  }
  nav {
    width: 100%;
    height: 45px;
    background: #dda5df;
    color: white;
    text-align: center;
  }
  nav a, nav a:hover, nav a:link, nav a:active, nav a:visited {
    color: rgb(35, 38, 70);
    font-weight: 700;
    font-size: 24px;
    line-height: 1.75;
    text-decoration: none;
  }
  nav a.router-link-active {
    text-decoration: underline;
    color: white;
  }
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .container h1 {
    text-align: center;
    font-size: 48px;
  }
  .container p, .container h3 {
    width: 500px;
    margin: auto;
    padding-bottom: 1rem;
  }
  .container img {
    display: block;
    max-width: 20%;
    margin: 20px auto 20px;
  }
</style>