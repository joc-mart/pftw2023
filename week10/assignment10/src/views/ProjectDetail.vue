<script>
import { useRoute, RouterLink } from "vue-router"
import ProjectCollection from "../data/project-collection.json"
const route = useRoute();
console.log("route param", route.params);
const projectId = route.params.id;
const projectDetails = ProjectCollection.find((project) => {
    return projectId === project.id;
})

const image = new URL("../assets/img/project6.png", import.meta.url).href
</script>

<template>
    <div class="page-container">
        <h2>Editorial Illustration</h2>
        <p>This is a project for an Illustration Essentials course at Minneapolis College of Design in Spring 2022. We were asked to create an editorial illustration and a spot illustration for an article. Of the given options, I chose an article titled "Chasing London's Mysterious Flock of Feral Birds" by Nick Hunt.</p>
        <div class="images">
            <img src="img/project6.png" alt="illustration" id="editorial"/>
            <img src="img/project62.png" alt="illustration" id="spot" />
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
    .images {
        display: flex;
        margin-top: 2rem;
        flex-wrap: wrap;
    }
    #editorial {
        max-width: 50%
    }
    #spot {
        max-width: 200px;
        height: 100%;
        align-self: center;
        padding: 4rem;
    }
</style>