class Game {
  constructor() {
    this.player = new Player();

    this.enemiesArr = [];

    this.timer = 0;
    this.isGameOn = true;
  }

  enemiesAppear = () => {
    if (this.timer % 180 === 0) {
      let randomPosition = Math.random() * 100;

      let voldemort = new Enemies("voldemort", randomPosition);
      this.enemiesArr.push(voldemort);
    } else if (this.timer % 240 === 0) {
      let randomPosition1 = Math.random() * 400;
      let umbridge = new Enemies("umbridge", randomPosition1);
      this.enemiesArr.push(umbridge);
    }
  };

  enemiesDisapear = () => {
    if (this.enemiesArr[0].x < 0) {
      this.enemiesArr[0].node.remove();
      this.enemiesArr.shift();
    }
  };

  collisionEnemies = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      if (
        eachEnemy.x < this.player.x + this.player.w &&
        eachEnemy.x + eachEnemy.w > this.player.x &&
        eachEnemy.y < this.player.y + this.player.h &&
        eachEnemy.y + eachEnemy.h > this.player.y
      ) {
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

 
  //Iniciar juego
  gameLoop = () => {
    this.player.gravityEffect();

    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.autoMovement();
    });
    this.enemiesAppear();
    this.collisionEnemies();
    this.enemiesDisapear();
    

    this.timer++; // antes de la recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
