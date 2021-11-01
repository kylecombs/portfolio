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
        mixBlendMode: 'difference',
      }}
    >
      <div
        style={{
          display: props.cursorVisible ? 'initial' : 'none',
          zIndex: 0,
          position: 'absolute',
          left: clientX,
          top: clientY,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          width: '125px',
          height: '125px',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default Cursor;
