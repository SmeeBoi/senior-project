function Cube() {
  var x = random(50,width-50);
  var y = random(height/2,0);
   var z = random(-height,0);

  var zspeed = random(8, 13);


  this.move = function() {
    z += zspeed;
    if (z > 0.75*height) {
      z = random(-height,0);
      x = random(50,width-50);
      // y = random(-10,-200);
      y = random(height/2,0);
      zspeed = random(8, 13);

    }

  }


  this.show = function(size) {
    push();
    // translate(height/5,0,0)
    translate(x, y, z);
    fill(0);
    stroke(255);
    strokeWeight(1);
    box(10 + size);
    pop();
  }

}
