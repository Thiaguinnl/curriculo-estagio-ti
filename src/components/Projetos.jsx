import { useMemo, useState } from 'react'
import Modal from './Modal'
import './Projetos.css'

export default function Projetos() {
  const projects = useMemo(
    () => [
      {
        id: 'projeto-1',
        title: 'Recipe Master',
        subtitle: 'Site culinário feito no 1º período',
        stack: ['HTML', 'CSS', 'JavaScript'],
        bullets: ['Interface responsiva', 'Foco em UX e organização'],
        demoUrl: 'https://thiaguinnl.github.io/curriculo-estagio-ti/',
        codeUrl: 'https://github.com/SEU-USUARIO/SEU-REPO',
        details: {
          problema: 'Qual problema esse projeto resolve?',
          decisoes: [
            'Estruturei componentes/partes para facilitar manutenção',
            'Cuidei de responsividade e acessibilidade básica',
          ],
          desafios: ['Layout responsivo', 'Organização do código'],
        },
      },
      {
        id: 'projeto-2',
        title: 'Projeto Finalizado (sem demo)',
        subtitle: 'Projeto pronto, ainda não hospedado',
        stack: ['React', 'Vite'],
        bullets: ['Componentização', 'Design consistente'],
        demoUrl: '',
        codeUrl: 'https://github.com/SEU-USUARIO/OUTRO-REPO',
        details: {
          problema: 'Qual problema esse projeto resolve?',
          decisoes: [
            'Reaproveitamento de componentes e estilos',
            'Separação clara de responsabilidades',
          ],
          desafios: ['Modelagem de estados', 'Refino de UI'],
        },
      },
    ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const activeProject = projects.find((p) => p.id === active) || null

  const openModal = (projectId) => {
    setActive(projectId)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
    setActive(null)
  }

  return (
    <section id="projetos" className="projects">
      <h2 className="section__title">Projetos</h2>
      <p className="projects__subtitle">
        Alguns projetos que desenvolvi — com demo, código e detalhes técnicos.
      </p>

      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.id} className="projects__card">
            <div className="projects__thumb" aria-hidden="true" />

            <div className="projects__meta">
              <h3 className="projects__title">{p.title}</h3>
              <p className="projects__sub">{p.subtitle}</p>

              <div className="projects__chips">
                {p.stack.map((s) => (
                  <span key={s} className="projects__chip">
                    {s}
                  </span>
                ))}
              </div>

              <ul className="projects__bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="projects__actions">
              <button
                className="projects__btn projects__btn--primary"
                onClick={() => openModal(p.id)}
                disabled={!p.demoUrl && !p.details}
                title={!p.demoUrl ? 'Sem demo online (abre detalhes)' : 'Abrir demo'}
              >
                Ver Demo
              </button>
              <a
                className="projects__btn"
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Código
              </a>
              <button className="projects__btn" onClick={() => openModal(p.id)}>
                Ver Detalhes
              </button>
            </div>
          </article>
        ))}
      </div>

      <Modal
        open={open}
        title={activeProject ? activeProject.title : 'Projeto'}
        onClose={closeModal}
      >
        {activeProject ? (
          <div className="projectsModal">
            <div className="projectsModal__demo">
              {activeProject.demoUrl ? (
                <>
                  <iframe
                    className="projectsModal__iframe"
                    src={activeProject.demoUrl}
                    title={`Demo: ${activeProject.title}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                  <div className="projectsModal__demoBar">
                    <a
                      className="projectsModal__open"
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir em nova aba
                    </a>
                  </div>
                </>
              ) : (
                <div className="projectsModal__noDemo">
                  <div className="projectsModal__noDemoTitle">Demo não disponível</div>
                  <div className="projectsModal__noDemoText">
                    Esse projeto está finalizado, mas ainda não está hospedado. Você pode ver o
                    código no GitHub e ler os detalhes técnicos ao lado.
                  </div>
                </div>
              )}
            </div>

            <aside className="projectsModal__panel">
              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">Stack</div>
                <div className="projectsModal__chips">
                  {activeProject.stack.map((s) => (
                    <span key={s} className="projectsModal__chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">Problema resolvido</div>
                <div className="projectsModal__text">{activeProject.details?.problema}</div>
              </div>

              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">Decisões técnicas</div>
                <ul className="projectsModal__list">
                  {(activeProject.details?.decisoes || []).map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">Desafios</div>
                <ul className="projectsModal__list">
                  {(activeProject.details?.desafios || []).map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="projectsModal__panelBlock">
                <a
                  className="projectsModal__code"
                  href={activeProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código no GitHub
                </a>
              </div>
            </aside>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}

