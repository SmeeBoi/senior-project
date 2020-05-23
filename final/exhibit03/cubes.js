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
  var y = random(height/2,-height/2);
  // var z = random(-100, -1000);
   var z = random(-height);

  var zspeed = random(5, 10);


  this.move = function() {
    z += zspeed;

    if (z > height) {
      z = random(-height);
      x = random(width);
      // y = random(-10,-200);
      y = random(height/2,-height/2);
      zspeed = random(5, 10);
    }

  }


  this.show = function(size) {
    push();
    translate(x, y, z);
    // fill(255);
    // noStroke();
    fill(0);
    stroke(255);
    // stroke(0);
    strokeWeight(1);
    // ambientMaterial(255,255,255);
    // normalMaterial();
    // specularMaterial(255);
    box(10 + size);
    pop();
  }

}
