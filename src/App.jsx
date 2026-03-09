import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ParticleBackground from './components/effects/ParticleBackground';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import People from './pages/People';
import Mentors from './pages/Mentors';
import Join from './pages/Join';
import './App.css';

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/people" element={<People />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
