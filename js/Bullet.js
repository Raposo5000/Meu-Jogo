export class Bullet {
  constructor({context, width = 25, height = 7, x, y, speed = 5, color = '#f29a0c'}) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.context = context;
  }

  update() {
    this.x += this.speed;
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
    this.context.closePath();
  }
}

// module.exports = { Bullet };