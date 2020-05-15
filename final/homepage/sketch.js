var ratio;
var fade = 0;
var fade0 = 0;
var msg = "";
var stateChoice;

function setup() {
  frameRate(24);
  createCanvas(windowWidth, windowHeight);
  ratio = width / 15;
  stateChoice = 0;
  rectMode(CENTER);
}

function draw() {
  background(0);
  textState();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ratio = width / 15;
}

function keyPressed() {
  // press f to enter fullscreen
  if (keyCode == 70) {
    fullscreen(true);
  }
}
