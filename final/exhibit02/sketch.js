// Sameer Desai
// exhibit 02 NO PHYSICS draft
// Using face-api.js thru ml5.js for facial feature tracking


var video;
let faceapi
let detections = [];
let sound, amplitude, size;
var drops = [];
var fade;
var stateChoice;
var msg;
var mlReady = false;



function preload() {
  sound = loadSound('aislin - ENRA & Sleepermane.mp3');
}

function setup() {
  frameRate(24);
  stateChoice = 0;
  fade = 0;
  msg = "";
  //console.log('ml5 version:', ml5.version);
  amplitude = new p5.Amplitude();
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  video.size(320, 240);
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
  mlReady = true;
  //console.log("log = " + faceapi)
  //faceapi.detect(gotResults);
  // Triggers gotResults() function to start loop
}

// Got Results is the forever running loop instead of draw()
function gotResults(err, result) {
  if (err) {
    console.log(err)
    return
  }
  //console.log(result)
  detections = result;
  //faceapi.detect(gotResults)
  // calls itself to keep looping
}

function draw() {
  if (!mlReady) {
    return;
  }


  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, max_size);

  background(0);
  if (stateChoice < 10){
    twoText();
  }
  var max_drops = 300;
  var amount = 1;

if (stateChoice == 6 || stateChoice >= 10) {
faceapi.detect(gotResults);
}


  if (stateChoice >= 10) {

    if (drops.length < max_drops) {
      for (var i = 0; i < amount; i++) {
        drops.push(new Drop());
      }
    }

    for (var i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].show();
    }

    var tempDrops = [];
    for (var i = 0; i < drops.length; i++) {
      if (!drops[i].isOffScreen()) {
        tempDrops.push(drops[i]);
      }
    }
    drops = tempDrops;

    // image(video,0,0,video.width,video.height);

    if (detections.length > 0) {
      // console.log(detections)
      push();
      Face(detections);
      // here is where we draw the face
      pop();
    }

  }
  // if (stateChoice == 10){
  // //  faceapi.detect(gotResults);
  //   stateChoice = 11;
  // }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// checks for key presses
function keyPressed() {
  // if spacebar pushed toggleSound()
  if (keyCode == 32) { // keyCode for spacebar is 32 wack right
    toggleSound();
    //stateChoice = 5;
  }

  // press f to enter fullscreen
  else if (keyCode == 70) {
    fullscreen(true);
    if (stateChoice == 4) {
      stateChoice = 5;
      toggleSound();
    }
  }
}

// start/pause music
function toggleSound() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.play();
  }
}
