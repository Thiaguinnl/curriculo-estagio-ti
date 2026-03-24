import './Sobre.css'

export default function Sobre({ content }) {
  return (
    <section id="sobre" className="sobre">
      <h2 className="section__title">{content.sectionTitle}</h2>
      <div className="sobre__grid">
        {content.cards.map((card) => (
          <article key={card.title} className="sobre__card">
            <div className="sobre__card-icon">
              <img src={card.icon} alt={card.alt} />
            </div>
            <h3 className="sobre__card-title">{card.title}</h3>
            <p className="sobre__card-desc">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
