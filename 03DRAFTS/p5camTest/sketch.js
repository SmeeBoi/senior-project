// Sameer Desai
// exhibit03 draft
// var cubes = [];
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

let cam;
var orbitEnable = false;
var xMove = 4;
var yMove = -0.5;
var camReset = false;
var tPush = false;



// function preload() {
//   sound = loadSound("lvusm - feelings.mp3");
// }


var textSketch = function(p) {
    p.setup = function() {
      sound = p.loadSound("lvusm - feelings.mp3");
      p.frameRate(24);
      // p.createCanvas(p.windowWidth, p.windowHeight);
      p.createCanvas(500, 500);

      p.stateChoice = 0;
      p.fade = 0;
      p.msg = "";
    };

    p.draw = function() {
      p.background(0);

      if (p.stateChoice == 11){
        var c1 = document.getElementById("textContainer");
        var c2 = document.getElementById("3dContainer");
        c1.remove();
        new p5(threeDsketch, '3dContainer');
      }

      p.fill(p.fade);
      p.noStroke();
      p.textSize(p.height / 15);
      p.textFont('Montserrat');
      p.textAlign(p.CENTER, p.CENTER);
      p.text(p.msg, p.width / 2, p.height / 2);

      p.fadeIncrease = 5;
      p.fadeDecrease = 5;

      switch (p.stateChoice) {
        case 0:
          p.msg = "03";
          p.fade += p.fadeIncrease;
          if (p.fade > 255) {
            p.stateChoice = 1;
          }
          break;

        case 1:
          p.fade -= p.fadeDecrease;
          if (p.fade < 0) {
            p.stateChoice = 2;
          }
          break;

        case 2:
          p.msg = "Press f to go Fullscreen";
          p.fade += p.fadeIncrease;
          break;

        case 3:
          p.fade -= p.fadeDecrease;
          if (p.fade < 0) {
            p.stateChoice = 4;
          }
          break;

        case 4:
          p.msg = "\"blah\" by ";
          p.fade += p.fadeIncrease;
          if (p.fade > 255) {
            p.stateChoice = 5;
          }
          break;

        case 5:
          p.fade -= p.fadeDecrease;
          if (p.fade < 0) {
            p.stateChoice = 6;
          }
          break;

        case 6:
          p.msg = "Use \"r\" to reset position";
          p.fade += p.fadeIncrease;
          if (p.fade > 255) {
            p.stateChoice = 7;
          }
          break;

        case 7:
          p.fade -= p.fadeDecrease;
          if (p.fade < 0) {
            p.stateChoice = 8;
          }
          break;

          case 8:
            p.msg = "Click and drag mouse to look around";
            p.fade += p.fadeIncrease;
            if (p.fade > 255) {
              p.stateChoice = 9;
            }
            break;

          case 9:
            p.fade -= p.fadeDecrease;
            if (p.fade < 0) {
              p.stateChoice = 10;
            }
            break;

        case 10:
          p.fade -= p.fadeDecrease;
          if (p.fade < 0) {
            p.stateChoice = 11;
            p.msg = "";
          }
          break;

        case 11:
          p.stateChoice = 12;
          break;

          case 12:
            break;

        default:
          p.stateChoice = 4;
          break;

      }
      if (p.fade > 255) {
        p.fade = 255;
      } else if (p.fade < 0) {
        p.fade = 0;
      }
      stateChoice = p.stateChoice;
    }

      // resize canvas if they play with window size
      p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        //camReset = true;
      }


      p.keyPressed = function() {
        if (p.keyCode == 32) {
          p.toggleSound();
        } else if (p.keyCode == 70) {
          p.fullscreen(true);
          if (p.stateChoice == 2) {
            p.stateChoice = 3;
            p.toggleSound();
          }
        }
      }

      // start/pause music
      p.toggleSound = function() {
        if (sound.isPlaying()) {
          sound.pause();
        } else {
          sound.play();
        }
      }



    };



    let threeDsketch = function(p) {
      p.cubes = [];
      p.setup = function() {
        //p.background(0,255,0);
        p.frameRate(24);
        p.angleMode(p.DEGREES);
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.cam = p.createCamera();
        p.cam.setPosition(0, -400, (p.height / 2) / p.tan(30));
        // createCanvas(500, 500, WEBGL);
        // debugMode();
        p.amplitude = new p5.Amplitude();
        p.expanse = 50;
        p.w = 5000;
        p.h = 5000;
        p.cols = p.w / p.scl;
        p.rows = p.h / p.scl;
        for (var x = 0; x < p.cols; x++) {
          p.terrain[x] = [];
          for (var y = 0; y < p.rows; y++) {
            p.terrain[x][y] = 0; //specify a default value for now
          }
        }


      };
      p.noiseTerrain = function () {
        // Daniel Shiffman
        // http://codingtra.in
        // https://youtu.be/IKB1hWWedMk
        // https://thecodingtrain.com/CodingChallenges/011-perlinnoiseterrain.html

        // Edited by SacrificeProductions

        flying -= 0.03;
        var peaks = 100;
        var yoff = flying;
        for (var y = 0; y < rows; y++) {
          var xoff = 0;
          for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -peaks, peaks);
            xoff += 0.2;
          }
          yoff += 0.2;
        }


        // floor
        p.push();
        p.translate(0, 50);
        p.rotateX(90);
        p.noFill();
        p.strokeWeight(0.6);
        p.stroke(255);
        p.translate(-w / 2, -h / 2);
        for (var y = 0; y < rows - 1; y++) {
          p.beginShape(p.QUAD_STRIP);
          for (var x = 0; x < cols; x++) {
            p.vertex(x * scl, y * scl, terrain[x][y]);
            p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
          }
          p.endShape();
        }
        p.pop();

      };


      p.draw = function() {
        // p.background(0,255,0);
        var level = p.amplitude.getLevel();
        p.size = p.map(level, 0, 1, 0, 100);
        p.background(0);

        p.cam.lookAt(0, 0, 0);

        if (p.camReset) {
          p.cam.setPosition(0, -400, (p.height / 2) / p.tan(30));
          p.camReset = false;
        }
        p.orbitControl(1, 1, 0.1);

        if (!p.tPush) {
          p.cam.move(p.xMove, 0, 0);
        }

        p.noiseTerrain();
        p.push();
        p.translate(-p.width / 2, -p.height / 2)
        var max_cubes = 300;
        if (p.cubes.length < max_cubes) {
          p.cubes.push(new Cube());
        }

        for (var i = 0; i < cubes.length; i++) {
          p.cubes[i].move();
          p.cubes[i].show(size);
        }

        p.pop();
        p.stroke(100, 200, 255);
        p.strokeWeight(0.8);

      }
    };




    new p5(textSketch, 'textContainer');





    // resize canvas if they play with window size
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
      camReset = true;
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
        // if r key is pushed
      } else if (keyCode == 82) {
        camReset = true;
      } else if (keyCode == 84) {
        if (tPush) {
          tPush = false;
        } else {
          tPush = true;
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
