import "./ProjectCards.css"

function ProjectCard({name, description, Technologies, link}) {
    return (
        <div className="project-card">
            <section id="project-card">
                <div className="project-card-header">
                    <h2 className="project-name">{name}</h2>
                    <p className="project-description">{description}</p>
                </div>
                <div className="project-card-content">
                    <h3>Technologies Used:</h3>
                    <ul className="technologies-list">
                        {Technologies.map((tech, index) => (
                            <li key={index} className="technology-item">{tech}</li>
                        ))}
                    </ul>
                    {link && (
                        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    )}
                </div>
            </section>
        </div>
    )
}

export default ProjectCard;