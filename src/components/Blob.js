import React, { useState, useEffect, useCallback } from 'react';
import Sketch from 'react-p5';
import ProjectList from './ProjectList';

export default function Blob(props) {
  const [points, setPoints] = useState(500);
  const [hoverElement, setHoverElement] = useState(null);
  const [p5, setP5] = useState();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState('black');

  function randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  }

  let time = 0;

  const setup = (p5, canvasParentRef) => {
    setP5(p5);
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const windowResized = useCallback(() => {
    if (p5) {
      p5.resizeCanvas(width, height);
    }
  }, [p5, height, width]);

  useEffect(() => {
    setHeight(props.height);
    setWidth(props.width);
    windowResized();
  }, [props.width, props.height, windowResized]);

  const wave = (p5, num, amp, freq, speed) => {
    return amp * p5.sin((freq * p5.TWO_PI * num) / points + time * speed);
  };

  useEffect(() => {
    setColor(randomColor());
  }, [hoverElement, setColor]);

  const draw = (p5) => {
    p5.noStroke();
    p5.fill('#ffffff');
    // p5.background('#f0ebf5');
    p5.background(hoverElement ? '#' + invertHex(color) : '#f0ebf5');
    p5.beginShape();

    for (let num = 0; num < points; num++) {
      let angle = (p5.TWO_PI * num) / points;
      const shapes = {
        blob:
          wave(p5, num, 20, 3, 1) +
          wave(p5, num, 15, 7, 3) +
          wave(p5, num, 5, 9, 0) +
          wave(p5, num, 2, 13, -5),
        spike:
          wave(p5, num, 20, 50, 1) +
          wave(p5, num, 0, 7, 3) +
          wave(p5, num, 0, 9, 0) +
          wave(p5, num, 0, 13, -5),
        circle:
          wave(p5, num, 20, 1, 4) +
          wave(p5, num, 5, 3, 3) +
          wave(p5, num, 0, 9, 0) +
          wave(p5, num, 0, 13, -5),
        flower:
          wave(p5, num, 5, 3, 1) +
          wave(p5, num, 70, 7, 3) +
          wave(p5, num, 0, 9, 0) +
          wave(p5, num, 0, 13, -5),
        blob2:
          wave(p5, num, 50, 3, 1) +
          wave(p5, num, 5, 1, 0) +
          wave(p5, num, 10, 5, 4) +
          wave(p5, num, 0, 13, 0),
      };

      const selectWave = () => {
        switch (hoverElement) {
          case 1:
            return shapes.spike;
          case 2:
            return shapes.circle;
          case 3:
            return shapes.flower;
          case 4:
            return shapes.blob2;
          default:
            return shapes.blob;
        }
      };

      let radius = props.width / 3 + selectWave();
      let x = p5.width / 2 + radius * p5.cos(angle);
      let y = p5.height / 2 + radius * p5.sin(angle);
      p5.vertex(x, y);
    }

    p5.endShape();

    time += 0.01;
  };

  return (
    <div style={{ position: 'relative' }}>
      <Sketch setup={setup} draw={draw} />
      <ProjectList
        hoverElement={hoverElement}
        setHoverElement={setHoverElement}
        color={color}
      />
    </div>
  );
}
