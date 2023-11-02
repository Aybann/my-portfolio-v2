import vieIcon from '../assets/view.png'
import codeIcon from '../assets/bx-code-alt.svg'


const Cards = ({ project }) => {
  return ( 
    <div className='md:flex flex-row-reverse gap-2 relative' >   
      <img loading='lazy' className='w-full h-72 object-cover overflow-hidden rounded-md md:basis-1/2' src={project.image} alt="" srcSet="" />
      <div className='p-6 md:basis-1/2'>
        <span className='text-2xl font-bold'>{project.title}</span>
        <p className='py-4 text-gray-600 text-sm dark:text-gray-400'>{project.description}</p>
        <ul className='flex items-center gap-2'>
          {
            project.techStack.map((stack, index) => (
              <li key={index} >
                <img className='w-6' src={stack}/>
              </li> 
            ))
          }
        </ul>
        <div className='flex gap-4 mt-4'>
          <a href={project.demo} target='_blank' className="text-sm flex items-center gap-2 primary-button">
            Demo
            <img className='invert' src={vieIcon} alt="" />
          </a>
          <a  href={project.code} target='_blank' className="text-sm flex items-center gap-2 secondary-button">
            Code
            <img src={codeIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
 
export default Cards;