import React, { useRef, useState, useEffect, useCallback } from 'react';
// import Sketch from 'react-p5';

const style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  cursor: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '2vw',
    height: '2vw',
    transform: 'translate(-50%, -50%)',
  },
};

export default function EraseReveal(props) {
  const cursor = useRef();
  // const [p5, setP5] = useState();
  const [mouseDown, setMouseDown] = useState(false);

  const parentBoundingClient =
    props.parentRef.current && props.parentRef.current.getBoundingClientRect();

  const mouseDownStyle = mouseDown
    ? { width: '5vw', height: '5vw' }
    : { width: '2vw', height: '2vw' };

  const cursorPosition = useRef({
    mouseX: 0,
    mouseY: 0,
  });

  // const [height, setHeight] = useState(0);
  // const [width, setWidth] = useState(0);

  // const setup = (p5, canvasParentRef) => {
  //   setP5(p5);
  //   p5.createCanvas(width, height).parent(canvasParentRef);
  // };

  // const draw = (p5, x, y) => {
  //   p5.ellipse(x, y, 30);
  // };

  // const windowResized = useCallback(() => {
  //   if (p5) {
  //     p5.resizeCanvas(width, height);
  //   }
  // }, [p5, height, width]);

  // useEffect(() => {
  //   setHeight(parentBoundingClient && parentBoundingClient.height);
  //   setWidth(parentBoundingClient && parentBoundingClient.width);
  //   // windowResized();
  // }, [parentBoundingClient]);

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      cursorPosition.current.mouseX = mouseX;
      cursorPosition.current.mouseY = mouseY;
      const withinDiv =
        parentBoundingClient &&
        mouseX >= parentBoundingClient.left &&
        mouseX <= parentBoundingClient.right &&
        mouseY <= parentBoundingClient.bottom &&
        mouseY >= parentBoundingClient.top;
      if (withinDiv) {
        console.log('hello');
      }
    });
  }, [parentBoundingClient]);

  return (
    <div style={style.container}>
      {/* <Sketch setup={setup} draw={draw} /> */}
      <div
        ref={cursor}
        style={{
          ...style.cursor,
          ...mouseDownStyle,
          top: cursorPosition.current.mouseY,
          // -
          // (parentBoundingClient ? parentBoundingClient.top : 0),
          left: cursorPosition.current.mouseX,
          // -
          // (parentBoundingClient ? parentBoundingClient.left : 0),
        }}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
      />
    </div>
  );
}
