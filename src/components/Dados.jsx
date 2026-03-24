import './Dados.css'

export default function Dados({ content }) {
  return (
    <section id="dados" className="dados">
      <h2 className="section__title">{content.sectionTitle}</h2>
      <div className="dados__content">
        <div className="dados__info">
          {content.personalData.map((item) => (
            <div key={item.label} className="dados__row">
              <span className="dados__label">{item.label}:</span>
              <span className="dados__value">{item.value}</span>
            </div>
          ))}
          <div className="dados__quote">
            <p>{content.quote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
