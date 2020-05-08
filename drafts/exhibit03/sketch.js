// Sameer Desai
// exhibit03 draft
let angle = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);


}

function draw() {
  ambientLight(255);
  background(5);
   noStroke();
  //stroke(0);
  // fill(200,100,250);
  // normalMaterial();
  ambientMaterial(255,0,0);
  rectMode(CENTER);

//  translate(mouseX - width/2,mouseY - height/2);
  translate(0,0,mouseX);
  rotateX(angle);
  rotateY(angle);
  rotateY(angle);
  torus(100);
  //square(0, 0, 200);

  angle += 0.02;
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
