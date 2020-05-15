let mirrowOutput = true;
let showWebcam = false;
let printOneDetection = true;

let faceapi;
let video;
let detections;

// by default all options are set to true
const detection_options = {
  withLandmarks: true,
  withDescriptors: false,
  // minConfidence: 0.2
};

function setup() {

  createCanvas(360, 270);
  background(0);

  // load up your video
  video = createCapture(VIDEO);
  video.size(width, height);
  if (!showWebcam) {
    video.hide();
  }
  faceapi = ml5.faceApi(video, detection_options, modelReady);
  fill(255);
  text('loading model...', 10, 20);
}

function modelReady() {
  console.log("ready!");
  faceapi.detect(gotResults);
}

function gotResults(err, result) {
  if (err) {
    console.log(err);
    return;
  }

  detections = result;
  background(0);

  // background(220);
  // if (showWebcam) {
  //   image(video, 0, 0, width, height);
  // }
  if (detections) {
    if (detections.length > 0) {
      // if(printOneDetection){
      //   console.log(detections);
      //   printOneDetection = false;
      // }

      //drawPositions(detections);
      // drawBox(detections);
      drawLandmarks(detections);
    }
  }
  faceapi.detect(gotResults);
}

function drawPositions(detections) {
  fill(255);
  noStroke();
  for (let d of detections) {
    for (let p of d.landmarks._positions) {
      ellipse(p._x, p._y, 5);
    }
  }
}

function drawBox(detections) {
  for (let i = 0; i < detections.length; i++) {
    const alignedRect = detections[i].alignedRect;
    const x = alignedRect._box._x;
    const y = alignedRect._box._y;
    const boxWidth = alignedRect._box._width;
    const boxHeight = alignedRect._box._height;

    noFill();
    stroke(255);
    strokeWeight(2);
    rect(x, y, boxWidth, boxHeight);
  }
}

function drawLandmarks(detections) {
  noFill();
  stroke(255);
  strokeWeight(2);

  for (let i = 0; i < detections.length; i++) {
    const mouth = detections[i].parts.mouth;
    const nose = detections[i].parts.nose;
    const leftEye = detections[i].parts.leftEye;
    const rightEye = detections[i].parts.rightEye;
    const rightEyeBrow = detections[i].parts.rightEyeBrow;
    const leftEyeBrow = detections[i].parts.leftEyeBrow;

    drawPart(mouth, true);
    drawPart(nose, false);
    drawPart(leftEye, true);
    drawPart(leftEyeBrow, false);
    drawPart(rightEye, true);
    drawPart(rightEyeBrow, false);
  }
}

function drawPart(feature, closed) {
  beginShape();
  for (let i = 0; i < feature.length; i++) {
    let x = feature[i]._x;
    if(mirrowOutput){
      x = width-feature[i]._x;
    }
    let y = feature[i]._y;
    vertex(x, y);
  }

  if (closed === true) {
    endShape(CLOSE);
  } else {
    endShape();
  }
}
