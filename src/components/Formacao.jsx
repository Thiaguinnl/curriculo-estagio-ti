import './Formacao.css'

const formacoes = [
  {
    instituicao: 'PUC Minas - Betim',
    curso: 'Sistemas de Informação',
    periodo: '1º período (em andamento)',
    tipo: 'Graduação',
  },
  {
    instituicao: 'Colégio Educare - Betim',
    curso: 'Ensino Médio',
    periodo: 'Completo',
    tipo: 'Ensino Médio',
  },
]

export default function Formacao() {
  return (
    <section id="formacao" className="formacao">
      <h2 className="section__title">Formação</h2>
      <div className="formacao__timeline">
        {formacoes.map((item, index) => (
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
