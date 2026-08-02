import { motion } from 'framer-motion'
import ParallaxFoto from './ParallaxFoto'
import img17 from '../assets/photos/img17.jpg'
import img18 from '../assets/photos/img18.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SecaoAgradecimento() {
  return (
    <section id="agradecimento" className="relative min-h-screen flex flex-col justify-center px-6 py-16 max-w-md mx-auto text-center">
      <motion.p
        className="font-display text-verde-escuro text-2xl mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0}
        variants={fadeUp}
      >
        …e aos meus PAItrocinadores!
      </motion.p>

      <div className="flex gap-4 justify-center mb-10">
        <ParallaxFoto
          src={img18}
          alt="Pais de Déborah"
          className="w-[46%]"
          aspect="4/3"
          rotate={-2}
          delay={0.1}
          factor={0.08}
        />
        <ParallaxFoto
          src={img17}
          alt="Pais de Déborah"
          className="w-[46%]"
          aspect="4/3"
          rotate={2}
          delay={0.2}
          factor={0.08}
        />
      </div>

      <motion.p
        className="font-script text-verde-medio text-2xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.3}
        variants={fadeUp}
      >
        Obrigada, Painho e Mainha! Amo vocês.
      </motion.p>
    </section>
  )
}
