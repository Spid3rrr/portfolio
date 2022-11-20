import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import  styles  from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className='flex flex-row justify-between pt-3'>
    <div id="title" className={`text-center center font-sans md:text-3xl text-xl block ml-5`}>Amine Braham</div>
    <div id="socials" className='md:block hidden'>
    <a href="https://twitter.com/sp1d3rrr" className='mx-4'><FontAwesomeIcon icon={faTwitter} size="2x" className={styles.twitter} />
    </a>
    <a href="https://www.linkedin.com/in/amine-braham/" className='mx-4'><FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.linkedin} />
    </a>
    <a href="https://github.com/Spid3rrr" className='mx-4'><FontAwesomeIcon icon={faGithub} size="2x" className={styles.github} />
    </a>
    </div>
    <div id="socials" className='md:hidden block mt-1'>
    <a href="https://twitter.com/sp1d3rrr" className='mx-3' ><FontAwesomeIcon icon={faTwitter} size="1x" className={styles.twitter} />
    </a>
    <a href="https://www.linkedin.com/in/amine-braham/" className='mx-3'><FontAwesomeIcon icon={faLinkedin} size="1x" className={styles.linkedin} />
    </a>
    <a href="https://github.com/Spid3rrr" className='mx-3'><FontAwesomeIcon icon={faGithub} size="1x" className={styles.github} />
    </a>
    </div>
    </header>
  )
}
