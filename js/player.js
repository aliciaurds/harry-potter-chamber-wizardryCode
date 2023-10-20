class Player{

    constructor(){

        //crear node
        this.node = document.createElement("img");
        this.node.src = "./images/harry-potter-broom.png"
        gameBoxNode.append(this.node)

        //dimensiones
        this.w = 250; 
        this.h = 300; 
        this.x = 70; 
        this.y = 100;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
    
        






    }

}