import { useState } from 'react';

const Skills = () => {
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