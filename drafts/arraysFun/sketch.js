// Sameer Desai
// playing with arrays

var cols = 50;
var rows = 50;
//let dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  fill(0);
  for (var i = 0; i < cols; i++){
    for (var j = 0; j< rows; j++){
      circle(i*(width/cols)+ size,j*(height/rows), 4);
    }
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
