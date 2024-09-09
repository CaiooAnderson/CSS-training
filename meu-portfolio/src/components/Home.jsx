import React from 'react';
import { Fade, Box, Typography, Button, Zoom } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Home = () => {
  return (
    <Fade in={true} timeout={2000}>
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
        }}>
        <Zoom in={true} timeout={1500}>
          <Typography className='home-title' variant="h2" sx={{ fontWeight: 'bold' }}>
            Bem-vindo ao meu Portfólio!
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2000}>
          <Typography className='home-subtitle' variant="h6" sx={{ mt: 2 }}>
            Este é o meu laboratório, onde as ideias ganham vida.
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2500}>
          <Button variant="contained" sx={{ mt: 4, backgroundColor: '#000', color: '#fff' }}>
            Currículo
            <OpenInNewOutlinedIcon />
          </Button>
        </Zoom>
      </Box>
    </Fade>
  );
};

export default Home;