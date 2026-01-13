import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animaciones de entrada
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
    );

    gsap.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9, ease: 'power3.out' }
    );

    // Efecto parallax en scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div ref={heroRef} className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 ref={titleRef} className="hero-title">
            Vive la Música
            <span className="hero-title-accent"> en Directo</span>
          </h1>
          
          <p ref={subtitleRef} className="hero-subtitle">
            Descubre los eventos musicales más esperados de la temporada. 
            Conciertos, festivales y experiencias únicas.
          </p>
          
          <div ref={ctaRef} className="hero-cta">
            <a href="#eventos" className="btn btn-primary btn-lg">
              Ver Eventos
            </a>
            <a href="#newsletter" className="btn btn-secondary btn-lg">
              Suscribirse
            </a>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;