var b1;

function setup() {
  createCanvas(800, 400);
  b1 = new Ball();
}

function draw() {
  background(200);
  b1.move();
  b1.display();
}

function Ball() {
  this.speed = 10;
  this.masatsu = 0.2;
  this.x = 100;
  this.y = 100;

  this.move = function () {
    this.speed -= this.masatsu;
    this.y += this.speed;
  };
  this.display = function () {
    ellipse(this.x, this.y, 10, 10);
  };
}