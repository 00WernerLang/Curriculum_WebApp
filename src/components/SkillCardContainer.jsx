import SkillCard from "./SkillCard";
import "./SkillCards.css"

function SkillCardContainer(){
    const SkillCards = [
        {
            type: "Frontend",
            skills: ["Angular", "React", "Vue", "Flutter"]
        },
        {
            type: "Backend",
            skills: ["Spring Boot", ".NET"]
        },
        {
            type: "Database",
            skills: ["MySQL", "SQLServer", "MongoDB", "MariaDB", "PostgreSQL"]
        },
        {
            type: "Languages",
            skills: ["Java", "C/C++/C#", "JavaScript", "TypeScript", "Python"]
        }
    ]

    return(
        <div className="skill-card-container">
            {SkillCards.map((card, index) => (
                <SkillCard
                    key={index}
                    Type={card.type}
                    Skills={card.skills}
                />
            ))}
        </div>
    )
}

export default SkillCardContainer;