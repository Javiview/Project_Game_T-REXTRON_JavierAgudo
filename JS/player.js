class Player {
  constructor(ctx, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = gameWidth / 6;
    this.height = gameHeight / 5.9;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX = this.gameWidth / 2 - this.width / 2;
    this.posY = (this.gameHeight / 3) * 2.3;

    this.bloqMove = this.gameWidth / 3;
    this.bloqCounter = 0;//Permite Bloqear el movimiento del jugador en los carriles.

    this.keys = keys;
    this.setListeners();
  }

  draw() {
    this.ctx.fillStyle = "silver";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  move() {
      //VACIO
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.LEFT_KEY:
          console.log("IZQUIERDA");
          if(this.bloqCounter === 0 || this.bloqCounter === 1){
          this.posX -= this.bloqMove;
          this.bloqCounter--;}
          break;
        case this.keys.RIGHT_KEY:
          console.log("DERECHA");
          if(this.bloqCounter === 0 || this.bloqCounter === -1){
          this.posX += this.bloqMove;
          this.bloqCounter++;
        }
          break;
      }
    });
  }
}
