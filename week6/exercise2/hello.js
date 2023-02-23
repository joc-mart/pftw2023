// destructuring
const {createApp} = Vue;

createApp({ // method
    // data method
    data() { // whatever is returned we have access to
        return {
            name: "World",
            snowing: true, // boolean conditional
            drive: "all wheel drive"
        }
    }
}).mount("#myApp"); // #myApp is html element

