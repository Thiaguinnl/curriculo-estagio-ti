import { useEffect, useState } from 'react'
import './Hero.css'

const socialLinks = [
  { href: 'mailto:thiagograndim.m@gmail.com', icon: '/img/envelope.png', key: 'email' },
  { href: 'https://github.com/Thiaguinnl', icon: '/img/github.png', key: 'github' },
  { href: 'https://www.instagram.com/thiaguinnl/', icon: '/img/instagram.png', key: 'instagram' },
]

export default function Hero({ content }) {
  const [visibleChars, setVisibleChars] = useState(0)

  const codeSegments = content.codeSegments

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
  }, [fullLength, fullText])

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
          {content.greeting}
          <img
            src="/img/happy.gif"
            alt={content.greetingIconAlt}
            className="hero__greeting-icon"
          />
        </p>
        <h1 className="hero__title">
          {content.titlePrefix} <span className="hero__highlight">Thiago</span>
        </h1>
        <p className="hero__subtitle">{content.subtitle}</p>
        <p className="hero__bio">{content.bio}</p>
        <div className="hero__social">
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label={content.socialLabels[link.key]}
            >
              <img
                className="hero__social-icon"
                src={link.icon}
                alt={content.socialLabels[link.key]}
              />
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
