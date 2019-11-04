class Player {
  constructor(ctx, gameWidth, gameHeight, keys) {
    this.ctx = ctx;
    this.width = gameWidth / 6;
    this.height = gameHeight / 5.5;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX = this.gameWidth / 2 - this.width / 2;
    this.posY = (this.gameHeight / 3) * 2.3;

    this.bloqMove = this.gameWidth / 3;
    this.bloqCounter = 0; //Permite Bloqear el movimiento del jugador en los carriles.

    this.frames = 6;
    this.framesIndex = 0;

    this.lasers = [];

    this.image = new Image();
    this.image.src = "IMAGES/TREX_Sprite_Walk3.png";

    this.keys = keys;
    this.setListeners();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.framesIndex * Math.floor(this.image.width / this.frames),
      0,
      Math.floor(this.image.width / this.frames),
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.clearLasers();
    this.lasers.forEach(laser => laser.draw());
    console.log(this.lasers);
    this.animate(framesCounter);
    // Rectangulo Rainbow
    //   let grd = this.ctx.createLinearGradient(
    //     this.posX,
    //     this.posY,
    //     this.posX + this.width,
    //     this.posY + this.height
    //   );

    // Add colors
    //   grd.addColorStop(0.0, "rgba(255, 0, 0, 1.000)");
    //   grd.addColorStop(0.15, "rgba(255, 0, 255, 1.000)");
    //   grd.addColorStop(0.33, "rgba(0, 0, 255, 1.000)");
    //   grd.addColorStop(0.49, "rgba(0, 255, 255, 1.000)");
    //   grd.addColorStop(0.67, "rgba(0, 255, 0, 1.000)");
    //   grd.addColorStop(0.84, "rgba(255, 255, 0, 1.000)");
    //   grd.addColorStop(1.0, "rgba(255, 0, 0, 1.000)");
    //   this.ctx.fillStyle = grd;
    //   this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 5) this.framesIndex = 0;
    }
  }

  move() {
    this.lasers.forEach(laser => laser.move());
  }

  shoot() {
    this.lasers.push(
      new Laser(this.ctx, this.posX, this.posY, this.width, this.height)
    );
  }
  clearLasers() {
    this.lasers = this.lasers.filter(laser => laser.posY >= -10);
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.LEFT_KEY:
        case this.keys.A_KEY:
          console.log("IZQUIERDA");
          if (this.bloqCounter === 0 || this.bloqCounter === 1) {
            this.posX -= this.bloqMove;
            this.bloqCounter--;
          }
          break;

        case this.keys.RIGHT_KEY:
        case this.keys.D_KEY:
          console.log("DERECHA");
          if (this.bloqCounter === 0 || this.bloqCounter === -1) {
            this.posX += this.bloqMove;
            this.bloqCounter++;
          }
          break;
        case this.keys.SPACE:
          this.shoot();
      }
    });
  }
}
