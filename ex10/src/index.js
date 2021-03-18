function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },

            gold: true
        },

        002: {
            // Add a record here
            artist: "Carla Morrison",
            title: "Disfruto audioiko",
            release_year: 2018,
            id: 002,
            formats: {
                1: "mp3",
                2: "videospot",
                3: "studiocover"
            },
            gold: false
        }
    };
    return myMusic;
 }

 myFunction()[2];

 console.log(myFunction()[2]);
 module.exports = myFunction;