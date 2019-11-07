const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,

  fps: 60,
  framesCounter: 0,
  checkObs: 2,

  //Game atributes
  lifes: 1,
  death: false,
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
      // Rate Obstacles & Enemies
      if (this.framesCounter % this.dificulty === 0) this.generateObstacles();
      if (this.framesCounter % 250 === 0) this.generateEnemies();

      //Colider
      if (this.isCollisionObstacles()) {
        this.obstacles.shift();
        this.lifes--;
      }
      if (this.isCollisionEnemies()) {
        this.enemies.shift();
        this.lifes--;
      }
      this.isCollisionLaser();

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
    //Enemies
    this.enemies = [];
    this.enemiesDeath = [];
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
    this.player.draw(this.framesCounter, this.death);
    this.celulaLaser = this.player.celulaLaser;
    this.obstacles.forEach(obstacle => obstacle.draw(this.framesCounter));
    this.enemies.forEach(enemy => enemy.draw(this.framesCounter));
    this.enemiesDeath.forEach(enemyDeath => enemyDeath.draw(this.framesCounter))
    this.ScoreBoard.draw(this.score, this.lifes);
  },

  moveAll() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move());
    this.enemies.forEach(enemy => enemy.move());
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
  generateEnemies() {
    this.noSameRoad();
    this.enemies.push(
      new Enemies(
        this.ctx,
        this.player.width,
        this.player.height,
        this.width,
        this.height,
        this.velDificulty,
        this.checkObs
      )
    );
  },
  

  clearObstacles() {
    this.obstacles = this.obstacles.filter(
      obstacle => obstacle.posY <= this.height
    );
    this.enemies = this.enemies.filter(enemy => enemy.posY <= this.height);
    
  },

  isCollisionObstacles() {
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
  isCollisionEnemies() {
    return this.enemies.some(
      enemy =>
        this.player.posX + this.player.width > enemy.posX &&
        enemy.posX + enemy.width > this.player.posX &&
        this.player.posY + this.player.height > enemy.posY &&
        enemy.posY + enemy.height - 20 > this.player.posY
    );
  },
  //CONSTRUCCION
  isCollisionLaser() {
    this.player.celulaLaser.forEach(laser =>
      this.enemies.forEach(enemy => {
        if (
          laser.posY < enemy.posY + enemy.height / 2 &&
          laser.posX > enemy.posX &&
          laser.posX < enemy.posX + enemy.width
        ) {
          
          let addEnemy = this.enemiesDeath.push(
            new EnemiesDeath(
              this.ctx,
              enemy.posX,
              enemy.posY,
              enemy.width,
              enemy.height
              
            )
           
          );
          
          addEnemy;
          this.enemies.shift();
          this.timeOutDeath = setTimeout(() => {
            this.enemiesDeath.shift();
          }, 200);

          this.score += 10;
          let index = this.celulaLaser.indexOf(laser);
          if (index > -1) {
            this.player.celulaLaser.splice(index, 1);
          }
        }
      })
    );
  },

  gameOver() {
    this.death = true;
    this.timeOut = setTimeout(() => {
      clearInterval(this.intervalID);
    }, 300);
  },

  noSameRoad() {
    if (this.obstacles.lenght === 1 || this.obstacles.lenght === 0) {
      this.checkObs = this.obstacles[0].posX_Random;
    } else {
      this.checkObs = this.obstacles[1].posX_Random;
    }
  }
};
