window.addEventListener("load", function () {
  const playButton = document.querySelector("#play");
  const stopButton = document.querySelector("#stop");
  const shootBtn = this.document.querySelector("#spell-button");

  playButton.addEventListener("click", playAudio);
  stopButton.addEventListener("click", stopAudio);
  shootBtn.addEventListener("click", playShootBtn);
});

let isSpacePressed = false; //la barra espaciadora me activaba el sonido
window.addEventListener("keydown", function (e) {
  //controlador de eventListener al presionar una tecla (en este caso la barra espaciadora me daba problemas con la reproduccion audio)
  if (e.key === " ") {
    e.preventDefault();
    if (!isSpaceBarDown) {
      toggleSpellAudio();
      isSpacePressed = true; // Marcar que la barra espaciadora está presionada
    }
  }
});

window.addEventListener("keyup", function (e) {
  if (e.key === " ") {
    isSpacePressed = false; // Restablecer el estado cuando se suelta la barra espaciadora
  }
});

let audio = null;
let audioSpell = null;
let audioLeviosa = null;

function playAudio() {
  if (audio === null) {
    //para saber si se ha iniciado
    audio = new Audio("./Soundtrack/HarryPotterSoundtrack.mp3");
    audio.loop = true; //reproducir audio en bucle
    audio.volume = 0.2; //propiedad audio.volume integrada
  }

  audio.play(); //llamar metodo para reproducir
  playButton.removeEventListener("click", playAudio);
  //evitar que se haga clic de nuevo mientras se reproduce
}

function stopAudio() {
  if (audio) {
    //verifica si existe
    audio.pause(); //lo pausa
    audio.currentTime = 0; //reinicia tiempo (propiedad audio.currentTime integrada)
    playButton.addEventListener("click", playAudio); //vuelve a añador el evento
  }
}
function playShootBtn() {
  if (audioSpell && !audioSpell.paused) {
    //si existe y no esta en pausa, se pausa y se reinicia
    audioSpell.pause();
    audioSpell.currentTime = 0;
  } else {
    audioSpell = new Audio("./Soundtrack/Expelliarmus.mp3"); //si no existe o no esta en pausa se reproduce ela audio
    audioSpell.volume = 0.1;
    audioSpell.play();
  }
}

function playHermione() {
  if (audioLeviosa === null) {
    audioLeviosa = new Audio("./Soundtrack/Leviosa.mp3"); // Ruta al segundo archivo de audio
    audioLeviosa.volume = 0.1; // Ajusta el volumen según sea necesario
  }

  audioLeviosa.play();
}
