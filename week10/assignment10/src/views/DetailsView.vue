<script>
    // import { useRoute, RouterLink } from "vue-router"
    // import ProjectCollection from "../data/project-collection.json"
    // const route = useRoute();
    // console.log("route param", this.$route.params);
    // const projectId = this.$route.params.id;
    // const projectDetails = ProjectCollection.find((project) => {
    //     return projectId === project.id;
    // });
</script>

<template>
    <div>
        <div>{{ projectDetails.name }}</div>
        <img :src="`/img/${projectDetails.image}`" 
        :alt="projectDetails.name"
        class="project-image" />

        <div>
            <h3>Description</h3>
            <p>{{ projectDetails.desciption }}</p>
        </div>
    </div>
</template>

<style scoped>
</style>