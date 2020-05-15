// Sameer Desai
// exhibit 01 draft

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


function setup() {
  stateChoice = 0;
  fade = 0;
  msg = "";
  sound = loadSound('pandi & lvusm - scope.mp3');
  createCanvas(windowWidth, windowHeight);
  // low framerate to support slower devices
  frameRate(24);
  amplitude = new p5.Amplitude();
  engine = Engine.create();
  world = engine.world;
  boundary.push(new Boundary());
  Engine.run(engine);

}

// click and drag to create circles
function mouseDragged() {
  var max_circles = 300;
  if (circles.length < max_circles) {
    circles.push(new Circle(mouseX, mouseY, random(10, 40) + size));
    // circles radius changes with global size variable
  }
}

function draw() {
  // background gets drawn first before everything else
  background(0);
  oneText();

  if (stateChoice == 8) {

    // variable for volume then remap so instead of 0-1 values we get 0-200 values
    let level = amplitude.getLevel();
    size = map(level, 0, 1, 0, 200);

    // loops through boundary and shows the obj (should always be only 1 obj in array)
    for (var i = 0; i < boundary.length; i++) {
      boundary[i].show();
    }

    //loop thru array to display circles as they get added to array
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
}



// resize canvas if they play with window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // use same temp array apporach with boundary
  var tempBoundary = [];
  for (var i = 0; i < boundary.length; i++) {
    boundary[i].removeFromWorld();
    // get rid of old boundary
  }
  boundary = tempBoundary;
  // then add a new one with recently resized window specs to the now empty array
  boundary.push(new Boundary());
}

// checks for key presses
function keyPressed() {
  // if spacebar pushed toggleSound()
  if (keyCode == 32) { // keyCode for spacebar is 32 wack right
    toggleSound();
    //stateChoice = 5;
  }

  // press f to enter fullscreen
  else if (keyCode == 70) {
    fullscreen(true);
    if (stateChoice == 2) {
      stateChoice = 3;
      toggleSound();
    }
  }
}

// start/pause music
function toggleSound() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
