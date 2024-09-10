import { useState } from 'react';
import { Box, Button, Typography, Modal, Card, CardContent, CardActions } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
        { name: 'Cartas Tridimensionais', categoria: 'Front-End', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto' },
        { name: 'Tabela de Ranking', categoria: 'Front-End', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto' },
        { name: 'Pomodoro (Temporizador)', categoria: 'Outros', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto' },
        { name: 'Calculadora de Imposto de Renda', categoria: 'Back-End', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto' },
        { name: 'Gestão de Equipes', categoria: 'Outros', imagemProjeto: 'https://via.placeholder.com/300x200', desc: 'Descrição do projeto' },

    ];

    const projetosFilter = projetos.filter(project => filter === 'Todos' || project.categoria === filter);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    }

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
                <Typography variant='h4'>
                    Projetos
                </Typography>
            </Box>
            <Box className='project-carousel-container'>
                <Box className='project-carousel-button-container'>
                    <Button className='project-button' onClick={() => setFilter('Todos')}>Todos</Button>
                    <Button className='project-button' onClick={() => setFilter('Front-End')}>Front-End</Button>
                    <Button className='project-button' onClick={() => setFilter('Back-End')}>Back-End</Button>
                    <Button className='project-button' onClick={() => setFilter('Outros')}>Outros</Button>
                </Box>

                <Box className='project-carousel'>
                    <Box className='carousel' sx={{ width: '700px' }}>
                    <Carousel responsive={responsive} infinite centerMode>
                        {projetosFilter.map(project => (
                            <Box className='project-carousel-item' key={project.name} onClick={() => handleOpenModal(project)} sx={{ backgroundColor: '#fff', cursor: 'pointer', textAlign: 'center' }}>
                                <img src={project.imagemProjeto} alt={project.name} style={{ width: '300px', height: '200px', borderRadius: '8px' }} />
                                <Typography variant='h6'>{project.name}</Typography>
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
                    backgroundColor: '#fff'
                }}>
                    {selectedProject && (
                        <>
                            <CardContent>
                                <Typography variant="h4">{selectedProject.name}</Typography>
                                <img src={selectedProject.imagemProjeto} alt={selectedProject.name} style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }} />
                                <Typography variant="body1">{selectedProject.desc}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary">Acessar Repositório</Button>
                                <Button variant="outlined" color="secondary">Acessar Site</Button>
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