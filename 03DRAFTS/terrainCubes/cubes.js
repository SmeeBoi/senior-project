function Cube() {
  // push();
  // // translate(random(-200,200), random(-200,200),random(-200,200))
  // translate(random(100), 0,z)
  // fill(255);
  // // rotateX(angle);
  // // rotateY(angle);
  // // rotateY(angle);
  // // box(random(100,400) + size);
  // box(20 + size);
  // pop();

  var x = random(width);
  var y = random(height);
  var z = random(-100, -1000);
  var zspeed = random(5, 10);


  this.move = function() {
    z += zspeed;

    if (z > 1000) {
      z = random(-100, -1000);
      x = random(width);
      // y = random(-10,-200);
      y = random(height);
      zspeed = random(5, 10);
    }

  }


  this.show = function(size) {
    push();
    translate(x, y, z);
    // fill(255);
    fill(0);
    stroke(255);
    strokeWeight(0.5);
    box(random(5,10) + size);
    pop();
  }

}
