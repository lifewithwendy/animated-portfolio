import './services.scss'
import {animate, motion, useInView} from 'framer-motion'
import { useRef } from 'react';

function Services() {
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"})
    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            y:0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }

  return (
    <motion.div 
        className='services' 
        variants={variants} 
        initial="initial"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
        >
      <motion.div className="textContainer" variants={variants}>
        <p>
            I focus on helping you brand grow <br/>
            and move forward
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="/people.webp" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className="title">
            {/* <img src="/people.webp" alt="/people.webp" /> */}
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
            </h1>
            <button>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div 
            whileHover={{backgroundColor:"lightgrey", color:"black", scale: 1.2}} 
            className="box">
            <h2>FrontEnd</h2>
            <p>
                Using mern stack to build your website,by combining tailwind css.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div 
            whileHover={{backgroundColor:"lightgrey", color:"black", scale: 1.2}} 
            className="box">
            <h2>BackEnd</h2>
            <p>
                Using mernStack to build your product which will include Express js,and mongo db for back end servises.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div 
            whileHover={{backgroundColor:"lightgrey", color:"black", scale: 1.2}} 
            className="box">
            <h2>Full stack</h2>
            <p>
                Using MERN stack to build your complete project.
            </p>
            <button>Go</button>
        </motion.div>
        {/* <motion.div 
            whileHover={{backgroundColor:"lightgrey", color:"black", scale: 1.2}} 
            className="box">
            <h2>Branding</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse non felis nec purus ullamcorper.
            </p>
            <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  )
}

export default Services
