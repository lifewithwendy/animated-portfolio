import { stagger } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
const variants = {
  open: { 
    transition:{
      staggerChildren: 0.1,
    }
    },
  closed: { 
    transition:{
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
    },
}
const itemVariants = {
  open: { 
    y: 0,
    opacity: 1,
    },
  closed: { 
    y: 50,
    opacity: 0,
    },
}
function Links() {
  const items = ['HomePage', 'Services', 'PortFolio', 'Contact', 'About']
  
  return (
    <motion.div 
      className='links'
      variants={variants} // Corrected here
      >
      {items.map((item, index) => (
          <motion.a 
            href={`#${item}`} 
            key={index} 
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            >{item}</motion.a> // And here
      ))}
    </motion.div>
  )
}

export default Links
