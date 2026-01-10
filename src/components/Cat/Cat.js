import React from 'react';
import './Cat.css';

const Cat = () => {
  return (
    <div className="cat-container">
      <img 
        src="/cat.png" 
        alt="Snowpaw the Cat" 
        className="cat-image"
      />
    </div>
  );
};

export default Cat;