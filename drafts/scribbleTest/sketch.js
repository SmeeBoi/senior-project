let squares = [];
let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(100, 200, 220);
  squares.push(new Square(width/2,height/2,80));
  //squares.push(new Square(width/2,height/2 + 50,80));


  for (var i = 0; i < squares.length; i++) {
    background(100, 200, 220);
    squares[i].show();

  }
angle = angle + 2;


}

function Square(x,y,size) {
  var scribble = new Scribble();


  this.show = function() {
    push();
    stroke(255);
    translate(x,y);
    rotate(angle);
    rect(0,0, size,size);
    pop();


  }

}
