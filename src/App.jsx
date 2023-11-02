import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "../src/components/Navigation";
import Footer from '../src/components/Footer';
import Loader from './components/Loader'
import {  AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useState } from "react"
const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))

//Programming Icons
import htmlIcon from '../src/assets/programming icons/html-5.png'
import cssIcon from '../src/assets/programming icons/css-3.png'
import jsIcon from '../src/assets/programming icons/js.png'
import reactIcon from '../src/assets/programming icons/reactjs.png'
import tailwindIcon from '../src/assets/programming icons/tailwindcss.svg'
import nodeIcon from '../src/assets/programming icons/node-js.png'
import gitIcon from '../src/assets/programming icons/git.png'
import bootstrapIcon from '../src/assets/programming icons/bootstrap.png'
import prismaIcon from '../src/assets/programming icons/prisma.png'
import mongodbIcon from '../src/assets/programming icons/mongodb.png'
import typescriptIcon from '../src/assets/programming icons/typescript.png'
import reduxIcon from '../src/assets/programming icons/redux.png'
import zustandIcon from '../src/assets/programming icons/zustand.jpg'
import firebaseIcon from '../src/assets/programming icons/firebase.png'

//Projects Image
import countryAppImg from '../src/assets/projects-preview/country-preview.jpg'
import loopLandingPageImg from '../src/assets/projects-preview/loop-desktop-preview.jpg'
import weatherAppImg from '../src/assets/projects-preview/weather app.png'
import dictionaryImg from '../src/assets/projects-preview/dictionary-app.jpg'
import yelpcampImg from '../src/assets/projects-preview/yelpcamp.jpeg'
import newsLandingPageImg from '../src/assets/projects-preview/news-desktop-preview.jpg'
import Chirp_LandingImg from '../src/assets/projects-preview/Chirp_Landing.jpg'
import time_starterImg from '../src/assets/projects-preview/time_starter.png'
import ageCalculatorImg from '../src/assets/projects-preview/age-calculator-preview.jpg'
import passwordImg from '../src/assets/projects-preview/password generator.jpg'
import ecommerce from '../src/assets/projects-preview/ecommerce.webp'
import gamewiki from '../src/assets/projects-preview/game-wiki.jpg'


import dxLogo from '../src/assets/dx.jpg'
import qonvexLogo from '../src/assets/qonvex.jpg'
import dxSeminar from '../src/assets/seminar.jpg'
import dxBootCamp from '../src/assets/bootcamp.jpg'
import qonvexCamp from '../src/assets/Qonvex Bootcamp.jpg'
import qonvexIntern from '../src/assets/Qonvex intern.jpg'


