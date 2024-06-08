import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { useState } from "react";
import { delay, motion } from "framer-motion";

const variants = {
  open: { 
    clipPath: "circle(1200px  at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 15,
    }
  },
  closed: { 
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  },
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div 
      animate={open ? "open" : "closed"}
      className="sidebar">
      <motion.div 
        variants={variants} // And here
        className="bg">
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}
export default Sidebar
