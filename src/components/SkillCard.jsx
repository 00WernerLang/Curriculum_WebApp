function SkillCard({Type, Skills}){
    return (
        <div className="skill-card">
            <h2 className="skill-type">{Type}</h2>
            <ul className="skills-list">
                {Skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillCard;