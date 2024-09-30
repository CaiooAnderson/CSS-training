import { useState, useRef } from 'react';
import { Box, Button, Typography, Modal, Card, CardContent, CardActions, Fade, Zoom } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaPython, FaBootstrap} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMui } from "react-icons/si";
import Hint from './Hint';

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
    const carouselRef = useRef(null);

    const importAll = (r) => r.keys().map(r);
    const capas = importAll(require.context('../assets/projetos-capa', false, /\.(gif)$/));

    const projetos = [
        { name: 'Cartas Tridimensionais', categoria: 'Front-End', imagemProjeto: capas[0], imagensDemonstracao: [capas[1], capas[2]], desc: 'Experiência visual interativa com cartas em 3D e animações dinâmicas.', linguagens: [<FaHtml5 />, <FaCss3Alt />] },
        { name: 'Tabela de Ranking', categoria: 'Front-End', imagemProjeto: capas[1], imagensDemonstracao: [capas[1], capas[2]], desc: 'Tabela com a temática de Pokémon para criação e gerenciamento de novos usuários.', linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />] },
        { name: 'Pomodoro (Temporizador)', categoria: 'Outros', imagemProjeto: capas[2], imagensDemonstracao: [capas[1], capas[2]], desc: 'Ferramenta de produtividade com ciclos personalizáveis para foco e descanso.', linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />] },
        { name: 'Calculadora de Imposto de Renda', categoria: 'Back-End', imagemProjeto: capas[3], imagensDemonstracao: [capas[1], capas[2]], desc: 'Calculadora intuitiva para estimar o imposto de renda com base em rendimentos.', linguagens: [<FaPython />] },
        { name: 'Gestão de Equipes', categoria: 'Outros', imagemProjeto: capas[4], imagensDemonstracao: [capas[1], capas[2]], desc: 'Aplicação para criar e gerenciar times, distribuindo equipes.', linguagens: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />, <FaNodeJs />] },
    ];

    const projetosFiltrados = projetos.filter(project => filter === 'Todos' || project.categoria === filter);
    
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        if (carouselRef.current) {
            carouselRef.current.goToSlide(0);
        }
    };

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
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Fade in={true} timeout={1000}>
        <Box className='projects' sx={{ 
                                        mt: 0,  
                                        p: { xs: 0, md: 2 },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: { xs: '100%', sm: '100vh' },
                                        position: 'relative',
                                        width: { xs: 'calc(100vw - 80px)', md: '100%' }
                                    }}>
            <Zoom in={true} timeout={1750}>
            <Box className='project-title' sx= {{ 
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'left',
                                                    pl: { xs: 1, sm: 0.75, md: 0.5 }, 
                                                    pt: { xs: 1, sm: 0.75, md: 0.5 }
                                                }}>
                <Typography variant='h4' sx={{ 
                                                fontWeight: 'bold', 
                                                mb: { xs: 2, sm: 0 },
                                                borderBottom: '2px solid #000', 
                                                fontSize: { xs: '1.5rem', sm: '2rem' } 
                                            }}>
                    Projetos
                </Typography>
            </Box>
            </Zoom>
            <Fade in={true} timeout={2000}>
        <Box className='project-container' sx={{ margin: 'auto' }}>
            <Box className='project-carousel-container' onMouseMove={handleMouseMove} sx={{ 
                                                                                        width: { xs: '500px', sm: '500px' },
                                                                                        borderRadius: { xs: 0, sm: 1 },
                                                                                        'button': {
                                                                                            padding: { xs: '0px 4px', sm: '5px 15px' }
                                                                                        },
                                                                                        '.project-carousel-button-container': {
                                                                                            mb: { xs: 1, sm: 2 },
                                                                                        }
                                                                                        }}>
                <Box className='project-carousel-button-container' 
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        padding: { xs: 0.25, sm: 2},
                        borderRadius: { xs: 2, sm: 4},
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #87CEEB 25%, #4682B4 50%, #1E90FF 75%)',
                        opacity: 0.5, 
                        zIndex: -1,
                        },
                    }}>
                    <Button className={`project-button ${filter === 'Todos' ? 'active' : 'desativado'}`} variant={filter === 'Todos' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Todos')}>
                        Todos
                    </Button>
                    <Button className={`project-button ${filter === 'Front-End' ? 'active' : 'desativado'}`} variant={filter === 'Front-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Front-End')}>
                        Front-End
                    </Button>
                    <Button className={`project-button ${filter === 'Back-End' ? 'active' : 'desativado'}`} variant={filter === 'Back-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Back-End')}>
                        Back-End
                    </Button>
                    <Button className={`project-button ${filter === 'Outros' ? 'active' : 'desativado'}`} variant={filter === 'Outros' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Outros')}>
                        Outros
                    </Button>
                </Box>
                <Fade in={true} timeout={3000}>
                <Box className='project-carousel'>
                    <Box className='carousel' 
                        sx={{ 
                            width: '1000px',
                            margin: '0 auto',
                            p: 0 
                        }}>
                    <Box className='carousel-container' sx={{ width: '600px', display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
                    <Carousel 
                        ref={carouselRef}
                        responsive={responsive} 
                        infinite={filter === 'Todos'}
                        showDots={false}
                        customTransition="transform 500ms ease-in-out"
                        itemClass="carousel-item-padding-40-px"
                        transitionDuration={500}
                        renderDotsOutside={true}
                        arrow={true}
                        containerClass="carousel-container"
                        >
                        {projetosFiltrados.map((project) => (
                            <Box key={project.name} onClick={() => handleOpenModal(project)} 
                                sx={{ 
                                margin: '0 40px',
                                width: '220px',
                                height: '250px',
                                backgroundColor: '#fff', 
                                cursor: 'pointer',
                                textAlign: 'center',
                                position: 'relative',
                                transition: 'transform 0.5s, opacity 0.5s',
                                '&:hover': { 
                                    transform: 'scale(0.95)', 
                                    zIndex: 10,
                                },
                            }}>
                                <img src={project.imagemProjeto} alt={''} style={{ width: '100%', height: '100%', border: '3px solid #8a2be2', minHeight: '220px', objectFit: 'cover', borderRadius: '0px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)' }} />
                            </Box>
                        ))}
                    </Carousel>
                    </Box>
                    </Box>
                </Box>
            </Fade>
            </Box>
        </Box>
            </Fade>

            {/* Modal */}
            <Modal open={openModal} onClose={handleCloseModal}>
                <Card sx={{
                    width: '400px',
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
            <Fade in={true} timeout={4500}>
                <Box className='hint-box'>
                    <Hint tips={tips} />
                </Box>
            </Fade>
        </Box>
        </Fade>
    );
}

export default Projects;