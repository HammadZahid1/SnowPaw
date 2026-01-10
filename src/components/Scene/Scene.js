import React from 'react';
import './Scene.css';

const Scene = ({ children }) => {
  return (
    <div className="scene">
      {/* Background image will go here */}
      <div className="background"></div>
      {children}
    </div>
  );
};

export default Scene;