import './Navbar.css';
import {NavLink} from "react-router";
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">


                <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <NavLink
                        to="/home"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/studies"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setIsOpen(false)}
                    >
                        Studies
                    </NavLink>

                    <NavLink
                        to="/projects"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </NavLink>

                    <NavLink
                        to="/certificates"
                        end
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                        onClick={() => setIsOpen(false)}
                    >
                        Certificates
                    </NavLink>
                </div>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;