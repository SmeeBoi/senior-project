var fade;
var stateChoice;
var msg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  stateChoice = 0;
  fade = 0;
  msg = "";
}

function draw() {
  instructions();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed() {
  if (keyCode == 32) { // keyCode for spacebar is 32 wack right
  //  toggleSound();
    stateChoice = 5;
  } else
  if (keyCode == 70) {
    fullscreen(true);
    stateChoice = 1;
  }
}
