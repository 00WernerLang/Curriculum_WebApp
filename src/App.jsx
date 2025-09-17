import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="main-content">
                <div className="container">
                    <h1>Welcome to My App</h1>
                    <p>Test content.</p>

                    <div className="content-section">
                        <h2>About Werner Lang</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;