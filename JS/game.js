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

      this.clearObstacles()
    console.log(this.obstacles)
    if(this.framesCounter % 300 === 0) this.generateObstacles();
    if(this.framesCounter > 1000) this.framesCounter = 0;
    }, 1000 / this.fps);
  },

  reset() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.player = new Player(this.ctx, this.width, this.height, this.playerKeys);
    this.obstacles = [];
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(obstacle => obstacle.draw())
  },

  moveAll() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move())
  },

  generateObstacles: function() {
    this.obstacles.push(new Obstacle(this.ctx, 100, 100 , this.width, this.height))
  },
  clearObstacles: function() {
    this.obstacles = this.obstacles.filter(obstacle => (obstacle.posY <= this.height))
  }
};
