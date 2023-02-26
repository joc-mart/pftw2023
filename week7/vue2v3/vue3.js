// Vue2 vs vue3

// vue 3
const { createApp } = Vue;
createApp ({
    data () {
        return {
            version: "3"
        }
    }
}).mount("#myApp");

// is the same as: vue 2
/* new Vue({
    el: "#myApp",
    data: {
        version: "2"    // this part is the same
    }
})
*/
