function twoText() {
  fill(fade);
  noStroke();
  textSize(height / 15);
  textFont('Montserrat');
  textAlign(CENTER, CENTER);
  text(msg, width / 2, height / 2);

  switch (stateChoice) {
    case 0:
      msg = "loading...";
      fade += 3;
      if (fade > 255) {
        stateChoice = 1;
      }
      break;

    case 1:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 2;
      }
      break;

    case 2:
      msg = "02";
      fade += 5;
      if (fade > 255) {
        stateChoice = 3;
      }
      break;

    case 3:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 4;
      }
      break;

    case 4:
      msg = "Press f to go Fullscreen";
      fade += 5;
      break;

    case 5:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 6;
      }
      break;

    case 6:
      msg = "\"aislin\" by ENRA & Sleepermane";
      fade += 5;
      if (fade > 255) {
        stateChoice = 7;
      }
      break;

    case 7:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 8;
      }
      break;

    case 8:
      msg = "Move your head around";
      fade += 5;
      if (fade > 255) {
        stateChoice = 9;
      }
      break;

    case 9:
      fade -= 5;
      if (fade < 0) {
        stateChoice = 10;
      }
      break;

    // case 10:
    //   // change to 11 is in sketch.js
    //   break;

    default:
      // console.log("messed up");
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
