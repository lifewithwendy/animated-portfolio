import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function parallax({type}) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  return (
    <div 
      className='parallax'
      ref={ref}
      style={type === 'services' 
        ? {background: 'linear-gradient(180deg, #0c0c1d, #05284c)'} 
        : {background: 'linear-gradient(180deg, #0c0c1d, #fefae0)'}}
      >
      <motion.h1
        style={{x: yText}}
      >
      {type === 'services' 
        ? "What I Do?" 
        : "What I Did!"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div 
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${type === 'services' ? "/planets.png" : "/sun.png"})`
        }}
        ></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  )
}
