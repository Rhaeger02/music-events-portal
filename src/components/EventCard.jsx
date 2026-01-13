import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const EventCard = ({ event }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animación de entrada
    gsap.fromTo(
      cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleImageClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={cardRef} className="event-card">
      <div className="event-card-image" onClick={() => handleImageClick('https://www.example.com')}>
        <img 
          ref={imageRef}
          src={event.image} 
          alt={event.name}
          loading="lazy"
        />
        <div className="event-card-overlay">
          <span className="event-card-price">{event.price}</span>
        </div>
      </div>
      
      <div className="event-card-content">
        <div className="event-card-header">
          <span className="event-card-genre">{event.genre}</span>
          <span className="event-card-date">{formatDate(event.date)}</span>
        </div>
        
        <h3 className="event-card-title">{event.name}</h3>
        
        <div className="event-card-location">
          <svg className="location-icon" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>{event.venue}, {event.city}</span>
        </div>
        
        <div className="event-card-actions">
          <button className="btn btn-primary btn-sm">
            Más Información
          </button>
          <button className="btn btn-outline btn-sm">
            Recordar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;