import ProjectCard from "./ProjectCard";

function ProjectCardContainer() {
    const ProjectCards= [
        {
            name: "KeepItFresh",
            description: "A web application that helps restaurant owners manage their food inventory and reduce waste by tracking expiration dates.",
            Technologies: ["Angular", "SpringBoot", "MySQL", "CSS", "JavaScript"],
            link: "https://github.com/Biblioteca-de-Software"
        },
        {
            name: "ChambaPro",
            description: "A marketplace for technicians and clients to connect, find jobs, and manage work orders efficiently.",
            Technologies: ["Vue", ".NET", "MySQL", "TypeScript", "CSS"],
            link: "https://github.com/WASwarm1"
        },
        {
            name: "Curriculum_WebApp",
            description: "A personal portfolio website to showcase my projects, skills, and experience as a software developer.",
            Technologies: ["React", "JavaScript", "CSS", "HTML"],
            link: "https://github.com/00WernerLang/Curriculum_WebApp"
        }
    ]

    return (
        <div className="project-cards-container">
            <section id="project-card">

                <div className="cards-container">
                    {ProjectCards.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            Technologies={project.Technologies}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default ProjectCardContainer;