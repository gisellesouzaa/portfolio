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

const imageCarousel = document.getElementById("image-carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
const numImages = document.querySelectorAll(".carousel-image").length;

function showImage(index) {
    if (index < 0) {
        index = numImages - 1;
    } else if (index >= numImages) {
        index = 0;
    }

    const translateX = -index * (window.innerWidth * 0.5); // Largura da imagem
    imageCarousel.style.transform = `translateX(${translateX}px)`;
    currentIndex = index;
}

prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

showImage(currentIndex);



