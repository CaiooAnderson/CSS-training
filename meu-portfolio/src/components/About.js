import React from 'react';
import { Fade, Box, Typography, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Slide, Zoom } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const About = () => {
    return (
        <Fade in={true} timeout={2500}>
            <Box className='about' sx={{    textAlign: 'center',
                                            mt: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '100vh',
                                            backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                        }}>
            <Slide direction='down' in={true} timeout={2000}>
                <Typography variant='h3' sx={{  color: '#fff', fontWeight: 'bold', mb: 4 }}>
                    Sobre Mim
                </Typography>
            </Slide>
            <Zoom in={true} timeout={3000}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mb: 4 }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <SchoolOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Graduação" secondary="Análise e Desenvolvimento de Sistemas" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocationOnOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Universidade" secondary="Unopar Anhanguera" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTimeOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Duração" secondary="Formado em Agosto de 2024" />
                </ListItem>
            </List>
            </Zoom>
                <Box sx={{ textAlign: 'left', mt: 4, maxWidth: '600px' }}>
                    <Slide direction='up' in={true} timeout={2000}>
                        <Typography variant='body2' sx={{ color: '#555' }}>
                            • Desenvolvimento Front-end: HTML, CSS, JavaScript, React e TypeScript - Udemy - 06/2023<br/>
                            • Curso de Python: Conhecimento básico ao intermediário com bibliotecas em Python - CVTI – 06/2023<br/>
                            • HTML - Avançado: Elementos para a criação de páginas Web - Fundação Bradesco<br/>
                            • Fundamentos de TI - Hardware e Software: Fundação Bradesco<br/>
                            • Lei Geral de Proteção de Dados (LGPD): Fundação Bradesco<br/>
                            • Introdução à Programação Orientada a Objetos (POO): Fundação Bradesco<br/>
                            • Desenvolvimento Back-End com JavaScript e MongoDB - Alura - 12/2023<br/>
                            • Curso de Node.js: Foco no back-end - Alura - 01/2024<br/>
                            • Cursos adicionais de JavaScript - Alura - 01/2024<br/>
                            • Inglês (Avançado): Curso de Capacitação - Wizard
                        </Typography>
                    </Slide>
                </Box>
                <Fade in={true} timeout={4000}>
                    <Typography variant='body1' sx={{ color: '#333', mt: 2, maxWidth: '600px' }}>
                        Ainda não possuo experiência profissional, mas estou aberto para novas oportunidades e sou bastante dedicado. Aqui está uma lista dos cursos que já realizei:
                    </Typography>
                </Fade>
        </Box>
    </Fade>
    );
};

export default About;