// borrowed code from joeyklee

var max_size;

function Face(detections) {

  function drawLandmarks(detections) {
    noFill();
    const scaleFactor = 10;

    var vidWidth = video.width;
    var vidHeight = video.height;

    translate(vidWidth*scaleFactor,0);
    translate(width/2,height/2);
    translate(((-vidWidth*scaleFactor)/2),((-vidHeight*scaleFactor)/2));
    scale(-scaleFactor, scaleFactor);

    stroke(255);
    strokeWeight(2/scaleFactor);


    for (let i = 0; i < detections.length; i++) {
      const leftEye = detections[i].parts.leftEye;
      const rightEye = detections[i].parts.rightEye;


      push();
      fill(0);
      drawPart(leftEye, true);
      drawPart(rightEye, true);
      pop();

      var leftVertX = (leftEye[4]._x - leftEye[1]._x);
      var leftVertY = (leftEye[4]._y - leftEye[1]._y);
      max_size = 0.80 * (sqrt((leftVertX ** 2) + (leftVertY ** 2)));

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
