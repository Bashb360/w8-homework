import withColor from './withColor';
import React, { useState } from 'react';

const ColorButton = () => {
  const [color, setColor] = useState('WHITE');

  const handleClick = () => {
    setColor(color === 'WHITE'? 'BLACK' : 'WHITE');
  };

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {color}
    </button>
  );
};

export default withColor(ColorButton);
