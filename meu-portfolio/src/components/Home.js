import React from 'react';
import { Fade, Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h1">Bem-vindo ao Meu Portfólio</Typography>
        <Typography variant="body1">Explore meus projetos e habilidades.</Typography>
      </Box>
    </Fade>
  );
};

export default Home;