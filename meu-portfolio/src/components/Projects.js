import { useState } from 'react';
import Hint from './Hint';

const Projects = () => {

    const tips = [
        'Eis aqui alguns projetos, ou como gosto de chamar: "meus experimentos de laboratório", onde a magia do código acontece!',
        'Cada projeto aqui representa um passo na minha jornada como desenvolvedor, mostrando o que posso criar.',
        'Acredito que os projetos nunca tem um final ao certo. Sempre possuem uma cara nova, uma nova história..',
        'Gosto de utilizar projetos pessoais como estudo prático. São neles que percebo que realmente consigo e posso alcançar objetivos.',
        'Se seu projeto não ficou como queria, relaxe. É uma mera ilusão! Os projetos tomam formas diferentes a cada vez que você pensa em algo para adicionar, inovar ou editar.',
        'O quanto você dedicaria em seus projetos? Eu costumo dar mais dedicação aos projetos do que em séries como Stranger Things.',
        'Utilizar o repositório do GitHub para salvar projetos é uma boa ideia!',
        'Os projetos não exigem 100 páginas para ser perfeito. Acredito que ninguém também iria curtir ler 100 páginas de um projeto.',
        'Meu repositório é como um laboratório, o experimento pode explodir, bombar, ou nem funcionar.',
        'Estes projetos destacam minha habilidade em trabalhar com diferentes tecnologias e frameworks.',
        'Bônus: Por que fazer um simples "Hello World" se você pode construir um universo inteiro?'
    ]

    const [filter, setFilter] = useState('All');

    const projects = [
        { name: 'Project 1', category: 'Front-End', imgSrc: 'path_to_image1' },
        { name: 'Project 2', category: 'Back-End', imgSrc: 'path_to_image2' },
        { name: 'Project 3', category: 'Other', imgSrc: 'path_to_image3' },
    ];

    const filteredProjects = projects.filter(project => filter === 'All' || project.category === filter);

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Front-End')}>Front-End</button>
                <button onClick={() => setFilter('Back-End')}>Back-End</button>
                <button onClick={() => setFilter('Other')}>Other</button>
            </div>
            <div className="carousel">
                {filteredProjects.map(project => (
                    <div key={project.name} className="carousel-item">
                        <img src={project.imgSrc} alt={project.name} />
                        <h3>{project.name}</h3>
                    </div>
                ))}
            </div>
            <Hint tips={tips} />
        </section>
    );
}

export default Projects;