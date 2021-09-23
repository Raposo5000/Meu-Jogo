export class Enemy {
  constructor({ context, bullets, canvasWidth, canvasHeight, enemys, id, score }) {
    this.x = 601;
    this.y = Math.floor(Math.random() * (canvasHeight - 30));
    this.speed = 2;
    this.context = context;
    this.bullets = bullets;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.destroyed = false;
    this.allEnemys = enemys;
    this.id = id;
    this.score = score;
  }

  createEnemy() {
    this.context.beginPath();
    this.context.fillRect(this.x, this.y, 30, 30);
    this.context.closePath();
  }

  update() {
    if (this.destroyed === false) {
      this.colisionDetection();
      this.context.beginPath();
      this.context.fillRect((this.x -= this.speed), this.y, 30, 30);
      this.context.closePath();
    }
  }

  destroy() {
    this.context.clearRect(this.x, this.y, 30, 30);
    this.destroyed = true;
    this.allEnemys = this.allEnemys.filter(enemy => enemy.id !== this.id);
    this.score.addScore(1);
  }

  colisionDetection() {
    for (let i = 0; i < this.bullets.length; i++) {
      if (
        this.x < this.bullets[i].x + 10 &&
        this.x + 30 > this.bullets[i].x &&
        this.y < this.bullets[i].y + 10 &&
        this.y + 30 > this.bullets[i].y
      ) {
        this.bullets.splice(i, 1);
        this.destroy();
      }
    }
  }
}
