// src/pages/VagasPCD.jsx
import React from "react";
import "../styles/VagasPCD.css"; // Caminho para o novo CSS

export default function VagasPCD() {
  const vagas = [
    {
      id: 1,
      titulo: "Analista de Dados Júnior",
      empresa: "Tech Solutions S.A.",
      local: "São Paulo, SP (Remoto)",
      descricao: "Buscamos um Analista de Dados Júnior apaixonado por números e insights. Você será responsável por coletar, organizar e analisar grandes volumes de dados para apoiar a tomada de decisões estratégicas. Oferecemos um ambiente de trabalho inclusivo e flexível, com foco no desenvolvimento profissional.",
      requisitos: [
        "Conhecimento em SQL e Excel",
        "Noções de Power BI ou Tableau",
        "Capacidade analítica e atenção aos detalhes",
        "Formação superior em áreas correlatas (Engenharia, TI, Estatística, etc.)"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Escritório acessível, ferramentas de software com suporte a leitores de tela, horários flexíveis."
    },
    {
      id: 2,
      titulo: "Desenvolvedor(a) Front-end Pleno",
      empresa: "Inovatech Digital",
      local: "Belo Horizonte, MG",
      descricao: "Venha fazer parte da nossa equipe de desenvolvimento! Procuramos um(a) Desenvolvedor(a) Front-end Pleno com experiência em React para criar interfaces de usuário intuitivas e acessíveis. Valorizamos a criatividade e a colaboração em um time diverso.",
      requisitos: [
        "Experiência com React, HTML, CSS e JavaScript",
        "Conhecimento em design responsivo e acessibilidade web (WCAG)",
        "Portfólio de projetos (pessoais ou profissionais)",
        "Inglês intermediário"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Equipe treinada em libras, estação de trabalho adaptável, suporte a tecnologias assistivas."
    },
    {
      id: 3,
      titulo: "Assistente Administrativo(a)",
      empresa: "Grupo Prosperar",
      local: "Rio de Janeiro, RJ",
      descricao: "O Grupo Prosperar busca um(a) Assistente Administrativo(a) para dar suporte às operações diárias. Se você é organizado(a), proativo(a) e tem vontade de aprender, essa vaga é para você! Oferecemos um ambiente acolhedor e oportunidades de crescimento.",
      requisitos: [
        "Ensino médio completo (superior será um diferencial)",
        "Conhecimento do Pacote Office (Word, Excel)",
        "Boa comunicação e organização",
        "Experiência prévia em rotinas administrativas (desejável)"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Rampas de acesso, elevadores, banheiros adaptados, comunicação em braile disponível."
    },
    {
      id: 4,
      titulo: "Designer Gráfico(a) Júnior",
      empresa: "Agência Criativa",
      local: "Porto Alegre, RS",
      descricao: "Estamos em busca de um(a) Designer Gráfico(a) Júnior para integrar nossa equipe criativa. Você trabalhará na criação de materiais visuais para campanhas digitais e impressas, sempre com foco na inclusão e diversidade. Traga suas ideias e seu talento!",
      requisitos: [
        "Domínio de ferramentas Adobe (Photoshop, Illustrator, InDesign)",
        "Noções de UX/UI e design inclusivo",
        "Portfólio criativo",
        "Formação em Design Gráfico ou áreas afins"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Ambiente com iluminação adaptável, softwares com recursos de acessibilidade, equipe de apoio."
    }
  ];

  return (
    <div className="vagas-container">
      <h1 className="vagas-titulo">Vagas para Pessoas com Deficiência (PCD)</h1>
      <p className="vagas-subtitulo">
        Na PROCEDER, acreditamos que o talento não tem barreiras. Encontre aqui oportunidades que valorizam suas habilidades e promovem um ambiente de trabalho inclusivo.
      </p>
      <div className="vagas-grid">
        {vagas.map((vaga) => (
          <div key={vaga.id} className="vaga-card">
            <h2 className="vaga-titulo-card">{vaga.titulo}</h2>
            <p className="vaga-empresa">{vaga.empresa} - {vaga.local}</p>
            <p className="vaga-descricao">{vaga.descricao}</p>
            <div className="vaga-secao">
              <h3>Requisitos:</h3>
              <ul>
                {vaga.requisitos.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="vaga-secao">
              <h3>Acessibilidade e Suporte:</h3>
              <p>{vaga.acessibilidade}</p>
            </div>
            <a href={vaga.linkCandidatura} className="botao-candidatar" target="_blank" rel="noopener noreferrer">
              Candidatar-se
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}