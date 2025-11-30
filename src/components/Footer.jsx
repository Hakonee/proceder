// src/components/Footer.jsx
import React from 'react';
import './../styles/Footer.css'; // Importa os estilos específicos do Footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy; {new Date().getFullYear()} PROCEDER. Onde o talento não tem barreiras.</p>
        <p className="footer-subtext">Desenvolvido com React e CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;