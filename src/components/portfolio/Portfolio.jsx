import './portfolio.scss'
import {motion ,useScroll, useSpring, useTransform} from 'framer-motion'
import { useRef } from 'react';

const Single = ({item}) =>{
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,       
        // offset: ["start start","end start"]
    });
    const y = useTransform(scrollYProgress,
        [0,1],
        [-300,300]
    )	;
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.image} />
                    </div>

                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target='_blank'>
                            <motion.button whileHover={{scale: 1.2}}>View</motion.button>
                        </a>
                    </motion.div> 
                </div>
            </div>
        </section>
    )
}
function Portfolio() {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end","start start"]        
    });
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })
    const items = [
       {
        id:1,
        title: "Portfolios",
        link: "http://localhost:5173/#HomePage",
        image:"https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This portfolio was made as a project to learn framer motion package to use animations on website which can be make user friendly."
       },
       {
        id:2,
        title: "wendy's Blog",
        link: "https://rad-t4if.onrender.com ",
        image:"https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "This project is the starter project which i did to learn React using tailwind CSS.This use rest API's to get data from the back end.Thsi project covers a large scope in web development."
       },
       {
        id:3,
        title: "SpotOut",
        link: "#",
        image:"https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse non felis nec purus ullamcorper."
       },
       {
        id:4,
        title: "Music App",
        link: "#",
        image:"https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse non felis nec purus ullamcorper."
       } 
    ]
    
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Feature Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => 
            <Single item={item} key={item.id} />
        )}
    </div>
  )
}



export default Portfolio
