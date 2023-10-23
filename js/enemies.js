class Enemies {
  constructor(type, yPosition) {
    this.node = document.createElement("img");
    if(type === "voldemort"){
        this.node.src = "./images/voldemort.png";
    }else{
        this.node.src = "./images/umbridge1.png";
    }
    
    
    gameBoxNode.append(this.node);

    this.w = 60;
    this.h = 80;
    this.x = 1100;
    this.y = yPosition

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;

    this.speedX = 2.3;
    //this.speedY = Math.random()*3;
  }

  autoMovement = () => {
    this.x -= this.speedX;
    //this.y += this.speedY;
    
    this.node.style.left = `${this.x}px`;
    //this.node.style.top = `${this.y}px`;
  };
}

