import './Navbar.css';
import {NavLink} from "react-router";

const Navbar = () => {

    return (
        <nav className="navbar">


            <NavLink
                to="/home"
                end
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Home
            </NavLink>

            <NavLink
                to="/studies"
                end
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Studies
            </NavLink>

            <NavLink
                to="/projects"
                end
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Projects
            </NavLink>

            <NavLink
                to="/certificates"
                end
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Certificates
            </NavLink>


        </nav>
    );
};

export default Navbar;