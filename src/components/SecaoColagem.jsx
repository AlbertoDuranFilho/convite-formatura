import { motion } from 'framer-motion'
import capa01 from '../assets/photos/capa-01.jpg'
import capa02 from '../assets/photos/capa-02.jpg'
import capa03 from '../assets/photos/capa-03.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SecaoColagem() {
  return (
    <section className="relative px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 max-w-md mx-auto">
      <div className="relative h-[430px] sm:h-[480px]">
        <motion.img
          src={capa02}
          alt=""
          className="absolute left-1/2 top-2 -translate-x-1/2 w-[62%] rounded-sm shadow-xl object-cover"
          style={{ aspectRatio: '3/4' }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.1}
          variants={fadeUp}
        />
        <motion.img
          src={capa01}
          alt="Déborah em sua formatura, segurando o diploma"
          className="absolute left-0 top-16 w-[52%] rounded-sm shadow-xl object-cover -rotate-6"
          style={{ aspectRatio: '3/4' }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.3}
          variants={fadeUp}
        />
        <motion.img
          src={capa03}
          alt="Déborah sorrindo em beca de formatura"
          className="absolute right-0 top-28 w-[52%] rounded-sm shadow-xl object-cover rotate-6"
          style={{ aspectRatio: '3/4' }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.5}
          variants={fadeUp}
        />
      </div>

      <motion.p
        className="mt-10 text-center font-display text-verde-escuro text-[1.35rem] sm:text-2xl leading-relaxed"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.15}
        variants={fadeUp}
      >
        "Finalmente esse dia está chegando….. após 6 anos de lutas, noites
        sem dormir, provas, ansiedade, conquistas e muita fé em Deus,
        este ano me tornarei médica"
      </motion.p>
    </section>
  )
}
