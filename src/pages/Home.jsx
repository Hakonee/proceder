// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa os estilos do AOS
import './../styles/Home.css'; // Importa os estilos específicos da Home
import simbolo from '../assets/simbolo.png';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração padrão da animação
      once: true,      // Anima apenas uma vez ao rolar
    });
  }, []);

  return (
    <div className="home-page-container">

      {/* Seção Hero: Banner Principal com Logo e Chamada */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline" data-aos="fade-up" data-aos-delay="100">Onde o talento não tem barreiras.</p>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="300">Conectando Talentos, Construindo Inclusão.</h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="500">
            A PROCEDER é sua parceira estratégica na promoção da diversidade e inclusão,
            abrindo caminhos para profissionais com deficiência e transformando culturas corporativas.
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="700">
            <Link to="/servicos" className="btn btn-primary">Conheça Nossos Serviços</Link>
            <Link to="/quem-somos" className="btn btn-secondary">Nossa História</Link>
          </div>
        </div>
        {/* A imagem de fundo será aplicada via CSS */}
      </section>

      {/* Seção Sobre/Missão: Breve introdução e o significado da marca */}
      <section className="about-home-section">
        <div className="about-home-content">
          <h2 className="section-title" data-aos="fade-up">Nossa Missão: Transformar Vidas e Empresas</h2>
          <p className="about-home-text" data-aos="fade-up" data-aos-delay="200">
            Na PROCEDER, acreditamos que a diversidade é um motor de inovação e crescimento.
            Somos dedicados a construir pontes entre pessoas com deficiência (PCD) e o mercado de trabalho,
            promovendo a inclusão, o desenvolvimento profissional e a criação de ambientes corporativos verdadeiramente acessíveis.
          </p>
          <div className="brand-meaning-block" data-aos="fade-up" data-aos-delay="400">
            <img
              src={simbolo}
              alt="Definição da Marca PROCEDER"
              className="brand-meaning-img"
            />
            <div className="brand-meaning-text">
              <h3>A Força da Nossa Marca</h3>
              <p>
                Nossa logo une a letra 'C' de PROCEDER ao símbolo de acessibilidade,
                transformando a letra em um caminho dinâmico e em uma roda que impulsiona o movimento.
                Ela representa nossa missão de criar conexões e abrir caminhos para o potencial de cada indivíduo,
                simbolizando uma jornada de progresso, acolhimento e a força que transforma capacidade em oportunidade real.
              </p>
              <Link to="/quem-somos" className="btn btn-tertiary">Saiba Mais Sobre Nós</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços em Destaque */}
      <section className="featured-services-section">
        <h2 className="section-title" data-aos="fade-up">Nossas Soluções para a Inclusão</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Oferecemos pacotes de serviços personalizados para atender às necessidades da sua empresa,
          desde a conscientização até a gestão estratégica da diversidade.
        </p>
        <div className="services-cards-grid">
          <div className="service-card-home" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-placeholder level-1-icon"></div>
            <h3>Conscientização & Conformidade</h3>
            <p>Prepare sua cultura interna e garanta o acesso inicial a talentos PCD com treinamentos e acesso à plataforma.</p>
            <Link to="/servicos#nivel1" className="card-link">Ver Detalhes</Link>
          </div>
          <div className="service-card-home" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-placeholder level-2-icon"></div>
            <h3>Integração & Gestão de Talentos</h3>
            <p>Acelere o preenchimento de vagas com headhunting especializado e formação para gestores.</p>
            <Link to="/servicos#nivel2" className="card-link">Ver Detalhes</Link>
          </div>
          <div className="service-card-home" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-placeholder level-3-icon"></div>
            <h3>Parceria Estratégica & Suporte Total</h3>
            <p>Consultoria contínua, auditoria completa e gestão operacional da acessibilidade humana.</p>
            <Link to="/servicos#nivel3" className="card-link">Ver Detalhes</Link>
          </div>
        </div>
        <div className="all-services-cta" data-aos="fade-up" data-aos-delay="500">
          <Link to="/servicos" className="btn btn-primary">Explore Todos os Nossos Serviços</Link>
        </div>
      </section>

      {/* Seção de Vagas PCD (Chamada para a página de vagas) */}
      <section className="vagas-pcd-home-section" data-aos="fade-in">
        <div className="vagas-pcd-content">
          <h2 className="section-title" data-aos="fade-up">Oportunidades para Profissionais PCD</h2>
          <p className="vagas-pcd-description" data-aos="fade-up" data-aos-delay="200">
            Se você é um profissional com deficiência em busca de novas oportunidades,
            nossa plataforma conecta você às melhores empresas que valorizam seu talento.
          </p>
          <Link to="/vagas-pcd" className="btn btn-primary" data-aos="zoom-in" data-aos-delay="400">Encontre Sua Próxima Vaga</Link>
        </div>
      </section>

      {/* Seção de Contato Final */}
      <section className="contact-home-section" data-aos="fade-in">
        <h2 className="section-title" data-aos="fade-up">Pronto para Transformar sua Empresa?</h2>
        <p className="contact-home-description" data-aos="fade-up" data-aos-delay="200">
          Entre em contato conosco e descubra como a PROCEDER pode impulsionar a diversidade,
          a inovação e o crescimento sustentável na sua organização.
        </p>
        <Link to="/contato" className="btn btn-primary" data-aos="zoom-in" data-aos-delay="400">Fale Conosco</Link>
      </section>

    </div>
  );
}

export default Home;