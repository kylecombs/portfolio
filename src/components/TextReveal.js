import React, { useRef, useState, useEffect, useCallback } from 'react';
import Cursor from './Cursor';

const style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(./waves.jpeg)',
    backgroundSize: 'cover',
    cursor: 'none',
  },
};

export default function EraseReveal(props) {
  const [cursorVisible, setCursorVisible] = useState(false);

  return (
    <div
      style={style.container}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
    >
      <h1
        style={{
          mixBlendMode: 'difference',
          color: '#fff',
          fontSize: '8vw',
          fontFamily: "'Courgette', cursive",
        }}
      >
        {/* HIRE ME */}
      </h1>
      <Cursor cursorVisible={cursorVisible} />
    </div>
  );
}
