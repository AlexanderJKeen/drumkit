const boom1 = document.getElementById("boom");
const clap1 = document.getElementById("clap");
const hihat1 = document.getElementById("hihat");
const kick1 = document.getElementById("kick");
const openhat1 = document.getElementById("openhat");
const ride1 = document.getElementById("ride");
const snare1 = document.getElementById("snare");
const tink1 = document.getElementById("tink");
const tom1 = document.getElementById("tom");

const sound = new Audio();
    
document.addEventListener("keydown", event => {

    
    switch(event.key){
        case "q":
            sound.src = './sounds/boom.wav'
            sound.play()

        break;

        case "w":
                sound.src = './sounds/clap.wav'
                sound.play()

        break;

        case "e":
                sound.src = './sounds/hihat.wav'
                sound.play()

        break;

        case "r":
                sound.src = './sounds/kick.wav'
                sound.play()

        break;

        case "t":
                sound.src = './sounds/openhat.wav'
                sound.play()

        break;

        case "y":
                sound.src = './sounds/ride.wav'
                sound.play()

        break;

        case "u":
                sound.src = './sounds/snare.wav'
                sound.play()

        break;

        case "i":
                sound.src = './sounds/tink.wav'
                sound.play()

        break;

        case "o":
                sound.src = './sounds/tom.wav'
                sound.play()

        break;
    }

})

// Play music by mouse click
