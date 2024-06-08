import React,{useState} from 'react'
import { motion } from 'framer-motion'
function Test() {
    const [open , setOpen] = useState(false)

    const variants = {
        visible: (i) => ({ 
            opacity: 1, 
            x:100, 
            transition:{ delay: i* 1} }),
        hidden: { opacity: 0 },
    }
    const items = [
        "item1", "item2", "item3","item4","item5"
    ]
  return (
    <div className='course'>
      <motion.ul
        // className="box"
        variants={variants}
        initial="hidden"
        animate="visible"
        // drag
        // animate={open ? "visible" : "hidden"}
        >
        {items.map((item, index) => (
          <motion.li key={index} variants={variants} custom={index}>
            {item}
          </motion.li>
        ))}
      </motion.ul>

    </div>
  )
}

export default Test
