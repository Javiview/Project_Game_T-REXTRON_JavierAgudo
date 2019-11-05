class Player {
  constructor(ctx, gameWidth, gameHeight, keys) {
    this.ctx = ctx;

    this.width = gameWidth / 6;
    this.height = gameHeight / 5;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.posX = this.gameWidth / 2 - this.width / 2;
    this.posY = (this.gameHeight / 3) * 2.3;

    this.bloqMove = this.gameWidth / 3;
    this.bloqCounter = 0; // Railway Bloq.

    this.frames = 6; //sprites
    this.framesIndex = 0;

    this.rightFrame = false; // Anim. right
    this.leftFrame = false; //Anim. left

    this.image = new Image();
    this.image.src = "IMAGES/TREX_Sprite_Walk3.png";

    this.imageDer = new Image();
    this.imageDer.src = "IMAGES/right_TREX.png";

    this.imageIzq = new Image();
    this.imageIzq.src = "IMAGES/left_TREX.png";

    this.celulaLaser = [];

    this.keys = keys;
    this.setListeners();
  }

  draw(framesCounter) {
    if (this.rightFrame === true) {
      this.ctx.drawImage(
        this.imageDer,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
      this.timeOut = setTimeout(() => {
        this.rightFrame = false;
      }, 100);
    } else if (this.leftFrame === true) {
      this.ctx.drawImage(
        this.imageIzq,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
      this.timeOut = setTimeout(() => {
        this.leftFrame = false;
      }, 100);
    } else {
      this.ctx.drawImage(
        this.image,
        this.framesIndex * Math.floor(this.image.width / this.frames),
        0,
        Math.floor(this.image.width / this.frames),
        this.image.height - 1,
        this.posX,
        this.posY,
        this.width,
        this.height
      );
    }

    this.clearLasers();
    this.celulaLaser.forEach(laser => laser.draw());
    this.animate(framesCounter);
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 5) this.framesIndex = 0;
    }
  }

  move() {
    this.celulaLaser.forEach(laser => laser.move());
  }

  shoot() {
    this.celulaLaser.push(
      new Laser(this.ctx, this.posX, this.posY, this.width, this.height)
    );
  }

  clearLasers() {
    this.celulaLaser = this.celulaLaser.filter(laser => laser.posY >= -10);
  }

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.LEFT_KEY:
        case this.keys.A_KEY:
          this.leftFrame = true;

          if (this.bloqCounter === 0 || this.bloqCounter === 1) {
            this.posX -= this.bloqMove;
            this.bloqCounter--;
          }
          break;

        case this.keys.RIGHT_KEY:
        case this.keys.D_KEY:
          this.rightFrame = true;

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
