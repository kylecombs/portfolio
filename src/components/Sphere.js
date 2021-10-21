import React from 'react';

export const Sphere = () => {
  const [sphereMidpoint, setSphereMidpoint] = React.useState([0, 0]);

  const [highlightPosition, setHighlightPosition] = React.useState([0, 0]);

  const cursorPosition = React.useRef({
    mouseX: 0,
    mouseY: 0,
  });

  const sphereDiv = React.useRef();

  const moveHighlight = React.useCallback(() => {
    // find the difference between the sphereMidpoint and the cursor

    const differenceX = cursorPosition.current.mouseX - sphereMidpoint[0];
    const differenceY = cursorPosition.current.mouseY - sphereMidpoint[1];

    // pythagoras theorem
    const difference = Math.sqrt(
      differenceX * differenceX + differenceY * differenceY
    );

    // use tan to get angle
    const angle = Math.atan2(differenceY, differenceX);

    // get distance from center using trigonometry to get the position of the highlight capped at the radius of the sphere
    const sphereRadius = sphereDiv.current.getBoundingClientRect().width / 2;

    // if the difference is smaller that the sphere radius make that the radius that the x and y values are capped at
    const radius = Math.min(sphereRadius, difference / 2);

    const cappedX = radius * Math.cos(angle);
    const cappedY = radius * Math.sin(angle);

    // set the highlight postion on state using the cappedx and capped y values

    setHighlightPosition([
      parseInt(cappedX + sphereRadius),
      parseInt(cappedY + sphereRadius),
    ]);
  }, [sphereMidpoint]);

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      cursorPosition.current.mouseX = mouseX;
      cursorPosition.current.mouseY = mouseY;
      moveHighlight();
    });
  }, [moveHighlight]);

  React.useEffect(() => {
    const sphereDivRect = sphereDiv.current.getBoundingClientRect();
    let midX = sphereDivRect.left + sphereDivRect.width / 2;
    let midY = sphereDivRect.top + sphereDivRect.width / 2;
    setSphereMidpoint([midX, midY]);
  }, []);

  return (
    <div
      style={{
        display: 'block',
        width: '70%',
        height: '70%',
        margin: 'auto',
        borderRadius: '50%',
        background: `radial-gradient(circle at ${highlightPosition[0]}px ${highlightPosition[1]}px, #fc6471 15px, #fc6471 1%, white 85%, #FEC3C8 100%)`,
      }}
      ref={sphereDiv}
    ></div>
  );
};
