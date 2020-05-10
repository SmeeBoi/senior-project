// Sameer Desai
// pixelateTest draft



var video;
var vScale = 16;
var x, y;
var r,g,b,a;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale)
}

function draw() {
  background(0);
  video.loadPixels();
  loadPixels();
  let d = pixelDensity();
  for (let i = 0; i < d; i++) {
    for (let j = 0; j < d; j++) {
      // loop over
      index = 4 * ((y * d + j) * width * d + (x * d + i));
      pixels[index] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = a;
      var bright = (r+g+b)/3;
      fill(bright);
      rect(x,y,100,100);
    }
  }



}

// resize canvas if they play with window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function keyPressed() {
  if (keyCode == 32) {
    toggleSound();
  }

  // press f to enter fullscreen
  else if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
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
