import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="horizontal scroll">
        <div className="animation">
          <h1 id="lower-marquee">
            {Array(50)
              .fill(
                ' JavaScript / Node / Express / React / Redux / SQL / PostgreSQL / Sequelize / Git / GitHub / HTML5 / CSS3 / Mocha / Jasmine / TypeScript / '
              )
              .join(' ')}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
