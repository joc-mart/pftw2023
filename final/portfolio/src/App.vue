<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <div class="header">
        <img src="../public/assets/img/jmlogo.png"> <RouterLink to="/">Jocelyn Martin</RouterLink>
      </div>
      <div>
        <RouterLink to="/">Portfolio</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </nav>
    <RouterView />
    <footer>
      <nav>
          <p>created by Jocelyn Martin</p>
          <p>martinfjocelyn@gmail.com</p>
      </nav>
  </footer>
  </div>
  
</template>

<style>
  body {
    background-image: url("../public/assets/img/hero.png");
    /* background-size: cover; */
    background-repeat: round;
    background-color: #FFFEEE;
    font-family: 'Lexend Deca', sans-serif;
    color: #1f1f1f;
    margin: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  a {
    color: #1f1f1f;
    text-decoration: none;
    padding: 1rem;
  }
  a:hover {
    color: #684DDB;
  }
  .header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-weight: 600;
    font-size: 1.5rem;
  }
  img {
    width: 100px;
    padding: 0;
  }
  footer {
    /* background-color: #fffeee; */
    padding: 4rem 0 0 0;
    font-size: .8rem;
  }

</style>
