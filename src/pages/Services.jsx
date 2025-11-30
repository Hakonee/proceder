// src/pages/Services.jsx
import React from 'react';
import './../styles/Services.css'; // Importa os estilos específicos da Services

function Services() {
  return (
    <div className="page-container">
      <h1 className="services-title">Nossos Pacotes de Serviços</h1>
      <p className="services-intro-text">
        A PROCEDER oferece soluções personalizadas para empresas que buscam promover a inclusão e a diversidade.
        Conheça nossos pacotes e encontre a opção ideal para sua organização.
      </p>

      <div className="services-grid">

        {/* Nível 1: Pacote "Conscientização & Conformidade" */}
        <div className="service-card level-1">
          <h2 className="card-title">Nível 1: Conscientização & Conformidade</h2>
          <p className="card-subtitle">Ideal para empresas que estão iniciando sua jornada de inclusão e precisam preparar a cultura interna e garantir o acesso inicial a talentos.</p>
          <div className="card-content">
            <div className="service-item">
              <h3>Treinamento Básico de Sensibilização</h3>
              <p>Workshop de 4 a 8 horas para RH e Liderança, focado em terminologia correta e quebra de preconceitos.</p>
              <span className="price">R$ 6.500,00</span>
            </div>
            <div className="service-item">
              <h3>Acesso Limitado à Plataforma</h3>
              <p>Assinatura por 3 meses para publicação limitada de vagas (ex: 3 vagas ativas simultaneamente) e acesso à base de talentos PCD para auto-recrutamento.</p>
              <span className="price included">Incluído no valor</span>
            </div>
          </div>
          <button className="contact-button">Saiba Mais</button>
        </div>

        {/* Nível 2: Pacote "Integração & Gestão de Talentos" */}
        <div className="service-card level-2">
          <h2 className="card-title">Nível 2: Integração & Gestão de Talentos</h2>
          <p className="card-subtitle">Para empresas que buscam acelerar o preenchimento de vagas com talentos PCD qualificados, contando com o headhunting especializado.</p>
          <div className="card-content">
            <div className="service-item">
              <h3>Recrutamento Ativo e Especializado</h3>
              <p>Processo de headhunting realizado pelos nossos especialistas, culminando na apresentação de candidatos finalistas (para até 5 vagas). Sem taxa variável por contratação.</p>
              <span className="price">R$ 15.000,00</span>
            </div>
            <div className="service-item">
              <h3>Treinamento Avançado e Consultoria</h3>
              <p>Formação para Gestores sobre gestão de equipes diversas e criação de Planos de Adaptação Individual (PAI) pós-contratação.</p>
              <span className="price included">Incluído</span>
            </div>
          </div>
          <button className="contact-button">Saiba Mais</button>
        </div>

        {/* Nível 3: Pacote "Parceria Estratégica & Suporte Total" */}
        <div className="service-card level-3">
          <h2 className="card-title">Nível 3: Parceria Estratégica & Suporte Total</h2>
          <p className="card-subtitle">O pacote premium para a inclusão sustentável. Garante consultoria contínua, auditoria completa e a gestão operacional da acessibilidade humana.</p>
          <div className="card-content">
            <div className="service-item">
              <h3>Gestão de Suporte Humano</h3>
              <p>Fornecimento e gestão contínua de profissionais como intérpretes de Libras, cobrado de forma adicional somente pelo custo da alocação de pessoal.</p>
              <span className="price variable">Custo de Alocação (Variável)</span>
            </div>
            <div className="service-item">
              <h3>Consultoria Estratégica (RH BP)</h3>
              <p>Consultor dedicado para acompanhamento, Auditoria Completa de Acessibilidade e suporte na estratégia de Retenção e D&I.</p>
              <span className="price">R$ 4.000,00/mês (Preço Base Mensal)</span>
            </div>
          </div>
          <button className="contact-button">Saiba Mais</button>
        </div>

      </div>
    </div>
  );
}

export default Services;