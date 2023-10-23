// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let initialScreenNode = document.querySelector("#start-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let resetBtnNode = document.querySelector(".reset-btn");

let gameObj;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  initialScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObj = new Game(); //creando objeto

  gameObj.gameLoop(); //ejecutando la recursion
};
const resetGame = () => {
  gameBoxNode.innerHTML = "";
  if(gameObj){ //si el juego esta ejecutandose
    gameObj.stopGameLoop();
  }
  
  if(!gameObj){
  gameObj = new Game();
  gameObj.gameLoop();
}
gameOverScreenNode.style.display = "none";
initialScreenNode.style.display = "flex";
  
}

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObj.player.jump(); //accedo al objeto, dentro de el al jugador y luego la accion
  }
});
resetBtnNode.addEventListener("click", resetGame);
