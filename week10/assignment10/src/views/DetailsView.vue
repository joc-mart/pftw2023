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
        <h2>hi</h2>
        <div>
            <h2>{{ projectDetails.name }}</h2>
            <img :src="`/img/${projectDetails.image}`" 
            :alt="projectDetails.name"
            class="project-image" />

            <div>
                <p>{{ projectDetails.desciption }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .page-container {
        margin: 5% 20%;
    }
    h2 {
        font-size: 3rem;
        font-weight: 800;
        text-align: center;
    }
    .project-images {
        display: flex;
        margin-top: 2rem;
        flex-wrap: wrap;
    }
</style>