import "./CertificateCards.css"

function CertificateCard({Name, Issuer, IssueDate, Description}){
    return (
        <div className="certificate-card">
            <section id="certificate-card">
                <div className="card-header">
                    <h2 className="certificate-name">{Name}</h2>
                    <h3 className="issuer">{Issuer}</h3>
                    <span className="issue-date">{IssueDate}</span>
                </div>
                <div className="card-body">
                    <p className="description">{Description}</p>
                </div>
            </section>
        </div>
    )
}

export default CertificateCard;