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
    //this.ctx.fillStyle = "silver";
    //this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    let grd = this.ctx.createLinearGradient(this.posX,this.posY, this.posX + this.width, this.posY + this.height);
      
      // Add colors
      grd.addColorStop(0.000, 'rgba(255, 0, 0, 1.000)');
      grd.addColorStop(0.150, 'rgba(255, 0, 255, 1.000)');
      grd.addColorStop(0.330, 'rgba(0, 0, 255, 1.000)');
      grd.addColorStop(0.490, 'rgba(0, 255, 255, 1.000)');
      grd.addColorStop(0.670, 'rgba(0, 255, 0, 1.000)');
      grd.addColorStop(0.840, 'rgba(255, 255, 0, 1.000)');
      grd.addColorStop(1.000, 'rgba(255, 0, 0, 1.000)');
      this.ctx.fillStyle = grd;
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
