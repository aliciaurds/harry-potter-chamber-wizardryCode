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
	  audio.volume = 0.2;//propiedad audio.volume integrada
	}
  
	audio.play(); //llamar metodo para reproducir
	document.querySelector("#play").removeEventListener("click", playAudio);
	//evitar que se haga clic de nuevo mientras se reproduce
  }
  
  function stopAudio() {
	if (audio) { //verifica si existe
	  audio.pause();//lo pausa
	  audio.currentTime = 0;//reinicia tiempo (propiedad audio.currentTime integrada)
	  document.querySelector("#play").addEventListener("click", playAudio); //vuelve a añador el evento
	}
  }