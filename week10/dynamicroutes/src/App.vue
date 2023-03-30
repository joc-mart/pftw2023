<script setup>
import { RouterView, RouterLink } from "vue-router"
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
  html {
    background-color: black;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>
