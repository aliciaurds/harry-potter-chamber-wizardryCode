window.addEventListener("load",function(){
	document.querySelector("#play").addEventListener("click",sound);
	document.querySelector("#stop").addEventListener("click",muted);
	sound(); //Reproducir nada mas abrir la pagina		
});

function sound(){
	let sonido = document.createElement("iframe");
	sonido.setAttribute("src","./Soundtrack/HarryPotterSoundtrack.mp3");
	sonido.setAttribute("loop", "true"); //repeticion de audio
	document.body.append(sonido);
	document.querySelector("#play").removeEventListener("click",sound);
}

function muted(){
	let iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.querySelector("#play").addEventListener("click",sound);
	}
}