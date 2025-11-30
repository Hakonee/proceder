// src/pages/Produtos.jsx
import React from "react";
import "../styles/Produtos.css"; // Caminho corrigido para o CSS
import camisa from "../assets/camisa.svg";
import caneca from "../assets/caneca.svg";
import bolsa from "../assets/bolsa.svg";

export default function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Camisa PROCEDER",
      descricao: "Vista a causa com a nossa Camisa Exclusiva PROCEDER. Confeccionada em algodão orgânico de alta qualidade, ela oferece conforto e durabilidade, enquanto exibe com orgulho a mensagem de inclusão e o compromisso com um futuro onde o talento não tem barreiras. Um símbolo de renovação e crescimento, perfeito para o dia a dia.",
      imagem: camisa,
      linkCompra: "#" // Link desativado, pois o produto está "Em Breve"
    },
    {
      id: 2,
      nome: "Caneca PROCEDER",
      descricao: "Comece o dia com inspiração! Nossa Caneca PROCEDER é mais do que um recipiente para sua bebida favorita; é um lembrete diário do potencial ilimitado e da confiança que construímos juntos. Com design exclusivo e as cores vibrantes da nossa marca, ela simboliza o otimismo e a energia para seguir em frente, transformando cada gole em um momento de propósito e acessibilidade.",
      imagem: caneca,
      linkCompra: "#" // Link desativado, pois o produto está "Em Breve"
    },
    {
      id: 3,
      nome: "Bolsa Ecológica PROCEDER",
      descricao: "Leve a mudança com você! A Bolsa Ecológica PROCEDER é a escolha perfeita para quem busca sustentabilidade e praticidade. Feita com materiais reciclados e um design moderno, ela representa nosso compromisso com o progresso e a criação de oportunidades reais. Reutilizável e resistente, é um convite para carregar seus ideais e mostrar que, juntos, podemos construir um mundo mais inclusivo e sem barreiras.",
      imagem: bolsa,
      linkCompra: "#" // Link desativado, pois o produto está "Em Breve"
    }
  ];

  return (
    <div className="produtos-container">
      <h1 className="produtos-titulo">Nossos Produtos</h1>
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <div className="produto-imagem-wrapper">
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            </div>
            <h2 className="produto-nome">{produto.nome}</h2>
            <p className="produto-descricao">{produto.descricao}</p>
            {/* Botão "Em Breve" com estilo diferente e sem funcionalidade de link */}
            <span className="botao-em-breve">Em Breve</span>
          </div>
        ))}
      </div>
    </div>
  );
}