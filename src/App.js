import React, { Fragment, useRef, useEffect, useState } from 'react';
import { Sphere } from './components/Sphere.js';
import Marquee from './components/Marquee.js';
import Blob from './components/Blob.js';
import Conway from './components/Conway.js';

import './App.css';

const App = () => {
  const [parentHeight, setHeight] = useState(0);
  const [parentWidth, setWidth] = useState(0);

  // const size = useWindowSize();
  const parentRef = useRef(null);

  // console.log('size', size);

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
          <Marquee />
        </div>
        <div className="box-three">
          <h1 style={{ color: '#edeae4', fontFamily: 'Syne, sans-serif' }}>
            hello@kyle.combs
          </h1>
        </div>
        <div className="box-four">
          <Sphere />
        </div>
        <div className="box-five" ref={parentRef}>
          <Blob height={parentHeight} width={parentWidth} />
        </div>
        <div className="box-six">
          {/* <div
            style={{
              gridArea: 'photo',
              backgroundImage:
                'https://images6.fanpop.com/image/photos/37500000/Chi-typing-on-a-computer-chis-sweet-home-chis-new-address-37597964-320-240.gif',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
            }}
          /> */}
          <img
            alt="cat typing gif"
            src="https://images6.fanpop.com/image/photos/37500000/Chi-typing-on-a-computer-chis-sweet-home-chis-new-address-37597964-320-240.gif"
            style={{
              gridArea: '1 / 1 / span 4 / span 3',
              // objectFit: 'cover',
              width: '100%',
              maxHeight: '100%',
            }}
          />
          <Conway />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
