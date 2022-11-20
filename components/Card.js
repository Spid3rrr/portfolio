
export default function Card({children}) {
  return (
    <div id="card" className='w-4/5 md:w-3/5 h-4/5 flex flex-col place-content-center items-center 
    relative rounded-xl bg-gradient-to-br from-blue-700 via-purple-600/10 to-red-700 p-0.5 before:absolute before:inset-0 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-500 before:via-purple-500/30 before:to-red-500 before:blur-3xl
    '>
    <div id="inner-card" className='flex flex-col justify-around relative z-10 h-full w-full rounded-xl bg-black px-8 py-8 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br before:from-blue-900/25 before:via-black before:to-red-900/25 sm:px-12 sm:py-12'>
            {children}
    </div>
    </div>
  )
}
