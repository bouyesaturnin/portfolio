import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Routes>
          {/* PAGE D'ACCUEIL : Hero + Skills + Projets */}
          <Route path="/" element={
            <main>
              <Hero />
              <Skills />
              
            
            </main>
          } />

          {/* PAGE À PROPOS : Uniquement la section About */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;