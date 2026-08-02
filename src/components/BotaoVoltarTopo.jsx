import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BotaoVoltarTopo() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alvo = document.getElementById('agradecimento')
    if (!alvo) return

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.15,
    })
    observer.observe(alvo)
    return () => observer.disconnect()
  }, [])

  const handleClick = () => {
    document.getElementById('save-the-date')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Voltar para Save the Date"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-12 h-12 rounded-full bg-verde-medio/90 text-bege-carta shadow-lg flex items-center justify-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.92 }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
