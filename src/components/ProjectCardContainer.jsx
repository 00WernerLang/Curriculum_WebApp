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
            name: "FoodFlow",
            description: "Inventory management system for restaurants to track their financials and stock levels in real-time.",
            Technologies: ["Angular", "SpringBoot"],
            link: "https://github.com/Fundamentos-de-Arquitectura"
        },
        {
            name: "WeRide",
            description: "Mobile platform that enables users to locate, unlock and rent e-scooters/bikes via GPS and real-time telemtery.",
            Technologies: ["Kotlin", "Flutter", ,"MySQL" ,"Springboot"],
            link: "https://github.com/Grupo-2-Aplicaciones-Moviles"
        }
    ]

    return (
        <div className="project-cards-container">
            <section id="project-card">

                <div className="project-cards-container">
                    {ProjectCards.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}

export default ProjectCardContainer;