function App() {
  const projects = [
    {
      title: "eCommerce Landing Page",
      description: "Welcome to my eCommerce website, where creativity and commerce meet. Explore a curated collection of unique, using the fakeapi store, I created a simple working frontend eCommerce website",
      techStack: [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon, firebaseIcon],
      image: ecommerce,
      demo: 'https://trendsshop.netlify.app/',
      code: 'https://github.com/Aybann/e-commerce-main'
    },
    {
      title: "Game Wikipedia",
      description: "Welcome to our game dictionary website, where gaming enthusiasts and novices alike can explore an extensive collection of gaming terminology, tips, and insights. With a sleek and intuitive design built using HTML, CSS, JavaScript, React, and Tailwind CSS, we've created a user-friendly platform that simplifies the complex jargon of the gaming world.",
      techStack: [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon],
      image: gamewiki,
      demo: 'https://gamewikis.netlify.app/',
      code: 'https://github.com/Aybann/game-wiki-main'
    },
    {
      title: "Yelpcamp",
      description: "Introducing Yelpcamp, where nature enthusiasts can discover and share their favorite outdoor getaways. Explore real camper insights, find hidden gems, and plan your next adventure with ease. Join our community of outdoor explorers and make every camping trip unforgettable.",
      techStack: [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon, firebaseIcon],
      image: yelpcampImg,
      demo: 'https://yellpcampp.netlify.app/',
      code: 'https://github.com/Aybann/codeWell-YelpCamp'
    },
    {
      title: "Time Starter Landing Page",
      description: "A 2-page Landing page, perfect to showcase how I make amazing custom components and flex layouts.",
      techStack: [htmlIcon, cssIcon, jsIcon],
      image: time_starterImg,
      demo: 'https://timenoww.netlify.app/',
      code: 'https://github.com/Aybann/codeWell-TimeNow-landing-page'
    },
    {
      title: "Chirp Landing Page",
      description: "Perfect Showcase my skills on layouts, flex/grid and scrollable components.",
      techStack: [htmlIcon, cssIcon, jsIcon],
      image: Chirp_LandingImg,
      demo: 'https://chirrpp.netlify.app/',
      code: 'https://github.com/Aybann/codeWell-Chirp-landing-page'
    },
    {
      title: "Dictionary App",
      description: "Discover the power of words with our Simple Dictionary App. Whether you're a student, a writer, or just curious about language, this app is your go-to resource. Access definitions, synonyms, antonyms, and more, all at your fingertips.",
      techStack: [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon],
      image: dictionaryImg,
      demo: 'https://wordwiser.netlify.app/',
      code: 'https://github.com/Aybann/dictionary-app'
    },
    {
      title: "Country Dictionary App",
      description: "Explore the world with my Country Dictionary App. Discover fascinating facts, culture, and essential information about every country on the planet.",
      techStack: [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon, ],
      image: countryAppImg,
      demo: 'https://worldlywords.netlify.app/',
      code: 'https://github.com/Aybann/fem-rest-countries-api-with-color-theme-switcher-master'
    },
    {
      title: "Weather App",
      description: "Stay ahead of the forecast with our Weather App. Get real-time updates on weather conditions, forecasts, and more. From sunny days to stormy nights, our app keeps you informed and prepared. ",
      techStack: [htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon],
      image: weatherAppImg,
      demo: 'https://weatherwiser.netlify.app/',
      code: 'https://github.com/Aybann/weather-app'
    },
     {
      title: "Loop Landing Page",
      description: "This Landing Page is perfect to showcase how good I'm CSS Grid chops, Hover, Design, and Responsiveness",
      techStack: [htmlIcon, cssIcon, jsIcon],
      image: loopLandingPageImg,
      demo: 'https://looppstudioss.netlify.app/',
      code: 'https://github.com/Aybann/fem-loopstudios-landing-page-main'
    },
    {
      title: "News Homepage",
      description: " A Front-end challenge that is excellent showcase my CSS Grid  and Flexbox skills. Theres a lots of tricky decisions I make and I learned plenty of opportunities!",
      techStack: [htmlIcon, cssIcon, jsIcon],
      image: newsLandingPageImg,
      demo: 'https://alertednews.netlify.app/',
      code: 'https://github.com/Aybann/fem-news-homepage-main'
    },
    {
      title: "Password Generator App",
      description: "Introducing our Password Generator: Your key to online security. Create strong, unbreakable passwords effortlessly. Safeguard your accounts with unique combinations of characters, numbers, and symbols. Protect your digital world with confidence, one password at a time.",
      techStack: [htmlIcon, cssIcon, jsIcon],
      image: passwordImg,
      demo: 'https://passwordherogen.netlify.app/',
      code: 'https://github.com/Aybann/password-generator-main-page'
    },
    {
      title: "Age Calculator App",
      description: "This challenge  sharpen my JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
      techStack: [htmlIcon, cssIcon, jsIcon],
      image: ageCalculatorImg,
      demo: 'https://agecalculatorrs.netlify.app/',
      code: 'https://github.com/Aybann/fem-age-calculator-app-main'
    },
  ]
  const skills = [
    {
      icon: htmlIcon,
      name: 'HTML'
    },
    {
      icon: cssIcon,
      name: 'CSS'
    },
    {
      icon: jsIcon,
      name: 'JavaScript'
    },
    {
      icon: tailwindIcon,
      name: 'Tailwind'
    },
    {
      icon: bootstrapIcon,
      name: 'Bootstrap'
    },
    {
      icon: reactIcon,
      name: 'React Js'
    },
    {
      icon: reduxIcon,
      name: 'Redux'
    },
    {
      icon: nodeIcon,
      name: 'Node Js'
    },
    {
      icon: prismaIcon,
      name: 'Prisma'
    },
    {
      icon: typescriptIcon,
      name: 'TypeScript'
    },
    {
      icon: zustandIcon,
      name: 'Zustand'
    },
    {
      icon: firebaseIcon,
      name: 'firebase'
    },
    {
      icon: gitIcon,
      name: 'Git'
    }
  ]
  const experiences = [
    {
      position: "Full Stack Web Developer Bootcamp",
      company: 'Digital Transformation',
      companyLogo: dxLogo,
      date: 'July 8, 2023 - August 26, 2023',
      description: "My participation in the DX Coding Bootcamp '23 has been a transformative experience. I've emerged with the skills, confidence, and knowledge needed to embark on a career as a job-ready web developer. This journey has equipped me to tackle real-world challenges in the dynamic field of web development.The DX Coding Bootcamp '23 was a stepping stone toward my goal of becoming a proficient web developer.",
      img: dxBootCamp
    },
    {
      position: "Intro to Web Developer Camp",
      company: 'Digital Transformation',
      companyLogo: dxLogo,
      date: 'November 25, 2022 - November 26, 2022',
      description: "DX CAMP 22 has been an enriching introduction to the world of web development. The camp provided me with the tools, knowledge, and hands-on experience to embark on my web development journey. From HTML to React.js and a strong focus on UI/UX design, I am now equipped to create captivating and functional web applications. This camp has not only broadened my horizons in web development but also instilled in me a passion for creating exceptional user experiences.",
      img: dxSeminar
    },
    {
      position: "Website Developer Intern",
      company: 'Qonvex Technology Inc.',
      companyLogo: qonvexLogo,
      date: 'June 22, 2022 - August 4, 2022',
      description: "My internship at Qonvex Technology Inc. was a pivotal step in my journey as a full stack web developer. Building the gym membership system with Vue.js and PHP Laravel provided me with hands-on experience. The exposure to real-world problem-solving and the guidance of experienced mentors were invaluable, helping me bridge the gap between academia and professional development. This internship not only expanded my technical proficiency but also instilled in me the importance of adaptability and collaboration in the ever-evolving tech industry.",
      img: qonvexIntern
    },
    {
      position: "Web & Mobile Development Bootcamp",
      company: 'Qonvex Technology Inc.',
      companyLogo: qonvexLogo,
      date: 'June 13, 2022 - July 29, 2022',
      description: "The Qonvex Technology Inc. bootcamp was a transformative experience that has equipped me with the skills and confidence to pursue a career in web development. With a solid foundation in HTML, CSS, JavaScript, Bootstrap, Vue, PHP, Laravel, and Git, I am ready to tackle real-world projects and challenges in the ever-evolving field of web development. This bootcamp has not only expanded my technical repertoire but also nurtured my passion for creating innovative web solutions.",
       img: qonvexCamp
    }
  ]

  

  return (
    <AnimatePresence>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <div className="bg-slate-50 overflow-x-hidden dark:bg-slate-950 dark:text-white">
            <Navigation />
            <div className="px-6 max-w-[1200px] mx-auto ">       
              <Routes>
                <Route 
                path='/' 
                element={
                  <Home 
                    projects={projects.slice(0,6)} 
                    skills={skills} 
                    experiences={experiences} 
                  />}
                />
                <Route path='/projects' element={<Projects projects={projects} />}/>
                <Route path='/about' element={<About skills={skills} experiences={experiences}/>}/>
                <Route path='/contact' element={<Contact />}/>
              </Routes>
            </div>
            <Footer />
          </div>
        </Suspense>
      </BrowserRouter>
    </AnimatePresence>
  )
}

export default App
