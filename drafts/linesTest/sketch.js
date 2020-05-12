let lines = [];
let sound, amplitude, size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sound = loadSound('lvusm - feelings.mp3');
  amplitude = new p5.Amplitude();
  // lines.push(new Line(0));
  // lines.push(new Line(50));
  // for (let i = 0; i < 5; i = i + 50) {
  //   lines.push(new Line(i));
  // }
  LinePattern();

}

function draw() {
  // background(100, 200, 220);
  background(0);
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 1, 20);


  for (var i = 0; i < lines.length; i++) {
    lines[i].show();
    lines[i].move();
  }


}

function Line(offset) {

  var y = offset;

  this.show = function() {
    push();
    strokeWeight(2+ size);
    stroke(255);
    fill(200);
    line(0, y, width, y);
    pop();
  }

  this.move = function() {
    y = y + 2;
    if (y >= height) {
      y = 0;
    }
  }

}

function LinePattern() {
  // lines.push(new MyLine(50));
  // lines.push(new MyLine(100));
  for (var i = 0; i < height; i += 40) {
    lines.push(new Line(i));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  // if spacebar pushed toggleSound()
  if (keyCode == 32) { // keyCode for spacebar is 32 wack right
    toggleSound();
    //stateChoice = 5;
  }

  // press f to enter fullscreen
  else if (keyCode == 70) {
    fullscreen(true);
    if (stateChoice == 0) {
      stateChoice = 1;
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
