function instructions() {

  background(0);
  fill(fade);
  textSize(height / 15);
  textFont('Montserrat');
  textAlign(CENTER, CENTER);
  text(msg, width / 2, height / 2);
  // black fade in to white text
  //print("fade " + fade);

  switch (stateChoice) {
    case 0:
      msg = "Press 'f' to go Fullscreen";
      fade += 5;
      break;

      // text should be visibile and once fullscreen activated, fade out + state change
    case 1:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 2;
      }
      break;

      // next text fades in + state change
    case 2:
      msg = "Use Headphones For Best Experience";
      fade += 5;
      if (fade > 255) {
        stateChoice = 3;
      }
      break;

      // text has reached full brightness, now it fades out
    case 3:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 4;
      }
      break;


    case 4:
      msg = "Press Spacebar to Start";
      fade += 5;
      break;

    case 5:
      fade -= 5;
      break;

      // start exhibit01
    case 6:
      //link to exhibi01?
      // animation to exhibit01?
      break;

    default:
      stateChoice = 6;
      break;

  }
  fadeLimit();
}

function fadeLimit() {
  if (fade > 255) {
    fade = 255;
  } else if (fade < 0) {
    fade = 0;
  }
}
