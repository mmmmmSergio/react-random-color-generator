// Created the web app in one place to keep it clean and simple, since we dont use components with re-usability in this project

import React, { useState } from 'react';

function RandomColorGenerator() {
  // Initialize the color with white
  const [color, setColor] = useState('#FFFFFF');

  // Function to generate a random hex color
  const generateRandomColor = () => {
    const randomColor =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    setColor(randomColor);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px',
        textAlign: 'center',
      }}
    >
      {/* Area for showing the random color */}
      <div
        style={{
          backgroundColor: color,
          color: '#000',
          width: '400px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          marginBottom: '20px',
          fontSize: '24px',
          fontFamily: 'Arial',
        }}
      >
        Generated color: {color}
      </div>

      {/* Button for user input */}
      <button
        onClick={generateRandomColor}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor: '#333',
          color: '#FFF',
          border: 'none',
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default RandomColorGenerator;
