window.addEventListener("load", function () {
	const playButton = document.querySelector("#play");
	const stopButton = document.querySelector("#stop");
  
	playButton.addEventListener("click", playAudio);
	stopButton.addEventListener("click", stopAudio);
	
  });
  
  let audio = null;
  
  function playAudio() {
	if (audio === null) { //para saber si se ha iniciado
	  audio = new Audio("./Soundtrack/HarryPotterSoundtrack.mp3");
	  audio.loop = true; //reproducir audio en bucle
	  audio.volume = 0.1;
	}
  
	audio.play(); //llamar metodo para reproducir
	document.querySelector("#play").removeEventListener("click", playAudio);
  }
  
  function stopAudio() {
	if (audio) {
	  audio.pause();
	  audio.currentTime = 0;
	  document.querySelector("#play").addEventListener("click", playAudio);
	}
  }