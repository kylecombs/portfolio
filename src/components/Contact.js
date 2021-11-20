import React, { useState } from 'react';

export default function Contact() {
  const [contactHover, setContactHover] = useState(false);

  return (
    <div
      onMouseOver={() => setContactHover(true)}
      onMouseLeave={() => setContactHover(false)}
    >
      <h1
        style={{
          color: '#edeae4',
          fontFamily: 'Syne, sans-serif',
          fontSize: contactHover ? '4vw' : '10vw',
          cursor: 'pointer',
        }}
      >
        {contactHover ? 'contact me' : '@'}
      </h1>
    </div>
  );
}
