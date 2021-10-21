import React, { useState, useEffect } from 'react';
import Sketch from 'react-p5';

export default function Blob(props) {
  const [points, setPoints] = useState(500);
  const [height, setHeight] = useState(0);

  let time = 0;

  const setup = (p5, canvasParentRef) => {
    console.log(`props.height`, props.height);
    p5.createCanvas(props.width, props.height).parent(canvasParentRef);
  };

  const wave = (p5, num, amp, freq, speed) => {
    return amp * p5.sin((freq * p5.TWO_PI * num) / points + time * speed);
  };

  const draw = (p5) => {
    p5.noStroke();
    p5.fill('#ffffff');
    p5.background('#f0ebf5');
    p5.beginShape();

    for (let num = 0; num < points; num++) {
      let angle = (p5.TWO_PI * num) / points;
      let radius =
        props.width / 3 +
        wave(p5, num, 20, 3, 1) +
        wave(p5, num, 15, 7, 3) +
        wave(p5, num, 5, 9, 0) +
        wave(p5, num, 2, 13, -5);
      let x = p5.width / 2 + radius * p5.cos(angle);
      let y = p5.height / 2 + radius * p5.sin(angle);
      p5.vertex(x, y);
    }

    p5.endShape();

    time += 0.01;
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
