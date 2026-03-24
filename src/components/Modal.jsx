import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

export default function Modal({ open, title, onClose, children, closeLabel, closeModalLabel }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.()
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // foco inicial
    queueMicrotask(() => closeBtnRef.current?.focus())

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <button className="modal__overlay" onClick={onClose} aria-label={closeLabel} />
      <div className="modal__panel">
        <div className="modal__header">
          <div className="modal__title">{title}</div>
          <button
            ref={closeBtnRef}
            className="modal__close"
            onClick={onClose}
            aria-label={closeModalLabel}
          >
            ✕
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>,
    document.body,
  )
}

