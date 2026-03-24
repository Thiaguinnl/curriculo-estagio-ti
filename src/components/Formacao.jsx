import './Formacao.css'

export default function Formacao({ content }) {
  return (
    <section id="formacao" className="formacao">
      <h2 className="section__title">{content.sectionTitle}</h2>
      <div className="formacao__timeline">
        {content.items.map((item, index) => (
          <div key={index} className="formacao__item">
            <div className="formacao__dot"></div>
            <div className="formacao__content">
              <span className="formacao__tipo">{item.tipo}</span>
              <h3 className="formacao__curso">{item.curso}</h3>
              <p className="formacao__instituicao">{item.instituicao}</p>
              <p className="formacao__periodo">{item.periodo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
