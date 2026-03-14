import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-white selection:bg-cyan-500/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
