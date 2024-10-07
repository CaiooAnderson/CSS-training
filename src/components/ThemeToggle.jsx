import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const syncWithSystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setDarkTheme(prefersDark);
  document.body.classList.toggle('dark-mode', prefersDark);
};

  useEffect(() => {
    syncWithSystemTheme();
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setDarkTheme(e.matches);
      document.body.classList.toggle('dark-mode', e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-mode', !darkTheme);
  };

  return (
    <FormControlLabel
      className='switch'
      control={
        <Switch
          checked={darkTheme}
          onChange={toggleTheme}
        />
      }
      label={darkTheme ? 'Escuro' : 'Claro'}
    />
  );
};

export default ThemeToggle;