function textState() {
  textFont('Montserrat');
  textAlign(CENTER, CENTER);

  push();
  textSize(ratio);
  fill(fade0);
  text("welcome.", width / 2, height / 2);
  pop();

  textSize(ratio / 2);
  fill(fade);
  text(msg, width / 2, height / 1.7);
  var fadeIncrease = 4;
  var fadeDecrease = 5;


  switch (stateChoice) {
    case 0:
      fade0 += fadeIncrease;
      if (fade0 >= 255) {
        stateChoice = 1;
      }
      break;

    case 1:
      msg = "use arrow keys or menu on top left to navigate";
      fade += fadeIncrease;
      if (fade > 255) {
        stateChoice = 2;
      }
      break;

    case 2:
      fade -= fadeDecrease;
      if (fade < 0) {
        stateChoice = 3;
      }
      break;

    case 3:
      msg = "pause music in exhibits with spacebar";
      fade += fadeIncrease;
      if (fade > 255) {
        stateChoice = 4;
      }
      break;

    case 4:
      fade -= fadeDecrease;
      if (fade < 0) {
        stateChoice = 1;
      }
      break;

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
