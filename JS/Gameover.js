class Gameover {
  constructor(ctx, gamewidth, gameheight) {
    this.ctx = ctx;
    this.width = gamewidth;
    this.height = gameheight;

    this.imageGO = new Image();
    this.imageGO.src = "IMAGES/GameOver.png";

    
  }
  draw() {
    this.ctx.drawImage(
      this.imageGO,
      0,
      this.height / 2 - this.imageGO.height/2,
      this.width,
      this.imageGO.height
    );
  }
  sound(){
    this.sound = new Audio();
    this.sound.src = "SOUNDS/rexdead.wav"
    this.sound.play();
  }
}
