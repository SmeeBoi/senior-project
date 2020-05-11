// borrowed code from joeyklee


function Face(detections){

  function drawLandmarks(detections){
      // translate(0,0);
      translate(0,0);
      noFill();
      stroke(161, 95, 251)
      strokeWeight(2)

      for(let i = 0; i < detections.length; i++){
          const jaw = detections[i].parts.jawOutline;
          const mouth = detections[i].parts.mouth;
          const nose = detections[i].parts.nose;
          const leftEye = detections[i].parts.leftEye;
          const rightEye = detections[i].parts.rightEye;
          const rightEyeBrow = detections[i].parts.rightEyeBrow;
          const leftEyeBrow = detections[i].parts.leftEyeBrow;

          //drawPart(jaw, false);
          drawPart(mouth, true);
          drawPart(nose, false);
          drawPart(leftEye, true);
          drawPart(leftEyeBrow, false);
          drawPart(rightEye, true);
          drawPart(rightEyeBrow, false);

      }

  }

  function drawPart(feature, closed){

      beginShape();
      for(let i = 0; i < feature.length; i++){
          const x = feature[i]._x
          const y = feature[i]._y
          vertex(x, y)
      }

      if(closed === true){
          endShape(CLOSE);
      } else {
          endShape();
      }

  }

  drawLandmarks(detections);





}
