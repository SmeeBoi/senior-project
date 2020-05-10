function textState() {
  // background(0);
  textFont('Montserrat');
  textAlign(CENTER, CENTER);
  rectMode(CENTER);

  push();
  textSize(width / 15);
  fill(fade0);
  text(msg0, width / 2, height / 2);
  pop();

  textSize(width / 30);
  fill(fade);
  text(msg, width / 2, height / 1.7);


  switch (stateChoice) {
    case 0:
      msg0 = "welcome.";
      fade0 += 7;
      if (fade0 >= 255) {
        stateChoice = 2;
      }
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
      msg = "use arrow keys or menu on top left to navigate";
      fade += 5;
      if (fade > 255) {
        stateChoice = 3;
      }
      break;

      // text has reached full brightness, now it fades out
    case 3:
      fade -= 3;
      if (fade < 0) {
        stateChoice = 4;
      }
      break;


    case 4:
      msg = "pause music in exhibits with spacebar";
      fade += 5;
      if (fade > 255) {
        stateChoice = 5;
      }
      break;

    case 5:
      fade -= 3;
      break;

      // start exhibit01
      // case 6:
      //   //link to exhibi01?
      //   // animation to exhibit01?
      //   break;

    default:
      stateChoice = 4;
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
