console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('Shiv_ka_vandan.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');


let songs=
[
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},   
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},
    {songName:"Ram Aayenge", filePath:'song/Ram Aayenge.mp3', coverPath:"covers/Ram Aayenge.jpg"},

    
]
masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>
    {
        console.log('timeupdate');
        progress=parseInt(audioElement.currentTime/audioElement.duration*100);
        console.log(progress);
        myProgressBar.value=progress;
    }
)
   myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}
)

