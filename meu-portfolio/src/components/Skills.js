import { useState } from 'react';
import Hint from './Hint';

const Skills = () => {

    const tips = [
        'Em constante evolução. Tenho muito o que aprender.',
        'Percebo que muitos desenvolvedores sentem que não estão preparados, mas a pergunta é: Quem está?',
        'Quem não concorda que o Visual Studio Code é a melhor IDE, me fale agora ou cale-se para sempre.',
        'Responsividade no CSS? Amo!',
        'Versionamento de código é interessante! Acredito que seja uma das',
        'Eu percebo que gosto de programar quando o resultado é esperado, quando é inesperado se torna melhor ainda!',
        'Acredito que nem mesmo os Vingadores podem superar a junção do HTML, CSS e JavaScript.',
        'Estou me empenhando em TypeScript e React atualmente.',
        'Projetos feitos com Python que utilizam dele a automação de tarefas são impressionantes!',
        'Estou aprendendo a utilizar a ferramenta Docker também. Acredito que seja uma ótima ferramenta!',
        'Bônus: Erros e Bugs são considerados Bosses ou Aliados? No meu ponto de vista eles são neutros dependendo do quanto irão me afetar.'
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
        </section>
    );
}

export default Skills;