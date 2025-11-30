// src/pages/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos do AOS
import './../styles/About.css'; // Importa os estilos específicos da About
import { Link } from 'react-router-dom'; // Importa Link para a seção de sugestão
import equipe from '../assets/equipe.jpg';
import simbolo from '../assets/simbolo.png';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração padrão da animação
      once: true,      // Anima apenas uma vez ao rolar
    });
  }, []);

  return (
    <div className="page-container">
      <h1 className="about-main-title" data-aos="fade-down">Quem Somos</h1>

      {/* Seção 1: Introdução e Foto da Equipe */}
      <section className="about-intro-section">
        <div className="about-intro-flex-container">
          <div className="about-intro-text-block" data-aos="fade-right" data-aos-delay="200">
            <p>
              A PROCEDER nasceu da convicção de que o talento não tem barreiras. Somos uma empresa dedicada a construir pontes entre pessoas com deficiência (PCD) e o mercado de trabalho, promovendo a inclusão, a diversidade e o desenvolvimento profissional.
            </p>
            <p>
              Nossa missão vai além do recrutamento. Atuamos como parceiros estratégicos de empresas, oferecendo consultoria especializada para criar ambientes de trabalho verdadeiramente inclusivos, onde cada indivíduo possa prosperar e contribuir com seu potencial máximo. Acreditamos que a diversidade é um motor de inovação e crescimento, e estamos comprometidos em transformar essa visão em realidade para nossos clientes e para a comunidade PCD.
            </p>
          </div>
          <div className="about-image-block" data-aos="fade-left" data-aos-delay="400">
            <h2 className="team-section-title">Nossa Equipe</h2>
            <div className="team-photo-wrapper">
              <img
                src={equipe}
                alt="Equipe da PROCEDER"
                className="team-photo-reveal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Definição da Marca */}
      <section className="brand-definition-section">
        <h2 className="section-title" data-aos="fade-up">Definição da Marca</h2>
        <div className="brand-definition-content">
          <img
            src={simbolo}
            alt="Logo PROCEDER e símbolo de acessibilidade"
            className="brand-definition-img"
            data-aos="zoom-in" data-aos-delay="200"
          />
          <p className="brand-definition-text" data-aos="fade-up" data-aos-delay="400">
            Nossa logo une a letra 'C' de PROCEDER ao símbolo de acessibilidade, transformando a letra em um caminho dinâmico e em uma roda que impulsiona o movimento. Mais do que uma simples marca, ela representa nossa missão de criar conexões e abrir caminhos para o potencial de cada indivíduo. Simboliza uma jornada de progresso, acolhimento e a força que transforma capacidade em oportunidade real.
          </p>
        </div>
      </section>

      {/* Seção 3: Paleta de Cores */}
      <section className="color-palette-section">
        <h2 className="section-title" data-aos="fade-up">Paleta de Cores</h2>
        <div className="color-palette-grid">
          <div className="color-item" data-aos="fade-up" data-aos-delay="100">
            <div className="color-box green-water"></div>
            <h3>Verde-Água (#34BAA8)</h3>
            <p>Renovação e Crescimento. É a cor que simboliza o florescer de uma nova carreira e a abordagem inovadora que a PROCEDER oferece para gerar oportunidades.</p>
          </div>
          <div className="color-item" data-aos="fade-up" data-aos-delay="200">
            <div className="color-box blue"></div>
            <h3>Azul (#3775B1)</h3>
            <p>Confiança e Profissionalismo. Representa a base sólida e segura que construímos entre talentos e empresas, garantindo uma conexão de mútua credibilidade.</p>
          </div>
          <div className="color-item" data-aos="fade-up" data-aos-delay="300">
            <div className="color-box yellow"></div>
            <h3>Amarelo (#FECC5E)</h3>
            <p>Potencial e Otimismo. É o ponto de luz que destaca o talento e a capacidade de cada indivíduo, simbolizando a conquista e a energia para seguir em frente.</p>
          </div>
        </div>
      </section>

      {/* Seção 4: Tipografia */}
      <section className="typography-section">
        <h2 className="section-title" data-aos="fade-up">Tipografia</h2>
        <div className="typography-grid">
          <div className="font-item" data-aos="fade-right" data-aos-delay="100">
            <p className="font-example league-spartan">Aa</p>
            <h3>League Spartan</h3>
            <p>Força e Determinação. Seus traços fortes e diretos representam a resiliência da comunidade PCD e a nossa abordagem firme para quebrar barreiras com clareza e foco na competência.</p>
          </div>
          <div className="font-item" data-aos="fade-left" data-aos-delay="200">
            <p className="font-example poppins">Aa</p>
            <h3>Poppins</h3>
            <p>Acessibilidade e Modernidade. Suas formas arredondadas e claras comunicam um tom acolhedor, reforçando nosso compromisso com a inclusão de uma maneira otimista, humana e atual.</p>
          </div>
        </div>
      </section>

      {/* Seção de Sugestão */}
      <section className="suggestion-section" data-aos="fade-up" data-aos-delay="300">
        <h2 className="section-title">Alguma sugestão?</h2>
        <p>Gostaríamos de ouvir você! <Link to="/contato" className="contact-link">Entre em contato</Link>.</p>
      </section>

    </div>
  );
}

export default About;