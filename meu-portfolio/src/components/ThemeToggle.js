import React, { useState } from 'react';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <label className="switch">
      <input 
        type="checkbox" 
        checked={darkTheme} 
        onChange={toggleTheme} 
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ThemeToggle;