import { useState } from 'react';
import Hint from './Hint';
import SkillCube from './SkillCube';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaPython, FaBootstrap, FaDocker, FaGithub, FaFigma } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiVisualstudiocode } from "react-icons/si";
import { Box } from '@mui/material';

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

    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = {
        frontEnd: [
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
        ],
        backEnd: [
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Python', icon: <FaPython /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
        ],
        ferramentas: [
            { name: 'GitHub', icon: <FaGithub /> },
            { name: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
            { name: 'Figma', icon: <FaFigma /> },
            { name: 'Docker', icon: <FaDocker /> },
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

    return (
        <section className='skills'>
            <h2>Habilidades</h2>
            
            <h3>Front-End</h3>
            <Box className='skill-carousel-container'>
                <Carousel responsive={responsive}>
                    {skills.frontEnd.map(skill => (
                        <SkillCube key={skill.name} icon={skill.icon} label={skill.name} />
                    ))}
                </Carousel>
            </Box>
            <h3>Back-End</h3>
            <Box className='skill-carousel-container'>
                <Carousel responsive={responsive}>
                    {skills.backEnd.map(skill => (
                        <SkillCube key={skill.name} icon={skill.icon} label={skill.name} />
                    ))}
                </Carousel>
            </Box>
            <h3>Ferramentas</h3>
            <Box className='skill-carousel-container'>
                <Carousel responsive={responsive}>
                    {skills.ferramentas.map(skill => (
                        <SkillCube key={skill.name} icon={skill.icon} label={skill.name} />
                    ))}
                </Carousel>
            </Box>
            <Hint tips={tips} />
        </section>
    );
}

export default Skills;