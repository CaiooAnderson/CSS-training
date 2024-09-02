import React, { useRef, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cursos = () => {
    const [filter, setFilter] = useState('Front-End');
    const carouselRef = useRef(null);

    const cursos = {
        'Front-End': [
            {   nome: 'Front-end: HTML, CSS, JavaScript, React e TypeScript', 
                curso: 'Udemy', duração: '50', year: '2022'
            },
            {   nome: 'HTML: Elementos para a criação de páginas Web',
                curso: 'Bradesco', duração: '0', year: '2000' }
        ],
        'Back-End': [
            {   nome: 'Python: Conhecimento básico ao intermediário', 
                curso: 'CVTI', duração: '40', year: '2023' },
            {   nome: 'Desenvolvimento Back-End com JavaScript e MongoDB', 
                curso: 'Alura', duração: '0', year: '2023' },
            {   nome: 'Node.js: Foco no back-end', 
                curso: 'Alura', duração: '0', year: '2024' }
        ],
        'Outros': [
            {   nome: 'Fundamentos de TI - Hardware e Software', 
                curso: 'Bradesco', duração: '0', year: '2000' },
            {   nome: 'Lei Geral de Proteção de Dados (LGPD)', 
                curso: 'Bradesco', duração: '0', year: '2000' },
            {   nome: 'Introdução à Programação Orientada a Objetos (POO)', 
                curso: 'Bradesco', duração: '0', year: '2000' },
            {   nome: 'Inglês (Avançado): Curso de Capacitação',
                curso: 'Wizard', duração: '0', year: '2016'
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
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
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
            width: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            gap: 2,
            padding: '8px 0'
            }}>
            <Typography className='container-name' variant="h6" sx={{ textAlign: 'center', width: '100%' }}>Cursos Adicionais</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 1 }}>
                <Button className={filter === 'Front-End' ? 'active' : ''} variant={filter === 'Front-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Front-End')}>
                    Front-End
                </Button>
                <Button className={filter === 'Back-End' ? 'active' : ''} variant={filter === 'Back-End' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Back-End')}>
                    Back-End
                </Button>
                <Button className={filter === 'Outros' ? 'active' : ''} variant={filter === 'Outros' ? 'contained' : 'outlined'} onClick={() => handleFilterChange('Outros')}>
                    Outros
                </Button>
            </Box>
            <Box sx={{ position: 'relative', maxWidth: '464px', width: '90%', flexDirection: 'column' }}>
                <Carousel className='carousel' responsive={responsive} ssr={true} containerClass="carousel-container" ref={carouselRef}>
                    {cursos[filter].map((object, index) => (
                        <Box className='curso-container' key={filter + index} sx={{ 
                            borderRadius: '8px', 
                            width: '90%', 
                            maxWidth: '350px', 
                            height: '250px', 
                            display: 'flex', 
                            flexDirection: 'column',
                            whiteSpace: 'normal', 
                            overflow: 'hidden',
                            pt: 2,
                            position: 'relative'
                            }}>
                            <Box className='curso-title' sx={{ 
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                flexGrow: 1,
                                m: 1
                                }}>    
                                <Typography variant="subtitle2" sx={{ 
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    mb: 2,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                    }}>
                                        {object.nome}
                                </Typography>
                            </Box>
                            <Box className='curso-footer' sx={{ 
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                paddingBottom: '10px',
                                paddingLeft: '10px',
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