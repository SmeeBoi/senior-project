function oneText() {
  fill(fade);
  textSize(ratio);
  textFont('Montserrat');
  textAlign(CENTER, CENTER);
  text(msg, width / 2, height / 2);

  var fadeIncrease = 5;
  var fadeDecrease = 5;

  switch (stateChoice) {
    case 0:
      msg = "01";
      fade += fadeIncrease;
      if (fade > 255) {
        stateChoice = 1;
      }
      break;

    case 1:
      fade -= fadeDecrease;
      if (fade < 0) {
        stateChoice = 2;
      }
      break;

    case 2:
      msg = "Press f to go Fullscreen";
      fade += fadeIncrease;
      break;

    case 3:
      fade -= fadeDecrease;
      if (fade < 0) {
        stateChoice = 4;
      }
      break;

    case 4:
      msg = "\"scope\" by pandi & lvusm";
      fade += fadeIncrease;
      if (fade > 255) {
        stateChoice = 5;
      }
      break;

    case 5:
      fade -= fadeDecrease;
      if (fade < 0) {
        stateChoice = 6;
      }
      break;

    case 6:
      msg = "Click and drag mouse";
      fade += fadeIncrease;
      if (fade > 255) {
        stateChoice = 7;
      }
      break;

    case 7:
      fade -= fadeDecrease;
      if (fade < 0) {
        stateChoice = 8;
      }
      break;

    case 8:
      fade -= fadeDecrease;
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
