import './Dados.css'

const dadosPessoais = [
  { label: 'Nome', value: 'Thiago Grandim das Mercês' },
  { label: 'Idade', value: '18 anos' },
  { label: 'Estado Civil', value: 'Solteiro' },
  { label: 'Endereço', value: 'Rua da Suíça, 272, Jardim Casa Branca, Betim - MG' },
  { label: 'Telefone', value: '+55 (31) 98246-5473' },
  { label: 'Idiomas', value: 'Português BR (nativo) e Inglês (intermediário)' },
]

export default function Dados() {
  return (
    <section id="dados" className="dados">
      <h2 className="section__title">Dados Pessoais</h2>
      <div className="dados__content">
        <div className="dados__info">
          {dadosPessoais.map((item) => (
            <div key={item.label} className="dados__row">
              <span className="dados__label">{item.label}:</span>
              <span className="dados__value">{item.value}</span>
            </div>
          ))}
          <div className="dados__quote">
            <p>
              "Sou um universitário dedicado e em constante aprendizado, buscando oportunidades 
              na área de programação para aprimorar minhas habilidades técnicas e adquirir 
              experiência prática. Tenho grande interesse em resolver problemas, aprender 
              novas tecnologias e contribuir de forma proativa para a equipe. Meu objetivo é 
              estagiar em uma empresa onde possa crescer profissionalmente e agregar valor com 
              meu comprometimento e vontade de evoluir."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
