function Boundary() {
  var bthick = 50;
  var options = {
    isStatic: true
  }
  this.body = Bodies.rectangle(windowWidth / 2, ((windowHeight) + ((bthick / 2)) - 10), windowWidth, bthick, options);

  World.add(world, this.body);
  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }

  this.show = function() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    noStroke();
    fill(0);
    rect(0, 0, windowWidth, bthick);
    pop();
  }
}
