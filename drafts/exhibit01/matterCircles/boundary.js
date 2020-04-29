function Boundary() {
  // options for boundary
  var options = {
    isStatic: true
  }

  // creating boundary with 1 rect
  this.body = Bodies.rectangle(windowWidth / 2, ((windowHeight) + ((bthick / 2)) - 10), windowWidth, bthick, options);

  World.add(world, this.body);

  //fxn to remove matter.js body objects from world after offScreen() check
  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }

  // details for drawing boundary
  // note that rectmode must be CENTER to match with matter.js
  this.show = function() {
    var pos = this.body.position;
    // var angle = this.body.angle;

    // push pop to enter new drawing state for each circle
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(0);
    // dimensions of rect must match with above matter.js body dimensions
    // too lazy to tap into body.vertices or whatev
    rect(0, 0, windowWidth, bthick);
    // rect(left.position.x, left.position.y, windowWidth, bthick);
    // rect(right.position.x, right.position.y, windowWidth, bthick);
    pop();
  }
}
