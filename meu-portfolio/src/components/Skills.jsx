import { useState, useEffect } from 'react';
import Hint from './Hint';
import SkillDetails from './SkillDetails';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaPython, FaBootstrap, FaDocker, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiVisualstudiocode, SiMui } from "react-icons/si";
import { Box, Typography, Fade, Zoom } from '@mui/material';

const Skills = () => {

    const tips = [
        'Em constante evolução. Tenho muito o que aprender.',
        'Muitos desenvolvedores se sentem despreparados, mas quando que estamos preparados?',
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
            { name: 'React.js', icon: FaReact, color: '#61dafb', bgColor: '#fff' },
            { name: 'Material UI', icon: SiMui, color: '#3f51b5', bgColor: '#fff' },
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
            { name: 'VS Code', icon: SiVisualstudiocode, color: '#007acc', bgColor: '#fff' },
            { name: 'Figma', icon: FaFigma, color: '#f24e1e', bgColor: '#fff' },
            { name: 'Docker', icon: FaDocker, color: '#2496ed', bgColor: '#fff' },
        ]
    };

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
    };

    const [clickedSkill, setClickedSkill] = useState(null);
    
    const handleClickOutside = (event) => {
        if (!event.target.closest('.selecionado')) {
          setClickedSkill(null);
        }
      };

      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    const handleSkillClick = (skillName) => { setClickedSkill(prevSkill => prevSkill === skillName ? null : skillName) };

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        const y = ((clientY - rect.top) / rect.height) * 100;

        currentTarget.style.setProperty('--x', `${x}%`);
        currentTarget.style.setProperty('--y', `${y}%`);
    };

    return (
        <Fade in={true} timeout={1000}>
        <Box className='skills' sx={{ 
                                    mt: 0,  
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100vh',
                                    position: 'relative',
                                    overflowY: 'auto' 
                                }} onMouseMove={handleMouseMove}>
                <Zoom in={true} timeout={1750}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                <Typography variant='h4' sx={{ 
                                            textAlign: 'left', 
                                            mb: -4, 
                                            fontWeight: 'bold', 
                                            borderBottom: '2px solid #000',
                                            fontSize: { xs: '1.5rem', sm: '2rem' } 
                                        }}>
                    Habilidades
                </Typography>
                </Box>
                </Zoom>
                <Box className='skill-container' sx={{ margin: 'auto', width: '100%', px: { xs: 1, sm: 2 } }}>
                <Box className='skills-carousels'>
                    <Box className='front-end-skills' sx={{ mt: 2 , textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>Front-End</Typography>
                            <Box className='skill-carousel-container'>
                                <Carousel responsive={responsive}>
                                    {skills.frontEnd.map(skill => (
                                <Box 
                                    key={skill.name} 
                                    className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : 'nao-selecionado'}`} 
                                    onClick={() => handleSkillClick(skill.name)}
                                    sx={{    
                                        borderColor: skill.color,
                                    }}>
                                    <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} isSelected={clickedSkill === skill.name} />
                                </Box>
                            ))}
                                </Carousel>
                            </Box>
                        </Box>
                    <Box className='back-end-skills' sx={{ mt: 2 , textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>Back-End</Typography>
                            <Box className='skill-carousel-container'>
                                <Carousel responsive={responsive}>
                                {skills.backEnd.map(skill => (
                                <Box 
                                    key={skill.name} 
                                    className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : 'nao-selecionado'}`} 
                                    onClick={() => handleSkillClick(skill.name)}
                                    sx={{   
                                        borderColor: skill.color,
                                    }}>
                                    <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} isSelected={clickedSkill === skill.name} />
                                </Box>
                            ))}
                                </Carousel>
                            </Box>
                        </Box>
                    <Box className='tools-skills' sx={{ mt: 2 , textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>Ferramentas</Typography>
                            <Box className='skill-carousel-container'>
                                <Carousel responsive={responsive}>
                                {skills.ferramentas.map(skill => (
                                <Box 
                                    key={skill.name} 
                                    className={`skill-item ${clickedSkill === skill.name ? 'selecionado' : 'nao-selecionado'}`} 
                                    onClick={() => handleSkillClick(skill.name)}
                                    sx={{   
                                        borderColor: skill.color,
                                    }}>
                                    <SkillDetails key={skill.name} icon={skill.icon} label={skill.name} color={skill.color} bgColor={skill.bgColor} isSelected={clickedSkill === skill.name} />
                                </Box>
                            ))}
                                </Carousel>
                            </Box>
                    </Box>
                </Box>
            </Box>
                <Fade in={true} timeout={4500}>
                    <Box className='hint-box'>
                    <Hint tips={tips} />
                    </Box>
                </Fade>
        </Box>
        </Fade>
    );
}

export default Skills;