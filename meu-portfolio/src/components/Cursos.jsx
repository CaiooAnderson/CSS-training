import React, { useRef, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cursos = () => {
    const [filter, setFilter] = useState('Front-End');
    const carouselRef = useRef(null);

    const cursos = {
        'Front-End': [
            {   
                nome: 'Front-end: HTML, CSS, JavaScript, React e TypeScript', 
                curso: 'Udemy', duração: '50', year: '2022'
            },
            {   
                nome: 'HTML: Elementos para a criação de páginas Web',
                curso: 'Bradesco', duração: '10', year: '2023'
            },
            {   
                nome: 'HTML e CSS: Responsividade e publicação de projetos',
                curso: 'Alura', duração: '6', year: '2024'
            },
            {   
                nome: 'HTML - Avançado: Elementos para a criação de páginas Web',
                curso: 'Bradesco', duração: '20', year: '2023'
            },
            {   
                nome: 'Melhore sua experiência de desenvolvimento com TypeScript',
                curso: 'Alura', duração: '32', year: '2024'
            },
            {   
                nome: 'React: como os componentes funcionam',
                curso: 'Alura', duração: '8', year: '2024'
            },
            {   
                nome: 'React: Desenvolvendo com JavaScript',
                curso: 'Alura', duração: '14', year: '2024'
            },
            {   
                nome: 'TypeScript: Técnicas e boas práticas',
                curso: 'Alura', duração: '10', year: '2024'
            },
        ],
        'Back-End': [
            {   
                nome: 'Python: Desenvolvimento do básico ao nível intermediário', 
                curso: 'CVTI', duração: '40', year: '2023' 
            },
            {   
                nome: 'Curso de Node.js: Programando em JavaScript com foco no back-end', 
                curso: 'Alura', duração: '74', year: '2024' 
            },
            {   
                nome: 'Node.js: Desenvolvendo API com Sequelize e SQLite', 
                curso: 'Alura', duração: '20', year: '2024' 
            },
            {   
                nome: 'Node.js: Buscas, filtros, paginação e erros em API', 
                curso: 'Alura', duração: '10', year: '2024' 
            },
            {   
                nome: 'Node.js: API Rest com Express e MongoDB', 
                curso: 'Alura', duração: '10', year: '2024' 
            },
            {   
                nome: 'JS: manipulando elementos no DOM', 
                curso: 'Alura', duração: '6', year: '2024' 
            },
        ],
        'Outros': [
            {   
                nome: 'Microsoft Excel 2016 - Intermediário',
                curso: 'Bradesco', duração: '20', year: '2024' 
            },
            {   
                nome: 'HTTP: entendendo a web por baixo dos panos', 
                curso: 'Alura', duração: '10', year: '2024' 
            },
            {   
                nome: 'Fundamentos de TI - Hardware e Software', 
                curso: 'Bradesco', duração: '15', year: '2023' 
            },
            {   
                nome: 'Lei Geral de Proteção de Dados (LGPD)', 
                curso: 'Bradesco', duração: '30', year: '2023' 
            },
            {   
                nome: 'Introdução à Programação Orientada a Objetos (POO)', 
                curso: 'Bradesco', duração: '10', year: '2023' 
            },
            {   
                nome: 'Inglês (Avançado): Curso de Capacitação',
                curso: 'Wizard', duração: '400', year: '2016' 
            }
        ]
    };

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 1,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

      const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        if (carouselRef.current) {
            carouselRef.current.goToSlide(0, true);
        }
    };

    return (
        <Box className='curso' sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            gap: 2,
            padding: '8px 0'
            }}>
            <Typography className='container-name' variant="h6" sx={{ 
                                                                    textAlign: 'center', 
                                                                    width: '100%', 
                                                                    borderBottom: '1px solid #00000080', 
                                                                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } 
                                                                    }}>
                Cursos Adicionais
            </Typography>
            <Box className='curso-buttons' sx={{ 
                                                display: 'flex', 
                                                flexDirection: 'row', 
                                                gap: { xs: 1, md: 2}, 
                                                mb: { xs: 0, md: 1 },
                                                '@media (max-width: 430px)': {
                                                    display: 'flex',
                                                    justifyContent: 'space-around',
                                                    width: '100%',
                                                    padding: '0 10px',
                                                    margin: 0,
                                                    'button': {
                                                        flexGrow: 1,
                                                        fontSize: '0.75rem',
                                                        lineHeight: '1rem',
                                                        padding: '0.25rem 0'
                                                    }
                                                } 
                                            }}>
                <Button className={filter === 'Front-End' ? 'active' : 'desativado'} variant={filter === 'Front-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Front-End')} 
                    sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, 
                        background: filter === 'Front-End' ? 'var(--button-active-bg-color)' : 'var(--button-bg-color)',
                        color: filter === 'Front-End' ? 'var(--button-active-text-color)' : 'var(--sidebar-button-text-color)',
                        border: filter === 'Front-End' ? '1px solid #fff' : '1px solid var(--button-active-bg-color)',
                        boxShadow: filter === 'Front-End' && '0 0 2px #0000001a',
                        '&:hover': filter !== 'Front-End' && {
                            opacity: 1,
                            filter: 'brightness(1.2)',
                            background: 'var(--button-bg-color)',
                        }
                    }}>
                    Front End
                </Button>
                <Button className={filter === 'Back-End' ? 'active' : 'desativado'} variant={filter === 'Back-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Back-End')} 
                    sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                        background: filter === 'Back-End' ? 'var(--button-active-bg-color)' : 'var(--button-bg-color)',
                        color: filter === 'Back-End' ? 'var(--button-active-text-color)' : 'var(--sidebar-button-text-color)',
                        border: filter === 'Back-End' ? '1px solid #fff' : '1px solid var(--button-active-bg-color)',
                        boxShadow: filter === 'Back-End' && '0 0 2px #0000001a',
                        '&:hover': filter !== 'Back-End' && {
                            opacity: 1,
                            filter: 'brightness(1.2)',
                            background: 'var(--button-bg-color)',
                        }
                    }}>
                    Back End
                </Button>
                <Button className={filter === 'Outros' ? 'active' : 'desativado'} variant={filter === 'Outros' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Outros')} 
                    sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                        background: filter === 'Outros' ? 'var(--button-active-bg-color)' : 'var(--button-bg-color)',
                        color: filter === 'Outros' ? 'var(--button-active-text-color)' : 'var(--sidebar-button-text-color)',
                        border: filter === 'Outros' ? '1px solid #fff' : '1px solid var(--button-active-bg-color)',
                        boxShadow: filter === 'Outros' && '0 0 2px #0000001a',
                        '&:hover': filter !== 'Outros' && {
                            opacity: 1,
                            filter: 'brightness(1.2)',
                            background: 'var(--button-bg-color)',
                        }
                    }}>
                    Outros
                </Button>
            </Box>
            <Box sx={{ 
                        position: 'relative', 
                        maxWidth: '100%', 
                        width: { xs: '85%', sm: '90%', md: '100%' }, 
                        flexDirection: 'column' 
                    }}>
                <Carousel className='curso-carousel' responsive={responsive} ssr={true} containerClass="curso-carousel-container" ref={carouselRef}> 
                    {cursos[filter].map((object, index) => (
                        <Box className='curso-container' key={filter + index} sx={{ 
                            borderRadius: '8px', 
                            width: { xs: '80%', sm: '90%'}, 
                            maxWidth: '350px', 
                            height: '250px', 
                            display: 'flex', 
                            flexDirection: 'column',
                            whiteSpace: 'normal', 
                            overflow: 'hidden',
                            pt: 2,
                            position: 'relative',
                            background: 'linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%)',
                            border: '2px solid #420079',
                            '@media (max-width: 1024px)': {
                                height: '200px',
                                maxWidth: '200px'
                            }
                            }}>
                            <Box className='curso-title' sx={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                flexGrow: 1,
                                m: { xs: 0, md: 1},
                                }}>    
                                <Typography variant="subtitle2" sx={{ 
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    mb: { xs: 0.25, md: 2},
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    fontSize: { xs: '0.875rem', sm: '1rem' }
                                    }}>
                                        {object.nome}
                                </Typography>
                            </Box>
                            <Box className='curso-footer' sx={{ 
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                paddingBottom: { xs: 0.5, md: 0.75},
                                paddingLeft: { xs: 0.5, md: 0.75},
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%'
                                }}>
                                <Typography variant="body2" sx={{ textAlign: 'left' }}>Curso: {object.curso}</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'left' }}>Duração: {object.duração} horas</Typography>
                                <Typography variant="body2" sx={{ textAlign: 'left' }}>Ano: {object.year}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
};

export default Cursos;