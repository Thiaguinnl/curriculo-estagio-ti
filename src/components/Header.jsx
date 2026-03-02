import { useState } from 'react'
import './Header.css'

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#formacao', label: 'Formação' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#dados', label: 'Dados' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__logo">
          <img
            src="/img/brasaocor.png"
            alt="Logo PUC Minas"
            className="header__logo-img"
          />
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
