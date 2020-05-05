// Sameer Desai
// exhibit 02 draft
// Using face-api.js thru ml5.js for facial feature tracking




// input size must be divisible by 32
// try 160

let video;
let faceapi
let detections = [];

function setup() {
  //console.log('ml5 version:', ml5.version);
  createCanvas(360, 270);
  video = createCapture(VIDEO);
  //video.hide();
  video.size(width, height);
  const options = {
    withLandmarks: true,
    withDescriptors: false,
  };
  // Initialize faceapi obj
  faceapi = ml5.faceApi(video, options, modelReady);
  // starts modelReady()
}



// Start detecting faces
function modelReady() {
  console.log('faceapi model ready!')
  //console.log("log = " + faceapi)
  faceapi.detect(gotResults);
  // Triggers gotResults() function to start loop
  // Returns an array of objects. Each object contains {alignedRect, detection, landmarks, unshiftedLandmarks}
}

// Got Results is the forever running loop instead of draw()
function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    detections = result;

    // background(220);
    background(255);
//    image(video, 0,0, width, height)
    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            Face(detections)
            // here is where we draw the face
        }

    }
    faceapi.detect(gotResults)
    // calls itself to keep looping
}

function draw() {
  background(255);
  //image(video, 10, 10);
  Face(detections);








// Just look at the first face and draw all the points
//   if (detections.length > 0) {
//     let points = detections[0].landmarks.positions;
//     for (let i = 0; i < points.length; i++) {
//       stroke(161, 95, 251);
//       strokeWeight(4);
//       point(points[i]._x, points[i]._y);
//     }
//   }





}





function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
