class Wand {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/varita.png";
    gameBoxNode.append(this.node);

    this.w = 60;
    this.h = 60;
    this.x = 150;
    this.y = -150;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.wandSpeed = 3;
  }
  wandMovement = () => {
    this.y += this.wandSpeed;    
    this.node.style.top = `${this.y}px`;
    
  };
}