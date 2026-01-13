import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M7.75 2h8.5C19.2 2 22 4.8 22 7.75v8.5c0 2.95-2.8 5.75-5.75 5.75h-8.5C4.8 22 2 19.2 2 16.25v-8.5C2 4.8 4.8 2 7.75 2zm0 1.5C5.68 3.5 3.5 5.68 3.5 7.75v8.5c0 2.07 2.18 4.25 4.25 4.25h8.5c2.07 0 4.25-2.18 4.25-4.25v-8.5c0-2.07-2.18-4.25-4.25-4.25h-8.5zm8.1 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
        </svg>
      )
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      )
    }
  ];

  const footerLinks = [
    {
      title: 'Legal',
      links: [
        { label: 'Términos y Condiciones', url: '#terminos' },
        { label: 'Política de Privacidad', url: '#privacidad' },
        { label: 'Cookies', url: '#cookies' },
        { label: 'Aviso Legal', url: '#legal' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nosotros', url: '#nosotros' },
        { label: 'Contacto', url: '#contacto' },
        { label: 'Trabaja con Nosotros', url: '#trabajo' },
        { label: 'Prensa', url: '#prensa' }
      ]
    },
    {
      title: 'Ayuda',
      links: [
        { label: 'Centro de Ayuda', url: '#ayuda' },
        { label: 'Preguntas Frecuentes', url: '#faq' },
        { label: 'Contactar Soporte', url: '#soporte' },
        { label: 'Estado del Servicio', url: '#estado' }
      ]
    }
  ];

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    // Solo cursor pointer, no hace nada más
    console.log('Link clickeado:', url);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Sección Superior */}
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">MusicEvents</span>
                <span className="logo-subtext">Portal</span>
              </div>
              <p className="footer-tagline">
                Conectando a los amantes de la música con los mejores eventos
              </p>
              
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              {footerLinks.map((column) => (
                <div key={column.title} className="footer-column">
                  <h3 className="footer-column-title">{column.title}</h3>
                  <ul className="footer-column-links">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.url}
                          className="footer-link"
                          onClick={(e) => handleLinkClick(e, link.url)}
                          style={{ cursor: 'pointer' }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Línea Separadora */}
          <div className="footer-divider"></div>
          
          {/* Sección Inferior */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; {currentYear} MusicEvents Portal. Todos los derechos reservados.</p>
            </div>
            
            <div className="footer-extra">
              <p>
                Este sitio es un proyecto de demostración. Todas las imágenes son de 
                <a 
                  href="https://unsplash.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-external-link"
                >
                  Unsplash
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;