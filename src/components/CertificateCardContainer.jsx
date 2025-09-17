import CertificateCard from "./CertificateCard.jsx";

function CertificateCardContainer(){
    const CertificateCards =[
        {
            Name: "Cambridge CAE",
            Issuer: "Cambridge University",
            IssueDate: "December 2022",
            Description: "Certificate of Advanced English (CAE) from Cambridge University, demonstrating high-level English proficiency."
        },
        {
            Name: "Blockchain Specialization",
            Issuer: "Coursera",
            IssueDate: "June 2025",
            Description: "Specialization in Blockchain technology, covering fundamentals, smart contracts, and decentralized applications."
        },
        {
            Name: "Introduction to MongoDB",
            Issuer: "MongoDB University",
            IssueDate: "October 2024",
            Description: "Comprehensive course on MongoDB, covering database design, querying, and performance optimization."
        },
        {
            Name: "HTML, CSS, and JavaScript for Web Developers",
            Issuer: "Coursera",
            IssueDate: "August 2024",
            Description: "Comprehensive course on web development using HTML, CSS, and JavaScript to build responsive and interactive websites."
        },
        {
            Name: "Goethe-Zertifikat A1",
            Issuer: "Goethe-Institut",
            IssueDate: "August 2022",
            Description: "Goethe-Zertifikat A1 certification from Goethe-Institut, indicating basic proficiency in the German language."
        }
    ]

    return(
        <div className="certificate-card-container">
                {CertificateCards.map((card, index) => (
                    <CertificateCard
                        key={index}
                        Name={card.Name}
                        Issuer={card.Issuer}
                        IssueDate={card.IssueDate}
                        Description={card.Description}
                    />
                ))}

        </div>
    )
}

export default CertificateCardContainer;