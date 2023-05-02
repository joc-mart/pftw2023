<script setup>
    import { RouterLink } from "vue-router";
    defineProps(["id", "name", "image"])
</script>

<template>
    <div class="project-card">
        <img class="project-image" :src="`./assets/img/${image}`" :alt="name">
        <div class="footer">
            <RouterLink class="footer-link" :to="`/project/${id}`">{{ name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .project-card {
        margin: 0 15px 15px 0;

    }
    .project-image {
        max-width: 250px;
        display: block;
        width: 100%;
    }
    .footer {
        text-align: center;
    }
</style>