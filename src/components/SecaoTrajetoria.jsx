import { motion } from 'framer-motion'
import ParallaxFoto from './ParallaxFoto'
import CaminhoFormatura from './CaminhoFormatura'
import img14 from '../assets/photos/img14.jpg'
import img15 from '../assets/photos/img15.jpg'
import img16 from '../assets/photos/img16.jpg'

const CAMINHO_COR = '#FAF5EA'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function SecaoTrajetoria() {
  return (
    <section className="relative px-4 py-20 sm:py-28 max-w-md mx-auto bg-verde-suave">
      <div className="flex flex-col gap-6 items-center">
        <motion.p
          className="font-corpo text-verde-medio text-center text-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          variants={fadeUp}
        >
          O que um dia foi um sonho…
        </motion.p>

        <CaminhoFormatura color={CAMINHO_COR} from={50} to={41} />

        <ParallaxFoto
          src={img14}
          alt="Déborah no dia da matrícula"
          className="w-[82%] self-start"
          rotate={-3}
          delay={0.1}
        />

        <CaminhoFormatura color={CAMINHO_COR} from={41} to={59} />

        <ParallaxFoto src={img15} alt="Déborah de jaleco" className="w-[82%] self-end" rotate={3} delay={0.2} />

        <CaminhoFormatura color={CAMINHO_COR} from={59} to={50} />

        <motion.p
          className="font-corpo text-verde-medio text-center text-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.25}
          variants={fadeUp}
        >
          hoje está se tornando realidade.
        </motion.p>

        <CaminhoFormatura color={CAMINHO_COR} from={50} to={41} />

        <ParallaxFoto src={img16} alt="Déborah de jaleco" className="w-[82%] self-start" rotate={-2} delay={0.3} />

        <CaminhoFormatura color={CAMINHO_COR} from={41} to={50} />

        <motion.p
          className="font-display text-verde-escuro text-center text-xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.35}
          variants={fadeUp}
        >
          Graças a Deus, à espiritualidade amiga…
        </motion.p>
      </div>
    </section>
  )
}
