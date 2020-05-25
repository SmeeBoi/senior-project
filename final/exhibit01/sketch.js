var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundary = [];
let sound, amplitude, size;
var fade;
var stateChoice;
var msg;
var ratio;


function preload() {
  sound = loadSound('pandi & lvusm - scope.mp3');
}

function setup() {
  // noCursor();
  stateChoice = 0;
  fade = 0;
  msg = "";
  createCanvas(windowWidth, windowHeight);
  ratio = height / 15;
  // low framerate to support slower devices
  frameRate(24);
  amplitude = new p5.Amplitude();
  engine = Engine.create();
  world = engine.world;
  boundary.push(new Boundary());
  Engine.run(engine);

}

function mouseDragged() {
  var max_circles = 300;
  if (circles.length < max_circles) {
    circles.push(new Circle(mouseX, mouseY, random(10, 40) + size));
  }
}

function draw() {
  background(0);
  oneText();
  if (stateChoice >= 6) {
    let level = amplitude.getLevel();
    size = map(level, 0, 1, 0, 200);

    for (var i = 0; i < circles.length; i++) {
      circles[i].show(size);
    }

    var tempCircles = [];
    for (var i = 0; i < circles.length; i++) {
      if (!circles[i].isOffScreen()) {
        tempCircles.push(circles[i]);
      } else {
        circles[i].removeFromWorld();
      }
    }
    circles = tempCircles;
  }

 //  push();
 // // noStroke();
 // // fill(255);
 // noFill();
 // stroke(255);
 // circle(mouseX, mouseY, 10);
 // pop();



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ratio = height / 15;
  var tempBoundary = [];
  for (var i = 0; i < boundary.length; i++) {
    boundary[i].removeFromWorld();
  }
  boundary = tempBoundary;
  boundary.push(new Boundary());
}

function keyPressed() {
  if (keyCode == 32) {
    toggleSound();
  } else if (keyCode == 70) {
    fullscreen(true);
    if (stateChoice == 2) {
      stateChoice = 3;
      toggleSound();
    }
  }
}

function toggleSound() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
