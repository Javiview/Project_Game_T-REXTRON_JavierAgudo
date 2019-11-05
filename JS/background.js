class Background {
  constructor(ctx, image, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = 0;
    this.posY = 0;

    this.velY = 2; // 2 - La posicion por defecto.

    this.image = new Image();
    this.image.src = image;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.ctx.drawImage(
      this.image,
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
