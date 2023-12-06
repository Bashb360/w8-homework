import React, { useState } from 'react';

const withColor = (WrappedComponent) => {
  const WithColor = (props) => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [buttonName, setButtonName] = useState('BERLIN');

    const handleColorChange = () => {
      const newColor = prompt('#000000');
      setBackgroundColor(newColor);
    };

    const handleButtonNameChange = () => {
      const newButtonName = prompt('BERRYBASH:');
      setButtonName(newButtonName);
    };

    return (
      <div>
        <button onClick={handleColorChange}>{buttonName}</button>
        <WrappedComponent
          {...props}
          backgroundColor={backgroundColor}
          buttonName={buttonName}
          handleColorChange={handleColorChange}
          handleButtonNameChange={handleButtonNameChange}
        />
      </div>
    );
  };

  return WithColor;
};

export default withColor;
