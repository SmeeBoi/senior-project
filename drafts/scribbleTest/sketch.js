
function setup() {
  createCanvas(400, 400);

  rectMode(CENTER);
}

function draw() {
  background(0);
  // scale(2);
  rect(10,10,20,10);

  push();
  translate()
  scale(2);
  fill(255,0,0);
  rect(20,20,20,10);
  pop();



}
