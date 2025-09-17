import SkillCardContainer from "../components/SkillCardContainer.jsx";
import "./Home.css"

function Home(){
    return(


        <div>
            <header>
                <h1>Werner Lang</h1>
                <p className="subtitle">Software engineering pregrad student coursing 6th cycle on university.</p>
            </header>

            <section id="skills">
                <h2>My Skills</h2>
                <SkillCardContainer/>
            </section>
        </div>
    )
}

export default Home;