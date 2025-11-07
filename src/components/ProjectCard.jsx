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