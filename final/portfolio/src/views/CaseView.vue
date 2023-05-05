<script setup>
    import { useRoute, RouterLink } from "vue-router"
    import ProjectCollection from "../data/project-collection.json"
    const route = useRoute();
    const projectId = route.params.id;
    const projectDetails = ProjectCollection.find((project) => {
        return (projectId) === String(project.id);
    });
</script>

<template>
    <div class="page-container">
        <div>
            <h2>{{ projectDetails.title }}</h2>
            <img :src="`./assets/img/${projectDetails.image}`" 
            :alt="projectDetails.title"
            class="project-image" />

            <div class="description">
                <p>{{ projectDetails.description }}</p>
            </div>
            <div class="image-section">
                <img :src="`./assets/img/${projectDetails.secondimage}`"
                :alt="projectDetails.title"
                class="project-image" />

                <img :src="`./assets/img/${projectDetails.thirdimage}`"
                :alt="projectDetails.title"
                class="project-image" />
            </div>
            <section class="back">
                <h3><RouterLink to="/">back to home</RouterLink></h3>
            </section>
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
    h3 {
        font-size: 2rem;
        font-weight: 800;
        text-align: center;
    }
    .project-image {
        display: block;
        width: 500px;
        height: 100%;
        margin: 0 auto 2rem auto;
        padding: 0;
    }
    .back {
        padding-top: 100px;
    }
    .image-section {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>