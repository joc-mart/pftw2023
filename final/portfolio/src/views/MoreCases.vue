<script setup>
    import { useRoute, RouterLink } from "vue-router"
    import MoreProjects from "../data/more-projects.json"
    const route = useRoute();
    const moreprojectsId = route.params.id;
    const moreDetails = MoreProjects.find((moreprojects) => {
        return (moreprojectsId) === String(moreprojects.id);
    });
</script>

<template>
    <div class="page-container">
        <div>
            <h2>{{ moreDetails.title }}</h2>
            <img :src="`./assets/img/${moreDetails.image}`" 
            :alt="moreDetails.title"
            class="project-image" />

            <div class="description">
                <p>{{ moreDetails.description }}</p>
            </div>
            <div class="image-section">
                <img :src="`./assets/img/${moreDetails.secondimage}`"
                :alt="moreDetails.title"
                class="project-image" />

                <img :src="`./assets/img/${moreDetails.thirdimage}`"
                :alt="moreDetails.title"
                class="project-image" />
            </div>
            
            <iframe v-if="moreDetails.id === 7" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" :src="`${moreDetails.link}`" allowfullscreen></iframe>

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
        width: 100%;
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