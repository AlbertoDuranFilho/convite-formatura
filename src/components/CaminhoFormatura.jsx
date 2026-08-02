import { motion } from "framer-motion";

function Capelo({ size, color, rotate }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 18"
      fill={color}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M12 0L0 6l12 6 10-5v6h2V6z" />
    </svg>
  );
}

const steps = [
  { size: 16, t: 0.12 },
  { size: 21, t: 0.5 },
  { size: 26, t: 0.88 },
];

export default function CaminhoFormatura({ color, from = 50, to = 50 }) {
  return (
    <motion.div
      className="relative w-full h-24"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
    >
      {steps.map((s, i) => {
        const left = from + (to - from) * s.t;
        const top = s.t * 100;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: s.size * 1.5,
              height: s.size * 1.5,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="absolute top-0 left-0">
              <Capelo size={s.size} color={color} rotate={-12} />
            </div>
            <div className="absolute" style={{ top: s.size * 0.55, left: s.size * 0.5 }}>
              <Capelo size={s.size} color={color} rotate={12} />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
