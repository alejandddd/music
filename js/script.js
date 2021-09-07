const img = document.getElementById("img")
const audio = document.getElementById("audio")
const play_btn = document.getElementById("play")
const pause_btn = document.getElementById("pause")
const stop_btn = document.getElementById("stop")
const tiempo = document.getElementById("tiempo")
const volume_up_btn = document.getElementById("volueme-up")
const volume_down_btn = document.getElementById("volume-down")
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
    audio.load();
    img.style.animationPlayState = "paused"
})
window.addEventListener('load',()=>{
    tiempo.max = audio.duration
    setInterval(() => {
        tiempo.value = audio.currentTime;
    }, 1000);
})

tiempo.addEventListener("change",()=>{
    audio.currentTime = tiempo.value
})

volume_down_btn.addEventListener("click",()=>{
    audio.volume = audio.volume - 0.1;
})
volume_up_btn.addEventListener("click", () =>{
    audio.volume = audio.volume + 0.01;
})
window.addEventListener("keyup", (event) =>{
    if(event.key == "ArrowUp"){
        audio.volume = audio.volume + 0.1;
    }
    else if(event.key == "ArrowDown"){
        audio.volume = audio.volume - 0.1;
    }
})
