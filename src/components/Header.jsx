import { useState } from 'react'
import './Header.css'

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#formacao', label: 'Formação' },
  { href: '#dados', label: 'Dados' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <span className="header__logo-text">&lt;CV /&gt;</span>
        </a>

        <button
          className={`header__menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map((item) => (
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
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
