const { createApp } = Vue;
createApp({
    data () {
        return {
            newAlbumObj: {
                name: "",
                artist: "",
                year: null,
                genre: "", 
                cover: "",
                collected: false,
            },

            albums: [
                {name: "Carrie & Lowell",
                artist: "Sufjan Stevens",
                year: 2015,
                genre: "Indie", 
                cover: "img/carrienlowell.png",
                collected: true},

                {name: "Growing Pains",
                artist: "Sammy Copley",
                year: 2021,
                genre: "Pop", 
                cover: "img/growingpains.jpg",
                collected: false},

                {name: "Heart-Shaped Leaves",
                artist: "Super Saturated Sugar Strings",
                year: 2014,
                genre: "Folk", 
                cover: "img/heartshaped.jpg",
                collected: true},

                {name: "All Their Many Miles",
                artist: "Super Saturated Sugar Strings",
                year: 2018,
                genre: "Folk", 
                cover: "img/manymiles.jpg",
                collected: true},

                {name: "The New Abnormal",
                artist: "The Strokes",
                year: 2020,
                genre: "Indie Rock", 
                cover: "img/newabnormal.jpg",
                collected: false},

                
            ]
        }

    },

    methods: {
        submitHandler() {
            console.log('submitted');
            this.albums = this.albums.concat(this.newAlbumObj);
            this.resetForm();
            
        },
        resetForm() {
            this.newAlbumObj = {
                name: "",
                artist: "",
                year: null,
                genre: "", 
                cover: "",
                collected: false,
            };
        },
        deleteItem: (album) {
            this.albums = this.albums.filter(albums() {
                return arrayAlbum.name !== album.name;
            })
        }

    }

}).mount("#myApp");