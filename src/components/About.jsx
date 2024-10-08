import React from 'react';
import { Fade, Box, Typography, Zoom, Grid } from '@mui/material';
import Graduacao from './Graduacao';
import Cursos from './Cursos';
import Hint from './Hint';
import { useTranslation } from 'react-i18next';


const About = () => {

    const { t } = useTranslation();

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
                                        p: { xs: 0, sm: 1, md: 2 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100vh',
                                        position: 'relative',
                                        width: { xs: 'calc(100vw - 80px)', md: '100%' },
                                        background: 'var(--about-background)',
                                        '@media (max-width: 430px)': {
                                            height: '100%',
                                            background: 'var(--about-background)'
                                        }
                                        }}>
            <Zoom in={true} timeout={1750}>
                <Box className='about-title' sx={{ 
                                                width: '100%', 
                                                display: 'flex',
                                                justifyContent: 'left', 
                                                pl: { xs: 1, sm: 2, md: 3 }, 
                                                pt: { xs: 1, sm: 2, md: 3 },
                                                '@media (max-width: 430px)': {
                                                    marginBottom: '20px'
                                                }
                                                }}>
                    <Typography variant='h4' sx={{ 
                                                fontWeight: 'bold', 
                                                borderBottom: '4px solid',
                                                borderColor: 'var(--button-bg-color)', 
                                                color: 'var(--sidebar-text-hover-color)',
                                                borderBottomLeftRadius: '12px',
                                                borderBottomRightRadius: '4px',
                                                fontSize: { xs: '1.5rem', sm: '2rem', md: '2rem', lg: '2rem' },
                                                mb: { xs: 2, sm: 0 },
                                                '@media (max-width: 1024px)': {
                                                    '& h4': {
                                                        marginBottom: 0
                                                    }
                                                }
                                                }}>
                        {t('about')}
                    </Typography>
                </Box>
            </Zoom>
            <Box className='about-container' sx={{ 
                                                margin: 'auto 0', 
                                                width: '100%',
                                                '@media (max-width: 430px)': {
                                                    '.about-center': {
                                                        gap: 0
                                                    }
                                                }
                                                }}>
            <Grid container className='about-center' sx={{ 
                                                            width: '100%', 
                                                            gap: { xs: 2, sm: 4, md: 6, lg: 8}, 
                                                            flexDirection: { xs: 'column', md: 'row' }, 
                                                            alignItems: 'center', 
                                                            justifyContent: 'space-evenly', 
                                                            margin: '0 auto',
                                                            '@media (max-width: 1280px)': {
                                                                marginBottom: '20px'
                                                            },
                                                            '@media (max-width: 430px)': {
                                                                margin: 0,
                                                                '.about-info': {
                                                                    marginBottom: '20px'
                                                                }
                                                            }
                                                        }}>
                <Fade in={true} timeout={2000}>
                    <Grid item className='about-info' sx={{ 
                                                            width: { xs: '100%', sm: '55%', md: '400px' },
                                                            backgroundColor: '#b4bfff',
                                                            borderRadius: { xs: 0, sm: '4px', md: '8px'},
                                                            filter: 'drop-shadow(0 0 5px #000)', 
                                                            height: { xs: 'auto', md: '400px' }, 
                                                            overflow: 'hidden',
                                                            '@media (max-width: 1024px)': {
                                                                height: '320px'
                                                            }
                                                        }}>
                        <Graduacao />
                    </Grid>
                </Fade>
                <Fade in={true} timeout={2000}>
                    <Grid item className='about-info' sx={{ 
                                                            width: { xs: '100%', sm: '55%', md: '400px' },
                                                            backgroundColor: '#b4bfff', 
                                                            borderRadius: { xs: 0, sm: '4px', md: '8px'}, 
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