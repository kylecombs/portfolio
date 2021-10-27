import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="vertical">
        <div className="animation">
          <h1>
            {Array(50)
              .fill(' Kyle Combs is a software engineer / musician / designer ')
              .join(' ')}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
