import { useState } from 'react';
import Hint from './Hint';

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

    const [filter, setFilter] = useState('All');

    const skills = [
        { name: 'HTML', category: 'Front-End' },
        { name: 'CSS', category: 'Front-End' },
        { name: 'JavaScript', category: 'Front-End' },
        { name: 'React', category: 'Front-End' },
        { name: 'TypeScript', category: 'Front-End' },
        { name: 'Node.js', category: 'Back-End' },
        { name: 'Python', category: 'Back-End' },
        { name: 'PostgreSQL', category: 'Back-End' },
        { name: 'Git', category: 'Tool' },
        { name: 'GitHub', category: 'Tool' },
        { name: 'Docker', category: 'Tool' },
        { name: 'Visual Studio Code', category: 'Tool' },
    ];

    const filteredSkills = skills.filter(skill => filter === 'All' || skill.category === filter);

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Front-End')}>Front-End</button>
                <button onClick={() => setFilter('Back-End')}>Back-End</button>
                <button onClick={() => setFilter('Tool')}>Tools</button>
            </div>
            <div>
                {filteredSkills.map(skill => (
                    <div key={skill.name}>
                        <img src={`path_to_icons/${skill.name}.png`} alt={skill.name} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
            <Hint tips={tips} />
        </section>
    );
}

export default Skills;