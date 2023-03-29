import Typewriter from 'typewriter-effect';
import  styles  from "../styles/Header.module.css";

export default function Welcome() {
  return (
    <div className='w-full h-[93vh] flex flex-col place-content-center items-center'>
    <div id="title" className={`flex flex-col text-center center font-sans md:text-[60px] text-[40px] block ${styles.title}`}>Amine Braham</div>
    <div className="text-center items-center text-xl md:text-2xl flex flew-row nowrap justify-center font-sans">
    <div className="text-blue-400">&lt;</div>
    <Typewriter
    options={{
        strings: ['Ambitious Software Engineer', 'Building future technology'],
        autoStart: true,
        loop: true,
        pauseFor:4000,
        delay:75,
        deleteSpeed:25,
        delayStart:2000
    }}
    />
    <div className="text-blue-400">/&gt;</div>
    </div>
    <div id="buttonContainer" className='flex flex-row justify-around pt-5'>
      <button className="text-base md:text-lg mx-2 rounded-full border-2 border-black dark:border-white  md:px-3 px-2 whitespace-nowrap hover:text-white hover:bg-red-600 transition duration-500"><a download href="/Amine_Braham_CV.pdf" > My Resume </a></button>
      <button className="text-base md:text-lg mx-2 rounded-full border-2 border-black dark:border-white  md:px-3 px-2 hover:border-blue-500 hover:text-white transition hover:bg-blue-500 duration-500"><a href="https://www.linkedin.com/in/amine-braham/" > LinkedIn </a></button>
      <button className="text-base md:text-lg mx-2 rounded-full border-2 border-black dark:border-white  md:px-3 px-2 whitespace-nowrap hover:text-white hover:bg-amber-600 transition duration-500"><a href="mailto:braham.amine@outlook.com" > Contact Me </a></button>     
    </div>
    </div>
  )
}
