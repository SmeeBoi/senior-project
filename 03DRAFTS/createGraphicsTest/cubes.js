function Cube() {
  var x = random(width);
  var y = random(height/2,-height/2);
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
    fill(0);
    stroke(255);
    strokeWeight(1);
    box(10 + size);
    pop();
  }

}
