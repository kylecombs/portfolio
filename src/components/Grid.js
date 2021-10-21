import React, { Fragment } from 'react';

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function invertHex(hex) {
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}

const Grid = () => {
  return (
    <Fragment>
      <div className="container">
        <div
          className="sidebar"
          style={{ backgroundColor: '#' + randomColor() }}
        ></div>
        <div className="grid">
          {[...Array(64)].map((element, idx) => {
            const color = randomColor();
            return (
              <Fragment key={idx}>
                <div
                  className="cell"
                  style={{
                    backgroundColor: '#' + color,
                    color: '#' + invertHex(color),
                  }}
                >
                  {Math.floor(Math.random() * 10)}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Grid;
