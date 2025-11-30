// src/pages/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../styles/Projects.css';

// Importar todas as imagens
import campanha from '../assets/campanha.svg';
import bolsa from '../assets/bolsa.svg';
import camisa from '../assets/camisa.svg';
import diversidade from '../assets/diversidade.svg';
import caneca from '../assets/caneca.svg';
import botoes from '../assets/botoes.svg';
import saude from '../assets/saude.svg';
import logoProc from '../assets/logo-proceder.png';
import paleta from '../assets/PaletaCores.svg';
import tipografia from '../assets/tipografia.svg';
import cristian from '../assets/Cristian.svg';
import patricia from '../assets/Patricia.svg';
import diana from '../assets/Diana.svg';
import cartas1 from '../assets/projeto/cartas.jpg';
import cartas2 from '../assets/projeto/cartas2.jpg';
import cartas3 from '../assets/projeto/cartas3.jpg';
import cartas4 from '../assets/projeto/cartas4.JPG';
import cartas5 from '../assets/projeto/cartas5.JPG';
import massinha1 from '../assets/projeto/dinamicaMassinha1.jpg';
import massinha2 from '../assets/projeto/dinamicaMassinha2.jpg';
import massinha3 from '../assets/projeto/dinamicaMassinha3.JPG';
import massinha4 from '../assets/projeto/dinamicaMassinha4.jpg';
import massinha5 from '../assets/projeto/dinamicaMassinha5.jpg';
import massinha6 from '../assets/projeto/dinamicaMassinha6.jpg';
import divulgacao from '../assets/projeto/divulgacaoPoster.jpg';
import membros from '../assets/projeto/membrosProceder.jpg';
import selo from '../assets/projeto/seloProceder.jpg';
import turma from '../assets/projeto/turma.jpg';

// Componente ProjectCard (mantido)
const ProjectCard = ({ image, title, description, isLarge = false, 'data-aos': dataAos, 'data-aos-delay': dataAosDelay }) => (
  <div className={`project-card ${isLarge ? 'project-card-large' : ''}`} data-aos={dataAos} data-aos-delay={dataAosDelay}>
    <img src={image} alt={title} className="project-card-image" />
    <div className="project-card-content">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
    </div>
  </div>
);

