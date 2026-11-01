import { useState } from 'react';
import { navItems, businessInfo } from '../../data/siteContent';
import WhatsAppIcon from '../common/WhatsAppIcon';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span>Factory-direct wholesale apparel</span>
          <span className="announcement-separator">•</span>
          <span>Custom labeling enquiries welcome</span>
          <span className="announcement-separator">•</span>
          <span>Parcel delivery across Maharashtra</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
            <img
              src="/sunny-wholesaler-logo.webp"
              alt={`${businessInfo.name} logo`}
              className="brand-logo"
              loading="eager"
              decoding="async"
            />
            <div>
              <strong>{businessInfo.name}</strong>
              <small>Wholesale clothing · Nashik, India</small>
            </div>
          </a>

          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href={businessInfo.whatsapp} target="_blank" rel="noreferrer" className="button button-whatsapp header-whatsapp">
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <a className="header-call" href={`tel:${businessInfo.phone.replace(/[^\d+]/g, '')}`}>
              <span>Call sales</span>{businessInfo.phone}
            </a>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
