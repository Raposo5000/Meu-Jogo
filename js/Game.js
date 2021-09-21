// const { Bullet } = require("./Bullet");
import { Player } from "./Player.js";

export default function MyGame() {
  const game = new Game();
  game.start();
}

export class Game {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = 600;
    this.height = this.canvas.height = 400;
    document.body.appendChild(this.canvas);

    this.bullets = [];

    this.player = new Player({
      context: this.context,
      width: 40,
      height: 40,
      x: this.width / 2,
      y: this.height / 2,
      speed: 10,
      bullets: this.bullets,
      canvasHeight: this.height,
      canvasWidth: this.width,
    });

    this.interval = null;
  }

  start() {
    //desenha o player na tela
    this.player.createPlayer();
    this.interval = setInterval(() => this.updateGameArea(), 5);
  }

  updateGameArea() {
    this.context.clearRect(0, 0, this.width, this.height);
    // atualiza a posição dos tiros
    this.bullets.forEach((bullet) => {
      bullet.update();
    });

    //atualiza a posição do player
    this.player.update();
  }
}
