// Sameer Desai
// exhibit 02 draft
// Using face-api.js thru ml5.js for facial feature tracking

// input size must be divisible by 32
// try 160

var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Vertices = Matter.Vertices;

let video;
let faceapi
let detections = [];
let sound, amplitude, size;
var rainDrops = [];
var fade;
var stateChoice;
var msg;


function setup() {
  frameRate(24);
  stateChoice = 0;
  fade = 0;
  msg = "";
  //console.log('ml5 version:', ml5.version);
  sound = loadSound('aislin - ENRA & Sleepermane.mp3');
  amplitude = new p5.Amplitude();
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  video.size(width, height);
  const options = {
    withLandmarks: true,
    withDescriptors: false,
  };
  // Initialize faceapi obj
  faceapi = ml5.faceApi(video, options, modelReady);
  // starts modelReady()
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
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
  //console.log(result)
  detections = result;

  faceapi.detect(gotResults)
  // calls itself to keep looping
}

function draw() {
  // translate(video.width, 0);
  // scale(-1,1);
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, max_size);

  background(0);
  twoText();
  //    image(video, 0,0, width, height)

  if (stateChoice == 8) {
    if (detections) {
      if (detections.length > 0) {
        // console.log(detections)
        Face(detections);
        MatterEyes(detections);
        // here is where we draw the face
      }
    }

    var max_drops = 500;
    if (rainDrops.length < max_drops) {
      for (var i = 0; i < 2; i++) {
        // rainDrops.push(new MatterDrop(random(width), random(-100,50), 2, random(10,20)));
        rainDrops.push(new MatterDrop(random(width), random(-100, 50), 2, random(10, 20)));
      }
    }

    for (var i = 0; i < rainDrops.length; i++) {
      rainDrops[i].show();
    }

    var tempDrops = [];
    for (var i = 0; i < rainDrops.length; i++) {
      if (!rainDrops[i].isOffScreen()) {
        tempDrops.push(rainDrops[i]);
      } else {
        rainDrops[i].removeFromWorld();
      }
    }
    rainDrops = tempDrops;
  }



  // if(points[57]._y-points[51]._y>40){
  //  for(var i=0;i<100;i=i+1){ //loop 5 times
  //     candy[i].display(); //run the display function of the object
  //     candy[i].move();
  //   }}



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
  video.size(width, height);
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
    if (stateChoice == 0) {
      stateChoice = 1;
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
