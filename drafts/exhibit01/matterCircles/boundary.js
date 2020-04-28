function Boundary() {
  // options for boundary
  var options = {
    isStatic: true
  }

  // creating boundary with 3 diff rect
  //bottom = Bodies.rectangle(windowWidth / 2, windowHeight / 2, windowWidth / 2, bthick,options);
  this.body = Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, bthick, options);

  // left = Bodies.rectangle(width / 2, height - 50, width, bthick, options);
  // right = Bodies.rectangle(width / 2, height - 50, width, bthick, options);
  World.add(world, this.body);
  //World.add(world,bottom,left,right);

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
    fill(255);
    // dimensions of rect must match with above matter.js body dimensions
    // too lazy to tap into body.vertices or whatev
    rect(0, 0, windowWidth, bthick);
    // rect(left.position.x, left.position.y, windowWidth, bthick);
    // rect(right.position.x, right.position.y, windowWidth, bthick);
    pop();
  }
}
