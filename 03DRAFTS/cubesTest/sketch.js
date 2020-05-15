// Sameer Desai
// exhibit03 draft
let angle = 0;
var size = 0;
var cubes = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  debugMode();
  //frameRate(24);
}

function draw() {
  background(0,255,200);
  orbitControl(1,1,0.5);
  // camera(0,0,(height/2)/tan(30),0,0,0,0,1,0);
  perspective(100,width/height, 10,10000);
  cubes.push(new Cube(10));

  z += 10;




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
