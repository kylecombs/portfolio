import React, { useRef, useState, useEffect, useCallback } from 'react';
import Cursor from './Cursor';

const style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    // backgroundColor: '#595656',
    backgroundImage:
      'url(https://cdn.pixabay.com/photo/2017/08/30/13/16/wave-2697053_960_720.jpg)',
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
      {/* <h1
        style={{
          mixBlendMode: 'difference',
          color: '#fff',
          fontSize: '6vw',
        }}
      >
        Hello World
      </h1> */}
      <Cursor cursorVisible={cursorVisible} />
    </div>
  );
}
