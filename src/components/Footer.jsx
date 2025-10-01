import './Footer.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-title">Get in Touch</h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <FaGithub className="contact-icon" />
                            <a
                                href="https://github.com/00WernerLang"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="madeby">
                        Made by Werner Lang
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;