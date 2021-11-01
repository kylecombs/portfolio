import React, { useState } from 'react';
import produce from 'immer';

const numRows = 8;
const numCols = 17;

const style = {
  charBlock: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  chars: {
    margin: 0,
    fontSize: '1vw',
    cursor: 'default',
  },
};

export default function RandomChar() {
  const randChar = () => {
    return String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33));
  };

  const generateCharGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => randChar()));
    }

    return rows;
  };

  const [grid, setGrid] = useState(() => {
    return generateCharGrid();
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 1vw)`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i}-${k}`}
            onMouseEnter={() => {
              const newGrid = produce(grid, (gridCopy) => {
                gridCopy[i][k] = grid[i][k] ? randChar() : grid[i][k];
              });
              setGrid(newGrid);
            }}
            style={{
              width: '1vw',
              height: '1vw',
            }}
          >
            <p style={style.chars}>{grid[i][k]}</p>
          </div>
        ))
      )}
    </div>
  );
}
