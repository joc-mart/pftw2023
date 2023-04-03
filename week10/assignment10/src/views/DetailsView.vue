<script setup>
    import { useRoute, RouterLink } from "vue-router"
    import ProjectCollection from "../data/project-collection.json"
    const route = useRoute();
    console.log("route param", route.params);
    const projectId = route.params.id;
    const projectDetails = ProjectCollection.find((project) => {
        return projectId === project.id;
    });
</script>

<template>
    <div>
        <h2>{{ projectDetails.name }}</h2>
        <img :src="`/img/${projectDetails.image}`" 
        :alt="projectDetails.name"
        class="project-image" />

        <div>
            <p>{{ projectDetails.desciption }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>