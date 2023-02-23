const {createApp} = Vue; // createApp = Vue.createApp // object destrucring

Vue.createApp({
    data() {
        return {
            name: "Ken",
            age: 52
        }
    }
}).mount("#myVueApp");

