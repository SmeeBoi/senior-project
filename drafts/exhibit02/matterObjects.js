// exhibit02
// MatterDrop Class

// let leftPos = [];

function MatterDrop(x, y, thick, len) {
  //var round = 2;
  var options = {
    friction: 0,
    frictionStatic: 0,
    // frictionAir: 0.02,
    restitution: 0,
    // density: 0.000001,

    // friction: 0.3,
    // restitution: 0.6,
    chamfer: {radius : thick}
    // chamfer: {}

  }
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
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(0, 0, thick, len, thick);
    pop();
  }
}


function MatterEyes(detections) {
  this.detections = detections;

  var options = {
    friction: 0,
    frictionStatic: 0,
    restitution: 0,
    isStatic: true,
  }
  //   for (let i = 0; i < detections.length; i++) {
  //     for (let j = 0; j < detections[i].parts.leftEye.length; j++) {
  //       leftPos.push([detections[i].parts.leftEye[j]._x,detections[i].parts.leftEye[j]._y]);
  //     //  leftPos.push();
  //     }
  //   }
  //

  // var leftInitX = detections[0].parts.leftEye[1]._x;
  // //console.log("leftInitX " + leftInitX);
  // var leftInitY = detections[0].parts.leftEye[1]._y;


  var arrow = Vertices.fromPath('40 50 40 20 60 20 60 50 40 50');
  //var arrow = Vertices.fromPath([{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]);
  // leftEye = Bodies.fromVertices(leftInitX, leftInitY, leftPos, options);
  // var leftEye = Bodies.fromVertices(400, 500, arrow);

  for (let i = 0; i < detections.length; i++) {
    var leftEye = detections[i].parts.leftEye;
    var rightEye = detections[i].parts.rightEye;
    var leftInitX = detections[i].parts.leftEye[1]._x;
    var leftInitY = detections[i].parts.leftEye[1]._y;
  }


  // (leftEye[3]._x - leftEye[0]._x)

  // var w = 50;
  var w = (leftEye[3]._x - leftEye[0]._x);
  var h = 200;
  var vertices = [{
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: 50
    },
    {
      x: 25,
      y: 25
    },
    {
      x: 50,
      y: 50
    },
    {
      x: 50,
      y: 0
    }
  ]

  const scaleFactor = 2;
   this.body = Bodies.fromVertices((leftInitX * scaleFactor) - (width / scaleFactor), (leftInitY * scaleFactor) - (height / scaleFactor), arrow, options);

  //this.body = Bodies.rectangle((leftInitX * scaleFactor) - (width / scaleFactor) + w / 2, (leftInitY * scaleFactor) - (height / scaleFactor) + h / 2, w, h, options);


  //rightEye = Bodies.fromVertices(x, y, thick, len, options);
  //  World.add(world, leftEye, rightEye);
  // World.add(world, leftEye);

  // var eyeRect = Bodies.rectangle(leftInitX, leftInitY, 500, 200, options);
  World.add(world, this.body);

  this.removeFromWorld = function() {
    World.remove(world, this.body);
  }

  this.show = function() {
    var pos = this.body.position;
    //var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    stroke(255, 0, 0);
    noFill();
    rect(0, 0, w, h);
    pop();
  }




}
