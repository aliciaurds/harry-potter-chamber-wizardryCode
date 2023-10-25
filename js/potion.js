class Potion {
    constructor() {
      this.node = document.createElement("img");
      this.node.src = "./images/pocionazul.png";
      gameBoxNode.append(this.node);
  
      this.w = 80;
      this.h = 80;
      this.x = 150;
      this.y = -150;
  
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
  
      this.potionSpeed = 3;
    }
    potionMovement = () => {
      this.y += this.potionSpeed;    
      this.node.style.top = `${this.y}px`;
      
    };
  }
  
  