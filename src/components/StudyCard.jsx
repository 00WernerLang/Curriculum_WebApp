function StudyCard({degree, institution, date, description}) {
    return (
        <div className="study-card">

            <div className="card-header">
                <span className="Date"> {date} </span>
                <h2 className="degree">{degree}</h2>
                <h3 className="institution">{institution}</h3>
            </div>
            <div className="card-body">
                <p className="description">{description}</p>
            </div>

        </div>
    )
}

export default StudyCard;