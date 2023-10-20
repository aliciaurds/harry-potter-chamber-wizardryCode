class Game {
    constructor(){
        this.player = new Player()







        this.timer = 0;

    }




   //Iniciar juego
    gameLoop = ()=>{
        this.timer++



        requestAnimationFrame(this.gameLoop)
    }
}