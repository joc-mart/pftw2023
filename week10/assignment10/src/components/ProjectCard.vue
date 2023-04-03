<script setup>
    import { RouterLink } from "vue-router";
    defineProps(["id", "name", "image"])
</script>

<template>
    <div class="project-card">
        <img class="project-image" :src="`/img/${image}`" :alt="name">
        <div class="footer">
            <RouterLink class="footer-link" :to="`/project/${id}`">{{ name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .project-card {
        max-width: 200px;
        /* border: 2px solid #333; */
        border-radius: 8px;
        margin: 0 10px 10px 0;

    }
    .project-image {
        max-width: 200px;
        display: block;
        width: 100%;
    }
    .footer {
        text-align: center;
    }
</style>