import React, { useState, useEffect } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material'
import Switch from '@mui/material/Switch';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { t } = useTranslation();
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
    <Box>
    <FormControlLabel
      className='switch'
      control={
        <Switch
          checked={darkTheme}
          onChange={toggleTheme} sx={{ 
                                      transform: { xs: 'scale(1)', sm: 'scale(1.1)', md: 'scale(1.2)' }                              
                                    }}
        />
      }
      label={darkTheme ? t('theme.dark') : t('theme.light')}
    />
    </Box>
  );
};

export default ThemeToggle;