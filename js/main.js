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
const spellEvent = (event) => {
  
  if (gameObj !== undefined && gameObj.isGameOn === true && gameObj.spellEnabled === true && event.button === 0) {
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
resetBtnNode.addEventListener("click", resetGame);
spellButton.addEventListener("click", spellEvent);

