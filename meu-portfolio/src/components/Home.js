import React from 'react';
import { Fade, Box, Typography, Button, Zoom } from '@mui/material';

const Home = () => {
  return (
    <Fade in={true} timeout={1000}>
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
        <Zoom in={true} timeout={1500}>
          <Typography variant="h2" sx={{ color: '#000', fontWeight: 'bold' }}>
            Bem-vindo ao meu Portfólio!
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2000}>
          <Typography variant="h6" sx={{ color: '#2c2c2c', mt: 2 }}>
          Este é o meu laboratório, onde as ideias ganham vida.
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2500}>
          <Button variant="contained" sx={{ mt: 4, backgroundColor: '#000', color: '#fff' }}>
            Currículo
            
          </Button>
        </Zoom>
      </Box>
    </Fade>
  );
};

export default Home;