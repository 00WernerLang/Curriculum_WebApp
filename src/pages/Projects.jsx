import ProjectCardContainer from "../components/ProjectCardContainer.jsx";

function Projects() {
    return (
        <div>
            <header>
                <h1>Projects</h1>
                <p className="subtitle">A showcase of my projects, highlighting the technologies used and their functionalities</p>
            </header>

            <ProjectCardContainer/>
        </div>
    );
}

export default Projects;