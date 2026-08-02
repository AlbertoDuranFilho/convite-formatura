import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ParallaxFoto({
  src,
  alt,
  className = '',
  rotate = 0,
  delay = 0,
  aspect = '3/4',
  factor = 0.18,
  objectPosition = 'center',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${factor * 100}%`, `${factor * 100}%`])

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-sm shadow-xl ${className}`}
      style={{ aspectRatio: aspect, rotate: `${rotate}deg` }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
      variants={fadeUp}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          position: 'absolute',
          top: '-15%',
          left: 0,
          width: '100%',
          height: '130%',
          objectFit: 'cover',
          objectPosition,
        }}
      />
    </motion.div>
  )
}
