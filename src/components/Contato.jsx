import './Contato.css'

export default function Contato({ content }) {
  const base = import.meta.env.BASE_URL

  return (
    <section id="contato" className="contato">
      <h2 className="section__title">{content.sectionTitle}</h2>
      <p className="contato__subtitle">{content.subtitle}</p>
      <div className="contato__grid">
        {content.items.map((item) => {
          const lordIconSrc = `${base}${item.src}`

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contato__card"
            >
              <span className="contato__icon" aria-hidden="true">
                <lord-icon
                  src={lordIconSrc}
                  trigger="hover"
                  colors="primary:#f4f4f5,secondary:#818cf8"
                  style={{ width: '56px', height: '56px' }}
                />
              </span>
              <span className="contato__label">{item.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
