// Sameer Desai
// matterCircles exhibit 1 draft
// Circle Class

// takes in x pos, y pos, and radius
function Circle(x, y, r) {
  // matter.js options for body
  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.r = r;
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);
  // add body to world

  //fxn to check if circle is offscreen using body.position
  // then remove obj from array
  this.isOffScreen = function() {
    var pos = this.body.position;
    //  return (pos.y > height + 100);
    if (pos.y > height + 100 || pos.x < -100 || pos.x > width + 100) {
      return true;
    } else {
      return false;
    }


    // give 100 buffer
    //will return true or false to check
  }

  //fxn to remove matter.js body objects from world after offScreen() check
  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }


  // show fxn that runs each frame in draw() loop
  this.show = function(scale) {
    var pos = this.body.position;
    var angle = this.body.angle;

    // push pop to enter new drawing state for each circle
    push();
    translate(pos.x, pos.y);
    // translate gives new position to draw new circle
    // rotate takes in the bodies angle to properly draw it
    // dont need it for circles
    //rotate(angle);
    strokeWeight(2);
    stroke(c);
    fill(0);
    // p5 takes diameter hence r*2 to match with matter.js
    circle(0, 0, (this.r * 2) + scale);
    pop();
  }


}
