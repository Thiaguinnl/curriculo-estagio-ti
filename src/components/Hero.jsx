import './Hero.css'

const socialLinks = [
  { href: 'mailto:thiagograndim.m@gmail.com', icon: '✉', label: 'E-mail' },
  { href: 'https://github.com/Thiaguinnl', icon: '⌘', label: 'GitHub' },
  { href: 'https://www.instagram.com/thiaguinnl/', icon: '📷', label: 'Instagram' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Olá, visitante! 👋</p>
        <h1 className="hero__title">
          Meu nome é <span className="hero__highlight">Thiago</span>
        </h1>
        <p className="hero__subtitle">Aspirante a programador · Buscando estágio em TI</p>
        <p className="hero__bio">
          Universitário dedicado em constante aprendizado, buscando oportunidades na área de 
          programação para aprimorar habilidades técnicas e adquirir experiência prática.
        </p>
        <div className="hero__social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={link.label}
            >
              <span className="hero__social-icon">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__code-block">
          <span className="hero__code-line"><span className="code-key">const</span> dev = {'{'}</span>
          <span className="hero__code-line">  nome: <span className="code-string">"Thiago"</span>,</span>
          <span className="hero__code-line">  foco: <span className="code-string">"Estágio em TI"</span>,</span>
          <span className="hero__code-line">  stack: [<span className="code-string">"React"</span>, <span className="code-string">"JavaScript"</span>]</span>
          <span className="hero__code-line">{'}'};</span>
        </div>
      </div>
    </section>
  )
}
