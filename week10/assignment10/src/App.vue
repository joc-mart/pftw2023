<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <div class="header">
        <RouterLink to="/">Jocelyn Martin</RouterLink>
      </div>
      <div>
        <RouterLink to="/">Portfolio</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
  html {
    background-color: #F9F9ED;
    font-family: 'Lexend Deca', sans-serif;
    color: black;
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  a {
    color: black;
    text-decoration: none;
    padding: 1rem;
  }
  a:hover {
    border: 1px solid black;
  }
  .header {
    font-weight: 600;
    font-size: 1.5rem;
  }

</style>
