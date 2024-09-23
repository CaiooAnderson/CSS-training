import Hint from './Hint.jsx'
import { Fade, Box, Typography, Slide } from '@mui/material';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GiPortal } from "react-icons/gi";

const Contact = () => {

    const tips = [
        'Conecte-se comigo nas redes sociais para acompanhar meu trabalho e projetos.',
        'Fique à vontade para me enviar uma mensagem, seja sobre projetos ou uma simples troca de ideias.',
        'Um grande exemplo do CSS sem o JavaScript é: Como uma nave tão linda assim não consegue voar?',
        'Estou a procura de novas oportunidades e colaborações!',
        'Talvez Jack Sparrow não gostaria tanto de TypeScript, pois ele gosta de caminhar fora das leis.',
        'Caso queira me dar algum feedback sobre o meu portfólio fico agradecido, mesmo com elogios ou críticas!',
        'Então na verdade é só comentar o erro na linha de código que o erro desaparece?',
        'Este portfólio foi feito com amor, carinho e um pouco de CSS. Bem pouco mesmo..',
        'Acho que os sabres de luz da saga Star Wars possuem o filtro de brightness e drop-shadow muito altos.',
        'Então foi assim que você começou na programação? Com um hello world? Que chique, o meu foi um comando para tirar o erro de tela azul do meu computador!',
        'Bônus: Ser programador é passar metade do tempo resolvendo problemas e a outra metade tentando lembrar o que você estava fazendo.'
    ]

    const palavras = [
        ' Desenvolvedor Front-End ',
        ' Desenvolvedor Back-End ',
        ' Desenvolvedor Web ',
    ];

    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [portalColor, setPortalColor] = useState('#000');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIn(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % palavras.length);
                setSlideIn(true);
                setPortalColor('#800080');
            }, 500); 
        }, 2500); 

        return () => clearInterval(intervalId);
    }, [palavras.length]);

    return (
        <Box className='contact' sx={{
                                    mt: 0,
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100vh',
                                    position: 'relative'
                                    }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
            <Typography variant='h4' sx={{
                                        textAlign: 'left',
                                        mb: -4,
                                        fontWeight: 'bold',
                                        borderBottom: '2px solid #000'
                                        }}>
                Contato
            </Typography>
            </Box>
            <Fade in={true} timeout={2500}>
                <Box className='contact' sx={{ margin: 'auto' }}>
                    <Box className='contact-info'>
                        <Typography variant='h4'>
                            Caio Anderson -
                            <Box className='contact-words' sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box className='words-container' sx={{
                                                                position: 'relative',
                                                                width: '200px',  
                                                                overflow: 'hidden',
                                                                display: 'flex',
                                                                alignItems: 'center'
                                                                }}>
                            <Slide direction='left' in={slideIn} timeout={500}>
                                <span className='words-container' style={{ whiteSpace: 'nowrap' }}>
                                    {palavras[index]}
                                </span>
                            </Slide>
                            </Box>
                            <Box className='portal-icon' 
                        style={{
                            backgroundColor: portalColor,
                            borderRadius: '50%',
                            padding: '10px',
                            marginLeft: '10px',
                            transition: 'background-color 0.5s ease'
                        }}
                    >
                            <GiPortal size={48} color='#fff' />
                            </Box>
                            </Box>
                        </Typography>
                    </Box>
                    <Box className='contact-socials'>
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
                    </Box>
                </Box>
            </Fade>
            <Hint tips={tips} />
        </Box>
    );
}

export default Contact;