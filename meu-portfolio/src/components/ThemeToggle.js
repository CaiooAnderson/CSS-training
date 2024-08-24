import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-mode');
  };

  return (
        <FormControlLabel className='switch' control={<Switch defaultChecked />} label={darkTheme ? 'Escuro' : 'Claro'} checked={darkTheme} onChange={toggleTheme} />
  );
};

export default ThemeToggle;