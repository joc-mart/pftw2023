<script setup>
    import MoreProjects from "..data/more-projects.json"
    const route = useRoute();
    const moreprojectsId = route.params.id;
    const moreDetails = MoreProjects.find((moreprojects) => {
        return (moreprojectsId) === String(moreprojects.id);
    });
</script>

<template>
    <div class="page-container">
        <div>
            <h2>{{ moreDetails.name }}</h2>
            <img :src="`./assets/img/${moreDetails.image}`" 
            :alt="moreDetails.name"
            class="project-image" />

            <div class="description">
                <p>{{ moreDetails.description }}</p>
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