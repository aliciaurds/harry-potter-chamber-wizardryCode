class Game {
  constructor() {
    this.player = new Player();

    this.enemiesArr = [];

    this.timer = 0;
  }

  enemiesAppear = () => {
    if (this.timer % 180 === 0) {
      let randomPosition = Math.random() * 500;

      let voldemort = new Enemies("voldemort", randomPosition);
      this.enemiesArr.push(voldemort);

      let umbridge = new Enemies("umbridge", randomPosition + 500);
      this.enemiesArr.push(umbridge);
    }
  };

  //Iniciar juego
  gameLoop = () => {
    this.player.gravityEffect();

    this.enemiesArr.forEach((eachEnemy) => {
      eachEnemy.autoMovement();
    });
    this.enemiesAppear();

    this.timer++; //añadir esto siempre mejor antes de la recursion
    requestAnimationFrame(this.gameLoop);
  };
}
