import { useState } from 'react';
import Hint from './Hint';
import { Box, Modal, Button, Typography, Card, CardContent, CardActions } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    ]

    const [filter, setFilter] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const projetos = [
        { name: 'Cartas Tridimensionais', categoria: 'Front-End', imagemProjeto: 'assets/projetos-capa/image.png', imagens: [], desc: 'Descrição do projeto' },
        { name: 'Projeto 2', categoria: 'Back-End', imagemProjeto: '', imagens: [], desc: 'Descrição do projeto' },
        { name: 'Projeto 3', categoria: 'Outros', imagemProjeto: '', imagens: [], desc: 'Descrição do projeto' },
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
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };

    return (
        <Box className='projects' sx={{ 
                                        mt: 0, 
                                        p: 2, 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        height: '100vh', 
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
            <Typography variant='h4'>Projetos</Typography>
            <Box>
                <Button onClick={() => setFilter('Todos')}>Todos</Button>
                <Button onClick={() => setFilter('Front-End')}>Front-End</Button>
                <Button onClick={() => setFilter('Back-End')}>Back-End</Button>
                <Button onClick={() => setFilter('Outros')}>Outros</Button>
            </Box>
            <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <Carousel responsive={responsive} partialVisible infinite containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside={false}>
                {projetosFilter.map(project => (
                    <Box key={project.name} className="carousel-item" onClick={() => handleOpenModal(project)} sx={{ 
                                                                                                        cursor: 'pointer', 
                                                                                                        textAlign: 'center' 
                                                                                                        }}>
                        <img src={project.imagemProjeto} alt={project.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <Typography variant='h6'>{project.name}</Typography>
                    </Box>
                ))}
            </Carousel>
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Card sx={{
                    width: '80%',
                    maxWidth: 600,
                    margin: 'auto',
                    mt: '10%',
                    padding: 2,
                    borderRadius: 4,
                    boxShadow: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}>
                    {selectedProject && (
                        <>
                            <CardContent>
                                <Typography variant="h4">{selectedProject.name}</Typography>
                                <img src={selectedProject.imagemProjeto} alt={selectedProject.name} style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }} />
                                <Typography variant="body1">{selectedProject.desc}</Typography>

                                <Carousel responsive={responsive} partialVisible infinite containerClass="carousel-container"
                                    itemClass="carousel-item-padding-40-px"
                                    renderDotsOutside={false}>
                                    {selectedProject.imagens.map((media, index) => (
                                        <Box key={index} className="carousel-item" sx={{ cursor: 'pointer', textAlign: 'center' }}>
                                            {media.includes('.mp4') ? (
                                                <video controls style={{ width: '100%', borderRadius: '8px' }}>
                                                    <source src={media} type="video/mp4" />
                                                    Seu navegador não suporta vídeos.
                                                </video>
                                            ) : (
                                                <img src={media} alt={`Imagem ${index + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
                                            )}
                                        </Box>
                                    ))}
                                </Carousel>

                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" href={`#`} target="_blank">
                                    Acessar Repositório
                                </Button>
                                <Button variant="outlined" color="secondary" href={`#`} target="_blank">
                                    Acessar Site do Projeto
                                </Button>
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