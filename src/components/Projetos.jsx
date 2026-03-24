import { useMemo, useState } from 'react'
import Modal from './Modal'
import './Projetos.css'

export default function Projetos({ content, modalContent }) {
  const projects = useMemo(
    () => content.projects,
    [content.projects],
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
      <h2 className="section__title">{content.sectionTitle}</h2>
      <p className="projects__subtitle">{content.subtitle}</p>

      <div className="projects__grid">
        {projects.map((p) => (
          <article key={p.id} className="projects__card">
            <div className="projects__thumb" aria-hidden="true">
              {p.thumb ? (
                <img className="projects__thumb-img" src={p.thumb} alt="" loading="lazy" />
              ) : null}
            </div>

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
                title={!p.demoUrl ? content.labels.noOnlineDemoTitle : content.labels.openDemoTitle}
              >
                {content.labels.viewDemo}
              </button>
              <a
                className="projects__btn"
                href={p.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.labels.viewCode}
              </a>
              <button className="projects__btn" onClick={() => openModal(p.id)}>
                {content.labels.viewDetails}
              </button>
            </div>
          </article>
        ))}
      </div>

      <Modal
        open={open}
        title={activeProject ? activeProject.title : content.labels.modalFallbackTitle}
        onClose={closeModal}
        closeLabel={modalContent.close}
        closeModalLabel={modalContent.closeModal}
      >
        {activeProject ? (
          <div className="projectsModal">
            <div className="projectsModal__demo">
              {activeProject.demoUrl ? (
                <>
                  <iframe
                    className="projectsModal__iframe"
                    src={activeProject.demoUrl}
                    title={`${content.labels.demoTitlePrefix} ${activeProject.title}`}
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
                      {content.labels.openInNewTab}
                    </a>
                  </div>
                </>
              ) : (
                <div className="projectsModal__noDemo">
                  <div className="projectsModal__noDemoTitle">{content.labels.noDemoTitle}</div>
                  <div className="projectsModal__noDemoText">{content.labels.noDemoText}</div>
                </div>
              )}
            </div>

            <aside className="projectsModal__panel">
              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">{content.labels.stack}</div>
                <div className="projectsModal__chips">
                  {activeProject.stack.map((s) => (
                    <span key={s} className="projectsModal__chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">{content.labels.problemSolved}</div>
                <div className="projectsModal__text">{activeProject.details?.problema}</div>
              </div>

              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">{content.labels.technicalDecisions}</div>
                <ul className="projectsModal__list">
                  {(activeProject.details?.decisoes || []).map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="projectsModal__panelBlock">
                <div className="projectsModal__label">{content.labels.challenges}</div>
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
                  {content.labels.viewCodeOnGithub}
                </a>
              </div>
            </aside>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}

