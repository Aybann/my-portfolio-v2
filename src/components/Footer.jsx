import gitHubIcon from '../assets/programming icons/github.png'
import linkedinIcon from '../assets/programming icons/linkedin.png'
import phoneIcon from '../assets/bxs-phone.svg'
import emailIcon from '../assets/bxs-envelope.svg'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return ( 
    <footer className="pt-6 px-4 md:px-20">
      <div className="text-xl md:text-4xl italic font-bold my-4">
        <a href="#">Ivan.</a>
      </div>    
      <div>
        <nav className="flex flex-col justify-between md:flex-row gap-10">
          <address>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2">
                <img className='w-5 dark:invert' src={phoneIcon} alt="" srcset="" />
                09755144526
              </li>
              <li className="flex gap-2">
                <img className='w-5 dark:invert' src={emailIcon} alt="" srcset="" />
                <a href="mailto:ivanray.n.castillo@gmail.com">
                  ivanray.n.castillo@gmail.com
                </a>
              </li> 
            </ul>
          </address>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          {/* <ul className="flex flex-col  gap-2">
            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
            <li><NavLink to="/terms">Terms of Services</NavLink></li>
          </ul> */}
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
        </nav>
      </div>
      <div>
      <p className="text-center mt-10 text-gray-600">© 2023 Ivan. All rights reserved.</p>
      </div>
    </footer>
  );
}
 
export default Footer;