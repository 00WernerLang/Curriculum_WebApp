import SkillCardContainer from "../components/SkillCardContainer.jsx";
import "./Home.css"

function Home(){
    return(


        <div>
            <header>
                <h1>Werner Lang</h1>
                <p className="subtitle">Software Engineering student (6th cycle) with practical experience in front- and
                    back-end development. I have participated in full-stack projects using Angular, React, Vue, Spring
                    Boot, and .NET.
                    I work with relational and NoSQL databases (MySQL, SQL Server, MongoDB) and program in Java, C#,
                    Python, and JavaScript/TypeScript. I seek opportunities to apply and expand my knowledge in
                    real-world projects, with a focus on best practices, collaboration, and value delivery.</p>
            </header>

            <section id="skills">
                <h2>Skills</h2>
                <SkillCardContainer/>
            </section>
        </div>
    )
}

export default Home;