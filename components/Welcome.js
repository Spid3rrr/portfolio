import Typewriter from 'typewriter-effect';

export default function Welcome() {
  return (
    <div className="w-full h-[93vh] text-center items-center pb-20 text-2xl md:text-3xl  flex flew-row nowrap justify-center font-sans">
    
    <div className="text-blue-400">&lt;</div>
    <Typewriter
    options={{
        strings: ['Welcome to my website !', 'I`m sure you`ll have a great time'],
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
  )
}
