const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,

  fps: 60,
  framesCounter: 0,

  //Game atributes
  lifes: 3,
  score: 0,
  velScore: 10,
  dificulty: 200,
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
    this.width = 400;
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
      //Rate Obstacles
      if (this.framesCounter % this.dificulty === 0) this.generateObstacles();

      //Colider
      if (this.isCollision()) {
        this.obstacles.shift();
        this.lifes--;
      }
      //Update Score
      if (this.framesCounter % this.velScore === 0) this.score++;

      //Framescounter Reset
      if (this.framesCounter > 1000) this.framesCounter = 0;

      //Game Over
      if (this.lifes === 0) this.gameOver();
    }, 1000 / this.fps);
  },

  reset() {
    //BG
    this.background = new Background(
      this.ctx,
      "IMAGES/Background_dirtroad.png",
      this.width,
      this.height
    );
    //Player
    this.player = new Player(
      this.ctx,
      this.width,
      this.height,
      this.playerKeys
    );
    //Obstacles
    this.obstacles = [];
    //Score
    this.ScoreBoard = new ScoreBoard(
      this.ctx,
      this.score,
      this.width,
      this.vidas
    );
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll() {
    this.background.draw();
    this.player.draw(this.framesCounter);
    this.obstacles.forEach(obstacle => obstacle.draw(this.framesCounter));
    this.ScoreBoard.draw(this.score, this.lifes);
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
    /*colisiones genéricas
    (p.x + p.w > o.x && o.x + o.w > p.x && p.y + p.h > o.y && o.y + o.h > p.y ) */

    return this.obstacles.some(
      obs =>
        this.player.posX + this.player.width > obs.posX &&
        obs.posX + obs.width > this.player.posX &&
        this.player.posY + this.player.height > obs.posY &&
        obs.posY + obs.height - 20 > this.player.posY
    );
  },

  gameOver() {
    clearInterval(this.intervalID);
  }
};
