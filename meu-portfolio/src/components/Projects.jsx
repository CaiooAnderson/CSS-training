import { useState, useEffect } from 'react';
import { Box, Button, Typography, Modal, Card, CardContent, CardActions } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaPython, FaBootstrap} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMui } from "react-icons/si";
import Hint from './Hint'

const Projects = () => {

    const tips = [
        'Aqui estão meus projetos, ou como gosto de chamar: "meus experimentos de laboratório", onde a mágica do código acontece!',
        'Cada projeto mostra um passo na minha jornada como desenvolvedor, mostrando o que posso criar.',
        'Acredito que os projetos nunca tem um final ao certo. Sempre possuem uma cara nova, uma nova história..',
        'Uso projetos pessoais como estudo prático para alcançar novos objetivos.',
        'Se seu projeto não ficou como queria, relaxe. Projetos mudam sempre que você adiciona, inova ou edita algo.',
        'Quanto você dedicaria aos seus projetos? Eu costumo me dedicar mais aos meus projetos do que a séries como Stranger Things.',
        'Utilizar o repositório do GitHub para salvar projetos é uma boa ideia!',
        'Projetos não precisam de 100 páginas para serem perfeitos. Ninguém gostaria de ler tanto.',
        'Meu repositório é como um laboratório, o experimento pode explodir, bombar, ou nem funcionar.',
        'Estes projetos destacam minha habilidade em trabalhar com diferentes tecnologias e frameworks.',
        'Bônus: Por que fazer um simples "Hello World" enquanto você pode construir um universo inteiro?'
    ];

    const [filter, setFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const projetos = [
        { name: 'Cartas Tridimensionais', categoria: 'Front-End', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto', linguagens: [<FaHtml5 />, <FaCss3Alt />] },
        { name: 'Tabela de Ranking', categoria: 'Front-End', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto', linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />] },
        { name: 'Pomodoro (Temporizador)', categoria: 'Outros', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto', linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />] },
        { name: 'Calculadora de Imposto de Renda', categoria: 'Back-End', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto', linguagens: [<FaPython />] },
        { name: 'Gestão de Equipes', categoria: 'Outros', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto', linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <FaNodeJs />] },
    ];

    const projetosFilter = projetos.filter(project => filter === 'Todos' || project.categoria === filter);
    
    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;

        currentTarget.style.setProperty('--x', `${x}%`);
        currentTarget.style.setProperty('--y', `${y}%`);
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Box className='projects'>
            <Box className='project-title'>
                <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 4, borderBottom: '2px solid #000' }}>
                    Projetos
                </Typography>
            </Box>

            <Box className='project-carousel-container' onMouseMove={handleMouseMove} 
                sx={{
                    background: `radial-gradient(circle at var(--x) var(--y), #d4b0ff, #8e44ad)`,
                    transition: 'none'
                }}>
                <Box className='project-carousel-button-container' 
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(circle, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0) 70%)',
                        padding: 2,
                        borderRadius: 4,
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
                            transform: 'rotate(30deg)',
                            opacity: 0.5,
                            pointerEvents: 'none',
                        }
                    }}>
                    <Button className='project-button' onClick={() => setFilter('Todos')} 
                    sx={{ 
                        background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 1) 100%)', 
                        color: '#fff', 
                        '&:hover': { background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 0.6) 100%)' } 
                        }}>
                            Todos
                    </Button>
                    <Button className='project-button' onClick={() => setFilter('Front-End')} 
                    sx={{ 
                        background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 1) 100%)', 
                        color: '#fff', 
                        '&:hover': { background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 0.6) 100%)' } 
                        }}>
                            Front-End
                    </Button>
                    <Button className='project-button' onClick={() => setFilter('Back-End')} 
                    sx={{ 
                        background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 1) 100%)', 
                        color: '#fff', 
                        '&:hover': { background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 0.6) 100%)' } 
                        }}>
                            Back-End
                    </Button>
                    <Button className='project-button' onClick={() => setFilter('Outros')} 
                    sx={{ 
                        background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 1) 100%)', 
                        color: '#fff', 
                        '&:hover': { background: 'linear-gradient(90deg, rgba(128, 0, 255, 1) 0%, rgba(138, 43, 226, 0.6) 100%)' } 
                        }}>
                            Outros
                    </Button>
                </Box>

                <Box className='project-carousel'>
                    <Box className='carousel' 
                        sx={{ 
                            width: '1000px',
                            maxWidth: '1200px', 
                            margin: '0 auto' 
                        }}>
                    <Carousel 
                        responsive={responsive} 
                        infinite 
                        centerMode 
                        transitionDuration={500}
                        renderDotsOutside={true}
                        >
                        {projetosFilter.map((project) => (
                            <Box key={project.name} onClick={() => handleOpenModal(project)} 
                                sx={{ 
                                padding: '10px',
                                width: '300px',
                                height: '220px',
                                backgroundColor: '#fff', 
                                cursor: 'pointer',
                                textAlign: 'center',
                                position: 'relative',
                                transition: 'transform 0.5s, opacity 0.5s',
                                '&:hover': { 
                                    transform: 'scale(1.05)', 
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                                    zIndex: 10,
                                },
                                '&.react-multi-carousel-item': {
                                    opacity: 0.5,
                                    transition: 'opacity 0.5s',
                                },
                                '&.react-multi-carousel-item-active': {
                                    opacity: 1,
                                }
                            }}>
                                <img src={project.imagemProjeto} alt={project.name} style={{ width: '300px', height: '200px', borderRadius: '0px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }} />
                                <Typography variant='h6' sx={{ mt: 2 }}>{project.name}</Typography>
                            </Box>
                        ))}
                    
                    </Carousel>
                    </Box>
                </Box>
            </Box>

            {/* Modal */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Card sx={{
                    width: '80%',
                    maxWidth: '400px',
                    margin: 'auto',
                    mt: '10%',
                    padding: 2,
                    borderRadius: 4,
                    backgroundColor: '#fff',
                    position: 'relative',
                    overflow: 'visible',
                }}>
                    {selectedProject && (
                        <>
                            <CardContent>
                                <Typography variant="h4" sx={{ mb: 2 }}>{selectedProject.name}</Typography>
                                <img src={selectedProject.imagemProjeto} alt={selectedProject.name} style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }} />
                                <Typography variant="body1">{selectedProject.desc}</Typography>
                                <Box className='tech-icons-card' sx={{ 
                                                                    position: 'absolute', 
                                                                    top: '50%', 
                                                                    left: '-24px', 
                                                                    display: 'flex', 
                                                                    flexDirection: 'column', 
                                                                    transform: 'translateY(-50%)',
                                                                }}>
                                    {selectedProject.linguagens.map((Icon, index) => (
                                        <Box key={index} sx={{ 
                                                                fontSize: '2rem', 
                                                                backgroundColor: '#fff', 
                                                                my: 0.5,
                                                                borderTopLeftRadius: '40%', 
                                                                borderBottomLeftRadius: '40%', 
                                                                borderBottomRightRadius: '0%', 
                                                                borderTopRightRadius: '0%', 
                                                                p: 1, 
                                                                transform: 'translateX(-50%)', 
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)' 
                                                            }}>
                                            {Icon}
                                        </Box>
                                    ))}
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" sx={{ backgroundColor: '#6a1b9a', color: '#fff', '&:hover': { backgroundColor: '#4a0072' } }}>Acessar Repositório</Button>
                                <Button variant="outlined" sx={{ borderColor: '#6a1b9a', color: '#6a1b9a', '&:hover': { borderColor: '#4a0072', color: '#4a0072' } }}>Acessar Site</Button>
                            </CardActions>
                        </>
                    )}
                </Card>
            </Modal>
            <Hint tips={tips} />
        </Box>
    );
}

export default Projects;