// NOVO: Componente para Coleção de Fotos
const PhotoCollection = ({ title, photos, 'data-aos': dataAos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <div className="photo-collection" data-aos={dataAos}>
      <h3 className="collection-title">{title}</h3>
      <div className="collection-main-photo">
        <img 
          src={photos[selectedPhoto].src} 
          alt={photos[selectedPhoto].alt} 
          className="main-photo-image"
        />
        <div className="main-photo-caption">
          <p>{photos[selectedPhoto].caption}</p>
        </div>
      </div>
      <div className="collection-thumbnails">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className={`thumbnail ${selectedPhoto === index ? 'active' : ''}`}
            onClick={() => setSelectedPhoto(index)}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

function Projects() {
  const mascotsSectionRef = useRef(null);
  const socialProjectHighlightRef = useRef(null);
  const [mascotsVisible, setMascotsVisible] = useState(false);
  const [socialProjectVisible, setSocialProjectVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      if (mascotsSectionRef.current) {
        const top = mascotsSectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setMascotsVisible(true);
        }
      }

      if (socialProjectHighlightRef.current) {
        const top = socialProjectHighlightRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setSocialProjectVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projectItems = [
    {
      image: campanha,
      title: "Campanha Novembro Azul",
      description: "Evento especial focado na conscientização e saúde masculina, com um toque de inclusão.",
    },
    {
      image: bolsa,
      title: "Ecobags Personalizadas",
      description: "Ecobags com a logo 'PROCEDER: Onde o talento não tem barreiras', promovendo sustentabilidade.",
    },
    {
      image: camisa,
      title: "Camisetas Exclusivas",
      description: "Camisetas de alta qualidade reforçando a identidade e o senso de comunidade.",
    },
    {
      image: diversidade,
      title: "Mundo Diverso e Acessível",
      description: "Arte visual destacando a importância de um mundo mais diverso e acessível.",
    },
    {
      image: caneca,
      title: "Canecas da Marca",
      description: "Canecas personalizadas com o símbolo de acessibilidade da PROCEDER.",
    },
    {
      image: botoes,
      title: "Bottons dos Mascotes",
      description: "Bottons colecionáveis com nossos mascotes, representando diversidade e inclusão.",
    },
    {
      image: saude,
      title: "Conscientização e Saúde",
      description: "Peça da campanha Novembro Azul, focada na prevenção e saúde do homem.",
    },
    {
      image: logoProc,
      title: "Definição da Marca PROCEDER",
      description: "Logo une o 'C' de PROCEDER ao símbolo de acessibilidade, representando movimento e inclusão.",
      isLarge: true,
    },
    {
      image: paleta,
      title: "Paleta de Cores da PROCEDER",
      description: "Verde-Água, Azul e Amarelo representam Renovação, Confiança e Potencial.",
    },
    {
      image: tipografia,
      title: "Tipografia da Marca",
      description: "League Spartan e Poppins refletem força, acessibilidade e modernidade.",
    },
  ];

  // Todas as fotos do projeto social estão agora organizadas em coleções ou como fotos individuais.
  // As fotos "cartas.jpg", "cartas2.jpg", "cartas3.jpg", "cartas4.jpg", "cartas5.jpg" estão na coleção "Dinâmica com Cartas".
  // As fotos "dinamicaMassinha1.jpg", "dinamicaMassinha2.jpg", "dinamicaMassinha3.jpg", "dinamicaMassinha4.jpg", "dinamicaMassinha5.jpg", "dinamicaMassinha6.jpg" estão na coleção "Oficina de Massinha".
  // As fotos "divulgacaoPoster.jpg", "membrosProceder.jpg", "seloProceder.jpg", "turma.jpg" estão na lista de fotos individuais.

  const photoCollections = [
    {
      title: "Dinâmica com Cartas",
      photos: [
        { src: cartas1, alt: "Dinâmica com cartas - momento 1", caption: "Momento de integração com dinâmica de cartas" },
        { src: cartas2, alt: "Dinâmica com cartas - momento 2", caption: "Participantes compartilhando experiências" },
        { src: cartas3, alt: "Dinâmica com cartas - momento 3", caption: "Reflexões e aprendizado em grupo" },
        { src: cartas4, alt: "Dinâmica com cartas - momento 4", caption: "Conexões sendo criadas através das cartas" },
        { src: cartas5, alt: "Dinâmica com cartas - momento 5", caption: "Momentos de descontração e união" },
      ]
    },
    {
      title: "Oficina de Massinha",
      photos: [
        { src: massinha1, alt: "Oficina com massinha - momento 1", caption: "Criatividade em ação: dinâmica com massinha" },
        { src: massinha2, alt: "Oficina com massinha - momento 2", caption: "Expressão artística e inclusão" },
        { src: massinha3, alt: "Oficina com massinha - momento 3", caption: "Trabalho em equipe e diversão" },
        { src: massinha4, alt: "Oficina com massinha - momento 4", caption: "Desenvolvendo habilidades motoras" },
        { src: massinha5, alt: "Oficina com massinha - momento 5", caption: "Arte sem barreiras" },
        { src: massinha6, alt: "Oficina com massinha - momento 6", caption: "Celebrando as criações coletivas" },
      ]
    }
  ];

  // Fotos individuais (não agrupadas em coleções)
  const individualPhotos = [
    { src: divulgacao, alt: "Poster de divulgação do projeto", caption: "Material de divulgação do projeto" },
    { src: membros, alt: "Membros da PROCEDER no projeto", caption: "Nossa equipe em ação" },
    { src: selo, alt: "Selo PROCEDER no evento", caption: "Marca PROCEDER presente no evento" },
    { src: turma, alt: "Foto da turma participante", caption: "Todos juntos: participantes e equipe" },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title" data-aos="fade-down">Nossos Projetos e Iniciativas</h1>
        <p className="projects-intro-text" data-aos="fade-up" data-aos-delay="200">
          Explore um pouco do que a PROCEDER tem realizado! Desde feiras e eventos de conscientização até materiais que reforçam nossa missão de inclusão.
        </p>
      </div>

      <section className="projects-gallery-section">
        <h2 className="section-subtitle" data-aos="fade-up">Momentos e Materiais</h2>
        <div className="projects-gallery">
          {projectItems.map((item, index) => (
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              isLarge={item.isLarge}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* SEÇÃO: Projeto Social em Destaque */}
      <section
        ref={socialProjectHighlightRef}
        className={`social-project-highlight ${socialProjectVisible ? 'is-visible' : ''}`}
      >
        <div className="social-project-header">
          <span className="social-project-badge" data-aos="fade-down">Projeto em Destaque</span>
          <h2 className="social-project-title" data-aos="fade-down" data-aos-delay="100">Dia da Inclusão Novembro Azul</h2>
          <p className="social-project-description" data-aos="fade-up" data-aos-delay="200">
            Durante o mês do Novembro Azul, realizamos a oficina “Por Todos Nós: Consciência e Cuidado que Inclui”, uma ação voltada aos jovens aprendizes com foco na prevenção da saúde masculina e na conscientização sobre a inclusão de pessoas com deficiência (PCDs) no mercado de trabalho.
            A proposta trouxe uma vivência leve e reflexiva, baseada no diálogo, na escuta e na empatia. Por meio de atividades colaborativas, os participantes discutiram tabus sobre saúde masculina, a importância do autocuidado e as barreiras enfrentadas por PCDs no ambiente profissional.
            A oficina reforçou que cuidar-se também é um ato de coragem — e que a inclusão começa quando aprendemos a enxergar e respeitar as diferentes realidades ao nosso redor.
            O encontro promoveu integração, amadurecimento e novas percepções sobre responsabilidade social, fortalecendo a consciência coletiva sobre prevenção, acolhimento e acessibilidade.<br></br>
            <strong>onde o talento não tem barreiras</strong>.
          </p>
        </div>

        {/* Coleções de Fotos Agrupadas por tipo de atividade */}
        <div className="photo-collections-container">
          {photoCollections.map((collection, index) => (
            <PhotoCollection
              key={index}
              title={collection.title}
              photos={collection.photos}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            />
          ))}
        </div>

        {/* Galeria de Fotos Individuais (as que não se encaixam nas coleções) */}
        <div className="social-project-gallery">
          {individualPhotos.map((photo, index) => (
            <div
              key={index}
              className="social-project-photo-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="photo-wrapper">
                <img src={photo.src} alt={photo.alt} />
                <div className="photo-overlay">
                  <p className="photo-overlay-caption">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="social-project-footer" data-aos="fade-up" data-aos-delay="500">
          <p className="social-project-impact">
            <strong>Impacto:</strong> Mais de 50 participantes, várias atividades intensas,
            e inúmeras histórias de superação e aprendizado compartilhadas.
          </p>
        </div>
      </section>

      <section
        ref={mascotsSectionRef}
        className={`mascots-section ${mascotsVisible ? 'is-visible' : ''}`}
      >
        <h2 className="section-subtitle" data-aos="fade-up">Conheça Nossos Personas!</h2>
        <p className="mascots-intro-text" data-aos="fade-up" data-aos-delay="200">
          Nossos personas representam a diversidade e a força da comunidade PCD, cada um com sua história e simbolismo.
        </p>
        <div className="mascots-grid">
          <div className="mascot-item" data-aos="zoom-in" data-aos-delay="0">
            <img src={cristian} alt="Mascote com bengala" className="mascot-image" />
            <h3 className="mascot-name">Cristian</h3>
            <p className="mascot-description">
              Representa a visão e a superação. Mostra que a percepção vai além do que os olhos veem.
            </p>
          </div>
          <div className="mascot-item" data-aos="zoom-in" data-aos-delay="200">
            <img src={patricia} alt="Mascote cadeirante" className="mascot-image" />
            <h3 className="mascot-name">Patricia</h3>
            <p className="mascot-description">
              Simboliza mobilidade e independência. Mostra que barreiras físicas podem ser superadas.
            </p>
          </div>
          <div className="mascot-item" data-aos="zoom-in" data-aos-delay="400">
            <img src={diana} alt="Mascote mulher" className="mascot-image" />
            <h3 className="mascot-name">Diana</h3>
            <p className="mascot-description">
              Representa força e voz. Luta por igualdade e espaço para todos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;