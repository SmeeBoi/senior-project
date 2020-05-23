// Sameer Desai
// exhibit03 draft
let angle = 0;
var cubes = [];
let sound, amplitude, size;

var terrainValues = [];
// we later make it a 2D array
var mult = 50;
var xoff = 0;
var yoff = 0;
var increment = 0.07;
var flying = 0;
var expanse = 0;


function preload(){
  sound = loadSound("lvusm - feelings.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  debugMode();
  frameRate(24);
  amplitude = new p5.Amplitude();
  expanse = 100;
}

function draw() {
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 20);
  // background(0,255,200);
  background(0);
  orbitControl(1,1,0.5);
  // camera(0,0,(height/2)/tan(30),0,0,0,0,1,0);
  //perspective(70,width/height, 10,10000);

  noiseTerrain();

  push();
  translate(-width/2,-height/2)
  var max_cubes = 100;
  if (cubes.length < max_cubes){
  cubes.push(new Cube());
  }
  // for(var i = 0; i < 2; i++){
    // cubes.push(new Cube(size));

    for (var i = 0; i < cubes.length; i++){
      cubes[i].move();
      cubes[i].show(size);

    }
    pop();
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
