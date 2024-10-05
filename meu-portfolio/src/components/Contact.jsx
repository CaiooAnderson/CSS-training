import Hint from './Hint.jsx'
import { Fade, Box, Typography, Slide, Zoom } from '@mui/material';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GiPortal } from "react-icons/gi";

const Contact = () => {

    const tips = [
        'Conecte-se comigo nas redes sociais para acompanhar meu trabalho e projetos !',
        'Fique à vontade para me enviar uma mensagem, seja sobre projetos ou uma simples troca de ideias.',
        'Um grande exemplo do CSS sem o JavaScript é: Como uma nave tão linda assim não consegue voar?',
        'Estou a procura de novas oportunidades e colaborações!',
        'Talvez Jack Sparrow não gostaria tanto de TypeScript, pois ele gosta de caminhar fora das leis.',
        'Caso queira me dar algum feedback sobre o meu portfólio fico agradecido, mesmo com elogios ou críticas!',
        'Então é só comentar o erro na linha de código que o erro desaparece?',
        'Este portfólio foi feito com amor, carinho e um pouco de CSS. Bem pouco mesmo..',
        'Os sabres de luz da saga Star Wars possuem o filtro de brightness e drop-shadow muito altos.',
        'Começar na programação com um hello world parece ser chique. O meu foi um comando para tirar o erro de tela azul do meu computador!',
        'Bônus: Programar é passar metade do tempo resolvendo problemas e a outra metade tentando lembrar o que você estava fazendo.'
    ]

    const palavras = [
        '<Desenvolvedor Front-End />',
        '<Desenvolvedor Back-End />',
        '<Desenvolvedor Web />',
    ];

    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleSlide = () => {
            setIsActive(true);
            setSlideIn(false);

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % palavras.length);
                setSlideIn(true);
            }, 500); 

            setTimeout(() => {
                setIsActive(false);
            }, 1500);
        };

        const intervalId = setInterval(handleSlide, 5000);

        return () => clearInterval(intervalId);
    }, [palavras.length]);

    return (
        <Fade in={true} timeout={1000}>
        <Box className='contact' sx={{
                                    mt: 0,
                                    p: { xs: 0, sm: 1, md: 2 },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100vh',
                                    width: { xs: 'calc(100vw - 80px)', md: 'auto'},
                                    position: 'relative',
                                    background: 'var(--about-background)',
                                    }}>
            <Zoom in={true} timeout={1750}>
            <Box className='contact-title' sx={{ 
                                                width: '100%', 
                                                display: 'flex', 
                                                justifyContent: 'left', 
                                                pl: { xs: 1, sm: 2, md: 3 }, 
                                                pt: { xs: 1, sm: 2, md: 3 }
                                            }}>
            <Typography variant='h4' sx={{
                                        textAlign: 'left',
                                        mb: { xs: 2, sm: 0 },
                                        fontWeight: 'bold',
                                        fontSize: { xs: '1.5rem', sm: '2rem' },
                                        borderBottom: '4px solid',
                                        borderColor: 'var(--button-bg-color)',
                                        borderBottomLeftRadius: '12px',
                                        borderBottomRightRadius: '4px',
                                        color: 'var(--sidebar-text-hover-color)',
                                        }}>
                Contato
            </Typography>
            </Box>
            </Zoom>
            <Fade in={true} timeout={2500}>
                <Box className='contact-info-container' sx={{ margin: { xs: 'auto 8px', md: 'auto'}, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Box className='contact-info' sx= {{ width: { xs: '100%', sm: 'auto' } }}>
                        <Typography variant='h3' sx={{ 
                                                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                                                        color: 'var(--home-h2-color)',
                                                    }}>
                            Caio Anderson
                        </Typography>
                            <Box className='contact-container' sx={{ 
                                                                    display: 'flex',
                                                                    width: '100%', 
                                                                    alignItems: 'center',
                                                                    '.portal-icon-svg': {
                                                                        fontSize: { xs: '24px', sm: '32px', md: '40px' },
                                                                    }
                                                                }}>
                                <Box className='words-container' sx={{
                                                                    position: 'relative',
                                                                    width: { xs: '180px', sm: '350px', md: '400px' },
                                                                    padding: 0,
                                                                    overflow: 'hidden',
                                                                    display: 'flex',
                                                                    justifyContent: 'left',
                                                                    alignItems: 'center',
                                                                    whiteSpace: 'nowrap'
                                                                    }}>
                                    <Slide direction='left' in={slideIn} timeout={500}>
                                        <Typography variant='h5' sx={{ 
                                                                    fontSize: { xs: '0.75rem', sm: '1.25rem', md: '1.5rem' },
                                                                    color: 'var(--home-h6-color)'
                                                                    }}>
                                        <span className='words-container' style={{ whiteSpace: 'nowrap' }}>
                                            {palavras[index]}
                                        </span>
                                        </Typography>
                                    </Slide>
                                </Box>
                                <Box className={'portal-icon'} sx={{
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    transition: 'animation 1s ease-in-out, color 0.5s ease',
                                                                    background: 'var(--home-background)',
                                                                    color: 'var(--sidebar-button-text-color)',
                                                                    borderTopRightRadius: '10%',
                                                                    borderBottomRightRadius: '10%',
                                                                    borderRadius: '50%',
                                                                    padding: { xs: '5px', sm: '10px' },
                                                                    marginLeft: 0,
                                                                    animation: isActive ? 'pulseIcon 1s ease-in-out' : 'none'
                                                                   }}>
                                    <GiPortal className='portal-icon-svg' 
                                        sx={{
                                            filter: 'drop-shadow(0 0 5px var(--button-active-text-color))', 
                                            }}/>
                                </Box>
                            </Box>
                    </Box>
                    <Box className='contact-socials' sx={{
                                                    display: 'flex', 
                                                    justifyContent: 'space-around',
                                                    gap: { xs: 1, sm: 2 },
                                                    fontSize: { xs: '24px', sm: '32px' },
                                                    height: '40%',
                                                    width: '80%',
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-end',
                                                    a: {
                                                        color: 'var(--dark-button-active-text-color)',
                                                    },
                                                    'a:hover': {
                                                        color: 'var(--home-button-hover-color)',
                                                        filter: 'drop-shadow(0px 0px 10px #fff)',
                                                    }
                                                    }}>
                        <a href='https://linkedin.com/in/caioandersongoes' target='_blank' rel='noreferrer'>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href='https://github.com/CaiooAnderson' target='_blank' rel='noreferrer'>
                            <FaGithub></FaGithub>
                        </a>
                        <a href='mailto:caio2.dev@gmail.com'>
                            <CiMail></CiMail>
                        </a>
                        <a href='https://www.instagram.com/caioo_213/' target='_blank' rel="noreferrer">
                            <FaInstagram></FaInstagram>
                        </a>
                        <a href="https://wa.me/5521995397912?text=Olá,%20Caio.%20Fiquei%20interessado%20na%20apresentação%20dada%20em%20seu%20portfólio!%20Podemos%20conversar?" target='_blank' rel="noopener noreferrer">
                            <FaWhatsapp></FaWhatsapp>
                        </a>
                    </Box>
                </Box>
            </Fade>
            <Fade in={true} timeout={4500}>
            <Box className='hint-box' sx={{
                                            fontSize: { xs: '0.75rem', sm: '1rem' },
                                            textAlign: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                            }}>
                <Hint tips={tips} />
            </Box>
            </Fade>
        </Box>
        </Fade>
    );
}

export default Contact;