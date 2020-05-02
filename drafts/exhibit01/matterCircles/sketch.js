// Sameer Desai
// matterCircles exhibit 1 draft
// creating circle bodies that pulse

// module aliases
var Engine = Matter.Engine,
  //Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;


var engine;
var world;
var circles = [];
//var ground;
//boundary thickness must be thick so circles dont pass thru bug
var bthick = 50;
//let boundary;
// array for boundary
var boundary = [];
let sound, amplitude, size;
var max_circles = 300;
var c;



function setup() {
  // global color type variable to change color of circles
  c = color(255);
  sound = loadSound('../files/pandi & lvusm - scope.mp3');
  createCanvas(windowWidth, windowHeight);
  // low framerate to support slower devices
  frameRate(24);
  amplitude = new p5.Amplitude();
  engine = Engine.create();
  world = engine.world;
  boundary.push(new Boundary());
  //boundary = new Boundary();
  // add a Boundary obj to array
  Engine.run(engine);

}

// click and drag to create circles
function mouseDragged() {
  if (circles.length < max_circles) {
    circles.push(new Circle(mouseX, mouseY, random(10, 40) + size));
    // circles radius changes with global size variable
  }
}

function draw() {
  // background gets drawn first before everything else
  background(0);
  // variable for volume then remap so instead of 0-1 values we get 0-200 values
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 200);
  //boundary.show();
  // loops through boundary and shows the obj (should always be only 1 obj in array)
  for (var i = 0; i < boundary.length; i++) {
    boundary[i].show();
  }

  //loop thru array to display circles as they get added to array
  for (var i = 0; i < circles.length; i++) {
    circles[i].show(size);
    //console.log(circles[i]);
    // shows all parameters for each matter.js body
  }

  // create a temp array
  // this loops thru each item in circles
  // if item is good (not offscreen) then add to temp array
  // now temp array has all good items and replaces circles array
  // all the bad items that were offscreen get left behind in the old circles array
  var tempCircles = [];
  for (var i = 0; i < circles.length; i++) {
    if (!circles[i].isOffScreen()) {
      tempCircles.push(circles[i]);
    } else {
      circles[i].removeFromWorld();
    }
  }
  circles = tempCircles;

  //console.log(circles.length, world.bodies.length);
  // just to check that circles and bodies are being removed as they fall off screen
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
  }

  // press f to enter fullscreen
  else if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  }

  // a and d to move through diff colors
  // a = 65 and d = 68






}


// start/pause music
function toggleSound() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
