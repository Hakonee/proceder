import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import '../styles/VagaDetail.css';

// Página fictícia e elaborada de detalhes da vaga
export default function VagaDetail() {
  const { id } = useParams();
  const location = useLocation();

  // Na ausência de uma API, podemos aceitar dados via state (opcional) ou carregar conteúdo fictício
  const vaga = location.state?.vaga || getVagaFicticia(id);

  return (
    <div className="vaga-detail-container">
      <div className="vaga-detail-header">
        <h1 className="vaga-detail-title">{vaga.titulo}</h1>
        <p className="vaga-detail-subtitle">{vaga.empresa} — {vaga.local}</p>
      </div>

      <div className="vaga-detail-body">
        <section className="vaga-section vaga-descricao">
          <h2>Sobre a vaga</h2>
          <p>{vaga.descricao}</p>
        </section>

        <section className="vaga-section vaga-responsabilidades">
          <h2>Responsabilidades</h2>
          <ul>
            {vaga.responsabilidades.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="vaga-section vaga-requisitos">
          <h2>Requisitos</h2>
          <ul>
            {vaga.requisitos.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="vaga-section vaga-acessibilidade">
          <h2>Acessibilidade e Benefícios</h2>
          <p>{vaga.acessibilidade}</p>
          <ul>
            {vaga.beneficios.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>

        <section className="vaga-section vaga-como-se-candidatar">
          <h2>Como se candidatar</h2>
          <p>
            Esta é uma página de vaga fictícia. Para simular uma candidatura, você pode enviar seu currículo
            para <a href="mailto:equipeproceder2025@gmail.com">equipeproceder2025@gmail.com</a> com o assunto <strong>Vaga: {vaga.titulo}</strong>.
          </p>
          <p>
            Também oferecemos um formulário simplificado abaixo (simulação) para que possamos demonstrar a experiência do usuário.
          </p>
          <form className="vaga-candidatura-form" onSubmit={(e) => { e.preventDefault(); alert('Candidatura simulada enviada. (Fictício)'); e.target.reset(); }}>
            <label>
              Nome completo
              <input type="text" name="nome" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Telefone
              <input type="tel" name="telefone" />
            </label>
            <label>
              Mensagem (opcional)
              <textarea name="mensagem" rows={4}></textarea>
            </label>
            <button type="submit" className="botao-candidatar-detalhe">Simular Candidatura</button>
          </form>
        </section>

        <div className="vaga-detail-footer">
          <Link to="/vagas-pcd" className="voltar-link">← Voltar para Vagas PCD</Link>
        </div>
      </div>
    </div>
  );
}

function getVagaFicticia(id) {
  // Conteúdo fictício detalhado; pode variar por id
  return {
    id,
    titulo: 'Vaga Fictícia — Profissional Multidisciplinar',
    empresa: 'Proceder (Vagas Fictícias)',
    local: 'Região Metropolitana (Remoto / Presencial conforme necessidade)',
    descricao:
      'Esta vaga fictícia é criada para demonstrar uma página de detalhe elaborada. O(a) candidato(a) participará de projetos interdisciplinares com foco em inclusão, comunicação e processos colaborativos.',
    responsabilidades: [
      'Conduzir atividades diárias relacionadas à área com autonomia e organização.',
      'Colaborar com equipes multidisciplinares para construção de soluções inclusivas.',
      'Registrar e monitorar indicadores de desempenho do projeto.',
      'Participar de capacitações e oferecer feedback construtivo.'
    ],
    requisitos: [
      'Formação compatível com a função (nível técnico ou superior, dependendo da vaga).',
      'Boa comunicação e proatividade.',
      'Conhecimento básico em ferramentas digitais (Office, Google Workspace).',
      'Desejável experiência prévia na função ou área correlata.'
    ],
    acessibilidade:
      'Ambiente adaptado, possibilidade de trabalho remoto, materiais em diferentes formatos, intérprete de Libras em processos seletivos quando necessário.',
    beneficios: [
      'Vale-transporte ou auxílio deslocamento',
      'Vale-refeição / alimentação',
      'Plano de desenvolvimento contínuo',
      'Ambiente inclusivo com políticas de apoio' 
    ]
  };
}
