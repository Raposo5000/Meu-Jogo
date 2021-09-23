// const { Bullet } = require("./Bullet");
import { Player } from "./Player.js";
import {  Enemy} from "./Enemy.js"
import { Score } from "./Score.js";

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
    this.enemy = [];

    this.player = new Player({
      context: this.context,
      width: 40,
      height: 40,
      x: this.width / 2,
      y: this.height / 2,
      speed: 12,
      bullets: this.bullets,
      canvasHeight: this.height,
      canvasWidth: this.width,
    });

    this.interval = null;
 
    this.score = new Score(this.context);
  }

  start() {
    //desenha o player na tela
    this.player.createPlayer();
    this.interval = setInterval(() => this.updateGameArea(), 5);

    // cria os inimigos a cada 3 segundos
    setInterval(() => this.createEnemys(), 1200);
  }

  createEnemys() {
    this.enemy.push(new Enemy({
      context: this.context,
      bullets: this.bullets,
      canvasHeight: this.height,
      canvasWidth: this.width,
      enemys: this.enemy,
      id: Math.floor(Math.random() * 1000),
      score: this.score,
    }));
  }

  updateGameArea() {
    this.context.clearRect(0, 0, this.width, this.height);
    // atualiza a posição dos tiros
    this.bullets.forEach((bullet) => {
      bullet.update();
    });

    //atualiza a posição do player
    this.player.update();

    //atualiza a posição do inimigo
    this.enemy.forEach((enemy) => {
      enemy.update();
    });

    this.score.update();
    //desenha score
    // this.context.font = "18px Arial";
    // this.context.fillStyle = "black";
    // this.context.fillText("Pontos: " + this.score, 10, 20);
  }
}
