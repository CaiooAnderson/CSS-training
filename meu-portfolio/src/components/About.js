import React from 'react';
import { Fade, Box, Typography, Slide } from '@mui/material';
import Graduacao from './Graduacao';
import Cursos from './Cursos';

const About = () => {
    return (
            <Box className='about' sx={{    mt: 0,
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '100vh',
                                            backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                            position: 'relative'
                                        }}>
            <Slide direction='down' in={true} timeout={1500}>
                <Box className='about-title' sx={{ position: 'absolute', top: 32, left: 32 }}>
                    <Typography variant='h4' sx={{ color: '#fff', fontWeight: 'bold', mb: 4, borderBottom: '2px solid #000' }}>
                        Sobre
                    </Typography>
                </Box>
            </Slide>
            <Box className='about-center' sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Fade in={true} timeout={2000}>
                    <Box sx={{ maxWidth: 'max-content', bgcolor: 'background.paper', borderRadius: '8px', filter: 'drop-shadow(0 0 5px #000)', height: 'max-content', overflow: 'hidden' }}>
                        <Graduacao />
                    </Box>
                </Fade>
                <Fade in={true} timeout={2000}>
                    <Box sx={{ maxWidth: 'max-content', height: '100%', overflow: 'hidden' }}>
                        <Cursos />
                    </Box>
                </Fade>
            </Box>
                <Slide direction='up' in={true} timeout={2000}>
                    <Typography variant='body1' sx={{ color: '#333', mt: 2, maxWidth: '600px', mx: 'auto' }}>
                        Ainda não possuo experiência profissional, mas estou aberto para novas oportunidades e sou bastante dedicado. Aqui está uma lista dos cursos que já realizei:
                    </Typography>
                </Slide>
            </Box>
    );
};

export default About;