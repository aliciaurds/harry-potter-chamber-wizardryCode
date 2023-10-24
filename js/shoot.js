class Spell {
    constructor() {
      this.node = document.createElement("img");
      this.node.src = "./images/spell.png";

    this.w = 40;
    this.h = 40;
    this.x = 70;
    this.y = this.y.player/2; //alinear hechizo con el centro del jugador???

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
     
  
      gameBoxNode.append(this.node);
      this.speed = 5; 
    }
  
    spellMovement = () =>{
      this.x += this.speed
      this.node.style.left = `${this.x}px`
    }
}
  
   