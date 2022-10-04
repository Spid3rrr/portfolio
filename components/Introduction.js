import  styles  from "../styles/Introduction.module.css";
import Image from 'next/image';
import profilePic from '../public/profilepic.jpg'

export default function Introduction() {
  return (
  <div className="h-screen flex flex-col items-center justify-center center">
    <div className='text-center pt-5 text-sky-400 text-2xl'>About Me</div>
    <div className="h-[80vh] flex flex-col md:flex-row items-center justify-center center">
    
    <div id="image" className="w-4/5 md:w-2/5">
    <Image 
    src={profilePic}
    layout="responsive"
    className="" alt="profile img" 
    />
    </div>
    <div id="description" className="mx-12 mt-5 text-lg md:text-base md:w-2/5 border-sky-600 border-t-2 pt-5 md:pt-0 md:border-l-4 md:pl-12 md:border-t-0 ">
    Hello there !
    <p>I'm Amine Braham ! I love coding and building stuff. I'm passionate about learning
      everything related to tech, from full-stack 
      development, to mobile apps and games, chatbots and AI and more !
      I'm always looking for new projects to tackle and to test new technologies !
    </p>
    </div>
    </div>
  </div>
  )
}
