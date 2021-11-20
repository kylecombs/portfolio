import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Sphere } from './components/Sphere';
import Contact from './components/Contact';
import SideMarquee from './components/SideMarquee';
import LowerMarquee from './components/LowerMarquee';
import Blob from './components/Blob';
import Conway from './components/Conway';
import TextReveal from './components/TextReveal';
import RandomChar from './components/RandomChar';
import Gif from './components/Gif';

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

  const randomTime = () => {
    return Math.random() * 4;
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
        <div
          className="box-two"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <SideMarquee />
        </div>
        <div
          className="box-three"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <Contact />
        </div>
        <div
          className="box-four"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <Sphere />
        </div>
        <div
          className="box-five"
          ref={parentRef}
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <Blob height={parentHeight} width={parentWidth} />
        </div>
        <div
          className="box-six"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <Gif />
        </div>
        <div
          className="box-seven"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <Conway />
        </div>
        <div
          className="box-eight"
          ref={eraseRevealParentRef}
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <TextReveal parentRef={eraseRevealParentRef} />
        </div>
        <div
          className="box-ten"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <RandomChar />
        </div>
        <div
          className="box-nine"
          style={{ animation: `${randomTime()}s fadeIn ease` }}
        >
          <LowerMarquee />
        </div>
        {/* <div className="box-eleven"></div> */}
      </div>
    </Fragment>
  );
};

export default App;
