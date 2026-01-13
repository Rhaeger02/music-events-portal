import React from 'react';
import useFormValidation from '../hooks/useFormValidation';

const Newsletter = () => {
  const validationRules = {
    email: (value) => {
      if (!value) return 'El email es requerido';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email inválido';
      return null;
    },
    name: (value) => {
      if (!value) return 'El nombre es requerido';
      if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
      return null;
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    validateForm,
    setIsSubmitting
  } = useFormValidation(
    { email: '', name: '' },
    validationRules
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simular envío a API
      try {
        // Aquí iría la llamada real a tu API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por suscribirte! Te has registrado exitosamente.');
        
        // Resetear formulario
        handleChange({ target: { name: 'email', value: '' } });
        handleChange({ target: { name: 'name', value: '' } });
        
      } catch (error) {
        alert('Hubo un error al procesar tu suscripción. Intenta nuevamente.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-info">
            <h2 className="section-title">Mantente Informado</h2>
            <p className="newsletter-description">
              Suscríbete a nuestro newsletter y recibe las últimas novedades 
              sobre eventos, artistas y ofertas exclusivas directamente en tu email.
            </p>
            
            <div className="newsletter-features">
              <div className="feature">
                <span className="feature-icon">🎵</span>
                <span>Primero en enterarte de nuevos eventos</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎫</span>
                <span>Acceso a preventas y descuentos exclusivos</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📱</span>
                <span>Contenido exclusivo sobre artistas</span>
              </div>
            </div>
          </div>
          
          <div className="newsletter-form-container">
            <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.name && touched.name ? 'error' : ''}`}
                  placeholder="Tu nombre"
                  disabled={isSubmitting}
                />
                {errors.name && touched.name && (
                  <span className="form-error">{errors.name}</span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-input ${errors.email && touched.email ? 'error' : ''}`}
                  placeholder="tu@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && touched.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>
              
              <div className="form-group">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span>
                    Acepto recibir comunicaciones y la 
                    <a href="#politica-privacidad" className="privacy-link">
                      política de privacidad
                    </a>
                  </span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-btn"></span>
                    Procesando...
                  </>
                ) : (
                  'Suscribirse'
                )}
              </button>
            </form>
            
            <p className="newsletter-note">
              Nos tomamos en serio tu privacidad. Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;