class Enemies {
  constructor(type, yPosition) {
    this.node = document.createElement("img");
    if(type === "voldemort"){
        this.node.src = "./images/voldemort.png";
    }else{
        this.node.src = "./images/umbridge1.png";
    }
    
    
    gameBoxNode.append(this.node);

    this.w = 50;
    this.h = 70;
    this.x = 1100;
    this.y = yPosition

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.speedX = 3;
   
  }

  autoMovement = () => {
    this.x -= this.speedX;
    
    this.node.style.left = `${this.x}px`;
    

    let gameBoxTop = 50;
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
  

}

