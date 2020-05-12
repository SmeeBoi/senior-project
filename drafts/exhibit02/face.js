// borrowed code from joeyklee
var max_size;

function Face(detections) {

  function drawLandmarks(detections) {
  //   translate(0,0);
    // translate(video.width, 0);
    // scale(-1,1);
    //scale(2,2);
    noFill();
    // stroke(161, 95, 251)
    stroke(255);
    strokeWeight(2);

    for (let i = 0; i < detections.length; i++) {
      // const jaw = detections[i].parts.jawOutline;
      // const mouth = detections[i].parts.mouth;
      // const nose = detections[i].parts.nose;
      const leftEye = detections[i].parts.leftEye;
      const rightEye = detections[i].parts.rightEye;
      // const rightEyeBrow = detections[i].parts.rightEyeBrow;
      // const leftEyeBrow = detections[i].parts.leftEyeBrow;

      //drawPart(jaw, false);
      // drawPart(mouth, true);
      // drawPart(nose, false);
      drawPart(leftEye, true);
      // drawPart(leftEyeBrow, false);
      drawPart(rightEye, true);
      // drawPart(rightEyeBrow, false);
      //push();
      //line(leftEye[0]._x,  leftEye[0]._y, leftEye[3]._x,  leftEye[3]._y,);

      var leftVertX = (leftEye[5]._x - leftEye[1]._x);
      var leftVertY = (leftEye[5]._y - leftEye[1]._y);
      max_size = (sqrt(leftVertX ** 2 + leftVertY ** 2));
      //  max_size = (leftVertX ** 2 + leftVertY ** 2));


      // connect points
      //       push();
      //       stroke(255,0,0);
      //     //  line(leftEye[1]._x, leftEye[1]._y, leftEye[4]._x, leftEye[4]._y, );
      //       beginShape();
      // vertex(leftEye[1]._x, leftEye[1]._y);
      // vertex(leftEye[2]._x, leftEye[2]._y);
      // vertex(leftEye[4]._x, leftEye[4]._y);
      // vertex(leftEye[5]._x, leftEye[5]._y);
      // endShape(CLOSE);
      //   pop();


      var midXleft = leftEye[0]._x + (leftEye[3]._x - leftEye[0]._x) / 2;
      var midYleft = leftEye[0]._y + (leftEye[3]._y - leftEye[0]._y) / 2;
      circle(midXleft, midYleft, size);
      //
      var midXright = rightEye[0]._x + (rightEye[3]._x - rightEye[0]._x) / 2;
      var midYright = rightEye[0]._y + (rightEye[3]._y - rightEye[0]._y) / 2;
      circle(midXright, midYright, size);

    }

  }

  function drawPart(feature, closed) {

    beginShape();
    for (let i = 0; i < feature.length; i++) {
      const x = feature[i]._x
      const y = feature[i]._y
      vertex(x, y)
    }

    if (closed === true) {
      endShape(CLOSE);
    } else {
      endShape();
    }

  }

  push();
  drawLandmarks(detections);
  pop();




}
