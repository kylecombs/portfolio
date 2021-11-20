import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Sphere } from './components/Sphere.js';
import Contact from './components/Contact';
import SideMarquee from './components/SideMarquee.js';
import LowerMarquee from './components/LowerMarquee.js';
import Blob from './components/Blob.js';
import Conway from './components/Conway.js';
import TextReveal from './components/TextReveal';
import RandomChar from './components/RandomChar.js';

import './App.css';

const App = () => {
  const [parentHeight, setHeight] = useState(0);
  const [parentWidth, setWidth] = useState(0);

  const parentRef = useRef(null);
  const eraseRevealParentRef = useRef(null);

  const getSize = () => {
    if (parentRef.current) {
      setHeight(parentRef.current.offsetHeight);
      setWidth(parentRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    getSize();
  }, []);

  useEffect(() => {
    getSize();
    window.addEventListener('resize', getSize);
    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', getSize);
    };
  }, [parentRef]);

  return (
    <Fragment>
      <div className="homepage-grid">
        {/* <div className="box-one"></div> */}
        <div className="box-two">
          <SideMarquee />
        </div>
        <div className="box-three">
          <Contact />
        </div>
        <div className="box-four">
          <Sphere />
        </div>
        <div className="box-five" ref={parentRef}>
          <Blob height={parentHeight} width={parentWidth} />
        </div>
        <div className="box-six">
          <img
            alt="cat typing gif"
            src="https://images6.fanpop.com/image/photos/37500000/Chi-typing-on-a-computer-chis-sweet-home-chis-new-address-37597964-320-240.gif"
            style={{
              gridArea: '1 / 1 / span 4 / span 3',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <div className="box-seven">
          <Conway />
        </div>
        <div className="box-eight" ref={eraseRevealParentRef}>
          <TextReveal parentRef={eraseRevealParentRef} />
        </div>
        <div className="box-ten">
          <RandomChar />
        </div>
        <div className="box-nine">
          <LowerMarquee />
        </div>
        {/* <div className="box-eleven"></div> */}
      </div>
    </Fragment>
  );
};

export default App;
