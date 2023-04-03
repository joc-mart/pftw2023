<script setup>
    import { useRoute, RouterLink } from "vue-router"
    import ProjectCollection from "../data/project-collection.json"
    const route = useRoute();
    console.log("route param", route.params);
    const projectId = route.params.id;
    const projectDetails = ProjectCollection.find((project) => {
        return (projectId) === String(project.id);
    });
    console.log(projectDetails);

</script>

<template>
    <div class="page-container">
        <div>
            <h2>{{ projectDetails.name }}</h2>
            <img :src="`/img/${projectDetails.image}`" 
            :alt="projectDetails.name"
            class="project-image" />

            <div class="description">
                <p>{{ projectDetails.description }}</p>
            </div>
        </div>
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
    .project-image {
        display: block;
        max-width: 500px;
        height: 100%;
        margin: 0 auto 2rem auto;
        padding: 0;
    }
</style>