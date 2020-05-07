var fade;
var fadeAmount = 1;
var count;
var textLoop;
var check;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fade = 0;
  count = 0
  textLoop = 0;
  check = 0;
  frameRate(24);
}

function draw() {
  background(0);
  fill(255, fade);
  textSize(height / 15);
  textFont('Montserrat');
  textAlign(CENTER, CENTER);
  print(fade);
  if (textLoop == 0) {
    text("Press 'f' to go Fullscreen", width / 2, height / 2);
    if (fade <= 0) {
      fadeAmount = 5;
      // when fade back to 0 and fullscreen add 1 to loop and go to next text
      if (fullscreen()) {
        textLoop = 1;
      }
    }
    // if fullscreen, fade away
    if (fullscreen()) {
      fadeAmount = -10;
    }

    fade += fadeAmount;
  }

  // first text is over, start second
  if (textLoop == 1) {
    text("Use Headphones For Best Experience", width / 2, height / 2);
    if (fade <= 0) {
      fadeAmount = 5;
      check = check + 1;
      if (check == 3) {
        textLoop = textLoop + 1;
      }


    }

    // if (fade >= 255 && fullscreen()) {
    if (fade >= 255) {
      fadeAmount = -10;
      check = check + 1;


    }

    fade += fadeAmount;
  }

  if (textLoop == 3) {
    text("Press Spacebar to Start", width / 2, height / 2);
  }

  // if (textLoop = 1){
  //   fade = 0;
  //   text("Press f to go Fullscreen", width / 2, height / 2);
  // }

  // text("Press f to go Fullscreen", width / 2, height / 1.5);
  // text("Press Spacebar to Start", width / 2, height / 1.2);

  // if (fade <= 0) {
  //   fadeAmount = 5;
  //   textLoop = textLoop + 1;
  // }
  //
  // if (fade >= 255) {
  //   fadeAmount = -5;
  // }
  //
  // fade += fadeAmount;
  count++;
  //  console.log("count = " + count);
  console.log("textLoop = " + textLoop);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function keyPressed() {
  // if spacebar pushed toggleSound()
  // if (keyCode == 32) { // keyCode for spacebar is 32 wack right
  //   toggleSound();
  // }
  //
  // // press f to enter fullscreen
  // else
  if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
