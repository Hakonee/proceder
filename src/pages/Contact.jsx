// src/pages/Contact.jsx
import React from 'react';
import './../styles/Contact.css'; // Importa os estilos específicos da Contact
// Se você for usar ícones (ex: Font Awesome), precisará importá-los ou garantir que estejam disponíveis globalmente.
// Exemplo de importação de Font Awesome (se estiver instalado):
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faPhone, faMapMarkerAlt, faLinkedin, faInstagram } from '@fortawesome/free-solid-svg-icons';
// Para este exemplo, vou usar apenas texto, mas você pode adicionar os ícones facilmente.

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário,
    // por exemplo, usando uma API ou um serviço de formulário como Formspree.
    alert('Mensagem enviada com sucesso! (Funcionalidade de envio real precisa ser implementada)');
    // Limpar o formulário após o envio (opcional)
    event.target.reset();
  };

  return (
    <div className="contact-page"> {/* Removido 'container' aqui, pois o contact-form-container já tem max-width e margin auto */}
      <div className="contact-header">
        <h1 className="contact-title">
          Entre em Contato
        </h1>
        <p className="contact-intro-text">
          Tem alguma dúvida, sugestão ou quer saber mais sobre a PROCEDER?
          Preencha o formulário abaixo ou entre em contato pelos nossos canais diretos.
        </p>
      </div>

      <div className="contact-content-wrapper"> {/* Novo wrapper para o formulário e informações */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nome Completo <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Assunto <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Assunto da mensagem (ex: Dúvida sobre vagas)"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensagem <span className="required-star">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6" // Aumentado o número de linhas padrão
                className="form-textarea"
                placeholder="Descreva sua mensagem aqui..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="contact-info-sidebar"> {/* Nova seção para informações de contato */}
          <h2 className="sidebar-title">Nossos Contatos</h2>
          <p className="sidebar-text">
            Prefere falar diretamente? Estamos à disposição para te ajudar!
          </p>

          <div className="contact-details-group">
            <div className="contact-detail-item">
              {/* <FontAwesomeIcon icon={faEnvelope} className="contact-icon" /> */}
              <span className="contact-icon">✉️</span>
              <a href="mailto:equipeproceder2025@gmail.com" className="contact-link">equipeproceder2025@gmail.com</a>
            </div>
            <div className="contact-detail-item">
              {/* <FontAwesomeIcon icon={faPhone} className="contact-icon" /> */}
              <span className="contact-icon">📞</span>
              <a href="tel:+551955551234" className="contact-link">(19) 5555-1234</a>
            </div>
            <div className="contact-detail-item">
              {/* <FontAwesomeIcon icon={faPhone} className="contact-icon" /> */}
              <span className="contact-icon">☎️</span>
              <a href="tel:08007770000" className="contact-link">SAC: 0800 777 0000</a>
            </div>
            <div className="contact-detail-item">
              {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" /> */}
              <span className="contact-icon">📍</span>
              <span className="contact-text">Rua Azárias de Melo N342, Taquaral - Campinas</span>
            </div>
          </div>

          {/* Seção de Redes Sociais (Opcional) */}
          <div className="social-media-links">
            <h3 className="social-media-title">Siga-nos</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/proceder.oficial?igsh=MXN6bnRpMG1oM3kxaw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
                <span className="social-icon">ig</span> {/* Exemplo de texto, substituir por ícone */}
              </a>
              {/* Adicione mais redes sociais conforme necessário */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;