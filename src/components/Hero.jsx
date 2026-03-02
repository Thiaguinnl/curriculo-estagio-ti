import { useEffect, useState } from 'react'
import './Hero.css'

const socialLinks = [
  { href: 'mailto:thiagograndim.m@gmail.com', icon: '/img/envelope.png', label: 'E-mail' },
  { href: 'https://github.com/Thiaguinnl', icon: '/img/github.png', label: 'GitHub' },
  { href: 'https://www.instagram.com/thiaguinnl/', icon: '/img/instagram.png', label: 'Instagram' },
]

export default function Hero() {
  const [visibleChars, setVisibleChars] = useState(0)

  const codeSegments = [
    { text: 'const', className: 'code-key' },
    { text: ' dev = { ', className: '' },
    { text: 'nome: ', className: '' },
    { text: '"Thiago"', className: 'code-string' },
    { text: ', ', className: '' },
    { text: 'foco: ', className: '' },
    { text: '"Estágio em TI"', className: 'code-string' },
    { text: ', ', className: '' },
    { text: 'stack: [', className: '' },
    { text: '"React"', className: 'code-string' },
    { text: ', ', className: '' },
    { text: '"JavaScript"', className: 'code-string' },
    { text: '] ', className: '' },
    { text: '};', className: '' },
  ]

  const fullText = codeSegments.map((seg) => seg.text).join('')
  const fullLength = fullText.length

  useEffect(() => {
    setVisibleChars(0)
    let i = 0
    let timeoutId = null

    const tick = () => {
      i += 1
      setVisibleChars(i)
      if (i >= fullLength) return

      const ch = fullText[i - 1]

      const base = 55
      const extra = ch === ',' || ch === ';' ? 140 : ch === ' ' ? 10 : 0
      timeoutId = setTimeout(tick, base + extra + Math.floor(Math.random() * 30))
    }

    timeoutId = setTimeout(tick, 400)
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  let remaining = visibleChars

  const typedNodes = codeSegments.map((seg, idx) => {
    if (remaining <= 0) return null
    const sliceLen = Math.min(remaining, seg.text.length)
    remaining -= sliceLen
    const chunk = seg.text.slice(0, sliceLen)

    if (seg.className) {
      return (
        <span key={idx} className={seg.className}>
          {chunk}
        </span>
      )
    }
    return <span key={idx}>{chunk}</span>
  })

  return (
    <section id="inicio" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">
          Olá, visitante!
          <img
            src="/img/happy.gif"
            alt="Ícone animado sorrindo"
            className="hero__greeting-icon"
          />
        </p>
        <h1 className="hero__title">
          Meu nome é <span className="hero__highlight">Thiago</span>
        </h1>
        <p className="hero__subtitle">Aspirante a programador · Buscando estágio em TI</p>
        <p className="hero__bio">
          Universitário dedicado em constante aprendizado, buscando oportunidades na área de 
          programação para aprimorar habilidades técnicas e adquirir experiência prática.
        </p>
        <div className="hero__social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={link.label}
            >
              <img className="hero__social-icon" src={link.icon} alt={link.label} />
            </a>
          ))}
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__code-block">
          <pre className="hero__code">{typedNodes}</pre>
        </div>
      </div>
    </section>
  )
}
