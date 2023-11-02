import Cards from "../components/Cards";
import { motion } from 'framer-motion';
import { fadedBounceAnimation } from '../utils/variantsAnimation';

const Projects = ({projects}) => {
  return ( 
    <div className="py-28 relative">
      <motion.div 
        variants={fadedBounceAnimation}
        initial="hidden"
        animate="visible"
        className='mb-8'
      >
         <h1 className="text-3xl md:text-5xl font-bold">Awesome Projects</h1>
         <p className="md:w-[50ch] mt-4">Exploring the Art of Front-End Developments: Showcasing My Projects</p>
      </motion.div>
      <div className="py-4">
        <div className="grid gap-8">
          {
            projects.map((project, index) => (
              <motion.div 
                variants={fadedBounceAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true
                }}
                
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
    </div>
  );
}
 
export default Projects;