import { useState, useRef } from 'react'
import './contact.scss'
import {motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser';


export default function contacts() {
  const ref =useRef();
  const isInView = useInView(ref,{margin:'-100px'});
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ptpafwa', 'template_vo4wzth', formRef.current, {
        publicKey: 'wrvl4aNhXR-b4YgjG',
      })
      .then(
        (result) => {
          console.log('SUCCESS!');
          setSuccess(result.text);

        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(error.text);
        },
      );
    e.target.reset();
  };

  const variants ={
    initial:{
      y:500,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.3
      }
    }
  }
  return (
    <motion.div 
      ref={ref}
      variants={variants} 
      initial="initial" 
      animate="animate" 
      className='contact'>
      <motion.div variants={variants} className="textContainer">
        <motion.h1>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants} >
          <h2>Phone</h2>
          <span> +94762213874 <br /></span>
          <span> +94762213874 </span>
        </motion.div>
        <motion.div className="item" variants={variants} >
          <h2>Email</h2>
          <span>wvedmund@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants} >
          <h2>Address</h2>
          <span>66/2,<br/>Wheedhi M.V,<br/>Kandana,<br/>Sri Lanka.<br/>11320</span>
        </motion.div>
      </motion.div>

      <motion.div  className="formContainer">
        <motion.div 
          className="phoneSVG"
          initial={{opacity:1}}
          whileInView={{opacity:0}}
          transition={{delay:3,duration:2}}
          >
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
            initial={{pathLength:0,}} 
            animate={isInView && {pathLength:1,}}
            transition={{delay:0.3,duration:4}}
              d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94" 
              stroke="orange" 
              strokeWidth="0.75" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:4,duration:1}}
          >
          <input type="text" required placeholder='Name' name="name" />
          <input type="email" required placeholder='Email' name="email" />
          <textarea rows={8} placeholder='Message' name="message" />
          <button type='submit'>Submit</button>
          {error && <motion.span initial={{y:100,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1}}}>Something went wrong!</motion.span>}
          {success && <motion.span initial={{y:100,opacity:0}} animate={{y:0,opacity:1,transition:{duration:1}}}>Thanks for your message!</motion.span>}
        </motion.form>
        
      </motion.div>
    </motion.div>
  )
}
