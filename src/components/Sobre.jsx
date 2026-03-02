import './Sobre.css'

const cards = [
  {
    icon: '💻',
    title: 'Programador',
    description: 'Ensino Médio completo no Colégio Educare - Betim. Cursando o primeiro período de Sistemas de Informação na PUC Minas - Betim. Atualmente dedicando-se ao trabalho farmacêutico na Drogaria Grandim - Betim.',
  },
  {
    icon: '⚡',
    title: 'Mundo do Trabalho',
    description: 'Pessoa divertida e compromissada, com boa capacidade de lidar com exigências em grupos e com superiores. Habilidades em dedicação e êxito laboral, buscando ser um diferencial na empresa.',
  },
  {
    icon: '🎯',
    title: 'Habilidades',
    description: 'Boa comunicação e empatia no atendimento ao cliente. Português nativo e inglês intermediário. Proatividade, organização e atenção aos detalhes para fazer a diferença na sua empresa.',
  },
]

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <h2 className="section__title">Sobre</h2>
      <div className="sobre__grid">
        {cards.map((card) => (
          <article key={card.title} className="sobre__card">
            <span className="sobre__card-icon">{card.icon}</span>
            <h3 className="sobre__card-title">{card.title}</h3>
            <p className="sobre__card-desc">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
