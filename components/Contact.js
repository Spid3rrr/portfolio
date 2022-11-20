
export default function Contact() {
  return (
    <div className="h-[92vh] flex justify-center flex flex-col">
        <div className='text-center pt-5 text-sky-400 text-2xl'>Any idea, question or suggestion ?
         <p className="text-3xl">Contact me !</p>
        </div>
        
        <form>
        <div className="h-[80vh] flex flex-col text-white justify-center center items-center font-sans">
        <label className="mb-3">Name :</label>
        <input className="w-56 pl-2 mb-3" type="text"/>
        <label className="mb-3">Email :</label>
        <input className="w-56 pl-2 mb-3" type="email"/>
        <label className="mb-3">Message :</label>
        <textarea className="mb-12"/>
        <div className="flex flex-row">
        <button type="submit" className="rounded-full bg-sky-500 text-white w-fit px-3 m-3 transition duration-500 hover:bg-white hover:text-sky-500">Submit</button>
        <button type="reset" className="rounded-full bg-sky-500 text-white w-fit px-3 m-3 transition duration-500 hover:bg-white hover:text-sky-500">Reset</button>
        </div>
        </div>
        </form>
        
    </div>
  )
}
