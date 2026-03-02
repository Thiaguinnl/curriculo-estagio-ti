import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Formacao from './components/Formacao'
import Dados from './components/Dados'
import Contato from './components/Contato'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Formacao />
        <Dados />
        <Contato />
      </main>
    </>
  )
}

export default App
