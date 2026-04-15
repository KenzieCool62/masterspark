words = ["HBD!!!", "Birthday, birthday, birthday, birthday, birthday", "Hello World! (x 14)", "Hello World (since 2012)"]

let state = false
function masterSpark() {
    if (state == false) {
        state = true
        const sound = new Audio()
        sound.src = "assets/master_spark.mp3"
        sound.volume = 1
        sound.currentTime = 0
        
        sound.onloadedmetadata = () => {
            console.log(parseInt(sound.duration))
            setTimeout(() => {
                console.log("done")
                state = false
                console.log(state)
            }, sound.duration * 1000)
        }
        

        let frame = 0
        const image = document.getElementById("frame")
        let interval = setInterval(function() {
            if (frame < 35) {
                image.src = "assets/frames/frame_" + frame + ".jpg"
                if (frame == 6) {
                    sound.play()
                    
                } else {}
                frame++
                console.log(frame)
            } else {
                clearInterval(interval)
                sound.pause()
                createText("HBD!!!")
            }
        }, 100)
    }
}


function createText(text) {
    const label = document.createElement("p")
    label.innerHTML = text
    label.style.position = "fixed"
    const topPos = "40%" /* (screen.availHeight / 2 - parseInt(label.style.height) / 2) + "px" */
    const leftPos = (screen.availWidth / 2 - parseInt(label.style.width) / 2) + "px"
    label.style.top = topPos
    label.style.left = leftPos

    label.style.color = "white"
    label.style.height = "50px"
    label.style.width = "100px"
    label.style.fontFamily = "cursive"
    label.style.fontSize = "xx-large"

    document.body.appendChild(label)
}
