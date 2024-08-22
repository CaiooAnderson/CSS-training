import { useState } from 'react';

const Projects = () => {
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
        </section>
    );
}

export default Projects;