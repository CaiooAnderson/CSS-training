import React, { useState } from 'react';

const ThemeToggle = () => {
  const [lightTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!lightTheme);
    document.body.classList.toggle('light-mode');
  };

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={lightTheme} 
        onChange={toggleTheme} 
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;