class Game {
  constructor() {
    this.player = new Player();
    this.wand = null;

    this.enemiesArr = [];
    this.spellArr = [];

    this.difficultySpeed = 3;

    this.timer = 0;
    this.isGameOn = true;
    this.spellEnabled = false;
    this.wandAppear();
    this.score = 0;
    this.scoreNode = document.querySelector("#score");
    this.highScore = localStorage.getItem("highScore") || 0;
    this.highScoreNode = document.querySelector("#high-score");
    this.highScoreNode.innerText = `HIGH SCORE: ${this.highScore}`;
  }

  fasterEnemies = () => {
    if (this.timer % 900 === 0) {
      this.difficultySpeed++;
    }
  };

  enemiesAppear = () => {
    if (this.timer % 120 === 0) {
      let randomPosition = Math.random() * 500;
      let voldemort = new Enemies(
        "voldemort",
        randomPosition,
        this.difficultySpeed
      );
      this.enemiesArr.push(voldemort);
    } else if (this.timer % 60 === 0) {
      let randomPosition1 = Math.random() * 500;
      let umbridge = new Enemies(
        "umbridge",
        randomPosition1 + 150,
        this.difficultySpeed
      );
      this.enemiesArr.push(umbridge);
    }
  };

  enemiesDisapear = () => {
    if (this.enemiesArr.length !== 0) {
      if (this.enemiesArr[0].x < 0) {
        this.enemiesArr[0].node.remove();
        this.enemiesArr.shift();
      }
    }
  };

  collisionEnemies = () => {
    this.enemiesArr.forEach((eachEnemy) => {
      let playBoxReduction = 30;
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
    }, 15000);
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
      this.spellEnabled = true;
    }
  };

  spellAppear = () => {
    if (this.spellEnabled) {
      // si hay colision con varita
      let expelliarmus = new Spell(this.player.x, this.player.y); // posicion de player en shoot.js
      this.spellArr.push(expelliarmus); //agregar al array
    }
  };

  collisionSpell = () => {
    this.spellArr.forEach((spell, spellIndex) => {
      //recorrer ambos arrays en bucle, 1º elementos spell y luego enemies
      this.enemiesArr.forEach((enemy, enemyIndex) => {
        if (
          //si existe colision
          spell.x < enemy.x + enemy.w &&
          spell.x + spell.w > enemy.x &&
          spell.y < enemy.y + enemy.h &&
          spell.y + spell.h > enemy.y
        ) {
          spell.node.remove(); //se quita el spell
          enemy.node.remove(); // se quita el enemigo
          this.spellArr.splice(spellIndex, 1); //lo elimina del ARR
          this.enemiesArr.splice(enemyIndex, 1);
        }
      });
    });
  };

  calculateTime = () => {
    return Math.floor(this.timer / 60); //aumenta la puntuacion cada segundo
  };
  scoreChanges = () => {
    let timeScore = this.calculateTime() * Math.floor(Math.random() * 10);

    if (timeScore > this.score) {
      this.score = timeScore;
      this.scoreNode.innerText = `SCORE: ${this.score}`;
    }
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.highScoreNode.innerText = `HIGH SCORE: ${this.highScore}`;
      localStorage.setItem("highScore", this.highScore);
    }
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    playHermione();
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
    this.spellArr.forEach((eachSpell) => {
      eachSpell.spellMovement();
    });

    this.fasterEnemies();
    this.enemiesAppear();
    this.collisionEnemies();
    this.enemiesDisapear();
    this.collisionWand();
    this.collisionSpell();
    this.scoreChanges();

    this.timer++; // antes de la recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
