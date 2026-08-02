import { motion } from "framer-motion";
import img07 from "../assets/photos/img07.jpg";
import img08 from "../assets/photos/img08.jpg";
import img09 from "../assets/photos/img09.jpeg";
import img10 from "../assets/photos/img10.jpeg";
import img11 from "../assets/photos/img11.jpeg";
import img12 from "../assets/photos/img12.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const pop = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SecaoEngracada() {
  return (
    <section className="relative px-6 py-20 sm:py-28 max-w-md mx-auto bg-verde-suave">
      <motion.p
        className="font-display text-verde-escuro text-center text-2xl mb-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        custom={0}
        variants={fadeUp}
      >
        Esta formanda que vos fala é muito organizada e metódica — como vocês
        bem conhecem!
      </motion.p>

      <motion.p
        className="font-corpo text-tinta text-center text-sm leading-relaxed mb-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        custom={0.05}
        variants={fadeUp}
      >
        Preciso da sua confirmação!
      </motion.p>

      <motion.p
        className="font-display text-verde-escuro text-center text-xl mb-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.1}
        variants={fadeUp}
      >
        Devido à mudança de local da festa, as vagas são{" "}
        <span className="text-verde-escuro font-bold">LIMITADÍSSIMAS!</span>
      </motion.p>

      <motion.p
        className="font-corpo text-verde-medio/80 text-center text-base tracking-wide mb-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        custom={0.15}
        variants={fadeUp}
      >
        Prazo de resposta: 31/08/26
      </motion.p>

      <div className="relative h-[520px] sm:h-[560px]">
        <motion.img
          src={img07}
          alt=""
          className="absolute left-0 top-0 z-0 w-[46%] rounded-sm shadow-lg object-cover -rotate-6"
          style={{ aspectRatio: "3/4" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.05}
          variants={pop}
        />
        <motion.img
          src={img08}
          alt=""
          className="absolute right-0 top-6 z-10 w-[50%] rounded-sm shadow-lg object-cover rotate-4"
          style={{ aspectRatio: "3/4" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.15}
          variants={pop}
        />
        <motion.img
          src={img09}
          alt=""
          className="absolute left-2 top-[38%] z-20 w-[54%] rounded-sm shadow-lg object-cover -rotate-2"
          style={{ aspectRatio: "4/3" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.25}
          variants={pop}
        />
        <motion.img
          src={img10}
          alt=""
          className="absolute right-1 top-[46%] z-30 w-[44%] rounded-sm shadow-lg object-cover rotate-3"
          style={{ aspectRatio: "3/4", objectPosition: "center top" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.35}
          variants={pop}
        />
        <motion.img
          src={img11}
          alt=""
          className="absolute left-4 bottom-0 z-40 w-[46%] rounded-sm shadow-lg object-cover rotate-2"
          style={{ aspectRatio: "3/4" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.45}
          variants={pop}
        />
        <motion.img
          src={img12}
          alt=""
          className="absolute right-0 bottom-2 z-50 w-[48%] rounded-sm shadow-lg object-cover -rotate-3"
          style={{ aspectRatio: "4/3" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.55}
          variants={pop}
        />
      </div>
    </section>
  );
}
