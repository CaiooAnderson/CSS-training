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
          backgroundImage: 'linear-gradient(135deg, #b4bfff 0%, #21d4fd 100%)',
          px: { xs: 2, sm: 3, md: 6 }
        }}>
        <Zoom in={true} timeout={1500}>
          <Typography className='home-title' variant="h2" sx={{ 
                                                              fontWeight: 'bold', 
                                                              fontSize: { xs: '1.75rem', sm: '2.75rem', md: '3.75rem'} 
                                                              }}>
            Bem-vindo ao meu Portfólio!
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2000}>
          <Typography className='home-subtitle' variant="h6" sx={{ 
                                                                mt: 2, 
                                                                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } 
                                                                }}>
            Este é o meu laboratório, onde as ideias ganham vida.
          </Typography>
        </Zoom>
        <Zoom in={true} timeout={2500}>
          <Button variant="contained" sx={{ 
                                          mt: 4, 
                                          backgroundColor: '#000', 
                                          color: '#fff',
                                          px: { xs: 1, sm: 2 }
                                          }} onClick={() => window.open('https://drive.google.com/file/d/1-kefFziEzV0tSfeXT-mnJeBTAiazRds4/view?usp=sharing', '_blank')}>
            <Typography sx= {{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem', xl: '1.2rem' } }} className='home-button-text' variant='subtitle2'>
              Currículo
            </Typography>
            <OpenInNewOutlinedIcon className='home-button-icon' sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }}} />
          </Button>
        </Zoom>
      </Box>
    </Fade>
  );
};

export default Home;