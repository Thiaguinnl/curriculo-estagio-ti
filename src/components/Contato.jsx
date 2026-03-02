import './Contato.css'

const contatos = [
  {
    href: 'https://wa.me/5531982465473',
    icon: '📱',
    label: 'WhatsApp',
  },
  {
    href: 'mailto:thiagograndim.m@gmail.com',
    icon: '✉️',
    label: 'E-mail',
  },
  {
    href: 'https://www.instagram.com/thiaguinnl/',
    icon: '📷',
    label: 'Instagram',
  },
]

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <h2 className="section__title">Contato</h2>
      <p className="contato__subtitle">
        Entre em contato para oportunidades de estágio em TI
      </p>
      <div className="contato__grid">
        {contatos.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contato__card"
          >
            <span className="contato__icon">{item.icon}</span>
            <span className="contato__label">{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
