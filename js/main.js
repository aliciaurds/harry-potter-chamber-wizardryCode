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

  gameOverScreenNode.style.display = "none";
  initialScreenNode.style.display = "flex";
};
const spellEvent = (event) => {
  if (event.button === 0) {
    gameObj.spell.spellMovement();
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

document.addEventListener("mousedown", spellEvent);
resetBtnNode.addEventListener("click", resetGame);
