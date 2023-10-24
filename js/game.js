class Game {
  constructor() {
    this.player = new Player();
    this.wand = null;

    this.enemiesArr = [];
   this.spellArr = [];

    this.timer = 0;
    this.isGameOn = true;
    this.wandAppear();
  }

  enemiesAppear = () => {
    if (this.timer % 180 === 0) {
      let randomPosition = Math.random() * 500;
      let voldemort = new Enemies("voldemort", randomPosition);
      this.enemiesArr.push(voldemort);
    } else if (this.timer % 120 === 0) {
      let randomPosition1 = Math.random() * 400;
      let umbridge = new Enemies("umbridge", randomPosition1 + 150);
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
      let playBoxReduction = 40;
      if (
        eachEnemy.x < this.player.x + this.player.w - playBoxReduction &&
        eachEnemy.x + eachEnemy.w > this.player.x + playBoxReduction &&
        eachEnemy.y < this.player.y + this.player.h - playBoxReduction &&
        eachEnemy.y + eachEnemy.h > this.player.y + playBoxReduction
      ) {
        this.gameOver();
      }
    });
  };
  wandAppear = () => {
    setTimeout(() => {
      this.wand = new Wand();
    }, 10000);
  };
  collisionWand = () => {
    if (
      this.wand &&
      this.wand.x < this.player.x + this.player.w &&
      this.wand.x + this.wand.w > this.player.x &&
      this.wand.y < this.player.y + this.player.h &&
      this.wand.y + this.wand.h > this.player.y
    ) {
      this.wand.node.remove();
    }
  };
  spellAppear = () =>{
    if(this.collisionWand){
      let expelliarmus = new Spell();
      this.spellArr.push(expelliarmus);
    }
  }
  collisionSpell = () =>{
    if (
      this.enemiesArr &&
      this.enemiesArr.x < this.spellArr.x + this.spellArr.w &&
      this.enemiesArr.x + this.enemiesArr.w > this.spellArr.x &&
      this.enemiesArr.y < this.spellArr.y + this.spellArr.h &&
      this.enemiesArr.y + this.wand.h > this.spellArr.y
    ) {
      this.spell.node.remove();
    }
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

  //Iniciar juego
  gameLoop = () => {
    this.player.gravityEffect();
    if (this.wand !== null) {
      this.wand.wandMovement();
    }

    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.autoMovement();
    });
    this.spellArr.forEach((eachSpell)=>{
      eachSpell.spellMovement();
    })
    this.enemiesAppear();
    this.collisionEnemies();
    this.enemiesDisapear();
    this.collisionWand();
    this.collisionSpell();
    this.spellAppear();

    this.timer++; // antes de la recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
