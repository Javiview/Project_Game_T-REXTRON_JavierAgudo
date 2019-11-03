class Background {
  constructor(ctx, width, height, velY) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.posX = 0;
    this.posY = 0;

    this.velY = 5;

    this.image = new Image();
    this.image.src = "IMAGES/space.jpg";

    this.image2 = new Image();
    this.image2.src = "IMAGES/roads.jpg"
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
