var fade;
var state;
var msg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  state = 0;
  fade = 0;
  msg = "";
}



function draw() {
  background(0);
  fill(fade);
  textSize(height / 15);
  textFont('Montserrat');
  textAlign(CENTER, CENTER);
  text(msg, width / 2, height / 2);
  // black fade in to white text
  if (state == 0) {
    msg = "Press 'f' to go Fullscreen";
    fade += 5;
    if (fade > 255) {
      fade = 255;
    }
  }

  // text should be visibile and once fullscreen activated, fade out + state change
  if (state == 1) {
    fade -= 5;
    if (fade < 0) {
      fade = 0;
      state = 2;
    }
  }

  // next text fades in + state change
  if (state == 2) {
    msg = "Use Headphones For Best Experience";
    fade += 5;
    if (fade > 255) {
      fade = 255;
      state = 3;
    }
  }

  // text has reached full brightness, now it fades out
  if (state == 3) {
    fade -= 10;
    if (fade < 0) {
      fade = 0;
      state = 4;
    }
  }


  if (state == 4) {
    msg = "Press Spacebar to Start";
    fade += 5;
    if (fade > 255) {
      fade = 255;
      state = 5;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  state = 1;
}


function keyPressed() {
  if (keyCode == 70) {
    fullscreen(true);
  }
}
