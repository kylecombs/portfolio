import React, { Fragment, useRef, useEffect, useState } from 'react';
import Grid from './components/Grid.js';
import { Sphere } from './components/Sphere.js';
import Marquee from './components/Marquee.js';
import Blob from './components/Blob.js';

import './App.css';

const App = () => {
  const [parentHeight, setHeight] = useState(0);
  const [parentWidth, setWidth] = useState(0);

  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      setHeight(parentRef.current.offsetHeight);
      setWidth(parentRef.current.offsetWidth);
    }
  }, [parentRef]);

  console.log();

  return (
    <Fragment>
      <div className="homepage-grid">
        {/* <div className="box-one"></div> */}
        <div className="box-two">
          <Marquee />
        </div>
        <div className="box-three"></div>
        <div className="box-four">
          <Sphere />
        </div>
        <div className="box-five" ref={parentRef}>
          <Blob height={parentHeight} width={parentWidth} />
        </div>
        <div className="box-six"></div>
      </div>
    </Fragment>
  );
};

export default App;
