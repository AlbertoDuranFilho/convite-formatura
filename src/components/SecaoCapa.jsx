import { motion } from "framer-motion";
import img01 from "../assets/photos/img01.jpg";
import img02 from "../assets/photos/img02.jpg";
import img03 from "../assets/photos/img03.jpg";
import img04 from "../assets/photos/img04.jpg";
import img05 from "../assets/photos/img05.jpg";
import CaminhoFormatura from "./CaminhoFormatura";
import ParallaxFoto from "./ParallaxFoto";

const CAMINHO_COR = "#E4EAE0";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SecaoCapa() {
  return (
    <section className="relative px-4 pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-md mx-auto">
      <motion.h1
        className="text-center font-display text-verde-escuro text-2xl sm:text-3xl mb-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0}
        variants={fadeUp}
      >
        Finalmente esse dia está chegando!
      </motion.h1>

      <div className="flex flex-col gap-6">
        <ParallaxFoto
          src={img01}
          alt="Déborah de jaleco"
          className="w-[82%] self-start"
          rotate={-3}
          delay={0.05}
          objectPosition="center top"
        />

        <CaminhoFormatura color={CAMINHO_COR} from={41} to={50} />

        <motion.p
          className="font-corpo text-verde-medio text-center text-lg px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.1}
          variants={fadeUp}
        >
          Após 6 anos de dedicação, noites sem dormir…
        </motion.p>

        <CaminhoFormatura color={CAMINHO_COR} from={50} to={59} />

        <ParallaxFoto
          src={img03}
          alt="Déborah de jaleco"
          className="w-[82%] self-end"
          rotate={3}
          delay={0.15}
        />

        <CaminhoFormatura color={CAMINHO_COR} from={59} to={50} />

        <motion.p
          className="font-corpo text-verde-medio text-center text-lg px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.2}
          variants={fadeUp}
        >
          provas, ansiedade, conquistas…
        </motion.p>

        <CaminhoFormatura color={CAMINHO_COR} from={50} to={41} />

        <ParallaxFoto
          src={img04}
          alt="Déborah"
          className="w-[82%] self-start"
          rotate={2}
          delay={0.35}
          aspect="4/3"
        />

        <CaminhoFormatura color={CAMINHO_COR} from={41} to={50} />

        <motion.p
          className="font-corpo text-verde-medio text-center text-lg px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.3}
          variants={fadeUp}
        >
          e muita fé em Deus!
        </motion.p>

        <CaminhoFormatura color={CAMINHO_COR} from={50} to={59} />

        <ParallaxFoto
          src={img02}
          alt="Déborah de jaleco"
          className="w-[82%] self-end"
          rotate={-2}
          delay={0.25}
        />

        <CaminhoFormatura color={CAMINHO_COR} from={59} to={41} />

        <ParallaxFoto
          src={img05}
          alt="Déborah de jaleco"
          className="w-[82%] self-start"
          rotate={-3}
          delay={0.4}
        />

        <CaminhoFormatura color={CAMINHO_COR} from={41} to={50} />

        <motion.p
          className="font-display text-verde-escuro text-center text-2xl px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0.45}
          variants={fadeUp}
        >
          Este ano me tornarei médica!
        </motion.p>
      </div>
    </section>
  );
}
