const img = document.getElementById("img")
const audio = document.getElementById("audio")
const play_btn = document.getElementById("play")
const pause_btn = document.getElementById("pause")
const pause_btn = document.getElementById("stop")
play_btn.addEventListener('click',()=>
{
    audio.play();
    img.style.animationPlayState = "running"
})
pause_btn.addEventListener('click',()=>{
    audio.pause();
    img.style.animationPlayState = "paused"
})
stop_btn.addEventListener('click',()=>{
    audio.pause();
    img.style.animationPlayState = "paused"
})