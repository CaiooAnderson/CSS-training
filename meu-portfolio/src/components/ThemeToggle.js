import React, { useState } from 'react';
import '../styles.css';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={toggleTheme} className="btn btn-secondary">
      {darkTheme ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};

export default ThemeToggle;