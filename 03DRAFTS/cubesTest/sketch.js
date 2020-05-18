// Sameer Desai
// exhibit03 draft
let angle = 0;
var cubes = [];
let sound, amplitude, size;


function preload(){
  sound = loadSound("lvusm - feelings.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  debugMode();
  frameRate(24);
  amplitude = new p5.Amplitude();
}

function draw() {
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 100);
  background(0,255,200);
  orbitControl(1,1,0.5);
  // camera(0,0,(height/2)/tan(30),0,0,0,0,1,0);
  perspective(70,width/height, 10,10000);

  var max_cubes = 3;
  if (cubes.length < max_cubes){
  cubes.push(new Cube());
  }
  // for(var i = 0; i < 2; i++){
    // cubes.push(new Cube(size));

    for (var i = 0; i < cubes.length; i++){
      cubes[i].move();
      cubes[i].show(size);

    }

  // }





  // push();
  // fill(255,0,0);
  // translate(0,0,0);
  // rotateX(90);
  // noStroke();
  // plane(1000,1000);
  // pop();

  // angle += 0.1;
}


// resize canvas if they play with window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

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


// start/pause music
function toggleSound() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
