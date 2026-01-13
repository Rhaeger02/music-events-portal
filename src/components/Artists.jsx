import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Artists = () => {
  const sectionRef = useRef(null);
  const artistsRef = useRef([]);

  const artists = [
    {
      id: 1,
      name: "The Midnight Band",
      genre: "Synthwave",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        spotify: "https://open.spotify.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 2,
      name: "Soul Collective",
      genre: "R&B/Soul",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        spotify: "https://open.spotify.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com"
      }
    },
    {
      id: 3,
      name: "Echo Mountains",
      genre: "Indie Folk",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        spotify: "https://open.spotify.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com"
      }
    }
  ];

  useEffect(() => {
    // Animación de entrada escalonada
    gsap.fromTo(
      artistsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const addArtistRef = (element) => {
    if (element && !artistsRef.current.includes(element)) {
      artistsRef.current.push(element);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="artistas" className="artists-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Artistas Destacados</h2>
          <p className="section-subtitle">
            Conoce a los talentos que verás en nuestros eventos
          </p>
        </div>

        <div className="artists-grid">
          {artists.map((artist, index) => (
            <div 
              key={artist.id} 
              className="artist-card"
              ref={addArtistRef}
            >
              <div className="artist-image">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  onClick={() => handleSocialClick('https://www.example.com')}
                />
                <div className="artist-overlay">
                  <span className="artist-genre">{artist.genre}</span>
                </div>
              </div>
              
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                
                <div className="artist-social">
                  <button 
                    className="social-btn spotify"
                    onClick={() => handleSocialClick(artist.social.spotify)}
                    aria-label="Spotify"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </button>
                  
                  <button 
                    className="social-btn youtube"
                    onClick={() => handleSocialClick(artist.social.youtube)}
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </button>
                  
                  <button 
                    className="social-btn instagram"
                    onClick={() => handleSocialClick(artist.social.instagram)}
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5C19.2 2 22 4.8 22 7.75v8.5c0 2.95-2.8 5.75-5.75 5.75h-8.5C4.8 22 2 19.2 2 16.25v-8.5C2 4.8 4.8 2 7.75 2zm0 1.5C5.68 3.5 3.5 5.68 3.5 7.75v8.5c0 2.07 2.18 4.25 4.25 4.25h8.5c2.07 0 4.25-2.18 4.25-4.25v-8.5c0-2.07-2.18-4.25-4.25-4.25h-8.5zm8.1 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;