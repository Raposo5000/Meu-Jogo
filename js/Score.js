export class Score {
  constructor(context) {
    this.context = context;
    this.score = 0;
    this.text = "Pontos: ";
    this.font = "20px Arial";
    this.color = "black";
    this.x = 6;
    this.y = 22;
  }

  addScore(points){
    this.score += points;
  }

  update(){
    this.context.font = this.font;
    this.context.fillStyle = this.color;
    this.context.fillText(this.text + this.score, this.x, this.y);
  }
}