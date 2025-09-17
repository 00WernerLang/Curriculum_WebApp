import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">Werner Lang</a>
                </div>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/studies" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                            Studies
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/certificates" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                            Certificates
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;