// borrowed code from joeyklee

var max_size;

function Face(detections) {

  function drawLandmarks(detections) {

    // scale(-1,1);
    //  scale(2.5);
    noFill();
    // const scaleFactor = 2;
    const scaleFactor = 2;

    //translate(width,0)
    // translate(-width / scaleFactor, -height / scaleFactor);
    // translate(-2*width / scaleFactor, height / scaleFactor);
    // translate(2*(width / scaleFactor), -height / scaleFactor);
    // scale(-scaleFactor,scaleFactor);
    // translate(width,0);
    // scale(-1,1);

    // translate(width + width/2,0);
    translate(width + width / scaleFactor, -height / scaleFactor);
    scale(-scaleFactor, scaleFactor);

    // scale(2);
    stroke(255);
    strokeWeight(1);

    for (let i = 0; i < 1; i++) {
      const leftEye = detections[i].parts.leftEye;
      const rightEye = detections[i].parts.rightEye;

      drawPart(leftEye, true);
      drawPart(rightEye, true);

      var leftVertX = (leftEye[4]._x - leftEye[1]._x);
      var leftVertY = (leftEye[4]._y - leftEye[1]._y);
      max_size = 0.78 * (sqrt((leftVertX ** 2) + (leftVertY ** 2)));

      // eye circles
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

  drawLandmarks(detections);
}

// exhibit02 NO PHYSICS
// Drop Class for  rain

function Drop(){
//  this.x = x;
  var x = random(width);
  var y = random(-200,100);
  var yspeed = random(4,10);
  var length = random(10,20);


  this.fall = function(){
    y += yspeed;
    yspeed = yspeed + 0.05;
    if (y > height){
      x = random(width);
      y = random(-200,100);
      yspeed = random(4,10);
    }
  }

this.isOffScreen = function() {
  if (y > height + 10) {
    return true;
  } else {
    return false;
  }
}

this.show = function(){
  stroke(255);
  line(x,y,x,y+length);
}





}
