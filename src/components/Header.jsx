import { useState } from 'react'
import './Header.css'

export default function Header({ language, setLanguage, content }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <img
            src="img/brasaocor.png"
            alt="Logo PUC Minas"
            className="header__logo-img"
          />
        </a>

        <button
          className={`header__menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={content.menuAriaLabel}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <ul className="header__nav-list">
            {content.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="header__nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="header__cta"
            onClick={() => setMenuOpen(false)}
          >
            {content.contact}
          </a>
          <button
            type="button"
            className={`header__lang-toggle ${language === 'en' ? 'is-en' : ''}`}
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label={content.languageAriaLabel}
            title={content.languageAriaLabel}
          >
            <span className="header__lang-thumb" aria-hidden="true" />
            <span className={`header__lang-option ${language === 'pt' ? 'active' : ''}`}>PT</span>
            <span className={`header__lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
