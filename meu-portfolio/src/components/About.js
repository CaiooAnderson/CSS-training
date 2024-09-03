import React from 'react';
import { Fade, Box, Typography, Zoom } from '@mui/material';
import Graduacao from './Graduacao';
import Cursos from './Cursos';
import Hint from './Hint';

const About = () => {

    const tips = [
        'Não possuo experiência profissional, porém estou em busca de novas oportunidades!',
        'A vida é curta demais para não usar atalhos no teclado.',
        'Meu foco está em aprender. Determinar que sou capaz!',
        'Uma frase que me comove a cada dia programando: Que a força esteja com você.',
        'Creio que, a colaboração e o trabalho em equipe são essenciais para o sucesso de um projeto.',
        'Eu comecei com o pé esquerdo na programação: Erros de Tela Azul!',
        'Estou sempre em busca de novos desafios para enxergar minhas habilidades escondidas.',
        'Ok. Eu confesso... Eu não tomo café.',
        'Sim. Erros são chatos, mas com eles que aprendemos e nos tornamos melhores.',
        'O amor que tenho pelo Front-End é devido aos simples detalhes que os jogos e as redes da internet demonstram',
        'O meu amor pelo Back-End veio das interações e da vida que os jogos ganhavam com os códigos',
        'Sempre me esforço para que um dia o sonho de trabalhar como desenvolvedor se torne uma realidade.',
        'Bônus: Qual a árvore que os desenvolvedores mais amam? A árvore ipê, a árvore de diretórios ou a árvore binária?'
    ]

    return (
        <Fade in={true} timeout={1000}>
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
            <Zoom in={true} timeout={1750}>
                <Box className='about-title' sx={{ position: 'absolute', top: 32, left: 32 }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 4, borderBottom: '2px solid #000' }}>
                        Sobre
                    </Typography>
                </Box>
            </Zoom>
            <Box className='about-center' sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Fade in={true} timeout={2000}>
                    <Box className='about-container' sx={{ maxWidth: 'max-content', borderRadius: '8px', filter: 'drop-shadow(0 0 5px #000)', height: '100%', overflow: 'hidden' }}>
                        <Graduacao />
                    </Box>
                </Fade>
                <Fade in={true} timeout={2000}>
                    <Box className='about-container' sx={{ maxWidth: 'max-content', borderRadius: '8px', filter: 'drop-shadow(0 0 5px #000)', height: '100%', overflow: 'hidden' }}>
                        <Cursos />
                    </Box>
                </Fade>
            </Box>
                <Fade in={true} timeout={3000}>
                    <Box className='about-hint'>
                        <Hint tips={tips} />
                    </Box>
                </Fade>
            </Box>
        </Fade>
    );
};

export default About;