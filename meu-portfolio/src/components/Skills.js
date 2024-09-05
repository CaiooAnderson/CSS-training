import { useState } from 'react';
import Hint from './Hint';
import SkillDetails from './SkillDetails';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaPython, FaBootstrap, FaDocker, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiVisualstudiocode } from "react-icons/si";
import { Box, Typography } from '@mui/material';

const Skills = () => {

    const tips = [
        'Em constante evolução. Tenho muito o que aprender.',
        'Muitos desenvolvedores se sentem despreparados, mas quem realmente está?',
        'Se não concorda que o Visual Studio Code é a melhor IDE, fale agora ou cale-se para sempre.',
        'Responsividade no CSS? Amo!',
        'Percebo que gosto de programar quando o resultado é esperado, mas quando é inesperado, é ainda melhor!',
        'Versionamento de código é interessante!',
        'Nem mesmo os Vingadores podem superar a combinação do HTML, CSS e JavaScript.',
        'Estou me dedicando em TypeScript e React atualmente.',
        'Projetos feitos com Python que automatizam tarefas são impressionantes!',
        'Estou aprendendo a utilizar a ferramenta Docker. Acredito que seja uma ótima ferramenta!',
        'Bônus: Erros e Bugs são Bosses ou Aliados no começo de uma jornada?'
    ]

    const skills = {
        frontEnd: [
            { name: 'HTML', icon: FaHtml5, color: '#e44d26', bgColor: '#fff' },
            { name: 'CSS', icon: FaCss3Alt, color: '#1572b6', bgColor: '#fff' },
            { name: 'JavaScript', icon: FaJs, color: '#f7e02d', bgColor: '#000' },
            { name: 'React', icon: FaReact, color: '#61dafb', bgColor: 'fff' },
            { name: 'TypeScript', icon: SiTypescript, color: '#007acc', bgColor: '#fff' },
            { name: 'BootStrap', icon: FaBootstrap, color: '#563d7c', bgColor: '#fff'},
            { name: 'WordPress', icon: FaWordpress, color: '#0073aa', bgColor: '#fff' }
        ],
        backEnd: [
            { name: 'Node.js', icon: FaNodeJs, color: '#8cc84b', bgColor: '#fff' },
            { name: 'Python', icon: FaPython, color: '#306998', bgColor: '#fff' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#fff', bgColor: '#336791' },
        ],
        ferramentas: [
            { name: 'GitHub', icon: FaGithub, color: '#181717', bgColor: '#fff' },
            { name: 'Visual Studio Code', icon: SiVisualstudiocode, color: '#007acc', bgColor: '#fff' },
            { name: 'Figma', icon: FaFigma, color: '#f24e1e', bgColor: '#fff' },
            { name: 'Docker', icon: FaDocker, color: '#2496ed', bgColor: '#fff' },
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

    const [clickedSkill, setClickedSkill] = useState(null);

    return (
        <Box className='skills' sx={{ width: '400px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant='h4' sx={{ textAlign: 'left', mb: 4 }}>Habilidades</Typography>
            
            <Typography variant='h5' sx={{ textAlign: 'left' }}>Front-End</Typography>
            <Box className='skill-carousel-container'>
                <Carousel responsive={responsive}>
                    {skills.frontEnd.map(skill => (
                        <Box 
                            key={skill.name} 
                            className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : ''}`} 
                            onClick={() => setClickedSkill(skill.name)}
                            sx={{   
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center', 
                                backgroundColor: skill.bgColor, 
                                padding: 2, 
                                borderRadius: 1,
                                border: '2px solid',
                                borderColor: skill.color,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer'
                            }}>
                            <SkillDetails icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} />
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Typography variant='h5' sx={{ textAlign: 'left' }}>Back-End</Typography >
            <Box className='skill-carousel-container'>
                <Carousel responsive={responsive}>
                    {skills.backEnd.map(skill => (
                        <Box 
                            key={skill.name} 
                            className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : ''}`} 
                            onClick={() => setClickedSkill(skill.name)}
                            sx={{   
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center', 
                                backgroundColor: skill.bgColor, 
                                padding: 2, 
                                borderRadius: 1,
                                border: '2px solid',
                                borderColor: skill.color,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer'
                            }}>
                            <SkillDetails icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} />
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Typography variant='h5' sx={{ textAlign: 'left' }}>Ferramentas</Typography>
            <Box className='skill-carousel-container'>
                <Carousel responsive={responsive}>
                    {skills.ferramentas.map(skill => (
                        <Box 
                            key={skill.name} 
                            className={`skill-item ${clickedSkill === skill.name ? 'selected' : ''}`} 
                            onClick={() => setClickedSkill(skill.name)}
                            sx={{   
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center', 
                                backgroundColor: skill.bgColor, 
                                padding: 2, 
                                borderRadius: 1,
                                border: '2px solid',
                                borderColor: skill.color,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer'
                            }}>
                            <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} />
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Hint tips={tips} />
        </Box>
    );
}

export default Skills;