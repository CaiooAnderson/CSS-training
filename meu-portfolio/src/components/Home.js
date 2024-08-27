import React from 'react';
import { Fade, Box, Typography, Button, Slide } from '@mui/material';

const Home = () => {
  return (
    <Fade in={true} timeout={2500}>
      <Box 
        className='home' 
        sx={{ 
          textAlign: 'center', 
          mt: 0, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh',
          backgroundImage: 'linear-gradient(135deg, #b4bfff 0%, #21d4fd 100%)'
        }}
      >
        <Fade in={true} timeout={1000}>
          <Typography variant="h2" sx={{ color: '#000', fontWeight: 'bold' }}>
            Bem-vindo ao meu Portfólio!
          </Typography>
        </Fade>
        <Fade in={true} timeout={5000}>
          <Typography variant="body1" sx={{ color: '#0f0414', mt: 2 }}>
            Aqui será como um laboratório, feito para diversos experimentos.
          </Typography>
        </Fade>
        <Fade in={true} timeout={8000}>
          <Button variant="contained" sx={{ mt: 4, backgroundColor: '#000', color: '#fff' }}>
            Veja meus projetos
          </Button>
        </Fade>
      </Box>
    </Fade>
  );
};

export default Home;