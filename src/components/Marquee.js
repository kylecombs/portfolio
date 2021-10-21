import React from 'react';

const Marquee = () => {
  return (
    <div className="vertical">
      <div className="animation">
        <h1>
          {Array(50)
            .fill(
              ' Kyle Combs is a software engineer / creative developer / designer '
            )
            .join(' ')}
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
