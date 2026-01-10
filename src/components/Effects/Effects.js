import React from 'react';
import './Effects.css';

const Effects = () => {
  return (
    <div className="effects-container">
      <div className="bulb-line"></div>
      <img 
        src="/bulb.png" 
        alt="Hanging Bulb" 
        className="bulb-image"
      />
      <div className="glow"></div>
    </div>
  );
};

export default Effects;