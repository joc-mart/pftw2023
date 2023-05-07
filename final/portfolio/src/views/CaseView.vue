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
    <div class="background">
        <div class="page-container">
            <!-- section 1 -->
            <h2>{{ projectDetails.title }}</h2>
            <div class="description">
                <p>{{ projectDetails.description }}</p>
            </div>
            
            <h4>{{ projectDetails.section1 }}</h4>
            <div class="image-section">
                <img :src="`./assets/img/${projectDetails.image}`" 
                :alt="projectDetails.title"
                class="project-image" />

                <img :src="`./assets/img/${projectDetails.secondimage}`"
                :alt="projectDetails.title"
                class="project-image" />
            </div>

            <!-- Section 2 -->
            <section v-if="projectDetails.id === 1 || projectDetails.id === 3">
                <p>{{ projectDetails.section2 }}</p>
                <img :src="`./assets/img/${projectDetails.thirdimage}`"
                :alt="projectDetails.title"
                class="project-image" />
            </section>

            <!-- Section 3 -->
            <section v-if="projectDetails.id === 1 || projectDetails.id === 2">
                <p> {{ projectDetails.section3 }} </p>
                <div class="image-section">
                    <img :src="`./assets/img/${projectDetails.fourthimage}`" 
                    :alt="projectDetails.title"
                    class="project-image" />

                    <img :src="`./assets/img/${projectDetails.fifthimage}`"
                    :alt="projectDetails.title"
                    class="project-image" />
                </div>
            </section>

            <!-- Section 4 -->
            <section v-if="projectDetails.id === 1">
                <p> {{ projectDetails.section4 }} </p>
                <img :src="`./assets/img/${projectDetails.sixthimage}`"
                    :alt="projectDetails.title"
                    class="project-image" />
            </section>
            
            <!-- section 5 -->
            <section>
                <h4>{{ projectDetails.finalsection }}</h4>
                <p> {{ projectDetails.section5 }} </p>
                <iframe v-if="projectDetails.id === 1 || projectDetails.id === 2" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="560" height="315" :src="`${projectDetails.link}`" allowfullscreen></iframe>
            </section>

            <section class="back">
                <h3><RouterLink to="/">back to home</RouterLink></h3>
            </section>
        </div>
    </div>
</template>

<style scoped>
    .background {
        background-color: #1f1f1f;
        padding: 2rem;
    }
    .page-container {
        margin: 5% 25%;
        color: #fffeee;
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
    h4 {
        text-align: center;
    }
    .project-image {
        display: block;
        width: 500px;
        height: 100%;
        margin: 0 auto 2rem auto;
        padding: 0;
    }
    p {
        margin: 0;
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