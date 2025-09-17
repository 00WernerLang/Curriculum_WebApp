import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Studies from "./pages/Studies.jsx";
import Projects from "./pages/Projects.jsx";
import Certificates from "./pages/Certificates.jsx";
import React from "react";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path = "/" element={<App/>} />

                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>

                <Route index element={<Studies/>}/>
                <Route path="studies" element={<Studies/>}/>

                <Route index element={<Projects/>}/>
                <Route path="projects" element={<Projects/>}/>

                <Route index element={<Certificates/>}/>
                <Route path="certificates" element={<Certificates/>}/>

            </Routes>
            <Footer />
        </div>
    );
}

export default App;