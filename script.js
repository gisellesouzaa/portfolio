document.querySelector(".hamburguer").addEventListener("click", () =>
document.querySelector(".container").classList.toggle("show-menu")
);

var audio = document.getElementById('audio');
var audioTocando = false;
document.querySelector('.control').onclick = function(){
  if(audioTocando){
        audio.pause();
        audioTocando = false;
        var playButton = document.querySelector('.btPause');
        playButton.className = "btPlay";
        playButton.innerHTML = "<i class='fa-solid fa-volume-high'></i>Ative o som";
    } else {
        audio.play();
        audio.volume = 0.2;
        audioTocando = true;
        var playButton = document.querySelector('.btPlay')
        playButton.className = "btPause";
        playButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>Deslique o som";   
  }
}



