class Background {
  constructor(ctx, width, height,) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = 0;
    this.posY = 0;

    this.velY = 2; // 2 - La posicion por defecto.

    this.image2 = new Image();
    this.image2.src = "IMAGES/BG_prueba.png"
  }

  draw() {
    this.ctx.drawImage(
      this.image2,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.image2,
      this.posX,
      this.posY - this.height,
      this.width,
      this.height
    );
  }

  move() {
    this.posY += this.velY;

    if (this.posY >= this.height) this.posY = 0;
  }
}
