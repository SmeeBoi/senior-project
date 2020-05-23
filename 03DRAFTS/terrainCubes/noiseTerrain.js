function noiseTerrain() {
  yoff = flying;
  // xoff = flying;
  // yoff = 0;
  for (var y = 0; y < expanse; y++) {
    terrainValues.push([]);
    xoff = 0;
    for (var x = 0; x < expanse; x++) {
      terrainValues[y][x] = map(noise(xoff, yoff), 0, 1, -mult, mult);
      xoff += increment;

    }
    yoff += increment;
  }
  flying -= 0.02;
push();
   stroke(255);
   strokeWeight(0.1);
  noFill();
  // fill(200,200,255);
  rotateX(90);
  translate(-500,-100,-200);
  for (var y = 0; y < expanse; y++) {
    beginShape(QUAD_STRIP);
    for (var x = 0; x < expanse; x++) {
      vertex(x * 10, y * 10, terrainValues[x][y]);
      vertex(x * 10, (y + 1) * 10, terrainValues[x][y]);
    }
    endShape();
  }
  pop();

}
