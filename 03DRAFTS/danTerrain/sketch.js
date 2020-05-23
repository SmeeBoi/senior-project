// Sameer Desai
// exhibit03 draft
var cubes = [];
let sound, amplitude, size;

var cols, rows;
var scl = 50;
var w = 0;
var h = 0;
var flying = 0;
var terrain = [];

var slowRotateX = 0;
var slowRotateY = 0;
var angle = 0;



function preload() {
  sound = loadSound("lvusm - feelings.mp3");
}

var easycam;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
   debugMode();
  frameRate(24);
  amplitude = new p5.Amplitude();
  expanse = 100;
  w = 5000;
  h = 5000;
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}


function draw() {

  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 100);
  background(0);
  // background(100,200,255);
  // myorbitControl(1, 1, 0.5);
   orbitControl(1, 1, 0.5);
//  var camX = map(mouseX,0,width,-width/2,width/2);
  // var mouseRotateY = mouseY;

  // camera(0,0,(height/2)/tan(30),0,0,0,0,1,0);
  //perspective(70,width/height, 10,10000);
  // angle = ;
  // slowRotateX = 0.005;
  // slowRotateY = sin(angle);
    // this._renderer._curCamera._orbit(slowRotateX,slowRotateX , 0);
    // if(slowRotateX > 360){
    //   slowRotateX = 0;
    // }else{
    //   slowRotateX += 0.00005;
    // }

ambientLight(255);
 // pointLight(255,255,255, 0, -100, 200);
// directionalLight(200, 40, 50, 0, -50, -100);


  push();
  translate(0,0,0);
  // fill(255);
  ambientMaterial(255);
  noStroke();
   sphere(50);
  pop();

  noiseTerrain();

  push();
  translate(-width / 2, -height / 2)
  var max_cubes = 100;
  if (cubes.length < max_cubes) {
    cubes.push(new Cube());
  }
  // for(var i = 0; i < 2; i++){
  // cubes.push(new Cube(size));

  for (var i = 0; i < cubes.length; i++) {
    cubes[i].move();
    cubes[i].show(size);

  }
  pop();
  stroke(100, 200, 255);
  strokeWeight(0.8);
}


// resize canvas if they play with window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function keyPressed() {
  if (keyCode == 32) {
    toggleSound();
  } else if (keyCode == 70) {
    fullscreen(true);
    if (stateChoice == 2) {
      stateChoice = 3;
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

/**
 * Allows movement around a 3D sketch using a mouse or trackpad.  Left-clicking
 * and dragging will rotate the camera position about the center of the sketch,
 * right-clicking and dragging will pan the camera position without rotation,
 * and using the mouse wheel (scrolling) will move the camera closer or further
 * from the center of the sketch. This function can be called with parameters
 * dictating sensitivity to mouse movement along the X and Y axes.  Calling
 * this function without parameters is equivalent to calling orbitControl(1,1).
 * To reverse direction of movement in either axis, enter a negative number
 * for sensitivity.
 * @method myorbitControl
 * @for p5
 * @param  {Number} [sensitivityX] sensitivity to mouse movement along X axis
 * @param  {Number} [sensitivityY] sensitivity to mouse movement along Y axis
 * @param  {Number} [sensitivityZ] sensitivity to scroll movement along Z axis
 * @chainable
 * @example
 * <div>
 * <code>
 * function setup() {
 *   createCanvas(100, 100, WEBGL);
 *   normalMaterial();
 * }
 * function draw() {
 *   background(200);
 *   orbitControl();
 *   rotateY(0.5);
 *   box(30, 50);
 * }
 * </code>
 * </div>
 *
 * @alt
 * Camera orbits around a box when mouse is hold-clicked & then moved.
 */

// implementation based on three.js 'orbitControls':
// https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.js
p5.prototype.myorbitControl = function(sensitivityX, sensitivityY, sensitivityZ) {
  this._assert3d('myorbitControl');
  p5._validateParameters('myorbitControl', arguments);

  // If the mouse is not in bounds of the canvas, disable all behaviors:
  const mouseInCanvas =
    this.mouseX < this.width &&
    this.mouseX > 0 &&
    this.mouseY < this.height &&
    this.mouseY > 0;
  if (!mouseInCanvas) return;

  const cam = this._renderer._curCamera;

  if (typeof sensitivityX === 'undefined') {
    sensitivityX = 1;
  }
  if (typeof sensitivityY === 'undefined') {
    sensitivityY = sensitivityX;
  }
  if (typeof sensitivityZ === 'undefined') {
    sensitivityZ = 0.5;
  }

  // default right-mouse and mouse-wheel behaviors (context menu and scrolling,
  // respectively) are disabled here to allow use of those events for panning and
  // zooming

  // disable context menu for canvas element and add 'contextMenuDisabled'
  // flag to p5 instance
  if (this.contextMenuDisabled !== true) {
    this.canvas.oncontextmenu = () => false;
    this._setProperty('contextMenuDisabled', true);
  }

  // disable default scrolling behavior on the canvas element and add
  // 'wheelDefaultDisabled' flag to p5 instance
  if (this.wheelDefaultDisabled !== true) {
    this.canvas.onwheel = () => false;
    this._setProperty('wheelDefaultDisabled', true);
  }

  const scaleFactor = this.height < this.width ? this.height : this.width;

  // ZOOM if there is a change in mouseWheelDelta
  if (this._mouseWheelDeltaY !== this._pmouseWheelDeltaY) {
    // zoom according to direction of mouseWheelDeltaY rather than value
    if (this._mouseWheelDeltaY > 0) {
      this._renderer._curCamera._orbit(0, 0, sensitivityZ * scaleFactor);
    } else {
      this._renderer._curCamera._orbit(0, 0, -sensitivityZ * scaleFactor);
    }
  }

  if (this.mouseIsPressed) {
    // ORBIT BEHAVIOR
    if (this.mouseButton === this.LEFT) {
      const deltaTheta =
        -sensitivityX * (this.mouseX - this.pmouseX) / scaleFactor;
      const deltaPhi =
        sensitivityY * (this.mouseY - this.pmouseY) / scaleFactor;
      this._renderer._curCamera._orbit(deltaTheta, 0, 0);
      //this._renderer._curCamera._orbit(deltaTheta, deltaPhi, 0);
    } else if (this.mouseButton === this.RIGHT) {
      // PANNING BEHAVIOR along X/Z camera axes and restricted to X/Z plane
      // in world space
      const local = cam._getLocalAxes();

      // normalize portions along X/Z axes
      const xmag = Math.sqrt(local.x[0] * local.x[0] + local.x[2] * local.x[2]);
      if (xmag !== 0) {
        local.x[0] /= xmag;
        local.x[2] /= xmag;
      }

      // normalize portions along X/Z axes
      const ymag = Math.sqrt(local.y[0] * local.y[0] + local.y[2] * local.y[2]);
      if (ymag !== 0) {
        local.y[0] /= ymag;
        local.y[2] /= ymag;
      }

      // move along those vectors by amount controlled by mouseX, pmouseY
      const dx = -1 * sensitivityX * (this.mouseX - this.pmouseX);
      const dz = -1 * sensitivityY * (this.mouseY - this.pmouseY);

      // restrict movement to XZ plane in world space
      cam.setPosition(
        cam.eyeX + dx * local.x[0] + dz * local.z[0],
        cam.eyeY,
        cam.eyeZ + dx * local.x[2] + dz * local.z[2]
      );
    }
  }
  return this;
};
