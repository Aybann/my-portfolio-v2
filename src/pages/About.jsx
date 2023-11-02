import profileImage from '../assets/profile-pic.jpg'
import gradImage from '../assets/grad-pic.jpg'
import { motion } from 'framer-motion';
import { staggerAnimation, fadedBounceAnimation, introAnimationOne, introAnimationTwo, introAnimationThree } from '../utils/variantsAnimation';

const About = ({skills, experiences}) => {
  return ( 
    <>
     <header className="pt-24 md:pb-12 md:py-32">
      <div className="relative flex flex-col md:flex-row  gap-8 items-center justify-center"> 
        <motion.div 
          variants={introAnimationOne}
          initial="hidden"
          animate="visible"
          className='h-fit md:w-[50ch] bg-gradient-to-r from-violet-500 to-purple-500 shadow-md p-8 rounded-md z-20 md:absolute right-0 -bottom-10'
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white">Not just a front-end developer. A <span className="bg-gray-500 bg-opacity-[0.8] italic">Passionate</span> Frontend Developer</h1>
          <p className="py-8 text-gray-200">
            I am a passionate frontend developer with a keen eye for detail and a love for creating visually stunning and user-friendly websites.I bring web designs to life while ensuring they are responsive and optimized for an exceptional user experience.
          </p>
        </motion.div>
        <motion.div 
          variants={introAnimationTwo}
          initial="hidden"
          animate="visible"
          className='border-2 border-black rounded-md w-auto mt-4 ml-6 md:ml-0 md:w-[600px] dark:border-white'
        >
          <img loading='lazy' className='-translate-y-5 -translate-x-5 w-auto md:w-[600px] rounded-md' src={profileImage} alt="" />
        </motion.div>
        <motion.div 
          variants={introAnimationThree}
          initial="hidden"
          animate="visible"
          className=' h-fit md:w-[50ch] md:bg-gradient-to-r from-violet-500 to-purple-500 md:shadow-md p-8 rounded-md md:absolute -top-10 left-0 z-10'
        >
          <h1 className="text-3xl md:text-5xl  font-bold md:text-white">Not just a front-end developer. A <span className="bg-gray-500 bg-opacity-[0.8] italic">Creative</span> Frontend Developer</h1>
          <p className="py-8 md:text-gray-200">
          I'm a creative frontend developer with a passion for turning ideas into interactive and visually appealing web experiences. I thrive in collaborative environments where I can bring innovative ideas to the table and work tirelessly to turn them into digital reality. Let's collaborate and bring your web projects to life!
          </p>              
        </motion.div>
      </div>
     </header>
     <section className='mt-8 md:mt-20'>
      <motion.div 
        variants={fadedBounceAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true
        }}
        className='md:my-8 flex flex-col-reverse gap-2 md:flex-row items-center justify-start relative'
      >
        <div className='md:w-[70ch] md:absolute right-10 bottom-10 z-20 bg-gradient-to-r from-violet-500 to-purple-500 md:shadow-md p-8 rounded-md'>
          <h2 className='text-3xl md:text-5xl font-bold mb-4 text text-white'>Computer Science Graduate with a Passion for Innovation</h2>
          <p className='text-gray-200'>
            I am a recent Bachelor of Science in Computer Science graduate, equipped with a strong academic foundation and an unquenchable thirst for innovation. My educational journey has not only provided me with a deep understanding of computer science principles but has also ignited a passion for solving complex problems through technology. Beyond my technical prowess, I bring a set of invaluable soft skills to the table. I pride myself on my strong analytical mindset, allowing me to dissect intricate challenges and devise effective solutions. My adaptability shines through in my ability to quickly learn and apply new technologies, ensuring that I stay at the forefront of the ever-evolving tech landscape. Effective communication is a cornerstone of my work, enabling me to collaborate seamlessly with cross-functional teams and translate technical jargon into understandable terms.
          </p>
          <div className='md:hidden border-2 border-white rounded-md w-full mt-6'>
            <img loading='lazy' className='-translate-y-4 -translate-x-4 w-full rounded-md' src={gradImage} alt="" />
          </div>
        </div>
        <div className='hidden md:block border-2 border-black rounded-md w-[600px] dark:border-white'>
          <img loading='lazy' className='-translate-y-5 -translate-x-5 w-[600px] rounded-md' src={gradImage} alt="" />
        </div>
      </motion.div>
      <div>
        <ul className='flex justify-center flex-wrap py-10 gap-4 max-w-[480px] mx-auto'>
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
                className='flex justify-center gap-2 border border-gray-200 rounded-sm p-2 bg-white shadow-md dark:text-black'
              >
                {
                  (index % 2) === 0
                  ? <img loading='lazy' className='w-6' src={skill.icon} alt="" srcSet="" />
                  : <img loading='lazy' className='w-6' src={skill.icon} alt="" srcSet="" />
                }
                <span className='font-semibold'>{skill.name}</span>
              </motion.li>
            ))
          }
        </ul>
      </div>
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
                    <img loading='lazy'className='w-12 absolute left-[-10px] top-[35px] md:left-auto md:right-[-25px] md:top-[32px] z-10 rounded-full ' src={experience.companyLogo} alt="" srcSet="" 
                    />
                    <div className='p-4 bg-white border-gray-200 shadow-md relative rounded-md'>
                      <p className='font-bold text-2xl'>{experience.position}</p>
                      <h3 className='font-bold'>{experience.company}</h3>
                      <small>{experience.date}</small>
                      <p className='mt-2 text-gray-600'>{experience.description}</p>
                      <img src={experience.img} className='mt-4' alt="" />
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
                    <div className='p-4 bg-white shadow-md relative rounded-md'>
                      <p className='font-bold text-2xl'>{experience.position}</p>
                      <h3 className='font-bold'>{experience.company}</h3>
                      <small>{experience.date}</small>
                      <p  className='mt-2 text-gray-600'>{experience.description}</p>
                      <img src={experience.img} className='mt-4' alt="" />
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
    </>
  );
}
 
export default About;