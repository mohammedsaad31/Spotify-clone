console.log("Welcome to SoundWave");
songindex = 0;
let audioElement = new Audio("/songs/cricket.mp3");
let masterplay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
 let presentSongs = Array.from(document.getElementsByClassName("presentSong"));

let songs = [
    {songName :'cricket rap',filepath : "songs/cricket.mp3" , coverpath : "/covers/cover.webp"},
    {songName :'perfet-ed sheeran',filepath : "/songs/song1.mp3" , coverpath : "/covers/cover.webp"},
    {songName :'cwc19 theme',filepath : "/songs/song2.mp3" , coverpath : "/covers/cover.webp"},
    {songName :'cricket rap',filepath : "songs/cricket.mp3" , coverpath : "/covers/cover.webp"},
]
presentSongs.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
});
//play and pause click
masterplay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
     else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})
//event lisenting
audioElement.addEventListener("timeupdate",()=>{
   
    //updating seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    progressBar.value = progress;
    
    progressBar.addEventListener("change", ()=>{
       audioElement.currentTime = progressBar.value * audioElement.duration/100; 
    }
    )
    
})
// ... your  code ...
// ... your existing code ...

Array.from(document.getElementsByClassName("presentSongPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays(e.target);
    });
});

// ...

const makeAllPlays = (element) => {
    Array.from(document.getElementsByClassName("presentSongPlay")).forEach((element) => {
        element.classList.add("fa-play")
        element.classList.remove("fa-pause")
        })
    };
    Array.from(document.getElementsByClassName("presentSongPlay")).forEach((element) => {
        element.addEventListener("click",(e)=>{
         makeAllPlays()
         songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");  
        audioElement.src = songs[songindex].filepath;
        audioElement.currentTime = 0;
        audioElement.play();  
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    })
//restart icon

const restartIcon = document.querySelector(".fa-arrow-rotate-right");

restartIcon.addEventListener("click", () => {
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    gif.style.opacity = 1;
});

//next song icon
document.getElementById("next").addEventListener("click", ()=>{
if(songs[songindex]>=10){
    songindex = 0
} else{
    songindex += 1;
}
  
audioElement.src = songs[songindex].filepath;
audioElement.currentTime = 0;
audioElement.play();  
masterplay.classList.remove("fa-play");
masterplay.classList.add("fa-pause");
})

//next icon 
document.getElementById("previous").addEventListener("click", ()=>{
    if(songs[songindex]<=0){
        songindex = 0
    } else{
        songindex -= 1;
    }
      
    audioElement.src = songs[songindex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();  
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    })



})







