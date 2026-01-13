import React from 'react';
import useScrollEffects from '../hooks/useScrollEffects';
import useHamburgerMenu from '../hooks/useHamburgerMenu';
import useMenuAnimations from '../hooks/useMenuAnimations';

const Header = () => {
  const { scrolled } = useScrollEffects();
  const { isMenuOpen, toggleMenu, closeMenu } = useHamburgerMenu();
  const { menuRef, overlayRef, addMenuItemRef } = useMenuAnimations(isMenuOpen);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Artistas', href: '#artistas' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Newsletter', href: '#newsletter' }
  ];

  return (
    <>
      <header 
        className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      >
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="#inicio">
                <span className="logo-text">MusicEvents</span>
                <span className="logo-subtext">Portal</span>
              </a>
            </div>

            <nav className="desktop-nav">
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      onClick={closeMenu}
                      className="nav-link"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <button className="btn btn-primary btn-sm">Login</button>
              <button 
                className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        ref={overlayRef}
        className="menu-overlay"
        style={{ display: 'none' }}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className="mobile-menu"
      >
        <div className="mobile-menu-header">
          <div className="logo">
            <span className="logo-text">MusicEvents</span>
            <span className="logo-subtext">Portal</span>
          </div>
          <button 
            className="close-menu-btn"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} ref={addMenuItemRef}>
                <a 
                  href={item.href} 
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-text">
            Los mejores eventos musicales en un solo lugar
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;