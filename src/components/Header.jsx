// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Header.css';
import logo from '../assets/logo-proceder.png';

function Header() {
  return (
    <>
      {/* Wrapper para a barra superior do logo (fundo branco de largura total) */}
      <div className="header-top-bar-wrapper">
        {/* Conteúdo do logo centralizado e com largura limitada */}
        <div className="header-top-bar-content">
          <div className="header-logo-content">
            <Link to="/" className="header-logo-link">
              <img src={logo} alt="PROCEDER Logo" className="header-logo-img" />
            </Link>
          </div>
        </div>
      </div>

      {/* Wrapper para a barra de navegação principal (fundo azul de largura total) */}
      <header className="header-nav-bar-wrapper">
        <nav className="header-nav-content">
          <ul className="nav-list">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">Home</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/quem-somos" className="nav-link">Quem Somos</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/servicos" className="nav-link">Serviços</Link> {/* NOVO LINK PARA SERVIÇOS */}</b>
            </li>
            <li className="nav-item">
              <b><Link to="/produtos" className="nav-link">Produtos</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/projetos" className="nav-link">Projetos</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/vagas-pcd" className="nav-link">Vagas PCD</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/contato" className="nav-link">Contato</Link></b>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;