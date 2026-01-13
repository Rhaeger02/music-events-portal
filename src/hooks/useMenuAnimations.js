import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const useMenuAnimations = (isMenuOpen) => {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (menuRef.current && overlayRef.current) {
      if (isMenuOpen) {
        // Animación de entrada
        gsap.to(overlayRef.current, {
          duration: 0.3,
          opacity: 1,
          display: 'block',
          ease: 'power2.out'
        });

        gsap.to(menuRef.current, {
          duration: 0.4,
          x: 0,
          ease: 'power3.out'
        });

        // Animación escalonada para items del menú
        gsap.fromTo(
          menuItemsRef.current,
          { x: -20, opacity: 0 },
          {
            duration: 0.3,
            x: 0,
            opacity: 1,
            stagger: 0.1,
            delay: 0.2,
            ease: 'power2.out'
          }
        );
      } else {
        // Animación de salida
        gsap.to(menuRef.current, {
          duration: 0.3,
          x: '-100%',
          ease: 'power2.in'
        });

        gsap.to(overlayRef.current, {
          duration: 0.2,
          opacity: 0,
          delay: 0.1,
          ease: 'power2.in',
          onComplete: () => {
            if (overlayRef.current) {
              overlayRef.current.style.display = 'none';
            }
          }
        });
      }
    }
  }, [isMenuOpen]);

  const addMenuItemRef = (element) => {
    if (element && !menuItemsRef.current.includes(element)) {
      menuItemsRef.current.push(element);
    }
  };

  return {
    menuRef,
    overlayRef,
    addMenuItemRef
  };
};

export default useMenuAnimations;