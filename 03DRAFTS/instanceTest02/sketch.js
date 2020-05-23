var next = false;
let sketch = function(p) {
  p.setup = function() {
    p.frameRate(24);
    p.createCanvas(100, 100);
    p.background(0);
  }

  p.draw = function() {
    p.fill(100, 200, 255);
    p.text("hi", p.width / 2, p.height / 2, 50, 50);
    if (p.frameCount == 20) {
      next = true;
      p.rect(0, 0, 20, 20);
      var c1 = document.getElementById("container");
      var c2 = document.getElementById("container2");
      c1.remove();
      new p5(sketch2, 'container2');


    }
  }
};

let sketch2 = function(p) {
  var cubes = [];
  p.setup = function() {
    p.frameRate(24);
    p.createCanvas(100, 100,p.WEBGL);
    p.background(0);
  }

  p.draw = function() {
    p.fill(200, 200, 255);
    p.text("hi real demo", p.width / 2, p.height / 2, 50, 50);

    var max_cubes = 300;
    if (cubes.length < max_cubes) {
      cubes.push(new Cube());
    }

    for (var i = 0; i < cubes.length; i++) {
      cubes[i].move();
      cubes[i].show(size);
    }
    if (p.frameCount == 20) {
      next = true;
      p.rect(0, 0, 20, 20);
    }
  }
};
new p5(sketch, 'container');
