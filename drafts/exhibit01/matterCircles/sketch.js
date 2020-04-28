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
var bthick = 100;
//let boundary;
// array for boundary
var boundary = [];
let sound, amplitude, size;

// preload audio file
function preload() {
  sound = loadSound('../files/pandi & lvusm - scope.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // low framerate to support slower devices
  frameRate(24);
  amplitude = new p5.Amplitude();
  engine = Engine.create();
  world = engine.world;
  boundary.push(new Boundary(windowWidth / 2, windowHeight, windowWidth, bthick));
  //boundary = new Boundary();
  // add a Boundary obj to array
  Engine.run(engine);
  //   // options for ground body
  //   var options = {
  //     isStatic: true
  //   }
  //   // creating ground body
  //   ground = Bodies.rectangle(width / 2, height - 50, width, bthick, options);
  //   World.add(world, ground);
  // }

}

// click and drag to create circles
function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY, random(10, 40) + size));
  // circles radius changes with size var
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
    circles[i].show();
    //console.log(circles[i]);
    // shows all parameters for each matter.js body
  }

  // loop thru array backwards to check if a circle is offScreen
  // must loop backwards to avoid skipping
  for (var i = circles.length - 1; i >= 0; i--) {
    if (circles[i].isOffScreen()) {
      // must remove bodies from world, THEN remove them from array
      circles[i].removeFromWorld();
      circles.splice(i, 1);
    }
  }

  // // details for drawing ground
  // // note that rectmode must be CENTER to match with matter.js
  // fill(0);
  // rectMode(CENTER);
  // noStroke();
  // rect(ground.position.x, ground.position.y, windowWidth, bthick);

  //console.log(circles.length, world.bodies.length);
  // just to check that circles and bodies are being remove
  // as they fall off screen
}

// resize canvas if they play with window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (var i = boundary.length - 1; i >= 0; i--) {
    boundary[i].removeFromWorld();
    boundary.splice(i, 1);
    boundary.push(new Boundary(windowWidth / 2, windowHeight, windowWidth, bthick));
  }
  //boundary = new Boundary(windowWidth / 2, windowHeight, windowWidth, bthick);
}

// if spacebar pushed toggleSound()
function keyPressed() {
  // keyCode for spacebar is 32 wack right
  if (keyCode == 32) {
    toggleSound();
  }
}

// start/pause music
function toggleSound() {
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}
