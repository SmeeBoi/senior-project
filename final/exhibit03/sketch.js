function preload() {
  sound = loadSound('pandi & lvusm - scope.mp3');
}

function setup() {
  stateChoice = 0;
  fade = 0;
  msg = "";
  createCanvas(windowWidth, windowHeight);
  ratio = height / 15;
  // low framerate to support slower devices
  frameRate(24);
  amplitude = new p5.Amplitude();


}

function draw() {
  background(0);
  threeText();
  stateChoice = 8;
  if (stateChoice == 8) {
    let level = amplitude.getLevel();
    size = map(level, 0, 1, 0, 200);



  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ratio = height / 15;
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
