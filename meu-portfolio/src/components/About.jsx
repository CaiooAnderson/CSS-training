    import React from 'react';
    import { Fade, Box, Typography, Zoom, Grid } from '@mui/material';
    import Graduacao from './Graduacao';
    import Cursos from './Cursos';
    import Hint from './Hint';

    const About = () => {

        const tips = [
            'Não possuo experiência profissional, porém estou em busca de novas oportunidades!',
            'A vida é curta demais para não usar atalhos no teclado.',
            'Meu foco está em aprender e determinar que sou capaz!',
            'Uma frase que me comove a cada dia: "Que a força esteja com você".',
            'Colaboração e trabalho em equipe são essenciais para o sucesso de um projeto.',
            'Comecei com o pé esquerdo na programação: Erros de Tela Azul!',
            'Estou sempre em busca de novos desafios para enxergar minhas habilidades escondidas.',
            'Confesso que... Eu não tomo café e sou programador. É preocupante?',
            'Erros são chatos, mas é com eles que aprendemos e melhoramos.',
            'Amo Front-End porque cada detalhe conta, e a atenção aos mínimos detalhes faz toda a diferença.',
            'Sempre me esforço para que um dia o sonho de trabalhar como desenvolvedor se torne uma realidade.',
            'Bônus: Qual árvore os desenvolvedores amam? A árvore ipê, a árvore de diretórios ou a árvore binária?'
        ]

        return (
            <Fade in={true} timeout={1000}>
                <Box className='about' sx={{    
                                            mt: 0,
                                            p: { xs: 0, md: 2 },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '100vh',
                                            position: 'relative',
                                            width: { xs: 'calc(100vw - 80px)' }
                                            }}>
                <Zoom in={true} timeout={1750}>
                    <Box className='about-title' sx={{ 
                                                    width: '100%', 
                                                    display: 'flex', 
                                                    justifyContent: 'left', 
                                                    pl: { xs: 1, sm: 0 }, 
                                                    pt: { xs: 1, sm: 0 } 
                                                    }}>
                        <Typography variant='h4' sx={{ 
                                                    fontWeight: 'bold', 
                                                    borderBottom: '4px solid #4a148c', 
                                                    color: '#003366', 
                                                    fontSize: { xs: '1.5rem', sm: '2rem' },
                                                    mb: { xs: 2, sm: 4 }
                                                    }}>
                            Sobre
                        </Typography>
                    </Box>
                </Zoom>
                <Box className='about-container' sx={{ margin: 'auto 0', width: '100%' }}>
                <Grid container className='about-center' sx={{ width: '100%', gap: { xs: 2, sm: 4, md: 8, lg: 12}, flexDirection: { xs: 'column', md: 'row' }, margin: '0 auto' }}>
                    <Fade in={true} timeout={2000}>
                        <Grid item className='about-info' sx={{ 
                                                                width: '100%',
                                                                backgroundColor: '#b4bfff', 
                                                                borderRadius: { xs: 0, md: '8px'},
                                                                filter: 'drop-shadow(0 0 5px #000)', 
                                                                height: { xs: 'auto', md: '400px' }, 
                                                                overflow: 'hidden'
                                                            }}>
                            <Graduacao />
                        </Grid>
                    </Fade>
                    <Fade in={true} timeout={2000}>
                        <Grid item className='about-info' sx={{ 
                                                                width: '100%',
                                                                backgroundColor: '#b4bfff', 
                                                                borderRadius: { xs: 0, md: '8px'}, 
                                                                filter: 'drop-shadow(0 0 5px #000)', 
                                                                height: { xs: 'auto', md: '400px' }, 
                                                                overflow: 'hidden' 
                                                            }}>
                            <Cursos />
                        </Grid>
                    </Fade>
                </Grid>
                </Box>
                    <Fade in={true} timeout={4500}>
                        <Box className='hint-box'>
                            <Hint tips={tips} />
                        </Box>
                    </Fade>
                </Box>
            </Fade>
        );
    };

    export default About;