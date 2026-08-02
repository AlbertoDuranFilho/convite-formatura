import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NOISE_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>"

const VINCO_ESCURO = '#1F3327'

function CaduceusSeal() {
  return (
    <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none" style={{ filter: 'drop-shadow(0 1px 0.5px rgba(0,0,0,.45))' }}>
      <line x1="24" y1="6" x2="24" y2="42" stroke="#FAF5EA" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M24 10c-5 3-8 3-8 7s5 4 5 8-5 4-5 8 3 4 8 7"
        stroke="#FAF5EA"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M24 10c5 3 8 3 8 7s-5 4-5 8 5 4 5 8-3 4-8 7"
        stroke="#FAF5EA"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M24 4c-4 0-6 3-6 3s3 2 6 2 6-2 6-2-2-3-6-3z"
        stroke="#FAF5EA"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  )
}

const CRACK_MS = 180

export default function Envelope({ onOpen }) {
  const [cracking, setCracking] = useState(false)
  const [opening, setOpening] = useState(false)
  const [closed, setClosed] = useState(true)

  const handleClick = () => {
    if (cracking || opening) return
    onOpen?.()
    setCracking(true)
    setTimeout(() => {
      setCracking(false)
      setOpening(true)
      setTimeout(() => setClosed(false), 1350)
    }, CRACK_MS)
  }

  return (
    <AnimatePresence>
      {closed && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bege-fundo px-4"
          exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.1 } }}
        >
          <motion.button
            type="button"
            onClick={handleClick}
            aria-label="Abrir convite"
            className="relative w-[96%] max-w-[420px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-medio rounded-sm"
            style={{ perspective: 1200 }}
            whileHover={opening || cracking ? {} : { y: -4 }}
            animate={opening ? { y: 40, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: opening ? 0.75 : 0, ease: 'easeIn' }}
          >
            {/* nome no topo, fora do envelope */}
            <p className="text-center font-script text-verde-escuro text-2xl sm:text-[1.75rem] mb-6 leading-snug px-2">
              Dra. Déborah Maria Coutinho Alves
            </p>

            {/* corpo do envelope — zoom sutil "entrando" na cena ao abrir */}
            <motion.div
              className="relative w-full rounded-md overflow-hidden"
              style={{
                aspectRatio: '4 / 3',
                boxShadow: '0 20px 36px rgba(15,24,18,.5), 0 4px 8px rgba(15,24,18,.3)',
              }}
              animate={opening ? { scale: 1.16 } : { scale: 1 }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* bolso inferior */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0% 100%, 50% 46%, 100% 100%)',
                  background:
                    'radial-gradient(120% 100% at 50% 100%, #3D5A46 0%, #2C4635 60%, #223428 100%)',
                }}
              />
              {/* lateral esquerda — pega mais luz */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0% 0%, 50% 46%, 0% 100%)',
                  background: 'linear-gradient(100deg, #4C6B57 0%, #2E4837 90%)',
                }}
              />
              {/* lateral direita — degradê claro (perto do vinco) pra escuro (borda) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(100% 0%, 50% 46%, 100% 100%)',
                  background: 'linear-gradient(90deg, #3C5A47 0%, #26402F 65%, #1B2F22 100%)',
                }}
              />

              {/* vincos: as 4 dobras se encontrando no centro, formando o "X" */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 75"
                preserveAspectRatio="none"
              >
                {/* dobras de cima (sob a aba) — traço duplo pra sugerir relevo */}
                <line x1="0" y1="0" x2="50" y2="34.5" stroke={VINCO_ESCURO} strokeWidth="0.9" strokeOpacity="0.55" />
                <line x1="0.6" y1="0.4" x2="50" y2="34.5" stroke="rgba(250,245,234,.22)" strokeWidth="0.4" />
                <line x1="100" y1="0" x2="50" y2="34.5" stroke={VINCO_ESCURO} strokeWidth="0.9" strokeOpacity="0.55" />
                <line x1="99.4" y1="0.4" x2="50" y2="34.5" stroke="rgba(250,245,234,.22)" strokeWidth="0.4" />
                {/* dobras de baixo — bolso */}
                <line x1="0" y1="75" x2="50" y2="34.5" stroke={VINCO_ESCURO} strokeWidth="0.7" strokeOpacity="0.4" />
                <line x1="100" y1="75" x2="50" y2="34.5" stroke={VINCO_ESCURO} strokeWidth="0.7" strokeOpacity="0.4" />
              </svg>

              {/* aba superior (a que abre) */}
              <motion.div
                className="absolute top-0 left-0 right-0"
                style={{ height: '46%', transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
                animate={opening ? { rotateX: -178 } : { rotateX: 0 }}
                transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    background: 'linear-gradient(200deg, #4C6B57 0%, #365343 55%, #2A4232 100%)',
                    boxShadow: 'inset 0 -12px 16px -4px rgba(10,16,12,.6)',
                  }}
                />
              </motion.div>

              {/* brilho diagonal, tipo reflexo de foto */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(115deg, transparent 40%, rgba(255,255,255,.18) 50%, transparent 60%)',
                  mixBlendMode: 'screen',
                }}
              />

              {/* textura de papel */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `url("${NOISE_URL}")`,
                  backgroundSize: '110px 110px',
                  mixBlendMode: 'overlay',
                  opacity: 0.18,
                }}
              />

              {/* selo de cera */}
              <motion.div
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center"
                animate={
                  cracking
                    ? { x: [0, -2, 2, -1.5, 1.5, 0], scale: 1, opacity: 1 }
                    : opening
                      ? { scale: 0, opacity: 0, x: 0 }
                      : { scale: 1, opacity: 1, x: 0 }
                }
                transition={cracking ? { duration: CRACK_MS / 1000 } : { duration: 0.32, ease: 'easeIn' }}
              >
                {/* cera derretida — relevo com sombra interna e externa */}
                <div
                  className="absolute inset-0"
                  style={{
                    borderRadius: '50% 46% 54% 48% / 55% 50% 48% 52%',
                    background: 'radial-gradient(circle at 35% 30%, #e2bd76, #a9822f 70%, #8f6c26 100%)',
                    boxShadow: [
                      '0 3px 6px rgba(0,0,0,.5)',
                      '0 1px 2px rgba(0,0,0,.35)',
                      'inset 0 1.5px 2px rgba(255,241,206,.6)',
                      'inset 0 -2px 3px rgba(85,60,15,.55)',
                      'inset 2px 0 3px rgba(255,241,206,.25)',
                      'inset -2px -1px 3px rgba(60,40,10,.4)',
                    ].join(', '),
                  }}
                />
                {/* gotinha de cera escorrida */}
                <div
                  className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-2.5"
                  style={{
                    borderRadius: '50% 50% 60% 60%',
                    background: '#a9822f',
                    boxShadow: 'inset 0 -1px 1.5px rgba(60,40,10,.5), inset 0 1px 1px rgba(255,241,206,.4)',
                  }}
                />
                {/* flash de luz — cera "rachando" antes de abrir */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: '50% 46% 54% 48% / 55% 50% 48% 52%',
                    background: 'radial-gradient(circle at 40% 35%, #fff7e0, rgba(255,247,224,0) 70%)',
                  }}
                  animate={{ opacity: cracking ? [0, 1, 0] : 0 }}
                  transition={{ duration: CRACK_MS / 1000, ease: 'easeOut' }}
                />
                <CaduceusSeal />
              </motion.div>
            </motion.div>

            {/* texto flutuante convidando pro clique */}
            <motion.p
              className="text-center font-corpo text-verde-medio text-xs uppercase tracking-[0.25em] mt-5"
              style={{ opacity: 0.55 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              toque para abrir
            </motion.p>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
