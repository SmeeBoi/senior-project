let myFont;
var ratio;
var welcomeBright = 0;
var fade = 0;
var fade0 = 0;
var textPos;
var stateChoice;
var msg = "";
var msg0 = "";




function preload() {
  myFont = loadFont('./files/Montserrat/Montserrat-Thin.ttf');
}

function setup() {
  frameRate(24);
  createCanvas(windowWidth, windowHeight);
  ratio = width / 15;
  stateChoice = 0;
  textPos = height/2;
}

function draw() {
  background(0);
  // fill(255);
  push();
 stroke(255);
 strokeWeight(random(5));
 //circle(mouseX,mouseY,20);//
 for (var i = 0; i < 10; i++){
   point(random(width), random(height));
 }
 pop();
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
    if (stateChoice == 0) {
      stateChoice = 1;
      toggleSound();
    }
  }
}
