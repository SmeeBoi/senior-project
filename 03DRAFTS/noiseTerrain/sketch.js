// Sameer Desai
// exhibit03 draft
let angle = 0;
var cubes = [];
let sound, amplitude, size;


// function preload(){
//   sound = loadSound("lvusm - feelings.mp3");
// }


var terrainValues = [];
// we later make it a 2D array
var mult = 50;
var xoff = 0;
var yoff = 0;
var increment = 0.07;
var flying = 0;



function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
   debugMode();
  frameRate(24);
  amplitude = new p5.Amplitude();

}

function draw() {
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 100);
  // background(0,255,200);
  background(0);
  orbitControl(1,1,0.5);
  // camera(0,0,(height/2)/tan(30),0,0,0,0,1,0);
  perspective(70,width/height, 10,10000);

  yoff = flying;
  for (var y = 0; y < 60; y++) {
    terrainValues.push([]);
      xoff = 0;
    for (var x = 0; x < 60; x++) {
      terrainValues[y][x] = map(noise(xoff,yoff), 0, 1, -mult, mult);
      xoff += increment;

    }
  yoff += increment;
  }

  flying += 0.02;


  stroke(255);
  noFill();
  rotateX(60);
  translate(-width / 2, -height / 2);
  for (var y = 0; y < 60; y++) {
    beginShape(QUAD_STRIP);
    for (var x = 0; x < 60; x++) {
      vertex(x * 10, y * 10, terrainValues[x][y]);
      vertex(x * 10, (y + 1) * 10,terrainValues[x][y]);
    }
    endShape();
  }
}


// resize canvas if they play with window size
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//
// }

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
