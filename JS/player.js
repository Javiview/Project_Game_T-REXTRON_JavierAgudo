class Player {
    constructor(ctx,gameWidth, gameHeight){
        this.ctx = ctx;
        this.width = gameWidth / 6;
        this.height = gameHeight / 5.9;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.posX = (this.gameWidth / 2) - (this.width / 2);
        this.posY = this.gameHeight - 150;



    }

    draw(){

        this.ctx.fillStyle = "silver";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        
    }
}