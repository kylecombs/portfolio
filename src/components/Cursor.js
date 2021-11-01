import React from 'react';
import useMousePosition from './hooks/useMousePosition';
const Cursor = (props) => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <svg
        width={300}
        height={300}
        viewBox="0 0 50 50"
        style={{
          display: props.cursorVisible ? 'initial' : 'none',
          zIndex: 0,
          position: 'absolute',
          left: clientX,
          top: clientY,
          transform: 'translate(-50%, -50%)',
          color: '#dbd9d5',
        }}
      >
        <circle cx="25" cy="25" r="8" fill="currentcolor" />
      </svg>
    </div>
  );
};

export default Cursor;
