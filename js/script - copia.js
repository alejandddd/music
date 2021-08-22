
const audio = document.getElementById("audio")
const play_btn = document.getElementById("play")
play_btn.addEventListener('click',()=>{
    audio.play();
    image.style.animationPlayState = "running"
})