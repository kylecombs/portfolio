import React, { useState, useRef } from 'react';

export default function Contact() {
  const [contactHover, setContactHover] = useState(false);
  const [copySuccess, setCopySuccess] = useState(true);

  async function copyToClipboard(e) {
    try {
      await navigator.clipboard.writeText('kylecombs429@gmail.com');
    } catch (error) {
      console.error(error);
    }
    setCopySuccess(true);
  }

  return (
    <div
      onMouseOver={() => setContactHover(true)}
      onMouseLeave={() => {
        setContactHover(false);
        setCopySuccess(false);
      }}
    >
      {contactHover ? (
        <div>
          <h1
            style={{
              color: '#edeae4',
              fontFamily: 'Syne, sans-serif',
              fontSize: '2vw',
              cursor: 'pointer',
            }}
            onClick={copyToClipboard}
          >
            {copySuccess ? 'copied to clipboard' : 'kylecombs429@gmail.com'}
          </h1>
        </div>
      ) : (
        <h1
          style={{
            color: '#edeae4',
            fontFamily: 'Syne, sans-serif',
            fontSize: '10vw',
            cursor: 'pointer',
          }}
        >
          @
        </h1>
      )}
    </div>
  );
}
