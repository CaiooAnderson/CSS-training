import React, { useState } from 'react';
import { Button, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Cursos = () => {
    const [filter, setFilter] = useState('Front-End');

    const cursos = {
        'Front-End': [
            {   nome: 'Desenvolvimento Front-end: HTML, CSS, JavaScript, React e TypeScript', 
                curso: 'Udemy', duração: '50', year: '2022'
            },
            {   nome: 'HTML: Elementos para a criação de páginas Web',
                curso: 'Fundação Bradesco', duração: '0', year: '2000' }
        ],
        'Back-End': [
            {   nome: 'Python: Conhecimento básico ao intermediário com bibliotecas em Python', 
                curso: 'CVTI', duração: '40', year: '2023' },
            {   nome: 'Desenvolvimento Back-End com JavaScript e MongoDB', 
                curso: 'Alura', duração: '0', year: '2023' },
            {   nome: 'Node.js: Foco no back-end', 
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

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
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

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Cursos</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mb: 1 }}>
                <Button variant={filter === 'Front-End' ? 'contained' : 'outlined'} onClick={() => setFilter('Front-End')}>
                    Front-End
                </Button>
                <Button variant={filter === 'Back-End' ? 'contained' : 'outlined'} onClick={() => setFilter('Back-End')}>
                    Back-End
                </Button>
                <Button variant={filter === 'Outros' ? 'contained' : 'outlined'} onClick={() => setFilter('Outros')}>
                    Outros
                </Button>
            </Box>
            <Box sx={{ maxWidth: '464px', width: '100%', flexDirection: 'column' }}>
                <Carousel responsive={responsive}>
                    {cursos[filter].map((object, index) => (
                        <Box key={filter + index} sx={{ bgcolor: 'background.paper', borderRadius: '8px', textAlign: 'center', width: '90%', maxWidth: '350px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', whiteSpace: 'normal', overflow: 'hidden', p: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, textOverflow: 'ellipsis', overflow: 'hidden' }}>{object.nome}</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Curso: {object.curso}</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Duração: {object.duração} horas</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Ano: {object.year}</Typography>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
};

export default Cursos;