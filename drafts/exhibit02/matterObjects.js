// exhibit02
// MatterDrop Class

let leftPos = [];

function MatterDrop(x, y, thick, len) {
  var options = {
    friction: 0.3,
    restitution: 0.6,
    //chamfer: { radius: 20 }
  }
  // this.thick = thick;
  // this.len = len;
  this.body = Bodies.rectangle(x, y, thick, len, options);
  World.add(world, this.body);

  this.isOffScreen = function() {
    var pos = this.body.position;
    if (pos.y > height + 10) {
      return true;
    } else {
      return false;
    }
  }

  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }

  this.show = function() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(255);
    rect(0, 0, thick, len);
    pop();
  }
}


function MatterEyes(detections) {
  this.detections = detections;

  var options = {
    friction: 0.3,
    restitution: 0.6,
    isStatic: true,
  }
  //   for (let i = 0; i < detections.length; i++) {
  //     for (let j = 0; j < detections[i].parts.leftEye.length; j++) {
  //       leftPos.push([detections[i].parts.leftEye[j]._x,detections[i].parts.leftEye[j]._y]);
  //     //  leftPos.push();
  //     }
  //   }
  //

   //  var leftInitX = detections[0].parts.leftEye[0]._x;
   //    console.log("leftInitX " + leftInitX);
   // var leftInitY = detections[0].parts.leftEye[0]._y;


  //var arrow = Vertices.fromPath('40 50 40 20 60 20 60 50 40 50');
  //var arrow = Vertices.fromPath([{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]);
  // leftEye = Bodies.fromVertices(leftInitX, leftInitY, leftPos, options);
   // var leftEye = Bodies.fromVertices(400, 500, arrow);


  //rightEye = Bodies.fromVertices(x, y, thick, len, options);
  //  World.add(world, leftEye, rightEye);
  // World.add(world, leftEye);

  // var eyeRect = Bodies.rectangle(leftInitX, leftInitY, 500, 200, options);
  // World.add(world, eyeRect);




}
