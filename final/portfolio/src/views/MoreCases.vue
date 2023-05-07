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
    <div class="background">
        <div class="page-container">
            <h2>{{ moreDetails.title }}</h2>
            <div class="description">
                    <p>{{ moreDetails.description }}</p>
            </div>
            
            <!-- section 1 -->
            <section v-if="moreDetails.id === 6">
                <div>
                    <img :src="`./assets/img/${moreDetails.image}`" 
                    :alt="moreDetails.title"
                    class="project-image" />
                    <p>one</p>
                </div>
                <div>
                    <img :src="`./assets/img/${moreDetails.secondimage}`"
                    :alt="moreDetails.title"
                    class="project-image" />
                    <p>one</p>
                </div>
                
                <img :src="`./assets/img/${moreDetails.thirdimage}`"
                :alt="moreDetails.title"
                class="project-image" />
                <p>one</p>
            </section>

            <!-- section 2 -->
            <section v-if="moreDetails.id === 4 || moreDetails.id === 6">
                <h4>{{ moreDetails.section2 }}</h4>
                <div class="image-section">
                    <img :src="`./assets/img/${moreDetails.fourthimage}`"
                    :alt="moreDetails.title"
                    class="project-image" />
                    <img :src="`./assets/img/${moreDetails.fifthimage}`"
                    :alt="moreDetails.title"
                    class="project-image" />
                </div>
            </section>
            
            <!-- section 3 -->
            <section v-if="moreDetails.id === 4 || moreDetails.id === 5 || moreDetails.id === 6">
                <h4>{{ moreDetails.section3 }}</h4>
                <img :src="`./assets/img/${moreDetails.sixthimage}`"
                :alt="moreDetails.title"
                class="project-image" />
            </section>

            <!-- section 4 -->
            <section v-if="moreDetails.id === 4 || moreDetails.id === 6">
                <h4>{{ moreDetails.section4 }}</h4>
                <div class="image-section">
                    <img :src="`./assets/img/${moreDetails.seventhimage}`"
                    :alt="moreDetails.title"
                    class="project-image" />
                    <img :src="`./assets/img/${moreDetails.eighthimage}`"
                    :alt="moreDetails.title"
                    class="project-image" />
                </div>
            </section>

            <!-- section 5 -->
            <section v-if="moreDetails.id === 5 || moreDetails.id === 6">
                <h4>section5</h4>
                <img :src="`./assets/img/${moreDetails.ninthimage}`"
                :alt="moreDetails.title"
                class="project-image" />
            </section>

            <!-- section 6 -->
            <section v-if="moreDetails.id === 5">
                <h4>section6</h4>
                <img :src="`./assets/img/${moreDetails.tenthimage}`"
                :alt="moreDetails.title"
                class="project-image" />
            </section>

            <!-- section 7 -->
            <section v-if="moreDetails.id === 5">
                <h4>section7</h4>
                <img :src="`./assets/img/${moreDetails.eleventhimage}`"
                :alt="moreDetails.title"
                class="project-image" />
            </section>
            
            <!-- section 8 -->
            <section v-if="moreDetails.id === 5">
                <h4>section8</h4>
                <img :src="`./assets/img/${moreDetails.twelfthimage}`"
                :alt="moreDetails.title"
                class="project-image" />
            </section>
            
            <iframe v-if="moreDetails.id === 7" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" :src="`${moreDetails.link}`" allowfullscreen></iframe>

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
        margin: 5% 30%;
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
        width: 100%;
        margin: 0 auto 2rem auto;
        padding: 0;
        align-self: flex-start;
    }
    .full-image {
        width: 100%;
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