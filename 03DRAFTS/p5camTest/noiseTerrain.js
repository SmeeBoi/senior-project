function noiseTerrain() {
  // Daniel Shiffman
  // http://codingtra.in
  // https://youtu.be/IKB1hWWedMk
  // https://thecodingtrain.com/CodingChallenges/011-perlinnoiseterrain.html

  // Edited by SacrificeProductions

  flying -= 0.03;
  var peaks = 100;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -peaks, peaks);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  // floor
  push();
  translate(0, 50);
  rotateX(90);
  noFill();
  strokeWeight(0.6);
  stroke(255);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(QUAD_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  pop();

}
