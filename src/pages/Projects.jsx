// src/pages/Projects.jsx
import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './../styles/Projects.css';

// Componentes mantidos
const ProjectCard = ({ image, title, description, isLarge = false, 'data-aos': dataAos, 'data-aos-delay': dataAosDelay }) => (
  <div className={`project-card ${isLarge ? 'project-card-large' : ''}`} data-aos={dataAos} data-aos-delay={dataAosDelay}>
    <img src={image} alt={title} className="project-card-image" />
    <div className="project-card-content">
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
    </div>
  </div>
);

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
        if (top < windowHeight * 0.75) setMascotsVisible(true);
      }
      if (socialProjectHighlightRef.current) {
        const top = socialProjectHighlightRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) setSocialProjectVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // TODOS OS CAMINHOS CORRIGIDOS COM "/" NO INÍCIO
  const projectItems = [
    { image: "/campanha.svg", title: "Campanha Novembro Azul", description: "Evento especial focado na conscientização e saúde masculina, com um toque de inclusão." },
    { image: "/bolsa.svg", title: "Ecobags Personalizadas", description: "Ecobags com a logo 'PROCEDER: Onde o talento não tem barreiras', promovendo sustentabilidade." },
    { image: "/camisa.svg", title: "Camisetas Exclusivas", description: "Camisetas de alta qualidade reforçando a identidade e o senso de comunidade." },
    { image: "/diversidade.svg", title: "Mundo Diverso e Acessível", description: "Arte visual destacando a importância de um mundo mais diverso e acessível." },
    { image: "/caneca.svg", title: "Canecas da Marca", description: "Canecas personalizadas com o símbolo de acessibilidade da PROCEDER." },
    { image: "/botoes.svg", title: "Bottons dos Mascotes", description: "Bottons colecionáveis com nossos mascotes, representando diversidade e inclusão." },
    { image: "/saude.svg", title: "Conscientização e Saúde", description: "Peça da campanha Novembro Azul, focada na prevenção e saúde do homem." },
    { image: "/logo-proceder.png", title: "Definição da Marca PROCEDER", description: "Logo une o 'C' de PROCEDER ao símbolo de acessibilidade, representando movimento e inclusão.", isLarge: true },
    { image: "/PaletaCores.svg", title: "Paleta de Cores da PROCEDER", description: "Verde-Água, Azul e Amarelo representam Renovação, Confiança e Potencial." },
    { image: "/tipografia.svg", title: "Tipografia da Marca", description: "League Spartan e Poppins refletem força, acessibilidade e modernidade." },
  ];

  const photoCollections = [
    {
      title: "Dinâmica com Cartas",
      photos: [
        { src: "/projeto/cartas.jpg", alt: "Dinâmica com cartas - momento 1", caption: "Momento de integração com dinâmica de cartas" },
        { src: "/projeto/cartas2.jpg", alt: "Dinâmica com cartas - momento 2", caption: "Participantes compartilhando experiências" },
        { src: "/projeto/cartas3.jpg", alt: "Dinâmica com cartas - momento 3", caption: "Reflexões e aprendizado em grupo" },
        { src: "/projeto/cartas4.JPG", alt: "Dinâmica com cartas - momento 4", caption: "Conexões sendo criadas através das cartas" },
        { src: "/projeto/cartas5.JPG", alt: "Dinâmica com cartas - momento 5", caption: "Momentos de descontração e união" },
      ]
    },
    {
      title: "Oficina de Massinha",
      photos: [
        { src: "/projeto/dinamicaMassinha1.jpg", alt: "Oficina com massinha - momento 1", caption: "Criatividade em ação: dinâmica com massinha" },
        { src: "/projeto/dinamicaMassinha2.jpg", alt: "Oficina com massinha - momento 2", caption: "Expressão artística e inclusão" },
        { src: "/projeto/dinamicaMassinha3.JPG", alt: "Oficina com massinha - momento 3", caption: "Trabalho em equipe e diversão" },
        { src: "/projeto/dinamicaMassinha4.jpg", alt: "Oficina com massinha - momento 4", caption: "Desenvolvendo habilidades motoras" },
        { src: "/projeto/dinamicaMassinha5.jpg", alt: "Oficina com massinha - momento 5", caption: "Arte sem barreiras" },
        { src: "/projeto/dinamicaMassinha6.jpg", alt: "Oficina com massinha - momento 6", caption: "Celebrando as criações coletivas" },
      ]
    }
  ];

  const individualPhotos = [
    { src: "/projeto/divulgacaoPoster.jpg", alt: "Poster de divulgação do projeto", caption: "Material de divulgação do projeto" },
    { src: "/projeto/membrosProceder.jpg", alt: "Membros da PROCEDER no projeto", caption: "Nossa equipe em ação" },
    { src: "/projeto/seloProceder.jpg", alt: "Selo PROCEDER no evento", caption: "Marca PROCEDER presente no evento" },
    { src: "/projeto/turma.jpg", alt: "Foto da turma participante", caption: "Todos juntos: participantes e equipe" },
  ];

  return (
    <div className="projects-page">
      {/* ... resto do JSX igual ... */}

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

      {/* Coleções de fotos */}
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

      {/* Fotos individuais */}
      <div className="social-project-gallery">
        {individualPhotos.map((photo, index) => (
          <div key={index} className="social-project-photo-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.alt} />
              <div className="photo-overlay">
                <p className="photo-overlay-caption">{photo.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mascotes – caminhos corrigidos */}
      <section ref={mascotsSectionRef} className={`mascots-section ${mascotsVisible ? 'is-visible' : ''}`}>
        <h2 className="section-subtitle" data-aos="fade-up">Conheça Nossos Personas!</h2>
        <p className="mascots-intro-text" data-aos="fade-up" data-aos-delay="200">
          Nossos personas representam a diversidade e a força da comunidade PCD, cada um com sua história e simbolismo.
        </p>
        <div className="mascots-grid">
          <div className="mascot-item" data-aos="zoom-in" data-aos-delay="0">
            <img src="/Cristian.svg" alt="Mascote com bengala" className="mascot-image" />
            <h3 className="mascot-name">Cristian</h3>
            <p className="mascot-description">Representa a visão e a superação. Mostra que a percepção vai além do que os olhos veem.</p>
          </div>
          <div className="mascot-item" data-aos="zoom-in" data-aos-delay="200">
            <img src="/Patricia.svg" alt="Mascote cadeirante" className="mascot-image" />
            <h3 className="mascot-name">Patricia</h3>
            <p className="mascot-description">Simboliza mobilidade e independência. Mostra que barreiras físicas podem ser superadas.</p>
          </div>
          <div className="mascot-item" data-aos="zoom-in" data-aos-delay="400">
            <img src="/Diana.svg" alt="Mascote mulher" className="mascot-image" />
            <h3 className="mascot-name">Diana</h3>
            <p className="mascot-description">Representa força e voz. Luta por igualdade e espaço para todos.</p>
          </div>
        </div>
      </section>

      {/* ... resto do JSX que você já tinha ... */}
    </div>
  );
}

export default Projects;