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
          <Gif />
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
