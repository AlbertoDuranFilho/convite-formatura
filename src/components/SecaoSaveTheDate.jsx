import { motion } from "framer-motion";
import img06 from "../assets/photos/img06.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SecaoSaveTheDate() {
  return (
    <section
      id="save-the-date"
      className="relative px-6 py-20 sm:py-28 max-w-md mx-auto text-center"
    >
      <motion.p
        className="uppercase tracking-[0.3em] text-verde-medio text-lg mb-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0}
        variants={fadeUp}
      >
        Save the date
      </motion.p>

      <motion.p
        className="uppercase tracking-[0.3em] text-tinta text-xs mb-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0}
        variants={fadeUp}
      >
        Baile de formatura
      </motion.p>

      <motion.div
        className="font-display font-semibold leading-none mb-8"
        style={{ fontSize: "clamp(3.2rem, 18vw, 5rem)" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.1}
        variants={fadeUp}
      >
        <span className="text-tinta">15</span>{" "}
        <span className="text-verde-medio">/</span>{" "}
        <span className="text-verde-medio">12</span>{" "}
        <span className="text-verde-medio">/</span>{" "}
        <span className="text-tinta">26</span>
      </motion.div>

      <motion.img
        src={img06}
        alt="Déborah de jaleco, de lado"
        className="mx-auto w-[74%] rounded-sm shadow-xl object-cover mb-8"
        style={{ aspectRatio: "3/4" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.2}
        variants={fadeUp}
      />

      <motion.div
        className="font-corpo text-tinta text-lg space-y-1 mb-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.25}
        variants={fadeUp}
      >
        <p>Local: Paços dos Leões</p>
        <p>Horário: 22:00</p>
      </motion.div>

      <motion.p
        className="font-script text-verde-medio text-2xl mb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.3}
        variants={fadeUp}
      >
        Você é meu convidado especial para esse momento!
      </motion.p>
      {/* 
      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfIvyF4y8QrCAfW45pdJLHjptSvOEo2W6-Qq3CkPe5uOi2O3w/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full border border-verde-medio px-7 py-3 text-verde-escuro text-base tracking-wide hover:bg-verde-medio hover:text-bege-carta transition-colors"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.35}
        variants={fadeUp}
      >
        Confirmar presença
      </motion.a> */}
    </section>
  );
}
