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
        '< Desenvolvedor Front-End />',
        '< Desenvolvedor Back-End />',
        '< Desenvolvedor Web />',
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
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100vh',
                                    position: 'relative'
                                    }}>
            <Zoom in={true} timeout={1750}>
            <Box className='contact-title' sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
            <Typography variant='h4' sx={{
                                        textAlign: 'left',
                                        mb: -4,
                                        fontWeight: 'bold',
                                        borderBottom: '2px solid #000'
                                        }}>
                Contato
            </Typography>
            </Box>
            </Zoom>
            <Fade in={true} timeout={2500}>
                <Box className='contact-info-container' sx={{ margin: 'auto', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Box className='contact-info'>
                        <Typography variant='h3'>
                            Caio Anderson
                        </Typography>
                            <Box className='contact-container' sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='words-container' sx={{
                                                                    position: 'relative',
                                                                    width: '400px',  
                                                                    overflow: 'hidden',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                    }}>
                                    <Slide direction='left' in={slideIn} timeout={500}>
                                        <Typography variant='h5'>
                                        <span className='words-container' style={{ whiteSpace: 'nowrap' }}>
                                            {palavras[index]}
                                        </span>
                                        </Typography>
                                    </Slide>
                                </Box>
                                <Box className={`portal-icon ${isActive ? 'active' : ''}`} style={{
                                                                    borderTopRightRadius: '10%',
                                                                    borderBottomRightRadius: '10%',
                                                                    borderRadius: '50%',
                                                                    padding: '10px',
                                                                    marginLeft: '0px',
                                                                   }}>
                                    <GiPortal size={48} className='portal-icon-svg' />
                                </Box>
                            </Box>
                    </Box>
                    <Box className='contact-socials'>
                        <a href='https://linkedin.com/in/caioandersongoes' target='_blank' rel='noreferrer'>
                            <FaLinkedin size={32}></FaLinkedin>
                        </a>
                        <a href='https://github.com/CaiooAnderson' target='_blank' rel='noreferrer'>
                            <FaGithub size={32}></FaGithub>
                        </a>
                        <a href='mailto:caio2.dev@gmail.com'>
                            <CiMail size={32}></CiMail>
                        </a>
                        <a href='https://www.instagram.com/caioo_213/' target='_blank' rel="noreferrer">
                            <FaInstagram size={32}></FaInstagram>
                        </a>
                        <a href="https://wa.me/5521995397912?text=Olá,%20Caio.%20Fiquei%20interessado%20na%20apresentação%20dada%20em%20seu%20portfólio!%20Podemos%20conversar?" target='_blank' rel="noopener noreferrer">
                            <FaWhatsapp size={32}></FaWhatsapp>
                        </a>
                    </Box>
                </Box>
            </Fade>
            <Fade in={true} timeout={4500}>
            <Box className='hint-box'>
                <Hint tips={tips} />
            </Box>
            </Fade>
        </Box>
        </Fade>
    );
}

export default Contact;