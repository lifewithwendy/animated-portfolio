import './cursor.scss'
import React, { useState,useEffect } from 'react'
import {motion} from 'framer-motion'

export default function Cursor() {
  const [position, setPosition] = useState({x:0,y:0});
  useEffect(() => {
    const mouseMove = (e) => {
        setPosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener('mousemove', mouseMove)
    // console.log(position)
    return () => {
        window.removeEventListener('mousemove', mouseMove)
    }
  },[])
    return (
    <motion.div className='cursor' animate={{x:position.x+10, y: position.y+10}}>
      
    </motion.div>
  )
}
