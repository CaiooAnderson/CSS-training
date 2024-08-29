import React, { useState } from 'react';
import { Button, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Cursos = () => {
    const [filter, setFilter] = useState('Front-End');

    const cursos = {
        'Front-End': [
            {   nome: 'Desenvolvimento Front-end: HTML, CSS, JavaScript, React e TypeScript', 
                curso: 'Udemy', duração: '50', year: '2022'
            },
            {   nome: 'HTML - Avançado: Elementos para a criação de páginas Web',
                curso: 'Fundação Bradesco', duração: '0', year: '2000' }
        ],
        'Back-End': [
            {   nome: 'Curso de Python: Conhecimento básico ao intermediário com bibliotecas em Python', 
                curso: 'CVTI', duração: '40', year: '2023' },
            {   nome: 'Desenvolvimento Back-End com JavaScript e MongoDB', 
                curso: 'Alura', duração: '0', year: '2023' },
            {   nome: 'Curso de Node.js: Foco no back-end', 
                curso: 'Alura', duração: '0', year: '2024' }
        ],
        'Outros': [
            {   nome: 'Fundamentos de TI - Hardware e Software', 
                curso: 'Fundação Bradesco', duração: '0', year: '2000' },
            {   nome: 'Lei Geral de Proteção de Dados (LGPD)', 
                curso: 'Fundação Bradesco', duração: '0', year: '2000' },
            {   nome: 'Introdução à Programação Orientada a Objetos (POO)', 
                curso: 'Fundação Bradesco', duração: '0', year: '2000' },
            {   nome: 'Inglês (Avançado): Curso de Capacitação',
                curso: 'Wizard', duração: '0', year: '2016'
            }
        ]
    };

    return (
        <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 'max-content', bgcolor: '#f5f5f5', borderRadius: '8px', p: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Button variant={filter === 'Front-End' ? 'contained' : 'outlined'} onClick={() => setFilter('Front-End')} sx={{ mb: 1 }}>
                    Front-End
                </Button>
                <Button variant={filter === 'Back-End' ? 'contained' : 'outlined'} onClick={() => setFilter('Back-End')} sx={{ mb: 1 }}>
                    Back-End
                </Button>
                <Button variant={filter === 'Outros' ? 'contained' : 'outlined'} onClick={() => setFilter('Outros')}>
                    Outros
                </Button>
            </Box>
            <Box sx={{ flex: 1, height: '100%' }}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={cursos[filter].length}
                    visibleSlides={1}
                    infinite={true}
                >
            <Slider>
                        {cursos[filter].map((object, index) => (
                            <Slide index={index} key={filter + index}>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography>{object.nome}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>Curso: {object.curso}</Typography>
                                        <Typography>Duração: {object.duração} horas</Typography>
                                        <Typography>Ano: {object.year}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Slide>
                        ))}
                    </Slider>
                    <ButtonBack>Anterior</ButtonBack>
                    <ButtonNext>Próximo</ButtonNext>
                </CarouselProvider>
                </Box>
        </Box>
    );
};

export default Cursos;