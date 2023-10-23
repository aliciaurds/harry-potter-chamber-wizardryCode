class Player {
  constructor() {
    //crear node
    this.node = document.createElement("img");
    this.node.src = "./images/harry-potter-broom.png";
    gameBoxNode.append(this.node);

    //dimensiones
    this.w = 200;
    this.h = 220;
    this.x = 70;
    this.y = 250;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.gravitySpeed = 3;
    this.jumpSpeed = 40;

    
  }

  gravityEffect = () => {
    this.y += this.gravitySpeed; //actualiza value y añade velocidad
    this.node.style.top = `${this.y}px`; //actualiza dom
    let gameBoxTop = -50;
    let gameBoxBottom = 500;

    if (this.y <= gameBoxTop) {
      this.y = gameBoxTop;
      this.node.style.top = `${this.y}px`;
    }
    if (this.y >= gameBoxBottom) {
      this.y = gameBoxBottom;
      this.node.style.top = `${this.y}px`;
    }
  };

  jump = () => {
    this.y -= this.jumpSpeed;
    //la "y" va hacia abajo, si queremos que vaya hacia arriba tiene que ser "-"
    this.node.style.top = `${this.y}px`;
  };
}