import hamburger from '../assets/Hamburger Menu.svg'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationAnimation } from '../utils/variantsAnimation';

const Navigation = () => {
  const element = document.documentElement
  const [isDark, setIsDark] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      'name': 'Home',
      'links':  "/"
    },
    {
      'name': 'Projects',
      'links':  "/projects"
    },
    {
      'name': 'About',
      'links': "/about"
    },
    {
      'name': 'Contact',
      'links': "/contact"
    },
  ]

  const handleCloseLinks = () => {
    setIsOpen(false)
  }

  const handleBurger = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  const handleToggleDark = () => {
    if(isDark){
      localStorage.setItem('theme', false)
      setIsDark(false)   
    } else {
      localStorage.setItem('theme', true)
      setIsDark(true)
    }
  }

  useEffect(() => {
    if(localStorage) {
      setIsDark(JSON.parse(localStorage.getItem('theme')) )
      isDark ? element.classList.add('dark') : element.classList.remove('dark')
    } else {
      localStorage.setItem('theme', false)
    }
  })

  return ( 
    <motion.div 
      variants={navigationAnimation}
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center py-6 px-4 fixed top-0 left-0 right-0 md:px-24 z-50 bg-slate-50 dark:bg-slate-950"
    >
      <div className="text-xl md:text-4xl italic font-bold">
        <a href="#">Ivan.</a>
      </div>
      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[100%]' } absolute top-0 right-0 bottom-0 bg-white h-screen py-10 px-10 w-[20em] transition-transform ease-out md:translate-x-0 md:px-0 md:w-fit md:static md:flex justify-between items-center dark:text-gray-400 dark:bg-slate-950 md:bg-transparent md:dark:bg-transparent md:h-fit md:py-0 `}>
        <nav>
          <ul className="flex flex-col md:flex-row gap-6 ">
            {
              links.map((link, index) => (
                <li 
                  key={index}
                  onClick={handleCloseLinks}  
                >
                  <NavLink to={link.links}>
                    {link.name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <label className="relative inline-flex items-center cursor-pointer mt-8 md:ml-8 md:mt-0">
          <input type="checkbox" className="sr-only peer" onClick={handleToggleDark} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900 dark:bg-slate-800"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {
              isDark 
              ?<svg className="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              : <svg className="h-5 w-5 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg>
            }
          </span>
        </label>
      </div>
      <button onClick={handleBurger} className='md:hidden bg-gray-100 rounded-md p-2 z-10'>
        <img src={hamburger} alt="" className='w-4'/>
      </button>
    </motion.div>
  );
}
 
export default Navigation;