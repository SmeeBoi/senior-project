// Sameer Desai
// exhibit01
// Circle Class

function Circle(x, y, r) {
  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.r = r;
  this.body = Bodies.circle(x, y, r, options);
  World.add(world, this.body);

  this.isOffScreen = function() {
    var pos = this.body.position;
    if (pos.y > height + 100 || pos.x < -100 || pos.x > width + 100) {
      return true;
    } else {
      return false;
    }
  }

  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }

  this.show = function(scale) {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    strokeWeight(2);
    stroke(255);
    fill(0);
    circle(0, 0, (this.r * 2) + scale);
    pop();
  }
}
