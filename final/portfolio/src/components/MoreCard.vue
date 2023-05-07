<script setup>
    import { RouterLink } from "vue-router";
    defineProps(["id", "name", "image", "title", "date"])
</script>

<template>
    <div class="project-card">
        <img class="project-image" :src="`./assets/img/${image}`" :alt="name">
        <div class="bottom">
            <RouterLink class="footer-link" :to="`/moreprojects/${id}`">{{ title }}</RouterLink>
            <RouterLink class="footer-link" :to="`/moreprojects/${id}`">{{ name }}</RouterLink>
            <RouterLink class="footer-link" :to="`/moreprojects/${id}`">{{ date }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .project-card {
        margin: 0 15px 15px 0;
        border: 4px solid #1f1f1f;
        border-radius: 10px;
        max-width: 300px;
    }
    .project-image {
        display: block;
        width: 100%;
        height: 200px;
    }
    .bottom {
        background-color: #1f1f1f;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: .5rem;
    }
    .bottom a {
        color: #fffeee;
        padding: .5rem;
    }
</style>