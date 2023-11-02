import gitHubIcon from '../assets/programming icons/github.png'
import linkedinIcon from '../assets/programming icons/linkedin.png'
import phoneIcon from '../assets/bxs-phone.svg'
import emailIcon from '../assets/bxs-envelope.svg'
import addressIcon from '../assets/bxs-edit-location.svg'
import { motion } from 'framer-motion';
import { fadedBounceAnimation } from '../utils/variantsAnimation';
import { useRef, useState } from 'react'


const Contact = () => {
  const [hasSent, setHasSent] = useState(false)
  const [formData, setFormData] = useState()

  const getInputs = (value, name) => {
    setFormData({...formData, [name]: value })
  }

  const handleForm = (e) => {
    e.preventDefault()
    setHasSent(true)
    setTimeout(() => {
      setHasSent(false)
    }, 5000)
  }

  return ( 
    <motion.div 
      variants={fadedBounceAnimation}
      initial="hidden"
      animate="visible"
      className="py-28"
    >
      <div 
        className={` ${hasSent ? 'translate-x-0' : 'translate-x-[100vw]'} fixed bottom-10 right-10 bg-white text-black p-4 rounded-md transition-transform`}>
        <p>Message Sent!</p>
      </div>

      <div className='mb-8'>
         <h1 className="text-3xl md:text-5xl font-bold">I'm One Call Away!  </h1>
         <p className="md:w-[50ch] mt-4">Lets Connect: Get in Touch</p>
      </div>
      <div className="flex flex-col md:flex-row md:w-[900px] mx-auto">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white p-8  rounded-s-md md:basis-[40%]">
          <p className='text-3xl md:text-4xl font-bold mb-10'>
            I'll be glad to here something from you!
          </p>
          <address className='mb-10'>
            <ul>
              <li className='flex gap-2 mb-4'>
                <img className='invert' src={addressIcon} alt="" srcSet="" />
                Brgy Pilar San Antonio Northern Samar Philippines
              </li>
              <li className='flex gap-2 mb-4 w-5'>
                <img className='invert' src={emailIcon} alt="" srcSet="" />
                <a href="mailto:ivanray.n.castillo@gmail.com">
                  ivanray.n.castillo@gmail.com
                </a>
              </li>
              <li className='flex gap-2 mb-4'>
                <img className='invert' src={phoneIcon} alt="" srcSet="" />
                09755144526
              </li>
            </ul>
          </address>
          <ul className='flex gap-2'>
          <li>
              <a href="https://github.com/Aybann" target="_blank">
                <img className='w-8' src={gitHubIcon} alt="" srcset="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ivan-ray-castillo-271174290" target="_blank">
                <img className='w-8' src={linkedinIcon} alt="" srcset="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-8 md:basis-[60%]">
          <form 
            onSubmit={handleForm}
            className='flex flex-col gap-2 dark:text-black'
          >
            <input 
              onChange={e => getInputs(e.target.value, e.target.name)}
              type="text" name="name" required placeholder='Name' className=' rounded-md' 
            />
            <input
             onChange={e => getInputs(e.target.value, e.target.name)} 
             type="email" name="email" required placeholder='Email' className=' rounded-md' 
            />
            <textarea onChange={e => getInputs(e.target.value, e.target.name)} name="message" id="" cols="30" rows="10" required resize="false" placeholder="Message" className='rounded-md'></textarea>
            <div>
              <button 
                type='submit'
                className="primary-button">Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
 
export default Contact;