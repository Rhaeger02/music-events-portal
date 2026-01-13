import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Componentes
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Artists from './components/Artists';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Registrar plugins de GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  useEffect(() => {
    // Inicializar ScrollTrigger
    ScrollTrigger.refresh();
    
    // Limpiar al desmontar
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Events />
        <Artists />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;