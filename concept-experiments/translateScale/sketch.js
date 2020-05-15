const vidWidth = 320;
const vidHeight = 240;
const scaleFactor = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // rectMode(CENTER);
}

function draw() {
  // background(100, 200, 220);
  background(200, 255, 255);

  line(0,height/2,width,height/2);
  line(width/2,0,width/2,height);



  //noStroke();

  push();
  // translate(vidWidth*scaleFactor,0);
  translate(vidWidth*scaleFactor,0);
  translate(width/2,height/2);
  translate(((-vidWidth*scaleFactor)/2),((-vidHeight*scaleFactor)/2));


  scale(-scaleFactor,scaleFactor);
  fill(242, 91, 91);
  rect(0, 0, vidWidth, vidHeight,0,0,50,0);
  pop();

  push();
  fill(0);
  rect(0, 0, vidWidth, vidHeight ,100);
  pop();






}
