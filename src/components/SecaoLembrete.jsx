import { motion } from "framer-motion";
import img13 from "../assets/photos/img13.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SecaoLembrete() {
  return (
    <section className="relative px-6 py-20 sm:py-28 max-w-md mx-auto text-center">
      <motion.img
        src={img13}
        alt="Foto engraçada"
        className="mx-auto w-[78%] rounded-sm shadow-xl object-cover mb-8"
        style={{ aspectRatio: "4/3", objectPosition: "center top" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        variants={fadeUp}
      />

      <motion.p
        className="font-display text-verde-escuro text-xl mb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.1}
        variants={fadeUp}
      >
        Não deixe para depois para responder o forms
      </motion.p>

      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfIvyF4y8QrCAfW45pdJLHjptSvOEo2W6-Qq3CkPe5uOi2O3w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-verde-medio px-8 py-3.5 text-bege-carta text-base tracking-wide shadow-md hover:bg-verde-escuro transition-colors"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.2}
        variants={fadeUp}
      >
        Confirmar presença
      </motion.a>

      <motion.p
        className="font-corpo text-verde-medio/70 text-sm mt-5 px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.3}
        variants={fadeUp}
      >
        Ah, e não esqueça de informar o tamanho da sandália no formulário (para
        as convidadas) 👠
      </motion.p>
    </section>
  );
}
