const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,

  fps: 60,
  framesCounter: 0,

  playerKeys: {
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    A_KEY: 65,
    D_KEY: 68,
    SPACE: 32
  },

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth / 2.5;
    this.height = window.innerHeight * 0.97;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.start();
  },

  start() {
    this.reset();

    this.intervalID = setInterval(() => {
      this.framesCounter++;

      this.clear();
      this.drawAll();
      this.moveAll();

      this.clearObstacles();
      if (this.framesCounter % 200 === 0) this.generateObstacles();
      if (this.isCollision()) this.gameOver();
      if (this.framesCounter > 1000) this.framesCounter = 0;
      console.log(this.obstacles)
    }, 1000 / this.fps);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(
      this.ctx,
      this.width,
      this.height,
      this.playerKeys
    );
    this.obstacles = [];
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(obstacle => obstacle.draw());
  },

  moveAll() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  },

  generateObstacles() {
    this.obstacles.push(
      new Obstacle(
        this.ctx,
        this.player.width,
        this.player.height,
        this.width,
        this.height
      )
    );
  },
  clearObstacles() {
    this.obstacles = this.obstacles.filter(
      obstacle => obstacle.posY <= this.height
    );
  },

  isCollision() {
    // colisiones genéricas
    // (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y )
    return this.obstacles.some(
      obs => {
      if (this.obs.posX_Random === 1){
        this.player.posX + this.player.width > obs.posX &&
        obs.posX + obs.width > this.player.posX &&
        this.player.posY + this.player.height > obs.posY &&
        obs.posY + obs.height > this.player.posY

    }else if(this.obs.posX_Random === 2){

              this.player.posX + this.player.width > obs.posX_2 &&
              obs.posX_2 + obs.width > this.player.posX &&
              this.player.posY + this.player.height > obs.posY &&
              obs.posY + obs.height > this.player.posY
          

    }else if (this.obs.posX_Random === 3){
              this.player.posX + this.player.width > obs.posX_3 &&
              obs.posX_3 + obs.width > this.player.posX &&
              this.player.posY + this.player.height > obs.posY &&
              obs.posY + obs.height > this.player.posY
          
    }});

   
  },

  gameOver() {
    clearInterval(this.intervalID);
    
  }
};
