import React from 'react'
import "./navbar.scss";
import Sidebar from '../sidebar/SideBar.jsx';
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        >Wendy</motion.span>
        <div className="social">
            <a href="https://www.facebook.com/share/iYtKjucUnUMqfabx/?mibextid=qi2Omg"><img src='/facebook.png' /></a>
            <a href="https://www.instagram.com/lifewithwendt/?igsh=MTZvaGoxOHFjeDhlZA%3D%3D"><img src='/instagram.png' /></a>
            <a href="https://www.linkedin.com/in/wendt-edmund-636066264"><img src='/LinkedIn.png' /></a>
            <a href="https://github.com/lifewithwendy"><img src='/githubr.png' /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
