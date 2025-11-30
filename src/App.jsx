// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Produtos from './pages/Produtos';
import Projects from './pages/Projects';
import VagasPCD from './pages/VagasPCD';
import Services from './pages/Services'; // Importe o novo componente Services

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<About />} />
          <Route path="/servicos" element={<Services />} /> {/* NOVA ROTA PARA SERVIÇOS */}
          <Route path="/contato" element={<Contact />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/vagas-pcd" element={<VagasPCD />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;