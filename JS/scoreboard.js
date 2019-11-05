const ScoreBoard = {
  ctx: undefined,
  score: undefined,
  width: undefined,
  vidas:undefined,

  init: function(ctx, score, width,vidas) {
    this.ctx = ctx;
    this.score = score;
    this.width = width;
    this.vidas =vidas;
  },

  draw: function(score,vidas) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(131,131,131,.8)";
    this.ctx.fillRect(0,0, this.width, 40);
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px sans-serif";
    this.ctx.fillText(`SCORE: ${score}`,15 ,30);
    this.ctx.fillText(`VIDAS: `,this.width/2,30);
    this.ctx.closePath();

    switch (vidas){
      case 3:
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(this.width - 20, 5,10,30);
          this.ctx.fillRect(this.width - 40, 5,10,30);
          this.ctx.fillRect(this.width - 60, 5,10,30);
        break;
      case 2:
          this.ctx.fillStyle = "white";
          this.ctx.fillRect(this.width - 20, 5,10,30);
          this.ctx.fillRect(this.width - 40, 5,10,30);
        break;
      case 1:
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(this.width - 20, 5,10,30);
        break;
    }


  }
};
