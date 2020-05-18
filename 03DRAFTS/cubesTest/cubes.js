
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

  var x = 0;
  var y = 0;
  var z = -1000;
  var zspeed = 10;


  this.move = function() {
    z += zspeed;

    if (z > 1000){
      z = -1000
      x = 0;
      y = 0;
      zspeed = 10;
    }

  }

  this.show = function(size) {
    push();
    translate(x, y, z);
    fill(255);
    box(20 + size);
    pop();
  }


}



this.fall = function(){
  y += yspeed;
  yspeed = yspeed + 0.05;
  if (y > height){
    x = random(width);
    y = random(-200,100);
    yspeed = random(4,10);
  }
}

this.isOffScreen = function() {
if (y > height + 10) {
  return true;
} else {
  return false;
}
}

this.show = function(){
stroke(255);
line(x,y,x,y+length);
}
