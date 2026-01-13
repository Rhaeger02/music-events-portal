import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Usando una API pública de eventos (Ticketmaster API)
      // Nota: Necesitarías una API Key real para producción
      // Usaremos datos mock como ejemplo
      
      // Datos mock de eventos musicales
      const mockEvents = [
        {
          id: 1,
          name: "Festival de Jazz Internacional",
          date: "2024-06-15",
          venue: "Parque Central",
          city: "Madrid",
          country: "ES",
          image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          genre: "Jazz",
          price: "45€"
        },
        {
          id: 2,
          name: "Rock Legends Tour",
          date: "2024-07-20",
          venue: "Wizink Center",
          city: "Madrid",
          country: "ES",
          image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          genre: "Rock",
          price: "65€"
        },
        {
          id: 3,
          name: "EDM Summer Festival",
          date: "2024-08-05",
          venue: "Feria de Valencia",
          city: "Valencia",
          country: "ES",
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          genre: "Electrónica",
          price: "55€"
        },
        {
          id: 4,
          name: "Clásicos en el Auditorio",
          date: "2024-06-30",
          venue: "Auditorio Nacional",
          city: "Madrid",
          country: "ES",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          genre: "Clásica",
          price: "35€"
        },
        {
          id: 5,
          name: "Indie Music Week",
          date: "2024-07-12",
          venue: "Sala Razzmatazz",
          city: "Barcelona",
          country: "ES",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          genre: "Indie",
          price: "25€"
        },
        {
          id: 6,
          name: "Latin Beats Festival",
          date: "2024-08-18",
          venue: "Palau Sant Jordi",
          city: "Barcelona",
          country: "ES",
          image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          genre: "Latina",
          price: "40€"
        }
      ];

      // Simular delay de API
      setTimeout(() => {
        setEvents(mockEvents);
        setLoading(false);
      }, 1000);

    } catch (err) {
      setError('Error al cargar los eventos');
      setLoading(false);
    }
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.genre.toLowerCase() === filter.toLowerCase());

  const genres = ['all', ...new Set(events.map(event => event.genre))];

  return (
    <section id="eventos" className="events-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Próximos Eventos</h2>
          <p className="section-subtitle">
            No te pierdas los mejores conciertos y festivales
          </p>
        </div>

        {/* Filtros */}
        <div className="events-filters">
          {genres.map(genre => (
            <button
              key={genre}
              className={`filter-btn ${filter === genre ? 'active' : ''}`}
              onClick={() => setFilter(genre)}
            >
              {genre === 'all' ? 'Todos' : genre}
            </button>
          ))}
        </div>

        {/* Lista de eventos */}
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Cargando eventos...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-text">{error}</p>
            <button onClick={fetchEvents} className="btn btn-primary">
              Reintentar
            </button>
          </div>
        ) : (
          <div className="events-grid">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* Mensaje si no hay eventos */}
        {!loading && !error && filteredEvents.length === 0 && (
          <div className="no-events">
            <p>No hay eventos disponibles para esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;