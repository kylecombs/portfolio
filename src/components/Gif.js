import React from 'react';

export default function Gif() {
  return (
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
  );
}
