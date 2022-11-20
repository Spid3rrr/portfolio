import  styles  from "../styles/Introduction.module.css";
import Image from 'next/image';
import profilePic from '../public/profilepic.jpg'
import Card from "./Card";

export default function Introduction() {
  return (
  <div className="h-screen flex flex-col items-center justify-center center">
    <Card>
    <div className='text-center pt-5 text-sky-400 text-2xl'>WELCOME !</div>
    <div className="h-[80vh] flex flex-col md:flex-row items-center md:justify-between justify-around center">
    <div id="description" className="text-lg md:text-base pb-2 md:pb-0 md:w-2/5 md:pr-3">
    Hello there !
    <p>I'm <span className="text-sky-400">Amine Braham</span> ! I love coding and building stuff. I'm passionate about learning
      everything related to tech, from <span className="text-sky-400">full-stack 
      development</span>, to <span className="text-sky-400">mobile apps</span> and <span className="text-sky-400">games</span>, 
      <span className="text-sky-400">chatbots</span>, <span className="text-sky-400">AI</span> and more !
      I'm always looking for new projects to tackle and to test new technologies !
    </p>
    </div>
    <div id="image" className="w-full md:w-3/5">
    <Image 
    src={profilePic}
    layout="responsive"
    className="" alt="profile img" 
    />
    </div>
    </div>
    </Card>
  </div>
  )
}
