import { delay, stagger } from "framer-motion"
import "./hero.scss"
import {motion} from "framer-motion"
const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x:0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,    
            }
        },
        ScrollButton: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 2,
                repeat: Infinity,
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x:"-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,    
            }
        },
    }
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
                className="textContainer" 
                variants={textVariants}
                initial="initial"
                animate="animate"
                >
                <motion.h2 variants={textVariants}>WENDT EDMUND</motion.h2>
                <motion.h1 variants={textVariants}>Undergraduate of University Of Colombo</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>Download CV</motion.button>
                    <a href="#Contact" >
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                    </a>
                </motion.div>
                <motion.img variants={textVariants} animate="ScrollButton" src="/scroll.png" alt="" />
            </motion.div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Wendt Vern Edmund
                {/* <span></span> */}
            </motion.div>
            <div className="imageContainer">
                <img src="/myHero.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
