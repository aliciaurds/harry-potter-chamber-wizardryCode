// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let initialScreenNode = document.querySelector("#start-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let resetBtnNode = document.querySelector(".reset-btn");
let spellButton = document.querySelector("#spell-button");
let scoreNode = document.querySelector("#score");

let gameObj;
let spellBtnPressed= true; //verificar si esta pulsado el boton

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  initialScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game(); //creando objeto
 
  gameObj.gameLoop(); //ejecutando la recursion

};
const resetGame = () => {
  gameBoxNode.innerHTML = "";
  gameOverScreenNode.style.display = "none";
  initialScreenNode.style.display = "flex";
  spellEnabled = false;
};
const spellEvent = () => {
  
  if (gameObj !== undefined && gameObj.isGameOn === true && spellBtnPressed === true) {
    
    gameObj.spellAppear();
    
  }
};
const jumpEvent = (event) => {
  if (event.code === "Space") {
    gameObj.player.jump(); 
  }
  
};



// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
document.addEventListener("keydown", jumpEvent);
resetBtnNode.addEventListener("click", resetGame);
spellButton.addEventListener("mousedown", () => {
  spellPressed = false; // Cuando el botón se mantiene pulsado, marca como "true"
  spellEvent(); // Llama a la función de hechizo inmediatamente al hacer clic
});

spellButton.addEventListener("mouseup", () => {
  spellPressed = true; // Cuando se suelta el botón, marca como "false"
});
