import React, { useRef, useState, useEffect, useCallback } from 'react';
import Cursor from './Cursor';

const style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#d9cfb6',
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
      <Cursor cursorVisible={cursorVisible} />
    </div>
  );
}
