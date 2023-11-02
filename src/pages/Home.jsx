import resume  from '../assets/Ivan Ray N. Castillo- resume.pdf'
import Cards from '../components/Cards';
import { NavLink } from 'react-router-dom';
import profile from '../assets/profile-2.png'
import bgImage from '../assets/pattern-bg.svg'
import profileImage from '../assets/about-profile.jpg'
import { motion } from 'framer-motion';
import { staggerAnimation, fadedBounceAnimation, headerIntro } from '../utils/variantsAnimation';

const Home = ({projects, skills, experiences}) => {

  return ( 
    <section>
      <motion.header
        variants={headerIntro}
        initial="hidden"
        animate="visible"      
        className="py-16 flex flex-col-reverse justify-between items-center lg:flex-row mt-7"
      >
        <div className='flex-1 z-10'>
          <p className='text-gray-600 italic dark:text-gray-400'>
            Ivan, A Frontend Developer
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className='bg-gradient-to-r from-violet-500 to-purple-500 inline-block py-2 text-transparent bg-clip-text'>Transforming</span> Ideas Into<br /> Seamless User Experiences
          </h1>
          <p className="py-6 text-gray-600 md:w-[60ch] dark:text-gray-400">
            I Strive to design captivating user experiences that seamlessly blend artistry and technology line by line.
          </p>
          <div className='flex gap-4' >
            <NavLink to="/projects" className="primary-button">
              Projects
            </NavLink>
            <NavLink to="/about" className="secondary-button">
              About Me
            </NavLink>
          </div>
        </div>
        <div 
          className='flex-1 bg-no-repeat bg-contain py-20 '
          style={{
            backgroundImage : `url(${bgImage})`
          }}
        >
          <img loading='lazy' src={profile} className='w-[70%] mx-auto overflow-' alt="" />
        </div>
      </motion.header>
      <main>
        <section className="my-8">
          <header>
            <motion.h2 
              variants={fadedBounceAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              className='text-2xl md:text-4xl font-bold'
            >
              Featured Projects
            </motion.h2>
          </header>
          <div className="py-4">
            <div className="grid gap-8">
              {
                projects.map((project, index) => (
                  <motion.div
                    variants={staggerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true
                    }}
                    custom={index}
                    key={index}
                  >
                    <Cards 
                      project={project}                       
                      />
                  </motion.div>
                ))
              }
            </div>
          </div>
          <div className='flex justify-center my-8'>
            <NavLink className="flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-violet-500 to-purple-500 text-transparent bg-clip-text" to="/projects">
              Amazing right? Explore more
              <svg className="h-6 w-6 text-purple-800"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 16 16 12 12 8" />  <line x1="8" y1="12" x2="16" y2="12" /></svg>
            </NavLink>
          </div>
        </section>
        <section className="my-8">
          <motion.div 
            variants={fadedBounceAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className='my-8'
          >
            <h2 className='text-2xl md:text-4xl font-bold'>About Me</h2>
          </motion.div>
          <motion.div
            variants={fadedBounceAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
          >
            <div className="md:py-36 relative flex flex-col lg:flex-row">
              <div className='h-fit md:w-[75ch] bg-gradient-to-r from-violet-500 to-purple-500 shadow-md p-8 rounded-md z-20'>
                <h2 className="text-3xl md:text-5xl font-bold text-white">A front-end developer. designing the web, breathing life into pixels</h2>
                <p className="py-8 text-gray-200 md:w-[60ch]">
                  I quickly developed a knack for transforming design concepts into functional and aesthetically pleasing websites, constantly striving to deliver an exceptional user experience.
                </p>
                <div className='flex gap-4'>
                  <a 
                    href={resume} 
                    target='_blank'
                    download='ivan-resume-pdf' 
                    className="secondary-button"
                  >
                    <button>Resume</button>
                  </a>
                </div>
              </div>
              <div className='border-2 border-black rounded-md mt-10 ml-6 md:ml-0 md:mt-0 md:absolute top-0 right-0 z-10 dark:border-white'>
                <img loading='lazy' className='-translate-y-5 -translate-x-5 w-auto md:w-[600px] rounded-md' src={profileImage} alt="" />
              </div>
            </div>
          </motion.div>
          <div className='mb-10'>
            <ul className='flex justify-center flex-wrap py-8 gap-4 max-w-[480px] mx-auto'>
              {
                skills.map((skill, index) => (
                  <motion.li 
                    variants={staggerAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true
                    }}
                    custom={index}
                    key={index} 
                    className='flex justify-center gap-2 border border-gray-200 rounded-sm p-2 bg-white shadow-sm dark:text-black'
                  >
                    {
                      (index % 2) === 0
                      ? <img loading='lazy'  className='w-6' src={skill.icon} alt="" srcSet="" />
                      : <img loading='lazy' className='w-6' src={skill.icon} alt="" srcSet="" />
                    }
                    <span className='font-semibold'>{skill.name}</span>
                  </motion.li>
                ))
              }
            </ul>
          </div>
          <motion.div 
            variants={fadedBounceAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className='my-8'
          >
            <h3 className='text-2xl md:text-4xl font-bold'>Experience</h3>
          </motion.div>
          <div>
            <div className='relative timeline mx-auto'>
              {
                experiences.map((experience, index) => (
                  <div key={index}>
                  {
                    (index % 2) === 0
                    ?
                      <motion.div
                        variants={staggerAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true
                        }}
                        custom={index}  
                        className=' relative py-4 pl-14 md:px-10 md:w-[50%] dark:text-black'
                      >  
                        <img loading='lazy' className='w-12 absolute left-[-10px] top-[35px] md:left-auto md:right-[-25px] md:top-[32px] z-10 rounded-full ' src={experience.companyLogo} alt="" srcSet="" 
                        />
                        <div className='p-4 bg-white border-gray-200 shadow-md relative rounded-md'>
                          <p className='font-bold text-2xl'>{experience.position}</p>
                          <h3 className='font-bold'>{experience.company}</h3>
                          <small>{experience.date}</small>
                          <p className='mt-2 text-gray-600'>{experience.description}</p>
                          <img loading="lazy" src={experience.img} className='mt-4' alt="" />
                          <span className='h-0 w-0 absolute right-[-15px] top-[28px] left-[-15px] md:left-auto border-r-[15px] border-r-white md:border-r-0 border-t-[15px] border-b-[15px] md:border-l-[15px] border-t-transparent border-b-transparent md:border-l-white' ></span>
                        </div>
                      </motion.div>
                    :
                      <motion.div
                        variants={staggerAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true
                        }}
                        custom={index} 
                        className='relative left-0 py-4 pl-14 md:px-10 md:left-[50%] md:w-[50%] dark:text-black'
                      >  
                        <img loading='lazy' className='w-12 absolute left-[-10px] top-[35px] md:left-[-25px] md:right-[-20px] md:top-[32px]  z-10  rounded-full' src={experience.companyLogo} alt="" srcSet="" 
                        />
                        <div className='p-4 bg-white  shadow-md relative rounded-md'>
                          <p className='font-bold text-2xl'>{experience.position}</p>
                          <h3 className='font-bold'>{experience.company}</h3>
                          <small>{experience.date}</small>
                          <p  className='mt-2 text-gray-600'>{experience.description}</p>
                          <img loading="lazy" src={experience.img} className='mt-4' alt="" />
                          <span className='h-0 w-0 absolute left-[-15px] top-[28px] border-t-[15px] border-b-[15px] border-r-[15px] border-t-transparent border-b-transparent border-r-white' ></span>
                        </div>
                      </motion.div>
                  }
                  </div>
                ))
              }
            </div>
          </div> 
        </section>
        <section className='bg-black  text-center py-12 full-bleed-1'>
          <h3 className='text-2xl md:text-4xl font-bold text-white'>It seems I'm a perfect fit to your next project!<br /> Interested on me?</h3>
          <div className='mt-8 flex justify-center gap-2'>
            <NavLink to="/about" className='primary-button' >Read More</NavLink>
            <NavLink  to="/contact" className='secondary-button' >Contact Me</NavLink>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Home;