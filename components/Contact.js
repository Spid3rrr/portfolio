
export default function Contact() {
  return (
    <div className="h-[92vh] flex justify-center flex flex-col">
        <div className='text-center pt-5 text-2xl text-amber-500 pb-12'>Any idea, question or suggestion ?
         <p className="text-3xl text-amber-600">Contact me !</p>
        </div>
        
        <form>
        <div className="flex flex-col justify-center center items-center font-sans">
        <label className="mb-3">Name :</label>
        <input className="w-56 pl-2 mb-3 border-2 border-slate-500 " type="text"/>
        <label className="mb-3">Email :</label>
        <input className="w-56 pl-2 mb-3 border-2 border-slate-500" type="email"/>
        <label className="mb-3">Message :</label>
        <textarea className="mb-12 border-2 border-slate-500"/>
        <div className="flex flex-row">
        <button type="submit" className="rounded-full bg-sky-500 text-white w-fit px-3 m-3 transition duration-500 hover:bg-white hover:text-sky-500">Submit</button>
        <button type="reset" className="rounded-full bg-sky-500 text-white w-fit px-3 m-3 transition duration-500 hover:bg-white hover:text-sky-500">Reset</button>
        </div>
        </div>
        </form>
        
    </div>
  )
}
