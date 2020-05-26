// Sameer Desai
// exhibit03 draft


var fade;
var stateChoice;
var msg;
var cubes = [];
let sound, amplitude, size;

var cols, rows;
var scl = 90;
var w = 0;
var h = 0;
var flying = 0;
var terrain = [];

var slowRotateX = 0;
var slowRotateY = 0;
var angle = 0;

let cam;
var orbitEnable = false;
var xMove = 4;
// var yMove = -0.5;
var camReset = false;
var tPush = false;

let myFont;
// let graphicsText;



function preload() {
  sound = loadSound("lvusm - feelings.mp3");
  myFont = loadFont("Montserrat-Thin.ttf");
}

function setup() {
  frameRate(24);
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  // debugMode();
  // setAttributes('antialias', true);
  setAttributes('alpha', false);
  cam = createCamera();
  //cam.setPosition(0, -400, (height / 2) / tan(30));
  // cam.setPosition(0, 0, (height / 2) / tan(30));


  stateChoice = 0;
  fade = 0;
  msg = "";

  amplitude = new p5.Amplitude();
  w = 2200;
  h = 2200;
  cols = w / scl;
  rows = h / scl;
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }


}

draw = function() {
  var level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 90);

  // background(200,200,255);
  background(0);
    threeText();
// stateChoice = 9;
  if (stateChoice == 9) {

    cam.lookAt(0, 0, 0);
    if (camReset) {
      cam.setPosition(0, -250, (height / 2) / tan(30));
      camReset = false;
    }
    orbitControl(1, 1, 0.1);

    if (!tPush) {
      cam.move(xMove, 0, 0);
    }

    noiseTerrain();
    push();
    translate(-width / 2, -height / 2)
    // var max_cubes = 300;
    var max_cubes = 45;
    if (cubes.length < max_cubes) {
      cubes.push(new Cube());
    }

    for (var i = 0; i < cubes.length; i++) {
      cubes[i].move();
      cubes[i].show(size);

    }

    pop();
    // translate(0,0,0);
    // normalMaterial();
    // sphere(50)
  }
}


// resize canvas if they play with window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  camReset = true;
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
    // if r key is pushed
  } else if (keyCode == 82) {
    camReset = true;
  } else if (keyCode == 84) {
    if (tPush) {
      tPush = false;
    } else {
      tPush = true;
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
