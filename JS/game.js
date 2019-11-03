const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,

  fps: 60,
  framesCounter: 0,

  score: 0,
  velScore: 10,
  dificulty: 250,
  velDificulty: 1,

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

      if (this.framesCounter % this.dificulty === 0) this.generateObstacles();

      if (this.isCollision()) this.gameOver();

      if (this.framesCounter % this.velScore === 0) this.score++;
      if (this.score === 100) this.velDificulty += 0.1;
      if (this.framesCounter > 1000) {
        this.dificulty -= 10;
        this.framesCounter = 0;
      }
      console.log("DIF " + this.dificulty);
      console.log("VELO " + this.velDificulty);

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
    (this.obstacles = []), ScoreBoard.init(this.ctx, this.score);
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(obstacle => obstacle.draw());
    ScoreBoard.draw(this.score);
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
        this.height,
        this.velDificulty
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
      obs =>
        this.player.posX + this.player.width > obs.posX &&
        obs.posX + obs.width > this.player.posX &&
        this.player.posY + this.player.height > obs.posY &&
        obs.posY + obs.height > this.player.posY
    );
  },

  gameOver() {
    clearInterval(this.intervalID);
  }
};
