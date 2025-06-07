import React from 'react';
import '../App.css';

function CustomButton({ title, className }) {
  return (
    <button className={`btn ${className || ''}`}>
      {title}
    </button>
  );
}

export default CustomButton;