// src/pages/VagasPCD.jsx
import React from "react";
import { Link } from 'react-router-dom';
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
    },
    {
      id: 5,
      titulo: "Atendente de Atendimento ao Cliente",
      empresa: "Telecom Brasil",
      local: "São Paulo, SP (Remoto)",
      descricao: "Somos uma empresa telecomunicações em expansão e buscamos Atendentes de Atendimento ao Cliente apaixonados por ajudar. Você será o ponto de contato principal para resolver dúvidas e problemas dos nossos clientes, em um ambiente colaborativo e inclusivo.",
      requisitos: [
        "Ensino médio completo",
        "Boa comunicação e empatia",
        "Capacidade de resolver problemas",
        "Experiência em atendimento ao público (preferencial)"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Suporte total em home office com tecnologias adaptadas, horários flexíveis, equipe de apoio por vídeo chamada."
    },
    {
      id: 6,
      titulo: "Operador(a) de Logística",
      empresa: "LogMove Transportes",
      local: "Curitiba, PR",
      descricao: "A LogMove está buscando um(a) Operador(a) de Logística para auxiliar no controle de estoque, organização de cargas e movimentação de materiais. É uma excelente oportunidade para quem gosta de trabalho prático e quer contribuir para a eficiência operacional.",
      requisitos: [
        "Ensino fundamental completo",
        "Disponibilidade para trabalhar em turnos",
        "Noções de segurança do trabalho",
        "Experiência em armazém ou logística (desejável)"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Equipamentos ergonômicos, ajustes nas rotas e tarefas, elevadores e rampas de acesso."
    },
    {
      id: 7,
      titulo: "Técnico(a) em Saúde - Auxiliar de Enfermagem",
      empresa: "Clínica Bem-Estar",
      local: "Brasília, DF",
      descricao: "A Clínica Bem-Estar procura um(a) Auxiliar de Enfermagem para integrar nossa equipe de saúde. Você apoiará os profissionais na prestação de cuidados aos pacientes, sempre com empatia e dedicação. Valorizamos a inclusão e o respeito pela diversidade.",
      requisitos: [
        "Curso técnico em Enfermagem ou certificação equivalente",
        "Registro no COREN (Conselho Regional de Enfermagem)",
        "Comunicação clara e responsabilidade",
        "Capacidade de trabalhar em equipe"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Espaço de trabalho adaptado, horários flexíveis, materiais em braille e áudio disponíveis."
    },
    {
      id: 8,
      titulo: "Especialista em Mídias Sociais",
      empresa: "Digital Mark Agency",
      local: "Salvador, BA (Remoto)",
      descricao: "Procuramos um(a) Especialista em Mídias Sociais para gerenciar nossas estratégias de redes sociais. Você criará conteúdo engajador, analisará métricas e ajudará a construir uma comunidade forte em torno de nossas marcas.",
      requisitos: [
        "Experiência com plataformas: Instagram, Facebook, TikTok e LinkedIn",
        "Conhecimento de ferramentas de análise e agendamento",
        "Criatividade e visão estratégica",
        "Noções de copywriting"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Trabalho 100% remoto, horários adaptados, suporte total com softwares de acessibilidade."
    },
    {
      id: 9,
      titulo: "Professor(a) de Reforço Escolar",
      empresa: "Instituto Aprender Juntos",
      local: "Campinas, SP",
      descricao: "O Instituto Aprender Juntos está selecionando Professores(as) para trabalhar com reforço escolar em áreas como Matemática, Português e Inglês. Você terá autonomia para preparar aulas adaptadas e contribuir para o sucesso educacional de nossos alunos.",
      requisitos: [
        "Ensino superior completo na área desejada",
        "Experiência em docência ou tutoria",
        "Metodologia pedagógica adaptada",
        "Paciência e dedicação"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Salas adaptadas com tecnologia assistiva, horários flexíveis, materiais em diversos formatos."
    },
    {
      id: 10,
      titulo: "Consultor(a) de Recursos Humanos",
      empresa: "HR Solutions Consultoria",
      local: "Recife, PE (Remoto)",
      descricao: "Buscamos um(a) Consultor(a) de RH para ajudar empresas a implementar políticas de inclusão e diversidade. Você será responsável por elaborar estratégias, capacitar equipes e acompanhar indicadores de inclusão de pessoas com deficiência.",
      requisitos: [
        "Formação em Administração, Psicologia ou Pedagogia",
        "Conhecimento em políticas de inclusão e acessibilidade",
        "Experiência em consultoria ou RH (mínimo 2 anos)",
        "Comunicação clara e pensamento crítico"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Trabalho remoto integral, suporte completo com tecnologias adaptadas, reuniões com intérprete de libras."
    },
    {
      id: 11,
      titulo: "Redator(a) de Conteúdo",
      empresa: "Content Hub Brasil",
      local: "Fortaleza, CE (Remoto)",
      descricao: "A Content Hub Brasil procura um(a) Redator(a) de Conteúdo para produzir textos de qualidade para blogs, newsletters e redes sociais. Se você é criativo e tem paixão por escrita, esta é uma oportunidade perfeita para você!",
      requisitos: [
        "Excelente domínio da língua portuguesa",
        "Experiência em redação de conteúdo para web",
        "Criatividade e capacidade de adaptação",
        "Conhecimento de SEO (diferenciais)"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Trabalho 100% remoto, leitores de tela suportados, horários flexíveis e autônomos."
    },
    {
      id: 12,
      titulo: "Especialista em Qualidade (QA) - Testador(a)",
      empresa: "QualityCode Solutions",
      local: "Manaus, AM (Remoto)",
      descricao: "Procuramos um(a) Especialista em Qualidade para testar softwares e garantir que estejam acessíveis e funcionais. Você será responsável por identificar bugs, documentar problemas e contribuir para um produto final de excelente qualidade.",
      requisitos: [
        "Conhecimento de testes manuais e/ou automatizados",
        "Familiaridade com ferramentas de teste (Selenium, Cypress, etc.)",
        "Atenção aos detalhes",
        "Experiência com testes de acessibilidade (WCAG)"
      ],
      linkCandidatura: "#", // Link fictício
      acessibilidade: "Remoto total, softwares com suporte a acessibilidade, comunidade inclusiva e colaborativa."
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
            <Link to={`/vagas/${vaga.id}`} state={{ vaga }} className="botao-candidatar">
              Candidatar-se
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}