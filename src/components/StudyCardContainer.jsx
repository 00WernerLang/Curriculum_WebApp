import StudyCard from "./StudyCard.jsx";
import "./StudyCards.css"

function StudyCardContainer() {
    const StudyCards = [
        {
            degree: "Bachelor's Degree in Software Engineering",
            institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
            date: "2023 - Present",
            description: "Currently pursuing a Bachelor's degree in Software Engineering, " +
                "focusing on software development, design patterns, and algorithms."
        },
        {
            degree: "High School Education",
            institution: "Lima Villa College",
            date: "2011 - 2022",
            description: "Completed high school education."
        }
    ]

    return(
        <div className="study-cards-container">
            <section id="study-card">
                <header>
                    <h1>Academic Journey</h1>
                    <p className="subtitle">A visual representation of my educational background and qualifications</p>
                </header>

                <div className="cards-container single-column">
                    {StudyCards.map((education, index) => (
                        <StudyCard
                            key={index}
                            degree={education.degree}
                            institution={education.institution}
                            date={education.date}
                            description={education.description}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
}
export default StudyCardContainer;