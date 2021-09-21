import { Bullet } from "./Bullet.js";

export class Player {
  constructor({
    context,
    x,
    y,
    width,
    height,
    color = "#32a852",
    speed,
    bullets,
    canvasHeight,
    canvasWidth,
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
    this.context = context;
    this.bullets = bullets;
    this.nave = document.getElementById("nave");
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }

  createPlayer() {
    console.log("cria player");
    this.context.beginPath();
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.closePath();
    // adiciona movimento
    const body = document.getElementsByTagName("body");

    body[0].addEventListener("keydown", (event) => {
      this.movePlayer(event.key);
    });
  }

  movePlayer(direction) {
    switch (direction) {
      case "ArrowUp":
        if (this.y > 5) {
          this.y -= this.speed;
        }
        break;
      case "ArrowDown":
        if (this.y < this.canvasHeight - this.height - 5) {
          this.y += this.speed;
        }
        break;
      case "ArrowLeft":
        if (this.x > 5) {
          this.x -= this.speed;
        }
        break;
      case "ArrowRight":
        if (this.x < this.canvasWidth - this.width - 5) {
          this.x += this.speed;
        }
        break;
      case " ":
        this.shoot();
        break;
    }
  }

  shoot() {
    const width = 25;
    const height = 7;
    const positionX = this.x + (width / 2 + this.width / 2);
    const positionY = this.y + (this.height / 2 - height / 2);

    const newBullet = new Bullet({
      context: this.context,
      width,
      height,
      x: positionX,
      y: positionY,
    });
    this.bullets.push(newBullet);
  }

  update() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.drawImage(this.nave, this.x, this.y, this.width, this.height);
  }
}
